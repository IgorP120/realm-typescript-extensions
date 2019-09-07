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



