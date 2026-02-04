using CasaDoCodigo.Models;
using CasaDoCodigo.Models.Repositories;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.IO;

namespace CasaDoCodigo
{
    class DataService : IDataService
    {

        private readonly AplicationContext contexto;
        private readonly IProdutoRepository produtoRepository;

        public DataService(AplicationContext contexto, IProdutoRepository produtoRepository)
        {
            this.contexto = contexto;
            this.produtoRepository = produtoRepository;
        }

        public void inicializaDB()
        {
            contexto.Database.EnsureCreated();

            List<Livro> livros = GerLivros();
            produtoRepository.SaveProdutos(livros);

        }



        private static List<Livro> GerLivros()
        {
            var json = File.ReadAllText("livros.json");
            var livros = JsonConvert.DeserializeObject<List<Livro>>(json);
            return livros;
        }
    }





}