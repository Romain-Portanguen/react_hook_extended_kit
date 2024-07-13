<p align="center">
  <img src="https://cdn-icons-png.flaticon.com/512/6295/6295417.png" width="100" alt="project-logo">
</p>
<p align="center">
    <h1 align="center">REACT_HOOK_KIT</h1>
</p>
<p align="center">
    <em>Empowering React with hooks of boundless potential.</em>
</p>
<p align="center">
 <img src="https://img.shields.io/github/last-commit/Romain-Portanguen/react_hook_kit?style=plastic&logo=git&logoColor=white&color=0080ff" alt="last-commit">
 <img src="https://img.shields.io/github/languages/top/Romain-Portanguen/react_hook_kit?style=plastic&color=0080ff" alt="repo-top-language">
 <img src="https://img.shields.io/github/languages/count/Romain-Portanguen/react_hook_kit?style=plastic&color=0080ff" alt="repo-language-count">
<p>
<p align="center">
  <em>Developed with the software and tools below.</em>
</p>
<p align="center">
 <img src="https://img.shields.io/badge/Prettier-F7B93E.svg?style=plastic&logo=Prettier&logoColor=black" alt="Prettier">
 <img src="https://img.shields.io/badge/Jest-C21325.svg?style=plastic&logo=Jest&logoColor=white" alt="Jest">
 <img src="https://img.shields.io/badge/React-61DAFB.svg?style=plastic&logo=React&logoColor=black" alt="React">
 <img src="https://img.shields.io/badge/ESLint-4B32C3.svg?style=plastic&logo=ESLint&logoColor=white" alt="ESLint">
 <img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=plastic&logo=TypeScript&logoColor=white" alt="TypeScript">
 <img src="https://img.shields.io/badge/tsnode-3178C6.svg?style=plastic&logo=ts-node&logoColor=white" alt="tsnode">
 <img src="https://img.shields.io/badge/JSON-000000.svg?style=plastic&logo=JSON&logoColor=white" alt="JSON">
</p>

<br><!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary><br>

