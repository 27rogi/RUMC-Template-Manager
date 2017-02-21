/*
@  Система шаблонов 1.1 (версия от 21 февраля 2017 года) от sdir01
@  Код содержит много говнокода и прочей фигни, если вы хотите помочь я буду не против.
@  Копирование кода запрещено, шутка, кому он вообще нафиг нужен :D
  */

window.onload = function() {

    /*
  @  Настройки скрипта
    */
    var FullPostContainer = $('#full_post'); // Контейнер с полной новостью
    var ButtonID = 'button'; // Айди кнопки которая будет устанавливать шаблон
    var SelectionID = '#category'; // Айди выпадающего списка
    var InstallTemplate = 'Установить шаблон'; // Если шаблон найден
    var NoTemplate = 'Шаблон не найден'; // Если шаблон отсутствует
    /* Получаем кнопку используя её id */
    var getButton = $('#' + ButtonID);

    /*
    Отключаем кнопку и устанавливаем значение из NoTemplate
    */
    getButton.text(NoTemplate);
    getButton.attr("disabled", true);

    /*
    Система тегов которая будет заменять все специальные теги в шаблоне
    */
    function replaceTags(stringToReplace) {
        return stringToReplace
            /* Заменяем тег {name} на текст из поля 'xf_name' */
            .replace("{name}", $('#xf_name').val());

    }

    function GetCategoryValueID() {
        /* Возвращаем id категории */
        return $(SelectionID).val();
    }

    function getTemplate(templateID) {
        switch (templateID) {
            // Получаем шаблон для выбранной категории
            case "1": // Первая категория (Моды)
                return "Привет, сегодня вы будете смотреть на шаблон категории моды!\nСегодня мы рассмотрим мод {name} который поможет нам в игре!"; // Шаблон который будет применен
            case "3": // Первая категория (Что-то)
                return "А тут должно быть что-то но его нету!\nЭто что-то называют {name}, прикольно, да?!"; // Шаблон который будет применен
            default:
                return null;
        }
    }

    function ApplyTemplate() {
        if (getTemplate(GetCategoryValueID()) !== null) {
            FullPostContainer.val(replaceTags(getTemplate(GetCategoryValueID())));
        }
    }

    // Чекаем наличие шаблона для этой категории
    $(document).on('change', SelectionID, function() {
        if (getTemplate(GetCategoryValueID()) === null) {
            getButton.attr("disabled", true);
            getButton.text(NoTemplate);
        } else {
            getButton.removeAttr("disabled");
            getButton.text(InstallTemplate);
        }
    });

    /*
    Если пользователь нажмет на кнопку то выполняем метод ApplyTemplate()
    */
    getButton.click(function() {
        ApplyTemplate();
    });
};
