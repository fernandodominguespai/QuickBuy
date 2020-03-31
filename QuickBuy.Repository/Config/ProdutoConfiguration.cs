using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using QuickBuy.Domain.Entidades;

namespace QuickBuy.Repository.Config
{
    public class ProdutoConfiguration : IEntityTypeConfiguration<Produto>
    {
        public void Configure(EntityTypeBuilder<Produto> builder)
        {
            builder.HasKey(u => u.Id);

            //builder utiliza o padrao fluent
            builder
                .Property(u => u.Nome)
                .IsRequired()
                .HasMaxLength(100);
            builder
                .Property(u => u.Descricao)
                .IsRequired()
                .HasMaxLength(200);
            builder
                .Property(u => u.Preco)
                .IsRequired();

        }
    }
}
