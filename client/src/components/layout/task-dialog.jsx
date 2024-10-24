import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import TaskForm from "./task-form"
import { useState } from "react"
import PropTypes from "prop-types"

const TaskDialog = ({ children, task }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const openDialog = () => setIsDialogOpen(true)
  const closeDialog = () => setIsDialogOpen(false)
  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <div className="w-full" onClick={openDialog}>{children}</div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle></DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
          <TaskForm closeDialog={closeDialog} task={task} />
        <DialogFooter>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

TaskDialog.propTypes = {
  children: PropTypes.node,
  task: PropTypes.shape({
    id: PropTypes.number,
    description: PropTypes.string,
    due_date: PropTypes.string,
    status: PropTypes.string,
  }),
};

export default TaskDialog