package lu.atozdigital.api.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import lu.atozdigital.api.entities.Orders;

public interface IOrder extends JpaRepository<Orders,Long> {
    
}
