import type { LcMethodSchema } from '@low-code/core';
import type { LcContext, LcMethod } from '../types';

export default class MethodCore {
  private methods = new Map<string, LcMethod>();

  register(schema: LcMethodSchema) {
    this.methods.set(schema.name, createMethod(schema.body));
  }

  invoke(name: string, context: LcContext, ...args: any[]) {
    try {
      return this.methods.get(name)!(context, ...args);
    } catch (error) {
      console.error(`Invoke method ${name} failed:`, error);
      throw error;
    }
  }

  getMethods() {
    const methods = {} as Record<string, LcMethod>;
    for (const [name, method] of this.methods) {
      methods[name] = method;
    }
    return methods;
  }

  to$m() {
    const $m = {};
    this.methods.forEach((_, name) => {
      Object.defineProperty($m, name, {
        get:
          () =>
          (context: LcContext, ...args: any[]) => {
            console.log('args', args);
            return this.invoke(name, context, ...args);
          },
        enumerable: true,
        configurable: true,
      });
    });
    return $m;
  }
}

function createMethod(body: string) {
  return new Function(
    'context',
    '...args',
    `
    const { $v, $m , $setState} = context;
    return (${body}).apply(null, args)`,
  ) as LcMethod;
}
