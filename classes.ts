interface IUser{
    name: string;
    email: string;
    age: number;
    register();
    payInvoice();
}


class User implements IUser{
    name: string;
    email: string;
    public age: number;
    // Access Modifier can be public = access outside of the class, private access within the class,
    // protected access from inherited classes
    constructor(name: string, email: string, age: number){
        this.name = name;
        this.email = email;
        this.age = age;

        console.log('User Created: ' + this.name);
    }
    //Method can also have access modifier
    public register(){
        console.log(this.name + ' is now registered');
    }
    payInvoice(){
        console.log( this.name+ ' paid an invoice');
    }
}

// Inheritence class
class Member extends User{
    id: number;
    constructor(id: number, name:string, email:string, age: number){
        super(name, email, age);
        this.id = id;
    }
    payInvoice(){
        super.payInvoice();
    }
}

let mike: User = new Member(1, 'Mike Smith', 'mike@gmail.com', 33);
mike.payInvoice();

// let john = new User('John Doe', 'jdoe@gmail.com', 34);

// john.register();