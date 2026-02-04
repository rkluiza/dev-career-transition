namespace CasaDoCodigo.Models.Repositories
{

    public interface IPedidoRepository
    {

    }


    public class PedidoRepository : BaseRepository<Pedido>, IPedidoRepository
    {
        public PedidoRepository(AplicationContext contexto) : base(contexto)
        {
        }
    }
}
