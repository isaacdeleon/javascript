
interface UserInterface {
    name: string;
    email: string;
    age: number;
    register();
    payInvoice();
}

class User implements UserInterface {
    name: string;
    email: string;
    age: number;

    constructor(name:string, email: string, age: number) {
        this.name = name;
        this.email = email;
        this.age = age;
    }

    register() {
        console.log(this.name + 'is now register');
    }

    payInvoice() {
        console.log(this.name + 'paid invoice');
    }
}

class Member extends User {
    id: number;

    constructor(id: number, name:string, email: string, age: number) {
        super(name, email, age);
        this.id = id;
    }

    payInvoice() {
        super.payInvoice();
    }
}


let mike: User = new Member(1, 'Mike', 'email', 30);
mike.payInvoice();
//let jhon = new User('John Doe','johndoe@gmail.com', 24);

//john.register();
