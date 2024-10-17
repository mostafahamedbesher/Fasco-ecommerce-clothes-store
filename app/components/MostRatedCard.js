import Image from "next/image";
import RatingStars from "./RatingStars";
import Link from "next/link";

function MostRatedCard({ product }) {
  return (
    <li className="flex flex-col justify-between gap-4 overflow-hidden rounded-lg bg-primary p-6 shadow-lg">
      <Link href={`/products/${product.id}`}>
        <div className="relative aspect-square">
          <Image
            fill
            className="rounded-lg object-fill"
            src={product.images[0]}
            alt={product.title}
          />
        </div>
      </Link>

      <div>
        <div className="flex items-center justify-between gap-4">
          <span className="font-medium">
            {product.title.split(" ").slice(0, 4).join(" ")}
          </span>
          <RatingStars ratingVal={product.ratingVal} color="#FCA120" />
        </div>
        <div className="mt-1 text-sm text-secondary-gray-0">
          {product.material}
        </div>
      </div>

      <div className="text-sm">{`(${product.ratingNo}) Customer Reviews`}</div>

      {product.discount !== 0 ? (
        <div className="flex items-center gap-2">
          <span className="font-semibold">
            ${(product.price - product.discount).toFixed(2)}
          </span>
          <s className="text-sm text-secondary-gray-0">
            ${product.price.toFixed(2)}
          </s>
        </div>
      ) : (
        <span className="font-semibold">${product.price.toFixed(2)}</span>
      )}
    </li>
  );
}

export default MostRatedCard;
