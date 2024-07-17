import React from "react";
import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import { SvgUri } from "react-native-svg";
import { iconNames } from "./Data";

const DrawerItem = ({ iconName, title, navigation }) => {
  //navigation is DrawerLeft Menu' reference
  return (
    <Pressable
      style={styles.drawerItem}
      onPress={() => {
        console.log("Tıklanan:", title);
        navigation.getParent("DrawerLeft").closeDrawer();
      }}>
      <View
        style={{
          width: 40,
          height: "100%",
          backgroundColor: "white",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <SvgUri
          width={"80%"}
          height={"80%"}
          rotation={iconName === "tabs" ? 270 : 0}
          uri={iconNames[iconName]}
        />
      </View>
      <Text style={styles.drawerItemText}>{title}</Text>
    </Pressable>
  );
};
const DrawerDivider = () => {
  return (
    <View
      style={{
        marginTop: 5,
        marginBottom: 10,
        width: "95%",
        alignSelf: "center",
        height: 2,
        backgroundColor: "#ccc",
        borderRadius: 2,
      }}></View>
  );
};

const DrawerLink = () => {
  return (
    <Pressable
      onPress={() => {
        console.log("Linke Tıklandı: www.mgm.gov.tr");
      }}
      style={{
        width: "95%",
        alignSelf: "center",
        height: 45,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "gray",
        flexDirection: "row",
      }}>
      <View style={{ width: 20, height: 20, marginRight: 5 }}>
        <SvgUri
          width={"100%"}
          height={"100%"}
          uri={"https://www.svgrepo.com/show/506476/external-link.svg"}
        />
      </View>

      <Text style={{ color: "gray" }}>www.mgm.gov.tr</Text>
    </Pressable>
  );
};
const CustomDrawerContentLeft = props => {
  return (
    <View style={{ flex: 1, marginBottom: 10 }}>
      <ScrollView
        style={{ width: "100%", flex: 1, paddingTop: 10, marginBottom: 10 }}>
        <DrawerItem
          navigation={props.navigation}
          iconName={"home"}
          title={"Hava Durumu"}
        />
        <DrawerItem
          navigation={props.navigation}
          iconName={"clock"}
          title={"Son Gözlemler"}
        />
        <DrawerItem
          navigation={props.navigation}
          iconName={"photo"}
          title={"Haritalı 5 Günlük Tahmin"}
        />
        <DrawerItem
          navigation={props.navigation}
          iconName={"radar"}
          title={"Radar Görüntüleri"}
        />
        <DrawerItem
          navigation={props.navigation}
          iconName={"stelletite"}
          title={"Uydu Görüntüleri"}
        />
        <DrawerItem
          navigation={props.navigation}
          iconName={"lightning"}
          title={"Yıldırım Takibi"}
        />
        <DrawerItem
          navigation={props.navigation}
          iconName={"snow"}
          title={"Kar Kalınlıkları"}
        />
        <DrawerItem
          navigation={props.navigation}
          iconName={"temperature"}
          title={"Deniz Suyu Sıcaklıkları"}
        />
        <DrawerItem
          navigation={props.navigation}
          iconName={"siren"}
          title={"MeteoUyarı"}
        />
        <DrawerItem
          navigation={props.navigation}
          iconName={"warning"}
          title={"Uyarılar"}
        />
        <DrawerDivider />
        <DrawerItem
          navigation={props.navigation}
          iconName={"share"}
          title={"Hava Durumunu Paylaş"}
        />
        <DrawerItem
          navigation={props.navigation}
          iconName={"microphone"}
          title={"Meteorolojinin Sesi Radyosu"}
        />
        <DrawerItem
          navigation={props.navigation}
          iconName={"tabs"}
          title={"Diğer Uygulamalarımız"}
        />
      </ScrollView>
      <DrawerLink />
    </View>
  );
};
const styles = StyleSheet.create({
  drawerItem: {
    width: "95%",
    alignSelf: "center",
    height: 45,
    marginBottom: 10,
    alignItems: "center",
    flexDirection: "row",
  },
  drawerItemText: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: "black",
  },
});
export default CustomDrawerContentLeft;
