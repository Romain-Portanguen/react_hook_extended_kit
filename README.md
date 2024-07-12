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
 <img src="https://img.shields.io/github/license/Romain-Portanguen/react_hook_kit?style=plastic&logo=opensourceinitiative&logoColor=white&color=0080ff" alt="license">
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

|     | Feature           | Description                                                                                                                                                                                                                                                 |
|-----|-------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ⚙️  | **Architecture**  | The project follows a modular architecture with separate files for each custom React hook for state management, data fetching, and performance optimization. Centralized logic promotes code reusability and maintainability in React applications.         |
| 🔩  | **Code Quality**  | The codebase maintains high quality with adherence to strict TypeScript type checking, eslint linting rules, and Prettier code formatting. Well-structured codebase ensures readability and consistency in development.                                     |
| 📄  | **Documentation** | The project includes detailed API documentation generated by TypeDoc focusing on hooks in the src/hooks directory. The documentation provides insights into hook functionalities and usage, enhancing ease of integration and understanding for developers. |
| 🔌  | **Integrations**  | Key integrations include Jest for testing, @testing-library/react for testing React components, and TypeScript for statically typed JavaScript development. External dependencies include React, eslint, and Prettier for code quality.                     |
| 🧩  | **Modularity**    | The codebase exhibits high modularity with each custom hook residing in a separate file. This modular structure enables easy reusability of logic across different components and projects, enhancing the scalability and maintainability of the codebase.  |
| 🧪  | **Testing**       | Testing frameworks and tools used include Jest for unit testing custom hooks and @testing-library/react for testing React components. Test coverage ensures reliability and stability of the project.                                                       |
| ⚡️  | **Performance**   | Efficiency is maintained through custom hooks like use-throttle and use-debounce, optimizing state updates and performance. Throttling and debouncing functionalities enhance user experience and manage real-time application interactions effectively.    |
| 🛡️ | **Security**      | Security measures include controlled access to local storage through use-local-storage hook. Error handling ensures safe storage and retrieval of sensitive data, enhancing data protection and privacy.                                                    |
| 📦  | **Dependencies**  | Key external dependencies include React, Jest, TypeScript, @testing-library/react, and eslint for development, testing, and linting purposes. These libraries enhance functionality and maintain code quality.                                              |

---

## 🗂️ Repository Structure

```sh
└── react_hook_kit/
    ├── README.md
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

| File                                                                                                   | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|--------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [jestconfig.ts](https://github.com/Romain-Portanguen/react_hook_kit/blob/master/jestconfig.ts)         | Optimize Jest configuration for React Hooks tests. Defines test roots, transformations, regex, modules, and environment settings. Excludes node modules from transformation.                                                                                                                                                                                                                                                                                                                                                                                                             |
| [package-lock.json](https://github.com/Romain-Portanguen/react_hook_kit/blob/master/package-lock.json) | The `package-lock.json` file in the `react_hook_kit` repository serves as a vital component for ensuring consistent and reproducible dependency management within the project. It plays a crucial role in guaranteeing that all developers working on the repository have access to the exact versions of dependencies required for the project to function correctly. By providing a locked snapshot of dependency tree information, this file helps maintain a stable and reliable development environment across different setups and prevents unexpected package version mismatches. |
| [package.json](https://github.com/Romain-Portanguen/react_hook_kit/blob/master/package.json)           | Specifies metadata & scripts for a React utility hook library. Builds TypeScript code, runs Jest tests & generates documentation. Handles dependencies & devDependencies for testing, linting, and documentation generation.                                                                                                                                                                                                                                                                                                                                                             |
| [typedoc.json](https://github.com/Romain-Portanguen/react_hook_kit/blob/master/typedoc.json)           | Generates detailed API documentation for React Hook Kit by focusing on hooks in the src/hooks directory. Excludes private, protected, and external elements. Utilizes the default theme with expanded entry points to create versioned documentation in the docs folder.                                                                                                                                                                                                                                                                                                                 |
| [tsconfig.json](https://github.com/Romain-Portanguen/react_hook_kit/blob/master/tsconfig.json)         | Enables ES6 compilation, React JSX support, and strict type checking for the `react_hook_kit` repository. Configures module resolution and output directory settings, facilitating seamless integration of React hooks with ESNext modules.                                                                                                                                                                                                                                                                                                                                              |

</details>

<details closed><summary>src</summary>

| File                                                                                     | Summary                                                                                                                                                                                                                 |
|------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [index.ts](https://github.com/Romain-Portanguen/react_hook_kit/blob/master/src/index.ts) | Exports various custom React hooks for state management, data fetching, and performance optimization. Centralizing reusable logic, promotes code reusability and maintainability in the React application architecture. |

</details>

<details closed><summary>src.hooks</summary>

| File                                                                                                                   | Summary                                                                                                                                                                                                                                                             |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [use-throttle.ts](https://github.com/Romain-Portanguen/react_hook_kit/blob/master/src/hooks/use-throttle.ts)           | Enables throttling of a value in React, ensuring a maximum frequency of updates. Monitors changes to value and applies throttling as specified, facilitating a smoother user experience.                                                                            |
| [use-toggle.ts](https://github.com/Romain-Portanguen/react_hook_kit/blob/master/src/hooks/use-toggle.ts)               | Enables managing boolean state and toggle functionality via `useToggle` custom hook in `react_hook_kit`. Encapsulates state logic for easy integration across React components, promoting code reusability and maintainability within the repositorys architecture. |
| [use-debounce.ts](https://github.com/Romain-Portanguen/react_hook_kit/blob/master/src/hooks/use-debounce.ts)           | Implements a debouncing functionality for React components. Maintains a delayed state update to enhance performance. Key for managing input changes and API requests in real-time applications.                                                                     |
| [use-local-storage.ts](https://github.com/Romain-Portanguen/react_hook_kit/blob/master/src/hooks/use-local-storage.ts) | Enables synchronization of state with localStorage using a custom hook. Stores and retrieves values with error handling, promoting persistence across sessions. Facilitates seamless state management in React components through simple integration.               |
| [use-counter.ts](https://github.com/Romain-Portanguen/react_hook_kit/blob/master/src/hooks/use-counter.ts)             | Implements a custom hook `useCounter` for managing a counter state in React. Offers functions for incrementing, decrementing, and resetting the counter. Enhances codebase functionality with reusable and concise state management for counter-related components. |
| [use-fetch.ts](https://github.com/Romain-Portanguen/react_hook_kit/blob/master/src/hooks/use-fetch.ts)                 | Enables fetching data from an API using React hooks. Manages loading, errors, and data states. Contributes to the repositorys hooks' module for reusable frontend logic.                                                                                            |
| [use-previous.ts](https://github.com/Romain-Portanguen/react_hook_kit/blob/master/src/hooks/use-previous.ts)           | Enables tracking and accessing the previous value of a variable in React components. Facilitates creating interactive UI components with state management through a custom hook.                                                                                    |

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
