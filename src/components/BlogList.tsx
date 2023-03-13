
import type {CollectionEntry} from 'astro:content';

type BlogArray = CollectionEntry<'dev'>;
interface BlogListProps {
  blogs: BlogArray[]
}

const BlogList = ({blogs}: BlogListProps) => {
  const classes = [
    'text-xl',
    'leading-relaxed',
  ].join(' ');

  return (
    <ul className={classes}>
      {blogs.map((blog) => (
        <li>
          <a href={`blog/${blog.slug}`}>
          {blog.data.title}
          </a>
        </li>
      ))}
    </ul>
  )
}
export default BlogList
