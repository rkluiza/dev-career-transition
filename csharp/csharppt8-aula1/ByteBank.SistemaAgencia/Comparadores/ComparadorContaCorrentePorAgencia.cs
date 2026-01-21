using System;

namespace ByteBank.SistemaAgencia.Comparadores { 
	public class ComparadorContaCorrentePorAgencia
	{
		public int ComparadorContaCorrentePorAgencia(ContaCorrente x, ContaCorrente y)
		{
            if (x.Agencia == y.Agencia)
            {
                return 0;
            }

            if (x == null)
			{
				return 1;
			}
			if (y == null)
			{
				return -1;
			}

			if (x.Agencia < y.Agencia)
			{
				return -1;
			}

			return 1;
		}
	}
}
