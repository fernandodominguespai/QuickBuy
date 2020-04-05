using QuickBuy.Domain.Contratos;
using QuickBuy.Domain.Entidades;
using QuickBuy.Repository.Contexto;

namespace QuickBuy.Repository.Repositorios
{
    public class ProdutoRepositorio : BaseRepositorio<Produto>, IProdutoRepository
    {
        public ProdutoRepositorio(QuickBuyContexto quickBuyContexto) : base(quickBuyContexto)
        {
        }
    }
}
