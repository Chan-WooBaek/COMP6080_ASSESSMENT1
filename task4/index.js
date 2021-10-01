let fname = document.signup.firstname;
let lname = document.signup.lastname;
let dob = document.signup.dateofbirth;
let fav = document.signup.favouriteanimal.value;
let ade = '';
let per = '';
let hob = '';
let dar = '';

function valid() {
    if (fname.value.length < 3 || fname.value.length > 50) document.signup.textarea.value = "Do not enter an invalid firstname";
    else if (lname.value.length < 3 || lname.value.length > 50) document.signup.textarea.value = "Do not enter an invalid lastname";
    else if (!dob.value.match("[0-9]{2}/[0-9]{2}/[0-9]{4}")) document.signup.textarea.value = "Do not enter an invalid date of birth";
    else {
        const arr = dob.value.split("/");
        var age = Math.floor((Date.now() - Date.parse(arr[2]+"-"+arr[1]+"-"+arr[0])) / (1000 * 60 * 60 * 24 * 365));
        document.signup.textarea.value =  "Hello " + fname.value + " " + lname.value + ", you are " + age + " years old, your favourite cheese is " + fav + " and you've lived in " + printcities() + "."
    }
}

function printcities() {
    let all = ade + per + hob + dar;
    if (all == '') return 'no cities';
    return all.substring(0, all.length - 2);
}

valid();
fname.addEventListener('blur', (event) => {
    valid();
})
document.signup.lastname.addEventListener('blur', (event) => {
    valid();  
})
document.signup.dateofbirth.addEventListener('blur', (event) => {
    valid();
})
document.signup.favouriteanimal.addEventListener('change', (event) => {
    valid();
})
document.signup.adelaide.addEventListener('change', (event) => {
    if(document.signup.adelaide.checked) ade = 'Adelide, ';
    else ade = '';
    valid();
})
document.signup.perth.addEventListener('change', (event) => {
    if(document.signup.perth.checked) per = 'Perth, ';
    else per = '';
    valid();
})
document.signup.hobart.addEventListener('change', (event) => {
    if(document.signup.hobart.checked) hob = 'Hobart, ';
    else hob = '';
    valid();
})
document.signup.darwin.addEventListener('change', (event) => {
    if(document.signup.darwin.checked) dar = 'Darwin, ';
    else dar = '';
    valid();
})
document.signup.remove.addEventListener('click', (event) => {
    document.signup.textarea.value = ''
})
