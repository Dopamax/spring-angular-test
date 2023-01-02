package lu.atozdigital.api.services;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lu.atozdigital.api.DTO.Orders.OrderDTO;
import lu.atozdigital.api.Mappers.OrderMapper;
import lu.atozdigital.api.entities.Orders;
import lu.atozdigital.api.entities.Article;
import lu.atozdigital.api.repositories.IArticle;
import lu.atozdigital.api.repositories.IOrder;

import java.util.List;
import java.util.ArrayList;
import java.util.Collections;
@Service
public class ServiceOrder {
    
    @Autowired
    IOrder iOrder;
    
    public ArrayList<OrderDTO> getOrders(){
        
        ArrayList<OrderDTO> ordersDTO = new ArrayList<OrderDTO>();

      if(this.iOrder.findAll().size() != 0)
      {

        for(Orders a : this.iOrder.findAll()){

          ordersDTO.add(OrderMapper.toDTO(a));

        }
  
      }

      return ordersDTO;
    }

    public Orders create(Orders order){

      List<Character> sequence = new ArrayList<>();
      
      StringBuilder sbuilder = new StringBuilder();
      
      String alphanumerique = null;

      for (char c = 'A' ; c <= 'Z' ; c++) {
        sequence.add(c);
      }

      Collections.shuffle(sequence);

      for (Character c : sequence) {
        System.out.print(c);
        sbuilder.append(c);
      }

      alphanumerique = sbuilder.toString();

      order.setReference(alphanumerique);

      return this.iOrder.save(order);

    }

    public OrderDTO getOrder(int id){

      return OrderMapper.toDTO(this.iOrder.findById(Long.valueOf(id)).get());

    }

    public OrderDTO addArticleToOrder(int id, Article article){
      Orders order = this.iOrder.findById(Long.valueOf(id)).get();
      try
      {
        
        //ArrayList<Article> articles = new ArrayList<Article>();
        /*for(Article a : order.getArticles()){
          articles.add(a);
        }*/
        //articles.add(article);
        order.getArticles().add(article);
        this.iOrder.save(order);
      }
      catch(Exception e){
        throw e;
      }
      
      return OrderMapper.toDTO(order);
    }
}
