const FormContact = () => {
  return (
    <div className="max-w-md w-full mx-auto p-6 bg-gray-600 rounded-lg shadow-md">
      <h2 className="text-3xl text-center text-pink-600 font-bold mb-6">
        Send Us Your Message
      </h2>
      <form action="">
        <div className="mb-4">
          <label
            className="block text-white text-sm font-semibold mb-2"
            htmlFor=""
          >
            Your Name
          </label>
          <input
            placeholder="John Doe"
            className="w-full px-3 py-2 border rounded-lg bg-gray-800 focus:outline-none text-white focus:border-blue-500"
            required
            type="text"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-white text-sm font-semibold mb-2"
            htmlFor=""
          >
            Your Email
          </label>
          <input
            placeholder="John@example.co.za"
            className="w-full px-3 py-2 border rounded-lg bg-gray-800 focus:outline-none text-white focus:border-blue-500"
            required
            type="email"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-white text-sm font-semibold mb-2"
            htmlFor=""
          >
            Your Message
          </label>
          <textarea
            rows="4"
            placeholder="Type your message here..."
            className="w-full px-3 py-2 border rounded-lg bg-gray-800 focus:outline-none text-white focus:border-blue-500"
            required
            type="text"
          />
        </div>

        {/*Adding the button*/}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-pink-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-pink-600 focus:outline-white"
          >
            Send Message
          </button>
        </div>
        {/*End*/}
      </form>
    </div>
  );
};

export default FormContact;
