import { FastifyInstance } from 'fastify';
import corsPlugin from './cors.plugin';
import swaggerPlugin from './swagger.plugin';

export default async function plugins(app: FastifyInstance) {
    // Register plugins
    await app.register(corsPlugin);
    await app.register(swaggerPlugin);
};