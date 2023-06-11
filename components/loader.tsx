import { FaSadTear, FaSpinner } from "react-icons/fa";

const Loader = ({ title }: { title?: string }) => {
  return (
    <div className="flex-1 flex justify-center items-center">
      <div className="h-16">
        {title ? (
          <div className="flex">
            <h1 className="text-2xl mr-2">{title}</h1>
            <FaSadTear size={32} />
          </div>
        ) : (
          <>
            <h1 className="text-2xl">Loading...</h1>
            <FaSpinner className="spinner text-2xl" />
          </>
        )}
      </div>
    </div>
  );
};

export default Loader;
