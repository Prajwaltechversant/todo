import { createRealmContext } from "@realm/react";
import Realm from "realm";
import { ObjectId } from 'bson';

export class Devices extends Realm.Object {

    static schema =
        {
            name: 'Devices',
            primaryKey: '_id',
            properties: {
                device_id: { type: 'string' },
                _id: { type: 'objectId', default: () => new ObjectId(), indexed: true },
                user_id: { type: 'string' },
            },
        };



}


