function validateSyntax() {
    const input = document.getElementById('petInput').value.trim();
    //const result = document.getElementById('result');

    //const inputValue = input.value.trim();
    
    const regex = /^pet_\d{4}[A-Z][a-zA-Z]*$/; 
    const result = regex.test(input);
    
    
    document.getElementById('result').innerText = result ?"Valid Syntax" : "Invalid Syntax";

         
    }


