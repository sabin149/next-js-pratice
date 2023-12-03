import getAllUsers from "@/lib/getAllUsers";
import Link from "next/link";
import React from "react";

export default async function Users() {
  const usersData: Promise<User[]> = getAllUsers();
  const users = await usersData;

  console.log("hello");

  return (
    <section className="mt-5">
      {users?.map((user) => (
        <p key={user?.id} className="mb-2">
          <Link href={`/users/${user.id}`}>{user.name}</Link>
        </p>
      ))}
    </section>
  );
}
