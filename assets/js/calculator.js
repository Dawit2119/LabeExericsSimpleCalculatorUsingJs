(function(){
    function add(arrayOfNumbers){
        sum = 0
         for(i =0;i<arrayOfNumbers.length;i++){
         sum += parseInt(arrayOfNumbers[i])
        }return sum
        }
        
        function subtract(numberOne,numberTwo){
            return (numberOne - numberTwo)
        }
        function multiply(arrayOfNumbers){
            product = 1
            for(i = 0;i<arrayOfNumbers.length;i++){
                product *= arrayOfNumbers[i]
            }
            return product
        }
        function divde(numberOne,numberTwo){
            if (numberTwo != 0){
            return (numberOne / numberTwo) }
            else return "invalid operation"
        }
        function min(arrayOfNumbers){
            min = arrayOfNumbers[0]
            for(i=0;i<arrayOfNumbers.length;i++){
                if (min > arrayOfNumbers[i]){
                min = arrayOfNumbers[i]
            }}
            return min;

        }
        function max(arrayOfNumbers){
            max = arrayOfNumbers[0]
            for(i=0;i<arrayOfNumbers.length;i++){
                if (max < arrayOfNumbers[i]){
                max = arrayOfNumbers[i]
            }}
            return max;
        }
        function square(number){
            return Math.pow(number,2)
        }
        function average(arrayOfNumbers){
            let total = add(arrayOfNumbers)
            return total/arrayOfNumbers.length
        }
        var choice;
        function getUserChoice(){
            choice =  parseInt(prompt("<--------- A mini calculator--------->\n1: to add\n2: to subtract\n3: to multipy\n4: to divide \n5: to get maximum \n6: to  get minimum \n7: to square\n8:To get Average"))
            return choice;
        }
            
        function createArray(){
           let  numberValue = prompt("Enter the numbers separeted by space");
            
            return numberValue.split(" ").map(item=>parseInt(item));
        }
        getUserChoice()
        while(choice){
        switch(choice){       
            case 1: {
                alert("sum = " + add(createArray()));
                getUserChoice()
                
            };
            break;
            case 2:{
                numberOne = parseInt(prompt("First number"))
                numberTwo = parseInt(prompt("Second number"))
                alert("difference = " + subtract(numberOne,numberTwo))
                getUserChoice()
            }break
            case 3:{

                alert("product = " + multiply(createArray()))
                getUserChoice()
            }break
            case 4:{
                numberOne = parseInt(prompt("First number"))
                numberTwo = parseInt(prompt("Second number"))
                alert("qutioent = " + divde(numberOne,numberTwo))
                getUserChoice()
            }break
            case 5: {

                alert("The maximum value is " + max(createArray()));
                getUserChoice()

            }break
                            
            case 6: {
                alert("The minimum value is "  + min(createArray()));
                getUserChoice()
            }break
            case 7: {
                number = parseInt(prompt("enter number"))
                    alert("the square of " + number +" = " + square(number))
                    
                    getUserChoice()
            }break
            case 8: {
                alert("The average is " + average(createArray()))
                getUserChoice()
            }break
            default:
                alert("no input detected")
            
            
        };
    }
})();