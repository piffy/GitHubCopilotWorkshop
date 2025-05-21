using NUnit.Framework;
using CalculatorApp;

namespace CalculatorApp.Tests
{
    [TestFixture]
    public class CalculatorTests
    {
        private Calculator calculator;

        [SetUp]
        public void SetUp()
        {
            // Initialize Calculator before each test
            calculator = new Calculator();
        }

        [Test]
        public void Add_TwoPositiveNumbers_ReturnsCorrectSum()
        {
            // Test that adding two positive numbers returns their sum
            var result = calculator.Add(5, 7);
            Assert.That(result, Is.EqualTo(12));
        }
    }
}