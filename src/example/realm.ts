import Realm, { ObjectSchema } from "realm";

import {
  customerSchema
} from "./realm-schema";

const schema = [
  customerSchema,
] as ObjectSchema[];

const realmConfig: Realm.Configuration = { 
  schema, 
  schemaVersion: 1
};

export default new Realm(realmConfig);
