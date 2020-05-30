<template>
  <Layout>
    <div class="tag-page-style">
      <g-link to="/" class="back-link-style">&larr; Go Back</g-link>
      <div class="py-4">
        <h1 class="text-center mb-2"># {{$page.tag.title}}</h1>      
        <div>
          <ul class="list-disc">
            <li v-for="edge in $page.tag.belongsTo.edges" :key="edge.node.id">
              <g-link :to="edge.node.path">
                <span class="text-sm text-gray-800">{{ edge.node.title }}</span> - 
                <span class="text-xs text-gray-600">{{edge.node.date}}, 
                {{edge.node.timeToRead}} min lectura</span>
              </g-link>
            </li>
          </ul>
        </div> 
      </div>

      <Footer />
    </div>
  </Layout>
</template>

<script>

import Footer from '~/components/Footer';

export default {
  components: {
    Footer
  }
}
</script>

<page-query>
query Tag($id: ID!) {
  tag(id: $id) {
    title
    belongsTo {
      edges {
        node {
          ... on Post {
            id
            title
            path
            date (format: "D MMMM YYYY", locale: "es")
            timeToRead
          }
        }
      }
    }
  },
  allTag {
    edges {
      node {
        id
        path
      }
    }
  }
}
</page-query>