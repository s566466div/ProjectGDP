package com.example.edu_learn.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.edu_learn.repository.CourseContentRepository;
import com.example.edu_learn.entity.CourseContent;

import java.util.List;
import java.util.Optional;

@Service
public class CourseContentService {
    @Autowired
    private CourseContentRepository courseContentRepository;

    public List<CourseContent> getCourseContents(Long courseId) {
        return courseContentRepository.findByCourseId(courseId);
    }

    public Optional<CourseContent> getContentById(Long contentId) {
        Optional<CourseContent> courseContent = courseContentRepository.findById(contentId);
        return courseContent;
    }
}