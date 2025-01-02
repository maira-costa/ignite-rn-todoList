import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { TaskProps } from "../../types";
import Colors from "../../constants/Colors";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export function Task({ taskText, isDone, onDelete, onTaskDone }: TaskProps) {
  return (
    <View style={styles.task}>
      <View style={styles.checkTask}>
        <TouchableOpacity onPress={() => onTaskDone(taskText)}>
          <MaterialCommunityIcons
            style={styles.checkbox}
            name={
              isDone
                ? "checkbox-marked-circle-outline"
                : "checkbox-blank-circle-outline"
            }
            size={24}
            color={isDone ? Colors.purpleDark : Colors.blue}
          />
        </TouchableOpacity>
        <Text style={isDone ? styles.tasktextChecked : styles.tasktext}>
          {taskText}
        </Text>
      </View>
      <TouchableOpacity onPress={onDelete}>
        <EvilIcons style={styles.deleteIcon} name="trash" size={24} />
      </TouchableOpacity>
    </View>
  );
}
