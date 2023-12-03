import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Users",
};

export default function UsersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main>{children}</main>
    </>
  );
}
