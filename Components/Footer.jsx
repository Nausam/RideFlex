const Footer = () => {
  return (
    <footer id="footer" className="w-full mt-20">
      <div className="flex max-w-6xl mx-auto justify-between m-5 py-2 px-10 items-center">
        <div className="flex flex-col md:flex-row  shadow-lg shadow-slate-200 dark:shadow-none w-full p-5 items-center md:justify-between justify-center text-center gap-12">
          <div>
            <h3 className="font-medium dark:gray-300 tracking-wide">
              WORKIGN HOURS
            </h3>
            <ul className="text-xs text-gray-500 space-y-2 mt-3">
              <li className="cursor-pointer hover:text-green-500 tracking-wide">
                Mon - Fri: 9:00AM - 9:00PM
              </li>
              <li className="cursor-pointer hover:text-green-500 tracking-wide">
                Sat: 9:00AM - 19:00PM
              </li>
              <li className="cursor-pointer hover:text-green-500 tracking-wide">
                Sun: Closed
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium dark:gray-300 tracking-wide">COMPANY</h3>
            <ul className="text-xs text-gray-500 space-y-2 mt-3">
              <li className="cursor-pointer hover:text-green-500 tracking-wide">
                FAQ
              </li>

              <li className="cursor-pointer hover:text-green-500 tracking-wide">
                Privacy Policy
              </li>
              <li className="cursor-pointer hover:text-green-500 tracking-wide">
                Terms of Service
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium dark:gray-300 tracking-wide">
              NEWS LETTER
            </h3>
            <p className="text-xs mt-3 text-gray-500">
              Get the latest news and updates!
            </p>
            <button className="bg-green-500  border-green-500 border-2 mt-3 hover:border-green-500 text-white py-3 px-16 rounded-sm text-base font-medium tracking-wide shadow-lg shadow-green-300 hover:shadow:xl hover:shadow-green-400 dark:shadow-md dark:shadow-green-800 dark:hover:shadow-green-800 dark:hover:shadow-lg transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
