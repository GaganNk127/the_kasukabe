import { useState, useEffect } from "react"
import GalleryGrid from "../components/GalleryGrid"
import UploadButton from "../components/UploadButton"
import initialImages from "../data/gallery"

export default function SharedGallery() {
  const STORAGE_KEY = "shared_gallery_images_v1"
  const [images, setImages] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      const parsed = raw ? JSON.parse(raw) : null
      return Array.isArray(parsed) ? parsed : initialImages
    } catch (_) {
      return initialImages
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(images))
    } catch (_) {}
  }, [images])

  const handleUpload = (img) => {
    setImages((prev) => [img, ...prev])
  }

  return (
    <section className="pt-8 space-y-6 max-w-5xl mx-auto px-4">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold">Shared Gallery</h2>
          <p className="text-gray-600">
            A mosaic of our favorite moments. Add yours!
          </p>
        </div>
        <UploadButton onUpload={handleUpload} />
      </div>

      <GalleryGrid images={images} />
    </section>
  )
}
