import { SHIMMER_URL } from "../utils/contants";

const Shimmer = () => {
  return (
    <div className="shimmer-container flex flex-wrap gap-4 p-4 h-[600px] ">
      {[...Array(12)].map((_, index) => (
        <div
          key={index}
          className="shimmer-card w-[230px] p-2 bg-gray-100 hover:bg-gray-200 rounded-xl shadow-lg"
        >
          <img
            src={SHIMMER_URL}
            alt="Shimmer"
            className="h-36 w-full rounded-2xl"
          />
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
