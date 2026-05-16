import FavoriteButton from "@/components/FavoriteButton";
import { Metadata } from "next";
import Link from "next/link";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;

  const res = await fetch(`${process.env.API_BASE_URL}/posts/${id}`, {
    cache: "no-store",
  });

  const movie = await res.json();

  return {
    title: movie.title,
    description: movie.body.slice(0, 120),
  };
}

export default async function MoviePage({ params }: Props) {
  const { id } = await params; // В Next.js 15 params это Promise

  const [moviesData, similarMovies] = await Promise.all([
    fetch(`${process.env.API_BASE_URL}/posts/${id}`),
    fetch(`${process.env.API_BASE_URL}/posts?_limit=4`),
  ]).then(([r1, r2]) => Promise.all([r1.json(), r2.json()]));

  return (
    <div>
      <div>
        <h1 className="text-lg font-semibold capitalize mb-2 line-clamp-1">
          {moviesData.title}
        </h1>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {moviesData.body}
        </p>
        <FavoriteButton />
        <h2 className="text-md font-semibold mb-2 line-clamp-1">
          Похожие фильмы:
        </h2>
        <ul>
          {similarMovies.map((movie: { id: number; title: string }) => (
            <li
              className="text-sm font-semibold capitalize mb-2 line-clamp-1"
              key={movie.id}
            >
              {movie.title}
            </li>
          ))}
        </ul>
        <br />
      </div>
      <Link href="/catalog"> to catalog</Link>
    </div>
  );
}
