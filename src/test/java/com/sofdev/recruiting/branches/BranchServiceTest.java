package com.sofdev.recruiting.branches;

import com.sofdev.recruiting.events.Event;
import com.sofdev.recruiting.events.EventRepository;
import com.sofdev.recruiting.events.EventService;
import com.sofdev.recruiting.helpers.BranchHelper;
import com.sofdev.recruiting.helpers.EventHelper;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;
import static org.assertj.core.api.Assertions.assertThat;

@ExtendWith(MockitoExtension.class)
class BranchServiceTest {

    @Mock
    BranchRepository branchRepository;

    @InjectMocks
    BranchService branchService;

    @Test
    void shouldGetAllBranches() {
        List<Branch> expectedBranchList = BranchHelper.branchList();
        when(branchRepository.findAll()).thenReturn(expectedBranchList);
        List<Branch> actualBranchList = branchService.getAllBranches();
        assertThat(actualBranchList).isEqualTo(expectedBranchList);
    }

}