window.onload = function() {

    /*
    Система шаблонов 1.0 от sdir01
    Код может содержать ошибки и иметь погрешности.
    Копирование кода запрещено, шутка, кому он вообще нафиг нужен :D
    */

    //###################//
    // Настройки скрипта //
    //###################//
    var FullPostContainer = $('#full_post'); // Контейнер с полной новостью
    var ButtonID = 'button'; // Айди кнопки которая будет устанавливать шаблон
    var SelectionID = '#category'; // Айди выпадающего списка
    var InstallTemplate = "Установить шаблон"; // Если шаблон найден
    var NoTemplate = "Шаблон не найден"; // Если шаблон отсутствует

    //########//
    // Функции //
    //########//
    function GetCategoryValueID() {
        // Возвращаем id категории
        return $(SelectionID).val();
    }

    function getTemplate(templateID) {
      switch (templateID) {
        // Получаем шаблон для выбранной категории
        case "1": // Первая категория (Моды)
          return "Здесь мог быть ваш текст\n\n\nКруто да? Я тоже так думаю."; // Шаблон который будет применен
        break;
        default:
          return null;
      }
    }

    function ApplyTemplate() {
        if(getTemplate(GetCategoryValueID()) != null) {
          FullPostContainer.val(getTemplate(GetCategoryValueID()));
        }
    }

    //####################//
    // Рабочая часть скрипта //
    //###################//
    // Основной код скрипта
    document.getElementById(ButtonID).disabled = true;

    // Чекаем наличие шаблона для этой категории
    $(document).on('change',SelectionID,function(){
      if (getTemplate(GetCategoryValueID()) == null) {
        document.getElementById(ButtonID).disabled = true;
        $('#'+ButtonID).text(NoTemplate);
      } else {
        document.getElementById(ButtonID).disabled = false;
        $('#'+ButtonID).text(InstallTemplate);
      }
    });

  // Проверяем если кликнули на кнопку, если да то ставим шаблон
  document.getElementById(ButtonID).onclick = function() { ApplyTemplate() };
};
