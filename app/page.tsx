import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Каталог фильмов</h1>
      <div className="color-red flex flex-col">
        <Link href="/catalog">каталог</Link>
        <Link href="/about">о нас</Link>
      </div>
    </div>
  );
}
