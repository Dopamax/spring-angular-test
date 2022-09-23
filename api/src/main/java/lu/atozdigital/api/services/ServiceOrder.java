package lu.atozdigital.api.services;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lu.atozdigital.api.DTO.Orders.OrderDTO;
import lu.atozdigital.api.Mappers.OrderMapper;
import lu.atozdigital.api.entities.Orders;
import lu.atozdigital.api.entities.Article;
import lu.atozdigital.api.repositories.IOrder;

import java.util.List;
import java.util.ArrayList;
import java.util.Collections;
@Service
public class ServiceOrder {
    
    @Autowired
    IOrder iorder;
    
    public ArrayList<OrderDTO> getOrders(){
        
        ArrayList<OrderDTO> ordersDTO = new ArrayList<OrderDTO>();

      if(this.iorder.findAll().size() != 0)
      {

        for(Orders a : this.iorder.findAll()){

          ordersDTO.add(OrderMapper.toDTO(a));

        }
  
      }

      return ordersDTO;
    }

}
