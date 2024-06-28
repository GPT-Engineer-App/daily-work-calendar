import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: []
  },
  mutations: {
    addTask(state, task) {
      state.tasks.push(task);
    },
    updateTaskStatus(state, { taskId, status }) {
      const task = state.tasks.find(task => task.id === taskId);
      if (task) {
        task.status = status;
      }
    }
  },
  actions: {
    addTask({ commit }, task) {
      commit('addTask', task);
    },
    updateTaskStatus({ commit }, payload) {
      commit('updateTaskStatus', payload);
    }
  },
  getters: {
    tasks: state => state.tasks,
    tasksByStatus: state => status => state.tasks.filter(task => task.status === status)
  }
});