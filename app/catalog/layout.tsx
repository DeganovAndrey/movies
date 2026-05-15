import Link from "next/link";

type Props = {
  children: React.ReactNode;
};

export default function CatalogLayout({ children }: Props) {
  return (
    <div className="flex flex-1 gap-8 p-6 ">
      <aside className="flex flex-col gap-2 w-48 shrink-0">
        <h3 className="font-bold mb-2">категории</h3>
        <Link href="/catalog" className="hover: underline">
          Все
        </Link>
        <Link href="/catalog" className="hover: underline">
          Боевик
        </Link>
        <Link href="/catalog" className="hover: underline">
          Комедия
        </Link>
        <Link href="/catalog" className="hover: underline">
          Драма
        </Link>
        <Link href="/catalog" className="hover: underline">
          Фантастика
        </Link>
      </aside>
      <main className="flex-1">{children}</main>
    </div>
  );
}
