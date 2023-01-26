import { View, Text, Image } from "react-native";
import React, { useLayoutEffect } from "react";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native";
import { Avatar } from "../assets";

const Discover = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="flex-1 bg-white relative">
      <View className="flex-row items-center justify-between px-8 mt-4">
        <View className="space-y-1">
          <Text className="text-[36px] text-[#0B646B] font-bold">Discover</Text>
          <Text className="text-[#527283] text-[30px]">the beauty today</Text>
        </View>
        <View className="w-14 h-14 bg-gray-200  justify-center items-center">
            <Image source={Avatar} className="h-full w-full object-cover rounded-md shadow-lg" />

        </View>
      </View>
      <View className="flex-row items-center bg-white py-1 px-2 m-6 shadow-md rounded-xl">
      <GooglePlacesAutocomplete
      placeholder='Search'
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      query={{
        key:'AIzaSyA8BjlzBN-jhx-6ycBpyVVYH3ep8_LCkPk',
        language: 'en',
      }}
    />
      </View>
    </SafeAreaView>
  );
};

export default Discover;
