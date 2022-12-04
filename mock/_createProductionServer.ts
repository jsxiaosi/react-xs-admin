import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer';

const modules: Recordable = import.meta.glob('./**/*.ts', { eager: true });

const mockModules: Recordable[] = [];
Object.keys(modules).forEach((key) => {
  if (key.includes('/_')) {
    return;
  }
  mockModules.push(...modules[key].default);
});

export function setupProdMockServer() {
  createProdMockServer(mockModules);
}
