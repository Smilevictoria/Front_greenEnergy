import { Link } from 'react-router-dom'; 
import BubbleButton from "../components/BubbleButton";

export default function HomePage() {
    return (
      <div className="homeBody">
        <div className="relative min-h-screen flex items-center justify-center">
          <Link to="/sustainable-energy">
            <button className="homeButton">
              <span>Welcome to Green Energy</span>
            </button>
          </Link>
          <Link to="/sustainable-energy">
            <BubbleButton className="fixed top-95 left-150" text='永續能源' size='14em' font='2xl'/>
          </Link>
          <BubbleButton className="fixed top-90 right-100" text='電力交易平台' size='8em' font='xl'/>
          <Link to="/buy-power">
            <BubbleButton className="fixed top-110 right-40" text='我要買電' size='12em' font='2xl'/>
          </Link>
          <Link to="/common-question-answer">
            <BubbleButton className="fixed top-145 left-95" text='常見 Q&A' size='8em' font='xl'/>
          </Link>
          <Link to="/green-energy-consultant">
            <BubbleButton className="fixed top-132 right-135" text='綠電顧問' size='12em' font='2xl'/>
          </Link>
          <BubbleButton className="fixed top-70 right-20" text='投票參與市場' size='8em' font='xl'/>
          <Link to="/buy-power">
            <BubbleButton className="fixed top-85 left-55" text='我要賣電' size='12em' font='2xl'/>
          </Link>
          <Link to="/lastest-news">
            <BubbleButton className="fixed top-132 left-15" text='最新消息' size='8em' font='xl'/>
          </Link>
        </div>
      </div>
    );
  }
  