import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native";
import { Avatar, Hotels, Restaurants, Attractions, NotFound } from "../assets";
import MenuItem from "../components/MenuItem";
import { FontAwesome } from "@expo/vector-icons";
import CartItem from "../components/CartItem";

const Discover = () => {
  const [type, setType] = useState("restaurants");
  const [loading, isLoading] = useState(false);
  const [mainData, setMainData] = useState([]);

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
          <Text className="text-[32px] text-[#0B646B] font-bold">DISCOVER</Text>
          <Text className="text-[#527283] text-lg uppercase">
            The beauty today
          </Text>
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
      {loading ? (
        <View className="flex-1 items-center justify-center">
          <ActivityIndicator size="large" color="#0B646B" />
        </View>
      ) : (
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
          <View>
            <View className="flex-row justify-between items-center px-8 mt-10">
              <Text className="text-[#2c7379] font-bold text-xl">Top Tips</Text>
              <TouchableOpacity className="flex-row justify-between gap-2 items-center">
                <Text className="text-[#2c7379] font-semibold">Explore</Text>
                <FontAwesome
                  name="long-arrow-right"
                  size={24}
                  color="#2c7379"
                />
              </TouchableOpacity>
            </View>
            <View className="flex-row  justify-evenly px-4 mt-5">
              {mainData ? (
                <>
                  <View className="w-full h-[300px] justify-center items-center space-y-1">
                    <Image source={NotFound} className="w-24 h-24 " />
                    <Text className="text-xl">Opssss.... No Data Found </Text>
                  </View>
                </>
              ) : (
                <>
                  {" "}
                  <CartItem
                    key={101}
                    imageSrc={
                      "https://cdn.pixabay.com/photo/2022/10/24/11/55/autumn-7543217_960_720.jpg"
                    }
                    title="something"
                    location="Sydney"
                  />
                  <CartItem
                    key={102}
                    imageSrc={
                      "https://cdn.pixabay.com/photo/2022/07/11/08/44/tower-7314495_960_720.jpg"
                    }
                    title="sample"
                    location="KL"
                  />
                </>
              )}
            </View>
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default Discover;
