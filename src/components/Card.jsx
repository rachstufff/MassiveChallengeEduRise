const Card = ({ img, title, description, detail, jenjang, lokasi, deadline, onClick }) => {
  return (
    <div className="card">
      <img src={img} alt={title} />
      <div className="card-content">
        <h2>{title}</h2>
        <p>{description}</p>
        <button
          className="btn"
          onClick={() => onClick({ img, title, description, detail, jenjang, lokasi, deadline })}
        >
          Lihat Detail
        </button>
      </div>
    </div>
  );
};

export default Card;