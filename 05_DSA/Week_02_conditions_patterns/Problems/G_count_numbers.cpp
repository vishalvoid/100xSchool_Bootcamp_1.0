#include <bits/stdc++.h>
 
using namespace std;
 
int main() {
    long long counter = 1;
    long long number;;
    cin >> number;
    
    long long natural = 0;
 
  while(counter <= number){
      natural = natural + counter;
      counter++;
  }
  
  cout << natural;
 
}