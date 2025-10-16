import BlogPost from '@/components/BlogPost';

const posts = [
  {
    title: 'The Rise of Serverless Architectures',
    excerpt: 'Serverless computing is rapidly gaining popularity, offering a way to build and run applications and services without having to manage infrastructure. This post explores the benefits and challenges of serverless architectures.',
    slug: 'rise-of-serverless-architectures',
  },
  {
    title: 'A Deep Dive into React Hooks',
    excerpt: 'React Hooks have revolutionized the way we write React components. This post takes a deep dive into the most commonly used hooks, including useState, useEffect, and useContext.',
    slug: 'deep-dive-into-react-hooks',
  },
  {
    title: 'Mastering TypeScript for Large-Scale Applications',
    excerpt: 'TypeScript brings static typing to JavaScript, helping to catch errors early and improve code quality. This post provides tips and best practices for using TypeScript in large-scale applications.',
    slug: 'mastering-typescript-for-large-scale-applications',
  },
];

const Home = () => {
  return (
    <div>
      {
        posts.map((post) => (
          <BlogPost key={post.slug} {...post} />
        ))
      }
    </div>
  );
};

export default Home;
