package com.example.WidgetManagerbackend.repository;

import com.example.WidgetManagerbackend.model.PersonalWidget;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PersonalWidgetRepository extends JpaRepository<PersonalWidget, Long> {
}
