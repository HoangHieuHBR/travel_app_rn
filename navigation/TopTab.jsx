import { StyleSheet, Text, View } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { TopBookings, TopInfo, TopTrips } from "../screens";
import { COLORS } from "../constants/theme";
import { AppBar, NetworkImage } from "../components";
import styles from "./topTab.style";

const Tab = createMaterialBottomTabNavigator();

const TopTab = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ backgroundColor: COLORS.lightWhite }}>
        <View>
          <NetworkImage
            source={
              "https://d326fntlu7tb1e.cloudfront.net/uploads/c87b6dfb-ee4b-47fa-9c02-6ccca2893a6f-vinci_06.jpg"
            }
            width={"100%"}
            height={300}
            radius={0}
          />

          <AppBar
            title={""}
            prefixIconBG={COLORS.white}
            suffixIcon={"logout"}
            suffixIconBG={COLORS.white}
            onPrefixPress={() => {}}
            onSuffixPress={() => {}}
            top={40}
            left={20}
            right={20}
          />

          <View style={styles.profile}>

            <Image 
                source={{}}
                style={styles.image}
            />
          </View>
        </View>
      </View>
      <Tab.Navigator>
        <Tab.Screen name="Bookings" component={TopBookings} />
        <Tab.Screen name="Trips" component={TopTrips} />
        <Tab.Screen name="Info" component={TopInfo} />
      </Tab.Navigator>
    </View>
  );
};

export default TopTab;

