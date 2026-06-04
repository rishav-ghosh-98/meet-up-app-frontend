import { NavLink } from "react-router-dom";
const EventCard = ({ event }) => {
    return (
        <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden">
      <NavLink to={`/events/${event._id}`} className="text-decoration-none text-dark">
       <div className="position-relative">
              <button
                type="button"
                className="btn btn-light"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  zIndex: 1,
                  borderRadius: "50%",
                }}
              >
              </button>
            </div>
      <img
      src={event.image}                
        className="card-img-top rounded-0"
        alt={event.title}
        style={{ height: "220px", objectFit: "cover" }}
      />
      <div className="card-body d-flex flex-column">
        <h6 className="card-title">{event.title}</h6>
        <p className="text-muted mb-2">₹ {event.price}</p>
      </div>
      </NavLink>
    </div>
    )
}
export default EventCard;
