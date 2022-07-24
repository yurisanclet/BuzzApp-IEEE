import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Welcome from '../screens/welcome'
import SignIn from '../screens/signIn'
import SignUp from '../screens/signUp'
import CreateProfile from "../screens/createProfile"
import PrivChat from "../screens/priv"
import PubliChat from "../screens/publi"
import Menu from "../screens/menu"
// import EditProfile from "../screens/editProfile"
// import NewContact from "../screens/newContact"
// import NewGroup from "../screens/newGroup" // ver se esta funcionando dps


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

            <Stack.Screen
                name="PrivChat"
                component={PrivChat}
                options={{headerShown: false}}
            />

            <Stack.Screen
                name="PubliChat"
                component={PubliChat}
                options={{headerShown: false}}
            />

            <Stack.Screen
                name="Menu"
                component={Menu}
                options={{headerShown: false}}
            />
            /*
            <Stack.Screen
                name="EditProfile"
                component={EditProfile}
                options={{headerShown: false}}
            />
            
            <Stack.Screen
                name="NewContact"
                component={NewContact}
                options={{headerShown: false}}
            />
            
            <Stack.Screen
                name="NewGroup"
                component={NewGroup}
                options={{headerShown: false}}
            />
            */
        </Stack.Navigator>
    )
}
