import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-3xl px-5 pt-40 pb-28 text-center">
      <p className="text-[12px] font-bold tracking-[0.4em] text-[#e4c590] uppercase">404</p>
      <h1 className="mt-4 font-display text-5xl text-white">This page is not on the menu.</h1>
      <Link href="/" className="mt-8 inline-block text-[12px] font-bold tracking-[0.2em] text-[#e4c590] uppercase">
        Back to the table
      </Link>
    </main>
  );
}
