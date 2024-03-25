import {ApplicationType} from "../type/ApplicationType.ts";
import axios from "axios";

export const createApplication = async (data: ApplicationType): Promise<ApplicationType> => {
    const response = await axios.post<ApplicationType>("/api/applications", data);
    return response.data;
}

export const getAllApplications = async (): Promise<ApplicationType[]> => {
    const response = await axios.get("/api/applications")
    return response.data;
}



