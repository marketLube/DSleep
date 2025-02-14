import { useState } from "react";
import Tick from "./Page/Section2/Tick";
import Imagebed from "./Page/Section1/Imagebed";
import Products from "./Page/Section3/Products";
import Productsdetails from "./Page/Section4/Productsdetails";
import Why from "./Page/Section6/Why";
import Blue from "./Page/Section7/Blue";
import Booknow from "./Page/Section5/Booknow";
import Mattress from "./Page/Section8/Mattress";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Imagebed />
      <Tick />
      <Products />
      <Productsdetails />
      <Booknow />
      <Why />
      <Blue />
      <Mattress />
    </>
  );
}

export default App;
