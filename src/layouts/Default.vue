<template>
  <div class="layout">
    <slot/>
    <footer class="footer">
      <p>Copyright &copy; {{ new Date().getFullYear() }}</p>
      <p>Powered by Daniel Carmona Alarcón with Gridsome. Inspired on gridsome-starter-blog</p>
    </footer>
  </div>
</template>

<style>

</style>
