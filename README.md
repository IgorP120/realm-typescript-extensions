# Typescript Extensions for Realm Database

Use RealmSchema generic type to create strongly-typed Realm database schemas to enforce compile-time synchronization with domain models.

## Example

<video width="320" height="240" controls>
  <source src="video/realm-ts-sample1.mp4" type="video/mp4">
</video>

![video](video/realm-ts-sample1.mp4)

```typescript
import { Nullable } from '../lib/generic.types';

export type EntityName = "Customer" | "Product" | "Order" | "OrderItem";

export type EntityNameOpt = "Customer?" | "Product?" | "Order?" | "OrderItem?" 

export interface Customer {
  id: number;
  readonly name: string;
  readonly address: string;
  readonly email?: string;
  readonly phone: Nullable<string>;
  readonly deleted?: boolean;
}

export interface Product {
  readonly id: number;
  readonly name: string;
  readonly description: Nullable<string>;
  readonly price: number;
  readonly inStock: boolean;
  readonly sku: Nullable<string>;
}

export interface Order {
  readonly id: number;
  readonly date: Date;
  readonly customer: Nullable<Customer>;
  readonly shipped: Nullable<boolean>;
}

export interface OrderItem {
  readonly order: Order;
  readonly product: Product;
  readonly amount: number;
}

import { RealmSchema } from '../lib/realm-schema.types';
import { EntityName, Customer, Order, EntityNameOpt } from './entities';

interface Schema<TEntity extends object> extends RealmSchema<TEntity, EntityName, EntityName | EntityNameOpt> {};   

export const customerSchema: Schema<Customer> = {
  name: "Customer",
  primaryKey: "id",
  properties: {
    id: "int",
    name: "string",
    email: "string",
    address: "string",
    phone: "string?"
  }
};

export const orderSchema: Schema<Order> = {
  name: "Order",
  primaryKey: "id",
  properties: {
    id: "int",
    date: "date",
    customer: "Customer?",
    shipped: "bool?"
  }
};

export const productSchema: Schema<Product> = {
  name: "Product",
  primaryKey: "id",
  properties: {
    id: "int",
    name: "string",
    description: "string?",
    price: "double",
    inStock: "bool",
    sku: "string?"
  }
};

export const orderItemSchema: Schema<OrderItem> = {
  name: "OrderItem",
  properties: {
    order: "Order",
    product: "Product",
    amount: "float"
  }
};

