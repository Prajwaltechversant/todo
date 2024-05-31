import { createRealmContext, useAuth } from "@realm/react";
import Realm from "realm";
import { ObjectId } from 'bson';

export class Videos extends Realm.Object {


    // const user = useAuth()
  
  static schema = {
    name: 'Videos',
    primaryKey: '_id',
    properties: {
      image: { type: 'string' },
      _id: { type: 'objectId',default:()=>new ObjectId(), indexed:true } ,
      user_id:{type:'string'},
      video_url:{type:'string'},
      videoDetails:{type:'mixed'}
    },
  };
 
}


