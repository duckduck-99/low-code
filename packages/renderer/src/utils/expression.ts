/**
 * 是否是表达式
 *
 * @param v
 * @returns
 */
export function isExp(v: any) {
  return typeof v === 'string' && v.startsWith('{{') && v.endsWith('}}');
}

/**
 * 获取表达式
 *
 * @param v
 * @returns
 */
export function getExp(v: any) {
  return isExp(v) ? v.slice(2, -2).trim() : v;
}

/**
 * 表达式转换为函数
 *
 * @param v
 * @returns
 */
export function exp2fn(v: string): any {
  return new Function(
    'context',
    `
      'use strict';
      const { $v } = context;
      return ${getExp(v)};
    `
  );
}
