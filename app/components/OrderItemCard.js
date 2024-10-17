import Image from "next/image";
import { getProductImages } from "../lib/data-service";
import Color from "./Color";

async function OrderItemCard({ item }) {
  const [imagesObj] = await getProductImages(item.productId);
  const imagesSrc = imagesObj.images[0];

  return (
    <div className="max-sm-l:gap-1 flex gap-2">
      <div className="max-sm-l:w-24 relative aspect-square h-48 max-xl:h-40">
        <Image
          src={imagesSrc}
          alt="order item image"
          fill
          className="object-cover"
        />
      </div>

      <div className="grid h-48 w-full grid-cols-1 px-4 max-xl:h-40">
        <p className="max-sm-l:text-xs font-semibold max-sm:text-sm">
          {item.title}
        </p>
        <p className="max-sm-l:text-sm">Size : {item.size.toUpperCase()}</p>
        <div className="flex items-center gap-1">
          <span className="max-sm-l:text-sm">Color :</span>
          <Color color={item.color} type="mini" />
        </div>
        <div className="flex items-end justify-between pb-1">
          <span className="max-sm-l:text-sm font-semibold">
            ${item.price.toFixed(2)}
          </span>
          <div className="flex items-center gap-1">
            <span className="max-sm-l:text-sm">Quantity :</span>
            <span className="max-sm-l:text-sm rounded-sm bg-primary-2 px-1 font-medium">
              {item.quantity}x
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderItemCard;
