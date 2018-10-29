<template>
  <footer class="footer">
    <div class="content has-text-centered has-text-white has-text-weight-bold">
      &copy; {{ this.year }} ludicrous.
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      year: (new Date()).getFullYear(),
    };
  },
};
</script>

<style lang="scss" scoped>
.footer {
  padding: 3rem 1.5rem;
}
</style>
