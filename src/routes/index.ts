import { FastifyInstance } from 'fastify';
import fp from 'fastify-plugin';
import apiRoutes from './api.routes';
import userRoutes from './user.routes';

const routes = fp(async (fastify: FastifyInstance) => {
    await fastify.register(apiRoutes);
    await fastify.register(userRoutes);
});

export default routes;