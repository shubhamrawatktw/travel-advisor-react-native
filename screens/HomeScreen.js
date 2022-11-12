import React, { useLayoutEffect } from "react";
import { Image, SafeAreaView, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-white relative">
      {/* fist section  */}
      <View className="flex-row mt-10 ml-5 space-x-2 items-center">
        <View className=" w-12 h-12 border rounded-full items-center justify-center bg-black text-white">
          <Text className="text-white text-2xl font-medium">Go</Text>
        </View>

        <Text className="text-2xl font-medium">Travel</Text>
      </View>

      {/* second section  */}
      <View className="px-6 mt-6 space-y-2">
        <Text className="text-black text-[38px] text-bold">
          Enjoy the trip with
        </Text>
        <Text className="text-sky-300 text-[38px] font-bold">Good Moments</Text>

        <Text className="text-black text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          illo, veniam sunt et amet est quasi officia.
        </Text>
      </View>

      {/* third / circle section  */}

      <View className="w-[400px] h-[400px] bg-sky-300 rounded-full absolute bottom-20 -right-40"></View>
      <View className="w-[400px] h-[400px] bg-orange-300 rounded-full absolute -bottom-44 -left-44"></View>

      {/* image contaienr  */}
      <View className="flex-1 relative items-center justify-center ">
        <Image source={require("../assets/hero.png")} className="w-full h-full object-cover"/>

      </View>

    </SafeAreaView>
  );
};

export default HomeScreen;
