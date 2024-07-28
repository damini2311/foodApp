const Contact = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="font-bold text-3xl p-4 m-4">Contact</h1>
      <form className="flex flex-col w-96 gap-4 shadow-xl border h-64 border-gray-100 p-5 rounded-lg">
        <input
          type="text"
          className="border border-gray-300 mx-4 my-2 rounded-md  px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="name"
        />
        <input
          type="text"
          className="border border-gray-300 my-2 rounded-md mx-4 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="message"
        />
        <button className="border border-black mx-4 p-2 m-2 bg-gray-100 rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
