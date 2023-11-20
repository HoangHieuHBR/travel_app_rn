import { StyleSheet, TouchableOpacity, View } from "react-native";
import reusable from "./reusable.style";
import { COLORS, SIZES, TEXT } from "../../constants/theme";
import {
  HeightSpacer,
  NetworkImage,
  ReusableText,
  WidthSpacer,
} from "../../components";

const ReusableTitle = ({ item }) => {
  return (
    <TouchableOpacity style={styles.container}>
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

export default ReusableTitle;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: COLORS.white,
    borderRadius: 12,
  },
});
