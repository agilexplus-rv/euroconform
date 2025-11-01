import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { generateULID } from '@/lib/ulid';
import { createAuditLog } from '@/lib/audit';
import { EventType } from '@prisma/client';

export async function GET(request: NextRequest) {
  try {
    // TODO: Get actual user from session
    const userId = 'mock-user-id';

    // Fetch products for user's organisation
    const products = await prisma.product.findMany({
      include: {
        designation: {
          include: {
            organisation: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return NextResponse.json(products);
  } catch (error) {
    console.error('Failed to fetch products:', error);
    return NextResponse.json(
      { error: 'Failed to fetch products' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { designationId, name, model, category, description } = body;

    // TODO: Get actual user from session
    const userId = 'mock-user-id';

    // Generate unique product code
    const uniqueCode = generateULID();

    // Create product
    const product = await prisma.product.create({
      data: {
        designationId,
        name,
        model,
        category,
        description,
        status: 'DRAFT',
        uniqueCode,
      },
      include: {
        designation: true,
      },
    });

    // Log audit event
    await createAuditLog({
      userId,
      type: EventType.PRODUCT_CREATED,
      entity: 'Product',
      entityId: product.id,
      action: 'CREATE',
      changes: { name, model, category },
      ipAddress: request.headers.get('x-forwarded-for') || 'unknown',
      userAgent: request.headers.get('user-agent') || 'unknown',
    });

    return NextResponse.json(product, { status: 201 });
  } catch (error) {
    console.error('Failed to create product:', error);
    return NextResponse.json(
      { error: 'Failed to create product' },
      { status: 500 }
    );
  }
}

