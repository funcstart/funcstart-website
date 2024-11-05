export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-4 text-white">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-6 text-6xl font-bold md:text-8xl">
          Best way to build
          <span className="text-[#FF5733]"> great </span>
          website.
        </h1>
        <p className="max-w-2xl text-xl text-gray-400 md:text-2xl">
          We back the founders of new forms of network, digital organisations
          that harness the talents of individuals for the benefit of the
          collective.
        </p>
        <div className="mt-12">
          <button className="rounded-full bg-[#FF5733] px-8 py-4 text-lg font-medium text-white transition-all hover:bg-[#FF5733]/90">
            Let's contact
          </button>
        </div>
      </div>
    </section>
  );
}
