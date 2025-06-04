
import { FastifyInstance } from 'fastify';
import swagger from '@fastify/swagger';
import swaggerUi from '@fastify/swagger-ui';

export default async function swaggerPlugin(app: FastifyInstance) {
    // Register swagger
    await app.register(swagger, {
        swagger: {
            info: {
                title: 'API Documentation',
                description: 'API documentation',
                version: '1.0.0'
            },
            host: `${app.config.HOST}:${app.config.PORT}`,
            schemes: ['http'],
            consumes: ['application/json'],
            produces: ['application/json'],
        }
    });

    // Register swagger ui
    await app.register(swaggerUi, {
        routePrefix: '/swagger',
        uiConfig: {
            docExpansion: 'list',
            deepLinking: false,
            tryItOutEnabled: true,
            supportedSubmitMethods: ['get', 'put', 'post', 'delete', 'options', 'head', 'patch'],
            validatorUrl: null,
            displayRequestDuration: true
        },
        staticCSP: false,
        transformSpecification: (swaggerObject, request, reply) => {
            return swaggerObject;
        },
        transformSpecificationClone: true
    });
};