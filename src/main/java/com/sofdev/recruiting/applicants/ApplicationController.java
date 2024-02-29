package com.sofdev.recruiting.applicants;

import org.apache.commons.io.FilenameUtils;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.UUID;



@RestController
@RequestMapping("/api/applications")
public class ApplicationController {
    private String saveFile(MultipartFile file) throws IOException {
        // Define the directory where the files will be saved
        String uploadDir = "uploads/";

        // Ensure directory exists or create it
        Path uploadPath = Paths.get(uploadDir);
        if (!Files.exists(uploadPath)) {
            Files.createDirectories(uploadPath);
        }

        // Generate a unique file name to prevent overwrites
        String extension = FilenameUtils.getExtension(file.getOriginalFilename());
        String fileName = UUID.randomUUID().toString() + "." + extension;

        // Save the file locally on the server
        Path filePath = uploadPath.resolve(fileName);
        Files.copy(file.getInputStream(), filePath);

        // Return the path or name of the saved file
        // You could return filePath.toString() if you want the entire path
        return fileName;
    }

    private final ApplicationService applicationService;

    public ApplicationController(ApplicationService applicationService) {
        this.applicationService = applicationService;
    }

    @PostMapping(consumes = {"multipart/form-data"})
    public ResponseEntity<Application> createApplication(
            @RequestPart("application") Application application,
            @RequestParam("uploadedFile") MultipartFile uploadedFile) throws IOException {
        String fileName = saveFile(uploadedFile);
        application.setUploadedFile(fileName);
        Application response = applicationService.createApplication(application);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<Application>> getAllApplications() {
        List<Application> response = applicationService.getAllApplications();
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}
