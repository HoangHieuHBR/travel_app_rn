import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { SIZES } from "../../constants/theme";

const ReusableBtn = ({
  onPress,
  btnText,
  width,
  backgroundColor,
  borderWidth,
  boderColor,
  textColor,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.btnStyle(width, backgroundColor, borderWidth, boderColor)}
    >
      <Text style={styles.btnText(textColor)}>{btnText}</Text>
    </TouchableOpacity>
  );
};

export default ReusableBtn;

const styles = StyleSheet.create({
  btnStyle: (width, backgroundColor, borderWidth, boderColor) => ({
    backgroundColor: backgroundColor,
    width: width,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.small,
    borderWidth: borderWidth,
    boderColor: boderColor,
  }),

  btnText: (textColor) => ({
    fontFamily: "medium",
    fontSize: SIZES.medium,
    color: textColor,
  }),
});
