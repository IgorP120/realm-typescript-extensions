import Realm from "./realm";
import { customerSchema } from "./realm-schema";
import { Customer } from "./entities";

export function getCustomerById(customerId: number) {
  return Realm.objectForPrimaryKey<Customer>(customerSchema.name, customerId);
}

