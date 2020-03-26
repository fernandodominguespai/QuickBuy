namespace QuickBuy.Domain.Entidades
{
    public class ItemPedido: Entidade
    {
        public int Id { get; set; }
        public int ProdutoId { get; set; }
        public int Quantidade { get; set; }

        public override void Validate()
        {
            if (!ItensPedido.Any())
                AdicionarCritica("Critica - Pedido não pode ficar sem Item de pedido");
        }
    }
}
