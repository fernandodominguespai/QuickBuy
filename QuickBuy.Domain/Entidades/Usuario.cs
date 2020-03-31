using System.Collections;
using System.Collections.Generic;

namespace QuickBuy.Domain.Entidades
{
    public class Usuario: Entidade
    {
        public int Id { get; set; }
        public string Email { get; set; }
        public string Senha { get; set; }
        public string Nome { get; set; }
        public string SobreNome { get; set; }
        /// <summary>
        /// Um usuario pode ter nenhum ou muitos pedidos
        /// </summary>
        public virtual ICollection<Pedido> Pedidos { get; set; }

        public override void Validate()
        {
            if (string.IsNullOrEmpty(Email))
                AdicionarCritica("Critica - Email não inserido");
            if (string.IsNullOrEmpty(Senha))
                AdicionarCritica("Critica - Senha não inserida");
        }
    }
}
