import { ENDPOINTS } from "../api/endpoints";
import useFetch from "../hooks/useFetch";
const Home = () => {
    const { data: response, loading, error } = useFetch(ENDPOINTS.events);
    const events = response?.data?.categories || [];
    console.log(events)
    return (
        <>
        <h1>this is test</h1>
        </>
    )
}
export default Home