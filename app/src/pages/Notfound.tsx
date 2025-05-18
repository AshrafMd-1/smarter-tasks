import {useNavigate} from "react-router-dom";

const Notfound = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/account");
  };

  return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">404</h1>
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Page not found
        </h2>
        <button
            id="backToHomeButton"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => goHome()}
        >
          HomePage
        </button>
      </div>
  );
};

export default Notfound;
