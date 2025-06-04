import { FastifyInstance } from 'fastify';
import fp from 'fastify-plugin';

const apiRoutes = fp(async (app: FastifyInstance) => {
    app.get('/public', async (request, reply) => {
        return { message: 'This is a public endpoint' };
    });

    app.get('/protected', async (request, reply) => {
        return { message: 'This is a protected endpoint', secret: 'Some sensitive data' };
    });
});

export default apiRoutes;