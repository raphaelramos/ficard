import { createNativeStackNavigator } from "@react-navigation/native-stack";
const UserStack = createNativeStackNavigator();

function UserStackScreen() {
  return (
    <UserStack.Navigator screenOptions={{ headerShown: false }}>
      <UserStack.Screen name="UserScreen" component={UserScreen} />
      <UserStack.Screen
        name="EditProfileScreen"
        component={EditProfileScreen}
      />
    </UserStack.Navigator>
  );
}
