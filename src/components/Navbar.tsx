import { Link } from 'react-router-dom'; // 如果使用 react-router
import './Navbar.css';

export default function Navbar() {
  return (
    <header className="relative">
      <div className="headerCont">
        <div className="dummyFillHeight"></div>
        
        <div className="logo opacity-1">
          <Link to="/index.html">
            <img src="./energy.png" alt="energy" />
          </Link>
        </div>

        <nav className="navPC opacity-1">
          <div className="topicMenuGroup">
            <a href="https://www.gempower.energy/getp/" className="tit darkTheme">會員專區</a>
            <a href="https://www.gempower.energy/platform.htm" className="tit darkTheme">緣電交易平台</a>
          </div>
          
          <div className="clear"></div>
          
          <ul className="menuGroup">
            <li>
              <div className="tit titGap darkTheme">
                <a href="https://www.gempower.energy/sustainableEnergy.htm1" className="darkTheme">永續能源</a>
              </div>
            </li>
            <li>
              <div className="tit titGap darkTheme">電力交易資源整合</div>
              <div className="subMenu">
                <div className="subTit">
                  <a href="https://www.gempower.energy/ancillaryExplain.html" className="darkTheme">電力交易平台是甚麼</a>
                </div>
                <div className="subTit">
                  <a href="https://www.gempower.energy/ancillaryParticipate.htm1" className="darkTheme">投票參與輔助服務市場</a>
                </div>
              </div>
            </li>
            <li>
              <div className="tit titGap darkTheme">
                <a href="https://www.gempower.energy/buyPower.html" className="darkTheme">我要買電</a>
              </div>
            </li>
            <li>
              <div className="tit titActive titGap titActiveDarkTheme darkTheme">
                <a href="https://www.gempower.energy/buyPower.html" className="darkTheme">綠電顧問</a>
              </div>
            </li>
            <li>
              <div className="tit titGap darkTheme">
                <a href="https://www.gempower.energy/questionAndAnswer.html" className="darkTheme">我要賣電</a>
              </div>
            </li>
            <li>
              <div className="tit titGap darkTheme">
                <a href="https://www.gempower.energy/questionAndAnswer.html" className="darkTheme">常見 Q&A</a>
              </div>
            </li>
            <li>
              <div className="tit darkTheme">
                <a href="https://www.gempower.energy/newslist.html" className="darkTheme">最新消息</a>
              </div>
            </li>
          </ul>
          
          <div className="clear"></div>
        </nav>
      </div>
    </header>
  );
}
