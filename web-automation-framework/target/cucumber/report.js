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
  "name": "Recargas en Mi Movistar Completo (Generando automáticamente Token URL)",
  "description": "",
  "id": "mi-movistar-flujo-de-recargas;recargas-en-mi-movistar-completo-(generando-automáticamente-token-url)",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
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
  "id": "mi-movistar-flujo-de-recargas;recargas-en-mi-movistar-completo-(generando-automáticamente-token-url);",
  "rows": [
    {
      "cells": [
        "caso_prueba"
      ],
      "line": 49,
      "id": "mi-movistar-flujo-de-recargas;recargas-en-mi-movistar-completo-(generando-automáticamente-token-url);;1"
    },
    {
      "cells": [
        "1"
      ],
      "line": 50,
      "id": "mi-movistar-flujo-de-recargas;recargas-en-mi-movistar-completo-(generando-automáticamente-token-url);;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 11852353200,
  "status": "passed"
});
formatter.before({
  "duration": 219852800,
  "status": "passed"
});
formatter.scenario({
  "line": 50,
  "name": "Recargas en Mi Movistar Completo (Generando automáticamente Token URL)",
  "description": "",
  "id": "mi-movistar-flujo-de-recargas;recargas-en-mi-movistar-completo-(generando-automáticamente-token-url);;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
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
  "location": "MiMovistar_Recargas.seGeneraLaURLMedianteElAPI_TEST_recargas()"
});
formatter.result({
  "duration": 4584323700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 40
    }
  ],
  "location": "MiMovistar_Recargas.seIngresaEnLaURLElTokenGenerado(String)"
});
formatter.result({
  "duration": 8356474200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 30
    }
  ],
  "location": "MiMovistar_Recargas.seIngresaElNumeroCelular(String)"
});
formatter.result({
  "duration": 707787900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 18
    }
  ],
  "location": "MiMovistar_Recargas.montoARecargar(String)"
});
formatter.result({
  "duration": 643284300,
  "status": "passed"
});
formatter.match({
  "location": "MiMovistar_Recargas.seDaClickEnElBotonContinuar()"
});
formatter.result({
  "duration": 4830648400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 21
    }
  ],
  "location": "MiMovistar_Recargas.seIngresaElEmailYSeDaClickEnContinuar(String)"
});
formatter.result({
  "duration": 6359621000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 33
    }
  ],
  "location": "MiMovistar_Recargas.seIngresaElNumeroDeTarjeta(String)"
});
formatter.result({
  "duration": 16130716500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 34
    }
  ],
  "location": "MiMovistar_Recargas.seIngresaElMesDeVencimiento(String)"
});
formatter.result({
  "duration": 781725400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 35
    }
  ],
  "location": "MiMovistar_Recargas.seIngresaElAnioDeVencimiento(String)"
});
formatter.result({
  "duration": 639077800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 38
    }
  ],
  "location": "MiMovistar_Recargas.seIngresaElCodigoDeVerificacion(String)"
});
formatter.result({
  "duration": 488406900,
  "status": "passed"
});
formatter.match({
  "location": "MiMovistar_Recargas.seDaClickEnElBotonPagar()"
});
formatter.result({
  "duration": 902996500,
  "status": "passed"
});
formatter.match({
  "location": "MiMovistar_Recargas.seVerificaQueSeHizoLaRecargaCorrecta()"
});
formatter.result({
  "duration": 24591827200,
  "status": "passed"
});
formatter.after({
  "duration": 1564966600,
  "status": "passed"
});
});