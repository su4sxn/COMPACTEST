import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Loading = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.loadingPressable}
      onPress={() => navigation.navigate("Loding")}
    >
      <Image
        style={styles.image1Icon}
        resizeMode="cover"
        source={require("../assets/image-1.png")}
      />
      <Text style={styles.compacBankLtd}>©️compac bank , Ltd</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  image1Icon: {
    position: "absolute",
    top: 387,
    left: 148,
    width: 94,
    height: 70,
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
  loadingPressable: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default Loading;
