package lu.atozdigital.api.DTO.Orders;

import java.util.Date;
import java.util.List;

import lu.atozdigital.api.entities.Article;

public class OrderDTO {
    
    Long id;
    String reference;
    List<Article> articles;
    Date date;
    
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getReference() {
        return reference;
    }
    public void setReference(String reference) {
        this.reference = reference;
    }
    public List<Article> getArticles() {
        return articles;
    }
    public void setArticles(List<Article> articles) {
        this.articles = articles;
    }
    public Date getDate() {
        return date;
    }
    public void setDate(Date date) {
        this.date = date;
    }
    
    public OrderDTO(Long id, String reference, List<Article> articles, Date date) {
        this.id = id;
        this.reference = reference;
        this.articles = articles;
        this.date = date;
    }
    
    public OrderDTO() {
    }
}
