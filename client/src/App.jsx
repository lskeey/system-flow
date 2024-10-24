// import TaskDialog from "./components/layout/task-dialog"
import TaskTabs from "./components/layout/task-tabs"
import './App.css'
import { TaskProvider } from "./hooks/TaskContext"

const App = () => {
  return (
    <main className="container mx-auto px-2 md:px-0 md:max-w-2xl lg:max-w-3xl xl:max-w-4xl">
      <h1 className="text-3xl font-bold text-center py-6">Task<span className="line-through">List</span></h1>
      <TaskProvider >
        <TaskTabs />
      </TaskProvider>
    </main>
  )
}

export default App
