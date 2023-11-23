import { ScrollView, StyleSheet, Text, View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Registration, Login } from "../screens";
import { COLORS } from "../constants/theme";
import { AssetImage, HeightSpacer } from "../components";

const Tab = createMaterialTopTabNavigator();

const AuthTopTab = () => {
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <ScrollView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
        <HeightSpacer height={80} />

        <AssetImage
          data={require("../assets/images/bg2.png")}
          width={"100%"}
          height={250}
          mode={"contain"}
        />

        <View style={{ height: 600 }}>
          <Tab.Navigator>
            <Tab.Screen name="Login" component={Login} />
            <Tab.Screen name="Registration" component={Registration} />
          </Tab.Navigator>
        </View>
      </ScrollView>
    </View>
  );
};

export default AuthTopTab;

const styles = StyleSheet.create({});
