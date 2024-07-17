import React, { useEffect, useRef, useState } from "react";
import { View, StyleSheet, Animated, Text } from "react-native";
import Icon from "../components/LocalSvg";

const HourlyInfo = ({
  hour,
  iconName,
  stateCode,
  temperature,
  feelTemperature,
  humidity,
  windDirection,
  windVelocity,
  expandState,
}) => {
  const width = useRef(new Animated.Value(0)).current;
  const [collapseState, setCollapse] = useState(true);
  const animateHeight = (val, state) => {
    Animated.timing(width, {
      toValue: val,
      duration: 250,
      useNativeDriver: false,
    }).start(() => {
      setCollapse(state);
    });
  };
  useEffect(() => {
    if (expandState) {
      setCollapse(true);
      animateHeight(1, true);
    } else {
      animateHeight(0, false);
    }
  }, [expandState]);

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.fixedContainer,
          {
            borderTopRightRadius: collapseState ? 0 : 2.5,
            borderBottomRightRadius: collapseState ? 0 : 2.5,
            borderRightWidth: collapseState ? 1 : 0,
          },
        ]}>
        <Text style={{ color: "gray", size: 16 }}>{hour}</Text>
        <Icon width={35} height={35} name={iconName} />
        <Text style={{ color: "gray", fontSize: 16 }}>{stateCode}</Text>
        <Text style={{ color: "black", fontSize: 18 }}>
          {`${temperature}` + "\u00B0"}
        </Text>
      </View>
      <Animated.View
        style={[
          styles.openingContainer,
          {
            width: width.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 150], // 0'dan 300 piksel'e kadar translateY
            }),
            opacity: expandState ? 1 : 0,
          },
        ]}>
        <View
          style={{
            width: "90%",
            alignSelf: "center",
            height: "100%",
            flexDirection: "column",
            justifyContent: "space-around",
          }}>
          <View style={{ width: "100%", flexDirection: "row" }}>
            <Text style={styles.fieldText}>{"Hissedilen: "}</Text>
            <Text style={styles.valueText}>
              {`${feelTemperature} ` + "\u00B0"}
            </Text>
          </View>
          <View style={{ width: "100%", flexDirection: "row" }}>
            <Text style={styles.fieldText}>{"Nem: "}</Text>
            <Text style={styles.valueText}>{`%${humidity}`}</Text>
          </View>
          <View style={{ width: "100%", flexDirection: "row" }}>
            <Text style={styles.fieldText}>{"Rüzgar Yönü: "}</Text>
            <Text style={styles.valueText}>{`${windDirection}`}</Text>
          </View>
          <View style={{ width: "100%", flexDirection: "row" }}>
            <Text style={styles.fieldText}>{"Rüzgar Hızı: "}</Text>
            <Text style={styles.valueText}>{`${windVelocity} m/s`}</Text>
          </View>
        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    borderWidth: 1,
    marginRight: 7.5,
    backgroundColor: "#f9fafc",
    borderRadius: 2.5,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignSelf: "center",
    borderColor: "#cdcdce",
  },
  fixedContainer: {
    borderTopRightRadius: 2.5,
    borderBottomRightRadius: 2.5,
    height: "100%",
    width: 50,
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#fff",
    borderColor: "#cdcdce",
  },
  openingContainer: {
    backgroundColor: "#f9fafc",
    borderTopRightRadius: 2.5,
    borderBottomRightRadius: 2.5,
    borderColor: "#cdcdce",
  },
  fieldText: {
    color: "#575b5e",
    fontSize: 16,
    marginRight: 5,
  },
  valueText: {
    color: "#2b2b36",
    fontSize: 16,
  },
});

export default HourlyInfo;
