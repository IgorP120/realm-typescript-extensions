import { NullablePropertiesOf } from './generic.types';

/** Get the corresponding required (non-optional) Realm type string for the given TFieldType.
 * TEntityName constraint specifies the allowed Realm entity (table) names; by default can be any string.
 * Examples:
 * 1) For TFieldType = string returns "string"
 * 2) For TFieldType = number returns "int" | "double" | "float"
 */
type RealmTypeName<TFieldType, TEntityName extends string = string> = 
  TFieldType extends string
    ? "string"
    : TFieldType extends number
      ? "int" | "double" | "float"
      : TFieldType extends boolean
        ? "bool"
        : TFieldType extends Date
          ? "date"
          : TFieldType extends object
            ? TEntityName
            : never;

/** Get the corresponding optional Realm type string for the given TFieldType.
 * TEntityName constraint specifies the allowed Realm entity (table) names; by default can be any string.
 * Examples:
 * 1) For TFieldType = string returns "string?"
 * 2) For TFieldType = number returns "int?" | "double?" | "float?"
 */
type RealmTypeNameOpt<TFieldType, TEntityName extends string> = 
  TFieldType extends string
    ? "string?"
    : TFieldType extends number
      ? "int?" | "double?" | "float?"
      : TFieldType extends boolean
        ? "bool?"
        : TFieldType extends Date
          ? "date?"
          : TFieldType extends object
            ? TEntityName
            : never;

type RealmType<T extends object, PType, K extends keyof T, TEntityName extends string> =
  K extends NullablePropertiesOf<T>
    ? RealmTypeNameOpt<PType, TEntityName>
    : RealmTypeName<PType, TEntityName>;

/** Does not include partial (optional) fields, i.e. fields marked with "?" */
type RealmFields<T extends object, TEntityName extends string> = {
  readonly [K in keyof T]: RealmType<T, T[K], K, TEntityName>;
};

/** Same as RealmFields<T>, but also includes all partial (optional) fields, i.e. marked with "?" */
type RealmFieldsIncludingPartial<T extends object, TEntityName extends string> = {
  readonly [K in keyof T]-?: RealmType<T, T[K], K, TEntityName>;
};

/** Strongly-typed Realm schema definition */
export interface RealmSchema<TEntity extends object, TEntityName extends string, TEntityNameOpt extends string> {
  readonly name: TEntityName;
  readonly properties: RealmFields<TEntity, TEntityName | TEntityNameOpt>;
  readonly primaryKey?: keyof TEntity;
}
