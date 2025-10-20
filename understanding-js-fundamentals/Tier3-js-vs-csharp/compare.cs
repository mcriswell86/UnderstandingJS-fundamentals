
// C# Example
using System;

class Program {
  static void Main() {
    string user = "Jordan";
    Console.WriteLine(Greet(user));
  }

  static string Greet(string name) {
    return $"Hello, {name}!";
  }
}
