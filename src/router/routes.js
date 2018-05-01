import Home from '@/views/Home'
import Post from '@/views/Post'

export default [{
  path: '/',
  name: 'home',
  component: Home,
}, {
  path: '/posts/:postId',
  name: 'post',
  component: Post,
  props: true,
}]
