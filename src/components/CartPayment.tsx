import { SiMediamarkt } from "react-icons/si";
import FormattedPrice from "./FormattedPrice";
import { useSelector } from "react-redux";
import { StateProps, StoreProduct } from "../../type";
import next from "next";
import { useEffect, useState } from "react";
import { it } from "node:test";

const CartPayment = () => {
  const { productData } = useSelector((state: StateProps) => state.next);
  const [totalAmout, setTotalAmout] = useState<number>(0);
  useEffect(() => {
    let amt = 0;
    productData.map((item: StoreProduct) => {
      amt += item.price * item.quantity;
      return;
    });
    setTotalAmout(amt);
  }, [productData]);
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        <span className="bg-green-600 rounded-full p-1 h-6 w-6 flex items-center justify-center mt-1">
          <SiMediamarkt />
        </span>
        <p className="text-sm">
          Your order qualifies for FREE Shoping by Choosing this option at
          checkout. See details...
        </p>
      </div>
      <p className="flex items-center justify-between px-2 font-semibold">
        Total:{" "}
        <span className="font-bold text-xl">
          <FormattedPrice amoat={totalAmout} />
        </span>
      </p>
      <div className="flex flex-col items-center">
        <button className="w-full h-10 text-sm font-semibold bg-amazon_blue bg-opacity-50 text-white rounded-lg cursor-not-allowed">
          Procees to Buy
        </button>
        <p className="text-xs mt-1 text-red-500 font-semibold animate-bounce">Pleace login to continue</p>
      </div>
    </div>
  );
};

export default CartPayment;
