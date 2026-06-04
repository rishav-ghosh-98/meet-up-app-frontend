import { useContext, useState } from "react";
import { ENDPOINTS } from "../api/endpoints";
import useFetch from "../hooks/useFetch";
import EventCard from "../components/EventCard";
import Loader from "../components/Loader";
import SearchContext from "../context/SearchContext";
const Home = () => {
    const { searchTerm } = useContext(SearchContext);
    const [filter, setFilter] = useState("all");
    const { data: response, loading, error } = useFetch(ENDPOINTS.events);
    const events = response?.events || [];

    const normalizedSearch = String(searchTerm || "").toLowerCase().trim();

    const filteredEvents = events.filter((event) => {
        const typeMatch = filter === "all" || String(event.type || "").toLowerCase() === filter;

        if (!normalizedSearch) {
            return typeMatch;
        }

        const title = String(event.title || "").toLowerCase();
        const tags = Array.isArray(event.tags)
            ? event.tags.map((tag) => String(tag).toLowerCase()).join(" ")
            : String(event.tags || "").toLowerCase();
        const searchMatch = title.includes(normalizedSearch) || tags.includes(normalizedSearch);

        return typeMatch && searchMatch;
    });

    if (loading) return <Loader />;
    if (error) return <p>Error: {error}</p>;
    return (
        <>
        <div className="container-fluid px-3 px-md-4 py-4">
            <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center justify-content-between gap-3 mb-4">
                <div>
                  <h1 className="mb-2 mb-md-0">Meet Up Events</h1>
                  <p className="text-muted mb-0">Showing {filteredEvents.length} of {events.length} events</p>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <label htmlFor="event-filter" className="mb-0 text-secondary">Filter:</label>
                  <select
                    id="event-filter"
                    className="form-select"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    style={{ minWidth: "180px" }}
                  >
                    <option value="all">All events</option>
                    <option value="online">Online</option>
                    <option value="offline">Offline</option>
                  </select>
                </div>
            </div>
            <div className="row gx-3 gy-4">
                {filteredEvents.length > 0 ? (
                    filteredEvents.map((event) => (
                        <div key={event._id || event.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
                            <EventCard event={event} />
                        </div>
                    ))
                ) : (
                    <div className="col-12">
                        <div className="alert alert-light border rounded-4 py-4 text-center">
                            No events match your search or selected filter.
                        </div>
                    </div>
                )}
            </div>
        </div>
        </>
    )
}
export default Home