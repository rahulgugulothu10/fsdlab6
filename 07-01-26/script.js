//1.merge array
function mergearray(...arrays){
    return [].concat(...arrays)
}
console.log(mergearray([1,2],[3,4],[5,6]));

//2.cal tot
function caltot(...nums){
    return nums.reduce((sum,n)=>sum+n,0)
    
}
console.log(caltot(10,20,30,40,50))
//3.update employee details
function updateEmployeeDetails(employee, newRole) { 
return { ...employee, role: newRole }; 
} 
const employee = { name: "John", role: "Developer", age: 28, location: "IN" }; 
console.log(updateEmployeeDetails(employee, "Senior Developer"));
//4.merges objects
function mergeUserData(...objects) { 
return { ...objects[0], ...objects[1], ...objects[2] }; 
} 
const userDetails = { name: "CVR", age: 25 }; 
const userAddress = { address: "Mangalpally", city: "Hyderabad" }; 
const userPreferences = { theme: "Engineering Edu", language: "EN" };
console.log(mergeUserData(userDetails,userAddress,userPreferences));

//5.Product info using spread operator
function updateProductInfo(product) { 
    const { id, name } = product; 
    return { id, name, discount: 10, inStock: true }; 
} 
 
const product = { id: 101, name: "Laptop", price: 1000, category: "Electronics" }; 
console.log(updateProductInfo(product));

//6.Bank Account Details
class BankAccount {
    #balance = 0;

    constructor(initialBalance = 0) {
        this.#balance = initialBalance;
    }

    deposit(amount) {
        this.#balance += amount;
    }

    withdraw(amount) {
        if (amount <= this.#balance) {
            this.#balance -= amount;
        } else {
            console.log("Insufficient balance");
        }
    }

    getBalance() {
        return this.#balance;
    }
}


const b = new BankAccount(10000);


b.deposit(2000);
console.log(`Deposit balance: ${b.getBalance()}`);

b.withdraw(3000);
console.log(`After withdrawal: ${b.getBalance()}`);


//7.Rectangle class
class Rectangle { 
    constructor(width, height) { 
        
        this.width = width; 
        this.height = height; 
    } 
 
    
    set width(w) { 
        if (w > 0) this._width = w; 
    } 

    get width() {
        return this._width;
    }
 
    
    set height(h) { 
        if (h > 0) this._height = h; 
    } 

    get height() {
        return this._height;
    }
 
   
    get area() { 
        return this._width * this._height; 
    } 
 
   
    get perimeter() { 
        return 2 * (this._width + this._height); 
    } 
}
const myRect = new Rectangle(Number(5), Number(10));


console.log(`Rectangle Details (2026):`);
console.log(`Width: ${myRect.width}, Height: ${myRect.height}`);
console.log(`Area: ${myRect.area}`);
console.log(`Perimeter: ${myRect.perimeter}`);
//8.calArea 
 class Shape { 
    calculateArea() {} 
} 
 
class Circle extends Shape { 
    constructor(r) { 
        super(); 
        this.r = r; 
    } 
    calculateArea() { 
        return Math.PI * this.r * this.r; 
    } 
} 
 
class Square extends Shape { 
    constructor(a) { 
        super(); 
        this.a = a; 
    } 
    calculateArea() { 
        return this.a * this.a; 
    } 
} 
 
class Triangle extends Shape { 
    constructor(b, h) { 
        super(); 
        this.b = b; 
        this.h = h; 
    } 
    calculateArea() { 
        return 0.5 * this.b * this.h; 
    } 
}

const ob1=new Circle(3)
console.log(ob1.calculateArea())
const ob2=new Square(5)
console.log(ob2.calculateArea())
const ob3=new Triangle(4,6)
console.log(ob3.calculateArea())
// 9.symbol with unique id
const sym1=Symbol("id")
const sym2=Symbol("id")
const obj={
    [sym1]:"vlaue1",
    [sym2]:"vlaue2"
}
console.log(obj[sym1])
console.log(obj[sym2])

//10.symbol.for() with globla key

const a=Symbol.for("globalKey")
const c=Symbol.for("globalKey")
console.log(a===c)

//11.Generators
function* generatorsFun(){
    yield 10;
    yield 20;
    yield 30
}
const gen=new generatorsFun();
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())

