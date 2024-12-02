// components/Card.js
export default function Card({ title, description }) {
    return (
      <div className="p-4 border rounded shadow-sm bg-white">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    );
  }
  