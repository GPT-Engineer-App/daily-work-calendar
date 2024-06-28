<template>
  <div class="tasks">
    <h1>Tasks</h1>
    <div class="task-columns">
      <div class="task-column">
        <h2>Pending</h2>
        <draggable v-model="pendingTasks" @end="onEnd">
          <div v-for="task in pendingTasks" :key="task.id" class="task">
            {{ task.title }}
          </div>
        </draggable>
      </div>
      <div class="task-column">
        <h2>In Progress</h2>
        <draggable v-model="inProgressTasks" @end="onEnd">
          <div v-for="task in inProgressTasks" :key="task.id" class="task">
            {{ task.title }}
          </div>
        </draggable>
      </div>
      <div class="task-column">
        <h2>Completed</h2>
        <draggable v-model="completedTasks" @end="onEnd">
          <div v-for="task in completedTasks" :key="task.id" class="task">
            {{ task.title }}
          </div>
        </draggable>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import draggable from 'vuedraggable';

export default {
  name: 'Tasks',
  components: {
    draggable,
  },
  computed: {
    ...mapGetters(['tasks']),
    pendingTasks() {
      return this.tasks.filter(task => task.status === 'Pending');
    },
    inProgressTasks() {
      return this.tasks.filter(task => task.status === 'In Progress');
    },
    completedTasks() {
      return this.tasks.filter(task => task.status === 'Completed');
    },
  },
  methods: {
    ...mapActions(['updateTaskStatus']),
    onEnd(event) {
      const { item, to } = event;
      const status = to.getAttribute('data-status');
      this.updateTaskStatus({ id: item.id, status });
    },
  },
};
</script>

<style scoped>
.tasks {
  display: flex;
  justify-content: space-around;
  margin: 50px;
}
.task-columns {
  display: flex;
  justify-content: space-around;
  width: 100%;
}
.task-column {
  width: 30%;
}
.task {
  background-color: #f0f0f0;
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
}
</style>