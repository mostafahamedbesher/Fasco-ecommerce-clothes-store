import Image from "next/image";

import ColorsList from "./ColorsList";
import Link from "next/link";
import { getProductColor } from "../lib/data-service";

async function Product({ product }) {
  const { images, title, price, id, discount } = product;

  const productColors = await getProductColor(id);
  // console.log(productColors);
  const colors = productColors
    .map((item) => item.color)
    .filter((value, index, newArr) => newArr.indexOf(value) === index);

  // console.log("colors", colors);

  return (
    <div className="reveal-image flex flex-col justify-between gap-3">
      <Link href={`/products/${id}`}>
        <div className="relative aspect-[4/5]">
          <Image
            fill
            quality={90}
            className="rounded-sm object-cover"
            src={images[0]}
            alt={title}
          />
        </div>
      </Link>
      <p className="font-semibold max-xl:text-sm">{title}</p>
      {discount ? (
        <div className="flex items-center gap-2">
          <p className="font-semibold">{(price - discount).toFixed(2)} $</p>
          <s className="text-sm text-secondary-gray-0">{price.toFixed(2)} $</s>
        </div>
      ) : (
        <p className="font-semibold">{price.toFixed(2)} $</p>
      )}
      <ColorsList colors={colors} />
    </div>
  );
}

export default Product;
