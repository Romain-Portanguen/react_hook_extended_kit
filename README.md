![](https://github.com/Romain-Portanguen/react_hook_extended_kit/blob/443e78e3101544898279be4806a2e15546613e27/src/public/assets/react_hook_extended_kit.png)

<h3 align="center">
    <em>Empowering React with hooks of boundless potential.</em>
</h3>

<p align="center">
 <img src="https://img.shields.io/github/license/Romain-Portanguen/react_hook_extended_kit?style=plastic&logo=opensourceinitiative&logoColor=white&color=0080ff" alt="license">
 <img src="https://img.shields.io/github/last-commit/Romain-Portanguen/react_hook_extended_kit?style=plastic&logo=git&logoColor=white&color=0080ff" alt="last-commit">
 <img src="https://img.shields.io/github/languages/top/Romain-Portanguen/react_hook_extended_kit?style=plastic&color=0080ff" alt="repo-top-language">
 <img src="https://img.shields.io/github/languages/count/Romain-Portanguen/react_hook_extended_kit?style=plastic&color=0080ff" alt="repo-language-count">
<p>
<p align="center">
  <em>Developed with the software and tools below.</em>
</p>
<p align="center">
 <img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=plastic&logo=JavaScript&logoColor=black" alt="JavaScript">
 <img src="https://img.shields.io/badge/Prettier-F7B93E.svg?style=plastic&logo=Prettier&logoColor=black" alt="Prettier">
 <img src="https://img.shields.io/badge/YAML-CB171E.svg?style=plastic&logo=YAML&logoColor=white" alt="YAML">
 <img src="https://img.shields.io/badge/Jest-C21325.svg?style=plastic&logo=Jest&logoColor=white" alt="Jest">
 <img src="https://img.shields.io/badge/React-61DAFB.svg?style=plastic&logo=React&logoColor=black" alt="React">
 <br>
 <img src="https://img.shields.io/badge/ESLint-4B32C3.svg?style=plastic&logo=ESLint&logoColor=white" alt="ESLint">
 <img src="https://img.shields.io/badge/tsnode-3178C6.svg?style=plastic&logo=ts-node&logoColor=white" alt="tsnode">
 <img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=plastic&logo=TypeScript&logoColor=white" alt="TypeScript">
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

React Hook Extended Kit is a comprehensive utility library aimed at enhancing React applications with a collection of custom hooks. Developed by Romain Portanguen under the MIT License, it introduces advanced functionalities like state management, online status monitoring, dark mode implementation, and performance optimization. By simplifying integration of features such as window resizing, media queries, and clipboard interactions, this open-source project streamlines frontend development, offering developers a robust toolkit to augment their React projects efficiently.

---

## 🧩 Features

|     | Feature           | Description                                                                                                                                                                                                                                |
|-----|-------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ⚙️  | **Architecture**  | The project is built with React and TypeScript, providing a collection of custom React hooks aimed at extending the capabilities of React applications. It follows a modular architecture promoting code reusability.                      |
| 🔩  | **Code Quality**  | The codebase maintains high quality and adheres to best practices in React and TypeScript development. It includes linting, type checking, and coverage reporting for ensuring code reliability.                                           |
| 📄  | **Documentation** | The project features detailed documentation generated using typedoc, emphasizing public API while excluding private details. This enhances code understanding and facilitates easy integration for developers.                             |
| 🔌  | **Integrations**  | Key external dependencies include Jest, ESLint, Babel, Prettier, and various React-related libraries for testing, linting, and transpilation tasks. These integrations enhance the development workflow and tooling support.               |
| 🧩  | **Modularity**    | The codebase is structured in a modular way, with each custom hook providing specific functionality that can be easily integrated into React components. This promotes code reusability and maintainability.                               |
| 🧪  | **Testing**       | Testing is conducted using Jest and @testing-library/react for comprehensive unit and integration testing. The project includes tests for each custom hook to ensure functionality and reliability.                                        |
| ⚡️  | **Performance**   | The project focuses on efficiency and performance, as seen in the minify script that optimizes code for production deployment. Custom hooks like use-throttle and use-debounce enhance user interactions and reduce unnecessary rendering. |
| 🛡️ | **Security**      | Security measures include managing dark mode state using localStorage and clipboard actions with proper access control. The use of localStorage for certain hooks ensures data protection and secure interactions.                         |
| 📦  | **Dependencies**  | Key dependencies include TypeScript, Jest, React, ESLint, Prettier, and other utility libraries for enhancing development processes. These libraries extend the project's capabilities and support various functionalities.                |

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

| File                                                                                                            | Summary                                                                                                                                                                                                                                                                                                                |
|-----------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [jestconfig.ts](https://github.com/Romain-Portanguen/react_hook_extended_kit/blob/master/jestconfig.ts)         | Configures Jest test runner to transform and execute TypeScript files in the src directory. Sets up coverage reporting, test environments, and file extensions for comprehensive testing.                                                                                                                              |
| [package-lock.json](https://github.com/Romain-Portanguen/react_hook_extended_kit/blob/master/package-lock.json) | The code file in `src/hooks` directory enhances the functionality of the parent repository by providing a collection of custom React hooks. These hooks are designed to extend the capabilities of React applications, allowing developers to easily integrate advanced features and streamline development processes. |
| [package.json](https://github.com/Romain-Portanguen/react_hook_extended_kit/blob/master/package.json)           | Orchestrates building, testing, and documentation tasks.-Manages React hook utility library dependencies.-Enables minification, linting, and coverage reports.-Facilitates code formatting and type checking.-Developed by Romain Portanguen under MIT License.                                                        |
| [typedoc.json](https://github.com/Romain-Portanguen/react_hook_extended_kit/blob/master/typedoc.json)           | Generates React Hook Kit documentation with expanded entry points from src/hooks, emphasizing public API and excluding private/protected details. Output named React Hook Kit includes version, theme, directs to README.md.                                                                                           |
| [tsconfig.json](https://github.com/Romain-Portanguen/react_hook_extended_kit/blob/master/tsconfig.json)         | Defines compiler options for ES6 target and React JSX in the TypeScript project. Specifies module settings, directories, strict typing, and module resolution for seamless code integration within the React Hook Extended Kit repository.                                                                             |
| [babel.config.cjs](https://github.com/Romain-Portanguen/react_hook_extended_kit/blob/master/babel.config.cjs)   | Enables Babel configuration for React and TypeScript presets with the plugin for runtime transformation. Complements the repositorys architecture for optimizing code compilation and compatibility in the React Hook Extended Kit open-source project.                                                                |

</details>

<details closed><summary>scripts</summary>

| File                                                                                                    | Summary                                                                                                                                                                                                                 |
|---------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [minify.js](https://github.com/Romain-Portanguen/react_hook_extended_kit/blob/master/scripts/minify.js) | Minify script recursively compresses JavaScript files in the dist directory using Terser. It enhances the repository by reducing file sizes and optimizing code for production deployment, ensuring better performance. |

</details>

<details closed><summary>.github</summary>

| File                                                                                                        | Summary                                                                                                                                                                                                       |
|-------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [FUNDING.yml](https://github.com/Romain-Portanguen/react_hook_extended_kit/blob/master/.github/FUNDING.yml) | Specifies funding platforms for sponsorships within the repo, enabling financial support via various channels like GitHub Sponsors, Patreon, Ko-fi, and custom URLs for project contributors and maintainers. |

</details>

<details closed><summary>src</summary>

| File                                                                                              | Summary                                                                                                                                                                                                                                                                                                           |
|---------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [index.ts](https://github.com/Romain-Portanguen/react_hook_extended_kit/blob/master/src/index.ts) | Exports various custom hooks for UI, state management, storage, performance optimization, network requests, utilities, dark mode, media queries, window size, online status, DOM handling, timing events, and clipboard functionality. Enhances the parent repository with diverse frontend-focused capabilities. |

</details>

<details closed><summary>src.hooks.ui</summary>

| File                                                                                                                                     | Summary                                                                                                                                                                                                                                                                         |
|------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [use-toggle.test.ts](https://github.com/Romain-Portanguen/react_hook_extended_kit/blob/master/src/hooks/ui/use-toggle.test.ts)           | Ensures default false value, toggles to true, toggles back to false, and initializes with custom value. Supports critical functionality validation within the repos custom hook component architecture.                                                                         |
| [use-window-size.test.ts](https://github.com/Romain-Portanguen/react_hook_extended_kit/blob/master/src/hooks/ui/use-window-size.test.ts) | Tests window size hook returns current size and updates on resize.                                                                                                                                                                                                              |
| [use-toggle.ts](https://github.com/Romain-Portanguen/react_hook_extended_kit/blob/master/src/hooks/ui/use-toggle.ts)                     | Enables toggling boolean state with a custom hook offering current value and toggle function. Supports React components integration for easy state management.                                                                                                                  |
| [use-window-size.ts](https://github.com/Romain-Portanguen/react_hook_extended_kit/blob/master/src/hooks/ui/use-window-size.ts)           | Generates current window size data as a custom React hook in the repositorys UI module.                                                                                                                                                                                         |
| [use-dark-mode.ts](https://github.com/Romain-Portanguen/react_hook_extended_kit/blob/master/src/hooks/ui/use-dark-mode.ts)               | Manages dark mode state using localStorage, offering a toggle function. Enables dynamic theming in React components.                                                                                                                                                            |
| [use-media-query.test.ts](https://github.com/Romain-Portanguen/react_hook_extended_kit/blob/master/src/hooks/ui/use-media-query.test.ts) | Tests media query hook using renderHook, validates matching condition, updates on query change, and removes listener on unmount. Enhances user interface responsiveness and ensures accurate media query handling for dynamic layout adjustments.                               |
| [use-media-query.ts](https://github.com/Romain-Portanguen/react_hook_extended_kit/blob/master/src/hooks/ui/use-media-query.ts)           | Enables responsive design with a custom hook monitoring media queries in a React component, simplifying layout adaptability based on screen size. Synergizes seamlessly within the repositorys architecture to enhance user experience and interface responsiveness.            |
| [use-dark-mode.test.ts](https://github.com/Romain-Portanguen/react_hook_extended_kit/blob/master/src/hooks/ui/use-dark-mode.test.ts)     | Tests `useDarkMode` hook for initializing with false value, toggling dark mode, and updating localStorage, as well as reading initial state from localStorage. Hosted in src/hooks/ui/use-dark-mode.test.ts to ensure proper functionality within the repositorys architecture. |

</details>

<details closed><summary>src.hooks.network</summary>

| File                                                                                                                              | Summary                                                                                                                                                                                                  |
|-----------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [use-fetch.test.ts](https://github.com/Romain-Portanguen/react_hook_extended_kit/blob/master/src/hooks/network/use-fetch.test.ts) | Tests the useFetch hooks functionality for fetching data, handling fetch errors, and managing non-200 responses within the React Hook Extended Kit repositorys architecture.                             |
| [use-fetch.ts](https://github.com/Romain-Portanguen/react_hook_extended_kit/blob/master/src/hooks/network/use-fetch.ts)           | Enables fetching data from an API with custom options using React hooks. Manages data, error, and loading states. Facilitates easy integration into components for seamless data retrieval and handling. |

</details>

<details closed><summary>src.hooks.utils</summary>

| File                                                                                                                                    | Summary                                                                                                                                                                                                                  |
|-----------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [use-clipboard.ts](https://github.com/Romain-Portanguen/react_hook_extended_kit/blob/master/src/hooks/utils/use-clipboard.ts)           | Implements a custom hook for clipboard actions, allowing text copying and reading from the clipboard. Supports integration with React components for seamless clipboard interactions.                                    |
| [use-clipboard.test.ts](https://github.com/Romain-Portanguen/react_hook_extended_kit/blob/master/src/hooks/utils/use-clipboard.test.ts) | Tests clipboard operations including text copying and reading. Renders hook to interact with clipboard API. Verifies correct functionality of useClipboard hook in the React projects extended kit repository.           |
| [use-previous.test.ts](https://github.com/Romain-Portanguen/react_hook_extended_kit/blob/master/src/hooks/utils/use-previous.test.ts)   | Tests the usePrevious hook returning previous values, handling initial render, updates, and objects, ensuring correct behavior in tracking and returning the previous value.                                             |
| [use-previous.ts](https://github.com/Romain-Portanguen/react_hook_extended_kit/blob/master/src/hooks/utils/use-previous.ts)             | Enables tracking and retrieving the previous value of a variable in React components. Enhances state management by providing access to the previous variable state, enhancing component interaction and user experience. |

</details>

<details closed><summary>src.hooks.state</summary>

| File                                                                                                                                | Summary                                                                                                                                                                                                                  |
|-------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [use-counter.ts](https://github.com/Romain-Portanguen/react_hook_extended_kit/blob/master/src/hooks/state/use-counter.ts)           | Defines a custom hook providing a counter state with increment, decrement, and reset functions. Facilitates reusability for React components dealing with count management in the extended kit repositorys architecture. |
| [use-counter.test.ts](https://github.com/Romain-Portanguen/react_hook_extended_kit/blob/master/src/hooks/state/use-counter.test.ts) | Tests `useCounter` hook for initializing, incrementing, decrementing, and resetting a counter.                                                                                                                           |

</details>

<details closed><summary>src.hooks.storage</summary>

| File                                                                                                                                              | Summary                                                                                                                                                                                           |
|---------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [use-local-storage.ts](https://github.com/Romain-Portanguen/react_hook_extended_kit/blob/master/src/hooks/storage/use-local-storage.ts)           | Enables synchronization of state with localStorage using custom hooks. Stores values under specified keys and handles initial values if key is absent. Simplifies data management for components. |
| [use-local-storage.test.ts](https://github.com/Romain-Portanguen/react_hook_extended_kit/blob/master/src/hooks/storage/use-local-storage.test.ts) | Initializes with default value, updates localStorage, retrieves value, handles errors accessing localStorage, and handles errors setting localStorage.                                            |

</details>

<details closed><summary>src.hooks.timing</summary>

| File                                                                                                                                   | Summary                                                                                                                                                                                                                           |
|----------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [use-interval.test.ts](https://github.com/Romain-Portanguen/react_hook_extended_kit/blob/master/src/hooks/timing/use-interval.test.ts) | Verifies callback execution at intervals, stops interval when delay is null, and handles changing delay values. Enhances reliability of the timing functionality within the repositorys architecture.                             |
| [use-interval.ts](https://github.com/Romain-Portanguen/react_hook_extended_kit/blob/master/src/hooks/timing/use-interval.ts)           | Enables setting up intervals in React components. Manages interval execution based on provided callback and delay. Supports pausing the interval by passing null as delay. Facilitates real-time updates without manual handling. |

</details>

<details closed><summary>src.hooks.dom</summary>

| File                                                                                                                                          | Summary                                                                                                                                                                                                     |
|-----------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [use-click-outside.ts](https://github.com/Romain-Portanguen/react_hook_extended_kit/blob/master/src/hooks/dom/use-click-outside.ts)           | Enables detection of clicks outside an element with a customizable callback. Facilitates efficient handling of outside clicks in React components, enhancing user experience.                               |
| [use-click-outside.test.ts](https://github.com/Romain-Portanguen/react_hook_extended_kit/blob/master/src/hooks/dom/use-click-outside.test.ts) | Tests `useClickOutside` hook by simulating clicks inside/outside an element, ensuring correct event handling. It validates the behavior of the hook when detecting clicks outside of the specified element. |

</details>

<details closed><summary>src.hooks.performance</summary>

| File                                                                                                                                        | Summary                                                                                                                                                                                                                                                   |
|---------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [use-throttle.ts](https://github.com/Romain-Portanguen/react_hook_extended_kit/blob/master/src/hooks/performance/use-throttle.ts)           | Enables throttling of input value changes in React components for improved performance. Throttle rate is set in milliseconds. Facilitates smoother user interactions and reduces unnecessary rendering. Located in the hooks directory of the repository. |
| [use-debounce.ts](https://github.com/Romain-Portanguen/react_hook_extended_kit/blob/master/src/hooks/performance/use-debounce.ts)           | Enables debouncing values in React components for improved performance**. Uses a custom hook to delay value updates, optimizing user input and UI responsiveness. Ideal for scenarios requiring controlled input behavior in real-time applications.      |
| [use-debounce.test.ts](https://github.com/Romain-Portanguen/react_hook_extended_kit/blob/master/src/hooks/performance/use-debounce.test.ts) | Tests debounce functionality in useDebounce hook with renderHook, act, and fake timers for accurate value updates.                                                                                                                                        |
| [use-throttle.test.ts](https://github.com/Romain-Portanguen/react_hook_extended_kit/blob/master/src/hooks/performance/use-throttle.test.ts) | Tests the `useThrottle` hooks throttling behavior under different scenarios. Verifies value updates, timeouts, and rapid changes, ensuring correct throttling and unmount functionality. Handles immediate updates when remaining time is zero.           |

</details>

<details closed><summary>src.hooks.effects</summary>

| File                                                                                                                                              | Summary                                                                                                                                                                                                                   |
|---------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [use-online-status.ts](https://github.com/Romain-Portanguen/react_hook_extended_kit/blob/master/src/hooks/effects/use-online-status.ts)           | Enables monitoring browser online status. Tracks and updates online status using React hooks. Enhances components with real-time online status display. Essential for responsive web applications in the React ecosystem. |
| [use-online-status.test.ts](https://github.com/Romain-Portanguen/react_hook_extended_kit/blob/master/src/hooks/effects/use-online-status.test.ts) | Validates online/offline status functionality in the `useOnlineStatus` hook. Renders hook in online and offline states to confirm correct boolean outputs.                                                                |

</details>

---

## 🚀 Getting Started

**System Requirements:**

- **TypeScript**: `version x.y.z`

### ⚙️ Installation

<h4>From <code>source</code></h4>

> 1. Clone the react_hook_extended_kit repository:
>
> ```console
> $ git clone https://github.com/Romain-Portanguen/react_hook_extended_kit
> ```
>
> 2. Change to the project directory:
>
> ```console
> $ cd react_hook_extended_kit
> ```
>
> 3. Install the dependencies:
>
> ```console
> $ npm install
> ```

### 🤖 Usage

<h4>From <code>source</code></h4>

> Run react_hook_extended_kit using the command below:
>
> ```console
> $ npm run build && node dist/index.js
> ```

### 🧪 Tests

> Run the test suite using the command below:
>
> ```console
> $ npm run test
> ```

---

## 🤝 Contributing

Contributions are welcome! Here are several ways you can contribute:

- **[Report Issues](https://github.com/Romain-Portanguen/react_hook_extended_kit/issues)**: Submit bugs found or log feature requests for the `react_hook_extended_kit` project.
- **[Submit Pull Requests](https://github.com/Romain-Portanguen/react_hook_extended_kit/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.
- **[Join the Discussions](https://github.com/Romain-Portanguen/react_hook_extended_kit/discussions)**: Share your insights, provide feedback, or ask questions.

<details closed>
<summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your github account.
2. **Clone Locally**: Clone the forked repository to your local machine using a git client.

   ```sh
   git clone https://github.com/Romain-Portanguen/react_hook_extended_kit
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
   <a href="https://github.com{/Romain-Portanguen/react_hook_extended_kit/}graphs/contributors">
      <img src="https://contrib.rocks/image?repo=Romain-Portanguen/react_hook_extended_kit">
   </a>
</p>
</details>

---

## 🎗 License

This project is protected under the [MIT](https://choosealicense.com/licenses) License. For more details, refer to the [LICENSE](https://choosealicense.com/licenses/) file.

---
