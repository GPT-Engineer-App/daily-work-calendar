import { createStore } from 'vuex';

export default createStore({
  state: {
    tasks: [
      { id: 1, title: 'Task 1', status: 'Pending' },
      { id: 2, title: 'Task 2', status: 'In Progress' },
      { id: 3, title: 'Task 3', status: 'Completed' }
    ]
  },
  mutations: {
    updateTaskStatus(state, { id, status }) {
      const task = state.tasks.find(task => task.id === id);
      if (task) {
        task.status = status;
      }
    }
  },
  actions: {
    updateTaskStatus({ commit }, payload) {
      commit('updateTaskStatus', payload);
    }
  },
  getters: {
    tasksByStatus: (state) => (status) => {
      return state.tasks.filter(task => task.status === status);
    }
  },
  modules: {}
});