<template>
  <div class="calendar">
    <v-calendar is-expanded />
  </div>
</template>

<script>
export default {
  name: 'Calendar'
}
</script>

<style scoped>
.calendar {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
</style>