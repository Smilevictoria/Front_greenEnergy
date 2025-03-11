import { Link } from 'react-router-dom'; 
import BubbleButton from "../components/BubbleButton";

export default function HomePage() {
    return (
      <div className="homeBody">
        <div className="relative min-h-screen flex items-center justify-center">
          <Link to="/">
            <button className="homeButton">
              <span>Welcome to Green Genergy</span>
            </button>
          </Link>
          <Link to="/sustainable-energy">
            <BubbleButton className="fixed top-10 right-10" text='永續能源' size='16em'/>
          </Link>
          <BubbleButton className="fixed top-50 right-80" text='電力交易平台' size='10em'/>
          <BubbleButton className="fixed top-85 right-30" text='我要買電' size='12em'/>
          <BubbleButton className="fixed top-138 right-55" text='常見 Q&A' size='10em'/>
          <BubbleButton className="fixed top-10 left-10" text='綠電顧問' size='16em'/>
          <BubbleButton className="fixed top-50 left-80" text='投票參與市場' size='10em'/>
          <BubbleButton className="fixed top-85 left-30" text='我要賣電' size='12em'/>
          <BubbleButton className="fixed top-138 left-55" text='最新消息' size='10em'/>
        </div>
      </div>
    );
  }
  