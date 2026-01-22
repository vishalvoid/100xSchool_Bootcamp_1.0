#include <bits/stdc++.h>
using namespace std;

int main() {
    
    long long n;
    cin >> n;

    
    if (n == 0) {
        cout << 0 << endl;
        return 0;
    }
    
    long sum = 0;

    
    while (n > 0) {
       
       int lastdigit =  n % 10;
       sum = sum + lastdigit;
       n = n / 10;
    }

    cout << sum;
}