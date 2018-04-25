//FizBuzz implementation

var i=1;
//Using while loop
while (i<=100){
    if(i%3 == 0 && i%5 == 0)
        console.log(i + " FizzBuzz");
    else if(i%3 == 0)
        console.log(i + " Fizz");
    else if(i%5 == 0)
        console.log(i + " Buzz");
    else
        console.log(i);
    i++;
}