import type { Recordable } from '@low-code/core';

export default class StateCore {
  private state = {};
  private listeners = new Map<string, Set<Function>>();

  constructor(state: Recordable) {
    this.state = state;
  }

  getState() {
    return this.state;
  }

  setState(key: string, value: any) {
    this.state[key] = value;
    this.listeners.get(key)?.forEach((listener) => listener(value));
  }

  registerListener(key: string, listener: Function) {
    if (!this.listeners.has(key)) {
      this.listeners.set(key, new Set());
    }
    this.listeners.get(key)!.add(listener);
  }
}
