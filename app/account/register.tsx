import { Alert, Text, View } from "react-native";
import { RegisterComponent } from 'komo-module'

export default function Register()  {

  const handleRegister =(username : string,password : string,channelId : string) =>{
    Alert.alert(`Register Info`,`Username : ${username}, Password ${password}, Channel Id : ${channelId}`)
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor :"#6c2b51"
      }}
    >
       <RegisterComponent
        onRegister={handleRegister}
        backgroundColor="#f0f0f0"
        fontSize={16}
        channelId="123">
       </RegisterComponent> 
    </View>
  );
}
