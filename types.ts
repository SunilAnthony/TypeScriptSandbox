//Declaring global variables
let myString: string;
let myNum: number;
let myBool: boolean;
let myVar: any;  //can be anything
// let strArray : string[];
// let numArray: number[];
// let boolArray: boolean[];
let strArray: Array<string>;
let numArray: Array<number>;
let boolArray: Array<boolean>;

let strNumTuple: [string, number];

//Setting value to global variables
myString = 'Welcome to the wonderful World of TypeScript.'.slice(0, 7);
myNum = 22;
myBool = true;
myVar = '5';

strArray = ['Hello','World!','typescript']
numArray = [2,3,5];
boolArray = [true, false, true];

strNumTuple = ['Hello', 3];

let myVoid: void = null;
let myNull: null = null;
let myUndefinded: undefined = undefined;

console.log(strNumTuple);