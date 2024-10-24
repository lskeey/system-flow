import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import TaskCard from "./task-card"
import { useEffect, useState } from "react"
import { getTask } from "@/services/api"
import TaskDialog from "./task-dialog"

const TaskTabs = () => {
  const [tasks, setTasks] = useState([])

  const fetch = async() => {
    const data = await getTask()
    setTasks(data)
  }

  useEffect(() => {
    fetch()
  }, [])
  
  const taskGroups = {
    "all": tasks,
    "ongoing": tasks.filter((task) => task.status === "Ongoing"),
    "completed": tasks.filter((task) => task.status === "Completed"),
    "past-due": tasks.filter((task) => task.status === "Past due"),
  };

  return (
    <Tabs defaultValue="all" className="w-full">
      <div className="flex justify-center sm:justify-between items-center mb-4">
      <TabsList>
        <TabsTrigger value="all">All</TabsTrigger>
        <TabsTrigger value="ongoing">Ongoing</TabsTrigger>
        <TabsTrigger value="completed">Completed</TabsTrigger>
        <TabsTrigger value="past-due">Past due</TabsTrigger>
      </TabsList>
      <div className="hidden sm:block">
        <TaskDialog />
      </div>
      </div>
      {Object.keys(taskGroups).map((status) => (
        <TabsContent key={status} value={status} className="flex flex-col space-y-3 m-0">
          {taskGroups[status].map((task) => (
            <TaskCard key={task.id} task={task} tasks={tasks} setTasks={setTasks} />
          ))}
        </TabsContent>
      ))}
    </Tabs>

  )
}

export default TaskTabs