import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex justify-around p-4 bg-slate-100">
      <Link href="/">Главная</Link>
      <Link href="/catalog">Каталог</Link>
      <Link href="/about">О проекте</Link>
    </div>
  );
}
