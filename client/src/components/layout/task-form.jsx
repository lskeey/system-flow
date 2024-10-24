import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import DatePicker from "./date-picker"
import { Button } from "@/components/ui/button"

const TaskForm = () => {
  return (
    <div>
      <div className="flex flex-col space-y-1.5 mb-4">
        <Label htmlFor="description">Description</Label>
        <Input type="description" id="description" />
      </div>
      <div className="flex flex-col space-y-1.5 mb-8">
        <Label>Due date</Label>
        <DatePicker />
      </div>
      <div className="flex md:justify-end">
        <Button className="w-full md:w-auto">Add Task</Button>
      </div>
    </div>
  )
}

export default TaskForm