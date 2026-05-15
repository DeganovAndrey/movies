import Link from "next/link";

interface Props {
  params: Promise<{ id: string }>;
}
export default async function MoviePage({ params }: Props) {
  const { id } = await params; // В Next.js 15 params это Promise

  return (
    <div>
      <div>
        <h1>#{id} Фильм</h1>
        <br />
      </div>
      <Link href="/catalog"> to catalog</Link>
    </div>
  );
}
