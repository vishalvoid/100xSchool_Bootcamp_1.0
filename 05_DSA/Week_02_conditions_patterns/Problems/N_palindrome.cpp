#include <bits/stdc++.h>
using namespace std;

int main() {
    long long n;
    cin >> n;

    long long original = n;
    long long rev = 0;

    while (n > 0) {
        rev = rev * 10 + (n % 10);
        n /= 10;
    }

    if (original == rev)
        cout << "YES";
    else
        cout << "NO";

    return 0;
}
