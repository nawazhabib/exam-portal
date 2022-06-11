package com.examportal.service;

import com.examportal.model.exam.Quiz;

import java.util.Set;

public interface QuizService {

    public Quiz addQuiz(Quiz quiz);

    public Quiz updateQuiz(Quiz quiz);

    public Set<Quiz> getAllQuiz();

    public Quiz getQuizByID(Long quizID);

    public void deleteQuiz(Long quizID);
}
