
// 1. 1-ээс n хүртэлх тооны нийлбэр
function sumTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

// 2. Факториал
function factorial(n) {
    if (n < 0 || !Number.isInteger(n)) return null;

    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

// 3. Анхны тоо эсэхийг шалгах
function isPrime(n) {
    if (!Number.isInteger(n) || n < 2) return false;

    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}

// 4. FizzBuzz
function fizzBuzz(n) {
    let result = [];

    for (let i = 1; i <= n; i++) {
        if (i % 15 === 0) {
            result.push("FizzBuzz");
        } else if (i % 3 === 0) {
            result.push("Fizz");
        } else if (i % 5 === 0) {
            result.push("Buzz");
        } else {
            result.push(i);
        }
    }

    return result;
}

// 5. Эгшгийн тоог олох
function countVowels(text) {
    let count = 0;
    const vowels = "аэиоуөүыaeiou";

    text = text.toLowerCase();

    for (let i = 0; i < text.length; i++) {
        for (let j = 0; j < vowels.length; j++) {
            if (text[i] === vowels[j]) {
                count++;
                break;
            }
        }
    }

    return count;
}

// 6. Палиндром эсэх
function isPalindrome(text) {
    text = text.toLowerCase();
    let cleaned = "";

    for (let i = 0; i < text.length; i++) {
        if (text[i] !== " ") {
            cleaned += text[i];
        }
    }

    let left = 0;
    let right = cleaned.length - 1;

    while (left < right) {
        if (cleaned[left] !== cleaned[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
}

// 7. Хамгийн их тоог олох
function maxOf(numbers) {
    if (numbers.length === 0) return null;

    let max = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }

    return max;
}

// 8. Тооны цифрүүдийн нийлбэр
function digitSum(n) {
    if (!Number.isInteger(n) || !Number.isSafeInteger(n)) {
        return null;
    }

    if (n < 0) n = -n;

    let sum = 0;

    while (n > 0) {
        sum += n % 10;
        n = (n - n % 10) / 10;
    }

    return sum;
}
