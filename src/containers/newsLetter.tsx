const Newsletter = () => {
  return (
    <div className="flex flex-col items-center mx-auto m-24 w-full text-black">
      <h2 className="text-2xl sm:text-4xl lg:text-9xl opacity-5 font-bold mb-4 absolute">
        Newsletter
      </h2>
      <h2 className="text-2xl lg:text-4xl font-bold mb-4">
        Subscribe Our Newsletter
      </h2>
      <p className="text-md lg:text-xl mb-4">
        Get the latest information and promo offers directly
      </p>
      <div className="flex items-center border border-primary rounded-lg  overflow-hidden">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full lg:w-64 px-4 py-2   focus:outline-none"
        />
        <button
          type="submit"
          className="px-6 py-2 bg-primary hover:bg-blue-600 rounded-l-lg focus:outline-none text-white"
        >
          Subscribe
        </button>
      </div>
    </div>
  );
};
export default Newsletter;
