const WebinarCard = ({ webinar }) => {
  return (
    <a href="/webinardetail" className="block">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-xs mx-auto w-full transition-transform hover:scale-105">
        {/* Event image */}
        <div className="aspect-square rounded-t-lg">
          <img
            src={webinar.image}
            alt="Event poster"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Bottom info section */}
        <div className="p-3">
          <div className="flex justify-between mb-2">
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
              {webinar.date}
            </span>
            <span className="bg-yellow-50 text-yellow-800 px-2 py-1 rounded-full text-xs">
              {webinar.time}
            </span>
          </div>
          <h3 className="font-bold text-base mb-1">{webinar.title}</h3>
          <p className="text-gray-600 text-sm">{webinar.speaker}</p>
        </div>
      </div>
    </a>
  );
};

export default WebinarCard;
