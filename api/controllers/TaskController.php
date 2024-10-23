<?php
class TaskController
{
  private $conn;
  private $table_name = "tasks";

  public function __construct($db)
  {
    $this->conn = $db;
  }

  public function create($data)
  {
    $query = "INSERT INTO " . $this->table_name . " SET description=:description, due_date=:due_date";
    $stmt = $this->conn->prepare($query);

    $stmt->bindParam(":description", $data['description']);
    $stmt->bindParam(":due_date", $data['due_date']);

    return $stmt->execute();
  }

  public function read()
  {
    $query = "SELECT * FROM " . $this->table_name . " ORDER BY due_date ASC";
    $stmt = $this->conn->prepare($query);
    $stmt->execute();
    return $stmt->fetchAll(PDO::FETCH_ASSOC);
  }

  public function update($data, $id)
  {
    $query = "UPDATE " . $this->table_name . " SET description=:description, due_date=:due_date, status=:status WHERE id=:id";
    $stmt = $this->conn->prepare($query);

    $stmt->bindParam(":id", $id);
    $stmt->bindParam(":description", $data['description']);
    $stmt->bindParam(":due_date", $data['due_date']);
    $stmt->bindParam(":status", $data['status']);

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
