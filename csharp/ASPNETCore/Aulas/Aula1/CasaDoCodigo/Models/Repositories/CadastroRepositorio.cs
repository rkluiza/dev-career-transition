namespace CasaDoCodigo.Models.Repositories
{
    public interface ICadastroRepository
    {

    }


    public class CadastroRepository : BaseRepository<Cadastro>, ICadastroRepository
    {
        public CadastroRepository(AplicationContext contexto) : base(contexto)
        {
        }
    }
}

