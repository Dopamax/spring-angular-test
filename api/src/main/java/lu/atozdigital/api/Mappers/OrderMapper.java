package lu.atozdigital.api.Mappers;

import lu.atozdigital.api.DTO.Orders.OrderDTO;
import lu.atozdigital.api.entities.Orders;

public class OrderMapper {
    
    public static OrderDTO toDTO(Orders order){

        OrderDTO orderDTO = new OrderDTO();
        orderDTO.setId(order.getId());
        orderDTO.setReference(order.getReference());
        orderDTO.setArticles(order.getArticles());
        orderDTO.setDate(order.getDate());

        return orderDTO;
    }
}
