// src/data/gallery.js
import { db } from "../firebaseConfig";
import { collection, getDocs, query, orderBy } from "firebase/firestore";

export async function fetchGalleryImages() {
  const q = query(collection(db, "galleryImages"), orderBy("createdAt", "desc"));
  const snapshot = await getDocs(q);

  
  const images = snapshot.docs.map((doc) => ({
    url: doc.data().url,
    alt: doc.data().name || "Uploaded image",
  }));

  return images;
}
