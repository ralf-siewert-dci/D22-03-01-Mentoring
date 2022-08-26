# Mentoring 12.08.2022

- Recursive functions
  - Rekursive Funktionen sind Funktionen, die sich selbst wieder aufrufen
  - Eine rekursive Funktion muss UNBEDINGT eine Abbruchbedingung haben, sonst gerät man in eine Endlosschleife und JavaScript meldet irgendwann einen `StackOverflow` Fehler
  - Es gibt nur wenige Probleme, in denen der Einsatz rekursiver Funktionen sinnvoll ist, sie sind fehleranfällig, langsam und belegen den Callstack
    - Sinnvoll z.B. für bestimmte mathematische Funktionen (z.B. Fakultät) oder zum Durchlaufen rekursiver Datenstrukturen:
    ```
        const navigation=[
            {
                title: "Home",
                link: "example.com/home"
                children: []
            },
            {
                title: "Products",
                link: "example.com/products",
                children: [
                    {
                        title: "Kühlschrank",
                        link: "example.com/products/kuehlschrank",
                        children: []
                    },
                    {
                        title: "Backofen",
                        link: "example.com/products/backofen",
                        children: []
                    }
                ]
            }
        ]
    ```
- [Closures](https://www.geeksforgeeks.org/closure-in-javascript/)

  - Closures sind Funktionen, die Variablen beinhalten und selbst wieder eine Funktion zurückgeben. Die zurückgegebene Funktion hat dann Zugriff auf die "gekapselte" Variable in der Closure-Funktion und kann diese verändern.

- [Classes](https://dmitripavlutin.com/javascript-classes-complete-guide/)
  - Klassen sind "Schablonen" für die Erstellung von Objekten, auch sie "kapseln" Variablen und Methoden, die Zugriff auf diese Variablen haben.
  - Klassen können die Eigenschaften von anderen Klassen "erben" (Inheritance).
