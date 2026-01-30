import Image from "next/image";

export function Banners() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <div className="relative w-full max-w-4xl h-64 md:h-80 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <Image
              src="/BANNER 3.png"
              alt="Al Haramain Travels Banner"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

