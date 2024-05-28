//  assignment 1

 ///    no 1
let people : {
    friends : {
        Firstname:string
        Lastname:string
        Id?:number
    }[]
}={
    friends:[]
}

 ///     02 
let friend1 :{
    Firstname :"rizwan"
    Lastname:"yaqoob"
    Id?:394848 
}
let friend2:{
    Firstname:"tariq",
    Lastname:"tayyab",
    Id?:393993
}
let friend3:{
    Firstname:"faizan",
    Lastname:"farooq",
    }
    // no 3
    people.friends.push()
    // no 04
    console.log(people)

    //           //    ASSIGNMNT 02

    //     scrambledarray
    let scrambledarrray = ["student","of",true,123,"am","a","GIAIC","I"]

    //    modify array
    let rearrangearray = []

    rearrangearray.push(scrambledarrray[7])
    rearrangearray.push(scrambledarrray[4])
    rearrangearray.push(scrambledarrray[5])
    rearrangearray.push(scrambledarrray[0])
    rearrangearray.push(scrambledarrray[1])
    rearrangearray.push(scrambledarrray[6])

    ///      output the result
    console.log(rearrangearray.join(''));
    

    ///    ASSIGGHMENT 03

    ///  no 1  array define
    let inventory = []

    // no 2  create three product

    let product1={
name:"bike",
model :"honda cdi 2024",
price:140000,
quantity:10
    }
    let product2={
        name:"bike",
        model :"super power 2024",
        price :90000,
        quantity:15
            }
            let product3={
                name:"bike",
                model :"Unique 2024",
                price :95000,
                quantity:6
                    }

                    /// NO 3 add product object to inventory array

                    inventory.push(product1,product2,product3)

                    //   NO 4 accees quantity property 
                    console.log(inventory[2].quantity)

                    //  NO 5 access more property 
                    console.log(inventory[1].price);
                    console.log(inventory[0].model)
                    

                    //// ASSIGHMENT 04


                    //   STUDENT DATA
interface Student {
name :string;
seniorstudent :boolean;
completeassignment:boolean;
} 
 // STUDENT    LIST
let students: Student[]=[


    {
name:"ali",
seniorstudent:false,
completeassignment:true
    },
    {
        name:"rizwan",
        seniorstudent:true,
        completeassignment:false
    },
    {name:"hasnain",
    seniorstudent:false,
    completeassignment:false
    }

]
console.log(students)

