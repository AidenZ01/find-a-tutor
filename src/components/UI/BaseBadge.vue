<template>
  <span class="badge" :class="type">
    {{ text }}
  </span>
</template>

<script>
export default {
  props: ['type', 'title'],
  computed: {
    text() {
      return this.title.toUpperCase();
    }
  }
};
</script>

<style scoped>
.badge {
  background-color: #ccc;
  color: #252525;
  border-radius: 30px;
  padding: 0.5rem 1.5rem;
  display: inline-block;
  margin-right: 0.5rem;
}

.frontend {
  background-color: #cccccc;
  color: #ffffff;
}

.backend {
  background-color: #1a1a1a;
  color: white;
}

.career {
  background-color: rgba(252, 49, 49, 0.7);
  color: white;
}
</style>
