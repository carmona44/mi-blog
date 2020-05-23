<template>
  <!--<div>
    <p v-html="post.date" />
    <h1 v-html="post.title" />
    <p v-html="post.description" />
    <b> {{post.timeToRead}} min read </b>
    <g-link :to="post.path">Read More...</g-link>
  </div>-->
  <div class="card-style rounded overflow-hidden shadow-lg">
    <img class="w-full" src="../img/prueba.png" alt="Sunset in the mountains">
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2 text-center" v-html="post.title"></div>
      <div class="text-center text-sm text-gray-600">
        <span v-html="post.date" />
        <b> {{post.timeToRead}} min lectura </b>
      </div>      
      <p class="text-gray-700 text-base" v-html="post.description" />
      <g-link :to="post.path">Leer más...</g-link>
    </div>
    <div class="px-6 py-4">
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["post"],
};
</script>

<style scope>
.card-style {
  max-width: 65%;
  margin: 1.5rem auto;
}

@media screen and (max-width: 600px) {
  .card-style {
    max-width: 90%;
    margin: 1.5rem auto;
  }
}
</style>