import Link from 'next/link';

const PostPage = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

  // In a real application, you would fetch the post data based on the slug
  const post = {
    title: 'Post Title',
    content: `This is the content for post ${slug}.`,
  };

  return (
    <div>
      <Link href="/" className="text-blue-500 hover:text-blue-700 mb-8 inline-block">
        &larr; Back to Home
      </Link>
      <h1 className="text-4xl font-bold text-gray-800">{post.title}</h1>
      <div className="prose mt-8">
        <p>{post.content}</p>
      </div>
    </div>
  );
};

export default PostPage;
