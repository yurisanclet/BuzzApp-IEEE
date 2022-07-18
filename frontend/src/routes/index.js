import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Welcome from '../screens/welcome'
import SignIn from '../screens/signIn'
import SignUp from '../screens/signUp'
import CreateProfile from "../screens/createProfile";

const Stack = createNativeStackNavigator();

export default function Routes (){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{headerShown: false}}
            />

            <Stack.Screen
                name="SignIn"
                component={SignIn}
                options={{headerShown: false}}
            />

            <Stack.Screen
                name="SignUp"
                component={SignUp}
                options={{headerShown: false}}
            />

            <Stack.Screen
                name="CreateProfile"
                component={CreateProfile}
                options={{headerShown: false}}
            />

        </Stack.Navigator>
    )
}