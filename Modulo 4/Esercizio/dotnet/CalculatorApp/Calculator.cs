using System;
using System.Collections.Generic;

namespace CalculatorApp
{
    public class Calculator
    {
        private List<string> history;

        public Calculator()
        {
            history = new List<string>();
        }

        public double Add(double a, double b)
        {
            double result = a + b;
            history.Add($"{a} + {b} = {result}");
            return result;
        }

        public double Subtract(double a, double b)
        {
            double result = a - b;
            history.Add($"{a} - {b} = {result}");
            return result;
        }

        public double Multiply(double a, double b)
        {
            double result = a * b;
            history.Add($"{a} * {b} = {result}");
            return result;
        }

        public double Divide(double a, double b)
        {
            if (b == 0)
            {
                throw new DivideByZeroException("Cannot divide by zero.");
            }
            double result = a / b;
            history.Add($"{a} / {b} = {result}");
            return result;
        }

        public double Power(double baseNum, int exponent)
        {
            double result = 1;
            for (int i = 0; i < exponent; i++)
            {
                result *= baseNum;
            }
            history.Add($"{baseNum} ^ {exponent} = {result}");
            return result;
        }

        public List<string> GetHistory()
        {
            return history;
        }

        public void ClearHistory()
        {
            history.Clear();
        }

        public double Percentage(double value, double percent)
        {
            double result = (value * percent) / 100;
            history.Add($"{percent}% of {value} = {result}");
            return result;
        }
    }
}