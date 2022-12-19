import { StyleSheet } from "react-native";

export const TodoStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    paddingBottom: 10,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "900",
    color: "#676767",
  },
  button: {
    backgroundColor: "#F2F2F2",
    padding: 10,
    borderRadius: 5,
  },
  searchContainer: {
    // backgroundColor: "#EEEEEE",
    padding: 10,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  scrollHorizontal: {
    marginTop: 30,
    flexDirection: "row",
  },
  labelScreen: {
    flexDirection: "row",
    marginTop: 20,
  },
  labelButton: {
    padding: 10,
    marginEnd: 10,
  },
  labelText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#9F9F9F",
  },
  labelActive: {
    color: "#676767",
    fontWeight: "900",
  },
  itemContainer: {
    backgroundColor: "#CEF1F5",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    width: "95%",
  },
  itemTitleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  descriptionContainer: {
    marginTop: 10,
    // backgroundColor: "#fff",
    width: "90%",
  },
  scrollIndicator: {
    height: 4,
    width: 50,
    marginTop: -5,
    backgroundColor: "#676767",
    borderRadius: 5,
    marginLeft: 7,
  },
});
