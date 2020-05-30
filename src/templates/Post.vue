<template>
  <Layout>
    <div class="post-page-style">
      <g-link to="/">&larr; Go Back</g-link>
      <div class="py-4">
        <h1 class="text-center">{{$page.post.title}}</h1>      
        <div class="text-center text-xs text-gray-600">
          <span v-html="$page.post.date" />
          <b> {{$page.post.timeToRead}} min lectura </b>
        </div> 
      </div>

      <PostCard :post="$page.post" />

      <Profile />

      <Footer />
    </div>
  </Layout>
</template>

<script>

import Profile from '~/components/Profile';
import Footer from '~/components/Footer';
import PostCard from '~/components/PostCard';

export default {
  components: {
    Profile,
    Footer,
    PostCard
  }
}
</script>

<page-query>
query Post ($path: String!) {
   post: post (path: $path) {
    id
    title
    content
    date (format: "D MMMM YYYY", locale: "es")
    timeToRead
    img
    tags {
      id
      title
      path
    }
  }
}
</page-query>

<style scoped>
.post-page-style {
  max-width: 100%;
}
</style>