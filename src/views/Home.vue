<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 sm8 offset-sm2 md6 offset-md3 lg4 offset-lg4 xl2 offset-xl5>
        <div class="text-xs-center">
          <div class="headline">Marienbad Magazine</div>
        </div>
      </v-flex>
      <v-flex xs12>
        <masonry-grid :items="filteredPosts">
          <template slot-scope="post">
            <post-card
              v-bind="post"
              class="my-4"
              @toggleTagFilter="toggleTagFilter"
            />
          </template>
        </masonry-grid>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import { components } from 'mauromadeit-vue-commons'
  const { MasonryGrid } = components.layouts
  const { PostCard } = components

  export default {
    name: 'home-view',
    components: {
      MasonryGrid,
      PostCard,
    },
    data() {
      return {
        tagFilters: [],
      }
    },
    computed: {
      posts() {
        return this.$store.getters.getPublishedPosts
      },
      filteredPosts() {
        return (this.tagFilters.length === 0) ? this.posts
        : this.tagFilters.reduce((posts, tag) =>
        posts.filter(p => p.tags.indexOf(tag) > -1), this.posts)
      },
    },
    methods: {
      toggleTagFilter(tag) {
        const i = this.tagFilters.indexOf(tag)
        if (i < 0) this.tagFilters.push(tag)
        else this.tagFilters.splice(i, 1)
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
