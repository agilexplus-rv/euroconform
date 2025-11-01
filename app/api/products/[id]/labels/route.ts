import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { generateSVGLabel, generatePDFLabel } from '@/lib/label';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const searchParams = request.nextUrl.searchParams;
    const format = searchParams.get('format') || 'svg';

    // Fetch product
    const product = await prisma.product.findUnique({
      where: { id },
      include: {
        designation: {
          include: {
            organisation: true,
          },
        },
      },
    });

    if (!product) {
      return NextResponse.json(
        { error: 'Product not found' },
        { status: 404 }
      );
    }

    // Generate label
    const labelData = {
      uniqueCode: product.uniqueCode,
      productName: product.name,
      model: product.model || undefined,
      euAddress: 'Malta', // TODO: Get from organisation or config
    };

    if (format === 'pdf') {
      const pdfBuffer = await generatePDFLabel(labelData);
      return new NextResponse(pdfBuffer as any, {
        headers: {
          'Content-Type': 'application/pdf',
          'Content-Disposition': `attachment; filename="product-${product.uniqueCode}.pdf"`,
        },
      });
    } else {
      const svg = await generateSVGLabel(labelData);
      return new NextResponse(svg, {
        headers: {
          'Content-Type': 'image/svg+xml',
          'Content-Disposition': `attachment; filename="product-${product.uniqueCode}.svg"`,
        },
      });
    }
  } catch (error) {
    console.error('Failed to generate label:', error);
    return NextResponse.json(
      { error: 'Failed to generate label' },
      { status: 500 }
    );
  }
}

