package com.example.WidgetManagerbackend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@NoArgsConstructor
@Entity
@Table(name = "roles")
public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    @Column(length = 20)
    private RoleName roleName;

    public Role(RoleName roleName) {
        this.roleName = roleName;
    }

    public enum RoleName{
        ROLE_USER, ROLE_ADMIN
    }
}
