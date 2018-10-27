// API Constants
export const API_URL = 'http://localhost:8000';
export const GITHUB_API_URL = 'https://api.github.com';

// Actions listed below

// Projects Actions
export const projectActions = {
  FETCH_USER_PROJECT_FAILED: 'FETCH_USER_PROJECT_FAILED',
  FETCH_USER_PROJECT_DONE: 'FETCH_USER_PROJECT_DONE',
  FETCH_USER_PROJECT_LOADING: 'FETCH_USER_PROJECT_LOADING',
  SET_CURRENT_PROJECT: 'SET_CURRENT_PROJECT',
  CREATE_NEW_PROJECT_SUCCESS: 'CREATE_NEW_PROJECT_SUCCESS',
  CREATING_NEW_PROJECT: 'CREATING_NEW_PROJECT',
  CREATE_NEW_PROJECT_FAILED: 'CREATE_NEW_PROJECT_FAILED',
};

export const githubActions = {
  FETCH_CONTRIBUTION_SUCCESS: 'FETCH_CONTRIBUTION_SUCCESS',
  FETCH_CONTRIBUTION_FAILED: 'FETCH_CONTRIBUTION_FAILED',
};

export const taskActions = {
  FETCH_TASKS_SUCCESS: 'FETCH_TASKS_SUCCESS',
  FETCH_TASKS_FAILED: 'FETCH_TASKS_FAILED',
  TASK_POST_SUCCESS: 'TASK_POST_SUCCESS',
  TASK_POST_FAILED: 'TASK_POST_FAILED',
  TASK_POSTING: 'TASK_POSTING',
  TASK_DELETE_SUCCESS: 'TASK_DELETE_SUCCESS',
  TASK_DELETE_FAILED: 'TASK_DELETE_FAILED',
};

export const documentActions = {
  FETCH_DOCS_SUCCESS: 'FETCH_DOCS_SUCCESS',
  FETCH_DOCS_FAILED: 'FETCH_DOCS_FAILED',
};
