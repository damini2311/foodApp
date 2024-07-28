import { CDN_URL } from "../utils/contants";

const RestaurantCard = (props) => {
  const { data } = props;
  const { name, cuisines, avgRating, costForTwo } = data?.card.card.info;

  // console.log(data);

  return (
    <div className="ml-5 mb-4 p-2 w-[230px] rounded-xl shadow-xl h-[340px] bg-gray-100 hover:bg-gray-200">
      <div>
        <img
          className="h-36 w-[220px] p-2 rounded-2xl  mt-0"
          src={CDN_URL + data.card.card.info.cloudinaryImageId}
          alt=".."
        />
      </div>
      <div className="">
        <h3 className="font-bold py-2 text-lg ">{name}</h3>
        <h4> {cuisines.join(" , ")} </h4>
        <h4>{avgRating} Stars</h4>
        <h4>{costForTwo}</h4>
      </div>
    </div>
  );
};

export const promotedWithLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-blue-200 m-4 ml-9  text-sm p-1 font-bold">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
