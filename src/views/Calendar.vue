<template>
  <div class="calendar">
    <v-calendar />
  </div>
</template>

<script>
import { VCalendar } from 'v-calendar';

export default {
  name: 'Calendar',
  components: {
    VCalendar,
  },
};
</script>

<style scoped>
.calendar {
  margin: 50px;
}
</style>