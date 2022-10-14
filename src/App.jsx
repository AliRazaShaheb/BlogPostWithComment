import { useState } from "react";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import Post from "./pages/Post";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container flex flex-col justify-between items-center mx-auto min-h-screen">
      <Navbar />
      <Post />
      <Footer />
    </div>
  );
}

export default App;
