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

            var generic = 10;

            byte number = 2;
            int count = 10;
            float totalPrice = 20.95f;
            char character = 'A'; // characters enclosed w/ single quotes
            string firstName = "Elisabeth"; // string enclosed w/ double quotes
            bool isWorking = true;

            Console.WriteLine(generic); 
            
            Console.WriteLine(number); 
            Console.WriteLine(number); 
            Console.WriteLine(count); 
            Console.WriteLine(totalPrice); 
            Console.WriteLine(character); 
            Console.WriteLine(firstName); 
            Console.WriteLine(isWorking); 
        }
    }
}