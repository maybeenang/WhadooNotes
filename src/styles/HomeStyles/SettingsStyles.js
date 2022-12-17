import { StyleSheet } from "react-native";

export const SettingsStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 30,
    alignItems: "center",
  },
  profileHeader: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    marginBottom: 15,
  },
  iconUserContainer: {
    height: 120,
    width: 120,
    borderRadius: 5,
    backgroundColor: "#EEEEEE",
    justifyContent: "center",
    alignItems: "center",
    marginRight: "5%",
  },
  userStyle: {
    fontSize: 35,
    fontWeight: "900",
  },
  mailStyle: {
    fontSize: 15,
    marginBottom: 5,
    color: "#BBBBBB",
  },
  changePictureContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 3,
    padding: 4,
  },
  tittleContainer: {
    color: "#676767",
    fontSize: 18,
  },
  optionContainer: {
    width: "100%",
    marginTop: 30,
  },
  innerOptionContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#F5F5F5",
    padding: 10,
    borderRadius: 5,
    marginVertical: 7,
  },
  LogOutOptionContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FFECEC",
    padding: 10,
    borderRadius: 5,
    marginVertical: 7,
  },
  optionDesc: {
    flexDirection: "row",
    alignItems: "center",
  },
  optionTextDecs: {
    marginLeft: 10,
    color: "#676767",
  },
  buttonOption: {
    borderWidth: 1,
    borderColor: "#676767",
    borderRadius: 100,
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
