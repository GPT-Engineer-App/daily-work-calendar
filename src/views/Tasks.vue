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
    draggable
  },
  computed: {
    ...mapGetters({
      pendingTasks: state => state.tasksByStatus('Pending'),
      inProgressTasks: state => state.tasksByStatus('In Progress'),
      completedTasks: state => state.tasksByStatus('Completed')
    })
  },
  methods: {
    ...mapActions(['updateTaskStatus']),
    onEnd(event) {
      const { item, to } = event;
      const status = to.parentElement.querySelector('h2').innerText;
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
  padding: 10px;
  margin: 5px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
}
</style>