import { Suspense } from "react";
import getUser from "@/lib/getUser";
import getUserPosts from "@/lib/getUserPosts";
import UserPosts from "./components/UserPosts";
import { Metadata } from "next";
import getAllUsers from "@/lib/getAllUsers";
import { notFound } from "next/navigation";

type Params = {
  params: { userId: string };
};

export async function generateMetadata({
  params: { userId },
}: Params): Promise<Metadata> {
  const userData: Promise<User> = getUser({ userId });
  const user = await userData;
  if (!user?.name) {
    return {
      title: "User not found",
    };
  }
  return {
    title: user.name,
    description: `this is the page of ${user.name}`,
  };
}

export default async function User({ params: { userId } }: Params) {
  const userData: Promise<User> = getUser({ userId });
  const userPostsData: Promise<Post[]> = getUserPosts({ userId });

  const user = await userData;
  if (!user?.name) return notFound();

  return (
    <>
      <h2>{user.name}</h2>
      <br />
      <Suspense fallback="loading">
        <UserPosts promise={userPostsData} />
      </Suspense>
    </>
  );
}

export async function generateStaticParams() {
  const usersData: Promise<User[]> = getAllUsers();
  const users = await usersData;
  return users.map((user) => ({
    userId: user.id.toString(),
  }));
}
