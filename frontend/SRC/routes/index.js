import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Welcome from '../screens/welcome'
import SignIn from '../screens/signIn'
import SignUp from '../screens/signUp'
import CreateProfile from '../screens/createProfile'
import PrivChat from '../screens/priv'
import PubliChat from '../screens/publi'
import Menu from '../screens/menu'
import EditProfile from '../screens/editProfile'
import NewContact from '../screens/newContact'
import NewGroup from '../screens/newGroup'
import ChatPublico from '../screens/ChatPublico'
import ChatScreenBianca from '../screens/ChatScreenBianca'
import ChatScreenGabriel from '../screens/ChatScreenGabriel'
import ChatScreenIsa from '../screens/ChatScreenIsa'
import ChatScreenMateus from '../screens/ChatScreenMateus'
import ChatScreenTerencio from '../screens/ChatScreenTerencio'
import ChatScreenYuri from '../screens/ChatScreenYuri'

const Stack = createNativeStackNavigator()

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="CreateProfile"
        component={CreateProfile}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="PrivChat"
        component={PrivChat}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="PubliChat"
        component={PubliChat}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Menu"
        component={Menu}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="NewContact"
        component={NewContact}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="NewGroup"
        component={NewGroup}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="ChatScreenBianca"
        component={ChatScreenBianca}
        options={{ headerShown: false }}
      />
    
    <Stack.Screen
        name="ChatScreenGabriel"
        component={ChatScreenGabriel}
        options={{ headerShown: false }}
    />
    <Stack.Screen
        name="ChatScreenIsa"
        component={ChatScreenIsa}
        options={{ headerShown: false }}
    />
    
    <Stack.Screen
        name="ChatScreenMateus"
        component={ChatScreenMateus}
        options={{ headerShown: false }}
    />

    <Stack.Screen
        name="ChatScreenTerencio"
        component={ChatScreenTerencio}
        options={{ headerShown: false }}
    />

    <Stack.Screen
        name="ChatScreenYuri"
        component={ChatScreenYuri}
        options={{ headerShown: false }}
    />

    <Stack.Screen
        name="ChatPublico"
        component={ChatPublico}
        options={{ headerShown: false }}
    />

    </Stack.Navigator>
  )
}
