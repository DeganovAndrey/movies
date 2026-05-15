import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Catalog movies</h1>
      <div
        style={{
          color: "red",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Link href="/catalog">catalog</Link>
        <Link href="/about">about</Link>
      </div>
    </div>
  );
}
