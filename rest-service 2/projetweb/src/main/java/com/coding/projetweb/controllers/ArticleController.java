package com.coding.projetweb.controllers;

import java.sql.SQLException;
import java.util.List;

import com.coding.models.Article;
import com.coding.services.ArticleDAO;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/articles")
public class ArticleController {

    @PostMapping("")
    public void createUser(@RequestBody Article article) throws SQLException{
        dao.add(article);
    }

    @RequestMapping("")
    public List<Article> getAll() throws SQLException {
        return dao.getArticles();
    }

    @GetMapping("")
    public List<Article> getArticle() throws SQLException{
        return dao.getArticles();
    }
    
    private ArticleDAO dao = new ArticleDAO();

    @GetMapping("/{id}")
    public Article getArticleById(@PathVariable(value="id") int articleId) throws SQLException {
        return dao.getArticleById(articleId);
    }

    /*@GetMapping("/name")
    public Article getArticleById(@PathVariable(value="name") String name) throws SQLException{
        return dao.getArticleByName(name);
    }*/

    @PutMapping("/{id}")
    public void updateArticle(@PathVariable(value="id") int articleId, @RequestBody Article article) throws SQLException{
        dao.update(articleId, article);
    }

    @DeleteMapping("/{id}")
    public void updateArticle(@PathVariable(value="id") int articleId) throws SQLException{
        dao.delete(articleId);
    }
}




