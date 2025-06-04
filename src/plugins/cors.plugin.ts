
import { FastifyInstance } from 'fastify';
import cors from '@fastify/cors';

export default async function corsPlugin(app: FastifyInstance) {
    // Register cors plugin
    await app.register(cors, {
        origin: '*',
        methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS', 'PATCH'],
        allowedHeaders: ['Content-Type', 'Authorization', 'x-api-key', 'X-Requested-With', 'Accept'],
        exposedHeaders: ['Content-Range', 'X-Total-Count'],
        credentials: true,
        preflightContinue: false,
        optionsSuccessStatus: 204
    });
};