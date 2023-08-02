import { images } from "@/helpers/utils";

const Footer = () => {
  const renderList = (item, index) => (
    <li key={index.toString()}>
      <a href="#" className="text-gray-400 hover:text-black">
        {item}
      </a>
    </li>
  );
  return (
    <footer className="py-8 text-black">
      <div className="w-auto mx-24">
        <div className="flex w-full mx-auto gap-4 flex-wrap lg:flex-nowrap justify-between">
          <div className="flex flex-col items-center w-half lg:w-1/4">
            <div>
              <img
                src={images.logo}
                alt="Logo"
                className="w-18 h-12 bg-secondary my-4"
              />
              <p className="text-sm">
                Small, artisan label that offers a thoughtfully curated
                collection of high quality everyday essentials made.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-black hover:text-gray-400">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="text-black hover:text-gray-400">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="text-black hover:text-gray-400">
                  <i className="fab fa-google"></i>
                </a>
                <a href="#" className="text-black hover:text-gray-400">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center w-half mt-4 lg:w-1/4">
            <div>
              <h3 className="font-bold text-black mb-4">About</h3>
              <ul className="space-y-2">
                {[
                  "About Us",
                  "Terms of Use",
                  "Privacy Policy",
                  "How it Works",
                  "Contact Us",
                ].map(renderList)}
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-center w-half mt-4 lg:w-1/4">
            <div>
              <h3 className="font-bold text-black mb-4">Support</h3>
              <ul className="space-y-2">
                {["Support Carrier", "24h Service", "Quick Chat"].map(
                  renderList
                )}
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-center w-half mt-4 lg:w-1/4">
            <div>
              <h3 className="font-bold text-black mb-4">Contact</h3>
              <ul className="space-y-2">
                {["Whatsapp", "Support 24h"].map(renderList)}
              </ul>
              <ul className="space-y-2"></ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
