using System;

namespace CalculatorApp
{
    class Program
    {
        static void Main(string[] args)
        {
            var calculator = new Calculator();
            var sum = calculator.Add(5, 3);
            Console.WriteLine($"Sum: {sum}");
        }
    }
}
