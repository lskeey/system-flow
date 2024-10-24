import TaskTabs from "./components/layout/task-tabs"
import { TaskProvider } from "./hooks/TaskContext"
import './App.css'

const App = () => {
  return (
    <main className="container mx-auto my-16 px-2 md:px-0 md:max-w-2xl lg:max-w-3xl xl:max-w-4xl">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Task<span className="line-through text-gray-400">List</span></h1>
      <TaskProvider >
        <TaskTabs />
      </TaskProvider>
    </main>
  )
}

export default App
