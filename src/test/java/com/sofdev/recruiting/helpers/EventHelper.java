package com.sofdev.recruiting.helpers;

import com.sofdev.recruiting.events.Event;

import java.util.List;

public class EventHelper {

    public static Event eventOne() {
        return Event.builder()
                .id(1L)
                .name("PSYOP Open House")
                .base("Fort Liberty")
                .location("8th PSYOP Group")
                .date("18 May 2024")
                .description("Meet members of the PSYOP Regiment")
                .branch("PSYOP")
                .build();
    }

    public static Event eventTwo() {
        return Event.builder()
                .id(2L)
                .name("Civil Affairs Open House")
                .base("Fort Drum")
                .location("ASDF Gym")
                .date("22 June 2024")
                .description("Meet members of the Civil Affairs Regiment")
                .branch("Civil Affairs")
                .build();
    }

    public static List<Event> eventList() {
        return List.of(eventOne(), eventTwo());
    }
}
