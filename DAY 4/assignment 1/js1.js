let num = prompt("Enter the Number : ");
func(num);
function func(n)
{
    if (num%2 == 0){
        console.log("The number entered is "+n+" and Number is Even");
    }
    else {
        console.log("The number entered is "+n+" and Number is Odd");
    }
}