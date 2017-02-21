/*
@  Система шаблонов 1.2 (версия от 22 февраля 2017 года) от sdir01
@  Код содержит много говнокода и прочей фигни, если вы хотите помочь я буду не против.
@  Копирование кода запрещено, шутка, кому он вообще нафиг нужен :D
  */

window.onload = function() {

    /*
  @  Настройки скрипта
    */
    var FullPostContainer = $('#full_post'); // Контейнер с полной новостью
    var MiniPostContainer = $('#short_story'); // Контейнер с краткой новостью
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

    function getSelectionValue() {
        /* Возвращаем id категории */
        return $(SelectionID).val();
    }

    function getTemplate(templateID) {
        var TemplateStructure = null;
        switch (templateID) {
            // Получаем шаблон для выбранной категории
            case "1": // Первая категория (Моды)
                TemplateStructure = [
                    "Скушайте еще этих великолепных печений, {name}", // Шаблон для полной новости
                    "Попейте вкусного чаю с ароматом ягод, {name}" // Шаблон для краткой новости
                ];
                break;
            default:
                return null;
        }
        return TemplateStructure; // Возвращаем шаблоны краткой и полной новости
    }

    function ApplyTemplate() {
        if (getTemplate(getSelectionValue()) !== null) {
            if (getTemplate(getSelectionValue())[0] !== null) {
                FullPostContainer.val(replaceTags(getTemplate(getSelectionValue())[0]));
            }
            if (getTemplate(getSelectionValue())[1] !== null) {
                MiniPostContainer.val(replaceTags(getTemplate(getSelectionValue())[1]));
            }
        }
    }

    /* Чекаем наличие шаблона для этой категории */
    $(document).on('change', SelectionID, function() {
        if (getTemplate(getSelectionValue()) === null) {
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
