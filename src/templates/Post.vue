<template>
  <Layout>
    <div>
      <g-link to="/">&larr; Go Back</g-link>
      <h1 class="text-center">{{$page.post.title}}</h1>

      <PostList :post="$page.post" />

      <Profile />

      <Footer />
    </div>
  </Layout>
</template>

<script>

import Profile from '~/components/Profile';
import Footer from '~/components/Footer';
import PostList from '~/components/PostList';

export default {
  components: {
    Profile,
    Footer,
    PostList
  }
}
</script>

<page-query>
query Post ($path: String!) {
   post: post (path: $path) {
    id
    title
    content
    date (format: "D MMMM YYYY")
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