
// 1. Хувьсагч, төрөл, хөрвүүлэлт
let studentName = "Оюутан";
let age = 20;
let isStudent = true;

console.table([
    {name: "studentName", value: studentName, type: typeof studentName},
    {name: "age", value: age, type: typeof age},
    {name: "isStudent", value: isStudent, type: typeof isStudent}
]);

console.log("typeof age:", typeof age);
console.log("String(123):", String(123));
console.log("Number('25'):", Number("25"));
console.log("0.1 + 0.2 =", 0.1 + 0.2);

// 2. Алгоритмын функцуудыг турших
console.table([
    {function: "sumTo", result: sumTo(5)},
    {function: "factorial", result: factorial(5)},
    {function: "isPrime", result: isPrime(7)},
    {function: "countVowels", result: countVowels("Сайн")},
    {function: "isPalindrome", result: isPalindrome("level")},
    {function: "maxOf", result: maxOf([3, 8, 2])},
    {function: "digitSum", result: digitSum(1234)}
]);

console.log("fizzBuzz(15):", fizzBuzz(15));

// 3. HTML формыг JavaScript-тэй холбох
const form = document.getElementById("feedbackForm");

const fields = [
    {id: "name", validator: validateName},
    {id: "email", validator: validateEmail},
    {id: "password", validator: validatePassword},
    {id: "message", validator: validateMessage}
];

function checkField(field) {
    const input = document.getElementById(field.id);
    const error = document.getElementById(field.id + "Error");

    const message = field.validator(input.value);

    error.textContent = message;
    input.classList.toggle("invalid", message !== "");
    input.setAttribute("aria-invalid", String(message !== ""));

    return message === "";
}

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let valid = true;
    let firstInvalid = null;

    for (let i = 0; i < fields.length; i++) {
        const isValid = checkField(fields[i]);

        if (!isValid) {
            valid = false;
            if (!firstInvalid) {
                firstInvalid = document.getElementById(fields[i].id);
            }
        }
    }

    const result = document.getElementById("result");

    if (valid) {
        result.textContent = "Санал хүсэлтийн мэдээлэл зөв бөглөгдлөө!";
    } else {
        result.textContent = "";
        if (firstInvalid) firstInvalid.focus();
    }
});

// Хэрэглэгч утга өөрчлөхөд дахин шалгах
fields.forEach(function(field) {
    const input = document.getElementById(field.id);

    input.addEventListener("input", function() {
        checkField(field);
        document.getElementById("result").textContent = "";
    });
});

// Цэвэрлэх товч
form.addEventListener("reset", function() {
    fields.forEach(function(field) {
        const input = document.getElementById(field.id);
        const error = document.getElementById(field.id + "Error");

        input.classList.remove("invalid");
        input.setAttribute("aria-invalid", "false");
        error.textContent = "";
    });

    document.getElementById("result").textContent = "";
});
