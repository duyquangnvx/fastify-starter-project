
import { FastifyInstance } from 'fastify';
import fp from 'fastify-plugin';
import cors from '@fastify/cors';

const corsPlugin = fp(async (app: FastifyInstance) => {
    await app.register(cors, {
        origin: '*',
        methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS', 'PATCH'],
        allowedHeaders: ['Content-Type', 'Authorization', 'x-api-key', 'X-Requested-With', 'Accept'],
        exposedHeaders: ['Content-Range', 'X-Total-Count'],
        credentials: true,
        preflightContinue: false,
        optionsSuccessStatus: 204
    });
})

export default corsPlugin;