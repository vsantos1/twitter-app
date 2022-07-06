import { useState } from "react";
import Globals from "./styles/Globals";
import Feed from "./components/Feed";
import Layout from "./pages";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Layout />

      <Globals />
    </>
  );
}

export default App;
