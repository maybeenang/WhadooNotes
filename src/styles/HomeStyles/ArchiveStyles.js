import { StyleSheet } from "react-native";

export const ArchiveStyles = StyleSheet.create ({
    container: {
      flex: 1,
      justifyContent: "flex-start",
      padding: 30
    },
    header: {
      flexDirection: "row",
      width: "63%",
      justifyContent: "space-between",
      marginBottom: 9
    },
    title: {
      fontSize: 30,
      fontWeight: "900",
      color: "#292929",
    },
    line: {
      width: "100%",
      height: 1,
      backgroundColor: "#D2D2D2"
    },
    flatImage: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    },
    miniText: {
      color: "#292929"
    }
});