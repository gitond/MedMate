import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const Login = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.login}>
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
        <View style={[styles.password, styles.passwordPosition]} />
        <Text style={[styles.textHere, styles.login1Position]}>Password</Text>
      </View>
      <Text style={[styles.forgotPassword, styles.forgotTypo]}>
        Forgot Password
      </Text>
      <Text style={[styles.forgotEMail, styles.forgotTypo]}>Forgot E-mail</Text>
      <View style={[styles.basicBox1, styles.basicLayout]}>
        <View style={[styles.password, styles.passwordPosition]} />
        <Text style={[styles.textHere, styles.login1Position]}>E-mail</Text>
      </View>
      <View style={[styles.topBar, styles.topPosition]}>
        <View style={[styles.topBarChild, styles.topPosition]} />
        <Text style={styles.titleHere}>MedMate</Text>
        <Pressable
          style={styles.backIcon}
          onPress={() => navigation.navigate("WelcomePage")}
        >
          <Image
            style={styles.icon}
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
      <Pressable
        style={[styles.basicBox2, styles.basicLayout]}
        onPress={() => navigation.navigate("PatientSideMain")}
      >
        <View style={[styles.basicBoxItem, styles.passwordPosition]} />
        <Text style={[styles.login1, styles.login1Position]}>LOGIN →</Text>
      </Pressable>
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
    position: "absolute",
  },
  passwordPosition: {
    borderRadius: Border.br_8xs,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  login1Position: {
    alignItems: "center",
    display: "flex",
    left: "3.4%",
    top: "22.5%",
    width: "94.44%",
    height: "57.5%",
    position: "absolute",
  },
  forgotTypo: {
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_base,
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
    backgroundColor: Color.colorLightyellow_100,
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
    top: 75,
    left: 87,
    width: 184,
    height: 176,
    position: "absolute",
  },
  password: {
    backgroundColor: Color.colorDimgray,
  },
  textHere: {
    color: Color.colorGray_100,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_base,
    display: "flex",
    left: "3.4%",
    top: "22.5%",
    width: "94.44%",
    height: "57.5%",
  },
  basicBox: {
    top: 380,
    width: 324,
    left: 15,
    height: 40,
  },
  forgotPassword: {
    top: 687,
    left: 116,
  },
  forgotEMail: {
    top: 727,
    left: 129,
  },
  basicBox1: {
    top: 309,
    width: 324,
    left: 15,
    height: 40,
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
    textAlign: "center",
    width: 264,
    position: "absolute",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
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
  basicBoxItem: {
    backgroundColor: Color.colorPalevioletred_100,
  },
  login1: {
    fontSize: FontSize.size_xl,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorMistyrose,
    textAlign: "right",
    display: "flex",
    left: "3.4%",
    top: "22.5%",
    width: "94.44%",
    height: "57.5%",
  },
  basicBox2: {
    top: 451,
    left: 177,
    width: 162,
  },
  login: {
    flex: 1,
    overflow: "hidden",
    height: 800,
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default Login;
