using Microsoft.EntityFrameworkCore.Migrations;

namespace QuickBuy.Repository.Migrations
{
    public partial class CargaFormaPagamento : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "FormaPagamento",
                columns: new[] { "Id", "Decricao", "Nome" },
                values: new object[] { 1, "Boleto registrado como codigo de barras", "Boleto" });

            migrationBuilder.InsertData(
                table: "FormaPagamento",
                columns: new[] { "Id", "Decricao", "Nome" },
                values: new object[] { 2, "Cartao Visa e CrediCard", "Cartao de Credito" });

            migrationBuilder.InsertData(
                table: "FormaPagamento",
                columns: new[] { "Id", "Decricao", "Nome" },
                values: new object[] { 3, "TED Transferencia Eletronica", "Transferencia" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "FormaPagamento",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "FormaPagamento",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "FormaPagamento",
                keyColumn: "Id",
                keyValue: 3);
        }
    }
}
