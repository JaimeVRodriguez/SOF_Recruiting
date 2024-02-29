import {EventType} from "../types/EventType.ts"

export const eventOne: EventType = {
    id: 1,
    name: "PSYOP Open House",
    base: "Fort Liberty",
    location: "8th PSYOP Group",
    date: "18 May 2024",
    description: "Meet members of the PSYOP Regiment",
    branch: "PSYOP"
}

export const eventTwo: EventType = {
    id: 2,
    name: "Civil Affairs Open House",
    base: "Fort Drum",
    location: "ASDF Gym",
    date: "22 June 2024",
    description: "Meet members of the Civil Affairs Regiment",
    branch: "Civil Affairs"
}

export const eventList: EventType[] = [
    eventOne, eventTwo
]