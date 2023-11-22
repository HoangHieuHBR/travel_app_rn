import { StyleSheet, Text, View } from "react-native";

const ReusableText = ({ text, font, size, color, align, numberOfLines = null, textOverflow = 'clip' }) => {
  return (
    <Text
      style={styles.textStyle(font, size, color, align)}
      numberOfLines={numberOfLines}
      textOverflow={textOverflow}
    >
      {text}
    </Text>
  );
};

export default ReusableText;

const styles = StyleSheet.create({
  textStyle: (font, size, color, align) => ({
    fontFamily: font,
    fontSize: size,
    color: color,
    textAlign: align,
  }),
});
