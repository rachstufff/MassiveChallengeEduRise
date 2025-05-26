const Card = ({
  img,
  title,
  description,
  detail,
  jenjang,
  lokasi,
  deadline,
  onClick,
}) => {
  return (
    <div className="bg-blue-100 rounded-lg shadow-md flex flex-col max-w-[300px] w-full mx-auto">
      <img
        src={img}
        alt={title}
        className="w-full h-32 object-cover rounded-t-lg"
      />
      <div className="p-4 flex flex-col flex-grow justify-between h-full">
        <h2 className="font-medium text-sm md:text-base mb-2 leading-tight min-h-[3.5rem]">
          {title}
        </h2>

        {description && (
          <p className="text-sm text-gray-600 flex-grow mb-4 min-h-[4.5rem]">
            {description}
          </p>
        )}

        <button
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 font-semibold mt-auto"
          onClick={() =>
            onClick({
              img,
              title,
              description,
              detail,
              jenjang,
              lokasi,
              deadline,
            })
          }
        >
          Lihat Detail
        </button>
      </div>
    </div>
  );
};

export default Card;
