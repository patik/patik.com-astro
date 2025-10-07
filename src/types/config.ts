import type { z } from 'zod';
import type { configClientSchema, configServerSchema, processEnvSchema } from '../schemas/config';

type ConfigServerSchemaType = typeof configServerSchema;
export type ConfigServerType = z.infer<ConfigServerSchemaType>;

type ConfigClientSchemaType = typeof configClientSchema;
export type ConfigClientType = z.infer<ConfigClientSchemaType>;

type ProcessEnvSchemaType = typeof processEnvSchema;
export type ProcessEnvType = z.infer<ProcessEnvSchemaType>;
