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

    @PostMapping(path = "/orders")
    public Orders createOrder(@RequestBody Orders order){
        return this.service.create(order);
    }

    @GetMapping(path = "/orders/{id}")
    public ResponseEntity<Object> getOrder(@PathVariable int id){

        try {

            return new ResponseEntity<Object>(service.getOrder(id),HttpStatus.OK);
        
        } catch (Exception e) {
            
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
            
        }

    }

    @PutMapping(path = "/orders/{id}")
    public ResponseEntity<Object> addArticleToAnOrder(@RequestBody Article article, @PathVariable int id){
        try {

            return new ResponseEntity<Object>(service.addArticleToOrder(id,article), HttpStatus.OK);
        
        } catch (Exception e) {
            
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
            
        }
    }

}
