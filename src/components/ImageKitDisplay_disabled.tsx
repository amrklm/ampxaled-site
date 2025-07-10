// import { Image } from "@imagekit/react";

// export default function ImageKitDisplay() {
//   const imagePaths = [
//     "image-1.jpg",
//     "image-2.jpg",
//     "image-3.jpg",
//     "image-4.jpg",
//     "image-5.jpg",
//     "image-6.jpg",
    
//   ];

//   return (
//     <section className="py-12 sm:py-16 md:py-20 pb-0 relative bg-white">
//       <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
//         <h2 className="section-title mb-3 sm:mb-4 opacity-0 fade-in-element animate-fade-in">
//           Our Projects
//         </h2>
//         <p className="section-subtitle mx-auto opacity-0 fade-in-element animate-fade-in text-base">
//           Immersive visuals that blur the line between reality and creation..
//         </p>

//         <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto mt-10">
//           {imagePaths.map((path, index) => (
//             <div
//               key={index}
//               className="relative overflow-hidden rounded-lg shadow-lg group hover:scale-105 transition-transform duration-300 ripple-hover"
//             >
//               <Image
//                 urlEndpoint="https://ik.imagekit.io/ampxaled"
//                 src={path}
//                 width={500}
//                 height={350}
//                 alt={`Image ${index}`}
//                 className="w-full h-64 object-cover"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
