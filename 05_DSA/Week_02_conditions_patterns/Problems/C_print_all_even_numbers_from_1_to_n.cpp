#include <bits/stdc++.h>
using namespace std;
 
int main() {
    int counter = 1;
	int n; 
	cin >> n;
	
	while(counter <= n){
	   if(counter % 2 == 0){
	       cout << counter << " ";
	   }
	   counter ++;
	}
 
}