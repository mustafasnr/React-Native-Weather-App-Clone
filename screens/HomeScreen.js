import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import DailyInfo from "../components/DailyInfo";
import HourlyInfo from "../components/HourlyInfo";
import { SvgUri } from "react-native-svg";
import LinearGradient from "react-native-linear-gradient";
import { hourlyData, dailyData } from "../components/Data";
import IconDescriptions from "../components/IconDescriptions";
import CityInfo from "../components/CityInfo";

const HomeScreen = ({ route }) => {
  const navigation = useNavigation();
  const scrollRef = useRef(null);
  const [showMenu, setShowMenu] = useState(false);

  const [dailyExpandArray, setDailyArray] = useState(
    Array(dailyData.length).fill(false),
  );
  const [activeDaily, setActiveDaily] = useState(null);

  const [activeHourly, setActiveHourly] = useState(null);
  const [hourlyExpandArray, setHourlyArray] = useState(
    Array(hourlyData.length).fill(false),
  );

  const changeExpandDaily = index => {
    if (activeDaily === null) {
      let array = Array(dailyExpandArray.length).fill(false);
      array[index] = true;
      setDailyArray(array);
      setActiveDaily(index);
    } else if (activeDaily === index) {
      setDailyArray(Array(dailyExpandArray.length).fill(false));

      setActiveDaily(null);
    } else {
      let array = Array(dailyExpandArray.length).fill(false);
      array[index] = true;
      setDailyArray(array);
      setActiveDaily(index);
    }
  };
  const openDrawer = direction => {
    navigation.getParent(direction).openDrawer();
  };
  const closeMenu = () => {
    setShowMenu(false);
  };
  const changeExpandHourly = index => {
    if (activeHourly === null) {
      let array = Array(hourlyExpandArray.length).fill(false);
      array[index] = true;
      setHourlyArray(array);
      setActiveHourly(index);
      scrollRef.current.scrollTo({
        x: 0,
      });
      scrollRef.current.scrollTo({
        x: index * (50 + 7.5) - 30,
      });
    } else if (activeHourly === index) {
      setHourlyArray(Array(hourlyExpandArray.length).fill(false));
      setActiveHourly(null);
      scrollRef.current.scrollTo({
        x: index * (50 + 7.5) - 100,
      });
    } else {
      let array = Array(hourlyExpandArray.length).fill(false);
      array[index] = true;
      setHourlyArray(array);
      setActiveHourly(index);
      scrollRef.current.scrollTo({
        x: 0,
      });
      scrollRef.current.scrollTo({
        x: index * (50 + 7.5) - 30,
      });
    }
  };

  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "transparent",
        zIndex: 5,
      }}>
      <LinearGradient
        colors={["#022636", "#BA6948"]}
        style={styles.backgroundImage}
      />
      <IconDescriptions expandState={showMenu} closeMenu={closeMenu} />
      <ScrollView
        style={{ backgroundColor: "transparent" }}
        showsVerticalScrollIndicator={false}
        bounces={false}
        removeClippedSubviews={true}>
        <View style={styles.container}>
          <StatusBar
            barStyle={"light-content"}
            backgroundColor={"rgba(45,50,69,255)"}
          />

          <View style={styles.header}>
            <SvgUri
              style={{ marginLeft: 15 }}
              onPress={() => {
                openDrawer("DrawerLeft");
              }}
              fill={"white"}
              color={"white"}
              width={26}
              height={26}
              uri={"https://www.svgrepo.com/show/472427/bars.svg"}
            />
            <SvgUri
              style={{ marginRight: 10 }}
              onPress={() => {
                openDrawer("DrawerRight");
              }}
              width={40}
              height={40}
              rotation={45}
              fill={"white"}
              uri={"https://www.svgrepo.com/show/487206/close-sm.svg"}
            />
          </View>
          <View style={styles.cityContainer}>
            <CityInfo
              cityName={"İSTANBUL"}
              date={"15 Temmuz 2024"}
              hour={"14:20"}
              stateCode={"pb"}
              state={"Parçalı Bulutlu"}
              temperature={"33,2"}
              feelTemperature={"33,2"}
              humidity={27}
              windDirection={"KD"}
              windVelocity={10}
              pressure={1010}
            />
          </View>
        </View>
        <View style={{ width: "100%", backgroundColor: "white" }}>
          <View style={styles.hourlyInfoContainer}>
            <ScrollView
              ref={scrollRef}
              bounces={false}
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              style={{
                width: "100%",
                height: "100%",
                flexDirection: "row",
              }}>
              {hourlyData.map((item, index) => (
                <Pressable
                  key={"hour_" + index.toString()}
                  style={{
                    height: "90%",
                    alignSelf: "center",
                    backgroundColor: "white",
                  }}
                  onPress={() => {
                    // console.log("Tıklandı Aga:", "hour_" + index.toString());
                    changeExpandHourly(index);
                  }}>
                  <HourlyInfo
                    key={"hour_" + index.toString()}
                    hour={item.hour}
                    iconName={item.iconName}
                    stateCode={item.stateCode}
                    temperature={item.temperature}
                    feelTemperature={item.feelTemperature}
                    humidity={item.humidity}
                    windDirection={item.windDirection}
                    windVelocity={item.windVelocity}
                    expandState={hourlyExpandArray[index]}
                  />
                </Pressable>
              ))}
            </ScrollView>
          </View>
          <View
            style={{
              width: "90%",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              height: 40,
              alignSelf: "center",
              marginVertical: 5,
            }}>
            <Text style={{ color: "#000", fontSize: 18 }}>5 Günlük Tahmin</Text>
            <SvgUri
              onPress={() => {
                setShowMenu(true);
              }}
              width={24}
              height={24}
              style={{ alignSelf: "center" }}
              uri={
                "https://www.svgrepo.com/show/502698/help-question.svg"
              }></SvgUri>
          </View>
          <View style={styles.dailyInfoContainer}>
            {dailyData.map((item, index) => (
              <Pressable
                key={"day_" + index.toString()}
                style={{ width: "90%", marginVertical: 10 }}
                onPress={() => {
                  // console.log("Tıklandı Aga: ", "day_" + index.toString());
                  changeExpandDaily(index);
                }}>
                <DailyInfo
                  key={"day_" + index.toString()}
                  date={item.date}
                  day={item.day}
                  iconName={item.iconName}
                  minT={item.minT}
                  maxT={item.maxT}
                  stateCode={item.stateCode}
                  windState={item.windState}
                  humidity={item.humidity}
                  expandState={dailyExpandArray[index]}
                />
              </Pressable>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 50,
    backgroundColor: "transparent",
    zIndex: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cityContainer: {
    width: "100%",
    height: 350,
    paddingTop: 65,
    paddingBottom: 10,
    justifyContent: "space-around",
    alignItems: "center",
  },
  backgroundImage: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "blue",
    opacity: 0.3,
    zIndex: -2,
  },
  hourlyInfoContainer: {
    height: 160,
    marginTop: 10,
    paddingLeft: "5%",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
  },
  dailyInfoContainer: {
    width: "100%",
    alignItems: "center",
    marginBottom: 5,
  },
  icon: {
    marginHorizontal: 10,
  },
  Pressable: {
    height: "90%",
    alignSelf: "center",
    backgroundColor: "white",
  },
});

export default HomeScreen;
