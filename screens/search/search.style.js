import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants/theme";

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: SIZES.medium,
    marginHorizontal: SIZES.medium,
    borderWidth: 1,
    borderColor: COLORS.blue,
    borderRadius: SIZES.medium,
    height: 50,
  },

  inputField: {
    fontFamily: "regular",
    width: "100%",
    height: "100%",
    paddingHorizontal: 50,
  },

  searchImage: {
    resizeMode: "contain",
    width: "100%",
    height: SIZES.height,
    paddingHorizontal: 20,
  },

  searchWrapper: {
    flex: 1,
    marginRight: SIZES.xSmall,
    borderRadius: SIZES.small,
  },

  searchBtn: {
    width: 50,
    height: "100%",
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.lightBlue,
  },

  tile: {
    marginHorizontal: 12,
    marginBottom: 10,
  },
});

export default styles;
