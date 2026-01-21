using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ByteBank
{
    class Program
    {
        static void Main(string[] args)
        {
            try
            {
                ContaCorrente conta = new ContaCorrente(0, 0);
                conta.Depositar(50);
                Console.WriteLine(conta.Saldo);
                conta.Sacar(500);
            }
            catch (ArgumentException excecao)
            {
                Console.WriteLine("Erro de argumento");
            }
            catch (SaldoInsuficienteException excecao)
            {
                if(excecao.ParamName == "numero")
                {

                }
                

            }
            Console.ReadLine();
        }

        static void Metodo()
        {
            TestaDivisao(0);
        }

        private static void TestaDivisao(int divisor)
        {

            int resultado = Dividir(10, divisor);
            Console.WriteLine("Resultado da divisão de 10 por " + divisor + "é" + resultado);
        }

        static int Dividir(int numero, int divisor)
        {
            try
            {
                return numero / divisor;
            }
            catch (Exception)
            {
                Console.WriteLine("Exceção com numero=" + numero + " e divisor=" + divisor);
                throw;
            }
        }
    }


}
