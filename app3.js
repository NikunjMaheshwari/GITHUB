//creating array
let students=["Aman","Sharadha","Rajat"];
console.log(students[0]);
console.log(students.length);

//mixed array
let mixarr=["aman",25,6.1];
console.log(mixarr.length);
//empty array
let em=[];
console.log(em.length);//array are mutuable can be change like student[0]="nikk"

//array methods
let cars=["audi","ford"];
cars.push("tata");
console.log(cars);
cars.pop();
cars.unshift("toyota");//used to add in first,shift is usedto delete from start.
console.log(cars);

//index of ,include method
let colors=["yellow","red","green","blue"]
console.log(colors.indexOf("red"));
console.log(colors.includes("white"));
console.log(colors.includes("blue"));

//reverse and concatenation
console.log(colors.reverse());
console.log(cars.concat(colors));

//slice & splice in array
let alphabets=["a","b","c","d"];
console.log(alphabets.slice(2));
console.log(alphabets.slice(1,3));
console.log(alphabets.slice(-1));
let color=["red","yellow","blue","orange","pink","white"]
console.log(color.splice(4));//delete the element of that index till end. and update it new array.
console.log(color);
console.log(color.splice(0,1));
console.log(color);

//constant array
const arr1=[1,2,3];

//nested array
let nums=[[1,2],[3,4],[5,6]];
console.log(nums[0]);
console.log(nums[0].length);
console.log(nums[0][0])
console.log(nums[0][1])
console.log(nums[1][0])
console.log(nums[1][1])
console.log(nums[2][0])
console.log(nums[2][1])//can access individual element through nested arrays.

