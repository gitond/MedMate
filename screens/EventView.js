import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const EventView = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.eventView}>
      <View style={[styles.referenceFrame, styles.screenPosition]}>
        <View style={[styles.screen, styles.screenPosition]} />
      </View>
      <Pressable
        style={[styles.basicBox, styles.basicLayout]}
        onPress={() => navigation.navigate("MedicineView")}
      >
        <View style={[styles.basicBoxChild, styles.basicChildPosition]} />
        <Text style={[styles.textHere, styles.textPosition]}>Coldkiller X</Text>
      </Pressable>
      <View style={[styles.basicBox1, styles.basicLayout]}>
        <View style={[styles.basicBoxChild, styles.basicChildPosition]} />
        <Text style={[styles.textHere, styles.textPosition]}>
          Compartment number
        </Text>
      </View>
      <View style={[styles.basicBox2, styles.basicLayout]}>
        <View style={[styles.basicBoxChild, styles.basicChildPosition]} />
        <Text style={[styles.textHere, styles.textPosition]}>
          Time and day x/x xx:xx
        </Text>
      </View>
      <View style={[styles.topBar, styles.topPosition]}>
        <View style={[styles.topBarChild, styles.topPosition]} />
        <Text style={[styles.titleHere, styles.hereFlexBox]}>MedMate</Text>
        <Image
          style={styles.backIcon}
          contentFit="cover"
          source={require("../assets/back-icon.png")}
        />
        <Image
          style={styles.topBarItem}
          contentFit="cover"
          source={require("../assets/rectangle-7.png")}
        />
      </View>
      <View style={[styles.basicBox3, styles.basicLayout]}>
        <View style={[styles.basicBoxChild, styles.basicChildPosition]} />
        <Text style={[styles.search, styles.textPosition]}>Quantity left</Text>
      </View>
      <View style={[styles.basicBox4, styles.basicLayout]}>
        <View style={[styles.basicBoxChild1, styles.basicChildPosition]} />
        <Text style={[styles.textHere3, styles.hereFlexBox]}>
          Send notification for refill
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screenPosition: {
    width: 360,
    backgroundColor: Color.colorLightyellow_100,
    left: 0,
    top: 0,
    position: "absolute",
    height: 800,
  },
  basicLayout: {
    height: 40,
    width: 324,
    left: 18,
    position: "absolute",
  },
  basicChildPosition: {
    borderRadius: Border.br_8xs,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  textPosition: {
    alignItems: "center",
    fontSize: FontSize.size_base,
    left: "3.4%",
    top: "22.5%",
    width: "94.44%",
    height: "57.5%",
  },
  topPosition: {
    height: 36,
    width: 360,
    left: 0,
    top: 0,
    position: "absolute",
  },
  hereFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  screen: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 1,
  },
  referenceFrame: {
    overflow: "hidden",
  },
  basicBoxChild: {
    backgroundColor: Color.colorDimgray,
  },
  textHere: {
    display: "flex",
    alignItems: "center",
    fontSize: FontSize.size_base,
    left: "3.4%",
    top: "22.5%",
    width: "94.44%",
    height: "57.5%",
    textAlign: "left",
    color: Color.colorGray_100,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  basicBox: {
    top: 141,
  },
  basicBox1: {
    top: 206,
  },
  basicBox2: {
    top: 271,
  },
  topBarChild: {
    backgroundColor: Color.colorGray_300,
  },
  titleHere: {
    top: 9,
    left: 48,
    fontSize: FontSize.size_mini,
    fontStyle: "italic",
    fontWeight: "800",
    fontFamily: FontFamily.interExtraBold,
    color: Color.colorSkyblue_200,
    width: 264,
  },
  backIcon: {
    top: 6,
    left: 12,
    width: 24,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  topBarItem: {
    top: 12,
    left: 325,
    width: 22,
    height: 12,
    position: "absolute",
  },
  topBar: {
    backgroundColor: Color.colorGray_400,
    overflow: "hidden",
  },
  search: {
    display: "none",
    textAlign: "left",
    color: Color.colorGray_100,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
    alignItems: "center",
    fontSize: FontSize.size_base,
    left: "3.4%",
    top: "22.5%",
    width: "94.44%",
    height: "57.5%",
  },
  basicBox3: {
    top: 400,
  },
  basicBoxChild1: {
    backgroundColor: Color.colorLightcoral_100,
  },
  textHere3: {
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorBlack,
    justifyContent: "center",
    alignItems: "center",
    fontSize: FontSize.size_base,
    left: "3.4%",
    top: "22.5%",
    width: "94.44%",
    height: "57.5%",
    display: "flex",
  },
  basicBox4: {
    top: 529,
  },
  eventView: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    overflow: "hidden",
    height: 800,
    width: "100%",
  },
});

export default EventView;
