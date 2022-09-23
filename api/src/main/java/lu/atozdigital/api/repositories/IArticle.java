package lu.atozdigital.api.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import lu.atozdigital.api.entities.Article;

public interface IArticle extends JpaRepository<Article,Long>{
    
}
