export type TaskType = {
  taskText: string;
  isDone: boolean;
}

export type TaskProps = TaskType & {
  onDelete: () => void;
  onTaskDone: (taskText: string) => void;
}

type InputProps = {
  value: string;
  onChangeText: () => void;
  onAddTask: () => void;
};