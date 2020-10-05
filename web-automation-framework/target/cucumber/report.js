$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("MiMovistar_FlujoRecargas.feature");
formatter.feature({
  "line": 1,
  "name": "Mi Movistar Flujo de Recargas",
  "description": "",
  "id": "mi-movistar-flujo-de-recargas",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 33,
  "name": "Recargas en Mi Movistar Completo MOVIL (Generando automáticamente Token URL)",
  "description": "",
  "id": "mi-movistar-flujo-de-recargas;recargas-en-mi-movistar-completo-movil-(generando-automáticamente-token-url)",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 32,
      "name": "@Test_3"
    },
    {
      "line": 32,
      "name": "@Regresion"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "se genera la URL mediante el API_TEST_recargas",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "se ingresa en la URL el token generado \"\u003ccaso_prueba\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "se ingresa el numero celular \"\u003ccaso_prueba\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "monto a recargar \"\u003ccaso_prueba\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "se da click en el boton Continuar",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "se ingresa el email \"\u003ccaso_prueba\u003e\" y se da click en continuar",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "se ingresa el numero de tarjeta \"\u003ccaso_prueba\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "se ingresa el mes de vencimiento \"\u003ccaso_prueba\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "se ingresa el anio de vencimiento \"\u003ccaso_prueba\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "se ingresa el codigo de verificacion \"\u003ccaso_prueba\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "se da click en el boton Pagar",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "se verifica que se hizo la recarga correcta.",
  "keyword": "Then "
});
formatter.examples({
  "line": 48,
  "name": "",
  "description": "",
  "id": "mi-movistar-flujo-de-recargas;recargas-en-mi-movistar-completo-movil-(generando-automáticamente-token-url);",
  "rows": [
    {
      "cells": [
        "caso_prueba"
      ],
      "line": 49,
      "id": "mi-movistar-flujo-de-recargas;recargas-en-mi-movistar-completo-movil-(generando-automáticamente-token-url);;1"
    },
    {
      "cells": [
        "1"
      ],
      "line": 50,
      "id": "mi-movistar-flujo-de-recargas;recargas-en-mi-movistar-completo-movil-(generando-automáticamente-token-url);;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 404805800,
  "status": "passed"
});
formatter.before({
  "duration": 7505908100,
  "status": "passed"
});
formatter.scenario({
  "line": 50,
  "name": "Recargas en Mi Movistar Completo MOVIL (Generando automáticamente Token URL)",
  "description": "",
  "id": "mi-movistar-flujo-de-recargas;recargas-en-mi-movistar-completo-movil-(generando-automáticamente-token-url);;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 32,
      "name": "@Regresion"
    },
    {
      "line": 32,
      "name": "@Test_3"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "se genera la URL mediante el API_TEST_recargas",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "se ingresa en la URL el token generado \"1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "se ingresa el numero celular \"1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "monto a recargar \"1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "se da click en el boton Continuar",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "se ingresa el email \"1\" y se da click en continuar",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "se ingresa el numero de tarjeta \"1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "se ingresa el mes de vencimiento \"1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "se ingresa el anio de vencimiento \"1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "se ingresa el codigo de verificacion \"1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "se da click en el boton Pagar",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "se verifica que se hizo la recarga correcta.",
  "keyword": "Then "
});
formatter.match({
  "location": "stepsRecargasHome.seGeneraLaURLMedianteElAPI_TEST_recargas()"
});
formatter.result({
  "duration": 5488971400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 40
    }
  ],
  "location": "stepsRecargasHome.seIngresaEnLaURLElTokenGenerado(String)"
});
formatter.result({
  "duration": 2806000500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 30
    }
  ],
  "location": "stepsRecargasHome.seIngresaElNumeroCelular(String)"
});
formatter.result({
  "duration": 795731600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 18
    }
  ],
  "location": "stepsRecargasHome.montoARecargar(String)"
});
formatter.result({
  "duration": 1054342400,
  "status": "passed"
});
formatter.match({
  "location": "stepsRecargasHome.seDaClickEnElBotonContinuar()"
});
formatter.result({
  "duration": 894717900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 21
    }
  ],
  "location": "stepsRecargasCorreo.seIngresaElEmailYSeDaClickEnContinuar(String)"
});
formatter.result({
  "duration": 10511332600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 33
    }
  ],
  "location": "stepsRecargasPago.seIngresaElNumeroDeTarjeta(String)"
});
formatter.result({
  "duration": 6075511100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 34
    }
  ],
  "location": "stepsRecargasPago.seIngresaElMesDeVencimiento(String)"
});
formatter.result({
  "duration": 640828700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 35
    }
  ],
  "location": "stepsRecargasPago.seIngresaElAnioDeVencimiento(String)"
});
formatter.result({
  "duration": 576722300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 38
    }
  ],
  "location": "stepsRecargasPago.seIngresaElCodigoDeVerificacion(String)"
});
formatter.result({
  "duration": 599892300,
  "status": "passed"
});
formatter.match({
  "location": "stepsRecargasPago.seDaClickEnElBotonPagar()"
});
formatter.result({
  "duration": 945266600,
  "status": "passed"
});
formatter.match({
  "location": "stepsRecargasFinal.seVerificaQueSeHizoLaRecargaCorrecta()"
});
formatter.result({
  "duration": 46072320700,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"/html/body/app-root/app-confirm/div/div/div[1]/div[6]/p[2]\"}\n  (Session info: chrome\u003d84.0.4147.125)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-RM7G8MO\u0027, ip: \u0027192.168.1.3\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 84.0.4147.125, chrome: {chromedriverVersion: 84.0.4147.30 (48b3e868b4cc0..., userDataDir: C:\\Users\\ABRAHA~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:62730}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: b8e6914ee31c1a8a024bff420e120223\n*** Element info: {Using\u003dxpath, value\u003d/html/body/app-root/app-confirm/div/div/div[1]/div[6]/p[2]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.tsoft.bot.frontend.pageobject.webMiMovistar.PageRecargaFinal.verificarRecargaFinal(PageRecargaFinal.java:39)\r\n\tat com.tsoft.bot.frontend.steps.webMiMovistar.stepsRecargasFinal.seVerificaQueSeHizoLaRecargaCorrecta(stepsRecargasFinal.java:10)\r\n\tat ✽.Then se verifica que se hizo la recarga correcta.(MiMovistar_FlujoRecargas.feature:46)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1414206700,
  "status": "passed"
});
});