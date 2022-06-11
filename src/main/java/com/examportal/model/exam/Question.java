package com.examportal.model.exam;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@AllArgsConstructor
public class Question {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long questionID;
    @Column(length = 5000)
    private String content;

    private String option1;
    private String option2;
    private String option3;
    private String option4;

    private String answer;

    @ManyToOne
    private Quiz quiz;

    public Question() {
    }
}
