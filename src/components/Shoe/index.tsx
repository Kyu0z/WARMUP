import { ShoeContext } from "@src/App";
import { useContext } from "react";

const Shoe = () => {
  const shoeData = useContext(ShoeContext);
  return (
    <div>
      <h2>Shoe Detail</h2>
      <p>Name: {shoeData?.shoeName}</p>
      <p>Amount: {shoeData?.shoeAmount}</p>
    </div>
  );
};

export default Shoe;
