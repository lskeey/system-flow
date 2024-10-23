<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST, GET, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once './config/database.php';
include_once './controllers/TaskController.php';
include_once './controllers/SubTaskController.php';

$database = new Database();
$db = $database->getConnection();

$taskController = new TaskController($db);
$subTaskController = new SubTaskController($db);

$requestUri = explode('/', trim($_SERVER['REQUEST_URI'], '/'));
$endpoint = $requestUri[1] ?? '';
$method = $_SERVER['REQUEST_METHOD'];

switch ($endpoint) {
  case 'tasks':
    switch ($method) {
      case 'GET':
        echo json_encode($taskController->read());
        break;

      case 'POST':
        $data = json_decode(file_get_contents("php://input"), true);
        if ($taskController->create($data)) {
          echo json_encode(["message" => "Task was created."]);
        } else {
          echo json_encode(["message" => "Unable to create task."]);
        }
        break;

      case 'PUT':
        $data = json_decode(file_get_contents("php://input"), true);
        $id = (int) $requestUri[2];
        if ($taskController->update($data, $id)) {
          echo json_encode(["message" => "Task was updated."]);
        } else {
          echo json_encode(["message" => "Unable to update task."]);
        }
        break;

      case 'DELETE':
        $data = json_decode(file_get_contents("php://input"), true);
        $id = (int) $requestUri[2];
        if ($taskController->delete($id)) {
          echo json_encode(["message" => "Task was deleted."]);
        } else {
          echo json_encode(["message" => "Unable to delete task."]);
        }
        break;

      default:
        echo json_encode(["message" => "Request method not supported."]);
        break;
    }
    break;

  case 'subtasks':
    switch ($method) {
      case 'GET':
        echo json_encode($subTaskController->read());
        break;

      case 'POST':
        $data = json_decode(file_get_contents("php://input"), true);
        if ($subTaskController->create($data)) {
          echo json_encode(["message" => "Subtask was created."]);
        } else {
          echo json_encode(["message" => "Unable to create subtask."]);
        }
        break;

      case 'PUT':
        $data = json_decode(file_get_contents("php://input"), true);
        $id = (int) $requestUri[2];
        if ($subTaskController->update($data, $id)) {
          echo json_encode(["message" => "Subtask was updated."]);
        } else {
          echo json_encode(["message" => "Unable to update subtask."]);
        }
        break;

      case 'DELETE':
        $data = json_decode(file_get_contents("php://input"), true);
        $id = (int) $requestUri[2];
        if ($subTaskController->delete($id)) {
          echo json_encode(["message" => "Subtask was deleted."]);
        } else {
          echo json_encode(["message" => "Unable to delete subtask."]);
        }
        break;

      default:
        echo json_encode(["message" => "Request method not supported."]);
        break;
    }
    break;

  default:
    echo json_encode(["message" => "Invalid endpoint."]);
    break;
}
