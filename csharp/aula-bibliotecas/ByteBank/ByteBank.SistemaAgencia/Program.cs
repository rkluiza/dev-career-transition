using ByteBank.Modelos;
using ByteBank.Modelos.Funcionarios;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ByteBank.SistemaAgencia
{
    class Program
    {
        static void Main(string[] args)
        {


            string url = "pagina?argumento";
            string argumentos = url.Substring(6);

            int indiceInterrogacao = url.IndexOf('?');
            Console.WriteLine(indiceInterrogacao);



            Console.ReadLine();


        }
    }
}
