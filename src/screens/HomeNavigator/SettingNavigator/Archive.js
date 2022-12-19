import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// import icons
import { Ionicons } from "@expo/vector-icons";

// import flat images
import ArchiveLogo from "./src/assets/flatImage/ArchiveLogo.svg";

// import styles
import { ArchiveStyles } from "./src/styles/HomeStyles/ArchiveStyles";

const Archive = () => {
  return (
    <SafeAreaView style={ArchiveStyles.container}>
      <View style={ArchiveStyles.header}>
        <TouchableOpacity>
          <Ionicons 
            name="arrow-back"
            size={24}
            color="#292929"
          />
        </TouchableOpacity>
        <Text style={ArchiveStyles.title}>Archive</Text>
      </View>
      <View style={ArchiveStyles.line} />
      <View style={ArchiveStyles.flatImage}>
        <ArchiveLogo width={300} height={300} />
        <Text style={ArchiveStyles.miniText}>There's no archived notes</Text>
      </View>
    </SafeAreaView>
  );
}

export default Archive;