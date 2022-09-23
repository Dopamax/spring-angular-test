package lu.atozdigital.api.Mappers;

import lu.atozdigital.api.DTO.Articles.ArticleDTO;
import lu.atozdigital.api.entities.Article;

public class ArticleMapper {
    
    public static ArticleDTO toDTO(Article article){

        ArticleDTO articleDTO = new ArticleDTO();
        articleDTO.setId(article.getId());
        articleDTO.setName(article.getName());
        articleDTO.setPrice(article.getPrice());
        articleDTO.setPicture(article.getPicture());
        
        return articleDTO;
    }

}
