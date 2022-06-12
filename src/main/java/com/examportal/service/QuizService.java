package com.examportal.service;

import com.examportal.model.exam.Category;
import com.examportal.model.exam.Quiz;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Set;

public interface QuizService {

    public Quiz addQuiz(Quiz quiz);

    public Quiz updateQuiz(Quiz quiz);

    public Set<Quiz> getAllQuiz();

    public Quiz getQuizByID(Long quizID);

    public void deleteQuiz(Long quizID);

    public List<Quiz> getQuizesOfCategory(Category category);

    public List<Quiz>  getActiveQuizes();

    public List<Quiz> getActiveQuizesOfCategory(Category category);
}
