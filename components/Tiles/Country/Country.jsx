import { TouchableOpacity, View } from "react-native";
import { HeightSpacer, NetworkImage, ReusableText } from "../../index";
import { TEXT, COLORS } from "../../../constants/theme";
import { useNavigation } from "@react-navigation/native";

const Country = ({ item }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("CountryDetails", item)}
    >
      <View>
        <NetworkImage
          source={item.imageUrl}
          width={85}
          height={85}
          radius={12}
        />

        <HeightSpacer height={5} />

        <ReusableText
          text={item.country}
          font={"medium"}
          size={TEXT.medium}
          color={COLORS.black}
          align={"center"}
        />
        
      </View>
    </TouchableOpacity>
  );
};

export default Country;
