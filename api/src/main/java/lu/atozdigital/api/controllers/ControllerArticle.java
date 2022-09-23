package lu.atozdigital.api.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import lu.atozdigital.api.entities.Article;
import lu.atozdigital.api.services.ServiceArticle;
import org.springframework.web.bind.annotation.CrossOrigin;

@RestController
@CrossOrigin(origins = "*")
public class ControllerArticle {
    @Autowired
    ServiceArticle serviceArticle;
    
    @PostMapping(path = "/articles")
    public Article Add(@RequestParam("article") String article, @RequestParam("picture") MultipartFile picture) throws JsonProcessingException, JsonMappingException{
        return serviceArticle.Add(article,picture);
    }


}
