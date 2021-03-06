# Контекст

## Общее описание

Контекст это js объект, который соединяет (работает как мост) API ЯЭксперт с презентацией.

Контекст создается автоматически в момент запуска презентации, для его подключения никаких дополнительных действий со стороны разработчиков контента не требуется.
Контент, в зависимости от  того в какой роли он задействован в логике приложения, в каком разделе запускается, частью чего он является, при запуске может иметь окружение содержащее модули моста, данные, методы касающиеся определенной предметной области и обеспечивающие необходимое взаимодействие нативного кода и логики контента.

## Контекст квеста

На стороне контента контекст представляет из себя объект **window.story**.
Контекст, в зависимости от роли контента, может быть разный.
При запуске контента для квеста объект window.story имеет следующую структуру:

* **app** - readonly. Объект описывает девайс и приложение:
  * `deviceId`
  * `model`
  * `name` - наименование приложения
  * `os` - Android | iOS
  * `osVersion`
  * `timeZone` - number
  * `version` - версия приложения
* **content** - readonly. Объект описывает запущенную презентацию;
  * `id`
  * `name`
  * `revision`
  * `shortDescription`
* **license** - readonly. Объект описывает пользователя приложения;
  * `id`
  * `name`
  * `phone`
  * `email`
* **quest** - readonly. Объект описывает квест;
  * `id` - идентификатор квеста
  * `stages` - объект. Коллекция этапов квеста
* **questProgress** - readonly. Объект описывает состояние прохождения квеста;
  * `campaign` - объект. Кампания квеста
  * `questEvents` - объект. Коллекция событий квеста
  * `stage` - объект. Текущий этап квеста
  * `status` - текущий статус квеста
* **licenseAttributes** - атрибуты пользователя;
* **campaignAttributes** - атрибуты кампании;
* **questAttributes** - атрибуты квеста.
* **questProgressAttributes** - атрибуты состояния прохождения квеста.

Атрибуты – отдельный вид объектов, см. описание в [разделе атрибутов](../attributes/README.md).
