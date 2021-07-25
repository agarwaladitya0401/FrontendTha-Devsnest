// 1. Write a JavaScript program to list the properties of a JavaScript object.
//  Sample object: var student = { name : "David Rayy", sclass : "VI", rollno : 12 }; 
//  Sample Output: name,sclass,rollno

var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};

console.log(student.name);   
console.log(student.rollno);
console.log(student.sclass);


// 2. Write a JavaScript program to delete the rollno property from the following object. 
// Also print the object before or after deleting the property. 
// Sample object: var student = { name : "David Rayy", sclass : "VI", rollno : 12 };

var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};

console.log(student);
delete student.rollno;
console.log(student);

// 3. Write a JavaScript program to get the length of a JavaScript object.  
// Sample object : var student = { name : "David Rayy", sclass : "VI", rollno : 12 };

var student = {    
    name: "David Rayy",  
    sclass: "VI",
    rollno: 12
};

objectLenght = Object.keys(student).length;
console.log(objectLenght);

// 4. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status)
//  of the following books. 
//  var library = [ { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true }, 
//  { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true }, 
//  { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }]; 


var library = [{
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true

    },

    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true

    },

    {
        author: 'Suzanne Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false

    }
];

for (i = 0; i < library.length; i++) {

    console.log("book name --- " + library[i].title);
    console.log("author name --- " + library[i].author);
    console.log("reading status --- " + library[i].readingStatus);

}

//5. Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes. 
// Volume of a cylinder : V = πr2h where r is the radius and h is the height of the cylinder.

var Cylinder = class {
    constructor(height, radius) {
        this.height = height;
        this.radius = radius;
    }

    get volume() {
        return this.calcVolume();
    }

    calcVolume() {
        return (Math.PI * this.radius * this.radius * this.height);
    }

};

var h = window.prompt("Enter the height: ");
//alert("Your name is " + h);

var r = window.prompt("Enter the radius: ");
//alert("Your name is " + r);

const obj = new Cylinder(h, r);
console.log("volume is ", obj.volume.toFixed(4));


// 6. Write a JavaScript program to sort an array of JavaScript objects.  
// Sample Object : var library = [ { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 }, 
// { title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 }, 
// { title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3245 }]; 

// Expected Output: 
// [[object Object] { author: "Walter Isaacson", libraryID: 4264, title: "Steve Jobs" }, [object Object] 
// { author: "Suzanne Collins", libraryID: 3245, title: "Mockingjay: The Final Book of The Hunger Games" }, 
// [object Object] { author: "The Road Ahead", libraryID: 1254, title: "Bill Gates" }]

var library = [

    {
        title: 'The Road Ahead',
        author: 'Bill Gates',
        libraryID: 1254

    },
    {
        title: 'Walter Isaacson',
        author: 'Steve Jobs',
        libraryID: 4264

    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        libraryID: 3245

    }
];

function compare_to_sort(x, y) {
    if (x.libraryID < y.libraryID)
        return 1;
    if (x.libraryID > y.libraryID)
        return -1;
    return 0;
}


library.sort(compare_to_sort);
console.log(library);
