<template>
    <div class="card-style rounded overflow-hidden shadow-lg">
      <g-image v-if="post.img" class="w-full" :src="post.img" alt="Sunset in the mountains" />
      <div class="px-6 py-4">
        <p class="text-gray-800 text-base pt-3 pb-3" v-html="post.content" />
      </div>
      <div class="px-6 py-4">
        <g-link class="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2" v-for="tag in post.tags" :key="tag.id" :to="tag.path">
          <span>#</span> {{ tag.title }}
        </g-link>
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