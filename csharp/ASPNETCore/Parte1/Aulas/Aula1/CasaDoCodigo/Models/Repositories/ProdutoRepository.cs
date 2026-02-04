using CasaDoCodigo.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CasaDoCodigo.Models.Repositories
{
    public class ProdutoRepository : BaseRepository<Produto>, IProdutoRepository
    {

        public ProdutoRepository(ApplicationContext contexto) : base(contexto)
        {

        }

        public IList<Produto> GetProdutos()
        {
            return produtos.ToList();
        }

        public void SaveProdutos(List<Livro> livros)
        {
            foreach (var livro in livros)
            {

                if (!produtos.Where(p => p.Codigo == livro.Codigo).Any()){
                   produtos.Add(new Produto(livro.Codigo, livro.Nome, livro.Preco));
                }

            }
            contexto.SaveChanges();
        }

    }
    public class Livro
    {
        public string Codigo { get; set; }
        public string Nome { get; set; }
        public decimal Preco { get; set; }
    }

}
