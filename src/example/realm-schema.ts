import { RealmSchema } from '../lib/realm-schema.types';
import { Customer, EntityName } from './entities';

export const customerSchema: RealmSchema<Customer, EntityName> = {
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

