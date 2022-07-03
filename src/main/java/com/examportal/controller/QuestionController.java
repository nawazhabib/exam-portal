package com.examportal.controller;

import com.examportal.model.exam.Question;
import com.examportal.model.exam.Quiz;
import com.examportal.service.QuestionService;
import com.examportal.service.QuizService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@CrossOrigin("*")
@RequestMapping("/question")
public class QuestionController {

    @Autowired
    private QuestionService questionService;

    @Autowired
    private QuizService quizService;

    //    add question
    @PostMapping("/")
    public ResponseEntity<Question> addQuestion(@RequestBody Question question) {
        return ResponseEntity.ok(this.questionService.addQuestion(question));
    }

    //    update question
    @PutMapping("/")
    public ResponseEntity<Question> updateQuestion(@RequestBody Question question) {
        return ResponseEntity.ok(this.questionService.updateQuestion(question));
    }

    //    get all question of any quiz by quizID
    @GetMapping("/quiz/{quizID}")
    public ResponseEntity<?> getQuestionOfQuiz(@PathVariable("quizID") Long quizID) {
        Quiz quiz = this.quizService.getQuizByID(quizID);

        Set<Question> questionSet = quiz.getQuestionSet();

        List<Question> list = new ArrayList<>(questionSet);

        list.forEach((q) -> {
            q.setAnswer("");
        });

        if (list.size() > Integer.parseInt(quiz.getNumberOfQuestions())) {
            list = list.subList(0, Integer.parseInt(quiz.getNumberOfQuestions() + 1));
        }
//        get random quiz
        Collections.shuffle(list);
        return ResponseEntity.ok(list);
    }

    //    get all question by quizID for admin perpose
    @GetMapping("/quiz/all/{quizID}")
    public ResponseEntity<?> getQuestionOfQuizAdmin(@PathVariable("quizID") Long quizID) {
        Quiz quiz = new Quiz();
        quiz.setQuizID(quizID);
        Set<Question> questionsOfQuiz = this.questionService.getQuestionsOfQuiz(quiz);
        return ResponseEntity.ok(questionsOfQuiz);
    }

    //    get single question
    @GetMapping("/{questionID}")
    public Question getQuestion(@PathVariable("questionID") Long questionID) {
        return this.questionService.getQuestionByID(questionID);
    }

    //    delete question by questionID
    @DeleteMapping("/{questionID}")
    public void deleteQuestion(@PathVariable("questionID") Long questionID) {
        this.questionService.deleteQuestion(questionID);
    }

    //    evaluate quiz
    @PostMapping("/eval-quiz")
    public ResponseEntity<?> evalQuiz(@RequestBody List<Question> questions) {
        double marksGot = 0;
        int correcctAns = 0;
        int attempted = 0;

        for (Question question : questions) {

            Question question1 = this.questionService.get(question.getQuestionID());

            if (question1.getAnswer().equals(question.getGivenAnswer())) {

                correcctAns++;

                double marksSingle = Double.parseDouble(questions.get(0).getQuiz().getMaxMark()) / questions.size();

                marksGot += marksSingle;

            }
            if (question.getGivenAnswer() != null) {
                attempted++;
            }
        }

        Map<String, Object> map = Map.of("marksGot", marksGot, "coorectAnswer", correcctAns, "attemptd", attempted);

        return ResponseEntity.ok(map);
    }
}
