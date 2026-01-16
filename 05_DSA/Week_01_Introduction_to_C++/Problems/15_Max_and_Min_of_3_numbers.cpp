#include <bits/stdc++.h>
using namespace std;

int main() {
     int a, b, c;
     
     cin >> a >> b >> c;
     
      int biggest, smallest;


    if (a >= b && a >= c)
        biggest = a;
    else if (b >= a && b >= c)
        biggest = b;
    else
        biggest = c;


    if (a <= b && a <= c)
        smallest = a;
    else if (b <= a && b <= c)
        smallest = b;
    else
        smallest = c;

    cout << "Min = " << smallest << endl;
    cout << "Max = " << biggest << endl;

}
