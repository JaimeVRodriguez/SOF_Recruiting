import {ApplicationType} from "../types/ApplicationType.ts";
import axios from "axios";
import {EventType} from "../types/EventType.ts";
import {BranchType} from "../types/BranchType.ts";

export const createApplication = async (data: ApplicationType): Promise<ApplicationType> => {
    const response = await axios.post<ApplicationType>("/api/applications", data);
    return response.data;
}

export const getAllApplications = async (): Promise<ApplicationType[]> => {
    const response = await axios.get("/api/applications")
    return response.data;
}

export const getAllEvents = async (): Promise<EventType[]> => {
    const response = await axios.get("/api/events")
    return response.data;
}

export const getAllBranches = async (): Promise<BranchType[]> => {
    const response = await axios.get("/api/branches")
    return response.data
}



