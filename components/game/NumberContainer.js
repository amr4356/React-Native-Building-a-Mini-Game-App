import { StyleSheet, Text, View, Dimensions } from "react-native";
import Colors from "../../constants/colors";

function NumberContainer({ children }) {
  return (
    <View style={styles.constainer}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

export default NumberContainer;
const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  constainer: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: deviceWidth < 300 ? 12 : 24,
    margin: deviceWidth < 300 ? 12 : 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: Colors.accent500,
    fontSize: deviceWidth < 300 ? 28 : 36,
    fontFamily: "open-sans-bold",
  },
});
