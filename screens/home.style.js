import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants/index";

const styles = StyleSheet.create({
  textStyle: {
    fontFamily: "bold",
    fontSize: 40,
  },
  appBarWrapper: {
    marginHorizontal: SIZES.semiLarge,
    marginTop: SIZES.small,
  },
  appBar: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  appBar2: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  appBar3: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
export default styles;
