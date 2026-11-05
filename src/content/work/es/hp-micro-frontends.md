---
title: Micro-frontends en millones de dispositivos, dentro de un host nativo
summary: Cómo construyo y entrego micro-frontends en React para la HP App, donde la interfaz web se ejecuta dentro de clientes nativos en Windows, macOS, iOS y Android.
company: HP Inc.
role: Ingeniero de Software Sénior
period: mayo de 2025 — actualidad
stack: [React, TypeScript, SystemJS, Import maps, Feature flags, Jest, Playwright, GitHub Actions]
outcomes:
  - Más de 12 micro-frontends en producción, en millones de dispositivos activos
  - ~30 % más rapidez al resolver bugs entre equipos
  - ~90 % de cobertura de tests garantizada en el CI
  - Migraciones de React 16 a 18 sin regresiones en producción
order: 1
draft: false
---

## Contexto

La [HP App](https://www.hp.com/us-en/hp-app/overview.html) es donde las personas añaden y gestionan sus productos HP: portátiles, ordenadores de sobremesa, monitores, ratones, teclados y la mayoría de los demás dispositivos que fabrica HP. Pueden registrar un dispositivo como propietarios o simplemente añadirlo, y luego gestionarlo todo desde un mismo lugar. Funciona en Windows, macOS, iOS y Android.

Buena parte de su interfaz está formada por micro-frontends en React que un cliente nativo carga en tiempo de ejecución. Una sola pantalla puede implicar código web, un puente entre JavaScript y el código nativo, y código de plataforma mantenido por equipos separados de Android, iOS y Windows.

Me incorporé a través de Wipro como Ingeniero de Software Sénior y he llevado a producción más de doce de esos micro-frontends.

## El problema

Dos cosas complicaban el trabajo.

**Los releases tenían que seguir siendo independientes.** Los micro-frontends solo compensan si cada uno puede publicarse a su propio ritmo. Dentro de un host nativo eso exige disciplina: es el host quien decide qué cargar, y cada cambio pasa por DEV, ITG y PROD.

**Los bugs cruzaban los límites entre equipos.** Cuando algo fallaba, la causa podía estar en la interfaz, en el puente o en el código nativo, y cada capa pertenecía a un equipo distinto. Sin una visibilidad compartida de lo que realmente pasaba por el puente, rastrear un fallo suponía mucho ir y venir entre equipos.

## Lo que hice

### Entregas sobre SystemJS e import maps

La plataforma carga los micro-frontends en tiempo de ejecución con SystemJS e import maps, y los pipelines de despliegue ya existían cuando llegué. Mi trabajo consiste en entregar micro-frontends a través de ellos: cada uno se construye, se versiona y se promueve por separado. Como el host resuelve los módulos mediante el import map, avanzar o volver a una versión anterior significa cambiar la versión a la que apunta el mapa, sin reconstruir el host.

### Observabilidad que respeta la privacidad

Rastrear un fallo entre equipos era lento hasta que añadí logs en el puente. Ahora cualquier equipo puede abrir la consola y ver lo importante de cada llamada a la API y al código nativo: si los datos llegaron, si la llamada terminó o dónde falló. Los datos sensibles quedan fuera por diseño. Junto con guías de diagnóstico, esto permitió que cada equipo supiera rápidamente si el problema era suyo, y la resolución de bugs entre equipos fue un 30 % más rápida.

### Depurar a través del puente

Algunas regresiones solo aparecían en una plataforma. Las rastreé desde la interfaz en JavaScript, pasando por las bridge APIs, hasta las bibliotecas nativas en C#/.NET, lo que implicó leer código nativo para entender el comportamiento de la gestión de dispositivos, no solo la parte web.

### Una forma más segura de actualizar

Ejecuté las migraciones de React 16 a 18 y estandaricé las herramientas de testing con Jest, React Testing Library y Playwright, manteniendo alrededor de un 90 % de cobertura en GitHub Actions. Las migraciones llegaron a producción sin regresiones.

## Resultado

- Más de 12 micro-frontends en producción en cuatro plataformas
- ~30 % más rapidez al resolver bugs entre equipos
- Una base de ~90 % de cobertura de tests que todo trabajo nuevo debe mantener

## Lo que aprendí

Los micro-frontends y las feature flags eran algo nuevo para mí cuando llegué. Trabajar con ellos cambió mi forma de pensar las entregas: piezas pequeñas e independientes, cada una publicada a su ritmo y activada cuando está lista, en lugar de un gran release que todos tienen que coordinar. Hoy es mi forma preferida de trabajar.
