let message="stringhellohow are you dear";
let charSum=0;
let totalChar=200;
message.length;
for (let index = 0; index < message.length; index++){
    charSum++;
     totalChar--;
}
alert("you have entered : "+charSum+"  remaining characters are : "+totalChar)

// without loop

// let message=prompt("write your message");
// let charSum=message.length;
// console.log("you have entered the charcacters "+charSum+" remaining charcacters are "+(200-charSum));
