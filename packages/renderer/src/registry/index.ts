import type { ComponentType } from 'react';

import { LcText, LcButton, LcContainer } from '@low-code/components';

class ComponentRegistry {
  private components = new Map<string, ComponentType>();

  register(name: string, component: ComponentType) {
    this.components.set(name, component);
  }

  get(name: string): ComponentType | null {
    return this.components.get(name) || null;
  }
}

const registry = new ComponentRegistry();

registry.register('LcText', LcText);
registry.register('LcButton', LcButton);
registry.register('LcContainer', LcContainer);

export default registry;
