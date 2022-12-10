import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";

import { Ionicons } from "@expo/vector-icons";

const Header = () => {
  return (
    <View>
      <TouchableOpacity>
        <Ionicons name="moon" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
