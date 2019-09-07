export type ElementType<T extends ReadonlyArray<unknown>> = T extends ReadonlyArray<infer E> ? E : never;


/** Remove types from T that are assignable to U */ 
export type Diff<T, U> = T extends U ? never : T;  

/** Remove types from T that are not assignable to U */
export type Filter<T, U> = T extends U ? T : never;

/** Makes any type nullable */
export type Nullable<T> = null | T;

/** Remove null and undefined from T */
export type NonNullable<T> = Diff<T, null | undefined>;  

/** Extracts nullable properties of T */
export type NullablePropertiesOf<T extends object> = Exclude<
  { readonly [K in keyof T]: null extends T[K] ? K : never }[keyof T],
  never
>;

/** Extracts optional (partial) properties of T */
export type OptionalPropertiesOf<T extends object> = Exclude<
  { readonly [K in keyof T]: T extends Record<K, T[K]> ? never : K }[keyof T],
  never
>;
