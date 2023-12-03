type Props = {
  promise: Promise<Post[]>;
};

export default async function UserPosts({ promise }: Props) {
  const posts = await promise;
  return (
    <section>
      {posts?.map((post) => (
        <article key={post?.id} className="mb-3">
          <h2 className="my-1.5 border-b-2 font-semibold text-xl capitalize">
            {post.title}
          </h2>
          <p>{post.body}</p>
        </article>
      ))}
    </section>
  );
}
