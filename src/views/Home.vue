<template>
  <div class="home">
    <h1>Welcome to the Project Management System</h1>
    <router-link to="/calendar">Go to Calendar</router-link>
    <router-link to="/tasks">Go to Tasks</router-link>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style scoped>
.home {
  text-align: center;
  margin-top: 50px;
}
</style>