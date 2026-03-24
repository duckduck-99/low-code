import md5 from 'md5';

export default class StyleManager {
  private $m: Map<string, string>;
  private $e: HTMLStyleElement | undefined;

  constructor() {
    this.$m = new Map();
    this.$e = undefined;
  }

  insert(cssText: string) {
    const className = `_lc_${md5(cssText).slice(0, 8)}_`;
    const cssRule = `.${className} { ${cssText} }`;
    this.$m.set(className, cssRule);
    return className;
  }

  remove(cssText: string) {
    const className = `_lc_${md5(cssText).slice(0, 8)}_`;
    this.$m.delete(className);
    return className;
  }

  appendToHead() {
    if (this.$e) return;
    this.$e = document.createElement('style');
    this.$e.textContent = Array.from(this.$m.values()).join('\n');
    document.head.appendChild(this.$e);
  }

  removeFromHead() {
    if (!this.$e) return;
    document.head.removeChild(this.$e);
    this.$e = undefined;
  }
}