- [📍 Overview](#-overview)
- [🧩 Features](#-features)
- [🗂️ Repository Structure](#️-repository-structure)
- [📦 Modules](#-modules)
- [🚀 Getting Started](#-getting-started)
  - [⚙️ Installation](#️-installation)
  - [🤖 Usage](#-usage)
  - [🧪 Tests](#-tests)
- [🤝 Contributing](#-contributing)
- [🎗 License](#-license)
</details>
<hr>

## 📍 Overview

React Hook Kit is a utility library with a centralized collection of custom React hooks designed to enhance state management, data fetching, and performance optimization in React applications. By offering hooks like use-throttle, use-toggle, use-debounce, use-local-storage, use-counter, and more, React Hook Kit promotes code reusability and simplifies integration of common functionalities. With a focus on providing reusable logic for smoother user experiences, React Hook Kit streamlines development and boosts maintainability within the React application architecture.

---

## 🧩 Features

|     | Feature           | Description                                                                                                                                                                                                                                                                             |
|-----|-------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ⚙️  | **Architecture**  | The project defines custom React hooks for various functionalities like state management, device detection, and network handling. It follows a modular structure with hooks residing in the `src/hooks` directory, enhancing reusability and maintainability.                           |
| 🔩  | **Code Quality**  | The codebase maintains a high standard of quality with optimized Babel configuration for modern JavaScript and TypeScript support. The usage of ESLint, Prettier, and TypeScript ensures consistent code formatting, type safety, and adherence to coding standards.                    |
| 📄  | **Documentation** | The project includes detailed documentation using TypeDoc for generating API documentation. The documentation covers entry points, output directory, project settings, and documentation specifications, ensuring comprehensive and versioned documentation for the custom React hooks. |
| 🔌  | **Integrations**  | Key integrations include Jest for testing, @babel for JavaScript transpilation, TypeScript for type safety, and @testing-library/react for React component testing. These integrations enhance the development process and maintain code quality.                                       |
| 🧩  | **Modularity**    | The codebase exhibits high modularity through the organization of custom hooks into separate files, each focusing on a specific functionality. This approach promotes reusability, ease of maintenance, and clean separation of concerns.                                               |
| 🧪  | **Testing**       | Testing frameworks and tools used include Jest for test automation, @testing-library/react for React component testing, and ts-jest for testing TypeScript code. These tools ensure robust test coverage and help maintain code quality.                                                |
| ⚡️  | **Performance**   | The project emphasizes performance optimization through custom hooks like `use-throttle` and `use-debounce`, which help in managing rapid value changes and performance-critical scenarios efficiently. The codebase is designed to handle performance-sensitive tasks effectively.     |
| 🛡️ | **Security**      | Security measures include tracking online status and dark mode preferences using localStorage with custom hooks. Access control is maintained through state management mechanisms implemented within the React hooks.                                                                   |
| 📦  | **Dependencies**  | Key external libraries and dependencies utilized in the project include Jest, @babel/preset-react, TypeScript, @testing-library/react, ESLint, and Prettier. These dependencies enhance development, testing, and code quality.                                                         |
| 🚀  | **Scalability**   | The project demonstrates scalability with custom hooks catering to various functionalities. The modular architecture, code quality practices, and testing frameworks ensure the codebase can handle increased traffic and load with ease.                                               |

---

## 🗂️ Repository Structure

```sh
└── react_hook_kit/
    ├── README.md
    ├── babel.config.js
    ├── jestconfig.ts
    ├── package-lock.json
    ├── package.json
    ├── src
    │   ├── hooks
    │   ├── index.ts
    │   └── tests
    ├── tsconfig.json
    └── typedoc.json
```

---

## 📦 Modules

<details closed><summary>.</summary>

| File                                                                                                   | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|--------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [jestconfig.ts](https://github.com/Romain-Portanguen/react_hook_kit/blob/master/jestconfig.ts)         | Defines Jest configuration for test automation. Sets test file locations, transforms TypeScript with Babel, configures coverage report settings, and specifies test environment. Enables seamless testing for React projects in the react_hook_kit repository.                                                                                                                                                                                          |
| [babel.config.js](https://github.com/Romain-Portanguen/react_hook_kit/blob/master/babel.config.js)     | Optimize Babel configuration for React Hook Kit. Incorporate presets to support modern JS features and TypeScript. Implement plugin for efficient runtime transformation.                                                                                                                                                                                                                                                                               |
| [package-lock.json](https://github.com/Romain-Portanguen/react_hook_kit/blob/master/package-lock.json) | The `package-lock.json` file in the `react_hook_kit` repository serves as a critical component for ensuring consistent dependency versions and package installations. It locks down the specific versions of dependencies to maintain a stable and reproducible environment for the project. This file plays a key role in maintaining the integrity of the projects dependencies and ensuring reliable builds across different developer environments. |
| [package.json](https://github.com/Romain-Portanguen/react_hook_kit/blob/master/package.json)           | Defines metadata, dependencies, and scripts for a React utility hook library. Enables building, testing, and documentation generation. Key features include Jest for testing, TypeScript for type safety, and Prettier for code formatting.                                                                                                                                                                                                             |
| [typedoc.json](https://github.com/Romain-Portanguen/react_hook_kit/blob/master/typedoc.json)           | Generates API documentation for React Hook Kit repository. Specifies entry points, output directory, project name, and documentation settings to create comprehensive, versioned docs using TypeDoc with a default theme.                                                                                                                                                                                                                               |
| [tsconfig.json](https://github.com/Romain-Portanguen/react_hook_kit/blob/master/tsconfig.json)         | Optimize TypeScript configuration for React hooks in the repository. Focus on ES6 target, JSX support, strict typing, and module resolution for seamless development environment setup.                                                                                                                                                                                                                                                                 |

</details>

<details closed><summary>src</summary>

| File                                                                                     | Summary                                                                                                                                                                                                |
|------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [index.ts](https://github.com/Romain-Portanguen/react_hook_kit/blob/master/src/index.ts) | Exports various custom React hooks for state management, device detection, and network handling from the hooks directory, enhancing the reusability and modularity of the parent repositorys codebase. |

</details>

<details closed><summary>src.hooks</summary>

| File                                                                                                                   | Summary                                                                                                                                                                                                                                                                            |
|------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [use-throttle.ts](https://github.com/Romain-Portanguen/react_hook_kit/blob/master/src/hooks/use-throttle.ts)           | Enables throttling of a value based on a specified time limit in milliseconds. Implements a custom React hook that updates the throttled value periodically, optimizing performance when handling rapid value changes in user interfaces.                                          |
| [use-online-status.ts](https://github.com/Romain-Portanguen/react_hook_kit/blob/master/src/hooks/use-online-status.ts) | Enables tracking online status in a React app, by utilizing browser events and custom hook. Facilitates real-time UI updates based on online/offline status. Contributes to the repositorys src/hooks directory with reusable logic for online connectivity detection.             |
| [use-toggle.ts](https://github.com/Romain-Portanguen/react_hook_kit/blob/master/src/hooks/use-toggle.ts)               | Enables toggling boolean state with custom hook useToggle. Key features include simple state management and toggle function. Valuable addition to react_hook_kit architecture for state manipulation.                                                                              |
| [use-debounce.ts](https://github.com/Romain-Portanguen/react_hook_kit/blob/master/src/hooks/use-debounce.ts)           | Enables debouncing of input values in React, aiding in performance optimization. The useDebounce hook accepts a value and delay, returning a debounced value. Integrated seamlessly with the repositorys React-based architecture.                                                 |
| [use-local-storage.ts](https://github.com/Romain-Portanguen/react_hook_kit/blob/master/src/hooks/use-local-storage.ts) | Enables syncing state with localStorage using a custom hook, promoting reusability and state persistence. Promotes a structured approach to managing data in React components by encapsulating localStorage logic.                                                                 |
| [use-window-size.ts](https://github.com/Romain-Portanguen/react_hook_kit/blob/master/src/hooks/use-window-size.ts)     | Enables tracking of window size changes for components. Maintains and updates window width and height dynamically. Contributes to responsive design and adapts UI elements based on current window dimensions.                                                                     |
| [use-dark-mode.ts](https://github.com/Romain-Portanguen/react_hook_kit/blob/master/src/hooks/use-dark-mode.ts)         | Enables dark mode functionality. Manages state and toggle actions in React using localStorage. Allows users to switch between dark and light modes with a custom hook. Enhances user experience by providing a personalized theme option.                                          |
| [use-counter.ts](https://github.com/Romain-Portanguen/react_hook_kit/blob/master/src/hooks/use-counter.ts)             | Defines a custom hook `useCounter` for managing a counter state in React. It allows easy state manipulation with increment, decrement, and reset functions. The hook facilitates efficient state management in React applications, promoting reusability and clean code practices. |
| [use-media-query.ts](https://github.com/Romain-Portanguen/react_hook_kit/blob/master/src/hooks/use-media-query.ts)     | Enables tracking media query changes in React components. Implemented as a custom hook, it listens for specified queries and returns a boolean indicating if the query matches.                                                                                                    |
| [use-fetch.ts](https://github.com/Romain-Portanguen/react_hook_kit/blob/master/src/hooks/use-fetch.ts)                 | Enables fetching data from an API in React components. Manages data, error, and loading states asynchronously. Promotes reusability and clean code architecture in the repositorys hooks' directory.                                                                               |
| [use-previous.ts](https://github.com/Romain-Portanguen/react_hook_kit/blob/master/src/hooks/use-previous.ts)           | Enables tracking and retrieving previous values of variables in React components. This custom hook enhances component state management, facilitating comparison between current and previous states for more dynamic user interfaces.                                              |

</details>

---

## 🚀 Getting Started

**System Requirements:**

- **TypeScript**: `version x.y.z`

### ⚙️ Installation

<h4>From <code>source</code></h4>

> 1. Clone the react_hook_kit repository:
>
> ```console
> $ git clone https://github.com/Romain-Portanguen/react_hook_kit
> ```
>
> 2. Change to the project directory:
>
> ```console
> $ cd react_hook_kit
> ```
>
> 3. Install the dependencies:
>
> ```console
> $ npm install
> ```

### 🤖 Usage

<h4>From <code>source</code></h4>

> Run react_hook_kit using the command below:
>
> ```console
> $ npm run build && node dist/main.js
> ```

### 🧪 Tests

> Run the test suite using the command below:
>
> ```console
> $ npm test
> ```

---

## 🤝 Contributing

Contributions are welcome! Here are several ways you can contribute:

- **[Report Issues](https://github.com/Romain-Portanguen/react_hook_kit/issues)**: Submit bugs found or log feature requests for the `react_hook_kit` project.
- **[Submit Pull Requests](https://github.com/Romain-Portanguen/react_hook_kit/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.
- **[Join the Discussions](https://github.com/Romain-Portanguen/react_hook_kit/discussions)**: Share your insights, provide feedback, or ask questions.

<details closed>
<summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your github account.
2. **Clone Locally**: Clone the forked repository to your local machine using a git client.

   ```sh
   git clone https://github.com/Romain-Portanguen/react_hook_kit
   ```

3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.

   ```sh
   git checkout -b new-feature-x
   ```

4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.

   ```sh
   git commit -m 'Implemented new feature x.'
   ```

6. **Push to github**: Push the changes to your forked repository.

   ```sh
   git push origin new-feature-x
   ```

7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.
8. **Review**: Once your PR is reviewed and approved, it will be merged into the main branch. Congratulations on your contribution!

</details>

<details closed>
<summary>Contributor Graph</summary>
<br>
<p align="center">
   <a href="https://github.com{/Romain-Portanguen/react_hook_kit/}graphs/contributors">
      <img src="https://contrib.rocks/image?repo=Romain-Portanguen/react_hook_kit">
   </a>
</p>
</details>

---

## 🎗 License

This project is protected under the [MIT](https://choosealicense.com/licenses) License. For more details, refer to the [LICENSE](https://choosealicense.com/licenses/) file.

---
