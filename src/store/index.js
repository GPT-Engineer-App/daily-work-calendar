import { createStore } from 'vuex';

export default createStore({
  state: {
    tasks: [
      { id: 1, title: 'Task 1', status: 'Pending' },
      { id: 2, title: 'Task 2', status: 'In Progress' },
      { id: 3, title: 'Task 3', status: 'Completed' },
    ],
  },
  mutations: {
    addTask(state, task) {
      state.tasks.push(task);
    },
    updateTaskStatus(state, { id, status }) {
      const task = state.tasks.find(task => task.id === id);
      if (task) {
        task.status = status;
      }
    },
  },
  actions: {
    addTask({ commit }, task) {
      commit('addTask', task);
    },
    updateTaskStatus({ commit }, payload) {
      commit('updateTaskStatus', payload);
    },
  },
  getters: {
    tasks: state => state.tasks,
  },
});