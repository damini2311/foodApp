import RestaurantCard, { promotedWithLabel } from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import UseOnlineStatus from "../utils/useOnlineStatus.js";

const Body = () => {
  const [resState, setResState] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filtered, setFiltered] = useState([]);

  const RestaurantPromotedCards = promotedWithLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch(
      "https://cors-handlers.vercel.app/api/?url=https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D17.406498%26lng%3D78.47724389999999%26collection%3D80480%26tags%3Dlayout_BAU_Contextual%252Cpasta%252Cads_pc_pasta%26sortBy%3D%26filters%3D%26type%3Drcv2%26offset%3D0%26page_type%3Dnull"
    );

    const json = await res.json();

    setResState(json.data.cards.slice(3, 15));
    setFiltered(json.data.cards.slice(3, 15));
  };

  const onlineStatus = UseOnlineStatus();
  // console.log(resState);
  if (onlineStatus === false) {
    return (
      <h1>Looks like you are Offline! Pleaze Check your internet connection</h1>
    );
  }

  return resState.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex items-center justify-between">
        <div className="search m-4 p-4 ">
          <input
            type="text"
            placeholder="search..."
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 ml-2 rounded-md hover:bg-blue-600 transition duration-300"
            onClick={() => {
              let searchResults = resState.filter((item) =>
                item?.card?.card?.info?.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              setFiltered(searchResults);
              // console.log(searchResults);
            }}
          >
            search
          </button>
        </div>

        <button
          className="px-4 py-2 mr-4 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300"
          onClick={() => {
            let filteredList = resState.filter(
              (res) => res?.card?.card?.info?.avgRating > 4
            );
            console.log(filteredList);
            setFiltered(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="flex flex-wrap">
        {filtered.map((item) => (
          <Link
            to={"/restaurants/" + item.card.card.info.id}
            key={item?.card?.card?.info?.id}
          >
            {item.card.card.info.promoted ? (
              <RestaurantPromotedCards data={item} />
            ) : (
              <RestaurantCard data={item} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
