const MyPlugin = () => {
  return (
    <div>
      <div className="w-[600px] p-8 bg-neutral-50 rounded-lg shadow">
        <h2 className="font-title text-lg mb-4">Billing Details</h2>
        <form className="space-y-6">
          <div>
            <label className="block text-gray-700">First name *</label>
            <input
              type="text"
              className="w-full border-b border-gray-300 focus:outline-none py-2"
            />
          </div>
          <div>
            <label className="block text-gray-700">Company Name</label>
            <input
              type="text"
              className="w-full border-b border-gray-300 focus:outline-none py-2"
            />
          </div>
          <div>
            <label className="block text-gray-700">Country *</label>
            <div className="relative">
              <select className="w-full border-b border-gray-300 focus:outline-none py-2 pr-8 appearance-none">
                <option value="" disabled selected>
                  Select your country
                </option>
              </select>
              <span className="absolute right-2 top-2 pointer-events-none material-symbols-outlined">
                arrow_drop_down
              </span>
            </div>
          </div>
          <div>
            <label className="block text-gray-700">Street Address *</label>
            <input
              type="text"
              className="w-full border-b border-gray-300 focus:outline-none py-2"
            />
          </div>
          <div>
            <label className="block text-gray-700">Postcode / ZIP *</label>
            <input
              type="text"
              className="w-full border-b border-gray-300 focus:outline-none py-2"
            />
          </div>
          <div>
            <label className="block text-gray-700">Town / City *</label>
            <input
              type="text"
              className="w-full border-b border-gray-300 focus:outline-none py-2"
            />
          </div>
          <div>
            <label className="block text-gray-700">Phone *</label>
            <input
              type="text"
              className="w-full border-b border-gray-300 focus:outline-none py-2"
            />
          </div>
          <div>
            <label className="block text-gray-700">Email *</label>
            <input
              type="email"
              className="w-full border-b border-gray-300 focus:outline-none py-2"
            />
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="createAccount"
              className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
            />
            <label htmlFor="createAccount" className="text-gray-700">
              Create an account?
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="shipToDifferentAddress"
              className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
            />
            <label htmlFor="shipToDifferentAddress" className="text-gray-700">
              Ship to a different address?
            </label>
          </div>
          <div>
            <label className="block text-gray-700">Order notes</label>
            <input
              type="text"
              className="w-full border-b border-gray-300 focus:outline-none py-2"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default MyPlugin;
