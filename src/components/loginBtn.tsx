"use client";
const GlobalBtn = ({
  title,
  onPress,
  disabled,
  isLoading,
}: {
  title: string;
  onPress?: () => void;
  disabled?: boolean;
  isLoading: boolean;
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onPress}
      type="submit"
      className={`w-full ${
        disabled ? "bg-gray-300" : "bg-primary"
      } text-white py-2 rounded-lg `}
    >
      {!isLoading ? (
        title
      ) : (
        <div className="flex justify-center items-center h-8 ">
          <div className="animate-spin rounded-full h-2 w-2 border-t-2 border-primary border"></div>
        </div>
      )}
    </button>
  );
};
export default GlobalBtn;
