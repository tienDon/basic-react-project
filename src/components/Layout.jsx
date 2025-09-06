function Layout({ title, component: Component, onBack }) {
  return (
    <div className="flex flex-col items-center  bg-gray-600 ">
      <div className="flex justify-between w-full max-w-4xl">
        <h2 className="text-2xl font-semibold mb-4 text-white">{title}</h2>
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-800 transition duration-200"
          onClick={onBack}
        >
          Back
        </button>
      </div>
      <div className="mt-6 w-full max-w-4xl">{Component && <Component />}</div>
    </div>
  );
}

export default Layout;
