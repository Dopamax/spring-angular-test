package lu.atozdigital.api.controllers;

import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PathVariable;
import lu.atozdigital.api.entities.Orders;
import lu.atozdigital.api.entities.Article;
import lu.atozdigital.api.services.ServiceOrder;
import org.springframework.web.bind.annotation.CrossOrigin;

@RestController
@CrossOrigin(origins = "*")
public class ControllerOrder {
    
    @Autowired
    ServiceOrder service;

    @GetMapping(path = "/orders")
    public ResponseEntity<Object> getOrders(){

        return new ResponseEntity<Object>(this.service.getOrders(),HttpStatus.OK);

    }

}