import { getAllPosts } from '../../lib/blog';
import BlogClient from '../../components/blog-client';

export default function BlogPage() {
  // Fetch posts server-side
  const posts = getAllPosts();

  return <BlogClient posts={posts} />;
}