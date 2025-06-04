import { FastifyInstance } from 'fastify';
import apiRoutes from './api.routes';
import userRoutes from './user.routes';

export default async function routes(app: FastifyInstance) {
    // Register routers
    await app.register(apiRoutes, { prefix: '/api' });
    // await app.register(userRoutes, { prefix: '/users' });
};
