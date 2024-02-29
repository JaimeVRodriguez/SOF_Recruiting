package com.sofdev.recruiting.events;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.sofdev.recruiting.helpers.EventHelper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import java.util.List;

import static org.hamcrest.Matchers.hasSize;
import static org.hamcrest.Matchers.is;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
class EventControllerTest {

    @Autowired
    MockMvc mvc;

    @MockBean
    EventService eventService;

    private final ObjectMapper objectMapper = new ObjectMapper();

    @Test
    void shouldGetAllEvents() throws Exception {
        List<Event> events = EventHelper.eventList();

        when(eventService.getAllEvents()).thenReturn(events);

        mvc.perform(MockMvcRequestBuilders.get("/api/events"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(2)));
    }
}