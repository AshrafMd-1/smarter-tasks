import Task from "./Task";
import { TaskItem } from "./types.ts";

interface Props {
  tasks: TaskItem[];
  deleteTaskCB: (task: TaskItem) => void;
}

const TaskList = (props: Props) => {
  const list = props.tasks.map((task, idx) => (
    <li key={idx}>
      <Task item={task} removeTask={props.deleteTaskCB} />
    </li>
  ));
  return <ul>{list}</ul>;
};

export default TaskList;
