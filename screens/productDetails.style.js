import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants";
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  upperRow: {
    marginHorizontal: SIZES.large,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    top: SIZES.xxLarge,
    width: SIZES.width - 44,
    zIndex: 999,
  },
  image: {
    aspectRatio: 1,
    resizeMode: "cover",
  },

  // Details Section: Includes all under
  details: {
    marginTop: -SIZES.large,
    backgroundColor: COLORS.lightWhite,
    width: SIZES.width,
    borderTopLeftRadius: SIZES.medium,
    borderTopRightRadius: SIZES.medium,
  },

  //   Title Row
  titleRow: {
    // backgroundColor: COLORS.grayLavender,
    marginHorizontal: SIZES.semiLarge,
    paddingBottom: SIZES.small,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: SIZES.width - 44,
    top: SIZES.large,
  },
  title: {
    fontFamily: "bold",
    fontSize: SIZES.large,
  },
  priceWrapper: {
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.medium,
  },
  price: {
    paddingHorizontal: SIZES.small,
    fontFamily: "semiBold",
    fontSize: SIZES.large,
  },

  //   Rating Row
  ratingRow: {
    // backgroundColor: COLORS.grayLavender,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: SIZES.small,
    width: SIZES.width - 10,
    top: SIZES.xSmall - 5,
  },
  rating: {
    top: SIZES.large,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginHorizontal: SIZES.large,
  },
  ratingTextWrapper: (start) => ({
    justifyContent: "space-around",
    alignItems: "center",
    // width: 30,
    minWidth: SIZES.xLarge + 6,
    marginStart: start,
  }),
  ratingText: {
    color: COLORS.grayRhythm,
    fontFamily: "medium",
  },

  // Description
  descWrapper: {
    marginTop: SIZES.large * 2,
    marginHorizontal: SIZES.large,
  },
  descHeading: {
    fontFamily: "medium",
    fontSize: SIZES.semiMedium,
  },
  descText: {
    fontFamily: "regular",
    fontSize: SIZES.small,
    textAlign: "justify",
    marginBottom: SIZES.small,
  },

  // Delivery Row
  deliveryRow: {
    marginBottom: SIZES.small,
  },
  locationWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.large,
    marginHorizontal: SIZES.semiSmall,
    padding: SIZES.small / 2,
  },
  locationIcon: {},
  locationTextWrapper: {
    marginHorizontal: 6,
  },
  locationText: {
    paddingTop: 2,
    fontFamily: "regular",
    fontSize: SIZES.small,
  },

  // Circle Style Row
  circlRow: {
    marginHorizontal: SIZES.xLarge - 4,
  },
  circle: {
    flexDirection: "row",
    marginEnd: SIZES.xxLarge,
  },

  // Cart Row
  cartRow: {
    // backgroundColor: COLORS.gold,
    // paddingBottom: SIZES.small,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // width: SIZES.width-38,
    marginHorizontal: SIZES.semiSmall,
    marginVertical: SIZES.large - 4,
  },
  cartBtn: {
    backgroundColor: COLORS.black,
    width: SIZES.width * 0.73,
    paddingHorizontal: SIZES.small,
    paddingVertical: SIZES.small - 5,
    borderRadius: SIZES.large,
    // marginLeft: SIZES.small,
    height: SIZES.xxLarge - 4,
  },
  cartBtnText: {
    color: COLORS.lightWhite,
    fontFamily: "semiBold",
    fontSize: SIZES.medium,
  },
  cartIconBtn: {
    backgroundColor: COLORS.black,
    width: SIZES.xxLarge - 4,
    height: SIZES.xxLarge - 4,
    borderRadius: 50,
    // margin: SIZES.small,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default styles;
