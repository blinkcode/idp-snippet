# IDP 代码提示

 ![image](https://raw.githubusercontent.com/popingblink/idp-snippet/master/assets/idp.logo.jpg)


IDP采用原生js, 对于已经用惯了TypeScript开发的来说，没有代码提示需要查阅大量文档和源码，对开发不是很友好。
所以，所以这套代码提示应运而生。
## 特性

- 该提示目前能涵盖开发过程中使用的大部分变量和方法， 实现代码的快速编写

![image](https://raw.githubusercontent.com/popingblink/idp-snippet/master/assets/snippets.gif)

> 如果你想更快，我还提供了IDP的声明文件，更敏捷的开发，从此不再查询文档! [idp声明文件](https://baidu.com);

## 不足
- 本提示中只会包含常用变量和方法，可能会存在遗漏，如果您发现有需要添加的，请帮我提交PR
- IDP在源码书写中无法判断是内部使用方法，还是对外暴露的方法，有些内部方法可能也会被暴露出来，
    本提示不对方法是否有效负责。如有疑问请联系IDP的开发人员。如确定为内部方法，也可为我提交PR，联系我删除即可

## 说明

> idp所有代码提示都是以idp开头进行解析的


| 代码片段                      | 使用效果                                                              |
| ---------------------------- | -------------------------------------------------------------------- |
| `idpdomready`                | domready                                                             |
| `idpviewready`               | viewready                                       |
| `a-component-root`           | root app component                                                   |
| `a-ctor-skip-self`           | angular `NgModule`'s `skipself` constructor                          |
| `a-directive`                | directive                                                            |
| `a-guard-can-activate`       | `CanActivate` guard                                                  |
| `a-guard-can-activate-child` | `CanActivateChild` guard                                             |
| `a-guard-can-deactivate`     | `CanDeactivate` guard                                                |
| `a-guard-can-load`           | `CanLoad` guard                                                      |
| `a-httpclient-get`           | `httpClient.get` with Rx Observable                                  |
| `a-http-interceptor`         | Empty Angular `HttpInterceptor` for `HttpClient`                     |
| `a-http-interceptor-headers` | Angular `HttpInterceptor` that sets headers for `HttpClient`         |
| `a-http-interceptor-logging` | Angular `HttpInterceptor` that logs traffic for `HttpClient`         |
| `a-module`                   | module                                                               |
| `a-module-root`              | root app module                                                      |
| `a-output-event`             | `@Output` event and emitter                                          |
| `a-pipe`                     | pipe                                                                 |
| `a-preload-opt-in-strategy`  | custom preload strategy that allows choosing which routes to preload |
| `a-preload-network-strategy` | custom preload strategy that preloads based on network connectivity  |
| `a-resolver`                 | resolver                                                             |
| `a-routes`                   | Route definition file                                                |
| `a-rxjs-import`              | import RxJs features                                                 |
| `a-rxjs-operators`           | import RxJs operators                                                |
| `a-route-path-404`           | 404 route path                                                       |
| `a-route-path-default`       | default route path                                                   |
| `a-route-path-with-children` | route path with children                                             |
| `a-route-path-eager`         | eager route path                                                     |
| `a-route-path-lazy`          | lazy route path                                                      |
| `a-router-events`            | listen to one or more router events                                  |
| `a-route-params-subscribe`   | subscribe to route parameters                                        |
| `a-service`                  | service with injectable provided in root                             |
| `a-service-httpclient`       | service with `HttpClient`                                            |
| `a-subscribe`                | Rx Observable subscription                                           |
| `a-trackby`                  | to create a trackby function in TypeScript for the `ngFor`           |
