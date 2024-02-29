package com.sofdev.recruiting.helpers;

import com.sofdev.recruiting.branches.Branch;

import java.util.List;

public class BranchHelper {

    public static Branch branchOne() {
        return Branch.builder()
                .id(1L)
                .branch("Special Forces")
                .description("Special Forces are 18 series")
                .build();
    }

    public static Branch branchTwo() {
        return Branch.builder()
                .id(2L)
                .branch("Psychological Operations")
                .description("Psychological Operations are 37 series")
                .build();
    }

    public static List<Branch> branchList() {
        return List.of(branchOne(), branchTwo());
    }
}
