import Realm from "realm";

export type RealmQuery<T extends object = object> = Realm.Results<T & Realm.Object>;

export type RealmData<T extends object = object> = T & Realm.Object;

export type RealmCollection<T extends object = object> = Realm.Collection<RealmData<T>>;
