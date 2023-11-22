import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Profile, Chat, Location } from "../screens/index";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../constants/theme";
import TopTab from "./TopTab";

const Tab = createBottomTabNavigator();

const tabBarStyle = {
  paddding: 20,
  borderRadius: 20,
  height: 70,
  // position: "absolute",
  marginHorizontal: 20,
  marginBottom: 20,
};

const BottomTabNavigation = () => {
  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#EB6A58"
        tabBarHideKeyboard={true}
        headerShown={false}
        inactiveColor="#3E2465"
        barStyle={{ padddingBottom: 48 }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarStyle: tabBarStyle,
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name={focused ? "grid" : "grid-outline"}
                color={focused ? COLORS.red : COLORS.gray}
                size={26}
              />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Location"
          component={Location}
          options={{
            tabBarStyle: tabBarStyle,
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name={focused ? "location" : "location-outline"}
                color={focused ? COLORS.red : COLORS.gray}
                size={26}
              />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Chat"
          component={Chat}
          options={{
            tabBarStyle: tabBarStyle,
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name={
                  focused
                    ? "chatbubble-ellipses"
                    : "chatbubble-ellipses-outline"
                }
                color={focused ? COLORS.red : COLORS.gray}
                size={26}
              />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={TopTab}
          options={{
            tabBarStyle: tabBarStyle,
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name={focused ? "person" : "person-outline"}
                color={focused ? COLORS.red : COLORS.gray}
                size={26}
              />
            ),
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

export default BottomTabNavigation;
