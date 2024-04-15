import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const UpcomingEventsList = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.upcomingEventsList, styles.referenceFrameLayout]}>
      <View style={[styles.referenceFrame, styles.screenPosition]}>
        <View style={[styles.screen, styles.screenPosition]} />
      </View>
      <View style={styles.upcomingEvents}>
        <View style={[styles.upcomingBackground, styles.basicPosition]} />
        <Pressable
          style={styles.basicBox}
          onPress={() => navigation.navigate("CalendarScreen")}
        >
          <View style={[styles.basicBoxChild, styles.basicPosition]} />
          <Text style={styles.textHere}>To calendar</Text>
        </Pressable>
        <View style={[styles.timerContainer100h, styles.timerPosition1]}>
          <View style={styles.background} />
          <Text style={[styles.eventTitle, styles.eventTypo]}>Qleed pills</Text>
          <Text style={[styles.containerTitle, styles.timerContainerTypo]}>
            Take
          </Text>
          <Text style={[styles.timerTitle, styles.timerPosition]}>In</Text>
          <View style={styles.basicBox1}>
            <View style={[styles.basicBoxItem, styles.basicPosition]} />
            <Text style={styles.textHere1}>100+ hours</Text>
          </View>
        </View>
        <View style={[styles.timerContainer100h1, styles.timerPosition1]}>
          <View style={styles.background} />
          <Text style={[styles.eventTitle, styles.eventTypo]}>Zazamax</Text>
          <Text style={[styles.containerTitle, styles.timerContainerTypo]}>
            Take
          </Text>
          <Text style={[styles.timerTitle, styles.timerPosition]}>In</Text>
          <View style={styles.basicBox1}>
            <View style={[styles.basicBoxItem, styles.basicPosition]} />
            <Text style={styles.textHere1}>100+ hours</Text>
          </View>
        </View>
        <View style={[styles.timerContainer100h2, styles.timerPosition1]}>
          <View style={styles.background} />
          <Text style={[styles.eventTitle, styles.eventTypo]}>Ybuprofen</Text>
          <Text style={[styles.containerTitle, styles.timerContainerTypo]}>
            Take
          </Text>
          <Text style={[styles.timerTitle, styles.timerPosition]}>In</Text>
          <View style={styles.basicBox1}>
            <View style={[styles.basicBoxItem, styles.basicPosition]} />
            <Text style={styles.textHere1}>100+ hours</Text>
          </View>
        </View>
        <View style={[styles.timerContainer, styles.timerPosition1]}>
          <View style={styles.background} />
          <Text style={[styles.eventTitle3, styles.eventTypo]}>
            Coldkiller X
          </Text>
          <Text style={[styles.containerTitle3, styles.timerContainerTypo]}>
            Take
          </Text>
          <Text style={[styles.timerTitle3, styles.timerPosition]}>In</Text>
          <View style={[styles.timer, styles.timerPosition]}>
            <Text style={[styles.s, styles.sTypo]}>28</Text>
            <Text style={[styles.text, styles.textTypo1]}>:</Text>
            <Text style={[styles.min, styles.minTypo]}>32</Text>
            <Text style={[styles.text1, styles.textTypo]}>:</Text>
            <Text style={[styles.h, styles.hTypo]}>97</Text>
          </View>
        </View>
        <Text style={[styles.april13, styles.aprilTypo]}>April 13</Text>
        <View style={[styles.timerContainer1, styles.timerContainerPosition]}>
          <View style={styles.background} />
          <Text style={[styles.eventTitle3, styles.eventTypo]}>Zazamax</Text>
          <Text style={[styles.containerTitle3, styles.timerContainerTypo]}>
            Take
          </Text>
          <Text style={[styles.timerTitle3, styles.timerPosition]}>In</Text>
          <View style={[styles.timer, styles.timerPosition]}>
            <Text style={[styles.s, styles.sTypo]}>55</Text>
            <Text style={[styles.text, styles.textTypo1]}>:</Text>
            <Text style={[styles.min, styles.minTypo]}>54</Text>
            <Text style={[styles.text1, styles.textTypo]}>:</Text>
            <Text style={[styles.h, styles.hTypo]}>79</Text>
          </View>
        </View>
        <View style={[styles.timerContainer2, styles.timerContainerPosition]}>
          <View style={styles.background} />
          <Text style={[styles.eventTitle, styles.eventTypo]}>Ybuprofen</Text>
          <Text style={[styles.containerTitle, styles.timerContainerTypo]}>
            Take
          </Text>
          <Text style={[styles.timerTitle, styles.timerPosition]}>In</Text>
          <View style={[styles.timer, styles.timerPosition]}>
            <Text style={[styles.s2, styles.sTypo]}>09</Text>
            <Text style={[styles.text4, styles.textTypo1]}>:</Text>
            <Text style={[styles.min2, styles.minTypo]}>44</Text>
            <Text style={[styles.text5, styles.textTypo]}>:</Text>
            <Text style={[styles.h2, styles.hTypo]}>78</Text>
          </View>
        </View>
        <View style={[styles.timerContainer3, styles.timerContainerPosition]}>
          <View style={styles.background} />
          <Text style={[styles.eventTitle3, styles.eventTypo]}>
            Coldkiller X
          </Text>
          <Text style={[styles.containerTitle3, styles.timerContainerTypo]}>
            Take
          </Text>
          <Text style={[styles.timerTitle3, styles.timerPosition]}>In</Text>
          <View style={[styles.timer, styles.timerPosition]}>
            <Text style={[styles.s, styles.sTypo]}>28</Text>
            <Text style={[styles.text, styles.textTypo1]}>:</Text>
            <Text style={[styles.min, styles.minTypo]}>32</Text>
            <Text style={[styles.text1, styles.textTypo]}>:</Text>
            <Text style={[styles.h, styles.hTypo]}>73</Text>
          </View>
        </View>
        <Text style={[styles.april12, styles.aprilTypo]}>April 12</Text>
        <View style={[styles.timerContainer4, styles.timerContainerPosition]}>
          <View style={styles.background} />
          <Text style={[styles.eventTitle, styles.eventTypo]}>Ybuprofen</Text>
          <Text style={[styles.containerTitle, styles.timerContainerTypo]}>
            Take
          </Text>
          <Text style={[styles.timerTitle, styles.timerPosition]}>In</Text>
          <View style={[styles.timer, styles.timerPosition]}>
            <Text style={[styles.s2, styles.sTypo]}>09</Text>
            <Text style={[styles.text4, styles.textTypo1]}>:</Text>
            <Text style={[styles.min2, styles.minTypo]}>44</Text>
            <Text style={[styles.text5, styles.textTypo]}>:</Text>
            <Text style={[styles.h4, styles.h4Typo]}>54</Text>
          </View>
        </View>
        <View style={[styles.timerContainer5, styles.timerContainerPosition]}>
          <View style={styles.background} />
          <Text style={[styles.eventTitle3, styles.eventTypo]}>
            Coldkiller X
          </Text>
          <Text style={[styles.containerTitle3, styles.timerContainerTypo]}>
            Take
          </Text>
          <Text style={[styles.timerTitle3, styles.timerPosition]}>In</Text>
          <View style={[styles.timer, styles.timerPosition]}>
            <Text style={[styles.s, styles.sTypo]}>28</Text>
            <Text style={[styles.text, styles.textTypo1]}>:</Text>
            <Text style={[styles.min, styles.minTypo]}>32</Text>
            <Text style={[styles.text1, styles.textTypo]}>:</Text>
            <Text style={[styles.h5, styles.h4Typo]}>49</Text>
          </View>
        </View>
        <Text style={[styles.april11, styles.aprilTypo]}>April 11</Text>
        <Pressable
          style={[styles.timerContainer6, styles.timerContainerPosition]}
          onPress={() => navigation.navigate("EventView")}
        >
          <View style={styles.background} />
          <Text style={[styles.eventTitle3, styles.eventTypo]}>
            Coldkiller X
          </Text>
          <Text style={[styles.containerTitle3, styles.timerContainerTypo]}>
            Take
          </Text>
          <Text style={[styles.timerTitle3, styles.timerPosition]}>In</Text>
          <View style={[styles.timer, styles.timerPosition]}>
            <Text style={[styles.s, styles.sTypo]}>28</Text>
            <Text style={[styles.text, styles.textTypo1]}>:</Text>
            <Text style={[styles.min, styles.minTypo]}>32</Text>
            <Text style={[styles.text1, styles.textTypo]}>:</Text>
            <Text style={[styles.h, styles.hTypo]}>01</Text>
          </View>
        </Pressable>
        <Text style={[styles.todayApril9Container, styles.aprilLayout]}>
          <Text style={styles.todayApril9Container1}>
            <Text style={styles.today}>Today:</Text>
            <Text style={styles.timerContainerTypo}>{` `}</Text>
            <Text style={styles.aprilTypo}>April 9</Text>
          </Text>
        </Text>
        <Text style={styles.upcoming}>Upcoming</Text>
      </View>
      <View style={[styles.topBar, styles.topPosition]}>
        <View style={[styles.topBarChild, styles.topPosition]} />
        <Text style={styles.titleHere}>MedMate</Text>
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
    </View>
  );
};

