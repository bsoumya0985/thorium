//Module 3

function trim() {
    let name = '  Soumyadeep Das   '
    console.log('Trimmed name is: ',name.trim())
}

function changetoLowerCase() {
    let name = 'SouMYAdeeP dAs'
    console.log('Name in lowercase is: ',name.toLowerCase())
}

function changeToUpperCase() {
    let name = 'soumyadeep das'
    console.log('Name in uppercase is: ',name.toUpperCase())
}

 module.exports.trim = trim
module.exports.changetoLowerCase = changetoLowerCase
module.exports.changeToUpperCase = changeToUpperCase