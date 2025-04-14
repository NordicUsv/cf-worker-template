import { defineConfig } from 'eslint/config';
import workers from '@repo/eslint-config/workers';

export default defineConfig([...workers]);
