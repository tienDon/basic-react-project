function Card({ title, onClick }) {
  return (
    <div
      className="bg-red-300 text-black p-4 mb-4 rounded-lg cursor-pointer hover:bg-red-400 transition duration-200"
      onClick={onClick}
    >
      {title}
    </div>
  );
}

export default Card;
