


function palindrome(str) {
    let strOrigunale=str;
      str=str.replace(/\W|_/g, "");//
         const newA=[];
      for(let i=str.length-1;i>=0;i--){
          newA.push(str[i]);
          }
  
  const newmot=newA.join("");
  if(str === ''){
   return  alert("Please input a value");
  }
  if(newmot.toLowerCase() !== str.toLowerCase()){
  
  return `${strOrigunale} is not a palindrome`;
   }
    
   return `${strOrigunale} is a palindrome`;
      }  
      
      function checkPalindrome() {
          const inputText = document.getElementById('text-input').value;
          const resultElement = document.getElementById('result');
          const result = palindrome(inputText);
  
    
      
          resultElement.innerHTML = result;
          
          // Clear the input field after checking
          document.getElementById('text-input').value = '';
      }
  