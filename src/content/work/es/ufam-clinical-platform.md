---
title: Construir desde cero una plataforma de investigación clínica
summary: La plataforma web en la que médicos, enfermeros, residentes y estudiantes de medicina registran y siguen a más de 200 pacientes de un proyecto de investigación sobre enfermedades neurodegenerativas, y la fuente de datos del equipo de IA del proyecto.
company: UFAM
role: Líder de Front-end
period: julio de 2025 — actualidad
stack: [React 19, TypeScript, Vite, React Hook Form, MUI X Charts, JWT]
outcomes:
  - Creada desde cero; lidero el front-end y escribí cerca del 90 %
  - Más de 200 pacientes seguidos por el equipo clínico
  - 16 formularios de caso con puntuaciones de riesgo en tiempo real
  - 841 campos de investigación exportables a XLSX/CSV
order: 2
draft: false
---

## Contexto

En la Universidad Federal de Amazonas (UFAM), un proyecto de investigación hace seguimiento a lo largo del tiempo de pacientes con enfermedades neurodegenerativas. Participan médicos, enfermeros, residentes y estudiantes de medicina, y un equipo de IA independiente construye modelos predictivos.

Empecé la plataforma web en la que trabaja el equipo clínico desde el primer commit y lidero su front-end, del que he escrito cerca del 90 % del código; algunos compañeros han aportado ajustes en los formularios y el pipeline de CI. Es un rol académico a tiempo parcial, que compagino con mi máster en ingeniería eléctrica con enfoque en IA.

La interfaz en sí no tiene IA. El equipo de IA lee lo que el equipo clínico registra directamente de la base de datos de la plataforma, lo que convierte al front-end en el lugar donde se decide la calidad de los datos.

Además de los formularios, la plataforma cubre el registro de pacientes, la agenda de visitas, informes de seguimiento y de extracción de datos, y un área de administración de usuarios, perfiles y los dispositivos usados en el estudio. La interfaz está disponible en portugués e inglés.

## El problema

El equipo clínico necesitaba un único lugar para registrar pacientes, realizar evaluaciones y seguir a cada paciente a lo largo del tiempo. Eso implicaba:

- 16 formularios de caso, muchos con campos que dependen de respuestas anteriores
- puntuaciones de riesgo visibles mientras la evaluación aún se está rellenando
- una vista de la evolución de cada paciente, con datos de los dispositivos usados en el estudio
- exportaciones que los investigadores puedan abrir con sus propias herramientas
- acceso limitado por perfil, ya que los registros son de pacientes reales

Un formulario confuso, o que deja pasar respuestas incoherentes, no solo molesta a quien lo rellena. Acaba en el conjunto de datos con el que se entrenan los modelos.

## Lo que hice

### Formularios que guían a quien los rellena

Desarrollé el flujo de captura de datos con React Hook Form: 16 formularios de caso con campos condicionales y puntuaciones de riesgo calculadas en tiempo real, de modo que el resultado aparece mientras el profesional escribe.

Dieciséis formularios solo se mantienen fáciles de mantener si todos funcionan igual. Cada uno se divide en dos: la página se ocupa del layout y la interacción, y un módulo puro convierte los datos de la API en valores del formulario y viceversa, aplica valores por defecto y calcula las puntuaciones. Esos módulos tienen tests unitarios con Jest, así que una regla clínica se puede comprobar sin renderizar ninguna pantalla.

### "Sin responder" también es un dato

En un historial clínico, "no" y "no evaluado" significan cosas distintas, y confundirlos corrompe el conjunto de datos. Los campos que normalmente serían simples checkboxes guardan un tercer estado, "sin respuesta", para que un campo que nadie tocó llegue a la base de datos como ausente y no como un falso negativo. Las fechas y los decimales pasan por inputs localizados, así que un valor escrito con coma decimal se guarda igual que uno escrito con punto.

### Seguir a los pacientes a lo largo del tiempo

Desarrollé paneles con MUI X Charts que muestran la evolución de cada paciente, incluidos datos de los dispositivos usados en el estudio.

### Un canal de feedback que el equipo clínico usa de verdad

Quienes usan la plataforma son médicos y enfermeros en pleno estudio, no un equipo de producto. Dar feedback tenía que ser tan fácil como avisar a un compañero de un problema.

Por eso la plataforma tiene su propia pantalla de solicitudes de ajuste, a un clic en el menú lateral. El profesional describe el ajuste que necesita, adjunta una captura o un PDF si es algo visual y ve una fecha estimada de entrega. Todas las solicitudes quedan en esa tabla, así que el equipo clínico y los desarrolladores comparten una única lista de lo pendiente y de cuándo se entregará. Incluso una emergencia real, que nos llega antes por mensaje, termina registrada allí.

La pantalla todavía es nueva, y el equipo clínico ya la ha usado para unas ocho solicitudes.

### Sacar los datos de forma segura

Los investigadores necesitaban todo en hojas de cálculo, así que entregué una exportación de 841 campos de los 16 formularios a XLSX y CSV, además de informes médicos en PDF. El acceso está protegido con autenticación JWT y permisos por perfil, y los formularios sensibles pueden restringirse uno a uno desde un registro central que también alimenta la pantalla de gestión de usuarios.

## Resultado

- Una plataforma creada desde cero que el equipo clínico usa para seguir a más de 200 pacientes
- Información sobre el riesgo en el momento de registrar los datos
- Un canal directo para que el equipo clínico pida ajustes, con una fecha de entrega visible
- Un conjunto de datos limpio y exportable sobre el que trabaja el equipo de IA

## Lo que aprendí

La salud nunca fue un área en la que esperara trabajar. Al final, las mismas habilidades sirven: entender quién usa la pantalla, hacer que lo correcto sea lo más fácil y mantener los datos limpios. El desarrollo web puede aportar algo nuevo y útil a casi cualquier ámbito, y eso es buena parte de por qué disfruto tanto este proyecto.
