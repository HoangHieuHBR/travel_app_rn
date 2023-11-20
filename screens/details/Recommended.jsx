import { StyleSheet, Text, View } from "react-native";
import { useRoute } from "@react-navigation/native";

const Recommended = ({ navigation }) => {
  const route = useRoute();
  const { country } = route.params;
  return (
    <View>
      <Text>Recommended</Text>
    </View>
  );
};

export default Recommended;

const styles = StyleSheet.create({});