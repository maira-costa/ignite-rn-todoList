import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

export const styles = StyleSheet.create({
  task: {
    flexDirection: "row",
    padding: 12,
    paddingRight: 20,
    backgroundColor: Colors.gray500,
    marginBottom: 8,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "space-between",
  },
  checkTask: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    marginRight: 12,
    borderRadius: 999,
  },
  tasktext: {
    fontSize: 14,
    color: Colors.gray100,
    fontFamily: "Inter_400Regular",
    width: "85%",
  },
  tasktextChecked: {
    textDecorationLine: "line-through",
    color: Colors.gray300,
    fontFamily: "Inter_400Regular",
    width: "85%",
  },
  deleteIcon: {
    color: Colors.gray300,
  }
});