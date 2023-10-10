import React from "react";

interface Props {
  amoat: number;
}

const FormattedPrice = ({ amoat }: Props) => {
  const formattedAmoat = new Number(amoat).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });
  return <span>{formattedAmoat}</span>;
};

export default FormattedPrice;
