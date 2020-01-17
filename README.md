---
description: First app run
---

# Getting started

Welcome to the 2nd most important Wine's project. If you're reading this, you have been invited to something big. Be happy!

```typescript
declare interface Documents {
    documentType: 'CPF' | 'CNPJ'
    value: string
}
declare interface Person {
    name?: string
    age?: number
    documents: Documents[]
}
```

{% hint style="info" %}
If you want to execute this code, please change the default `App` export at the `router.ts` file
{% endhint %}

We're taking care of this:

* [x] Move everything to TS
* [x] Change the software architecture
* [ ] Publish the V2

{% api-method method="get" host="https://api.wine.com.br" path="/v1/winelists" %}
{% api-method-summary %}
Get all Winelists
{% endapi-method-summary %}

{% api-method-description %}
It will return all _Winelists_ with the default pagination controller
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="" type="string" required=false %}

{% endapi-method-parameter %}
{% endapi-method-path-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```

```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

