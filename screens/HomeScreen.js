import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import * as Animatable from "react-native-animatable";

import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { HeroImage } from "../assets";

const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="flex-1 bg-white relative">
      {/* first section */}
      <View className="flex-row px-6 pt-8 items-center space-x-2">
        <View className="h-16 w-16 bg-black rounded-full items-center justify-center">
          <Text className=" text-[#00bcc9] text-3xl font-semibold">Go</Text>
        </View>
        <Text className="text-[#2a2b4b] text-3xl font-semibold">Travel</Text>
      </View>

      {/* second section */}
      <View className=" px-6 pt-8 space-y-3">
        <Text className="text-[#3c6072] text-3xl">Enjoy the trip with</Text>
        <Text className=" text-[#00bcc9] text-2xl font-bold">Good Moments</Text>
        <Text className="text-[#3C6072] text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti odio
          quis nostrum
        </Text>
      </View>

      {/* circle section */}
      <View className="absolute w-[400px] h-[400px] bg-[#00bcc9] bottom-20 -right-36 rounded-full"></View>
      <View className="w-[400px] h-[400px] bg-[#f5585c] rounded-full absolute -bottom-28 -left-36"></View>

      {/* image section */}
      <View className="flex-1 relative items-center justify-center">
        <Animatable.Image
          animation="fadeIn"
          easing="ease-in-out"
          source={HeroImage}
          className="h-full w-full object-cover mt-20"
        />

        <TouchableOpacity className="absolute bottom-20 w-24 h-24 border-l-2 border-r-2 border-t-4 rounded-full border-[#00bcc9] items-center justify-center">
          <Animatable.View
            animation={"pulse"}
            easing="ease-in-out"
            iterationCount={"infinite"}
            className="w-20 h-20 items-center justify-center rounded-full bg-[#00BCC9]"
          >
            <Text className="text-gray-50 text-4xl font-semibold">Go</Text>
          </Animatable.View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
