 let valid = true;
 let answer = Number(prompt("Enter the total bill amount:"));
 do{
    if (answer == 0) {   
        console.log("Input equals 0.Please enter a valid number greater than 0.");
        answer = Number(prompt("Enter the total bill amount:"));
        valid = false;
    }
    else if (answer < 0) {
        console.log("Input is negative.Please enter a valid number greater than 0.");
        answer = Number(prompt("Enter the total bill amount:"));
        valid = false;
    }
    else if (isNaN(answer))  {
        console.log("Input is invalid.Please enter a valid number greater than 0.");
        answer = Number(prompt("Enter the total bill amount:"));
        valid=false;
    }
    else {
        document.write(`For bill amount ${answer}, you will tip ${answer*.1}`);
        valid = true;
    }
 } while (valid = false);

 console.log(answer)

