import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "./screens/HomeScreen";
import CustomDrawerContentLeft from "./components/CustomDrawerContentLeft";
import CustomDrawerContentRight from "./components/CustomDrawerContentRight";

const LeftDrawer = createDrawerNavigator();
const RightDrawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <RightScreenDrawer />
    </NavigationContainer>
  );
}

const LeftScreenDrawer = () => {
  return (
    <LeftDrawer.Navigator
      drawerContent={props => <CustomDrawerContentLeft {...props} />}
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: "#fff",
          width: "85%",
        },
        drawerLabelStyle: {
          fontSize: 18,
        },
      }}
      id="DrawerLeft">
      <LeftDrawer.Screen name="LeftHome" component={HomeScreen} />
    </LeftDrawer.Navigator>
  );
};
const RightScreenDrawer = () => {
  return (
    <RightDrawer.Navigator
      drawerContent={props => <CustomDrawerContentRight {...props} />}
      screenOptions={{ drawerPosition: "right", headerShown: false }}
      id="DrawerRight">
      <RightDrawer.Screen name="Homie" component={LeftScreenDrawer} />
    </RightDrawer.Navigator>
  );
};
