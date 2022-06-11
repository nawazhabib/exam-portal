package com.examportal.service.serviceImplement;

import com.examportal.model.exam.Category;
import com.examportal.repository.CategoryRepository;
import com.examportal.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.LinkedHashSet;
import java.util.Set;

@Service
public class CategoryServiceImpl implements CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;

    @Override
    public Category addCategory(Category category) {
        return this.categoryRepository.save(category);
    }

    @Override
    public Category updateCategory(Category category) {
        return this.categoryRepository.save(category);
    }

    @Override
    public Set<Category> getAllCategory() {
        return new LinkedHashSet<>(this.categoryRepository.findAll());
    }

    @Override
    public Category getCategoryByID(Long categoryID) {
        return this.categoryRepository.findById(categoryID).get();
    }

    @Override
    public void deleteCategory(Long categoryID) {
        Category category = new Category();
        category.setCategoryID(categoryID);
        this.categoryRepository.delete(category);
    }
}
