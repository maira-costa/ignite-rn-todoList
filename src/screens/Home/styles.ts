import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.gray600,
    flex: 1,
  },
  header: {
    height: 168,
    backgroundColor: Colors.gray700,
    justifyContent: "center",
    alignItems: "center",
  },
  tasksContainer: {
    padding: 24,
  },
  tasksInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray400,
    paddingBottom: 20,
  },
  tasksInfoItem: {
    flexDirection: 'row',
    alignItems: "center",
  },
  tasksInfoText: {
    fontSize: 14,
    fontFamily: "Inter_700Bold",
  },
  tasksCreated: {
    color: Colors.blue,
  },
  tasksDone: {
    color: Colors.purple,
  },
  tasksTotal: {
    fontSize: 12,
    color: Colors.gray100,
    backgroundColor: Colors.gray400,
    borderRadius: 999,
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginLeft: 8,
  },
  listEmptyView: {
    alignItems: "center",
    marginTop: 48,
  },
  listEmptyIcon: {
    color: Colors.gray300,
    marginBottom: 16,
  },
  listEmptyViewText: {
    fontSize: 14,
    fontFamily: "Inter_400Regular",
    color: Colors.gray300,
    textAlign: "center",
  },
  listEmptyViewTitle: {
    fontFamily: "Inter_700Bold",
  },
});