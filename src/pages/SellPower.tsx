import { useEffect, useState } from "react";

export default function GreenEnergyConsultant() {
  const [data, setData] = useState({ title: "", content: "" });

  useEffect(() => {
    fetch("http://localhost:5000/api/sell-power")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="sectionPage">
      <h1 className="text-2xl font-bold border-b-2 title pb-2 w-275">{data.title}</h1>
      <p className="mt-4">{data.content}</p>
    </div>
  );
}
