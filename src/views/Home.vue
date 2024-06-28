<template>
  <div class="home">
    <h1>Project Management System</h1>
    <router-link to="/calendar">Calendar</router-link>
    <router-link to="/tasks">Tasks</router-link>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
</style>