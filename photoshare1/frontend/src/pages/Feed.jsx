import { useEffect, useState } from "react";
import ImageCard from "../components/ImageCard.jsx";

export default function Feed() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL + "/images")
      .then(res => res.json())
      .then(setImages);
  }, []);

  return (
    <div className="grid grid-cols-3 gap-6 p-6">
      {images.map(img => (
        <ImageCard key={img._id} img={img} />
      ))}
    </div>
  );
}