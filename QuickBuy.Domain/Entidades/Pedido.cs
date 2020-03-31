using QuickBuy.Domain.ObjetoDeValor;
using System;
using System.Collections.Generic;
using System.Linq;

namespace QuickBuy.Domain.Entidades
{
    public class Pedido: Entidade
    {
        public int Id { get; set; }
        public DateTime DataPedido { get; set; }
        public int UsuarioId { get; set; }
        public virtual Usuario Usuario { get; set; }
        public DateTime DataPrevisaoEntrega { get; set; }
        public string CEP { get; set; }
        public string Estado { get; set; }
        public string Cidade { get; set; }
        public string EnderecoCompleto { get; set; }
        public int NumeroEndereco { get; set; }
        public int FormaPagamentoId { get; set; }
        public FormaPagamento FormaPagamento{ get; set; }

        /// <summary>
        /// pedido deve ter um item ou muitos itens
        /// </summary>
        public ICollection<ItemPedido> ItensPedido { get; set; }

        public override void Validate()
        {
            if (!ItensPedido.Any())
                AdicionarCritica("Critica - Pedido não pode ficar sem Item de pedido"); 
            
            if (string.IsNullOrEmpty(CEP))
                AdicionarCritica("Critica - Pedido não pode ficar sem CEP");
            if (FormaPagamentoId == 0)
                AdicionarCritica("Critica - Não foi identificado o produto");

        }
    }
}
