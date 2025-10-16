import Link from 'next/link';

interface BlogPostProps {
  title: string;
  excerpt: string;
  slug: string;
}

const BlogPost = ({ title, excerpt, slug }: BlogPostProps) => {
  return (
    <div className="border-b border-gray-200 py-8">
      <Link href={`/post/${slug}`} className="text-3xl font-bold text-gray-800 hover:text-gray-600">
        {title}
      </Link>
      <p className="text-gray-600 mt-4">{excerpt}</p>
      <Link href={`/post/${slug}`} className="text-blue-500 hover:text-blue-700 mt-4 inline-block">
        Read More
      </Link>
    </div>
  );
};

export default BlogPost;
