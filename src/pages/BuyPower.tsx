import { useEffect, useState } from "react";

export default function BuyPower() {
  const [data, setData] = useState({ title: "", content: "" });

  useEffect(() => {
    fetch("http://localhost:5000/api/buy-power")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="sectionPage">
      <h1 className="text-3xl font-bold">{data.title}</h1>
      <p className="mt-4">{data.content}</p>
    </div>
  );
}
