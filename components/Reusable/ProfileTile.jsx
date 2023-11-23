import { TouchableOpacity } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import reusable from "./reusable.style";
import WidthSpacer from "./WidthSpacer";
import ReusableText from "./ReusableText";
import { COLORS, SIZES } from "../../constants/theme";
import { AntDesign } from "@expo/vector-icons";


const ProfileTile = ({ onPress, title, icon }) => {
  return (
    <TouchableOpacity style={styles.tile} onPress={onPress}>
      <View style={reusable.rowWithSpace("space-between")}>
        <View style={reusable.rowWithSpace("flex-start")}>
          <AntDesign name={icon} size={20} />

          <WidthSpacer width={15} />

          <ReusableText
            text={title}
            font={"regular"}
            size={SIZES.medium}
            color={COLORS.gray}
          />
        </View>

        <AntDesign name={"right"} size={20} />
      </View>
    </TouchableOpacity>
  );
};

export default ProfileTile;

const styles = StyleSheet.create({
  tile: {
    backgroundColor: COLORS.lightWhite,
    borderRadius: SIZES.xSmall,
    padding: 10,
    marginBottom: 16,
  },
});
