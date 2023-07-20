import { PromotionCard1, PromotionCard2, PromotionCard3 } from "@/components";
import { images } from "@/helpers/utils";

const Promotions = () => {
  return (
    <div className="">
      <div className="w-full text-center">
        <p className="text-blue text-sm font-semibold">PROMOTIONS</p>
        <h1 className="font-semibold text-5xl mt-4">Our Promotions Events</h1>
      </div>
      <div className="flex w-full px-4 md:px-24 gap-4 mt-8">
        <div className=" flex  flex-col w-3/5 gap-4">
          <PromotionCard1
            title={"GET UP TO 60%"}
            desc={"For the summer season"}
          />
          <PromotionCard2
            title={"GET 30% Off"}
            desc={"USE PROMO CODE"}
            btnTitle={"DINE WEEKEND SALE"}
          />
        </div>
        <PromotionCard3
          title={"Flex Sweatshirt"}
          oldPrice="$100.00"
          price={"$75.00"}
          image={images.man1}
        />
        <PromotionCard3
          title={"Flex Push Button Bomber"}
          oldPrice="$225.00"
          price={"$190.00"}
          image={images.man2}
        />
      </div>
    </div>
  );
};

export default Promotions;
