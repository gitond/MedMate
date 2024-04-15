import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Padding, Border } from "../GlobalStyles";

const CalendarScreen3DotNavigat = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.calendarScreen3DotNavigat}>
      <View style={styles.referenceFrame}>
        <View style={styles.screen} />
      </View>
      <View style={styles.tableContent}>
        <View style={[styles.weekdays, styles.hoursFlexBox]}>
          <Text style={[styles.week, styles.monLayout]}>Week</Text>
          <Text style={[styles.mon, styles.monLayout]}>{`8
Mon`}</Text>
          <Text style={[styles.tue, styles.tueTypo]}>{`9
Tue`}</Text>
          <Text style={[styles.mon, styles.monLayout]}>{`10
Wed`}</Text>
          <Text style={[styles.mon, styles.monLayout]}>{`11
Thu`}</Text>
          <Text style={[styles.mon, styles.monLayout]}>{`12
Fri`}</Text>
          <Text style={[styles.mon, styles.monLayout]}>{`13
Sat`}</Text>
          <Text style={[styles.mon, styles.monLayout]}>{`14
Sun`}</Text>
        </View>
        <View style={styles.linesHours}>
          <View style={styles.hoursFlexBox}>
            <Text style={[styles.text, styles.monClr]}>09:00</Text>
            <Text style={[styles.text, styles.monClr]}>10:00</Text>
            <Text style={[styles.text, styles.monClr]}>11:00</Text>
            <Text style={[styles.text, styles.monClr]}>12:00</Text>
            <Text style={[styles.text, styles.monClr]}>13:00</Text>
            <Text style={[styles.text, styles.monClr]}>14:00</Text>
            <Text style={[styles.text, styles.monClr]}>15:00</Text>
            <Text style={[styles.text, styles.monClr]}>16:00</Text>
            <Text style={[styles.text, styles.monClr]}>17:00</Text>
            <Text style={[styles.text, styles.monClr]}>18:00</Text>
          </View>
          <View style={[styles.lines, styles.timeFlexBox]}>
            <View style={styles.linesChild} />
            <View style={[styles.linesItem, styles.linesChildBorder]} />
            <View style={[styles.linesInner, styles.linesChildBorder]} />
            <View style={[styles.lineView, styles.linesChildBorder]} />
            <View style={[styles.linesChild1, styles.linesChildBorder]} />
            <View style={[styles.linesChild2, styles.linesChildBorder]} />
            <View style={[styles.linesChild3, styles.linesChildBorder]} />
            <View style={[styles.linesChild4, styles.linesChildBorder]} />
            <View style={[styles.linesChild5, styles.linesChildBorder]} />
            <View style={[styles.linesChild6, styles.linesChildBorder]} />
            <View style={[styles.monx, styles.monxLayout]}>
              <Text style={[styles.coldkillerX, styles.text10Typo]}>
                Coldkiller X
              </Text>
              <View style={[styles.time, styles.timeFlexBox]}>
                <Image
                  style={styles.phclockLightIcon}
                  contentFit="cover"
                  source={require("../assets/phclocklight.png")}
                />
                <Text style={[styles.text10, styles.textLayout]}>@ 09:00</Text>
              </View>
            </View>
            <View style={[styles.tuex, styles.monxLayout]}>
              <Text style={[styles.coldkillerX, styles.text10Typo]}>
                Coldkiller X
              </Text>
              <View style={[styles.time, styles.timeFlexBox]}>
                <Image
                  style={styles.phclockLightIcon}
                  contentFit="cover"
                  source={require("../assets/phclocklight.png")}
                />
                <Text style={[styles.text10, styles.textLayout]}>@ 09:00</Text>
              </View>
            </View>
            <View style={[styles.thux, styles.thuxLayout]}>
              <Text style={[styles.coldkillerX, styles.text10Typo]}>
                Coldkiller X
              </Text>
              <View style={[styles.time, styles.timeFlexBox]}>
                <Image
                  style={styles.phclockLightIcon}
                  contentFit="cover"
                  source={require("../assets/phclocklight.png")}
                />
                <Text style={[styles.text10, styles.textLayout]}>@ 09:00</Text>
              </View>
            </View>
            <View style={[styles.thuy, styles.thuyClr]}>
              <Text style={[styles.coldkillerX, styles.text10Typo]}>
                Ybuprofen
              </Text>
              <View style={[styles.time, styles.timeFlexBox]}>
                <Image
                  style={styles.phclockLightIcon}
                  contentFit="cover"
                  source={require("../assets/phclocklight.png")}
                />
                <Text style={[styles.text10, styles.textLayout]}>@ 14:10</Text>
              </View>
            </View>
            <View style={[styles.frix, styles.frixLayout]}>
              <Text style={[styles.coldkillerX, styles.text10Typo]}>
                Coldkiller X
              </Text>
              <View style={[styles.time, styles.timeFlexBox]}>
                <Image
                  style={styles.phclockLightIcon}
                  contentFit="cover"
                  source={require("../assets/phclocklight.png")}
                />
                <Text style={[styles.text10, styles.textLayout]}>@ 09:00</Text>
              </View>
            </View>
            <View style={[styles.friy, styles.frixLayout]}>
              <Text style={[styles.coldkillerX, styles.text10Typo]}>
                Ybuprofen
              </Text>
              <View style={[styles.time, styles.timeFlexBox]}>
                <Image
                  style={styles.phclockLightIcon}
                  contentFit="cover"
                  source={require("../assets/phclocklight.png")}
                />
                <Text style={[styles.text10, styles.textLayout]}>@ 14:10</Text>
              </View>
            </View>
            <View style={[styles.friz, styles.frizClr]}>
              <Text style={[styles.zazamax, styles.text16Typo]}>Zazamax</Text>
              <View style={[styles.time, styles.timeFlexBox]}>
                <Image
                  style={styles.phclockLightIcon}
                  contentFit="cover"
                  source={require("../assets/phclocklight1.png")}
                />
                <Text style={[styles.text16, styles.text16Typo]}>@ 15:20</Text>
              </View>
            </View>
            <View style={[styles.satx, styles.satxLayout]}>
              <Text style={[styles.coldkillerX, styles.text10Typo]}>
                Coldkiller X
              </Text>
              <View style={[styles.time, styles.timeFlexBox]}>
                <Image
                  style={styles.phclockLightIcon}
                  contentFit="cover"
                  source={require("../assets/phclocklight.png")}
                />
                <Text style={[styles.text10, styles.textLayout]}>@ 09:00</Text>
              </View>
            </View>
            <View style={[styles.saty, styles.satxLayout]}>
              <Text style={[styles.coldkillerX, styles.text10Typo]}>
                Ybuprofen
              </Text>
              <View style={[styles.time, styles.timeFlexBox]}>
                <Image
                  style={styles.phclockLightIcon}
                  contentFit="cover"
                  source={require("../assets/phclocklight.png")}
                />
                <Text style={[styles.text10, styles.textLayout]}>@ 14:10</Text>
              </View>
            </View>
            <View style={[styles.satz, styles.satxLayout]}>
              <Text style={[styles.zazamax, styles.text16Typo]}>Zazamax</Text>
              <View style={[styles.time, styles.timeFlexBox]}>
                <Image
                  style={styles.phclockLightIcon}
                  contentFit="cover"
                  source={require("../assets/phclocklight1.png")}
                />
                <Text style={[styles.text16, styles.text16Typo]}>@ 15:20</Text>
              </View>
            </View>
            <View style={[styles.satq, styles.satxLayout]}>
              <Text style={[styles.qleedPills, styles.text20Typo]}>
                Qleed Pills
              </Text>
              <View style={[styles.time, styles.timeFlexBox]}>
                <Image
                  style={styles.phclockLightIcon}
                  contentFit="cover"
                  source={require("../assets/phclocklight2.png")}
                />
                <Text style={[styles.text20, styles.text20Typo]}>@ 17:00</Text>
              </View>
            </View>
            <View style={[styles.sunx, styles.sunxLayout]}>
              <Text style={[styles.coldkillerX, styles.text10Typo]}>
                Coldkiller X
              </Text>
              <View style={[styles.time, styles.timeFlexBox]}>
                <Image
                  style={styles.phclockLightIcon}
                  contentFit="cover"
                  source={require("../assets/phclocklight.png")}
                />
                <Text style={[styles.text10, styles.textLayout]}>@ 09:00</Text>
              </View>
            </View>
            <View style={[styles.suny, styles.sunxLayout]}>
              <Text style={[styles.coldkillerX, styles.text10Typo]}>
                Ybuprofen
              </Text>
              <View style={[styles.time, styles.timeFlexBox]}>
                <Image
                  style={styles.phclockLightIcon}
                  contentFit="cover"
                  source={require("../assets/phclocklight.png")}
                />
                <Text style={[styles.text10, styles.textLayout]}>@ 14:10</Text>
              </View>
            </View>
            <View style={[styles.sunz, styles.sunxLayout]}>
              <Text style={[styles.zazamax, styles.text16Typo]}>Zazamax</Text>
              <View style={[styles.time, styles.timeFlexBox]}>
                <Image
                  style={styles.phclockLightIcon}
                  contentFit="cover"
                  source={require("../assets/phclocklight1.png")}
                />
                <Text style={[styles.text16, styles.text16Typo]}>@ 15:20</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.topBar, styles.topPosition]}>
        <View style={[styles.topBarChild, styles.topPosition]} />
        <Text style={styles.titleHere}>MedMate</Text>
        <Pressable
          style={styles.backIcon}
          onPress={() => navigation.navigate("CalendarScreen")}
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
      <Pressable
        style={styles.calendarScreen3DotNavigatChild}
        onPress={() => navigation.navigate("UpcomingEventsList")}
      />
      <Text style={[styles.toListView, styles.tueTypo]}>TO LIST VIEW</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  hoursFlexBox: {
    justifyContent: "space-between",
    alignSelf: "stretch",
  },
  monLayout: {
    width: 64,
    alignItems: "flex-end",
    fontSize: FontSize.size_base,
  },
  tueTypo: {
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    justifyContent: "center",
    textAlign: "center",
    display: "flex",
    lineHeight: 16,
  },
  monClr: {
    display: "flex",
    color: Color.colorDarkgray,
    fontFamily: FontFamily.montserratRegular,
    lineHeight: 16,
  },
  timeFlexBox: {
    alignSelf: "stretch",
    justifyContent: "center",
  },
  linesChildBorder: {
    marginTop: 10,
    borderTopWidth: 1,
    borderColor: Color.colorGainsboro_100,
    alignSelf: "stretch",
    borderStyle: "solid",
    flex: 1,
  },
  monxLayout: {
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: 0,
    borderWidth: 0.6,
    borderRadius: Border.br_7xs,
    width: "16.21%",
    height: "10.25%",
    borderColor: Color.colorOrangered,
    backgroundColor: Color.colorPink,
    bottom: "85.39%",
    top: "4.35%",
    justifyContent: "space-between",
    alignItems: "center",
    borderStyle: "solid",
    position: "absolute",
    overflow: "hidden",
  },
  text10Typo: {
    color: Color.colorOrangered,
    fontSize: FontSize.size_3xs,
    textAlign: "center",
    fontFamily: FontFamily.montserratRegular,
  },
  textLayout: {
    marginLeft: 3,
    height: 14,
    width: 62,
    justifyContent: "center",
    display: "flex",
    lineHeight: 16,
    alignItems: "center",
  },
  thuxLayout: {
    left: "43.16%",
    right: "40.63%",
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: 0,
    borderWidth: 0.6,
    borderRadius: Border.br_7xs,
    width: "16.21%",
    height: "10.25%",
    justifyContent: "space-between",
    alignItems: "center",
    borderStyle: "solid",
    position: "absolute",
    overflow: "hidden",
  },
  thuyClr: {
    borderColor: Color.colorLightcoral_200,
    backgroundColor: Color.colorLightpink_100,
    bottom: "33.85%",
    top: "55.9%",
  },
  frixLayout: {
    left: "58.25%",
    right: "25.54%",
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: 0,
    borderWidth: 0.6,
    borderRadius: Border.br_7xs,
    width: "16.21%",
    height: "10.25%",
    justifyContent: "space-between",
    alignItems: "center",
    borderStyle: "solid",
    position: "absolute",
    overflow: "hidden",
  },
  frizClr: {
    borderColor: Color.colorDodgerblue_100,
    backgroundColor: Color.colorLavender,
    bottom: "22.75%",
    top: "66.99%",
  },
  text16Typo: {
    color: Color.colorDodgerblue_100,
    fontSize: FontSize.size_3xs,
    textAlign: "center",
    fontFamily: FontFamily.montserratRegular,
  },
  satxLayout: {
    left: "70.88%",
    right: "12.91%",
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: 0,
    borderWidth: 0.6,
    borderRadius: Border.br_7xs,
    width: "16.21%",
    height: "10.25%",
    justifyContent: "space-between",
    alignItems: "center",
    borderStyle: "solid",
    position: "absolute",
    overflow: "hidden",
  },
  text20Typo: {
    color: Color.colorSkyblue_100,
    fontSize: FontSize.size_3xs,
    textAlign: "center",
    fontFamily: FontFamily.montserratRegular,
  },
  sunxLayout: {
    left: "83.86%",
    right: "-0.07%",
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: 0,
    borderWidth: 0.6,
    borderRadius: Border.br_7xs,
    width: "16.21%",
    height: "10.25%",
    justifyContent: "space-between",
    alignItems: "center",
    borderStyle: "solid",
    position: "absolute",
    overflow: "hidden",
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
    borderColor: Color.colorBlack,
    borderWidth: 1,
    borderStyle: "solid",
    width: 360,
    left: 0,
    top: 0,
    position: "absolute",
    height: 800,
  },
  referenceFrame: {
    width: 360,
    left: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
    height: 800,
    backgroundColor: Color.colorWhite,
  },
  week: {
    textAlign: "left",
    display: "flex",
    color: Color.colorDarkgray,
    fontFamily: FontFamily.montserratRegular,
    lineHeight: 16,
  },
  mon: {
    justifyContent: "center",
    textAlign: "center",
    display: "flex",
    color: Color.colorDarkgray,
    fontFamily: FontFamily.montserratRegular,
    lineHeight: 16,
  },
  tue: {
    color: Color.colorGray_200,
    width: 64,
    alignItems: "flex-end",
    fontSize: FontSize.size_base,
  },
  weekdays: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    justifyContent: "center",
    textAlign: "center",
    fontSize: FontSize.size_base,
    color: Color.colorDarkgray,
    fontFamily: FontFamily.montserratRegular,
    lineHeight: 16,
    alignSelf: "stretch",
    alignItems: "center",
    flex: 1,
  },
  linesChild: {
    zIndex: 0,
    borderTopWidth: 1,
    borderColor: Color.colorGainsboro_100,
    alignSelf: "stretch",
    borderStyle: "solid",
    flex: 1,
  },
  linesItem: {
    zIndex: 1,
  },
  linesInner: {
    zIndex: 2,
  },
  lineView: {
    zIndex: 3,
  },
  linesChild1: {
    zIndex: 4,
  },
  linesChild2: {
    zIndex: 5,
  },
  linesChild3: {
    zIndex: 6,
  },
  linesChild4: {
    zIndex: 7,
  },
  linesChild5: {
    zIndex: 8,
  },
  linesChild6: {
    zIndex: 9,
  },
  coldkillerX: {
    lineHeight: 12,
    alignSelf: "stretch",
  },
  phclockLightIcon: {
    width: 14,
    height: 12,
    overflow: "hidden",
  },
  text10: {
    color: Color.colorOrangered,
    fontSize: FontSize.size_3xs,
    textAlign: "center",
    fontFamily: FontFamily.montserratRegular,
  },
  time: {
    flexWrap: "wrap",
    justifyContent: "center",
    flexDirection: "row",
  },
  monx: {
    right: "83.79%",
    left: "0%",
    zIndex: 10,
  },
  tuex: {
    right: "69.4%",
    left: "14.39%",
    zIndex: 11,
  },
  thux: {
    zIndex: 12,
    borderColor: Color.colorOrangered,
    backgroundColor: Color.colorPink,
    bottom: "85.39%",
    top: "4.35%",
  },
  thuy: {
    zIndex: 13,
    left: "43.16%",
    right: "40.63%",
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: 0,
    borderWidth: 0.6,
    borderRadius: Border.br_7xs,
    width: "16.21%",
    height: "10.25%",
    justifyContent: "space-between",
    alignItems: "center",
    borderStyle: "solid",
    position: "absolute",
    overflow: "hidden",
  },
  frix: {
    zIndex: 14,
    borderColor: Color.colorOrangered,
    backgroundColor: Color.colorPink,
    bottom: "85.39%",
    top: "4.35%",
  },
  friy: {
    zIndex: 15,
    borderColor: Color.colorLightcoral_200,
    backgroundColor: Color.colorLightpink_100,
    bottom: "33.85%",
    top: "55.9%",
  },
  zazamax: {
    lineHeight: 12,
    alignSelf: "stretch",
  },
  text16: {
    marginLeft: 3,
    height: 14,
    width: 62,
    justifyContent: "center",
    display: "flex",
    lineHeight: 16,
    alignItems: "center",
  },
  friz: {
    zIndex: 16,
    left: "58.25%",
    right: "25.54%",
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: 0,
    borderWidth: 0.6,
    borderRadius: Border.br_7xs,
    width: "16.21%",
    height: "10.25%",
    justifyContent: "space-between",
    alignItems: "center",
    borderStyle: "solid",
    position: "absolute",
    overflow: "hidden",
  },
  satx: {
    zIndex: 17,
    borderColor: Color.colorOrangered,
    backgroundColor: Color.colorPink,
    bottom: "85.39%",
    top: "4.35%",
  },
  saty: {
    zIndex: 18,
    borderColor: Color.colorLightcoral_200,
    backgroundColor: Color.colorLightpink_100,
    bottom: "33.85%",
    top: "55.9%",
  },
  satz: {
    zIndex: 19,
    borderColor: Color.colorDodgerblue_100,
    backgroundColor: Color.colorLavender,
    bottom: "22.75%",
    top: "66.99%",
  },
  qleedPills: {
    lineHeight: 12,
    alignSelf: "stretch",
  },
  text20: {
    marginLeft: 3,
    height: 14,
    width: 62,
    justifyContent: "center",
    display: "flex",
    lineHeight: 16,
    alignItems: "center",
  },
  satq: {
    top: "85.53%",
    bottom: "4.21%",
    backgroundColor: Color.colorAliceblue,
    borderColor: Color.colorSkyblue_100,
    zIndex: 20,
  },
  sunx: {
    zIndex: 21,
    borderColor: Color.colorOrangered,
    backgroundColor: Color.colorPink,
    bottom: "85.39%",
    top: "4.35%",
  },
  suny: {
    zIndex: 22,
    borderColor: Color.colorLightcoral_200,
    backgroundColor: Color.colorLightpink_100,
    bottom: "33.85%",
    top: "55.9%",
  },
  sunz: {
    zIndex: 23,
    borderColor: Color.colorDodgerblue_100,
    backgroundColor: Color.colorLavender,
    bottom: "22.75%",
    top: "66.99%",
  },
  lines: {
    marginLeft: 10,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    flex: 1,
    alignSelf: "stretch",
  },
  linesHours: {
    alignItems: "flex-end",
    flexDirection: "row",
    alignSelf: "stretch",
    flex: 1,
  },
  tableContent: {
    top: 46,
    left: 10,
    width: 340,
    height: 744,
    alignItems: "center",
    position: "absolute",
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
    textAlign: "center",
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
  calendarScreen3DotNavigatChild: {
    top: 36,
    left: 188,
    backgroundColor: "#030302",
    width: 172,
    height: 46,
    position: "absolute",
  },
  toListView: {
    top: 42,
    left: 193,
    fontSize: FontSize.size_xl,
    color: Color.colorGainsboro_200,
    width: 155,
    height: 37,
    alignItems: "center",
    position: "absolute",
  },
  calendarScreen3DotNavigat: {
    overflow: "hidden",
    height: 800,
    backgroundColor: Color.colorWhite,
    width: "100%",
    flex: 1,
  },
});

export default CalendarScreen3DotNavigat;
