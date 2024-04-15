import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const WelcomePage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.welcomePage}>
      <View style={[styles.referenceFrame, styles.screenPosition]}>
        <View style={[styles.screen, styles.screenPosition]} />
      </View>
      <Image
        style={styles.logoPlaceholderIcon}
        contentFit="cover"
        source={require("../assets/logo-placeholder.png")}
      />
      <Pressable
        style={[styles.basicBox, styles.basicLayout]}
        onPress={() => navigation.navigate("Login")}
      >
        <View style={styles.basicBoxChild} />
        <Text style={[styles.textHere, styles.textHereTypo]}>Log in</Text>
      </Pressable>
      <Pressable
        style={[styles.basicBox1, styles.basicLayout]}
        onPress={() => navigation.navigate("CreateAccount")}
      >
        <View style={styles.basicBoxChild} />
        <Text style={[styles.textHere, styles.textHereTypo]}>
          Create Account
        </Text>
      </Pressable>
      <Text style={[styles.forgotAccount, styles.aboutClr]}>
        Forgot account
      </Text>
      <View style={[styles.topBar, styles.topPosition]}>
        <View style={[styles.topBarChild, styles.topPosition]} />
        <Text style={[styles.titleHere, styles.aboutTypo]}>MedMate</Text>
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
      <Text style={[styles.about, styles.aboutTypo]}>About</Text>
      <Image
        style={styles.image7Icon}
        contentFit="cover"
        source={require("../assets/image-7.png")}
      />
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
  },
  basicLayout: {
    height: 40,
    width: 324,
    left: 18,
    position: "absolute",
  },
  textHereTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  aboutClr: {
    color: Color.colorBlack,
    fontSize: FontSize.size_base,
  },
  topPosition: {
    height: 36,
    width: 360,
    left: 0,
    top: 0,
    position: "absolute",
  },
  aboutTypo: {
    textAlign: "center",
    fontStyle: "italic",
    position: "absolute",
  },
  screen: {
    backgroundColor: Color.colorLightyellow_100,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 1,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 0,
    top: 0,
  },
  referenceFrame: {
    backgroundColor: Color.colorWhite,
    overflow: "hidden",
  },
  logoPlaceholderIcon: {
    top: 75,
    left: 87,
    width: 184,
    height: 176,
    position: "absolute",
  },
  basicBoxChild: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorDimgray,
    position: "absolute",
    width: "100%",
  },
  textHere: {
    height: "57.5%",
    width: "94.44%",
    top: "22.5%",
    left: "3.4%",
    color: Color.colorGray_100,
    display: "flex",
    alignItems: "center",
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
  },
  basicBox: {
    top: 309,
  },
  basicBox1: {
    top: 384,
  },
  forgotAccount: {
    top: 489,
    left: 117,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  topBarChild: {
    backgroundColor: Color.colorGray_300,
  },
  titleHere: {
    top: 9,
    left: 48,
    fontSize: FontSize.size_mini,
    fontWeight: "800",
    fontFamily: FontFamily.interExtraBold,
    color: Color.colorSkyblue_200,
    width: 264,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
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
  about: {
    top: 534,
    left: 159,
    textDecoration: "underline",
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorBlack,
    fontSize: FontSize.size_base,
  },
  image7Icon: {
    top: 36,
    left: 3,
    width: 41,
    height: 46,
    position: "absolute",
  },
  welcomePage: {
    backgroundColor: Color.colorLightcyan,
    flex: 1,
    overflow: "hidden",
    height: 800,
    width: "100%",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
});

export default WelcomePage;
