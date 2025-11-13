import { useState, useEffect } from "react";
import GalleryGrid from "../components/GalleryGrid";
import UploadButton from "../components/UploadButton";
import { db } from "../firebaseConfig";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";


export default function SharedGallery() {
  const STORAGE_KEY = "shared_gallery_images_v1";
  const [images, setImages] = useState(() => {
    try {
      const raw = localStorage.getItem("");
      const parsed = raw ? JSON.parse(raw) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  });

  // 🔹 Listen to Firestore in real-time
  useEffect(() => {
    const q = query(collection(db, "galleryImages"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetchedImages = snapshot.docs.map((doc) => ({
        url: doc.data().url,
        alt: doc.data().name || "Uploaded image",
      }));

      setImages(fetchedImages);

      // also update localStorage
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(fetchedImages));
      } catch {
        console.warn("Could not save to localStorage");
      }
    });

    return () => unsubscribe(); // clean up listener
  }, []);

  // 🔹 Add uploaded image immediately (for instant UI feedback)
  const handleUpload = (newImg) => {
    setImages((prev) => [newImg, ...prev]);
  };

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
  );
}
