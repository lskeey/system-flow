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
import { useContext } from "react"
import { TaskContext } from "@/hooks/TaskContext"
import TaskDialog from "./task-dialog"

const TaskCard = ({ task }) => {
  const { tasks, setTasks } = useContext(TaskContext);
  
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
        <div className="flex-1">
          <TaskDialog task={task}>
            <div className="flex flex-col justify-center py-4 space-y-2 cursor-pointer">
              <CardTitle>{task.description}</CardTitle>
              <CardDescription className="flex items-center space-x-1">
                <CalendarIcon />
                <span className="text-xs">Due to {due_date}</span>
              </CardDescription>
            </div>
          </TaskDialog>
        </div>
        <div className="flex items-center p-6">
          <DeleteAlertDialog id={task.id} />
        </div>
      </CardContent>
    </Card>
  )
}

TaskCard.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number,
    description: PropTypes.string,
    due_date: PropTypes.string,
    status: PropTypes.string,
  }),
};

export default TaskCard