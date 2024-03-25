import {BranchType} from "../type/BranchType.ts";
import axios from "axios";

export const getAllBranches = async (): Promise<BranchType[]> => {
    const response = await axios.get("/api/branches")
    return response.data
}