import PropTypes from "prop-types";
import Button from "../eduevent/EdueventBtn";

const EdueventCard = ({
  type = "competition",
  image,
  title,
  date,
  isFree = true,
  level = "nasional",
  description = "",
  buttonText = "Selengkapnya",
  buttonVariant = "primary",
}) => {
  return (
    <div
      className={`
      bg-white rounded-${type === "webinar" ? "1" : "0"}
      shadow-${type === "webinar" ? "card-dark" : "card"} 
      ${
        type === "competition"
          ? "border-2 border-[#f2010126] rounded-[30px]"
          : ""
      }
      overflow-hidden
    `}
    >
      {/* Card Image */}
      <div className="p-4 flex justify-center">
        <img
          src={image}
          alt={title}
          className={`
            ${
              type === "competition"
                ? "h-[200px] w-auto"
                : "h-[199px] w-[261px]"
            }
            ${type === "webinar" ? "rounded-t-lg" : ""}
            object-contain
          `}
        />
      </div>

      {/* Card Content */}
      <div className="p-4">
        {/* Title */}
        <h3
          className={`
          font-poppins font-bold 
          ${
            type === "competition"
              ? "text-[24px] leading-[28px]"
              : "text-[10px] leading-[12px]"
          }
          text-black mb-4
        `}
        >
          {title}
        </h3>

        {/* Details */}
        <div className="space-y-2">
          {/* Date */}
          <div className="flex items-center">
            <img
              src={
                type === "competition"
                  ? "/img/eduevent/img_icon.svg"
                  : "/img/eduevent/img_calendar.svg"
              }
              alt="Calendar"
              className="w-[13px] h-[13px] mr-2"
            />
            <span
              className={`
              font-poppins 
              ${type === "competition" ? "text-[12px]" : "text-[10px]"} 
              text-black
            `}
            >
              {date}
            </span>
          </div>

          {/* Free Status - Only for Competition */}
          {type === "competition" && (
            <div className="flex items-center">
              <img
                src="/img/eduevent/img_usercheck.svg"
                alt="Free"
                className="w-[13px] h-[13px] mr-2"
              />
              <span className="font-poppins text-[12px] text-black">
                Gratis tanpa syarat bayar
              </span>
            </div>
          )}

          {/* Level - Only for Competition */}
          {type === "competition" && (
            <div className="flex items-center">
              <img
                src="/img/eduevent/img_circle.svg"
                alt="Level"
                className="w-[13px] h-[13px] mr-2"
              />
              <span className="font-poppins text-[12px] text-black">
                tingkat {level}
              </span>
            </div>
          )}

          {/* Description - Only for Webinar */}
          {type === "webinar" && description && (
            <p className="font-poppins text-[10px] leading-[12px] text-black mt-2">
              {description}
            </p>
          )}
        </div>

        {/* Button */}
        <div className="mt-6">
          <Button
            variant={buttonVariant}
            className={`
              ${type === "competition" ? "w-[186px]" : "w-[192px]"} 
              h-[40px] text-center
            `}
          >
            {buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
};

EdueventCard.propTypes = {
  type: PropTypes.oneOf(["competition", "webinar"]),
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  isFree: PropTypes.bool,
  level: PropTypes.string,
  description: PropTypes.string,
  buttonText: PropTypes.string,
  buttonVariant: PropTypes.oneOf(["primary", "secondary"]),
};

export default EdueventCard;
