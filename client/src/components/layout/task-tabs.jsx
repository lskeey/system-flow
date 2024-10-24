import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import TaskCard from "./task-card"

const TaskTabs = () => {
  return (
    <Tabs defaultValue="all" className="w-full">
      <TabsList>
        <TabsTrigger value="all">All</TabsTrigger>
        <TabsTrigger value="ongoing">Ongoing</TabsTrigger>
        <TabsTrigger value="completed">Completed</TabsTrigger>
        <TabsTrigger value="past-due">Past due</TabsTrigger>
      </TabsList>
      <TabsContent value="all" className="flex flex-col space-y-3">
        <TaskCard />
        <TaskCard />
        <TaskCard />
      </TabsContent>
      <TabsContent value="ongoing" className="flex flex-col space-y-3"></TabsContent>
      <TabsContent value="completed" className="flex flex-col space-y-3"></TabsContent>
      <TabsContent value="past-due" className="flex flex-col space-y-3"></TabsContent>
    </Tabs>

  )
}

export default TaskTabs