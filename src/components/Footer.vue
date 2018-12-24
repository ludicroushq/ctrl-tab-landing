<template>
  <footer class="footer">
    <div class="content has-text-centered has-text-weight-bold has-text-grey-dark">
      <a href="https://www.ludicrous.xyz" class="has-text-grey-dark">
        &copy; {{ this.year }} ludicrous.
      </a>
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
