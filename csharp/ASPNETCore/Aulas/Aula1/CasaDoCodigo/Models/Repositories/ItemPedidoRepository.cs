namespace CasaDoCodigo.Models.Repositories
{

    public interface IItemPedidoRepository
    {

    }


    public class ItemPedidoRepository : BaseRepository<ItemPedido>, IItemPedidoRepository
    {
        public ItemPedidoRepository(AplicationContext contexto) : base(contexto)
        {
        }
    }
}
