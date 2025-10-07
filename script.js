const firstName = "Ryszard"
const lastName = "Brzęczyszczykiewicz"
let age = 30

// To jest moja pierwsza funkcja
function execute() {
    // alert("Boo")
    // console.log("Kliknąłeś w przycisk")
    logFirstAndLastName()
    logAge()
}

// wyświetl imię i nazwisko w konsoli.
function logFirstAndLastName() {
    // firstName = "Kasia" // <- nie zadziała do consta
    console.log(firstName + " " + lastName)
}

function increaseAge() {
    logFirstAndLastName()
    logAge()
    age = age + 1
    logAge()
}

function logAge() {
    console.log(age)
}

// execute()

