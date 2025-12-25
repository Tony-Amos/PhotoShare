export default function ImageCard({ img }) {
  return (
    <div className="bg-white rounded shadow">
      <img src={img.imageUrl} className="w-full" />
      <div className="p-3">
        <h3 className="font-semibold">{img.title}</h3>
        <p className="text-gray-600">{img.caption}</p>
      </div>
    </div>
  );
}