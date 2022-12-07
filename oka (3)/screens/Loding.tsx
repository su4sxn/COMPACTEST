import * as React from "react";
import { Text, StyleSheet, TextInput, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Loding = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.lodingView}>
      <Text style={styles.halloHamzaText}>Hallo, Hamza</Text>
      <Text style={styles.voerUw4DigitPinCodeInA}>
        Voer Uw 4 Digit Pin Code In a.u.b
      </Text>
      <TextInput
        style={styles.rectangleTextInput}
        placeholder="Placeholder text"
        keyboardType="default"
      />
      <Text style={styles.compacBankLtd}>©️compac bank , Ltd</Text>
      <Text style={styles.hELPText}>HELP!</Text>
      <Pressable
        style={styles.rectanglePressable}
        onPress={() => navigation.navigate("Home")}
      />
      <Text style={styles.ofGebruikVingerAfdruk}>
        Of Gebruik Vinger Afdruk...
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  halloHamzaText: {
    position: "absolute",
    top: 51,
    left: 26,
    fontSize: 32,
    fontWeight: "500",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
    width: 117,
  },
  voerUw4DigitPinCodeInA: {
    position: "absolute",
    top: 171,
    left: 68,
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
    width: 254,
  },
  rectangleTextInput: {
    position: "absolute",
    top: 302,
    left: 37,
    borderRadius: 8,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
    width: 316,
    height: 51,
  },
  compacBankLtd: {
    position: "absolute",
    top: 818,
    left: 137,
    fontSize: 12,
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  hELPText: {
    position: "absolute",
    top: 373,
    left: 167,
    fontSize: 20,
    fontFamily: "Inter",
    color: "#ff3333",
    textAlign: "left",
  },
  rectanglePressable: {
    position: "absolute",
    top: 643,
    left: 148,
    borderRadius: 47.5,
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
    width: 95,
    height: 130,
  },
  ofGebruikVingerAfdruk: {
    position: "absolute",
    top: 611,
    left: 94,
    fontSize: 16,
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  lodingView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default Loding;
