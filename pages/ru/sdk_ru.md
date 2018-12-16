---
title: SDK // VOXEL TYCOON
header: SDK
layout: default
permalink: /sdk/ru
redirect_from:
    - /sdk_ru
---

> This is legacy SDK page. The actual one can be found [here](/sdk).

## Что это?

Инструмент для предпросмотра создаваемого контента (поездов, домиков или, например, деревьев) прямо в игровом мире, с возможностью настройки цветов.

{% include img.html src="/assets/sdk/preview.gif" %}

## Загрузки

### Загрузить для [Windows](https://github.com/andrewpey/vtland/releases/download/test/VoxelTycoonSDK.zip)
### Загрузить для [macOS](https://github.com/andrewpey/vtland/releases/download/test/VoxelTycoonSDK_Mac.zip)

## Как этим пользоваться?

Рисуем модель в любимом 3D-редакторе. Для нас это Blender ❤

Ориентироваться можно на модели, которые идут в комплекте с утилитой.

{% include img.html src="/assets/sdk/1.png" %}

 После того, как модель готова, выделяем ее, чтобы не экспортировать ничего лишнего. Открываем окно экспорта в формате `OBJ`:

{% include img.html src="/assets/sdk/2.png" %}

Проверяем, что стоят галочки `Selection only`, `Include UVs` и `Triangulate Faces`:

{% include img.html src="/assets/sdk/2-1.png" %}

Называем файл, например, `MyModel.obj` и сохраняем его в папку `VoxelTycoonSDK/Trains` (если это локомотив или вагон) или `VoxelTycoonSDK/Buldings` (для всего остального — зданий, деревьев и тд):

{% include img.html src="/assets/sdk/3.png" %}

Открываем утилиту, выбираем тип модели в соответствии с именем папки, в которую мы положили нашу модель (`Buildings` или `Trains`) и выбираем нашу модель из списка:

{% include img.html src="/assets/sdk/4.png" %}

В этот момент рядом с нашим файлом `MyModel.obj` появится файл с палитрой `MyModel.png`, который мы будем использовать для подгтовки модели к раскраске:

{% include img.html src="/assets/sdk/4-1.png" %}

Возвращаемся в 3D-редактор и переходим в режим редактирования UV:

{% include img.html src="/assets/sdk/5.png" %}

Открываем файл с палитрой `MyModel.png`, который лежит в папке `VoxelTycoonSDK/Buildings` или `VoxelTycoondSDK/Trains` рядом с нашим `MyModel.obj`:

{% include img.html src="/assets/sdk/6.png" %}


{% include img.html src="/assets/sdk/7.png" %}

{% include img.html src="/assets/sdk/8.png" %}

Делаем развертку, используя цвета из палитры. Сейчас нам надо просто раскидать UV вершин по цветам в палитре, а сами цвета мы потом подберем в утилите.

{% include img.html src="/assets/sdk/9.png" %}

После того, как развертка готова, еще раз экспортируем модель в `OBJ` и перезаписываем файл `MyModel.obj`.

Возвращаемся в утилиту. Кликаем по очереди на участки модели, которым мы назначили разные цвета, и выбираем для них нужный цвет в правом нижнем углу:

{% include img.html src="/assets/sdk/10.png" %}

> **Совет** Вы можете копировать цвета из других частей модели, удерживая `ALT`.

Готово! Выкладывайте скриншоты в [паблике](http://vk.com/voxeltycoon) и делитесь тем, что получилось :D