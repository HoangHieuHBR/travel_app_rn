import { StyleSheet, Text, View } from "react-native";
import { useRoute } from "@react-navigation/native";

const CountryDetails = ({ navigation }) => {
  const route = useRoute();
  const { country } = route.params;
  return (
    <View>
      <Text>CountryDetails</Text>
    </View>
  );
};

export default CountryDetails;

const styles = StyleSheet.create({});
