import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card"
import { CalendarIcon } from "@radix-ui/react-icons"
import { Checkbox } from "@/components/ui/checkbox"
import DeleteAlertDialog from "./delete-dialog"
import { format } from "date-fns"
import PropTypes from "prop-types"
import { updateTask } from "@/services/api"

const TaskCard = ({ task, tasks, setTasks }) => {
  
  const handleCheckBox = async (selectedTask) => {
    const newTaskStatus = selectedTask.status === "Completed" ? "Ongoing" : "Completed";
    const updatedTask = { 
      ...selectedTask, 
      status: newTaskStatus 
    };
    const updatedTasksList = tasks.map(task =>
      task.id === selectedTask.id ? updatedTask : task
    );
    setTasks(updatedTasksList);
    const success = await updateTask(selectedTask.id, selectedTask.description, selectedTask.due_date, newTaskStatus);
    if (!success) {
      setTasks(tasks); 
    }
  };
  
  const due_date = format(task.due_date, "PPP")

  return (
    <Card className="w-full">
      <CardContent className="flex p-0">
        <div className="flex items-center p-6">
          <Checkbox
            checked={task.status === "Completed"}
            onCheckedChange={() => handleCheckBox(task)}
          />
        </div>
        <div className="flex-1 flex flex-col justify-center py-4 space-y-2 cursor-pointer">
          <CardTitle>{task.description}</CardTitle>
          <CardDescription className="flex items-center space-x-1">
            <CalendarIcon />
            <span className="text-xs">Due to {due_date}</span>
          </CardDescription>
        </div>
        <div className="flex items-center p-6">
          <DeleteAlertDialog id={task.id} tasks={tasks} setTasks={setTasks} />
        </div>
      </CardContent>
    </Card>
  )
}

TaskCard.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    due_date: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
  tasks: PropTypes.array.isRequired,
  setTasks: PropTypes.func.isRequired
};

export default TaskCard