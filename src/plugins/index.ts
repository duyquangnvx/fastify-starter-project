import { FastifyInstance } from 'fastify';
import fp from 'fastify-plugin';
import corsPlugin from './cors.plugin';
import swaggerPlugin from './swagger.plugin';

const plugins = fp(async (fastify: FastifyInstance) => {
    await fastify.register(corsPlugin);
    await fastify.register(swaggerPlugin);
});

export default plugins;