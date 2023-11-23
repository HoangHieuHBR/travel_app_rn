import { StyleSheet, Text, View } from "react-native";
import { COLORS, SIZES } from "../../constants/theme";
import {
  AppBar,
  HeightSpacer,
  ReusableText,
  SettingTile,
} from "../../components";

const Settings = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: COLORS.lightWhite, flex: 1 }}>
      <View style={{ height: 120 }}>
        <AppBar
          title={""}
          prefixIconBG={COLORS.white}
          onPrefixPress={() => navigation.goBack()}
          top={50}
          left={20}
          right={20}
        />
      </View>

      <View style={{ marginHorizontal: 20 }}>
        <ReusableText
          text={"Account Settings"}
          font={"regular"}
          size={SIZES.xLarge}
          color={COLORS.black}
        />

        <HeightSpacer height={10} />

        <SettingTile title={"Language"} />

        <HeightSpacer height={3} />

        <SettingTile title={"Country"} suffixTitle={"USA"} />

        <HeightSpacer height={3} />

        <SettingTile title={"Currency"} suffixTitle={"USD"} />

        <HeightSpacer height={40} />

        <ReusableText
          text={"Support"}
          font={"regular"}
          size={SIZES.xLarge}
          color={COLORS.black}
        />

        <HeightSpacer height={10} />

        <SettingTile title={"Get Help"} suffixTitle={""} />

        <HeightSpacer height={3} />

        <SettingTile title={"Give a feedback"} suffixTitle={""} />

        <HeightSpacer height={40} />

        <ReusableText
          text={"Legal"}
          font={"regular"}
          size={SIZES.xLarge}
          color={COLORS.black}
        />

        <HeightSpacer height={10} />

        <SettingTile title={"Terms of Service"} suffixTitle={""} />

        <HeightSpacer height={3} />

        <SettingTile title={"Privacy Policy"} suffixTitle={""} />
      </View>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({});
