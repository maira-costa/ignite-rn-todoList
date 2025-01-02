import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import Colors from "../../constants/Colors";
import AntDesign from "@expo/vector-icons/AntDesign";
import { InputProps } from "../../types";

export function Input({ value, onChangeText, onAddTask }: InputProps) {
  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor={Colors.gray300}
        value={value}
        onChangeText={onChangeText}
      />
      <TouchableOpacity style={styles.button} onPress={onAddTask}>
        <AntDesign
          style={styles.icon}
          name="pluscircleo"
          size={16}
          color="black"
        />
      </TouchableOpacity>
    </View>
  );
}
