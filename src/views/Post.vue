<template>
<v-container>
  <v-card class="my-4" v-if="post">
    <v-card-media v-if="post.imageUrl"
        class="white--text"
        height="300px"
        :src="post.imageUrl"
    />
    <v-card-title v-if="post.title">
        <h2>{{ post.title }}</h2>
    </v-card-title>
    <v-card-text v-if="post.content">
        <div v-html="post.content"></div>
    </v-card-text>
  </v-card>
</v-container>
</template>

<script>
export default {
  name: 'post-view',
  props: {
    postId: String,
  },
  computed: {
    post() {
      return this.$store.state.posts.find(p => p.id === this.postId)
    }
  },
    mounted() {
      this.$store.dispatch('getPosts')
    }
}
</script>
