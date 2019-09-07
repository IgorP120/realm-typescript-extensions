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


