import { ENDPOINTS } from "../api/endpoints";
import useFetch from "../hooks/useFetch";
import EventCard from "../components/EventCard";
import Loader from "../components/Loader";
const Home = () => {
    const { data: response, loading, error } = useFetch(ENDPOINTS.events);
    const events = response?.events || [];
    console.log(events)
    if (loading) return <Loader />;
    if (error) return <p>Error: {error}</p>;
    return (
        <>
        <div className="container-fluid px-3 px-md-4 py-4">
            <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between mb-4">
                <h1 className="mb-3 mb-md-0">Meet Up Events</h1>
            </div>
            <div className="row gx-3 gy-4">
                {events.map((event) => (
                    <div key={event._id || event.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <EventCard event={event} />
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}
export default Home