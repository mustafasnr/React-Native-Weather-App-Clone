import React, { useEffect, useRef } from "react";
import {
  View,
  StyleSheet,
  Animated,
  Text,
  Dimensions,
  ScrollView,
} from "react-native";
import Icon, { svgCodes } from "../components/LocalSvg";
import { SvgUri } from "react-native-svg";
const { height: screenHeight } = Dimensions.get("window");

const IconItem = ({ iconName, text }) => {
  return (
    <View
      style={{
        width: "95%",
        flexDirection: "row",
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "flex-start",
        columnGap: 10,
      }}>
      <Icon name={iconName} width={40} height={40} />
      <Text style={{ color: "black", fontSize: 15 }}>
        {"" + iconName.toUpperCase() + " (" + text + ")"}
      </Text>
    </View>
  );
};

const IconDescriptions = ({ expandState, closeMenu }) => {
  const animatedHeight = useRef(new Animated.Value(screenHeight)).current;

  const animateHeight = (val, state) => {
    Animated.timing(animatedHeight, {
      toValue: val,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    if (expandState) {
      animateHeight(0, false);
    } else {
      animateHeight(screenHeight, true);
    }
  }, [expandState]);
  return (
    <Animated.View
      style={[
        styles.container,
        {
          top: animatedHeight,
          height: "100%",
        },
      ]}>
      <View style={styles.header}>
        <SvgUri
          style={{ marginRight: 10, marginTop: 5 }}
          onPress={closeMenu}
          width={40}
          height={40}
          rotation={0}
          fill={"black"}
          uri={"https://www.svgrepo.com/show/487206/close-sm.svg"}
        />
      </View>
      <View style={styles.iconsContainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ flexDirection: "col" }}>
          {svgCodes.map((element, index) => {
            return (
              <IconItem key={index} iconName={element[0]} text={element[1]} />
            );
          })}
        </ScrollView>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    left: 0,
    right: 0,
    backgroundColor: "white",
    zIndex: 50,
    height: "100%",
  },
  header: {
    height: 50,
    backgroundColor: "white",
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    borderBottomWidth: 0.5,
    borderColor: "gray",
  },
  button: {
    marginRight: 5,
    paddingHorizontal: 10,
    height: "100%",
  },
  closeButtonText: {
    color: "black",
    fontSize: 32,
  },
  iconsContainer: {
    width: "100%",
    height: "100%",
    paddingBottom: 15,
  },
  iconItemContainer: {
    width: "95%",
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "flex-start",
    marginVertical: 10,
  },
  iconItemText: {
    color: "black",
    fontSize: 15,
    marginLeft: 10,
  },
});

export default IconDescriptions;
