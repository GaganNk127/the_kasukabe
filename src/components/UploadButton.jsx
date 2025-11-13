import { useRef, useState } from "react";
import axios from "axios";
import { db } from "../firebaseConfig"; // adjust path if needed
import { collection, addDoc, Timestamp } from "firebase/firestore";

export default function UploadButton({ onUpload }) {
  const inputRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handlePick = () => inputRef.current?.click();

  const handleChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setLoading(true);
    setMessage("Uploading to Cloudinary...");

    try {
      const CLOUD_NAME =
        import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || "dsxpc8363";
      const UPLOAD_PRESET =
        import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET || "kasukabe";
      const FOLDER = import.meta.env.VITE_CLOUDINARY_FOLDER || "upload_gallery";

      if (!CLOUD_NAME || !UPLOAD_PRESET) {
        throw new Error("Missing Cloudinary environment variables");
      }

      // Cloudinary upload
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", UPLOAD_PRESET);
      if (FOLDER) formData.append("folder", FOLDER);

      const res = await axios.post(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
        formData
      );

      const data = res.data;

      if (data.secure_url) {
        // Save to Firebase Firestore
        await addDoc(collection(db, "galleryImages"), {
          url: data.secure_url,
          name: file.name,
          createdAt: Timestamp.now()
        });

        setMessage("✅ Upload successful!");
        onUpload?.({ url: data.secure_url, alt: file.name });
      } else {
        throw new Error("Upload failed: No secure URL returned.");
      }
    } catch (err) {
      console.error(err);
      setMessage("❌ Upload failed. Check Cloudinary or Firebase config.");
    } finally {
      setLoading(false);
      e.target.value = "";
      setTimeout(() => setMessage(""), 2500);
    }
  };

  return (
    <div className="flex items-center gap-3">
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleChange}
      />
      <button
        onClick={handlePick}
        disabled={loading}
        className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-4 py-2 rounded-lg transition-all disabled:opacity-50 flex items-center gap-2"
      >
        {loading ? (
          <>
            <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            Uploading...
          </>
        ) : (
          <>Upload Photo</>
        )}
      </button>
      {message && <span className="text-sm text-gray-700">{message}</span>}
    </div>
  );
}
