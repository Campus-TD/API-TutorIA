# API for TutorIA

Tutor inteligente utilizando tecnología CHATBOT.

## Instalación

Para instalar la API, se requiere tener instalado [Node.js](https://nodejs.org/es/).

Una vez instalado npm, puedes clonar el repositorio:

```bash
git clone https://github.com/Campus-TD/API-TutorIA.git
```

Para instalar las dependencias, una vez dentro de la carpeta del repositorio, ejecutar:

```bash
npm install
```

Para correr la API en modo desarrollo, es importante contar con la dependencia [Nodemon](https://www.npmjs.com/package/nodemon) instalada, la cual se puede instalar con el siguiente comando:
```bash 
npm install -g nodemon
```
Una vez instalada, ejecutar el siguiente comando para correr la API en modo desarrollo:
```bash
npm run dev
```

Una vez ejecutado el comando, la API estará corriendo en el puerto 3000. Para consumir la api se debe hacer llamados a los siguientes endpoints:

- **POST:** `/api/prompt` - Para enviar el prompt al servidor y obtener la respuesta del modelo.
```
BODY:
{
    "id": "",
    "name": "",
    "subject": "",
    "topic": "", 
    "question": ""
}
```



> **Nota:** ---