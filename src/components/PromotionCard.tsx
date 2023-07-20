import { images } from "@/helpers/utils";
import { PromotionCard, PromotionCard2 } from "@/types";

const PromotionCard1 = ({ title, desc, btnTitle }: PromotionCard) => (
  <div className="flex items-center px-8 justify-between w-full h-64 bg-placeholder rounded-md overflow-hidden">
    <div>
      <p className="font-bold text-4xl">{title}</p>
      <p className="text-xl">{desc}</p>
    </div>
    <img
      src={images.girl1}
      alt={"celeb"}
      className="object-contain self-end w-1/2 h-4/5"
    />
  </div>
);
const PromotionCard2 = ({ title, desc, btnTitle }: PromotionCard) => (
  <div className="flex flex-col gap-2 items-center justify-center w-full h-64 bg-primary rounded-md overflow-hidden">
    <p className="font-bold text-4xl text-white">{title}</p>
    <p className="text-xl text-white">{desc}</p>
    {btnTitle ? (
      <button className="bg-gray-600 text-white rounded w-1/2 h-10">
        {btnTitle}
      </button>
    ) : null}
  </div>
);
const PromotionCard3 = ({ title, oldPrice, price, image }: PromotionCard2) => (
  <div className="flex flex-col justify-between  w-1/3 h-128 bg-lpurple text-white rounded-md">
    <div className="m-6">
      <p className="text-lg">{title}</p>
      <div className="flex space-x-4">
        <p className="font-semibold text-xl">{oldPrice}</p>
        <p className="font-semibold text-xl">{price}</p>
      </div>
    </div>
    <img
      src={image}
      alt={"celeb"}
      className="object-contain self-center w-3/5"
    />
  </div>
);
export { PromotionCard1, PromotionCard2, PromotionCard3 };
