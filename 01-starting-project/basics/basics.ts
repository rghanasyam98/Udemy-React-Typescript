// basic data types
// number string boolean

let age:number;
age=10
// age='shyam';//error

let username:string;
username="shyam";
// username=1//error

let isWorking:boolean;
isWorking=true;
// isWorking=1//error


// complex data types -array,object

// -------array-------

// type onnum specify cheytillengil default type is any
// ie values of any type can be stored , let player:any;
let player;
player=1;
player="shyam";

let players:string[];
players=["messi","ronaldo","neymar"];
// players=["messi","ronaldo","neymar",1];//error

let primenumbers:number[];
primenumbers=[2,3,5,7];
// primenumbers=[2,3,5,7,"11"];//error



// ------object--------

// type specify cheytillengil mixed aayit store cheyyam
let student:{};
student={
    sname:"shyam",
    age:25
}

let employee:{
    ename:string,
    phone:number
}

employee={
    ename:"shyam",
    phone:2255
}

// employee={
//     isManager:true
// }//error


// array of objects
let movies:{
    moviename:string,
    actors:string[]
}[];

movies=[
    {
        moviename:"vikram",
        actors:["surya","fahad"]
    },
    {
        moviename:"jailer",
        actors:["rajani","mohanlal"]
    }
];

movies.push({
    moviename:"lucifer",
    actors:["mohanlal","tovino"]
})



// ************ Type inference ****************

// inference means understanding the type automatically upon initialization in declaration

let college="KMCT";
// can ommit let college:string="KMCT";
// college=10//error because it is infered as a string type in the declaration



// ************ union type ****************

// this allows a varible to store values of multiple types

// we are able to store string or number in applicationId
let applicationId: string | number;
applicationId="agfhuihu";
applicationId=24244435;

// ************ type alias ****************
// user defined type create cheyyaam. then that can be used for declaration of another variables

type Teacher={
    tname: string,
    subject: string,
}

let schoolTeacher: Teacher;
schoolTeacher={
    tname:"shyam",
    subject:"cs"
}

let collegeTeachers: Teacher[];
collegeTeachers=[
  {
     tname:"shyam",
     subject:"cs"
  },
  {
     tname:"tom",
     subject:"maths"
  }
]


// ************ function ****************

// this fn's infered return type is number
function addnum(a:number,b:number){
    return a + b;
}

// equivalent to above,ie can explicitly define return type
// function addnum(a:number,b:number):number{
//     return a + b;
// }

// if nothing is returned then return type is void
function display(msg:string){
    console.log(msg);
}



//********** generics ***********

function insertAtBegining(arr:any[],val:any){
    let updatedArray=[val,...arr];
    return updatedArray;
}

let list=[1,2,3,4];
let updated=insertAtBegining(list,0);

//this operation can be performed only for string value,but updated array contains only number
// ie this fails at run time,doesnt shows any error at development
updated[0].split('');

// here randum different type aavan allow cheyyunnilla
function insertAtStart<T>(arr:T[],val:T){
    let updatedArray=[val,...arr];
    return updatedArray;
}

let list2=[1,2,3,4];
let updated2=insertAtStart(list2,0);

// updated2[0].split('');//THIS shows error because due to generics updated2 automatically becomes number,so split cant be called

let list3=['a','b','c'];
// now the type of updated3 will automatically becomes string,so can call split,doesnt show any error at development
let updated3=insertAtStart(list3,'d');