// See https://aka.ms/new-console-template for more information
// Console.WriteLine("Hello, World!");
using System;
using System.Collections.Generic; // more with lists, collections, etc;
using System.Linq; // work with data
using System.Text; // text, coding, etc.
using System.Threading.Tasks; // multi-threaded applications

namespace HelloWorld
{
    class Program
    {
        static void Main(string[] args) // application entry point - CLR executes this code; static
        {
            Console.WriteLine("HelloWorld");

            var generic = 10; // type detected based on value 

            byte number = 2;
            int count = 10;
            float totalPrice = 20.95f;
            char character = 'A'; // characters enclosed w/ single quotes
            string firstName = "Elisabeth"; // string enclosed w/ double quotes
            bool isWorking = true;

            // format string
            Console.WriteLine("Type Tests: {0} {1} {2} {3} {4} {5} {6}", generic, number, count, totalPrice, character, firstName, isWorking);
            Console.WriteLine("Byte Values: {0} {1}", byte.MinValue, byte.MaxValue); 
            Console.WriteLine("Float Values: {0} {1}", float.MinValue, float.MaxValue);

            // float
            const float Pi = 3.14f;
            Console.WriteLine("Pi: {0}", Pi);

            // type conversion
            string s = "1";
            int i = Convert.ToInt32(s);
            int j = int.Parse(s);

            // casting
            int x = 1000;
            byte b  = (byte)x; 
            Console.WriteLine(b); // data loss


            try // prevents crashing
            {
                var num = "1234";
                byte z = Convert.ToByte(num);
                Console.WriteLine(z);
                
            }
            catch (Exception)
            {
                Console.WriteLine("Number could not be converted to a byte");
            }

            try
            {
                 string str = "true";
                 bool c = Convert.ToBoolean(str);
                 Console.WriteLine(c);
            }
            catch (System.Exception)
            {
                Console.WriteLine("Could not convert to boolean.");
            }

            // operatorsv
            var xVal = 10;
            var yVal = 3;
            var zVal = 5;

            Console.WriteLine("Output: {0}", xVal > yVal * zVal); // follows PEMDAS 
        }
    }
}