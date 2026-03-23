import type { PageSchema } from '@low-code/core';

export function prepare(schema: PageSchema) {
  const queue = [...schema.children];
  while (queue.length > 0) {
    const component = queue.shift();
    if (component) {
      Object.entries(component.props || {}).forEach(([key, value]) => {
        if (typeof value === 'string' && value.startsWith('{{')) {
          component.props[key] = new Function(
            'context',
            `
            const { $v, $m } = context;
            return ${value.slice(2, -2)}
          `,
          );
        }
      });
      queue.push(...(component.children || []));
    }
  }
}
