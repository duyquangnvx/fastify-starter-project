import { FastifyInstance } from 'fastify';
import fp from 'fastify-plugin';

const userRoutes = fp(async (fastify: FastifyInstance) => {
    // Ví dụ về một route có schema
    fastify.get('/users', {
        schema: {
            description: 'Lấy danh sách người dùng',
            tags: ['users'],
            response: {
                200: {
                    type: 'array',
                    items: {
                        type: 'object',
                        properties: {
                            id: { type: 'integer' },
                            name: { type: 'string' },
                            email: { type: 'string' }
                        }
                    }
                }
            }
        }
    }, async (request, reply) => {
        // xử lý logic lấy danh sách người dùng
        return [{ id: 1, name: 'User 1', email: 'user1@example.com' }];
    });
});

export default userRoutes;