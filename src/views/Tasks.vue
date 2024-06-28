<template>
  <div class="tasks">
    <div class="task-column" v-for="status in statuses" :key="status">
      <h2>{{ status }}</h2>
      <draggable
        v-model="tasksByStatus(status)"
        @end="onEnd"
        group="tasks"
        class="task-list"
      >
        <div v-for="task in tasksByStatus(status)" :key="task.id" class="task-item">
          {{ task.name }}
        </div>
      </draggable>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import draggable from 'vuedraggable';

export default {
  name: 'Tasks',
  components: {
    draggable
  },
  data() {
    return {
      statuses: ['Pending', 'In Progress', 'Completed']
    };
  },
  computed: {
    ...mapGetters(['tasksByStatus'])
  },
  methods: {
    ...mapActions(['updateTaskStatus']),
    onEnd(event) {
      const { item, newIndex, oldIndex } = event;
      const taskId = item.dataset.id;
      const newStatus = this.statuses[newIndex];
      this.updateTaskStatus({ taskId, status: newStatus });
    }
  }
};
</script>

<style scoped>
.tasks {
  display: flex;
  justify-content: space-around;
  height: 100vh;
}
.task-column {
  width: 30%;
}
.task-list {
  min-height: 200px;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
}
.task-item {
  padding: 10px;
  margin: 5px 0;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 3px;
}
</style>