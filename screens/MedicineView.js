import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const MedicineView = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.medicineView}>
      <View style={[styles.referenceFrame, styles.screenPosition]}>
        <View style={[styles.screen, styles.screenPosition]} />
      </View>
      <View style={[styles.basicBox, styles.basicLayout]}>
        <View style={[styles.basicBoxChild, styles.basicPosition]} />
        <Text style={[styles.textHere, styles.textFlexBox]}>Coldkiller X</Text>
      </View>
      <View style={[styles.basicBox1, styles.basicLayout]}>
        <View style={[styles.basicBoxItem, styles.basicPosition]} />
        <Text style={[styles.textHere1, styles.textFlexBox]}>
          Send notification for refill
        </Text>
      </View>
      <View style={[styles.basicBox2, styles.basicLayout]}>
        <View style={[styles.basicBoxInner, styles.basicPosition]} />
        <Text style={styles.textHere2}>Schedule data</Text>
      </View>
      <View style={[styles.basicBox3, styles.basicLayout]}>
        <View style={[styles.basicBoxInner, styles.basicPosition]} />
        <Text style={styles.textHere2}>Quantity left</Text>
      </View>
      <View style={[styles.basicBox4, styles.basicLayout]}>
        <View style={[styles.basicBoxInner, styles.basicPosition]} />
        <Text style={styles.textHere2}>Possible warnings</Text>
      </View>
      <View style={[styles.topBar, styles.topPosition]}>
        <View style={[styles.topBarChild, styles.topPosition]} />
        <Text style={styles.titleHere}>MedMate</Text>
        <Pressable
          style={styles.backIcon}
          onPress={() => navigation.navigate("EventView")}
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
      <View style={[styles.basicBox5, styles.basicLayout]}>
        <View style={[styles.basicBoxInner, styles.basicPosition]} />
        <Text style={styles.textHere2}>Compartment number</Text>
      </View>
      <View style={[styles.basicBox6, styles.basicLayout]}>
        <View style={[styles.basicBoxInner, styles.basicPosition]} />
        <Text style={styles.textHere2}>Amount to be taken</Text>
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
    position: "absolute",
  },
  basicPosition: {
    borderRadius: Border.br_8xs,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  textFlexBox: {
    justifyContent: "center",
    color: Color.colorBlack,
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontSize: FontSize.size_base,
    left: "3.4%",
    top: "22.5%",
    width: "94.44%",
    height: "57.5%",
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
    backgroundColor: Color.colorLightcyan,
  },
  textHere: {
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    fontStyle: "italic",
    justifyContent: "center",
    color: Color.colorBlack,
  },
  basicBox: {
    top: 141,
    left: 18,
    height: 40,
    width: 324,
  },
  basicBoxItem: {
    backgroundColor: Color.colorLightcoral_100,
  },
  textHere1: {
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
  },
  basicBox1: {
    top: 549,
    left: 20,
  },
  basicBoxInner: {
    backgroundColor: Color.colorDimgray,
  },
  textHere2: {
    fontFamily: FontFamily.interRegular,
    color: Color.colorGray_100,
    textAlign: "left",
    alignItems: "center",
    display: "flex",
    fontSize: FontSize.size_base,
    left: "3.4%",
    top: "22.5%",
    width: "94.44%",
    height: "57.5%",
    position: "absolute",
  },
  basicBox2: {
    top: 206,
    left: 18,
    height: 40,
    width: 324,
  },
  basicBox3: {
    top: 413,
    left: 18,
    height: 40,
    width: 324,
  },
  basicBox4: {
    top: 481,
    left: 18,
    height: 40,
    width: 324,
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
    textAlign: "center",
    fontStyle: "italic",
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
  basicBox5: {
    top: 271,
    left: 18,
    height: 40,
    width: 324,
  },
  basicBox6: {
    top: 345,
    left: 18,
    height: 40,
    width: 324,
  },
  medicineView: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    overflow: "hidden",
    height: 800,
    width: "100%",
  },
});

export default MedicineView;
