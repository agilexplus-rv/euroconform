import { prisma } from './prisma';
import type { EventType } from '@prisma/client';
import { Prisma } from '@prisma/client';

interface AuditLogParams {
  userId?: string;
  type: EventType;
  entity: string;
  entityId: string;
  action: string;
  changes?: Prisma.InputJsonValue;
  ipAddress?: string;
  userAgent?: string;
}

export async function createAuditLog(params: AuditLogParams) {
  try {
    await prisma.eventLog.create({
      data: {
        userId: params.userId,
        type: params.type,
        entity: params.entity,
        entityId: params.entityId,
        action: params.action,
        changes: params.changes ?? Prisma.DbNull,
        ipAddress: params.ipAddress,
        userAgent: params.userAgent,
      },
    });
  } catch (error) {
    console.error('Failed to create audit log:', error);
    // Don't throw - audit logging shouldn't break the main operation
  }
}

export async function getAuditLogs(params: {
  userId?: string;
  entity?: string;
  entityId?: string;
  limit?: number;
  offset?: number;
}) {
  return prisma.eventLog.findMany({
    where: {
      ...(params.userId && { userId: params.userId }),
      ...(params.entity && params.entityId && { 
        entity: params.entity, 
        entityId: params.entityId 
      }),
    },
    orderBy: { timestamp: 'desc' },
    take: params.limit || 100,
    skip: params.offset || 0,
    include: {
      user: {
        select: {
          email: true,
          firstName: true,
          lastName: true,
        },
      },
    },
  });
}

