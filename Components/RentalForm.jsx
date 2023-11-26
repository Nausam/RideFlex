const RentalForm = () => {
  return (
    <div className="max-w-6xl mx-auto my-10 p-6 bg-white dark:bg-transparent rounded-md shadow-2xl  dark:shadow-none shadow-gray-300">
      <h1 className="md:text-4xl text-3xl dark:text-gray-300 text-gray-800 font-semibold mb-4">
        Rent a Motorbike
      </h1>

      <form className="grid grid-cols-2 gap-4">
        <div className="mb-4">
          <label htmlFor="carType" className="block text-sm text-gray-500 mb-2">
            Select Your Motorbike Type
          </label>
          <select
            id="carType"
            name="carType"
            className="dark:border-none border p-4 rounded-md w-full text-gray-500 dark:bg-gray-800"
            required
          >
            <option value="standard">Select your bike</option>
            <option value="standard">Standard</option>
            <option value="cruiser">Cruiser</option>
            <option value="sport">Sport</option>
          </select>
        </div>

        <div className="mb-4">
          <label
            htmlFor="pickupLocation"
            className="block text-sm text-gray-500 mb-2"
          >
            Pick-up Location
          </label>
          <input
            type="text"
            id="pickupLocation"
            name="pickupLocation"
            className="border dark:border-none p-4 rounded-md w-full text-gray-500 dark:bg-gray-800"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="dropoffLocation"
            className="block text-sm text-gray-500 mb-2"
          >
            Drop-off Location
          </label>
          <input
            type="text"
            id="dropoffLocation"
            name="dropoffLocation"
            className="border dark:border-none p-4 rounded-md w-full text-gray-500 dark:bg-gray-800"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="pickupDate"
            className="block text-sm text-gray-500 mb-2"
          >
            Pick-up Date
          </label>
          <input
            type="date"
            id="pickupDate"
            name="pickupDate"
            className="border dark:border-none p-4 rounded-md w-full text-gray-500 dark:bg-gray-800"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="dropoffDate"
            className="block text-sm text-gray-500 mb-2"
          >
            Drop-off Date
          </label>
          <input
            type="date"
            id="dropoffDate"
            name="dropoffDate"
            className="border dark:border-none p-4 rounded-md w-full text-gray-500 dark:bg-gray-800"
            required
          />
        </div>

        <div className="col-span-2">
          <button
            type="submit"
            className="bg-green-500  border-green-500 border-2 hover:border-green-500 text-white   py-4 px-10 rounded-sm text-base font-medium tracking-wide shadow-lg shadow-green-300 hover:shadow:xl hover:shadow-green-400 dark:shadow-md dark:shadow-green-800 dark:hover:shadow-green-800 dark:hover:shadow-lg transition-all duration-300 w-full"
          >
            Reserve Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default RentalForm;
