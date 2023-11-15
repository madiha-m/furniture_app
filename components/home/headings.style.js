import { StyleSheet } from "react-native";
import { SIZES } from "../../constants";

const styles = StyleSheet.create({
  headersContainer: {
    marginTop: SIZES.medium,
    marginHorizontal: SIZES.small,
  },
  headerWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerTitle: {
    fontFamily: "bold",
    fontSize: SIZES.xLarge - 2,
  },
});
export default styles;
