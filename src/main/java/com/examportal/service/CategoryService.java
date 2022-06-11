package com.examportal.service;

import com.examportal.model.exam.Category;

import java.util.Set;

public interface CategoryService {

    public Category addCategory(Category category);

    public Category updateCategory(Category category);

    public Set<Category> getAllCategory();

    public Category getCategoryByID(Long categoryID);

    public void deleteCategory(Long categoryID);
}
