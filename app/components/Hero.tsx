export default function Hero() {
  return (
    <section className="pt-40 relative bg-white text-white py-20">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/images/hero-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay to darken video for better text readability */}
      <div className="absolute top-0 left-0 w-full h-full z-0"></div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-2xl text-gray-900 md:text-5xl font-bold mb-6">
          Find the Perfect Bot for your Business
        </h1>
        <p className="text-gray-900 text-sm mb-8 max-w-2xl mx-auto">
          Discover, compare, and customize AI-powered bots designed to transform your business operations across all industries.
        </p>

        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Find your business bot..."
              className="w-full px-6 py-4 rounded-full text-gray-800 bg-b- focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="absolute right-2 top-2 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
              Search
            </button>
          </div>
        </div>
        <div className="flex flex-wrap gap-8 justify-center">
  <button className="bg-orange-400 text-black px-8 py-3 rounded-xl font-semibold hover:bg-orange-600 transition-colors">
    Tools Services  ➤
  </button>
  <button className="bg-black text-white px-8 py-3 rounded-xl font-semibold hover:bg-gray-300 hover:text-gray-600 transition-colors">
    ツ Explore More
  </button>
</div>
      </div>
    </section>
  );
}
