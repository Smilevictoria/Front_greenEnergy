import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function BuyPower() {
  const [data, setData] = useState({ title: "", content: "" });

  useEffect(() => {
    fetch("http://localhost:5000/api/buy-power")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="sectionPage">
      <div className="subButton flex justify-center items-center">
        <Link to="/green-energy-consultant">
          <button className="subButton1">
            <p>
              <span>綠電顧問</span>
              <span>   </span>
              <span className="text-white">需求分析</span>
            </p>
          </button>
        </Link>
        <button className="subButton2">
          <p >
            <span>{data.title}</span>
          </p>
        </button>
      </div>
      <h1 className="text-2xl font-bold border-b-2 title pb-2 w-275">電廠資訊</h1>
      <div className="boxInfo flex justify-center items-center">
        <div className="boxInfoStyle">
          <p className="boxInfoName">花日</p>
          <p className="boxInfoType">太陽能</p>
          <img src="/boxInfo.jpg" alt="boxInfo" className="object-cover boxImage" />
          <p>{data.content}</p>
        </div>
        <div className="boxInfoStyle">
          <p className="boxInfoName">葉日</p>
          <p className="boxInfoType">太陽能</p>
          <img src="/boxInfo.jpg" alt="boxInfo" className="object-cover boxImage" />
          <p>{data.content}</p>
        </div>
        <div className="boxInfoStyle">
          <p className="boxInfoName">果日</p>
          <p className="boxInfoType">太陽能</p>
          <img src="/boxInfo.jpg" alt="boxInfo" className="object-cover boxImage" />
          <p>{data.content}</p>
        </div>
      </div>
      <div className="boxInfo flex justify-center items-center">
        <div className="boxInfoStyle">
          <p className="boxInfoName">早日</p>
          <p className="boxInfoType">太陽能</p>
          <img src="/boxInfo.jpg" alt="boxInfo" className="object-cover boxImage" />
          <p>{data.content}</p>
        </div>
        <div className="boxInfoStyle">
          <p className="boxInfoName">中日</p>
          <p className="boxInfoType">太陽能</p>
          <img src="/boxInfo.jpg" alt="boxInfo" className="object-cover boxImage" />
          <p>{data.content}</p>
        </div>
        <div className="boxInfoStyle">
          <p className="boxInfoName">晚日</p>
          <p className="boxInfoType">太陽能</p>
          <img src="/boxInfo.jpg" alt="boxInfo" className="object-cover boxImage" />
          <p>{data.content}</p>
        </div>
      </div>
    </div>
  );
}
