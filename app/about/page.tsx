import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "О проекте",
};

export default function AboutPage() {
  return (
    <div>
      <h1>PAGE about project</h1>
      <Link href="/">to main</Link>
    </div>
  );
}
