<template>
  <div class="tasks">
    <h2>Pending</h2>
    <draggable v-model="pendingTasks" @end="onEnd">
      <div v-for="task in pendingTasks" :key="task.id">{{ task.title }}</div>
    </draggable>

    <h2>In Progress</h2>
    <draggable v-model="inProgressTasks" @end="onEnd">
      <div v-for="task in inProgressTasks" :key="task.id">{{ task.title }}</div>
    </draggable>

    <h2>Completed</h2>
    <draggable v-model="completedTasks" @end="onEnd">
      <div v-for="task in completedTasks" :key="task.id">{{ task.title }}</div>
    </draggable>
  </div>
</template>

<script>
import draggable from 'vuedraggable';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Tasks',
  components: {
    draggable
  },
  computed: {
    ...mapGetters(['tasksByStatus']),
    pendingTasks() {
      return this.tasksByStatus('Pending');
    },
    inProgressTasks() {
      return this.tasksByStatus('In Progress');
    },
    completedTasks() {
      return this.tasksByStatus('Completed');
    }
  },
  methods: {
    ...mapActions(['updateTaskStatus']),
    onEnd(event) {
      const { item, newIndex, oldIndex } = event;
      const status = item.parentElement.previousElementSibling.textContent;
      this.updateTaskStatus({ id: item.dataset.id, status });
    }
  }
}
</script>

<style scoped>
.tasks {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
</style>