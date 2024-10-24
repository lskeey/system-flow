import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import DatePicker from "./date-picker"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { addTask } from "@/services/api"
import PropTypes from "prop-types"

const TaskForm = ({ closeDialog }) => {
  const [description, setDescription] = useState("")
  const [date, setDate] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    await addTask(description, date);
    closeDialog();
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col space-y-1.5 mb-4">
        <Label htmlFor="description">Description</Label>
        <Input type="description" value={description} id="description" onChange={(e) => setDescription(e.target.value)} />
      </div>
      <div className="flex flex-col space-y-1.5 mb-8">
        <Label>Due date</Label>
        <DatePicker date={date} setDate={setDate} />
      </div>
      <div className="flex md:justify-end">
        <Button type="submit" className="w-full md:w-auto">Add Task</Button>
      </div>
    </form>
  )
}

TaskForm.propTypes = {
  closeDialog: PropTypes.func.isRequired,
}

export default TaskForm