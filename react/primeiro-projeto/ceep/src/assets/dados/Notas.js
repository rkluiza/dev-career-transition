import React, { Component } from 'react';

export default class Notas{
    constructor(){
        this.notas = [];
    }

    adicionarNota(titulo, texto, categorias){
        const novaNota = new Nota(titulo, texto, categoria);
        this.notas.push(novaNota);
    }

    deletarNota(indice){
        this.notas.slipe(indice, 1);
    }

}

class Nota{
    construtor(titulo, texto, categorias){
        this.titulo = titulo;
        this.texto = texto;
        this.categorias = categorias;
    }
}