<template>
  <Layout>
    <div>
      <Profile />
      <PostList v-for="(edge, index) in $page.allPost.edges" :post="edge.node" :key="index" />
      <Footer />
    </div>
  </Layout>
</template>

<script>
import Profile from '~/components/Profile';
import PostList from '~/components/PostList';
import Footer from '~/components/Footer';

export default {
  components:{
    Profile,
    PostList,
    Footer
  },
  metaInfo: {
    title: "Inicio"
  }
};
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<page-query>
query {
  allPost {
    totalCount
    edges {
      node {
        id
        title
        timeToRead
        date (format: "D MMMM YYYY")
        path
        img
        description
        tags {
          id
          title
          path
        }
      }
    }
  }
}
</page-query>