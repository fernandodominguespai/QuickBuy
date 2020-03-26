namespace QuickBuy.Domain.Entidades
{
    public class Produto: Entidade
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Descricao { get; set; }
        public decimal Preco { get; set; }

        public override void Validate()
        {
            if (string.IsNullOrEmpty(Nome))
                AdicionarCritica("Critica - Nome não inserido");
            if (Preco == 0)
                AdicionarCritica("Critica - Valor não inserido");

        }
    }
}
