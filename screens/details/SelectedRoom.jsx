import { StyleSheet, View } from "react-native";
import { useRoute } from "@react-navigation/native";
import {
  AppBar,
  HeightSpacer,
  NetworkImage,
  Rating,
  ReusableText,
  WidthSpacer,
  ReusableBtn,
  AssetImage,
} from "../../components";
import { COLORS, SIZES } from "../../constants/theme";
import reusable from "../../components/Reusable/reusable.style";
import Counter from "../../components/Reusable/Counter";

const SelectedRoom = ({ navigation }) => {
  const router = useRoute();
  const { item } = router.params;

  return (
    <View>
      <View style={{ height: 100 }}>
        <AppBar
          top={50}
          left={20}
          right={20}
          title={item.title}
          prefixIconBG={COLORS.white}
          onPrefixPress={() => navigation.goBack()}
        />
      </View>

      <View style={{ marginHorizontal: 20 }}>
        <View style={styles.container}>
          <NetworkImage
            source={item.imageUrl}
            width={"100%"}
            height={200}
            radius={16}
          />

          <HeightSpacer height={20} />

          <View style={{ marginHorizontal: 10 }}>
            <View style={reusable.rowWithSpace("space-between")}>
              <ReusableText
                text={item.title}
                font={"medium"}
                size={SIZES.medium}
                color={COLORS.black}
              />

              <View style={reusable.rowWithSpace("flex-start")}>
                <Rating rating={item.rating} />

                <WidthSpacer width={10} />

                <ReusableText
                  text={`(${item.review})`}
                  font={"regular"}
                  size={SIZES.medium}
                  color={COLORS.gray}
                />
              </View>
            </View>

            <HeightSpacer height={10} />

            <ReusableText
              text={item.location}
              font={"medium"}
              size={SIZES.medium}
              color={COLORS.gray}
            />

            <View style={styles.horizontalDivider} />

            <ReusableText
              text={"Room Requirements"}
              font={"regular"}
              size={SIZES.medium}
              color={COLORS.black}
            />

            <HeightSpacer height={30} />

            <View style={reusable.rowWithSpace("space-between")}>
              <ReusableText
                text={"Price per night"}
                font={"regular"}
                size={SIZES.medium}
                color={COLORS.black}
              />

              <ReusableText
                text={"$ 400"}
                font={"regular"}
                size={SIZES.medium}
                color={COLORS.black}
              />
            </View>

            <HeightSpacer height={15} />

            <View style={reusable.rowWithSpace("space-between")}>
              <ReusableText
                text={"Payment Method"}
                font={"regular"}
                size={SIZES.medium}
                color={COLORS.black}
              />

              <View style={reusable.rowWithSpace("flex-start")}>
                <AssetImage
                  data={require("../../assets/images/Visa.png")}
                  mode={"contain"}
                  width={30}
                  height={20}
                />

                <ReusableText
                  text={"Visa"}
                  font={"regular"}
                  size={SIZES.medium}
                  color={COLORS.black}
                />
              </View>
            </View>

            <HeightSpacer height={15} />

            <View style={reusable.rowWithSpace("space-between")}>
              <ReusableText
                text={"4 Guests"}
                font={"regular"}
                size={SIZES.medium}
                color={COLORS.black}
              />

              <Counter />
            </View>

            <HeightSpacer height={30} />

            <ReusableBtn
              onPress={() => navigation.navigate("Success")}
              btnText={"Book Now"}
              width={SIZES.width - 60}
              backgroundColor={COLORS.green}
              borderColor={COLORS.green}
              borderWidth={0}
              textColor={COLORS.white}
            />

            <HeightSpacer height={15} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default SelectedRoom;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    borderRadius: 16,
  },

  horizontalDivider: {
    borderWidth: 0.5,
    borderColor: COLORS.lightGrey,
    marginVertical: 15,
  },
});
