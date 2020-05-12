using QuickBuy.Domain.Entidades;

namespace QuickBuy.Domain.Contratos
{
    public interface IUsuarioRepository : IBaseRepositorio<Usuario>
    {
        Usuario Obter(string email, string senha);
        Usuario Obter(string email);
    }
}
