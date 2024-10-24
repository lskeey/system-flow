import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card"
import { CalendarIcon } from "@radix-ui/react-icons"
import { Checkbox } from "@/components/ui/checkbox"
import DeleteAlertDialog from "./delete-dialog"

const TaskCard = () => {
  return (
    <Card className="w-full">
      <CardContent className="flex p-0">
        <div className="flex items-center p-6">
          <Checkbox />
        </div>
        <div className="flex-1 flex flex-col justify-center py-4 space-y-2 cursor-pointer">
          <CardTitle>Task Description</CardTitle>
          <CardDescription className="flex items-center space-x-1">
            <CalendarIcon />
            <span className="text-xs">Due to 23 October 2024</span>
          </CardDescription>
        </div>
        <div className="flex items-center p-6">
          <DeleteAlertDialog />
        </div>
      </CardContent>
    </Card>
  )
}

export default TaskCard