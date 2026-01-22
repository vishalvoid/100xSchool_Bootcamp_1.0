#include <bits/stdc++.h>

using namespace std;

int main() {
    int number;;
    cin >> number;

    int pos = 0;
    int neg = 0;
    int even = 0;
    int odd = 0;

    long long x;

    for (int i = 0; i < number; i++) {
        cin >> x;

        if (x > 0) {
            pos++;
        } else if (x < 0) {
            neg++;
        }

        if (x % 2 == 0) {
            even++;
        } else {
            odd++;
        }


    }

    cout << pos << endl;
    cout << neg << endl;
    cout << even << endl;
    cout << odd << endl;


}