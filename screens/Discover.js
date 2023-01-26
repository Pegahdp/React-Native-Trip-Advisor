import { View, Text, Image, ScrollView } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native";
import { Avatar, Hotels, Restaurants, Attractions } from "../assets";
import MenuItem from "../components/MenuItem";

const Discover = () => {
  const [type, setType] = useState("restaurants");
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
          <Image
            source={Avatar}
            className="h-full w-full object-cover rounded-md shadow-lg"
          />
        </View>
      </View>
      <View className="flex-row items-center bg-white py-1 px-2 m-6 shadow-md rounded-xl">
        <GooglePlacesAutocomplete
          placeholder="Search"
          GooglePlacesDetailsQuery={{ fields: "geometry" }}
          fetchDetails={true}
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(details?.geometry?.viewport);
          }}
          query={{
            key: "AIzaSyA8BjlzBN-jhx-6ycBpyVVYH3ep8_LCkPk",
            language: "en",
          }}
        />
      </View>

      {/* Menu Container */}
      <ScrollView>
        <View className="flex-row items-center justify-between px-8 mt-4">
          <MenuItem
            key={"hotels"}
            title="hotels"
            imageSrc={Hotels}
            type={type}
            setType={setType}
          />
          <MenuItem
            key={"attraction"}
            title="attractions"
            imageSrc={Attractions}
            type={type}
            setType={setType}
          />
          <MenuItem
            key={"restaurant"}
            title="restaurants"
            imageSrc={Restaurants}
            type={type}
            setType={setType}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Discover;
