export const generateId = (): string => {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};

export const isValidSchema = (schema: any): boolean => {
  return schema && typeof schema.id === 'string' && typeof schema.type === 'string';
};

export const deepClone = <T>(obj: T): T => {
  return JSON.parse(JSON.stringify(obj));
};

export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout | null = null;
  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};
