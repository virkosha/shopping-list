/* Новые элементы должны добавляться в список по нажатию на Enter */
// создаю переменную списка и ищу ее в доме
const list = document.querySelector('.groceries');
// создаю переменную пункта списка и ищу ее в доме
const pointList = document.querySelector('.input-wrapper');
// создаю переменную, которая будет содержать в себе информацию ввводимую пользователем 
const pointNew = document.querySelector('input');
// добавляем обработчик события на 
list.addEventListener('keydown', function(event) {

    // проверка какая клавиша была нажата с клавиатуры, если Enter, то выполняем действия function
    if (event.key == Enter) {
        // создаю новый элемент
        const pointListNew = document.createElement('div');
        // добавляю ему класс
        pointListNew.classList.add(input - wrapper);
        // создаю новому div input, куда пользоваель будет вводить текст списка
        document.createElement('input');
        // вставляю input внутрь нового div, будущего пункта списка
        pointListNew.append(pointNew);
        // создаю переменную, которая хранит текст, который ввел пользователь
        const pointText = pointNew.value;
        newPoint.textContent = pointText;

        // проверка на наличие текста в input, чтобы не выводить пустой пункт списка
        if (pointText != ' ') {
            // вставляю новый пункт списка (иконка + текст пункта) в список
            list.appent('pointList');
        }

    }
    // очистка input после добавления нового пункта списка
    point.value = '';



});

// вешаю обработчик на клик, который будет навешивать/убирать класс - свойство зачеркивание
pointList.addEventListener('click', function() {
    pointList.classList.toggle(input - wrapper);
})





/* Пустые элементы не должны добавляться */

/* Если кликнуть на элемент списка, он зачеркивается */

/* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */

/* Очищать input после добавления нового элемента в список */