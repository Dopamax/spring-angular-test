package lu.atozdigital.api.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import lu.atozdigital.api.DTO.Articles.ArticleDTO;
import lu.atozdigital.api.Mappers.ArticleMapper;
import lu.atozdigital.api.entities.Article;
import lu.atozdigital.api.repositories.IArticle;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import javax.servlet.ServletContext;
@Service
public class ServiceArticle {

    @Autowired
    IArticle iarticle;
    @Autowired
    ServletContext context;

    public Article Add(String article,MultipartFile picture) throws JsonProcessingException, JsonMappingException {
        
        Article articleObject = new ObjectMapper().readValue(article, Article.class);
        
        String fileName = picture.getOriginalFilename();
        
        Path root = Paths.get("uploads");
        
        boolean folderNotExist = Files.notExists(root);
        
        articleObject.setPicture(fileName);
         
        Article savedArticle = iarticle.save(articleObject);

        if(folderNotExist){
           
           try {
             
            Files.createDirectory(root);

          } catch (Exception e) {
           
            throw new RuntimeException("Could not create the folder. Error: " + e.getMessage());
           
          }
          
        }
    
        try {
            
            Files.copy(picture.getInputStream(), root.resolve(fileName));

          } catch (Exception e) {

            throw new RuntimeException("Could not store the file. Error: " + e.getMessage());

          }

        return savedArticle;
    }
    

    public ArticleDTO getArticle(int id){

      return ArticleMapper.toDTO(this.iarticle.findById(Long.valueOf(id)).get());

    }

}
