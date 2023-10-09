import { ProductProps } from "../../type";
import Image from "next/image";

const Products = ({ productData }: any) => {
  return (
    <div className="w-full px-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap6]">
      {productData.map(
        ({
          _id,
          title,
          brand,
          category,
          description,
          image,
          oldPrice,
          price,
        }: ProductProps) => {
          return (
            <div id="_id">
              <Image width={300} height={300} src={image} alt="productImage" />
            </div>
          );
        }
      )}
    </div>
  );
};

export default Products;
