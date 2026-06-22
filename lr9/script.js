// Функция, демонстрирующая работу всех операторов
function runOperatorDemo() {
    console.log("--- Начало демонстрации операторов ---");

    // 1. Оператор return (используется внутри функции)
    // 2. Условный оператор if
    let age = 20;
    if (age >= 18) {
        console.log("Оператор if: Доступ разрешен");
    } else {
        console.log("Оператор else: Доступ запрещен");
    }

    // 3. Оператор выбора switch
    let day = 2;
    switch (day) {
        case 1: console.log("Switch: Понедельник"); break;
        case 2: console.log("Switch: Вторник"); break; // Сработает это
        default: console.log("Switch: Другой день");
    }

    // 4. Цикл for + continue
    console.log("Цикл for (пропускаем число 2):");
    for (let i = 1; i <= 3; i++) {
        if (i === 2) continue; // 5. Оператор continue
        console.log("Число: " + i);
    }

    // 6. Цикл while + break
    console.log("Цикл while (прерываем на числе 2):");
    let count = 1;
    while (count < 10) {
        if (count === 3) break; // 7. Оператор break
        console.log("Счетчик: " + count);
        count++;
    }

    // 8. Цикл do..while
    let j = 0;
    do {
        console.log("Цикл do..while сработал 1 раз");
        j++;
    } while (j < 1);

    alert("Операторы выполнены! Результаты в консоли (F12).");
    
    return "Демонстрация завершена"; // Возврат значения
}