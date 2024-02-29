package com.sofdev.recruiting.branches;

import com.sofdev.recruiting.helpers.BranchHelper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import java.util.List;

import static org.hamcrest.Matchers.hasSize;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
class BranchControllerTest {

    @Autowired
    MockMvc mvc;

    @MockBean
    BranchService branchService;

    @Test
    void shouldGetAllBranches() throws Exception{
        List<Branch> events = BranchHelper.branchList();

        when(branchService.getAllBranches()).thenReturn(events);

        mvc.perform(MockMvcRequestBuilders.get("/api/branches"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(2)));
    }
}