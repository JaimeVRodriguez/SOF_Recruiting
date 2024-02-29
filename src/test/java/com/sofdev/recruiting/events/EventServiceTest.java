package com.sofdev.recruiting.events;

import com.sofdev.recruiting.helpers.EventHelper;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class EventServiceTest {
    @Mock
    EventRepository eventRepository;

    @InjectMocks
    EventService eventService;

    @Test
    void shouldGetAllEvents() {
        List<Event> expectedEventList = EventHelper.eventList();

        when(eventRepository.findAll()).thenReturn(expectedEventList);

        List<Event> actualEventList = eventService.getAllEvents();

        assertThat(actualEventList).isEqualTo(expectedEventList);
    }

}