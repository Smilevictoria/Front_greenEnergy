import { useEffect, useState } from "react";

export default function SustainableEnergy() {
  const [data, setData] = useState({ title: "", content1: "", content2: "", renewable: "", green: "" });

  useEffect(() => {
    fetch("http://localhost:5000/api/sustainable-energy")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="sectionPage">
      <h1 className="text-2xl font-bold border-b-2 title pb-2 w-275">{data.title}</h1>
      <div className="flex ">
        <div className="iea">
          <img src="/IEA.jpg" alt="IEA" className="w-60 h-60 object-cover rounded-lg" />
        </div>
        <div className="ieaTitle font-bold">
          <p>你綠電買到100%了嗎？</p>
        </div>
        <div className="ieaText">
          <p>{data.content1}</p>
        </div>
      </div>

      <div className="flex">
        <div className="greenRoad">
          <img src="/greenRoad.png" alt="greenRoad" className="w-110 h-70 object-cover rounded-lg" />
        </div>
        <div className="greenRoadText">
          <p>{data.content2}</p>
        </div>
      </div>
      <div className="flex">
        <div className="renewable">
          <img src="/renewable.png" alt="renewable" className="w-90 h-70 object-cover rounded-lg" />
        </div>
        <div className="renewableTitle font-bold">
          <p>再生能源 (Renewable Energy)</p>
        </div>
        <div className="renewableText">
          <p>{data.renewable}</p>
        </div>
      </div>
      <div className="flex">
        <div className="greenEnergy">
          <img src="/greenEnergy.jpg" alt="greenEnergy" className="w-100 h-80 object-cover rounded-lg" />
        </div>
        <div className="greenEnergyTitle font-bold">
          <p>綠能 (Green Energy)</p>
        </div>
        <div className="greenEnergyText">
          <p>{data.green}</p>
        </div>
      </div>
    </div>
  );
}
