import { useNavigate } from "react-router-dom";

export default function Header({ title, back }) {
  const navigate = useNavigate();

  return (
    <div className="relative flex items-center mb-8 h-14">
      {back && (
        <button
          onClick={() => navigate(-1)}
          className="absolute  px-4 py-1 bg-gray-200 rounded-full hover:bg-gray-300"
        >
          Back
        </button>
      )}
      <h2 className="mx-auto text-2xl font-semibold">{title}</h2>
    </div>
  );
}
