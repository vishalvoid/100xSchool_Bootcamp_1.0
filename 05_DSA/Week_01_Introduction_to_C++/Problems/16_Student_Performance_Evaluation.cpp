#include <bits/stdc++.h>
using namespace std;

int main() {
    
    int marks;
    
    cin >> marks;
    
    if(marks > 90){
        cout << "Excellent" << endl;
    }else if(marks > 80 && marks <= 90){
        cout << "Good" << endl;
    }else if(marks >70 && marks <=80){
        cout << "Fair" << endl;
    }else if (marks > 60 && marks <=70){
        cout << "Meets Expectations" << endl;
    }else if(marks <= 60){
        cout << "Below Par" << endl;
    }

}
