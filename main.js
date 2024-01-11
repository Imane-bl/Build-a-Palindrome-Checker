

function palindrome(str) {
//for lettres uppercase
str=str.replace(/[^a-z0-9]/gi, '').toLowerCase();//non letters ans non numbers


    for(let i=0;i<(str.length/2);i++){
        if(str[i] !== str[str.length-i-1]){
         return `"${str}"=> IS not a PALINDROME `;
             }
    }
            
             return `"${str}"=> IS a PALINDROME `;
            
}
     

function checkPalindrome() {
    const inputText = document.getElementById('text-input').value;
    const resultElement = document.getElementById('result');
    const result = palindrome(inputText);

    resultElement.innerHTML = result;
    
    // Clear the input field after checking
    document.getElementById('text-input').value = '';
}