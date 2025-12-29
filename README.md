# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


## O que foi criado ou utilizado neste projeto:
Estrutura de Pastas
src/
├── components/        (Componentes reutilizáveis)
├── pages/            (Páginas da aplicação)
├── context/          (Gerenciamento de estado)
├── styles/           (Arquivos CSS)
├── App.jsx
└── index.jsx

📄 Arquivos Criados
Raiz

App.jsx - Componente principal com rotas
index.jsx - Ponto de entrada da aplicação
package.json - Dependências do projeto

Context

TaskContext.jsx - Gerenciamento global de tarefas

Componentes

Navigation.jsx - Barra de navegação
TaskForm.jsx - Formulário para adicionar/editar tarefas
TaskList.jsx - Lista de tarefas
TaskItem.jsx - Item individual da tarefa

Páginas

Home.jsx - Página inicial com estatísticas
AddTask.jsx - Página para adicionar tarefa
EditTask.jsx - Página para editar tarefa

Estilos CSS

App.css - Estilos globais da aplicação
Navigation.css - Estilos da navbar
TaskForm.css - Estilos do formulário
TaskList.css - Estilos da lista
TaskItem.css - Estilos do item individual
Pages.css - Estilos das páginas
index.css - Reset e estilos base


⚙️ Tecnologias Utilizadas

React 18
React Router v6
Context API + useContext
useState e useEffect
localStorage
CSS3 (Flexbox, Grid, Responsivo)

## Objetivo de utilização do que aprendi durante o curso:

Componente Contador (contador simples com useState).
Aplicação To-Do com páginas Home / Adicionar / Editar usando React Router v6.
Estado global via Context API (TaskProvider) com persistência em localStorage.
Navegação, CRUD (adicionar, editar, excluir, marcar concluída).
Utilizei os componentes BrowserRouter, Route e Switch para configurar as rotas.
Context API: Criei um contexto para compartilhar o estado das tarefas entre os componentes.
useEffect: Utilizei useEffect para carregar e salvar tarefas no localStorage.
Componentização: Separei bem os componentes, mantendo a lógica do contexto fora dos componentes de apresentação.