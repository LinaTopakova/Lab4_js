function ask_password(login, password, success, failure) {
    login = login.toLowerCase();
    password = password.toLowerCase();

    const vowels = "aeiouy";

    const login_consonants = Array.from(login).filter(char => !vowels.includes(char)).join("");
    const password_vowels = Array.from(password).filter(char => vowels.includes(char));
    const password_consonants = Array.from(password).filter(char => !vowels.includes(char)).join("");

    if (password_vowels.length !== 3) {
        if (login_consonants !== password_consonants) {
            failure(login, "Everything is wrong");
        } else {
            failure(login, "Wrong number of vowels");
        }
    } else if (login_consonants !== password_consonants) {
        failure(login, "Wrong consonants");
    } else {
        success(login);
    }
}

function main(login, password) {
    function success(login) {
        console.log(`Привет, ${login}!`);
    }

    function failure(login, error_message) {
        console.log(`Кто-то пытался притвориться пользователем ${login}, но в пароле допустил ошибку: ${error_message.toUpperCase()}.`);
    }

    ask_password(login, password, success, failure);
}

main("login", "aaalgn");
main("login", "wrong");
main("login", "aaaaaa");
main("login", "lllllll");
main("login", "aaalgg");
main("login", "aaaggf");

