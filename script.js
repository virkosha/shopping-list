/* Новые элементы должны добавляться в список по нажатию на Enter */

// создаю переменную, которая будет содержать в себе информацию ввводимую пользователем 
const pointInput = document.querySelector('input');
// добавляем обработчик события на 
pointInput.addEventListener('keydown', function(event) {

    // проверка какая клавиша была нажата с клавиатуры, если Enter, то выполняем действия function
    if (event.key == 'Enter') {
        // создаю новый элемент
        const point = document.createElement('div');

        const pointText = point.value;
        point.textContent = pointText;

        point.addEventListener('click', function() {
            point.classList.toogle('done');
        })

        // проверка на наличие текста в input, чтобы не выводить пустой пункт списка
        if (pointText != '') {

            // вставляю новый пункт списка в список, объявив в переменную обертку-контейнер
            const list = document.querySelector('.items');
            list.appent('point');
        }

    }
    point.value = '';

});







/* Пустые элементы не должны добавляться */

/* Если кликнуть на элемент списка, он зачеркивается */

/* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */

/* Очищать input после добавления нового элемента в список */