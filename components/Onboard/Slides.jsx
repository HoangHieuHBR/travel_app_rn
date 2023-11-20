import { View, Text, Image } from "react-native";
import styles from "./slides.style";
import {
  HeightSpacer,
  ReusableBtn,
  ReusableText,
} from "../../components/index";
import { COLORS, SIZES } from "../../constants/theme";
import { useNavigation } from "@react-navigation/native";

const Slides = ({ item }) => {
    const navigation = useNavigation();
  return (
    <View>
      <Image source={item.image} style={styles.image} />

      <View style={styles.stack}>
        <ReusableText
          text={item.title}
          font={"medium"}
          size={SIZES.xxLarge}
          color={COLORS.white}
        />

        <HeightSpacer height={40} />

        <ReusableBtn
          onPress={() => navigation.navigate("Bottom")}
          btnText={"Let's go"}
          width={(SIZES.width - 50) / 2.2}
          backgroundColor={COLORS.red}
          borderWidth={0}
          boderColor={COLORS.red}
          textColor={COLORS.white}
        />
      </View>
    </View>
  );
};

export default Slides;
