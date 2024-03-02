import {ApplicationType} from "../types/ApplicationType.ts";

export const applicationOne: ApplicationType = {
    id: 1,
    dodid: "1386584431",
    branch: "POAS",
    firstName: "Jaime",
    lastName: "Rodriguez",
    rank: "SSG"
}

export const applicationTwo: ApplicationType = {
    id: 2,
    dodid: "1484283319",
    branch: "SFAS",
    firstName: "Gunner",
    lastName: "Rodriguez",
    rank: "PFC"
}

export const applicationList: ApplicationType[] = [
    applicationOne,
    applicationTwo
]


export const selections = ["SFAS", "POAS", "CAAS"]

export const ranks = ["PVT", "PFC", "SPC", "CPL", "SGT", "SSG"]
