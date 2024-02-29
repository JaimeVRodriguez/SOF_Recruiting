package com.sofdev.recruiting.applicants;

import com.sofdev.recruiting.helpers.ApplicationHelper;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;



import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class ApplicationServiceTest {
    @Mock
    ApplicationRepository applicationRepository;

    @InjectMocks
    ApplicationService applicationService;

    @Test
    void shouldCreateApplication() {
        Application expectedApplication = ApplicationHelper.applicationOne();

        when(applicationRepository.save(expectedApplication)).thenReturn(expectedApplication);

        Application actualApplication = applicationService.createApplication(expectedApplication);

        assertThat(actualApplication).isEqualTo(expectedApplication);
    }

    @Test
    void shouldGetAllApplications() {
        List<Application> expectedApplicationList = ApplicationHelper.applicationList();

        when(applicationRepository.findAll()).thenReturn(expectedApplicationList);

        List<Application> actualApplicationList = applicationService.getAllApplications();

        assertThat(actualApplicationList).isEqualTo(expectedApplicationList);
    }

}