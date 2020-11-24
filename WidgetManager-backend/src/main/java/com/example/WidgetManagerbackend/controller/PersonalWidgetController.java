package com.example.WidgetManagerbackend.controller;

import com.example.WidgetManagerbackend.exception.ResourceNotFoundException;
import com.example.WidgetManagerbackend.model.PersonalWidget;
import com.example.WidgetManagerbackend.model.User;
import com.example.WidgetManagerbackend.repository.PersonalWidgetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class PersonalWidgetController {

    @Autowired
    PersonalWidgetRepository personalWidgetRepository;

    @GetMapping("/personalWdgt")
    public List<PersonalWidget> getAllPersonalWidget() {
        return personalWidgetRepository.findAll();
    }

    @GetMapping("/personalWdgt/{id}")
    public ResponseEntity<PersonalWidget> getPersonalWidgetById(@PathVariable(value = "id") Long id)
            throws ResourceNotFoundException {
        PersonalWidget personalWidget = personalWidgetRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("PersonalWidget not found for this id :: " + id));
        return ResponseEntity.ok().body(personalWidget);
    }

    @PostMapping("/personalWdgt")
    public PersonalWidget createPersonalWidget(@Valid @RequestBody PersonalWidget personalWidget) {
        return personalWidgetRepository.saveAndFlush(personalWidget);
    }

    @PutMapping("/personalWdgt/{id}")
    public ResponseEntity<PersonalWidget> updatePersonalWidget(@PathVariable(value = "id") Long id,
                                           @Valid @RequestBody PersonalWidget personalWidgetDetails) throws ResourceNotFoundException {
        PersonalWidget personalWidget = personalWidgetRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("PersonalWidget not found for this id :: " + id));

        personalWidget.setId(personalWidgetDetails.getId());
        personalWidget.setName(personalWidgetDetails.getName());
        final PersonalWidget updatedPersonalWidget = personalWidgetRepository.saveAndFlush(personalWidget);
        return ResponseEntity.ok(updatedPersonalWidget);
    }

    @DeleteMapping("/personalWdgt/{id}")
    public Map<String, Boolean> deletePersonalWdgt(@PathVariable(value = "id") Long id)
            throws ResourceNotFoundException {
        PersonalWidget personalWidget = personalWidgetRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("personalWidget not found for this id :: " + id));

        personalWidgetRepository.delete(personalWidget);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
}
