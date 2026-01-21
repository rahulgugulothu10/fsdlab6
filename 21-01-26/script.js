console.log("Welcome to FSD");

//1.with greet function return message by using callback function 
function greet(name,callback){
    const message=`Hello,${name}`;
    return callback(message);
}
function display(msg){
    return msg;
}
console.log(greet("Rahul",display));

//2.chain operation multiply it by 2,substract 3 and add 10 using callback function

function multiplyBy2(n, cb) { 
    cb(n * 2); 
} 
 
function subtract3(n, cb) { 
    cb(n - 3); 
} 
 
function add10(n, cb) { 
    cb(n + 10); 
} 
 
multiplyBy2(5, function(result1) { 
    subtract3(result1, function(result2) { 
        add10(result2, function(finalResult) { 
            console.log(finalResult); 
        }); 
    });
});

//3.function delalyed message
function delayedMessage(message, delay, callback) { 
    setTimeout(() => { 
        console.log(message); 
        callback(); 
    }, delay); 
} 
 
delayedMessage("Hello after delay", 3000, () => { 
    console.log("Message printed successfully"); 
});

//4.
function add(a, b, cb) { 
    cb(a + b); 
} 
 
function sub(a, b, cb) { 
    cb(a - b); 
} 
 
function mul(a, b, cb) { 
    cb(a * b); 
} 
 
function div(a, b, cb) { 
    cb(a / b); 
} 
 
add(10, 5, function(r1) { 
    sub(r1, 3, function(r2) { 
        mul(r2, 2, function(r3) { 
            div(r3, 4, function(r4) { 
                console.log(r4); 
            }); 
        }); 
    }); 
});

//5.
function compareStrings(str1, str2) { 
    return new Promise((resolve, reject) => { 
        if (str1 === str2) { 
            resolve("Strings are same"); 
        } else { 
            reject("Strings are different"); 
        } 
    }); 
} 
 
compareStrings("Hello", "Hello") 
    .then(res => console.log(res)) 
    .catch(err => console.log(err)); 

    //6.
    function findAbsolute(n) { 
    return new Promise((resolve, reject) => { 
        if (typeof n === "number" && n >= 0) { 
            resolve("Absolute value!!"); 
        } else { 
            reject("Invalid"); 
        } 
    }); 
} 
 
async function findResult(n) { 
    try { 
        const result = await findAbsolute(n); 
        console.log(result); 
    } catch (error) { 
        console.log(error); 
    } 
} 
 
findResult(5);

//7.
function findDigitSum(n) { 
    return new Promise((resolve, reject) => { 
        if (!isNaN(n)) { 
            let sum = 0; 
            n = Math.abs(Number(n)); 
            while (n > 0) { 
                sum += n % 10; 
                n = Math.floor(n / 10); 
            } 
            resolve(sum); 
        } else { 
            reject("Invalid"); 
        } 
    }); 
} 
 
async function findResult(n) { 
    try { 
        const result = await findDigitSum(n); 
        console.log(result); 
    } catch (error) { 
        console.log(error); 
    } 
} 
 
findResult(123); 

