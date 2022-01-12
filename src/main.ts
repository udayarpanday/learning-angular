let hello: string = "world";
hello = "ts"
const getFullName = (name: string, surname: string): string => {
    return name + " " + surname;
}

console.log(getFullName("Udaya", "Panday"))

interface IUser {
    name: string,
    surname?: string,
    age?: number,
    getMessage(): string
}
const user: IUser = {
    name: "Udaya",
    age: 20,
    getMessage() {
        return "Hello" + name
    }
}
const user2: IUser = {
    name: "Udaya",
    getMessage() {
        return "Hello" + name
    }
}

console.log(user.getMessage())

let userName: string = 'Sus';

let pageName: string | number = "1"

let errorMessage: string | null = null;

let users: IUser | null = null

type ID = string
type PopularTag = string
type MaybePopularTag = PopularTag | null;
const PopularTags: PopularTag[] = ['Sus'];
const dragonsTags: MaybePopularTag = 'Sus';

const doAnything = (): void => {
    console.log('J')
}
// const doEverything=():never=>{
//     console.log('J')
// }

let vAny: any = 10;
let vUnknown: unknown = 10;

let s1: string = vAny
let s2: string = vUnknown as string;

const someEle = document.querySelector(".foo") as HTMLInputElement;
console.log(someEle.value)

someEle.addEventListener('blur', (event) => {
    const target = event.target as HTMLInputElement
    console.log(target.value)
})


interface UserInterface {
    getFullName(): string
}
class User implements UserInterface {
    firstName: string
    lastName: string
    readonly unChangeName: string
    static readonly maxAge = 50

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.unChangeName = firstName;

    }

    // changeUnchangablename():void{
    //     this.unChangeName='change'
    // }

    getFullName(): string {
        return this.firstName
    }
}

class Admin extends User {
    private editor: string

    setEditor(editor: string): void {
        this.editor = editor
    }
    getEditor(editor: string) {
        return this.editor
    }
}
const admin = new Admin("foo", 'bar')
const usersa = new User('Udaya', "Panday")
enum StatusEnum {
    AddEvent = "add",
    UpdateEvent = "update",
    DeleteEvent = 'delete',
    inProgress = "inProgress",
    done = "done",
}

interface IUserAdd<T> {
    name: string,
    phoneNumber: T
    status?: StatusEnum
}
const addId = <T extends object>(obj: T) => {
    const id = Math.random().toString(16)
    const age = Math.random()
    return {
        ...obj,
        id, age
    }
}

const userId: IUserAdd<{ meta: string }> = {
    name: "Udaya",
    phoneNumber: {
        meta: '12123'
    },
    status: StatusEnum.done
}
const userId2: IUserAdd<string[]> = {
    name: "Udaya",
    phoneNumber: ["1", '2']
}
const result = addId<IUserAdd<{ meta: string }>>(userId)

