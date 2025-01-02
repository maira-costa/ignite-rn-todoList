import { useState } from "react";
import { Alert, FlatList, Image, Keyboard, Text, View } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { styles } from "./styles";
import { TaskType } from "../../types";
import { Input } from "../../components/Input";
import { Task } from "../../components/Task";

export function Home() {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [newTask, setNewTask] = useState("");

  function handleAddTask() {
    if (!newTask) return;

    if (tasks.find((task) => task.taskText === newTask)) {
      return Alert.alert(
        "Tarefa Existe",
        "Essa tarefa já foi adcionada à lista"
      );
    }

    setTasks((prevState) => [
      ...prevState,
      { taskText: newTask, isDone: false },
    ]);

    setNewTask("");
    Keyboard.dismiss();
  }

  function hadleTaskDone(taskText: string) {
    setTasks((task) =>
      task.map((task) => {
        task.taskText === taskText ? (task.isDone = !task.isDone) : null;
        return task;
      })
    );
  }

  function handleDeleteTask(taskText: string) {
    Alert.alert("Deletar", "Deletar a tarefa?", [
      {
        text: "Sim",
        onPress: () => {
          setTasks((prevState) =>
            prevState.filter((task) => task.taskText !== taskText)
          );
        },
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  const tasksCreated = tasks.length;
  const tasksDone = tasks.filter((task) => task.isDone === true).length;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../../assets/todo-logo.png")}
          accessibilityLabel="todo"
        />
      </View>
      <View style={styles.tasksContainer}>
        <Input
          value={newTask}
          onChangeText={setNewTask}
          onAddTask={handleAddTask}
        />
        <View style={styles.tasksInfo}>
          <View style={styles.tasksInfoItem}>
            <Text style={[styles.tasksInfoText, styles.tasksCreated]}>
              Criadas
            </Text>
            <Text style={[styles.tasksInfoText, styles.tasksTotal]}>
              {tasksCreated}
            </Text>
          </View>
          <View style={styles.tasksInfoItem}>
            <Text style={[styles.tasksInfoText, styles.tasksDone]}>
              Concluídas
            </Text>
            <Text style={[styles.tasksInfoText, styles.tasksTotal]}>
              {tasksDone}
            </Text>
          </View>
        </View>
        <View>
          <FlatList
            data={tasks}
            keyExtractor={(item, index) => `${index}${item}`}
            renderItem={({ item }) => (
              <Task
                taskText={item.taskText}
                onDelete={() => handleDeleteTask(item.taskText)}
                onTaskDone={hadleTaskDone}
                isDone={item.isDone}
              />
            )}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={() => (
              <View style={styles.listEmptyView}>
                <Feather
                  style={styles.listEmptyIcon}
                  name="clipboard"
                  size={56}
                />
                <Text
                  style={[styles.listEmptyViewText, styles.listEmptyViewTitle]}
                >
                  Você ainda não tem tarefas cadastradas
                </Text>
                <Text style={[styles.listEmptyViewText]}>
                  Crie tarefas e organize seus itens a fazer
                </Text>
              </View>
            )}
          />
        </View>
      </View>
    </View>
  );
}
