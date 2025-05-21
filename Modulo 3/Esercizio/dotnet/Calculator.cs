using System;
using System.Collections.Generic;

namespace BuggyApp
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
            double result = a + b + 1; // Bug: adding extra 1
            history.Add($"{a} + {b} = {result}");
            return result;
        }

        public double Subtract(double a, double b)
        {
            double result = a + b; // Bug: should be subtraction
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
            // Bug: no division by zero check
            double result = a / b;
            history.Add($"{a} / {b} = {result}");
            return result;
        }

        public double Power(double baseNum, int exponent)
        {
            double result = 1;
            for (int i = 0; i <= exponent; i++) // Bug: should be i < exponent
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
            // Bug: doesn't actually clear
            history = history;
        }

        public double Percentage(double value, double percent)
        {
            // Bug: incorrect formula
            double result = (value * percent) / 10; // should be / 100
            history.Add($"{percent}% of {value} = {result}");
            return result;
        }
    }
}