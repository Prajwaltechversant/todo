import { Devices } from "./Model/Devices";
import { Videos } from "./Model/Videos";

export const config = {
    schema: [Videos,Devices ],
    schemaVersion: 1
  };
  
  const { RealmProvider } = createRealmContext(config);