import { useEffect, useState } from "react";

export default function SustainableEnergy() {
  const [data, setData] = useState({ title: "", content: "" });

  useEffect(() => {
    fetch("http://localhost:5000/api/sustainable-energy")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">{data.title}</h1>
      <p className="mt-4">{data.content}</p>
    </div>
  );
}
