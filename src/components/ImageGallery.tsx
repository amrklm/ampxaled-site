export default function ImageShowcase() {
  const images = [

    {
      src: "https://nozammxkdbmqmxcpjmte.supabase.co/storage/v1/object/public/ampxaled//sample.jpg",
      alt: "Interior View",
    },
    {
      src: "https://nozammxkdbmqmxcpjmte.supabase.co/storage/v1/object/public/ampxaled//sample.jpg",
      alt: "Exterior Design",
    },
    {
      src: "https://nozammxkdbmqmxcpjmte.supabase.co/storage/v1/object/public/ampxaled//sample.jpg",
      alt: "3D Layout",
    },
    {
      src: "",
      alt: "Living Room",
    },
    {
      src: "",
      alt: "Kitchen View",
    },
    {
      src: "",
      alt: "Balcony View",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 pb-0 relative bg-white ">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
        <h2 className="section-title mb-3 sm:mb-4 opacity-0 fade-in-element animate-fade-in">Gallery</h2>
        <p className="section-subtitle mx-auto opacity-0 fade-in-element animate-fade-in text-base">
          Immersive visuals that blur the line between reality and creation..
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto mt-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden border border-orange-500 shadow-md transform transition-transform duration-300 hover:-translate-y-2 relative group"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 w-full bg-black text-white text-sm py-2 px-4 text-center transition-colors duration-300 group-hover:bg-black/80">
                {image.alt}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
