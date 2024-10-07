import { Alert, Text, View } from "react-native";
import { ForgotPasswordComponent } from 'komo-module'

export default function Forgot()  {

  const handleResetPassord =(email : string,channelId : string) =>{
    Alert.alert(`Reset Password Info`,`Username : ${email}, Channel Id : ${channelId}`)
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
      <ForgotPasswordComponent
        onResetPassword={handleResetPassord}
        backgroundColor="#f0f0f0"
        fontSize={16}
        channelId="123">
       </ForgotPasswordComponent> 
    </View>
  );
}
