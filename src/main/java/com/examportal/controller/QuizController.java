package com.examportal.controller;

import com.examportal.model.exam.Category;
import com.examportal.model.exam.Quiz;
import com.examportal.service.QuizService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/quiz")
public class QuizController {

    @Autowired
    private QuizService quizService;

//    add quiz
    @PostMapping("/")
    public ResponseEntity<Quiz> addQuiz(@RequestBody Quiz quiz){
        return ResponseEntity.ok(this.quizService.addQuiz(quiz));
    }

//    update quiz
    @PutMapping("/")
    public ResponseEntity<Quiz> updateQuiz(@RequestBody Quiz quiz){
        return ResponseEntity.ok(this.quizService.updateQuiz(quiz));
    }

//    get all quiz
    @GetMapping("/")
    public ResponseEntity<?> getAllQuiz(){
        return ResponseEntity.ok(this.quizService.getAllQuiz());
    }

//    get single quiz by quizID
    @GetMapping("/{quizID}")
    public Quiz quiz(@PathVariable("quizID") Long quizID){
        return this.quizService.getQuizByID(quizID);
    }

//    delete quiz
    @DeleteMapping("/{quizID}")
    public void deleteQuiz(@PathVariable("quizID") Long quizID){
        this.quizService.deleteQuiz(quizID);
    }

//    get quizes by category
    @GetMapping("/category/{categoryID}")
    public List<Quiz> getQuizesOfCategory(@PathVariable ("categoryID") Long categoryID){
        Category category = new Category();
        category.setCategoryID(categoryID);
        return this.quizService.getQuizesOfCategory(category);
    }

//    get active quizes
    @GetMapping("/activequizes")
    public List<Quiz> getActiveQuizes(){
        return this.quizService.getActiveQuizes();
    }

//    get active quizes of category
    @GetMapping("/category/active/{categoryID}")
    public List<Quiz> getActiveQuizes(@PathVariable ("categoryID") Long categoryID){
        Category category = new Category();
        category.setCategoryID(categoryID);
        return this.quizService.getActiveQuizesOfCategory(category);
    }
}
