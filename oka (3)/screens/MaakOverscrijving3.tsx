import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const MaakOverscrijving3 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.maakOverscrijvingView}>
      <View style={styles.rectangleView} />
      <View style={styles.rectangleView1} />
      <View style={styles.rectangleView2} />
      <View style={styles.rectangleView3} />
      <View style={styles.rectangleView4} />
      <Text style={styles.eUR45753Text}>€(EUR)457.53</Text>
      <Text style={styles.goedeNamidagHamza}>Goede Namidag, Hamza.</Text>
      <Text style={styles.jijBentInEenPositieveSald}>
        Jij Bent In Een Positieve Saldo! Goed Bezig!
      </Text>
      <Image
        style={styles.maskGroupIcon}
        resizeMode="cover"
        source={require("../assets/mask-group.png")}
      />
      <Text style={styles.blokeerText}>Blokeer</Text>
      <Text style={styles.gebruikText}>Gebruik</Text>
      <Text style={styles.overschrijvingNaarKarimHr}>
        Overschrijving naar : Karim Hrizi
      </Text>
      <Text style={styles.text}>-€5.30</Text>
      <Text style={styles.thanksVoorDieVapesBroer}>
        “Thanks voor die vapes broer”
      </Text>
      <View style={styles.rectangleView5} />
      <Text style={styles.instortingVanZohraKhemira}>
        Instorting van : Zohra Khemira
      </Text>
      <Text style={styles.text1}>+€40.00</Text>
      <Text style={styles.shokranHobi7Text}>“Shokran Hobi7”</Text>
      <View style={styles.rectangleView6} />
      <View style={styles.rectangleView7} />
      <Text style={styles.betalingMultimediaDiscord}>
        Betaling Multimedia : Discord, Inc.
      </Text>
      <Text style={styles.text2}>-€9.99</Text>
      <Text style={styles.shokranHobi7Text1}>“Shokran Hobi7”</Text>
      <View style={styles.rectangleView8} />
      <Text style={styles.instortingVanYa}>Instorting van : Ya****</Text>
      <Text style={styles.text3}>+€100.00</Text>
      <Text style={styles.dankuBruuuuuuuuuuuuuuurText}>
        “Danku bruuuuuuuuuuuuuuur!”
      </Text>
      <View style={styles.rectangleView9} />
      <Text style={styles.betalingMultimediaVapesnl}>
        Betaling Multimedia : Vapes.nl
      </Text>
      <Text style={styles.text4}>-€9.50</Text>
      <Text style={styles.geenReactiesKunnenGeplaats}>
        Geen reacties kunnen geplaats worden
      </Text>
      <Text style={styles.zieMeerTransacties}>Zie Meer Transacties</Text>
      <Image
        style={styles.rulesIcon}
        resizeMode="cover"
        source={require("../assets/rules.png")}
      />
      <Text style={styles.vraagEenUitreksels}>Vraag een Uitreksel(s)</Text>
      <View style={styles.rectangleView10} />
      <Text style={styles.maakOverscrijvingText}>Maak Overscrijving</Text>
      <Image
        style={styles.emailSendIcon}
        resizeMode="cover"
        source={require("../assets/email-send.png")}
      />
      <View style={styles.rectangleView11} />
      <View style={styles.rectangleView12} />
      <View style={styles.rectangleView13} />
      <Text style={styles.pleaseBeAwareWithScamsMa}>
        <Text style={styles.pleaseBeAware}>Please Be Aware With Scams!</Text>
        <Text style={styles.makeSureYou}>Make sure you verify before</Text>
        <Text style={styles.payingAndAny}>paying and any suspicion you</Text>
        <Text style={styles.haveMightSave}>have might save you.</Text>
      </Text>
      <Text style={styles.warningBeforeProceedingYo}>
        <Text style={styles.warningBeforeProceeding}>
          !Warning, Before proceeding. You agree
        </Text>
        <Text style={styles.toOurTerms}>{`to our terms & service`}</Text>
      </Text>
      <Image
        style={styles.warningShieldIcon}
        resizeMode="cover"
        source={require("../assets/warning-shield.png")}
      />
      <Pressable
        style={styles.groupPressable}
        onPress={() => navigation.navigate("MaakOverscrijving2")}
      >
        <View style={styles.rectangleView14} />
        <Text style={styles.proceedWithCaution}>Proceed With Caution</Text>
      </Pressable>
      <Pressable
        style={styles.groupPressable1}
        onPress={() => navigation.navigate("Home")}
      >
        <View style={styles.rectangleView15} />
        <Text style={styles.takeMeBack}>Take me back</Text>
      </Pressable>
      <View style={styles.rectangleView16} />
      <Pressable
        style={styles.cOMPAC1}
        onPress={() => navigation.navigate("Loading")}
      >
        <Text style={styles.cOMPAC}>C O M P A C</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleView: {
    position: "absolute",
    top: 93,
    left: 9,
    borderRadius: 9,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
    width: 372,
    height: 84,
  },
  rectangleView1: {
    position: "absolute",
    top: 186,
    left: 9,
    borderRadius: 9,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
    width: 372,
    height: 357,
  },
  rectangleView2: {
    position: "absolute",
    top: 551,
    left: 9,
    borderRadius: 9,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
    width: 372,
    height: 54,
  },
  rectangleView3: {
    position: "absolute",
    top: 194,
    left: 15,
    borderRadius: 9,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
    width: 359,
    height: 54,
  },
  rectangleView4: {
    position: "absolute",
    top: 160,
    left: 9,
    borderBottomRightRadius: 9,
    borderBottomLeftRadius: 9,
    backgroundColor: "#00ffc2",
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
    width: 372,
    height: 17,
  },
  eUR45753Text: {
    position: "absolute",
    top: 106,
    left: 23,
    fontSize: 32,
    fontFamily: "JetBrains Mono",
    color: "#000",
    textAlign: "left",
    width: 233,
  },
  goedeNamidagHamza: {
    position: "absolute",
    top: 59,
    left: 12,
    fontSize: 20,
    fontFamily: "JetBrains Mono",
    color: "#000",
    textAlign: "left",
  },
  jijBentInEenPositieveSald: {
    position: "absolute",
    top: 165,
    left: 102,
    fontSize: 7,
    fontFamily: "JetBrains Mono",
    color: "#000",
    textAlign: "left",
    width: 185,
    height: 7,
  },
  maskGroupIcon: {
    position: "absolute",
    top: 114,
    left: 259,
    width: 37.56,
    height: 26,
  },
  blokeerText: {
    position: "absolute",
    top: 108,
    left: 309,
    fontSize: 14,
    fontFamily: "JetBrains Mono",
    color: "#ff4343",
    textAlign: "left",
  },
  gebruikText: {
    position: "absolute",
    top: 128,
    left: 309,
    fontSize: 14,
    fontFamily: "JetBrains Mono",
    color: "#4361ff",
    textAlign: "left",
  },
  overschrijvingNaarKarimHr: {
    position: "absolute",
    top: 207,
    left: 26,
    fontSize: 11,
    fontFamily: "JetBrains Mono",
    color: "#000",
    textAlign: "left",
  },
  text: {
    position: "absolute",
    top: 211,
    left: 297,
    fontSize: 16,
    fontFamily: "JetBrains Mono",
    color: "#ff5e5e",
    textAlign: "left",
  },
  thanksVoorDieVapesBroer: {
    position: "absolute",
    top: 222,
    left: 26,
    fontSize: 10,
    fontStyle: "italic",
    fontWeight: "300",
    fontFamily: "JetBrains Mono",
    color: "#000",
    textAlign: "left",
    opacity: 0.59,
  },
  rectangleView5: {
    position: "absolute",
    top: 256,
    left: 15,
    borderRadius: 9,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
    width: 359,
    height: 54,
  },
  instortingVanZohraKhemira: {
    position: "absolute",
    top: 269,
    left: 26,
    fontSize: 11,
    fontFamily: "JetBrains Mono",
    color: "#000",
    textAlign: "left",
  },
  text1: {
    position: "absolute",
    top: 273,
    left: 288,
    fontSize: 16,
    fontFamily: "JetBrains Mono",
    color: "#000",
    textAlign: "left",
  },
  shokranHobi7Text: {
    position: "absolute",
    top: 284,
    left: 26,
    fontSize: 10,
    fontStyle: "italic",
    fontWeight: "300",
    fontFamily: "JetBrains Mono",
    color: "#000",
    textAlign: "left",
    opacity: 0.59,
  },
  rectangleView6: {
    position: "absolute",
    top: 442,
    left: 15,
    borderRadius: 9,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
    width: 359,
    height: 54,
  },
  rectangleView7: {
    position: "absolute",
    top: 503,
    left: 15,
    borderRadius: 9,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
    width: 359,
    height: 34,
  },
  betalingMultimediaDiscord: {
    position: "absolute",
    top: 455,
    left: 26,
    fontSize: 11,
    fontFamily: "JetBrains Mono",
    color: "#000",
    textAlign: "left",
  },
  text2: {
    position: "absolute",
    top: 459,
    left: 298,
    fontSize: 16,
    fontFamily: "JetBrains Mono",
    color: "#ff5d5d",
    textAlign: "left",
  },
  shokranHobi7Text1: {
    position: "absolute",
    top: 470,
    left: 26,
    fontSize: 10,
    fontStyle: "italic",
    fontWeight: "300",
    fontFamily: "JetBrains Mono",
    color: "#000",
    textAlign: "left",
    opacity: 0.59,
  },
  rectangleView8: {
    position: "absolute",
    top: 380,
    left: 15,
    borderRadius: 9,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
    width: 359,
    height: 54,
  },
  instortingVanYa: {
    position: "absolute",
    top: 393,
    left: 26,
    fontSize: 11,
    fontFamily: "JetBrains Mono",
    color: "#000",
    textAlign: "left",
  },
  text3: {
    position: "absolute",
    top: 397,
    left: 279,
    fontSize: 16,
    fontFamily: "JetBrains Mono",
    color: "#000",
    textAlign: "left",
  },
  dankuBruuuuuuuuuuuuuuurText: {
    position: "absolute",
    top: 408,
    left: 26,
    fontSize: 10,
    fontStyle: "italic",
    fontWeight: "300",
    fontFamily: "JetBrains Mono",
    color: "#000",
    textAlign: "left",
    opacity: 0.59,
  },
  rectangleView9: {
    position: "absolute",
    top: 318,
    left: 15,
    borderRadius: 9,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
    width: 359,
    height: 54,
  },
  betalingMultimediaVapesnl: {
    position: "absolute",
    top: 331,
    left: 26,
    fontSize: 11,
    fontFamily: "JetBrains Mono",
    color: "#000",
    textAlign: "left",
  },
  text4: {
    position: "absolute",
    top: 335,
    left: 297,
    fontSize: 16,
    fontFamily: "JetBrains Mono",
    color: "#ff5d5d",
    textAlign: "left",
  },
  geenReactiesKunnenGeplaats: {
    position: "absolute",
    top: 346,
    left: 26,
    fontSize: 10,
    fontFamily: "JetBrains Mono",
    color: "#000",
    textAlign: "left",
    opacity: 0.59,
  },
  zieMeerTransacties: {
    position: "absolute",
    top: 512,
    left: 123,
    fontSize: 12,
    fontFamily: "JetBrains Mono",
    color: "#000",
    textAlign: "left",
  },
  rulesIcon: {
    position: "absolute",
    top: 564,
    left: 67,
    width: 28,
    height: 28,
  },
  vraagEenUitreksels: {
    position: "absolute",
    top: 567,
    left: 111,
    fontSize: 16,
    fontFamily: "JetBrains Mono",
    color: "#000",
    textAlign: "left",
  },
  rectangleView10: {
    position: "absolute",
    top: 613,
    left: 9,
    borderRadius: 9,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
    width: 372,
    height: 54,
  },
  maakOverscrijvingText: {
    position: "absolute",
    top: 629,
    left: 129,
    fontSize: 16,
    fontFamily: "JetBrains Mono",
    color: "#000",
    textAlign: "left",
  },
  emailSendIcon: {
    position: "absolute",
    top: 626,
    left: 88,
    width: 28,
    height: 28,
  },
  rectangleView11: {
    position: "absolute",
    top: -25,
    left: 0,
    borderRadius: 27,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    width: 390,
    height: 897,
  },
  rectangleView12: {
    position: "absolute",
    top: 528,
    left: 0,
    borderRadius: 27,
    backgroundColor: "#d9d9d9",
    width: 390,
    height: 344,
  },
  rectangleView13: {
    position: "absolute",
    top: 535,
    left: 154,
    borderRadius: 12,
    backgroundColor: "rgba(58, 58, 58, 0.2)",
    width: 83,
    height: 3,
  },
  pleaseBeAware: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  makeSureYou: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  payingAndAny: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  haveMightSave: {
    margin: 0,
  },
  pleaseBeAwareWithScamsMa: {
    position: "absolute",
    top: 568,
    left: 96,
    fontSize: 16,
    fontFamily: "JetBrains Mono",
    color: "#000",
    textAlign: "left",
    width: 269,
    height: 67,
  },
  warningBeforeProceeding: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  toOurTerms: {
    margin: 0,
  },
  warningBeforeProceedingYo: {
    position: "absolute",
    top: 668,
    left: 47,
    fontSize: 13,
    fontFamily: "JetBrains Mono",
    color: "#ff7070",
    textAlign: "center",
    width: 297,
    height: 27,
  },
  warningShieldIcon: {
    position: "absolute",
    top: 579,
    left: 25,
    width: 56,
    height: 45,
  },
  rectangleView14: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 5,
    backgroundColor: "#00ffc2",
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
    width: 352,
    height: 51,
  },
  proceedWithCaution: {
    position: "absolute",
    top: 15,
    left: 80,
    fontSize: 16,
    fontFamily: "JetBrains Mono",
    color: "#000",
    textAlign: "left",
  },
  groupPressable: {
    position: "absolute",
    top: 722,
    left: 19,
    width: 352,
    height: 51,
  },
  rectangleView15: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 5,
    backgroundColor: "#d9d9d9",
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
    width: 352,
    height: 51,
  },
  takeMeBack: {
    position: "absolute",
    top: 15,
    left: 118,
    fontSize: 16,
    fontFamily: "JetBrains Mono",
    color: "#000",
    textAlign: "left",
  },
  groupPressable1: {
    position: "absolute",
    top: 779,
    left: 19,
    width: 352,
    height: 51,
  },
  rectangleView16: {
    position: "absolute",
    top: -4,
    left: -4,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
    width: 398,
    height: 54,
    opacity: 0.7,
  },
  cOMPAC: {
    fontSize: 20,
    fontFamily: "JetBrains Mono",
    color: "#000",
    textAlign: "left",
    opacity: 0.7,
  },
  cOMPAC1: {
    position: "absolute",
    left: 17,
    top: 12,
  },
  maakOverscrijvingView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default MaakOverscrijving3;
