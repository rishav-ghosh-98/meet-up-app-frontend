import api from "./config";
import { ENDPOINTS } from "./endpoints";
//Events
export const getEvents = ()=> api.get(ENDPOINTS.events);