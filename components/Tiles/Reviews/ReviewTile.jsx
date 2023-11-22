import { StyleSheet, Text, View } from "react-native";
import styles from "./review.style";
import reusable from "../../Reusable/reusable.style";
import NetworkImage from "../../Reusable/NetworkImage";
import WidthSpacer from "../../Reusable/WidthSpacer";
import ReusableText from "../../Reusable/ReusableText";
import { COLORS, SIZES } from "../../../constants/theme";
import Rating from "../../Reusable/Rating";
import DescriptionText from "../../Reusable/DescriptionText";

const ReviewTile = ({ review }) => {
  return (
    <View style={styles.reviewBorder}>
      <View style={reusable.rowWithSpace("space-between")}>
        <View style={reusable.rowWithSpace("flex-start")}>
          <NetworkImage
            source={review.user.profile}
            width={54}
            height={54}
            radius={10}
          />

          <WidthSpacer width={20} />

          <View style={{ width: "79%" }}>
            <View style={reusable.rowWithSpace("space-between")}>
              <ReusableText
                text={review.user.name}
                font={"medium"}
                size={SIZES.small + 2}
                color={COLORS.black}
              />

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  width: "50%",
                }}
              >
                <Rating rating={review.rating} />

                <WidthSpacer width={10} />

                <ReusableText
                  text={review.updatedAt}
                  font={"medium"}
                  size={SIZES.small + 2}
                  color={COLORS.black}
                />
              </View>
            </View>
            <DescriptionText text={review.review} lines={3} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default ReviewTile;
