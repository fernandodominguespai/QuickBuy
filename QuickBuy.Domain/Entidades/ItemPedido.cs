namespace QuickBuy.Domain.Entidades
{
    public class ItemPedido: Entidade
    {
        public int Id { get; set; }
        public int ProdutoId { get; set; }
        public int Quantidade { get; set; }

        public override void Validate()
        {
            if (ProdutoId == 0)
                AdicionarCritica("Critica - Não foi identificado o produto");
            if (Quantidade == 0)
                AdicionarCritica("Critica - Quantidade não definida");
        }
    }
}
