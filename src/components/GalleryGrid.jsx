export default function GalleryGrid({ images }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {images.length === 0 ? (
        <p className="text-gray-500 text-center col-span-full">
          No images yet. Upload one to start!
        </p>
      ) : (
        images.map((img, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-transform hover:scale-105"
          >
            <img
              src={img.url}
              alt={img.alt}
              className="w-full h-48 object-cover"
            />
          </div>
        ))
      )}
    </div>
  )
}
