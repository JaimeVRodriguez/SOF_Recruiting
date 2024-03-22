package com.sofdev.recruiting.helpers;

import com.sofdev.recruiting.applicants.Application;

import java.util.List;

public class ApplicationHelper {

    public static Application applicationOne() {
        return Application.builder()
                .id(1L)
                .branch("POAS")
                .dodid("1386584431")
                .firstName("Jaime")
                .lastName("Rodriguez")
                .rank("SFC")
                .mos("37F")
                .build();
    }

    public static Application applicationTwo() {
        return Application.builder()
                .id(2L)
                .branch("SFAS")
                .dodid("1484283319")
                .firstName("Gunner")
                .lastName("Rodriguez")
                .rank("PFC")
                .mos("11B")
                .build();
    }

    public static List<Application> applicationList() {
        return List.of(applicationOne(), applicationTwo());
    }
}
