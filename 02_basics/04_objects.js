// const tinderUser = new Object()
const tinderUser={}

tinderUser.id="123abc"
tinderUser.name="Anmol"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Bibek",
            lastname:"kumar"
        }
    }
}

//console.log(regularUser.fullname);
//console.log(regularUser.fullname.userfullname.firstname);

const obj1={1:"a",2:"b"}

const obj2={3:"a", 4:"b"}
const obj4 = {5:"a", 6:"b"}
//const obj3 = {obj1, obj2}
//const obj3 = Object.assign({},obj1, obj2, obj4)

const obj3={...obj1,...obj2}
//console.log(obj3);

const users = [
    {
        id:1,
        email:"bibek@gmail.com"
    },
    {
        id:1,
        email:"bibek@gmail.com"
    },
    {
        id:1,
        email:"bibek@gmail.com"
    },
]

users[1].email
//console.log(tinderUser);

//console.log(Object.keys(tinderUser));

//console.log(Object.values(tinderUser));

//console.log(Object.entries(tinderUser));

//console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course={
    coursename:"JS in hindi",
    price:"345",
    courseInstructor:"Bibek"
}

//course.courseInstructor

const{courseInstructor:Instructor}=course
console.log(Instructor);

/*const navbar = ((company))=>{

}
navbar(company="Bibek")*///object destructuring

/*{
    "name": "Bibek",
    "courseName": "JS in hindi",
    "price":"free"
}*/

[
    {},
    {},
    {}
]
//Json is simple Js object notation, ye sirf js ke liye limited nahi hai pura api industry mein chalta hai
