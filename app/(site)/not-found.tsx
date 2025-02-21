import Link from "next/link";

export default function NotFound() {
  return (
    <section className="h-screen grid place-items-center px-4">
      <header className="text-center">
        <h3 className="text-9xl font-black text-gray-900">404</h3>
        <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Uh-oh!
        </p>
        <p className="mt-4 text-gray-500">We can&apos;t find that resource.</p>
      </header>
      <Link
        href="/"
        className="mt-8 rounded-md bg-primary px-4 py-2 text-sm text-white transition-colors hover:bg-primary-dark"
      >
        Back to Home
      </Link>
    </section>
  );
}
