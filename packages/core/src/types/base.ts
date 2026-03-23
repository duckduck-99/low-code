export type Recordable<T = any> = Record<string, T>;

export type Nullable<T> = T | null;

export type Maybe<T> = T | null | undefined;

export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

export type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P];
};

export type Fn<R = void> = (...args: any[]) => R;

export type PromiseFn<R = void> = (...args: any[]) => Promise<R>;

export type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};
