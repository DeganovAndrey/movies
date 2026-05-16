import { NextResponse } from "next/server";

interface Movie {
  id: number;
  title: string;
  year: number;
  genre: string;
}

const movies: Movie[] = [
  { id: 1, title: "Начало", year: 2010, genre: "thriller" },
  { id: 2, title: "Интерстеллар", year: 2014, genre: "sci-fi" },
  { id: 3, title: "Довод", year: 2020, genre: "thriller" },
];

export function GET(request: Request): NextResponse {
  const { searchParams } = new URL(request.url);

  const genre = searchParams.get("genre");

  const result = genre ? movies.filter((el) => el.genre === genre) : movies;

  return NextResponse.json({ data: result, total: result.length });
}

export async function POST(request: Request): Promise<NextResponse> {
  const body = (await request.json()) as Partial<Movie>;

  if (!body.title || !body.year) {
    return NextResponse.json(
      { error: "Поля title и year обязательны" },
      { status: 400 },
    );
  }

  const newMovie = {
    id: movies.length + 1,
    title: body.title,
    year: body.year,
    genre: body.genre ?? "other",
  };

  movies.push(newMovie);

  return NextResponse.json({ data: newMovie }, { status: 201 });
}
