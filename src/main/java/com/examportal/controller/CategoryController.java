package com.examportal.controller;

import com.examportal.model.exam.Category;
import com.examportal.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
@RequestMapping("/category")
public class CategoryController {

    @Autowired
    private CategoryService categoryService;

//    add category
    @PostMapping("/")
    public ResponseEntity<Category> addCategory(@RequestBody Category category){
        Category category1 = this.categoryService.addCategory(category);
        return ResponseEntity.ok(category1);
    }

//    get single category by id
    @GetMapping("/{categoryID}")
    public Category getCategory(@PathVariable("categoryID") Long categoryID){
        return this.categoryService.getCategoryByID(categoryID);
    }

//    get all categories
    @GetMapping("/")
    public ResponseEntity<?> getCategories(){
        return ResponseEntity.ok(this.categoryService.getAllCategory());
    }

//    update category
    @PutMapping("/")
    public Category updateCategory(@RequestBody Category category){
        return this.categoryService.updateCategory(category);
    }

//    delete category
    @DeleteMapping("/{categoryID}")
    public void deleteCategory(@PathVariable("categoryID") Long categoryID){
        this.categoryService.deleteCategory(categoryID);
    }
}
