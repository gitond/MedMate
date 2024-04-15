import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, Border, FontFamily } from "../GlobalStyles";

const CreateAccount = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.createAccount}>
      <View style={[styles.referenceFrame, styles.screenPosition]}>
        <View style={[styles.screen, styles.screenPosition]} />
      </View>
      <View style={styles.logoPlaceholder} />
      <Image
        style={styles.logoPlaceholderIcon}
        contentFit="cover"
        source={require("../assets/logo-placeholder.png")}
      />
      <View style={[styles.basicBox, styles.basicLayout]}>
        <View style={[styles.basicBoxChild, styles.iconLayout]} />
        <Text style={[styles.textHere, styles.textPosition]}>E-mail</Text>
      </View>
      <View style={[styles.basicBox1, styles.basicLayout]}>
        <View style={[styles.basicBoxChild, styles.iconLayout]} />
        <Text style={[styles.textHere1, styles.textPosition]}>Password</Text>
      </View>
      <View style={[styles.basicBox2, styles.basicLayout]}>
        <View style={[styles.basicBoxChild, styles.iconLayout]} />
        <Text style={[styles.textHere1, styles.textPosition]}>
          Confirm Password
        </Text>
      </View>
      <Text style={[styles.about, styles.aboutTypo]}>About</Text>
      <View style={[styles.topBar, styles.topPosition]}>
        <View style={[styles.topBarChild, styles.topPosition]} />
        <Text style={[styles.titleHere, styles.aboutTypo]}>MedMate</Text>
        <Pressable
          style={styles.backIcon}
          onPress={() => navigation.navigate("WelcomePage")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/back-icon.png")}
          />
        </Pressable>
        <Image
          style={styles.topBarItem}
          contentFit="cover"
          source={require("../assets/rectangle-7.png")}
        />
      </View>
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
    left: 15,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  textPosition: {
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    left: "3.4%",
    top: "22.5%",
    width: "94.44%",
    height: "57.5%",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  aboutTypo: {
    textAlign: "center",
    fontStyle: "italic",
    position: "absolute",
  },
  topPosition: {
    height: 36,
    width: 360,
    left: 0,
    top: 0,
    position: "absolute",
  },
  screen: {
    backgroundColor: "#f5f8d7",
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
    backgroundColor: Color.colorWhite,
    left: 0,
    top: 0,
  },
  logoPlaceholder: {
    top: 87,
    left: 106,
    backgroundColor: Color.colorGreen,
    width: 130,
    height: 130,
    position: "absolute",
  },
  logoPlaceholderIcon: {
    top: 82,
    left: 88,
    width: 184,
    height: 176,
    position: "absolute",
  },
  basicBoxChild: {
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorSkyblue_300,
    position: "absolute",
  },
  textHere: {
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
  },
  basicBox: {
    top: 305,
  },
  textHere1: {
    fontFamily: FontFamily.interRegular,
  },
  basicBox1: {
    top: 380,
  },
  basicBox2: {
    top: 449,
  },
  about: {
    top: 528,
    left: 156,
    textDecoration: "underline",
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorBlack,
    fontSize: FontSize.size_base,
    textAlign: "center",
    fontStyle: "italic",
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
    color: Color.colorSkyblue_300,
    width: 264,
  },
  icon: {
    overflow: "hidden",
  },
  backIcon: {
    left: 12,
    top: 6,
    width: 24,
    height: 24,
    position: "absolute",
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
  image7Icon: {
    top: 36,
    left: 3,
    width: 41,
    height: 46,
    position: "absolute",
  },
  createAccount: {
    flex: 1,
    overflow: "hidden",
    height: 800,
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default CreateAccount;
