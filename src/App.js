import React, { useState } from "react";

import TimeInput from "./components/TimeInput";
import Timer from "./components/Timer";

import Header from "./layout/Header";
import Footer from "./layout/Footer";

function App() {
  const [data, setData] = useState({ input: [], useSound: true });

  return (
    <div className="App">
      <Header />
      <TimeInput data={data} setData={setData} />
      <Timer data={data} setData={setData} />
      <Footer />
    </div>
  );
}

export default App;
