#include <bits/stdc++.h>

using namespace std;

int main() {
   
    long long x;
    long long n;
    cin >> x >> n;
    
    long long answer = 1;

 for (int i = 0; i < n; i++) {
    answer = answer * x; 
 }
  
  cout << answer;

}