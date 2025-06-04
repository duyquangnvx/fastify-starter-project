import { FastifyInstance } from 'fastify';

export default async function apiRoutes(app: FastifyInstance) {
    app.get('/public', async (request, reply) => {
        return { message: 'This is a public endpoint' };
    });

    app.get('/protected', async (request, reply) => {
        return { message: 'This is a protected endpoint', secret: 'Some sensitive data' };
    });
}