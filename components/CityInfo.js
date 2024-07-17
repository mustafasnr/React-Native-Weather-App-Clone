import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { CircularProgress } from "react-native-circular-progress";
import { SvgUri } from "react-native-svg";
import Icon from "./LocalSvg";
const CityInfo = ({
  cityName,
  date,
  hour,
  stateCode,
  state,
  temperature,
  feelTemperature,
  humidity,
  windDirection,
  windVelocity,
  pressure,
}) => {
  return (
    <View style={styles.cityInfoContainer}>
      <View>
        <Text style={{ fontSize: 24, fontWeight: "bold", color: "#fffdff" }}>
          {cityName}
        </Text>
      </View>
      <View>
        <Text style={{ color: "#def6f6", fontSize: 14 }}>
          {date + " " + hour}
        </Text>
      </View>
      <View
        style={{ flexDirection: "row", alignItems: "center", columnGap: 5 }}>
        <Icon name={stateCode} width={30} height={30} />
        <Text style={{ color: "#e6fdfb" }}>{state}</Text>
      </View>
      <View
        style={{
          alignItems: "flex-start",
          alignContent: "flex-start",
          justifyContent: "flex-start",
          flexDirection: "row",
        }}>
        <Text style={{ color: "#fdffff", fontSize: 54, lineHeight: 60 }}>
          {temperature}
        </Text>
        <Text
          style={{
            color: "#fdffff",
            fontSize: 24,
          }}>
          {"\u00B0" + "C"}
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
        }}>
        <Text style={{ color: "#e1f0e6", fontSize: 16 }}>Hissedilen:</Text>
        <Text style={{ fontSize: 18 }}> </Text>
        <Text style={{ color: "#e1f0e6", fontSize: 16 }}>
          {feelTemperature}
          <Text style={{ color: "#e1f0e6", fontSize: 16 }}>
            {"\u00B0" + "C"}
          </Text>
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignSelf: "center",
          columnGap: 5,
          alignItems: "center",
        }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            columnGap: 7.5,
          }}>
          <CircularProgress
            size={25}
            width={2.5}
            fill={27}
            rotation={360}
            tintColor="#fafefa"
            onAnimationComplete={() => console.log("onAnimationComplete")}
            backgroundColor="#afb5c8"
            style={{
              borderWidth: 0,
              borderRadius: 300,
            }}></CircularProgress>
          <View>
            <Text style={styles.fieldTitle}>Nem</Text>
            <Text style={styles.secondaryText}>
              % <Text style={styles.mainText}>{humidity}</Text>
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            columnGap: 7.5,
            marginHorizontal: 10,
          }}>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              width: 30,
              height: 30,
            }}>
            <CircularProgress
              size={25}
              width={2.5}
              fill={0}
              tintColor="#fafefa"
              onAnimationComplete={() => console.log("onAnimationComplete")}
              backgroundColor="#afb5c8"
              style={{
                borderWidth: 0,
                borderRadius: 300,
              }}></CircularProgress>
            <SvgUri
              style={{ position: "absolute" }}
              width={23}
              height={23}
              rotation={225}
              fill={"white"}
              uri={
                "https://www.reshot.com/preview-assets/icons/RXWATF74GM/arrow-up-RXWATF74GM.svg"
              }
            />
          </View>
          <View
            style={{
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
            }}>
            <Text style={styles.fieldTitle}>Rüzgar</Text>
            <Text style={styles.mainText}>
              {windDirection + ", " + windVelocity}
              <Text style={styles.secondaryText}> m/s</Text>
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            columnGap: 7.5,
          }}>
          <View style={styles.circle} />
          <View
            style={{
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
            }}>
            <Text style={styles.fieldTitle}>Basınç</Text>
            <Text style={styles.mainText}>
              {pressure}
              <Text style={styles.secondaryText}> hPa</Text>
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cityInfoContainer: {
    width: "100%",
    height: "100%",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },
  fieldTitle: {
    color: "#e1f0e6",
    fontSize: 16,
  },
  circle: {
    width: 15,
    height: 15,
    borderRadius: 15,
    backgroundColor: "white",
    shadowColor: "white",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
  },
  mainText: {
    color: "#f3f9f5",
    fontSize: 15,
    fontWeight: "600",
  },
  secondaryText: {
    color: "#eefaee",
    fontSize: 12,
    fontWeight: "600",
  },
});

export default CityInfo;
