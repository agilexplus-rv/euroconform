import Redis from 'ioredis';

const getRedisClient = () => {
  if (!process.env.REDIS_URL) {
    throw new Error('REDIS_URL is not set');
  }

  const client = new Redis(process.env.REDIS_URL, {
    maxRetriesPerRequest: null,
  });

  client.on('error', (err) => {
    console.error('Redis Client Error:', err);
  });

  return client;
};

export const redis = getRedisClient();

