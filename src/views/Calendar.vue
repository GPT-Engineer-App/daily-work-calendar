<template>
  <div class="calendar">
    <h1>Calendar</h1>
    <full-calendar></full-calendar>
  </div>
</template>

<script>
import FullCalendar from 'vue-full-calendar';

export default {
  name: 'Calendar',
  components: {
    FullCalendar
  }
}
</script>

<style scoped>
.calendar {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>