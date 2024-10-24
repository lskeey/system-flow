import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { deleteTask } from "@/services/api"
import { Cross1Icon } from "@radix-ui/react-icons"
import PropTypes from "prop-types"

const DeleteAlertDialog = ({ id, tasks, setTasks }) => {

  const handleDelete = async (id) => {
    const res = await deleteTask(id)
    if (res) {
      const updatedTasks = tasks.filter(task => task.id !== id);
      setTasks(updatedTasks)
    }
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Cross1Icon className="cursor-pointer" color="red" />
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This will permanently delete your
            task.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={() => handleDelete(id)}>Delete</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

DeleteAlertDialog.propTypes = {
  id: PropTypes.number.isRequired,
  tasks: PropTypes.array.isRequired,
  setTasks: PropTypes.func.isRequired
}

export default DeleteAlertDialog