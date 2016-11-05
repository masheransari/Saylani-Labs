// function calculation(num1, num2,num3)
// {
//     var result = (num1+num2)*num3;
//     var temp = result/result;
//     // if(isNaN(result))
//     if(temp!=1)
//     {
//         alert("Some thing Went Wrong");
    
//     }
//     else{
//     alert(result);
//     }
// }

// var number1 = prompt("Number 1: ");
// number1 = parseFloat(number1);

// var number2 = prompt("Number 2: ");
// number2 = parseFloat(number2);

// var number3 = prompt("Number 3: ");
// number3 = parseFloat(number3);

// calculation(number1,number2,number3);


// resipe List.

// var inger1 = ['egg','salt','sugar'];
// var inger2 = ['water','egg','milk'];
// var inger3 = ['flour','sugar','milk'];

// var fullInger = [];
// check(inger1,inger2,inger3);

// // console.log(fullInger);
// // for(var a = 0; a<inger1)

// function check(ing1,ing2,ing3)
// {
//     // var i=0;
//     // var temp = false;
//     // console.log(arrayName);
//     // for(var a=0;a<arrayName.length;a++)
//     // {
//     //     for(var b=0; b<fullInger.length;b++)
//     //     {
//     //         if(arrayName[a]==fullInger[b])
//     //         {
//     //             temp = true;
//     //             break;
//     //         }
//     //     }
            
//     //     if(temp == false)
//     //     {
//     //         fullInger.push(arrayName[a]);
//     //     }
//     // }

//     for(var a=0; a<ing1.length;a++){
//         if(fullInger.lastIndexOf(ing1[a]) == -1)
//         {
//             fullInger.push(ing1[a]);
//         }
//     }
//     for(var a=0; a<ing2.length;a++){
//         if(fullInger.lastIndexOf(ing2[a]) == -1)
//         {
//             fullInger.push(ing2[a]);
//         }
//     }
//     for(var a=0; a<ing3.length;a++){
//         if(fullInger.lastIndexOf(ing3[a]) == -1)
//         {
//             fullInger.push(ing3[a]);
//         }   
//     }
//     console.log(fullInger);

// }




// Return Methods;

function sqrtMethod(number)
{
    var result =0;
    result = number*number;
    return result;
}
var square = sqrtMethod(9);
console.log(square);