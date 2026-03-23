import type { ComponentSchema } from './types';

export class LowCodeCore {
  private components: Map<string, ComponentSchema> = new Map();

  register(component: ComponentSchema): void {
    this.components.set(component.id, component);
  }

  getComponent(id: string): ComponentSchema | undefined {
    return this.components.get(id);
  }

  getAllComponents(): ComponentSchema[] {
    return Array.from(this.components.values());
  }
}
