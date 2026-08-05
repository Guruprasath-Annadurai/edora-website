import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { getPostBySlug } from '../content/posts';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-black">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <Link
          to="/#blog"
          className="inline-flex items-center gap-1.5 text-sm text-white/60 transition-colors hover:text-white"
        >
          <ArrowLeft size={14} />
          Back to blog
        </Link>

        <div className="mt-8 flex items-center gap-2 text-xs text-white/50">
          <span>{post.date}</span>
          <span>·</span>
          <span>{post.readTime}</span>
        </div>

        <h1
          className="mt-4 font-medium tracking-tighter text-white"
          style={{ lineHeight: 1.05 }}
        >
          <span className="block text-3xl sm:text-4xl lg:text-5xl">
            {post.title}
          </span>
        </h1>

        <div className="mt-10 flex flex-col gap-6">
          {post.body.map((paragraph, i) => (
            <p key={i} className="text-base leading-relaxed text-white/80">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-16 border-t border-gray-800 pt-8">
          <Link
            to="/#blog"
            className="inline-flex items-center gap-1.5 text-sm text-white/60 transition-colors hover:text-white"
          >
            <ArrowLeft size={14} />
            Back to blog
          </Link>
        </div>
      </div>
    </div>
  );
}
