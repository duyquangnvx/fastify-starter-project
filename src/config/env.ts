export const envSchema = {
    type: 'object',
    required: ['PORT', 'HOST', 'NODE_ENV'],
    properties: {
        PORT: { type: 'number', default: 3000 },
        HOST: { type: 'string', default: '0.0.0.0' },
        NODE_ENV: { type: 'string', default: 'development' },
    },
};

export type EnvConfig = {
    HOST: string;
    PORT: number;
    NODE_ENV: string;
};