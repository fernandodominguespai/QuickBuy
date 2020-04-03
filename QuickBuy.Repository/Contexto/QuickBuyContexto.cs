using Microsoft.EntityFrameworkCore;
using QuickBuy.Domain.Entidades;
using QuickBuy.Domain.ObjetoDeValor;
using QuickBuy.Repository.Config;

namespace QuickBuy.Repository.Contexto
{
    public class QuickBuyContexto: DbContext
    {
        public DbSet<Usuario> Usuarios { get; set; }
        public DbSet<Produto> Produtos { get; set; }
        public DbSet<Pedido> Pedidos { get; set; }
        public DbSet<ItemPedido> ItensPedidos { get; set; }
        public DbSet<FormaPagamento> FormaPagamento { get; set; }
        public QuickBuyContexto(DbContextOptions options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //classes de mapeamento 
            modelBuilder.ApplyConfiguration(new UsuarioConfiguration());
            modelBuilder.ApplyConfiguration(new ProdutoConfiguration());
            modelBuilder.ApplyConfiguration(new PedidoConfiguration());
            modelBuilder.ApplyConfiguration(new ItemPedidoConfiguration());
            modelBuilder.ApplyConfiguration(new FormaPagamentoConfiguration());

            modelBuilder.Entity<FormaPagamento>().HasData(
                new FormaPagamento() { 
                    Id = 1, Nome = "Boleto", 
                    Decricao = "Boleto registrado como codigo de barras"
                },
                new FormaPagamento()
                {
                    Id = 2,
                    Nome = "Cartao de Credito",
                    Decricao = "Cartao Visa e CrediCard"
                },
                new FormaPagamento()
                {
                    Id = 3,
                    Nome = "Transferencia",
                    Decricao = "TED Transferencia Eletronica"
                }
                );

            base.OnModelCreating(modelBuilder);
        }
    }
}
