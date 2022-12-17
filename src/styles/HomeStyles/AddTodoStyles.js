import { StyleSheet } from "react-native";

export const AddTodoStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 30,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#F2F2F2",
    padding: 10,
    borderRadius: 5,
  },
  titleInput: {
    height: 50,
    fontSize: 24,
    fontWeight: "700",
    color: "#676767",
    marginTop: 20,
    borderBottomWidth: 2,
    borderBottomColor: "#F2F2F2",
  },
  input: {
    fontSize: 18,
    fontWeight: "500",
    color: "#676767",
    marginTop: 20,
  },
});
