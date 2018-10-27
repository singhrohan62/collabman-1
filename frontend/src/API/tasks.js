import axios from 'axios';
import { API_URL } from '../constants';

// Get user tasks
export const fetchProjectTasks = (username, projectSlug) => {
  return axios.get(
    `${API_URL}/api/v1/${username}/project/${projectSlug}/task/`,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'TOKEN 0702d860af5173686417121fe4300671ef9969ec', // gommenasai
      },
    },
  );
};

// Create new task
export const postTask = (username, projectSlug, payload) => {
  return axios.post(
    `${API_URL}/api/v1/${username}/project/${projectSlug}/task/`,
    payload,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'TOKEN 0702d860af5173686417121fe4300671ef9969ec', // gommenasai
      },
    },
  );
};

// Delete selected task
export const deleteTask = (username, projectSlug, taskId) => {
  return axios.delete(
    `${API_URL}/api/v1/${username}/project/${projectSlug}/task/${taskId}/`,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'TOKEN 0702d860af5173686417121fe4300671ef9969ec', // gommenasai
      },
    },
  );
};
