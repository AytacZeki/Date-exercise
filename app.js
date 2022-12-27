var username = prompt("adınızı daxil edin");
var lastname = prompt("adınızı daxil edin");
var birthday = prompt("tarixi daxil edin");
var gender = prompt("cinsinizi daxil edin: 1.Kisi  2.Qadin 3.diger");
var password = prompt("parolunuzu daxil edin");
var d1 = new Date(birthday);
var d2 = new Date();
var difference = d2.getFullYear() - d1.getFullYear();
function diff() {
    if (difference > 14) {
        return true;
    }
    else {
        return false;
    }
}
var obj = {
    name: username,
    surname: lastname,
    age: difference,
    isEligible: diff()
};
console.log(obj);