const styles = StyleSheet.create({
  referenceFrameLayout: {
    height: 969,
    overflow: "hidden",
  },
  screenPosition: {
    width: 360,
    backgroundColor: Color.colorLightyellow_100,
    left: 0,
    top: 0,
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
  timerPosition1: {
    height: "7.4%",
    left: "3.09%",
    right: "1.85%",
    width: "95.06%",
    position: "absolute",
    overflow: "hidden",
  },
  eventTypo: {
    height: 27,
    width: 176,
    textAlign: "left",
    fontSize: FontSize.size_xl,
    top: 26,
    left: 15,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  timerContainerTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  timerPosition: {
    left: 191,
    position: "absolute",
  },
  sTypo: {
    left: 75,
    top: 1,
    fontSize: FontSize.size_xl,
    textAlign: "center",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  textTypo1: {
    height: 19,
    width: 6,
    left: 29,
    textAlign: "left",
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    top: 0,
    position: "absolute",
  },
  minTypo: {
    top: 1,
    fontSize: FontSize.size_xl,
    textAlign: "center",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  textTypo: {
    left: 66,
    height: 19,
    width: 6,
    textAlign: "left",
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    top: 0,
    position: "absolute",
  },
  hTypo: {
    left: 2,
    top: 1,
    fontSize: FontSize.size_xl,
    textAlign: "center",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  aprilTypo: {
    fontFamily: FontFamily.interLight,
    fontStyle: "italic",
  },
  timerContainerPosition: {
    left: "2.47%",
    right: "2.47%",
    height: "7.4%",
    width: "95.06%",
    position: "absolute",
    overflow: "hidden",
  },
  h4Typo: {
    left: 1,
    top: 1,
    fontSize: FontSize.size_xl,
    textAlign: "center",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  aprilLayout: {
    width: "45.06%",
    height: "2.1%",
    fontSize: FontSize.size_base,
    textAlign: "left",
    alignItems: "center",
    display: "flex",
    color: Color.colorMistyrose,
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
    height: 800,
  },
  referenceFrame: {
    overflow: "hidden",
    height: 969,
  },
  upcomingBackground: {
    backgroundColor: Color.colorLightcoral_100,
  },
  basicBoxChild: {
    backgroundColor: Color.colorPalevioletred_100,
  },
  textHere: {
    height: "57.43%",
    width: "94.45%",
    top: "22.57%",
    left: "3.41%",
    fontSize: FontSize.size_5xl,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.colorMistyrose,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  basicBox: {
    height: "3.87%",
    top: "95.58%",
    bottom: "0.55%",
    left: "3.09%",
    right: "1.85%",
    width: "95.06%",
    position: "absolute",
  },
  background: {
    backgroundColor: Color.colorMistyrose,
    width: 308,
    height: 67,
    left: 0,
    top: 0,
    position: "absolute",
  },
  eventTitle: {
    color: Color.colorPalevioletred_200,
  },
  containerTitle: {
    fontSize: FontSize.size_3xs,
    top: 14,
    fontWeight: "500",
    textAlign: "left",
    color: Color.colorPalevioletred_200,
    left: 15,
    position: "absolute",
  },
  timerTitle: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_3xs,
    top: 14,
    textAlign: "left",
    color: Color.colorPalevioletred_200,
  },
  basicBoxItem: {
    backgroundColor: Color.colorPalevioletred_200,
  },
  textHere1: {
    height: "57.31%",
    width: "94.41%",
    top: "22.31%",
    left: "3.43%",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_base,
    textAlign: "left",
    alignItems: "center",
    display: "flex",
    color: Color.colorMistyrose,
    position: "absolute",
  },
  basicBox1: {
    height: "38.81%",
    width: "33.12%",
    top: "40.3%",
    right: "4.87%",
    bottom: "20.9%",
    left: "62.01%",
    position: "absolute",
  },
  timerContainer100h: {
    top: "87.62%",
    bottom: "4.97%",
  },
  timerContainer100h1: {
    top: "79.67%",
    bottom: "12.93%",
  },
  timerContainer100h2: {
    top: "71.71%",
    bottom: "20.88%",
  },
  eventTitle3: {
    color: Color.colorPalevioletred_100,
  },
  containerTitle3: {
    color: Color.colorPalevioletred_100,
    fontSize: FontSize.size_3xs,
    top: 14,
    fontWeight: "500",
    textAlign: "left",
    left: 15,
    position: "absolute",
  },
  timerTitle3: {
    color: Color.colorPalevioletred_100,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_3xs,
    top: 14,
    textAlign: "left",
  },
  s: {
    color: Color.colorPalevioletred_100,
  },
  text: {
    color: Color.colorPalevioletred_100,
  },
  min: {
    left: 38,
    color: Color.colorPalevioletred_100,
  },
  text1: {
    color: Color.colorPalevioletred_100,
  },
  h: {
    color: Color.colorPalevioletred_100,
  },
  timer: {
    top: 27,
    width: 102,
    height: 26,
    overflow: "hidden",
  },
  timerContainer: {
    top: "63.76%",
    bottom: "28.84%",
  },
  april13: {
    top: "61.1%",
    left: "3.7%",
    width: "45.06%",
    height: "2.1%",
    fontSize: FontSize.size_base,
    textAlign: "left",
    alignItems: "center",
    display: "flex",
    color: Color.colorMistyrose,
    position: "absolute",
  },
  timerContainer1: {
    top: "52.6%",
    bottom: "40%",
  },
  s2: {
    color: Color.colorPalevioletred_200,
  },
  text4: {
    color: Color.colorPalevioletred_200,
  },
  min2: {
    left: 37,
    color: Color.colorPalevioletred_200,
  },
  text5: {
    color: Color.colorPalevioletred_200,
  },
  h2: {
    color: Color.colorPalevioletred_200,
  },
  timerContainer2: {
    top: "44.64%",
    bottom: "47.96%",
  },
  timerContainer3: {
    top: "36.69%",
    bottom: "55.91%",
  },
  april12: {
    top: "34.03%",
    width: "45.06%",
    height: "2.1%",
    fontSize: FontSize.size_base,
    textAlign: "left",
    alignItems: "center",
    display: "flex",
    color: Color.colorMistyrose,
    position: "absolute",
    left: "3.09%",
  },
  h4: {
    color: Color.colorPalevioletred_200,
  },
  timerContainer4: {
    top: "25.52%",
    bottom: "67.07%",
  },
  h5: {
    color: Color.colorPalevioletred_100,
  },
  timerContainer5: {
    top: "17.57%",
    bottom: "75.03%",
  },
  april11: {
    top: "14.92%",
    width: "45.06%",
    height: "2.1%",
    fontSize: FontSize.size_base,
    textAlign: "left",
    alignItems: "center",
    display: "flex",
    color: Color.colorMistyrose,
    position: "absolute",
    left: "3.09%",
  },
  timerContainer6: {
    top: "6.41%",
    bottom: "86.19%",
  },
  today: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  todayApril9Container1: {
    width: "100%",
  },
  todayApril9Container: {
    top: "3.76%",
    left: "3.09%",
  },
  upcoming: {
    width: "24.07%",
    top: "1.1%",
    height: "2.1%",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.colorMistyrose,
    left: "3.09%",
    position: "absolute",
  },
  upcomingEvents: {
    top: 50,
    left: 18,
    width: 324,
    height: 905,
    position: "absolute",
    overflow: "hidden",
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
    fontStyle: "italic",
    textAlign: "center",
    position: "absolute",
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
  upcomingEventsList: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    overflow: "hidden",
    width: "100%",
  },
});

export default UpcomingEventsList;
