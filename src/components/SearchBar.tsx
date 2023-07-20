import { RiSearchLine } from "react-icons/ri";

const SearchBar = ({ style }: { style?: string }) => {
  return (
    <div className={style}>
      <div className="flex absolute py-1 px-1.5 items-center">
        <RiSearchLine className="text-xl" />
      </div>
      <input
        type="text"
        className="flex h-full w-full pl-7"
        placeholder="Search Products"
      />
    </div>
  );
};

export default SearchBar;
