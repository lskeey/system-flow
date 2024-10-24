import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getTask, updateTask } from '@/services/api';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const data = await getTask();
    const today = new Date();

    const updatedTasks = await Promise.all(data.map(async task => {
      const dueDate = new Date(task.due_date);
      if (dueDate < today && task.status !== 'Completed') {
        await updateTask({ ...task, status: 'Past due' });
        return { ...task, status: 'Past due' };
      }
      return task;
    }));

    setTasks(updatedTasks);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <TaskContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TaskContext.Provider>
  );
};

TaskProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
