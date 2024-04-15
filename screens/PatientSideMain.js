import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const PatientSideMain = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.patientSideMain}>
      <View style={[styles.referenceFrame, styles.topPosition]}>
        <View style={[styles.screen, styles.topPosition]} />
      </View>
      <View style={[styles.basicBox, styles.basicLayout]}>
        <View style={[styles.basicBoxChild, styles.childPosition]} />
        <Text style={[styles.textHere, styles.textFlexBox]}>
          Doctor’s notes
        </Text>
      </View>
      <View style={[styles.basicBox1, styles.basicBox1Position]}>
        <View style={[styles.basicBoxChild, styles.childPosition]} />
        <Text style={[styles.textHere, styles.textFlexBox]}>Memos</Text>
      </View>
      <Image
        style={[styles.image2Icon, styles.basicBox1Position]}
        contentFit="cover"
        source={require("../assets/image-2.png")}
      />
      <Image
        style={styles.image5Icon}
        contentFit="cover"
        source={require("../assets/image-5.png")}
      />
      <View style={[styles.upcomingEvents, styles.basicLayout]}>
        <View style={[styles.upcomingBackground, styles.childPosition]} />
        <Pressable
          style={styles.seeAllButton}
          onPress={() => navigation.navigate("UpcomingEventsList")}
        >
          <View style={[styles.seeAllButtonChild, styles.childPosition]} />
          <Text style={[styles.seeAll, styles.text2FlexBox]}>See all</Text>
        </Pressable>
        <View style={styles.timerContainer}>
          <View style={styles.background} />
          <Text style={[styles.eventTitle, styles.text2Clr]}>Coldkiller X</Text>
          <Text style={[styles.containerTitle, styles.titleTypo]}>Take</Text>
          <Text style={[styles.timerTitle, styles.timerPosition]}>In</Text>
          <View style={[styles.timer, styles.timerPosition]}>
            <Text style={[styles.s, styles.sTypo]}>28</Text>
            <Text style={[styles.text, styles.textTypo1]}>:</Text>
            <Text style={[styles.min, styles.sTypo]}>32</Text>
            <Text style={[styles.text1, styles.textTypo1]}>:</Text>
            <Text style={[styles.h, styles.sTypo]}>01</Text>
          </View>
        </View>
        <Text style={[styles.upcoming, styles.upcomingFlexBox]}>Upcoming</Text>
      </View>
      <View style={[styles.calendarWidget, styles.widgetLayout]}>
        <View style={[styles.widgetBackground, styles.widgetLayout]} />
        <View style={[styles.calendar1WeekLongFlat, styles.background1Layout]}>
          <View style={[styles.background1, styles.background1Layout]} />
          <View style={[styles.sun, styles.sunLayout]}>
            <View style={[styles.background2, styles.dayLayout]} />
            <Text style={[styles.dayNumber, styles.dayLayout]}>14</Text>
            <View style={[styles.alert, styles.alertLayout]}>
              <View style={[styles.alertBackground, styles.alertLayout]} />
              <Text style={[styles.text2, styles.textTypo]}>3</Text>
            </View>
          </View>
          <View style={[styles.sat, styles.sunLayout]}>
            <View style={[styles.background3, styles.dayLayout]} />
            <Text style={[styles.dayNumber, styles.dayLayout]}>13</Text>
            <View style={[styles.alert, styles.alertLayout]}>
              <View style={[styles.alertBackground, styles.alertLayout]} />
              <Text style={[styles.text2, styles.textTypo]}>4</Text>
            </View>
          </View>
          <View style={[styles.fri, styles.sunLayout]}>
            <View style={[styles.background2, styles.dayLayout]} />
            <Text style={[styles.dayNumber, styles.dayLayout]}>12</Text>
            <View style={[styles.alert, styles.alertLayout]}>
              <View style={[styles.alertBackground, styles.alertLayout]} />
              <Text style={[styles.text2, styles.textTypo]}>3</Text>
            </View>
          </View>
          <View style={[styles.thu, styles.sunLayout]}>
            <View style={[styles.background5, styles.dayLayout]} />
            <Text style={[styles.dayNumber, styles.dayLayout]}>11</Text>
            <View style={[styles.alert, styles.alertLayout]}>
              <View style={[styles.alertBackground, styles.alertLayout]} />
              <Text style={[styles.text2, styles.textTypo]}>2</Text>
            </View>
          </View>
          <View style={[styles.wed, styles.sunLayout]}>
            <View style={[styles.background6, styles.dayLayout]} />
            <Text style={[styles.dayNumber, styles.dayLayout]}>10</Text>
            <View style={[styles.alert4, styles.alertLayout]}>
              <View style={[styles.alertBackground, styles.alertLayout]} />
              <Text style={[styles.text2, styles.textTypo]}>1</Text>
            </View>
          </View>
          <View style={[styles.tue, styles.sunLayout]}>
            <View style={[styles.background7, styles.dayLayout]} />
            <Text style={[styles.dayNumber5, styles.text7FlexBox]}>9</Text>
            <View style={[styles.alert, styles.alertLayout]}>
              <View style={[styles.alertBackground, styles.alertLayout]} />
              <Text style={[styles.text7, styles.text7FlexBox]}>1</Text>
            </View>
          </View>
          <View style={[styles.mon, styles.sunLayout]}>
            <View style={[styles.background8, styles.dayLayout]} />
            <Text style={[styles.dayNumber, styles.dayLayout]}>8</Text>
            <View style={[styles.alert, styles.alertLayout]}>
              <View style={[styles.alertBackground, styles.alertLayout]} />
              <Text style={[styles.text2, styles.textTypo]}>1</Text>
            </View>
          </View>
        </View>
        <Pressable
          style={[styles.calendarWidgetTop, styles.background1Layout]}
          onPress={() => navigation.navigate("CalendarScreen")}
        >
          <View style={[styles.basicBox2, styles.backIconPosition]}>
            <View style={[styles.seeAllButtonChild, styles.childPosition]} />
            <Text style={[styles.textHere2, styles.seeAllClr]}>
              Open calendar
            </Text>
          </View>
          <Text style={[styles.eventToday, styles.backIconPosition]}>
            1 event today
          </Text>
        </Pressable>
      </View>
      <View style={[styles.topBar, styles.topPosition]}>
        <View style={[styles.topBarChild, styles.topPosition]} />
        <Text style={[styles.titleHere, styles.upcomingFlexBox]}>MedMate</Text>
        <Image
          style={[styles.backIcon, styles.backIconPosition]}
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
  topPosition: {
    width: 360,
    left: 0,
    top: 0,
    position: "absolute",
  },
  basicLayout: {
    width: 324,
    left: 18,
  },
  childPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    borderRadius: Border.br_8xs,
    position: "absolute",
    width: "100%",
  },
  textFlexBox: {
    alignItems: "center",
    display: "flex",
    position: "absolute",
  },
  basicBox1Position: {
    top: 540,
    height: 40,
    position: "absolute",
  },
  text2FlexBox: {
    justifyContent: "center",
    textAlign: "center",
  },
  text2Clr: {
    color: Color.colorPalevioletred_100,
    alignItems: "center",
    display: "flex",
    position: "absolute",
  },
  titleTypo: {
    fontSize: FontSize.size_3xs,
    top: 14,
    color: Color.colorPalevioletred_100,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
  },
  timerPosition: {
    left: 191,
    position: "absolute",
  },
  sTypo: {
    top: 1,
    color: Color.colorPalevioletred_100,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
    textAlign: "center",
    position: "absolute",
  },
  textTypo1: {
    height: 19,
    width: 6,
    color: Color.colorPalevioletred_100,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
    textAlign: "left",
    top: 0,
    position: "absolute",
  },
  upcomingFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  widgetLayout: {
    height: 104,
    width: 324,
    position: "absolute",
  },
  background1Layout: {
    height: 52,
    width: 324,
    left: 0,
    position: "absolute",
  },
  sunLayout: {
    height: 44,
    width: 44,
    top: 4,
    borderRadius: Border.br_9xs,
    position: "absolute",
    overflow: "hidden",
  },
  dayLayout: {
    width: 36,
    left: 4,
    height: 36,
    top: 4,
  },
  alertLayout: {
    height: 16,
    width: 16,
    top: 0,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.interBlack,
    fontWeight: "900",
    height: 16,
    width: 16,
    fontSize: FontSize.size_3xs,
    left: 0,
    top: 0,
  },
  text7FlexBox: {
    color: Color.colorWhite,
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    display: "flex",
    position: "absolute",
  },
  backIconPosition: {
    top: 6,
    position: "absolute",
  },
  seeAllClr: {
    color: Color.colorMistyrose,
    fontSize: FontSize.size_base,
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
    backgroundColor: Color.colorLightyellow_100,
    height: 800,
  },
  referenceFrame: {
    overflow: "hidden",
    height: 800,
    backgroundColor: Color.colorWhite,
    width: 360,
  },
  basicBoxChild: {
    backgroundColor: Color.colorDimgray,
    borderRadius: Border.br_8xs,
  },
  textHere: {
    width: "94.44%",
    left: "3.4%",
    color: Color.colorGray_100,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    top: "22.5%",
    height: "57.5%",
    display: "flex",
    fontSize: FontSize.size_base,
  },
  basicBox: {
    top: 471,
    height: 40,
    position: "absolute",
  },
  basicBox1: {
    width: 324,
    left: 18,
  },
  image2Icon: {
    left: 304,
    width: 38,
  },
  image5Icon: {
    top: 456,
    left: 299,
    width: 56,
    height: 70,
    position: "absolute",
  },
  upcomingBackground: {
    backgroundColor: Color.colorLightcoral_100,
    borderRadius: Border.br_8xs,
  },
  seeAllButtonChild: {
    backgroundColor: Color.colorPalevioletred_100,
    borderRadius: Border.br_8xs,
  },
  seeAll: {
    height: "57.67%",
    width: "94.41%",
    top: "22.67%",
    left: "3.39%",
    color: Color.colorMistyrose,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    alignItems: "center",
    display: "flex",
    position: "absolute",
  },
  seeAllButton: {
    height: "19.23%",
    width: "18.21%",
    top: "74.36%",
    right: "41.05%",
    bottom: "6.41%",
    left: "40.74%",
    position: "absolute",
  },
  background: {
    width: 308,
    height: 67,
    backgroundColor: Color.colorMistyrose,
    left: 0,
    top: 0,
    position: "absolute",
  },
  eventTitle: {
    top: 26,
    width: 176,
    height: 27,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
    left: 15,
    textAlign: "left",
  },
  containerTitle: {
    left: 15,
    position: "absolute",
  },
  timerTitle: {
    fontSize: FontSize.size_3xs,
    top: 14,
    color: Color.colorPalevioletred_100,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
  },
  s: {
    left: 75,
  },
  text: {
    left: 29,
  },
  min: {
    left: 38,
  },
  text1: {
    left: 66,
  },
  h: {
    left: 2,
  },
  timer: {
    top: 27,
    width: 102,
    height: 26,
    overflow: "hidden",
  },
  timerContainer: {
    height: "42.95%",
    width: "95.06%",
    top: "25%",
    right: "2.47%",
    bottom: "32.05%",
    left: "2.47%",
    position: "absolute",
    overflow: "hidden",
  },
  upcoming: {
    top: "6.41%",
    left: "3.09%",
    color: Color.colorMistyrose,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  upcomingEvents: {
    top: 168,
    height: 156,
    position: "absolute",
    overflow: "hidden",
  },
  widgetBackground: {
    backgroundColor: Color.colorLightcoral_100,
    left: 0,
    top: 0,
  },
  background1: {
    backgroundColor: Color.colorMistyrose,
    top: 0,
  },
  background2: {
    backgroundColor: Color.colorBurlywood,
    height: 36,
    borderRadius: Border.br_9xs,
    left: 4,
    position: "absolute",
  },
  dayNumber: {
    height: 36,
    color: Color.colorPalevioletred_100,
    alignItems: "center",
    display: "flex",
    position: "absolute",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
    justifyContent: "center",
    textAlign: "center",
  },
  alertBackground: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorSalmon,
    left: 0,
  },
  text2: {
    color: Color.colorPalevioletred_100,
    alignItems: "center",
    display: "flex",
    position: "absolute",
    justifyContent: "center",
    textAlign: "center",
  },
  alert: {
    left: 28,
    width: 16,
    overflow: "hidden",
  },
  sun: {
    left: 272,
  },
  background3: {
    backgroundColor: "#ffa7a1",
    height: 36,
    borderRadius: Border.br_9xs,
    left: 4,
    position: "absolute",
  },
  sat: {
    left: 228,
  },
  fri: {
    left: 184,
  },
  background5: {
    backgroundColor: "#f3f3a0",
    height: 36,
    borderRadius: Border.br_9xs,
    left: 4,
    position: "absolute",
  },
  thu: {
    left: 140,
  },
  background6: {
    height: 36,
    borderRadius: Border.br_9xs,
    left: 4,
    position: "absolute",
    backgroundColor: Color.colorMistyrose,
  },
  alert4: {
    display: "none",
    left: 28,
    width: 16,
    overflow: "hidden",
  },
  wed: {
    left: 96,
  },
  background7: {
    backgroundColor: "#3f8eff",
    height: 36,
    borderRadius: Border.br_9xs,
    left: 4,
    position: "absolute",
  },
  dayNumber5: {
    height: 36,
    width: 36,
    left: 4,
    top: 4,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
  },
  text7: {
    fontFamily: FontFamily.interBlack,
    fontWeight: "900",
    height: 16,
    width: 16,
    fontSize: FontSize.size_3xs,
    left: 0,
    top: 0,
  },
  tue: {
    left: 52,
  },
  background8: {
    height: 36,
    borderRadius: Border.br_9xs,
    left: 4,
    position: "absolute",
    backgroundColor: Color.colorLightyellow_100,
  },
  mon: {
    left: 8,
  },
  calendar1WeekLongFlat: {
    top: 52,
    overflow: "hidden",
  },
  textHere2: {
    width: "94.43%",
    left: "3.36%",
    alignItems: "center",
    display: "flex",
    position: "absolute",
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    top: "22.5%",
    height: "57.5%",
    color: Color.colorMistyrose,
  },
  basicBox2: {
    left: 198,
    width: 122,
    height: 40,
  },
  eventToday: {
    left: 6,
    width: 186,
    fontSize: FontSize.size_xl,
    top: 6,
    color: Color.colorMistyrose,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    height: 40,
  },
  calendarWidgetTop: {
    top: 0,
    overflow: "hidden",
  },
  calendarWidget: {
    top: 50,
    borderRadius: Border.br_8xs,
    left: 18,
    height: 104,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  topBarChild: {
    backgroundColor: Color.colorGray_300,
    height: 36,
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
    left: 12,
    width: 24,
    height: 24,
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
    height: 36,
    overflow: "hidden",
  },
  patientSideMain: {
    flex: 1,
    overflow: "hidden",
    height: 800,
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default PatientSideMain;
