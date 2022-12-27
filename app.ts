let username: string | null = prompt("adınızı daxil edin")
let lastname: string | null = prompt("adınızı daxil edin")
let birthday: any = prompt("tarixi daxil edin")
let gender: string | null = prompt("cinsinizi daxil edin: 1.Kisi  2.Qadin 3.diger")
let password: string | null = prompt("parolunuzu daxil edin")

let d1: Date = new Date(birthday);
let d2: Date = new Date();
let difference: number = d2.getFullYear() - d1.getFullYear();

function diff() {
    if (difference > 14) {
        return true;
    } else {
        return false;
    }
}
let obj = {
    name: username,
    surname: lastname,
    age: difference,
    isEligible: diff()
}

console.log(obj)
