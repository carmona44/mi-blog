<template>
  <div>
    <p v-html="post.date" />
    <h1 v-html="post.title" />
    <p v-html="post.description" />
    <b> {{post.timeToRead}} min read </b>
    <g-link :to="post.path">Read More...</g-link>
  </div>
</template>

<script>
export default {
  props: ["post"],
};
</script>