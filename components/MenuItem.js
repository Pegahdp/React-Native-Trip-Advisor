import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const MenuItem = ({ title, imageSrc, type, setType }) => {
  const handlePress = () =>{
    setType(title.toLowerCase())
  }
  return (
    <TouchableOpacity className="items-center justify-center gap-2" onPress={handlePress}>
      <View
        className={`items-center justify-center w-20 h-20 p-2 rounded-full ${
          type === title.toLowerCase() ? "bg-gray-200" : ""
        }`}
      >
        <Image source={imageSrc} className="h-full w-full items-center justify-center object-contain" />
      </View>
      <Text className="text-sm font-semibold text-[#0B646B]">
        {title.toUpperCase()}
      </Text>
    </TouchableOpacity>
  );
};

export default MenuItem;
