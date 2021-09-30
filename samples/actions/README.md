# Контекст

## Общее описание

Контент, в зависимости от  того в какой роли он задействован в логике приложения, в каком разделе запускается, частью чего он является, при запуске может иметь окружение содержащее модули моста, данные, методы касающиеся определенной предметной области и обеспечивающие необходимое взаимодействие нативного кода и логики контента.

## Контекст квеста

На стороне контента контекст представляет из себя объект **window.story**.
Контекст, в зависимости от роли контента, может быть разный.
При запуске контента для квеста объект window.story имеет следующую структуру:

* **app** - readonly. Объект описывает девайс и приложение;
* **content** - readonly. Объект описывает запущенную презентацию;
* **licence** - readonly. Объект описывает пользователя приложения;
* **questProgress** - readonly. Объект описывает квест и состояние прохождения;
* **licenceAttributes**. Атрибуты пользователя;
* **questProgressAttributes**. Атрибуты состояния прохождения квеста.

## Атрибуты

Атрибуты прикрепляются к различным сущностям - презентации, пользователи, процессы, квесты и т.д., и расширяют эти сущности добавляя поля “на лету”.
На стороне клиента атрибуты представляют собой объект - часть конекста.
Поддерживаются 2 способа изменения атрибутов - прямое изменение полей объекта и вызов метода, инициирующего изменения.
В атрибутах доступны следующие типы:

* **number**: +-Infinite и NaN не поддерживаются;
* **string**;
* **boolean**;
* **null**: отсутствие значения;
* **object**:  на стороне сервера атрибуты имеют иерархичную структуру, object рассматривается как корень для вложенных атрибутов.

Коллекции (массивы) не поддерживаются. Для реализации коллекции можно использовать объект с произвольными перечисляемыми ключами.

### Варианты работы

#### Изменение полей объекта

При прямом изменении полей контекста, изменения применяются сразу, например код

`window.story.licenceAttributes.loginCount = 5`

сразу после вызова устанавливает поле контекста `loginCount` в 5. Реальные изменения и применение значения на сервере будут выполнены позже.

#### window.story.SetStory()

При вызове метода установки контекста `window.story.SetStory.
Первым параметром указывается набор ключей объектов, требующих изменения (частичный новый объект). Например, код

```js
window.story.setStory({
    licenceAttributes: {
        loginAttempts: {
            success: 3
        }
    },
    questProgressAttributes: {
        lastRetry: 'tomorrow'
    },

})
```

вызовет изменения полей

`story.licenceAttributes.loginAttempts.success = 3`

 и

`story.questProgressAttributes.lastRetry = 'tomorrow'`

### Команды работы с квестом

#### Событие квеста

**Описание:**

Добавляет событие квеста. Доступен перевод статуса квеста, перевод квеста на другой этап.

`window.story.questProgress.transfer(model)`

 **Параметры:**

* `status`*: `enum`. Accept | Action | Success | Fail | Decline | Reject;
* `title`*: `string`;
* `message`: `string`;
* `value`: `string`;
* `goal`: `boolean`;
* `stageId`: `string`;
* `PointsTransfer`: `object`. Модель из запроса "Перевод баллов".

**Запрос:**

```js
story.questProgress.transfer({
    title: "transfer title 1",
    message: "transfer message 1",
    status: "Action",
    value: "transfer value 1",
    goal: true
});
```

#### Перевод баллов

**Описание:**

Начисляет баллы от кампании пользователю и обратно.

`window.story.questProgress.transferPoints(model)`

 **Параметры:**

* `operationType`*: `enum`. Accepted | Reserved | Canceled | PartialAccepted | Reject | Approved | Review;
* `direction`*: `enum`. Forward | Backward;
* `title`*: `string`;
* `message`: `string`;
* `value`*: `number`.

**Запрос:**

```js
story.questProgress.transferPoints({
        operationType: "Accepted",
        direction: "Forward",
        title: "transfer points title 2",
        message: "transfer points message 2",
        value: 10
});
```

#### Кампания

**Описание:**

Добавляет пользователя в кампанию по идентификатору.

`window.story.questProgress.grantCampaign(model)`

 **Параметры:**

* `campaignId`*: `string`.

**Запрос:**

```js
story.questProgress.grantCampaign({
    campaignId: "dbd24451.8020f915-cd52-412b-99f6-8fbd3c9936ec"
});
```
