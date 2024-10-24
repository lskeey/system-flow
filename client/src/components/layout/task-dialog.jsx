import { Button } from "@/components/ui/button"
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

const TaskDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full md:w-auto">+ Add Task</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle></DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
          <TaskForm />
        <DialogFooter>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default TaskDialog