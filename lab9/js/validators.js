
// 1. Нэр шалгах
function validateName(value) {
    value = value.trim();

    if (value.length < 2 || value.length > 50) {
        return "Нэр 2-50 тэмдэгттэй байх ёстой.";
    }

    if (/[0-9]/.test(value)) {
        return "Нэр тоо агуулж болохгүй.";
    }

    return "";
}

// 2. Имэйл шалгах
function validateEmail(value) {
    if (value === "" || /\s/.test(value)) {
        return "Имэйл хоосон эсвэл зайтай байж болохгүй.";
    }

    const regex = /^[^\s@]+@[^\s@.]+\.[^\s@.]+$/;

    if (!regex.test(value)) {
        return "Имэйл example@gmail.com хэлбэртэй байх ёстой.";
    }

    return "";
}

// 3. Нууц үг шалгах
function validatePassword(value) {
    if (value.length < 8) {
        return "Нууц үг дор хаяж 8 тэмдэгттэй байх ёстой.";
    }

    if (/\s/.test(value)) {
        return "Нууц үг зай агуулж болохгүй.";
    }

    if (!/[A-Za-zА-Яа-яЁёӨөҮү]/.test(value)) {
        return "Нууц үг үсэг агуулсан байх ёстой.";
    }

    if (!/[0-9]/.test(value)) {
        return "Нууц үг тоо агуулсан байх ёстой.";
    }

    return "";
}

// 4. Санал хүсэлт шалгах
function validateMessage(value) {
    value = value.trim();

    if (value.length < 10 || value.length > 500) {
        return "Санал хүсэлт 10-500 тэмдэгттэй байх ёстой.";
    }

    return "";
}
