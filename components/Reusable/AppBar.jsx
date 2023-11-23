import { StyleSheet, TouchableOpacity, View } from "react-native";
import reusable from "./reusable.style";
import ReusableText from "./ReusableText";
import { AntDesign } from "@expo/vector-icons";
import { COLORS, TEXT } from "../../constants/theme";
import WidthSpacer from "./WidthSpacer";

const AppBar = ({
  prefixIconBG,
  title,
  suffixIcon,
  suffixIconBG,
  onPrefixPress,
  onSuffixPress,
  top,
  left,
  right,
  isNeedBackBtn = true,
}) => {
  return (
    <View style={styles.overlay(top, left, right)}>
      <View style={reusable.rowWithSpace("space-between")}>
        {isNeedBackBtn ? (
          <TouchableOpacity
            style={styles.prefixIcon(prefixIconBG)}
            onPress={onPrefixPress}
          >
            <AntDesign name="left" size={26} />
          </TouchableOpacity>
        ) : (
          <View>
            <WidthSpacer width={30} />
          </View>
        )}

        <ReusableText
          text={title}
          font={"medium"}
          size={TEXT.large}
          color={COLORS.black}
        />

        <TouchableOpacity
          style={styles.suffixIcon(suffixIconBG)}
          onPress={onSuffixPress}
        >
          <AntDesign name={suffixIcon} size={26} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AppBar;

const styles = StyleSheet.create({
  overlay: (top, left, right) => ({
    position: "absolute",
    top: top,
    left: left,
    right: right,
    justifyContent: "center",
  }),

  prefixIcon: (prefixIconBG) => ({
    backgroundColor: prefixIconBG,
    width: 30,
    height: 30,
    borderRadius: 9,
    alignItems: "center",
  }),

  suffixIcon: (suffixIconBG) => ({
    backgroundColor: suffixIconBG,
    width: 30,
    height: 30,
    borderRadius: 9,
    alignItems: "center",
  }),
});
