import { useQuery, useRealm, useUser } from "@realm/react"
import { useState } from "react"
import { Alert } from "react-native"


export const setLoginInfo = async () => {
    
const realm = useRealm()

const user = useUser()

    if (!user.id) {
        realm.write(() => {
            realm.cre({
                device_id: user.deviceId,
                user_id: user.id
            })
        })
    }
    else {
        if (!checkPrimaryDevice) {
            Alert.alert("dfnr")
        }
        else{
            console.log("same");
        }
    }

}
const checkPrimaryDevice = async () => {
    const loginInfo = useQuery('Devices')
    console.log(loginInfo)

    const res = loginInfo.filter(item => item.device_id === user.deviceId)
    if (res) {
        return true
    }
    else {
        return false
    }
}
