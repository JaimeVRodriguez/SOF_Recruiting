import {EventType} from "../type/EventType.ts";
import axios from "axios";

export const getAllEvents = async (): Promise<EventType[]> => {
    const response = await axios.get("/api/events")
    return response.data;
}