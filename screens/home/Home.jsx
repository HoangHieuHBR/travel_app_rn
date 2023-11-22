import { TouchableOpacity, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import reusable from "../../components/Reusable/reusable.style";
import { ReusableText, HeightSpacer } from "../../components";
import { COLORS, SIZES, TEXT } from "../../constants/theme";
import { AntDesign } from "@expo/vector-icons";
import styles from "./home.style";
import Places from "../../components/Home/Places";
import BestHotels from "../../components/Home/BestHotels";
import Recommendations from "../../components/Home/Recommendations";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={reusable.container}>
      <ScrollView>
        <View style={reusable.rowWithSpace("space-between")}>
          <ReusableText
            text={"Hey User!"}
            font={"regular"}
            size={TEXT.large}
            color={COLORS.black}
          />

          <TouchableOpacity
            style={styles.box}
            onPress={() => navigation.navigate("Search")}
          >
            <AntDesign name="search1" size={26} />
          </TouchableOpacity>
        </View>

        <HeightSpacer height={SIZES.xLarge} />

        <ReusableText
          text={"Places"}
          font={"medium"}
          size={TEXT.large}
          color={COLORS.black}
        />

        <Places />

        <Recommendations />

        <HeightSpacer height={30} />

        <BestHotels />

        <HeightSpacer height={20} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
