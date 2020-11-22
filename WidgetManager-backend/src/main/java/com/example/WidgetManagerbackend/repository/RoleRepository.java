package com.example.WidgetManagerbackend.repository;

import com.example.WidgetManagerbackend.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByRoleName(Role.RoleName name);
}
