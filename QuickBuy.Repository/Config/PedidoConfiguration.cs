using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using QuickBuy.Domain.Entidades;

namespace QuickBuy.Repository.Config
{
    public class PedidoConfiguration : IEntityTypeConfiguration<Pedido>
    {
        public void Configure(EntityTypeBuilder<Pedido> builder)
        {
            builder.HasKey(u => u.Id);

            //builder utiliza o padrao fluent
            builder
                .Property(u => u.DataPedido)
                .IsRequired();
            builder
                .Property(u => u.UsuarioId)
                .IsRequired();
            builder
                .Property(u => u.DataPrevisaoEntrega)
                .IsRequired();
            builder
                .Property(u => u.CEP)
                .IsRequired()
                .HasMaxLength(8);
            builder
                .Property(u => u.Estado)
                .IsRequired()
                .HasMaxLength(50);
            builder
                .Property(u => u.Cidade)
                .IsRequired()
                .HasMaxLength(50);
            builder
                .Property(u => u.EnderecoCompleto)
                .IsRequired()
                .HasMaxLength(50);
            builder
                .Property(u => u.NumeroEndereco)
                .IsRequired();
            builder
                .Property(u => u.FormaPagamentoId)
                .IsRequired();
        }
    }
}
