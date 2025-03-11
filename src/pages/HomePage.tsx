import BubbleButton from "../components/BubbleButton";

export default function HomePage() {
    return (
      <div className="homeBody">
        <div className="relative min-h-screen flex items-center justify-center">
          <h1 className="text-3xl font-bold">
            Welcome to Home Page
          </h1>
          <BubbleButton />
        </div>
      </div>
    );
  }
  