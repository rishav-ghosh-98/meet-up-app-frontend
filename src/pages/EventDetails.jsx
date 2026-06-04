import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Loader from "../components/Loader";
import useFetch from "../hooks/useFetch";

const EventDetails = () => {
const { eventId } = useParams();

const {
data: event,
loading,
error,
} = useFetch(`/events/${eventId}`);

if (loading) return <Loader />;
if (error) return <p>{error}</p>;

return (
<> <Header />
  <div className="container py-4">
    <div className="row g-4">

      {/* LEFT SECTION */}
      <div className="col-lg-8">

        <h1 className="fw-bold">{event.title}</h1>

        <p className="text-muted mb-4">
          Hosted By:
          <br />
          <strong>{event.speaker}</strong>
        </p>

        <img
          src={event.image}
          alt={event.title}
          className="img-fluid rounded shadow-sm mb-4"
        />

        <h3 className="fw-bold">Details:</h3>

        <p className="fs-6">
          {event.description}
        </p>

        <h3 className="fw-bold mt-4">
          Additional Information:
        </h3>

        <p>
          <strong>Dress Code:</strong>{" "}
          {event.dressCode}
        </p>

        <p>
          <strong>Age Restrictions:</strong>{" "}
          {event.ageRestriction}
        </p>

        <h3 className="fw-bold mt-4">
          Event Tags:
        </h3>

        <div className="d-flex gap-2 flex-wrap">
          {event.tags?.map((tag) => (
            <span
              key={tag}
              className="badge bg-danger p-2"
            >
              {tag}
            </span>
          ))}
        </div>

      </div>

      {/* RIGHT SECTION */}
      <div className="col-lg-4">

        <div className="card border-0 shadow-sm p-4">

          <p className="mb-4">
            🕒 {event.sessionTimings}
          </p>

          {event.type === "Offline" ? (
            <p className="mb-4">
              📍 <strong>{event.venue}</strong>
              <br />
              {event.address}
            </p>
          ) : (
            <div className="mb-4">
              <p>
                💻 <strong>{event.platform}</strong>
              </p>

              {event.meetingLink && (
                <a
                  href={event.meetingLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-sm"
                >
                  Join Event
                </a>
              )}
            </div>
          )}

          <h4 className="fw-bold">
            {event.price === 0 ? "Free" : `₹ ${event.price}`}
          </h4>

        </div>

        <div className="mt-4">

          <h3 className="fw-bold">
            Speaker
          </h3>

          <div className="card border-0 shadow-sm p-3 mt-3">
            <h5>{event.speaker}</h5>

            <p className="text-muted mb-0">
              Guest Speaker
            </p>
          </div>

        </div>

      </div>

    </div>
  </div>
</>
);
};

export default EventDetails;
