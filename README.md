[![Stories in Ready](https://badge.waffle.io/zoxon/gulp-front.png?label=ready&title=Ready)](https://waffle.io/zoxon/gulp-front)
# Gulp Front

Простой путь разработки с Jade и Stylus



##Структура проекта

* assets — Содержимое копируется в папку *public*. Здесь хранятся статичные файлы.
* psd — Предназначена для хранения макетов дизайна.
* public — Корень сервера. Все сгенерированные файлы складываются сюда.
* source — Исходный код для препроцессоров.
* source
  * blocks — Миксины и чанки jade
  * css — Stylus файлы
  * img — Картинки. Обрабатываются imgaemin
  * js/plugins — JQuery плагины
  * js/plugins.js — Точка сборки плагинов



##Установка

1. Нужно установить gulp глобально один раз
  ```
  npm install -g gulp
  ```
2. Перейти в папку проекта
  ```
  cd gulp-front
  ```
3. Установить зависимости
  ```
  npm install
  ```


##Запуск

1. Перейти в папку проекта
  ```
  cd gulp-front
  ```
2. Запуситить таск менеджер
  ```
  gulp
  ```
3. Открыть в браузере
  Cервер запустится на [http://localhost:3000/](http://localhost:3000/)


##Лицензия
[The MIT license](LICENSE)
