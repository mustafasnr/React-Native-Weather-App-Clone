import React, { useEffect, useRef, useState } from "react";
import { View, StyleSheet, Animated, Text } from "react-native";
import Icon from "../components/LocalSvg";

const DailyInfo = ({
  date,
  day,
  minT,
  maxT,
  iconName,
  stateCode,
  windState,
  humidity,
  expandState,
}) => {
  const height = useRef(new Animated.Value(0)).current;
  const [collapseState, setCollapse] = useState(true);
  const animateHeight = (val, state) => {
    Animated.timing(height, {
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
            borderBottomLeftRadius: expandState ? 0 : 2.5,
            borderBottomRightRadius: expandState ? 0 : 2.5,
          },
        ]}>
        <View style={styles.dateContainer}>
          <Text style={{ color: "#92959c", fontSize: 14 }}>{date}</Text>
          <Text style={{ color: "#3c3b49", fontSize: 16 }}>{day}</Text>
        </View>
        <View style={styles.temperaturesContainer}>
          <Text style={{ color: "#589aa8", fontSize: 18 }}>
            {`${minT}` + "\u00B0"}
          </Text>
          <Text style={{ color: "#da402d", fontSize: 18 }}>
            {`${maxT}` + "\u00B0"}
          </Text>
        </View>
        <View style={styles.iconContainer}>
          <Icon width={35} height={35} name={iconName} />
          <Text style={{ color: "#7d899b", fontSize: 14, marginLeft: 10 }}>
            {stateCode}
          </Text>
        </View>
      </View>
      <Animated.View
        style={[
          styles.openingContainer,
          {
            height: height.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 60], // 0'dan 300 piksel'e kadar translateY
            }),
            borderTopWidth: collapseState ? 0.75 : 0,
          },
        ]}>
        <View style={styles.infoTextContainer}>
          <Text style={{ color: "#575b5e", fontSize: 15 }}>Rüzgar: </Text>
          <Text style={{ color: "black", fontSize: 15 }}>{windState}</Text>
        </View>
        <View style={styles.infoTextContainer}>
          <Text style={{ color: "#575b5e", fontSize: 15 }}>Nem: </Text>
          <Text style={{ color: "black", fontSize: 15 }}>{humidity}</Text>
        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderWidth: 0.75,
    backgroundColor: "#fff",
    borderRadius: 2.5,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignSelf: "center",
    borderColor: "#cdcdce",
  },
  dateContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
    alignSelf: "center",
  },
  infoTextContainer: {
    height: "50%",
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  temperaturesContainer: {
    width: "30%",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    flexDirection: "row",
    columnGap: 10,
  },
  iconContainer: {
    width: "30%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "center",
    height: 25,
  },
  fixedContainer: {
    borderTopLeftRadius: 2.5,
    borderTopRightRadius: 2.5,
    width: "100%",
    paddingHorizontal: "2.5%",
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderBottomWidth: 0,
    borderColor: "#cdcdce",
  },
  openingContainer: {
    width: "100%",
    paddingHorizontal: "2.5%",
    backgroundColor: "#f9fafc",
    borderBottomLeftRadius: 2.5,
    borderBottomRightRadius: 2.5,
    borderColor: "#cdcdce",
  },
});
export default DailyInfo;
