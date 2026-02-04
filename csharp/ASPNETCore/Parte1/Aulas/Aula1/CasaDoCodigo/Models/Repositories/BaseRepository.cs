using Microsoft.EntityFrameworkCore;

namespace CasaDoCodigo.Models.Repositories
{
    public class BaseRepository<T> where T : BaseModel
    {
        protected readonly ApplicationContext contexto;
        protected readonly DbSet<T> produtos;

        public BaseRepository(ApplicationContext contexto)
        {
            this.contexto = contexto;
            produtos = contexto.Set<T>();
        }
    }
}
