import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Keyboard } from "react-native";
import { SvgUri } from "react-native-svg";
import { TextInput } from "react-native-gesture-handler";
import Icon from "./LocalSvg";

const DrawerItem = ({ cityName, stateCode, temperature }) => {
  return (
    <View style={styles.drawerItem}>
      <View style={{ width: "100%", flexDirection: "row" }}>
        <Text style={styles.drawerItemText}>{cityName}</Text>
        <View
          style={{
            flex: 0.2,
            height: "100%",
            flexDirection: "row",
            backgroundColor: "white",
            alignItems: "center",
            justifyContent: "flex-end",
          }}>
          <Text style={{ color: "black", marginRight: 5 }}>
            {`${temperature.toString().replace(".", ",")}` + "\u00B0" + "C"}
          </Text>
          <Icon width={36} height={36} name={stateCode} />
        </View>
      </View>

      <DrawerDivider />
    </View>
  );
};
const DrawerDivider = () => {
  return (
    <View
      style={{
        width: "95%",
        marginLeft: "%5",
        height: 2,
        backgroundColor: "#ebecee",
        borderRadius: 2,
      }}></View>
  );
};

const DrawerCityInput = () => {
  const [focused, setFocused] = useState(true);
  const [inputText, setInputText] = useState("");

  return (
    <View
      style={{
        width: "95%",
        height: 50,
        alignSelf: "center",
        borderRadius: 10,
        marginTop: 5,
        marginBottom: 10,
        borderWidth: 0,
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: "#edf2f6",
      }}>
      <View
        style={{
          width: 40,
          height: 40,
          justifyContent: "center",
          alignItems: "center",
          marginRight: 5,
        }}>
        <SvgUri
          width={32}
          height={32}
          fill={"white"}
          uri={"https://www.svgrepo.com/show/520928/search-loaction.svg"}
        />
      </View>
      <TextInput
        style={{ flex: 1, height: "100%", color: "black" }}
        placeholder="İl, İlçe veya Havalimanı Ara"
        placeholderTextColor={focused ? "gray" : "black"}
        value={inputText}
        onChange={setInputText}
        onFocus={() => {
          setFocused(true);
        }}
        onBlur={() => {
          setFocused(false);
          Keyboard.dismiss();
        }}
      />
      <View
        style={{
          width: 40,
          height: 40,
          justifyContent: "center",
          alignItems: "center",
          marginRight: 5,
        }}>
        <SvgUri
          width={32}
          height={32}
          fill={"#c4c5c7"}
          uri={"https://www.svgrepo.com/show/487206/close-sm.svg"}
          onPress={() => {
            setInputText("");
          }}
        />
      </View>
    </View>
  );
};

const CustomDrawerContentRight = () => {
  return (
    <View style={{ flex: 1, marginBottom: 10 }}>
      <ScrollView
        style={{ width: "100%", flex: 1, paddingTop: 10, marginBottom: 10 }}>
        <DrawerCityInput />
        <View
          style={{
            width: "95%",
            height: 40,
            alignSelf: "center",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 5,
          }}>
          <Text style={{ color: "#8491a1" }}>Kayıtlı Merkezler</Text>
          <SvgUri
            width={28}
            height={28}
            color={"blue"}
            uri={"https://www.svgrepo.com/show/520705/edit.svg"}
          />
        </View>
        <DrawerItem cityName={"İstanbul"} stateCode={"pb"} temperature={33} />
        <DrawerItem cityName={"Sakarya"} stateCode={"yky"} temperature={33} />
        <DrawerItem cityName={"Sakarya"} stateCode={"yky"} temperature={33} />
        <DrawerItem cityName={"Sakarya"} stateCode={"yky"} temperature={33} />
        <DrawerItem cityName={"Sakarya"} stateCode={"yky"} temperature={33} />
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  drawerItem: {
    width: "95%",
    alignSelf: "center",
    height: 45,
    marginTop: 2.5,
    marginBottom: 5,
    alignItems: "center",
    flexDirection: "column",
  },
  drawerItemText: {
    flex: 0.8,
    marginLeft: 10,
    fontSize: 16,
    color: "black",
  },
});
export default CustomDrawerContentRight;
