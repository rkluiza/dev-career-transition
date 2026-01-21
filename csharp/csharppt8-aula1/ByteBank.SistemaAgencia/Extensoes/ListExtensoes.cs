using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ByteBank.SistemaAgencia
{
    public static class ListExtensoes<T>
    {
        public static void AdicionarVarios(this List<T> listaDeInteiros, params T[] itens)
        {
            foreach(T item in itens)
            {
                lista.Add(item);
            }
        }

        List<int> idades = new List<int>();
        idades.AdicionarVarios(1, 5, 14, 25, 38, 61);

        List<string> nomes = new List<string>();
        nomes.AdicionarVarios("Adoniran", "Jimi Hendrix");
    }
}
