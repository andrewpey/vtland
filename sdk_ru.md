---
layout: default
header: SDK
wrapper: faq-ru
---

## Загрузки

### Загрузить для [Windows](https://github.com/andrewpey/vtland/releases/download/test/VoxelTycoonSDK.zip)
### Загрузить для [macOS](https://github.com/andrewpey/vtland/releases/download/test/VoxelTycoonSDK_Mac.zip)

## Как этим пользоваться?

Рисуем модель в любимом 3D-редакторе. Для нас это Blender ❤

![](/assets/sdk/1.png)

 Выбираем нашу модель, чтобы не экспортировать ничего лишнего. Открываем окно экспорта в формате `OBJ`:

![](/assets/sdk/2.png)

Ставим галочку `Selection only`. Называем файл, например, `MyModel.obj` и сохраняем его в папку `VoxelTycoonSDK/Buldings` (если это здание) или `VoxelTycoonSDK/Trains` (если это локомотив или вагон):

![](/assets/sdk/3.png)

Открываем утилиту, выбираем тип модели в соответствии с именем папки, в которую мы положили нашу модель (`Buildings` или `Trains`) и выбираем нашу модель из списка:

![](/assets/sdk/4.png)

В этот момент рядом с нашим файлом `MyModel.obj` появится файл с палитрой `MyModel.png`, который мы будем использовать для раскраски модели:

![](/assets/sdk/4-1.png)

Возвращаемся в 3D-редактор и переходим в режим редактирования UV:

![](/assets/sdk/5.png)

Открываем файл с палитрой `MyModel.png`, который лежит в папке `VoxelTycoonSDK/Buildings` или `VoxelTycoondSDK/Trains` рядом с нашим `MyModel.obj`:

![](/assets/sdk/6.png)

![](/assets/sdk/7.png)

![](/assets/sdk/8.png)

Делаем развертку, используя цвета из палитры. Сейчас нам надо просто раскидать UV вершин по цветам в палитре, а сами цвета мы потом подберем в утилите.

![](/assets/sdk/9.png)

Еще раз экспортируем модель в `OBJ` и перезаписываем файл `MyModel.obj`.

Возвращаемся в утилиту. Кликаем по очереди на участки модели, которым мы назначили разные цвета, и выбираем для них нужный цвет в правом нижнем углу:

![](/assets/sdk/10.png)

Выкладываем скриншоты в [паблике](http://vk.com/voxeltycoon) и делимся тем, что получилось :D