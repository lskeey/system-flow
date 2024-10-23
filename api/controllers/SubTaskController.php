<?php
class SubtaskController
{
  private $conn;
  private $table_name = "subtasks";

  public function __construct($db)
  {
    $this->conn = $db;
  }

  public function create($data)
  {
    $query = "INSERT INTO " . $this->table_name . " SET task_id=:task_id, description=:description";
    $stmt = $this->conn->prepare($query);

    $stmt->bindParam(":task_id", $data['task_id']);
    $stmt->bindParam(":description", $data['description']);

    return $stmt->execute();
  }

  public function read()
  {
    $query = "SELECT * FROM " . $this->table_name . " ORDER BY task_id ASC";
    $stmt = $this->conn->prepare($query);
    $stmt->execute();
    return $stmt->fetchAll(PDO::FETCH_ASSOC);
  }

  public function update($data, $id)
  {
    $query = "UPDATE " . $this->table_name . " SET description=:description, is_completed=:is_completed WHERE id=:id";
    $stmt = $this->conn->prepare($query);

    $stmt->bindParam(":id", $id);
    $stmt->bindParam(":description", $data['description']);
    $stmt->bindParam(":is_completed", $data['is_completed']);

    return $stmt->execute();
  }

  public function delete($id)
  {
    $query = "DELETE FROM " . $this->table_name . " WHERE id=:id";
    $stmt = $this->conn->prepare($query);
    $stmt->bindParam(":id", $id);
    return $stmt->execute();
  }
}
