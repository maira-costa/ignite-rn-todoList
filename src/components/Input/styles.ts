import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

export const styles = StyleSheet.create({
  input: {
    flex: 1,
    height: 52,
    backgroundColor: Colors.gray500,
    borderRadius: 6,
    color: Colors.gray300,
    padding: 16,
    fontSize: 16,
    fontFamily: 'Inter_400Regular',
    marginRight: 4,
  },
  icon: {
    color: Colors.gray100,
  },
  button: {
    width: 52,
    height: 52,
    borderRadius: 6,
    backgroundColor: Colors.blueDark,
    alignItems: "center",
    justifyContent: "center",
  }, 
  form: {
    width: "100%",
    flexDirection: "row",
    marginTop: -52,
    marginBottom: 32,
  },
});