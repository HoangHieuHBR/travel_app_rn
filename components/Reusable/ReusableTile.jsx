import { StyleSheet, TouchableOpacity, View } from "react-native";
import reusable from "./reusable.style";
import { COLORS, SIZES, TEXT } from "../../constants/theme";
import {
  HeightSpacer,
  NetworkImage,
  Rating,
  ReusableText,
  WidthSpacer,
} from "..";

const ReusableTile = ({ item, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={reusable.rowWithSpace("flex-start")}>
        <NetworkImage
          source={item.imageUrl}
          width={80}
          height={80}
          radius={12}
        />

        <WidthSpacer width={15} />

        <View>
          <ReusableText
            text={item.title}
            font={"medium"}
            size={SIZES.medium}
            color={COLORS.black}
          />

          <HeightSpacer height={8} />

          <ReusableText
            text={item.location}
            font={"medium"}
            size={14}
            color={COLORS.gray}
          />

          <HeightSpacer height={8} />

          <View style={reusable.rowWithSpace("flex-start")}>
            <Rating rating={item.rating} />

            <WidthSpacer width={5} />

            <ReusableText
              text={` (${item.review}) `}
              font={"medium"}
              size={14}
              color={COLORS.gray}
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ReusableTile;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: COLORS.white,
    borderRadius: 12,
  },
});
