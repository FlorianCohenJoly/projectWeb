package com.coding.services;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import com.coding.models.Article;



public class ArticleDAO {

    public List<Article> getArticles() throws SQLException {        
        try (Connection co = DriverManager.getConnection("jdbc:mysql://mysql-flo.alwaysdata.net/flo_projectweb", "flo", "floriancohenjoly")) {
            String sql = "SELECT * FROM article;";
            try (Statement st = co.createStatement()) {
                try (ResultSet rs = st.executeQuery(sql)) {
                    List<Article> list = new ArrayList<>();
                    while (rs.next()) {
                        Article a = new Article();
                        
                        a.setId(rs.getInt("id"));
                        a.setName(rs.getString("name"));
                        a.setPrice(rs.getString("price"));
                        a.setPicture(rs.getString("picture"));
                      
                        list.add(a);
                    }
                    return list;
                }
            }
        }
    }

    public Article getArticleById(int id) throws SQLException {
        try (Connection co = DriverManager.getConnection("jdbc:mysql://mysql-flo.alwaysdata.net/flo_projectweb", "flo", "floriancohenjoly")) {
            String sql = "SELECT * FROM article where id=?;";
            try (PreparedStatement st = co.prepareStatement(sql)) {
                st.setInt(1, id);
                try (ResultSet rs = st.executeQuery()) {
                    if (rs.next()) {
                        Article a = new Article();
                        a.setId(rs.getInt("id"));
                        a.setName(rs.getString("name"));
                        a.setPrice(rs.getString("price"));
                        a.setPicture(rs.getString("picture"));

                        return a;
                    }
                    return null;
                }
            }
        }
    }

    public Article getArticleByName(String name) throws SQLException {
        try (Connection co = DriverManager.getConnection("jdbc:mysql://mysql-flo.alwaysdata.net/flo_projectweb", "flo", "floriancohenjoly")) {
            String sql = "SELECT * FROM article where name LIKE %?%";
            try (PreparedStatement st = co.prepareStatement(sql)) {
                st.setString(1, name);
                try (ResultSet rs = st.executeQuery()) {
                    if (rs.next()) {
                        Article a = new Article();
                        a.setId(rs.getInt("id"));
                        a.setName(rs.getString("name"));
                        a.setPrice(rs.getString("price"));
                        a.setPicture(rs.getString("picture"));

                        return a;
                    }
                    return null;
                }
            }
        }
    }

    public void add(Article article) throws SQLException {
        try (Connection co = DriverManager.getConnection("jdbc:mysql://mysql-flo.alwaysdata.net/flo_projectweb", "flo", "floriancohenjoly")) {
            String sql = "INSERT INTO article (name, price, picture) VALUES(?, ?, ?);";
            try (PreparedStatement st = co.prepareStatement(sql)) {
                st.setString(1, article.getName());
                st.setString(2, article.getPrice());
                st.setString(3, article.getPicture());
                st.execute();
            }
        }
    }

    public void update(int id, Article article) throws SQLException {
        try (Connection co = DriverManager.getConnection("jdbc:mysql://https://mysql-flo.alwaysdata.net/flo_projectweb", "flo", "floriancohenjoly")) {
            String sql = "UPDATE article SET name=? , price=? , picture=?  WHERE id=?;";
            try (PreparedStatement st = co.prepareStatement(sql)) {
                st.setString(1, article.getName());
                st.setString(2, article.getPrice());
                st.setString(3, article.getPicture());
                st.setInt(4, id);
                st.execute();
            }
        }
    }

    public void delete(int id) throws SQLException {
        try (Connection co = DriverManager.getConnection("jdbc:mysql://https://mysql-flo.alwaysdata.net/flo_projectweb", "flo", "floriancohenjoly")) {
            String sql = "DELETE FROM article WHERE id=?;";
            try (PreparedStatement st = co.prepareStatement(sql)) {
                st.setInt(1, id);
                st.execute();
            }
        }
    }
}