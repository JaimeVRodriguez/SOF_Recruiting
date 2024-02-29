package com.sofdev.recruiting.applicants;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.sofdev.recruiting.helpers.ApplicationHelper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import java.util.List;

import static org.hamcrest.Matchers.hasSize;
import static org.hamcrest.Matchers.is;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
class ApplicationControllerTest {

    @Autowired
    MockMvc mvc;

    @MockBean
    ApplicationService applicationService;

    private final ObjectMapper objectMapper = new ObjectMapper();

    @Test
    void shouldCreateApplication() throws Exception {
        Application application = ApplicationHelper.applicationOne();

        when(applicationService.createApplication(any())).thenReturn(application);

        String applicationJson = objectMapper.writeValueAsString(application);

        mvc.perform(MockMvcRequestBuilders.post("/api/applications")
                .contentType(MediaType.APPLICATION_JSON)
                .content(applicationJson))
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.firstName", is("Jaime")));
    }

    @Test
    void shouldGetAllApplications() throws Exception {
        List<Application> applications = ApplicationHelper.applicationList();

        when(applicationService.getAllApplications()).thenReturn(applications);

        mvc.perform(MockMvcRequestBuilders.get("/api/applications"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(2)))
                .andExpect(jsonPath("$[0].firstName", is("Jaime")))
                .andExpect(jsonPath("$[1].firstName", is("Gunner")));
    }

}