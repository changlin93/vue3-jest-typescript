<template>
  <div class="home">
    <Timeline msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Timeline from '@/components/Timeline.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'Home',
  components: {
    Timeline,
  },
});
</script>
