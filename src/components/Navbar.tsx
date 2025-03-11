import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <header className="relative Navbar">
      <div className="headerCont">
        <div className="dummyFillHeight"></div>
        
        <div className="logo opacity-100">
          <Link to="/HomePage">
            <img src="./energy.png" alt="energy" />
          </Link>
        </div>

        <nav className="navPC">
          <div className="topicMenuGroup">
            <a href="https://www.gempower.energy/getp/" className="tit darkTheme">會員專區</a>
            <a href="https://www.gempower.energy/platform.htm" className="tit darkTheme">緣電交易平台</a>
          </div>
          
          <div className="clear"></div>
          
          <ul className="menuGroup">
            <li>
              <div className="tit titGap darkTheme">
                <a className="darkTheme">
                  <Link to="/sustainable-energy">
                    永續能源
                  </Link>
                </a>
              </div>
            </li>
            <li>
              <div className="tit titGap darkTheme sub">電力交易資源整合</div>
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
                <a className="darkTheme">
                  <Link to="/buy-power">
                    我要買電
                  </Link>
                </a>
              </div>
            </li>
            <li>
              <div className="tit titActive titGap titActiveDarkTheme darkTheme">
                <a className="darkTheme">
                  <Link to="/green-energy-consultant">
                    綠電顧問
                  </Link>
                </a>
              </div>
            </li>
            <li>
              <div className="tit titGap darkTheme">
                <a className="darkTheme">
                  <Link to="/sell-power">
                    我要賣電
                  </Link>
                </a>
              </div>
            </li>
            <li>
              <div className="tit titGap darkTheme">
                <a className="darkTheme">
                  <Link to="common-question-answer">
                    常見 Q&A
                  </Link>
                </a>
              </div>
            </li>
            <li>
              <div className="tit darkTheme">
                <a className="darkTheme">
                  <Link to="lastest-news">
                    最新消息
                  </Link>
                </a>
              </div>
            </li>
          </ul>
          
          <div className="clear"></div>
        </nav>
      </div>
    </header>
  );
}
