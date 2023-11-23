import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { COLORS, SIZES } from "../../constants/theme";

const ReusableBtn = ({
  onPress,
  btnText,
  width,
  backgroundColor,
  borderWidth,
  borderColor,
  textColor,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.btnStyle(width, backgroundColor, borderWidth, borderColor)}
    >
      <Text style={styles.btnText(textColor)}>{btnText}</Text>
    </TouchableOpacity>
  );
};

export default ReusableBtn;

const styles = StyleSheet.create({
  btnStyle: (width, backgroundColor, borderWidth, borderColor) => ({
    backgroundColor: backgroundColor,
    width: width,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.small,
    borderWidth: borderWidth,
    borderColor: borderColor,
  }),

  btnText: (textColor) => ({
    fontFamily: "medium",
    fontSize: SIZES.medium,
    color: textColor,
  }),
});
