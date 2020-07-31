const express = require("express");
const ejs = require("ejs");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/wikiDB", { useNewUrlParser: true, useUnifiedTopology: true });

const articleSchema = {
    title: String,
    content: String
}

const Article = mongoose.model("Article", articleSchema);

app.get("/", function (req, res) {
    res.send("<h1>Rest Api Practise website!</h1> <h2>Perform your operations.</h2>");
});

/**
 *  Requests targetting all the articles
 */

app.route("/articles")
    .get(function (req, res) {
        Article.find(function (err, foundArticles) {
            if (err) {
                res.send(err);
            } else {
                res.send(foundArticles);
            }
        });
    })
    .post(function (req, res) {

        const newArticle = new Article({
            title: req.body.title,
            content: req.body.content
        });

        newArticle.save(function (err) {
            if (err) {
                res.send(err);
            } else {
                res.send("Successfully added the new article!")
            }
        });
    })
    .delete(function (req, res) {

        Article.deleteMany(function (err) {
            if (err) {
                res.send(err);
            } else {
                res.send("Deleted all the articles!");
            }
        });
    });

/**
 * Requests targetting the particular article
 */

app.route("/articles/:articleTitle")
    .get(function (req, res) {
        Article.findOne({ title: req.params.articleTitle }, function (err, foundOne) {
            if (err) {
                res.send(err);
            } else {
                res.send(foundOne);
            }
        });
    })
    .put(function (req, res) {
        Article.update(
            { title: req.params.articleTitle },
            { title: req.body.title, content: req.body.content },
            { overwrite: true }, function (err, updatedArticle) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(updatedArticle);
                }
            });
    })
    .patch(function (req, res) {
        Article.update(
            { title: req.params.articleTitle },
            { $set: req.body },
            function (err, patchedArticle) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(patchedArticle);
                }
            });
    })
    .delete(function (req, res) {
        Article.deleteOne({ title: req.params.articleTitle }, function (err, deletedArticle) {
            if (err) {
                res.send(err);
            } else {
                res.send(deletedArticle);
            }
        });
    });


app.listen(3000, function () {
    console.log("Server started on port 3000!");
});