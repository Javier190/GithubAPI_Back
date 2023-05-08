'use strict'

var validator = require('validator');
var fs = require('fs');
var path = require('path');

//var Article = require('../models/article'); //nova


var controller = {

    metodoPruebaJavier: (req, res) => {
        console.log('ruta test1 funcionando !!');
        return res.status(200).send(`
        <div> Hello Underworld </div>
        <div> By Javier. </div>
        `);
    },
    

    datosCursoPost: (req, res) => {
        console.log('Usando metodo Post');
        return res.status(200).send(`
        <div> Hello Prueba Post </div>
        <div> By Javier. </div>
        `);
    },

    //Metodos Utiles

    getArticles: (req, res) => {

        var query = Article.find({});

        var last = req.params.last;
        if (last || last != undefined) {
            query.limit(3);
        }

        //find.Este es el metodo magico find()
        query.sort('-_id').exec((err, articles) => {

            if (err || !articles) {
                return res.status(500).send({
                    status: 'error',
                    message: 'Error al devolver los articulos ! !'
                });
            }
            return res.status(200).send({
                status: 'success',
                articles
            });
        })


    },

    getArticle: (req, res) => {

        //Obtener ID de URL
        var articleId = req.params.id;

        //Comprobar que existe
        if (!articleId || articleId == null) {
            return res.status(404).send({
                status: 'error',
                message: 'Id de articulo NO existe ! !'
            });
        }

        //Buscar el articulo
        Article.findById(articleId, (err, article) => {
            if (err) {
                return res.status(500).send({
                    status: 'error',
                    message: 'Error al devolver los datos ! !'
                });
            }
            if (!article) {
                return res.status(404).send({
                    status: 'error',
                    message: 'No existe el articulo ! !'
                });
            }
            //Devolver el JSON
            return res.status(200).send({
                status: 'success',
                article
            });

        });
    }
    

};

module.exports = controller;