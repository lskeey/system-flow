import axios from "axios";
import { format } from "date-fns";

const API_URL = 'http://localhost/api/tasks';

export const getTask = async () => {
  try {
    const res = await axios.get(`${API_URL}`)
    return res.data
  } catch (err) {
    console.log(err)
    return []
  }
}

export const addTask = async (description, due_date) => {
  try {
    due_date = format(due_date, "yyyy-MM-dd")
    const body = {description, due_date}
    const res = await axios.post(`${API_URL}`, body, {
      headers: { 'Content-Type': 'applicaton/json'}
    })
    return res
  } catch (err) {
    console.log(err.message)
    return null
  }
}

export const updateTask = async (id, description, due_date, status) => {
  try {
    due_date = format(due_date, "yyyy-MM-dd")
    const body = {description, due_date, status}
    const res = await axios.put(`${API_URL}/${id}`, body, {
      headers: { 'Content-Type': 'applicaton/json'}
    })
    return res.data
  } catch (err) {
    console.log(err.message);
    return null
  }
}

export const deleteTask = async (id) => {
  try {
    const res = await axios.delete(`${API_URL}/${id}`)
    return res.data
  } catch (err) {
    console.log(err.message)
    return null
  }
}

export const markAsDone = async (description, due_date, id) => {
  try {
    due_date = format(due_date, "yyyy-MM-dd")
    const body = {description, due_date, status: "Completed"}
    const res = await axios.put(`${API_URL}/${id}`, body, {
      headers: { 'Content-Type': 'applicaton/json'}
    })
    return res.data
  } catch (err) {
    console.log(err.message);
    return null
  }
}

export const markAsUndone = async (description, due_date, id) => {
  try {
    due_date = format(due_date, "yyyy-MM-dd")
    const body = {description, due_date, status: "Ongoing"}
    const res = await axios.put(`${API_URL}/${id}`, body, {
      headers: { 'Content-Type': 'applicaton/json'}
    })
    return res.data
  } catch (err) {
    console.log(err.message);
    return null
  }
}