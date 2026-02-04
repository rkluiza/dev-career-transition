using Microsoft.EntityFrameworkCore;

namespace CasaDoCodigo.Models.Repositories
{
    public class BaseRepository<T> where T : BaseModel
    {
        protected readonly AplicationContext contexto;
        protected readonly DbSet<T> produtos;

        public BaseRepository(AplicationContext contexto)
        {
            this.contexto = contexto;
            produtos = contexto.Set<T>();
        }
    }
}
