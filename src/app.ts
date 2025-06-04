import Fastify, { FastifyInstance } from 'fastify';
import fastifyEnv from '@fastify/env';
import { envSchema } from './config/env';
import plugins from './plugins';
import routes from './routes';

export async function buildApp(): Promise<FastifyInstance> {
    const app = Fastify({ logger: true });

    await app.register(fastifyEnv, { schema: envSchema, dotenv: true, confKey: 'config' });

    await app.register(plugins);

    await app.register(routes);

    return app;
};