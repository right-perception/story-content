
# Quest Actions

## Команды работы с квестом

### Событие квеста

**Описание:**

Добавляет событие квеста. Доступен перевод статуса квеста, перевод квеста на другой этап.

`window.story.questProgress.transfer(model)`

 **Параметры:**

* **status*** - `enum`. Accept | Action | Success | Fail | Decline | Reject;
* **title*** - `string`;
* **message** - `string`;
* **value** - `string`;
* **goal** - `boolean`;
* **stageId** - `string`;
* **PointsTransfer** - `object`. Модель из запроса "Перевод баллов".

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

### Перевод баллов

**Описание:**

Начисляет баллы от кампании пользователю и обратно.

`window.story.questProgress.transferPoints(model)`

 **Параметры:**

* **operationType*** - `enum`. Accepted | Reserved | Canceled | PartialAccepted | Reject | Approved | Review;
* **direction*** - `enum`. Forward | Backward;
* **title*** - `string`;
* **message** - `string`;
* **value*** - `number`.

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

### Кампания

**Описание:**

Добавляет пользователя в кампанию по идентификатору.

`window.story.questProgress.grantCampaign(model)`

 **Параметры:**

* **campaignId*** - `string`.

**Запрос:**

```js
story.questProgress.grantCampaign({
    campaignId: "dbd24451.8020f915-cd52-412b-99f6-8fbd3c9936ec"
});
```
