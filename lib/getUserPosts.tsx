export default async function getUserPosts({ userId }: { userId: string }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );
  if (!res.ok) return undefined;
  return await res.json();
}
