import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Alerts = () => {
  return (
    <View style={styles.alerts}>
      <View style={[styles.referenceFrame, styles.screenPosition]}>
        <View style={[styles.screen, styles.screenPosition]} />
      </View>
      <Image
        style={[styles.vectorArtIcon, styles.vectorArtIconPosition]}
        contentFit="cover"
        source={require("../assets/vector-art.png")}
      />
      <Text style={[styles.text, styles.textPosition]}>09:00</Text>
      <Text style={[styles.coldkillerX2, styles.textPosition]}>{`Coldkiller X
2 pills
from compartment 4`}</Text>
      <View style={[styles.topBar, styles.topPosition]}>
        <View style={[styles.topBarChild, styles.topPosition]} />
        <Text style={[styles.titleHere, styles.hereFlexBox]}>MedMate</Text>
        <Image
          style={styles.backIcon}
          contentFit="cover"
          source={require("../assets/back-icon2.png")}
        />
        <Image
          style={styles.topBarItem}
          contentFit="cover"
          source={require("../assets/rectangle-71.png")}
        />
      </View>
      <View style={styles.basicBox}>
        <View style={[styles.basicBoxChild, styles.vectorArtIconPosition]} />
        <Text style={[styles.textHere, styles.hereFlexBox]}>Taken</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screenPosition: {
    width: 360,
    left: 0,
    top: 0,
    position: "absolute",
    height: 800,
    backgroundColor: Color.colorWhite,
  },
  vectorArtIconPosition: {
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  textPosition: {
    textAlign: "left",
    left: 20,
    position: "absolute",
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
  vectorArtIcon: {
    height: "27.26%",
    top: "59.88%",
    bottom: "12.86%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  text: {
    top: 146,
    fontSize: 132,
    fontFamily: FontFamily.bebasNeueRegular,
    color: Color.colorBlack,
  },
  coldkillerX2: {
    top: 56,
    fontSize: FontSize.size_5xl,
    lineHeight: 30,
    fontFamily: FontFamily.aksharRegular,
    color: Color.dark,
    width: 262,
  },
  topBarChild: {
    backgroundColor: Color.colorWhite,
    height: 36,
  },
  titleHere: {
    top: 9,
    left: 48,
    fontSize: FontSize.size_mini,
    fontStyle: "italic",
    fontWeight: "800",
    fontFamily: FontFamily.interExtraBold,
    width: 264,
    color: Color.colorBlack,
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
  basicBoxChild: {
    height: "100%",
    top: "0%",
    bottom: "0%",
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorPalevioletred_100,
  },
  textHere: {
    height: "57.5%",
    width: "94.44%",
    top: "22.5%",
    left: "3.4%",
    fontSize: 32,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorMistyrose,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  basicBox: {
    top: 717,
    left: 18,
    width: 324,
    height: 40,
    position: "absolute",
  },
  alerts: {
    flex: 1,
    overflow: "hidden",
    height: 800,
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default Alerts;
