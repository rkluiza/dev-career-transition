using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;

namespace CasaDoCodigo.Models.Repositories
{

    public interface IPedidoRepository
    {
        void AddItem(string codigo);
        Pedido GetPedido();
    }


    public class PedidoRepository : BaseRepository<Pedido>, IPedidoRepository
    {

        private readonly IHttpContextAccessor contextAccessor;

        public PedidoRepository(ApplicationContext contexto, IHttpContextAccessor contextAcessor) : base(contexto)
        {
            this.contextAccessor = contextAcessor;
        }

        public void AddItem(string codigo)
        {
            var produto = contexto.Set<Produto>()
                        .Where(p => p.Codigo == codigo)
                        .SingleOrDefault();

            if (produto == null)
            {
                throw new ArgumentException("Produto não encontrado");
            }

            var pedido = GetPedido();

            var itemPedido = contexto.Set<ItemPedido>()
                                .Where(i => i.Produto.Codigo == codigo
                                    && i.Pedido.Id == pedido.Id)
                                .SingleOrDefault();

            if (itemPedido == null)
            {
                itemPedido = new ItemPedido(pedido, produto, 1, produto.Preco);
                contexto.Set<ItemPedido>()
                                .Add(itemPedido);

                contexto.SaveChanges();
            }
        }

        public Pedido GetPedido()
        {
            var pedidoId = GetPedidoId();
            var pedido = produtos.Include(p => p.Itens).ThenInclude(i => i.Produto)
                .Where(p => p.Id == pedidoId).SingleOrDefault();

            if (pedido == null)
            {
                pedido = new Pedido();
                produtos.Add(pedido);
                contexto.SaveChanges();
                SetPedidoId(pedido.Id);
            }

            return pedido;
        }

        private int? GetPedidoId()
        {
            return contextAccessor.HttpContext.Session.GetInt32("pedidoId");
        }

        private void SetPedidoId(int pedidoID)
        {
            contextAccessor.HttpContext.Session.SetInt32("pedidoId", pedidoID);
        }


    }
}
