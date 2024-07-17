![](https://github.com/Romain-Portanguen/react_hook_extended_kit/blob/443e78e3101544898279be4806a2e15546613e27/src/public/assets/react_hook_extended_kit.png)

<h3 align="center">
    <em>Empowering React with hooks of boundless potential.</em>
</h3>
<p align="center">
	<!-- Shields.io badges not used with skill icons. --><p>
<p align="center">
		<em>Developed with the software and tools below.</em>
</p>
<p align="center">
	<a href="https://skillicons.dev">
		<img src="https://skillicons.dev/icons?i=js,jest,md,react,ts">
	</a></p>

<br><!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary><br>

- [📑 Official documentation](#-official-documentation)
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

## 📑 Official documentation

[RHEK - React Hook Extended Kit](https://romain-portanguen.github.io/rhek_docs/)

--- 

## 📍 Overview

React Hook Extended Kit is a comprehensive utility library aimed at enhancing React applications with a collection of custom hooks. Developed by Romain Portanguen under the MIT licence, it introduces advanced features such as state management, online state tracking, dark mode implementation, performance optimisation and more. By simplifying the integration of features such as window resizing, media queries and clipboard interactions, this open-source project streamlines front-end development and provides a valuable resource for developers looking to efficiently enhance their React projects.

---

## 🧩 Features

|     | Feature           | Description                                                                                                                                                                                                                                                                                                                                                        |
|-----|-------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ⚙️  | **Architecture**  | The project adopts a modular architecture with centralized hooks collection, efficient testing configurations, and streamlined entry points. This architecture enhances extensibility and integration in React projects.                                                                                                                                           |
| 🔩  | **Code Quality**  | The codebase maintains high code quality and adheres to best practices with consistent formatting, linting, and testing. It follows TypeScript standards and leverages efficient code minification techniques.                                                                                                                                                     |
| 📄  | **Documentation** | The project provides comprehensive documentation through the generation of documentation via the Typedoc API, type definitions and clear online comments. This improves readability and ease of use for developers using the repository; in addition, a full version of the documentation is also available in a Docsify interface. Link available in description. |
| 🔌  | **Integrations**  | Key integrations include Jest for testing, TypeScript for typing, and ESLint for code analysis. These integrations streamline development processes and ensure code correctness.                                                                                                                                                                                   |
| 🧩  | **Modularity**    | The codebase demonstrates high modularity with each hook encapsulated as a separate module, promoting code reusability and easy maintenance in React projects.                                                                                                                                                                                                     |
| 🧪  | **Testing**       | Testing frameworks and tools like Jest, React Testing Library, and @testing-library/react-hooks are used to ensure robust test coverage and maintain code reliability.                                                                                                                                                                                             |
| ⚡️  | **Performance**   | The project emphasizes efficiency through minification scripts, throttle and debounce hooks for performance optimization, and clean event handling for improved responsiveness.                                                                                                                                                                                    |
| 🛡️ | **Security**      | Data protection measures include local/session storage handling, event listener management, and error handling to prevent unauthorized access and ensure secure data management.                                                                                                                                                                                   |
| 📦  | **Dependencies**  | Key external libraries and dependencies include Prettier, TypeScript, ESLint, Jest, and various testing utilities. These libraries enhance development workflows and maintain code quality.                                                                                                                                                                        |
| 🚀  | **Scalability**   | The project exhibits scalability with hooks catering to varied functionalities, state management, performance optimization, and user interaction handling, supporting increased traffic and load demands efficiently.                                                                                                                                              |

---

## 🗂️ Repository Structure

```sh
└── react_hook_extended_kit/
    ├── .github
    │   └── FUNDING.yml
    ├── LICENSE
    ├── README.md
    ├── babel.config.cjs
    ├── jestconfig.ts
    ├── package-lock.json
    ├── package.json
    ├── scripts
    │   └── minify.js
    ├── src
    │   ├── hooks
    │   ├── index.ts
    │   └── public
    ├── tsconfig.json
    └── typedoc.json
```

---

## 📦 Modules

<details closed><summary>.</summary>

| File                                                                                                            | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|-----------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [jestconfig.ts](https://github.com/Romain-Portanguen/react_hook_extended_kit/blob/master/jestconfig.ts)         | Implements Jest configuration in the react_hook_extended_kit repo. Defines test environment, file transformations, coverage settings, and more for efficient testing.                                                                                                                                                                                                                                                                                                           |
| [package-lock.json](https://github.com/Romain-Portanguen/react_hook_extended_kit/blob/master/package-lock.json) | The code file in `react_hook_extended_kit/src/index.ts` serves as the central entry point for the React Hook Extended Kit repository. It acts as a bridge, organizing and exporting essential functions and utilities from various hook modules within the project. By consolidating these hooks, the `index.ts` file streamlines access to the extended functionalities provided by the repository, fostering easier integration and enhanced extensibility in React projects. |
| [package.json](https://github.com/Romain-Portanguen/react_hook_extended_kit/blob/master/package.json)           | Defines utility for React hooks, enhances with centralized hooks collection, emphasizes build, test automation, and documentation, enabling seamless integration and maintenance.                                                                                                                                                                                                                                                                                               |
| [typedoc.json](https://github.com/Romain-Portanguen/react_hook_extended_kit/blob/master/typedoc.json)           | Generates API documentation for React Hook Extended Kit by specifying entry points and theme. Excludes private, protected, and external items, enhancing readability and usability for developers.                                                                                                                                                                                                                                                                              |
| [tsconfig.json](https://github.com/Romain-Portanguen/react_hook_extended_kit/blob/master/tsconfig.json)         | Optimize TypeScript configuration for React project to enforce strict typing and ES6 features. Set up module resolution, JSX support, and output directory. Exclude test files for cleaner build output.                                                                                                                                                                                                                                                                        |
| [babel.config.cjs](https://github.com/Romain-Portanguen/react_hook_extended_kit/blob/master/babel.config.cjs)   | Enables Babel presets and plugin for React, TypeScript, and environment configuration in the repository.                                                                                                                                                                                                                                                                                                                                                                        |

</details>

<details closed><summary>scripts</summary>

| File                                                                                                    | Summary                                                                                                                                                                               |
|---------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [minify.js](https://github.com/Romain-Portanguen/react_hook_extended_kit/blob/master/scripts/minify.js) | Implement minification for JavaScript files within the dist directory. This script reads, minifies, and writes files using Terser. Automatically applies to all.js files recursively. |

</details>

<details closed><summary>.github</summary>

| File                                                                                                        | Summary                                                                                                                                                                                                                                             |
|-------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [FUNDING.yml](https://github.com/Romain-Portanguen/react_hook_extended_kit/blob/master/.github/FUNDING.yml) | Enables sponsorship options for the repository through various funding platforms like GitHub Sponsors, Patreon, and others by specifying usernames or links. Facilitates community support and financial contributions for the open-source project. |

</details>

<details closed><summary>src</summary>

| File                                                                                              | Summary                                                                                                                                                                                                                                 |
|---------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [index.ts](https://github.com/Romain-Portanguen/react_hook_extended_kit/blob/master/src/index.ts) | Exports essential custom hooks for various functionalities in the parent repository. These hooks enhance user experience by providing features like click handling, state management, dark mode, network requests, and storage options. |

</details>

<details closed><summary>src.hooks.ui</summary>

| File                                                                                                                                     | Summary                                                                                                                                                                                                                                                |
|------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [use-toggle.test.ts](https://github.com/Romain-Portanguen/react_hook_extended_kit/blob/master/src/hooks/ui/use-toggle.test.ts)           | Validates useToggle hook for initializing toggle state, toggling between true and false values, and setting a custom initial value. The tests ensure correct functionality and behavior.                                                               |
| [use-window-size.test.ts](https://github.com/Romain-Portanguen/react_hook_extended_kit/blob/master/src/hooks/ui/use-window-size.test.ts) | Returns current window size and updates on resize.                                                                                                                                                                                                     |
| [use-toggle.ts](https://github.com/Romain-Portanguen/react_hook_extended_kit/blob/master/src/hooks/ui/use-toggle.ts)                     | Enables toggling boolean states in React components using a custom hook. Directly accessible in the `hooks` directory, it simplifies managing the state by returning an array with the current value and a toggle function.                            |
| [use-window-size.ts](https://github.com/Romain-Portanguen/react_hook_extended_kit/blob/master/src/hooks/ui/use-window-size.ts)           | Enables retrieving current window size in React components. The useWindowSize hook in the src/hooks/ui directory dynamically updates width and height based on window resizing, enhancing UI responsiveness.                                           |
| [use-dark-mode.ts](https://github.com/Romain-Portanguen/react_hook_extended_kit/blob/master/src/hooks/ui/use-dark-mode.ts)               | Manages dark mode using localStorage. Returns current state and toggle function for dark/light mode in React components.                                                                                                                               |
| [use-media-query.test.ts](https://github.com/Romain-Portanguen/react_hook_extended_kit/blob/master/src/hooks/ui/use-media-query.test.ts) | Detect matches/non-matches, update status on query change, and remove listeners on unmount.                                                                                                                                                            |
| [use-media-query.ts](https://github.com/Romain-Portanguen/react_hook_extended_kit/blob/master/src/hooks/ui/use-media-query.ts)           | Enables monitoring of media queries in React components to dynamically adjust UI based on screen size. It offers a reusable `useMediaQuery` hook that returns a boolean indicating if the query matches, simplifying responsive design implementation. |
| [use-dark-mode.test.ts](https://github.com/Romain-Portanguen/react_hook_extended_kit/blob/master/src/hooks/ui/use-dark-mode.test.ts)     | Initializes with default value, toggles dark mode & updates localStorage, and reads initial state from localStorage. Crucial for ensuring correct functionality of dark mode feature in the React app.                                                 |

</details>

<details closed><summary>src.hooks.network</summary>

| File                                                                                                                              | Summary                                                                                                                                                                                                                                                  |
|-----------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [use-fetch.test.ts](https://github.com/Romain-Portanguen/react_hook_extended_kit/blob/master/src/hooks/network/use-fetch.test.ts) | Tests the useFetch hook for fetching data, handling errors, and non-200 responses. Mocks global fetch function and asserts data, loading state, and errors returned by the hook.                                                                         |
| [use-fetch.ts](https://github.com/Romain-Portanguen/react_hook_extended_kit/blob/master/src/hooks/network/use-fetch.ts)           | Enables fetching data from an API with loading and error handling. Achieves this by providing a custom hook `useFetch` with parameters for URL and options. Returns an object with data, error, and loading states for easy integration into components. |

</details>

<details closed><summary>src.hooks.utils</summary>

| File                                                                                                                                                            | Summary                                                                                                                                                                                                                                                                       |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [use-intersection-observer.ts](https://github.com/Romain-Portanguen/react_hook_extended_kit/blob/master/src/hooks/utils/use-intersection-observer.ts)           | Enables observing element visibility using Intersection Observer API in React. Returns a reference to the observed element and a boolean for visibility status. Helps lazy load images efficiently in the React application.                                                  |
| [use-idle.ts](https://github.com/Romain-Portanguen/react_hook_extended_kit/blob/master/src/hooks/utils/use-idle.ts)                                             | Detects user inactivity using custom hook `useIdle` which returns boolean state. Monitors mouse/keyboard events to reset timeout, signaling user idleness. Key feature in `react_hook_extended_kit` for managing idle state in components dynamically.                        |
| [use-idle.test.ts](https://github.com/Romain-Portanguen/react_hook_extended_kit/blob/master/src/hooks/utils/use-idle.test.ts)                                   | Tests use `useIdle` hooks functionality to confirm initial active state, transition to idle after timeout, reset on activity, and cleanup on unmount. Leveraging `@testing-library/react-hooks` and Jests fake timers ensure accurate verification of idle state transitions. |
| [use-event-listener.ts](https://github.com/Romain-Portanguen/react_hook_extended_kit/blob/master/src/hooks/utils/use-event-listener.ts)                         | Enables event listener management in React components. Attaches event handlers to specified elements to trigger actions based on events. Facilitates clean and efficient handling of user interactions within the parent repositorys architecture.                            |
| [use-clipboard.ts](https://github.com/Romain-Portanguen/react_hook_extended_kit/blob/master/src/hooks/utils/use-clipboard.ts)                                   | Implements a custom hook for clipboard operations, providing functions to copy text to the clipboard and read text from it. Streamlines clipboard interactions in React components and enhances user experience.                                                              |
| [use-clipboard.test.ts](https://github.com/Romain-Portanguen/react_hook_extended_kit/blob/master/src/hooks/utils/use-clipboard.test.ts)                         | Tests copying and reading text from clipboard are covered by `useClipboard` hook in the parent repository. The tests validate the functionality using `@testing-library/react-hooks`. This contributes to ensuring the reliability of the clipboard interaction feature.      |
| [use-geolocation.test.ts](https://github.com/Romain-Portanguen/react_hook_extended_kit/blob/master/src/hooks/utils/use-geolocation.test.ts)                     | Tests the useGeolocation hook by simulating successful and failed geolocation requests. Verifies default state, updates with position on success, and handles errors. Also confirms clearing of watch on unmount.                                                             |
| [use-intersection-observer.test.ts](https://github.com/Romain-Portanguen/react_hook_extended_kit/blob/master/src/hooks/utils/use-intersection-observer.test.ts) | Tests use a mock IntersectionObserver to validate the useIntersectionObserver hook behavior. Tests include element observation, intersection detection, option updates, and proper unobserving and disconnecting.                                                             |
| [use-event-listener.test.ts](https://github.com/Romain-Portanguen/react_hook_extended_kit/blob/master/src/hooks/utils/use-event-listener.test.ts)               | Triggers handler on event, cleans up on unmount, supports specific element events, updates handler changes, and handles window events by default. Part of the react_hook_extended_kit repositorys architecture.                                                               |
| [use-previous.test.ts](https://github.com/Romain-Portanguen/react_hook_extended_kit/blob/master/src/hooks/utils/use-previous.test.ts)                           | Tests the `usePrevious` hook functionality by ensuring it returns the correct values before and after updates, including handling objects.                                                                                                                                    |
| [use-geolocation.ts](https://github.com/Romain-Portanguen/react_hook_extended_kit/blob/master/src/hooks/utils/use-geolocation.ts)                               | Enables tracking user geolocation with customizable options. Implements a geolocation hook returning coordinates and errors. Facilitates real-time position updates using browser geolocation API.                                                                            |
| [use-previous.ts](https://github.com/Romain-Portanguen/react_hook_extended_kit/blob/master/src/hooks/utils/use-previous.ts)                                     | Enables tracking and retrieving the previous value of a variable using a custom React hook. Facilitates monitoring state changes and building dynamic UI components within the open-source React Hook Extended Kit repository structure.                                      |

</details>

<details closed><summary>src.hooks.state</summary>

| File                                                                                                                                | Summary                                                                                                                                                                                                                                                          |
|-------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [use-counter.ts](https://github.com/Romain-Portanguen/react_hook_extended_kit/blob/master/src/hooks/state/use-counter.ts)           | Enables creation of a counter state with increment, decrement, and reset functions. Supports initializing value and returns current count with corresponding actions. Ideal for managing counter UI components in React applications within the hooks directory. |
| [use-counter.test.ts](https://github.com/Romain-Portanguen/react_hook_extended_kit/blob/master/src/hooks/state/use-counter.test.ts) | Initializes at 0, increments, decrements, and resets count. Integrated with @testing-library/react-hooks for robust testing within the React Hook Extended Kit repository.                                                                                       |

</details>

<details closed><summary>src.hooks.storage</summary>

| File                                                                                                                                                  | Summary                                                                                                                                                                                                                                  |
|-------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [use-local-storage.ts](https://github.com/Romain-Portanguen/react_hook_extended_kit/blob/master/src/hooks/storage/use-local-storage.ts)               | Enables synchronization of state with localStorage using a custom hook. Maintains values under specified keys, providing getters and setters for updates. Aids in persisting and manipulating data for React components.                 |
| [use-local-storage.test.ts](https://github.com/Romain-Portanguen/react_hook_extended_kit/blob/master/src/hooks/storage/use-local-storage.test.ts)     | Tests `useLocalStorage` hook for initializing, updating, and retrieving values from localStorage, handling errors gracefully. Maintains expected behavior and error scenarios of the hook within the React applications hooks directory. |
| [use-session-storage.ts](https://github.com/Romain-Portanguen/react_hook_extended_kit/blob/master/src/hooks/storage/use-session-storage.ts)           | Enables synchronization of state with sessionStorage by storing and retrieving values based on a specified key. Offers a function to update and maintain state. Ideal for persisting user data in React components.                      |
| [use-session-storage.test.ts](https://github.com/Romain-Portanguen/react_hook_extended_kit/blob/master/src/hooks/storage/use-session-storage.test.ts) | Tests useSessionStorage hook for initialization, updates, retrieval, and error handling. Validates proper sessionStorage behavior with different value scenarios, ensuring robust data handling in the React application.                |

</details>

<details closed><summary>src.hooks.timing</summary>

| File                                                                                                                                   | Summary                                                                                                                                                                             |
|----------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [use-interval.test.ts](https://github.com/Romain-Portanguen/react_hook_extended_kit/blob/master/src/hooks/timing/use-interval.test.ts) | Ensures callback is executed at intervals, stops interval with null delay, and handles changing delay values. Maintains expected callback invocation counts in different scenarios. |
| [use-interval.ts](https://github.com/Romain-Portanguen/react_hook_extended_kit/blob/master/src/hooks/timing/use-interval.ts)           | Enables interval setup with callback execution and delay control in React projects. Facilitates seamless handling of repeated actions.                                              |

</details>

<details closed><summary>src.hooks.dom</summary>

| File                                                                                                                                          | Summary                                                                                                                                                                                                                                                                               |
|-----------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [use-click-outside.ts](https://github.com/Romain-Portanguen/react_hook_extended_kit/blob/master/src/hooks/dom/use-click-outside.ts)           | Implements a custom hook `useClickOutside` detecting clicks outside a specified element. Ensures accessibility and enhances UX by executing a callback when a click occurs outside the component, fostering a seamless user experience in React applications.                         |
| [use-click-outside.test.ts](https://github.com/Romain-Portanguen/react_hook_extended_kit/blob/master/src/hooks/dom/use-click-outside.test.ts) | Tests use `useClickOutside` hook to verify click behavior. First test checks handler call when clicking outside element. Second test ensures handler isnt called when clicking inside element. Core functionality validated through rendering hooks and simulating user interactions. |

</details>

<details closed><summary>src.hooks.performance</summary>

| File                                                                                                                                        | Summary                                                                                                                                                                                                                                                                  |
|---------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [use-throttle.ts](https://github.com/Romain-Portanguen/react_hook_extended_kit/blob/master/src/hooks/performance/use-throttle.ts)           | Defines a custom throttle hook in the react_hook_extended_kit repo. Throttles a value input at a specified limit to enhance performance. Key features include handling value updates and managing timing constraints, ensuring optimal reactivity in user interfaces.    |
| [use-debounce.ts](https://github.com/Romain-Portanguen/react_hook_extended_kit/blob/master/src/hooks/performance/use-debounce.ts)           | Enables debouncing of a value in React using a custom hook with a specified delay. Facilitates smoother user input handling to optimize performance.                                                                                                                     |
| [use-debounce.test.ts](https://github.com/Romain-Portanguen/react_hook_extended_kit/blob/master/src/hooks/performance/use-debounce.test.ts) | Tests debouncing functionality in useDebounce hook through value updates and timer manipulation.                                                                                                                                                                         |
| [use-throttle.test.ts](https://github.com/Romain-Portanguen/react_hook_extended_kit/blob/master/src/hooks/performance/use-throttle.test.ts) | Tests the throttling behavior of the `useThrottle` hook, ensuring it delays updates based on specified limits and handles rapid value changes correctly. Also validates that timeouts are cleared on unmount and immediate updates work when the remaining time is zero. |

</details>

<details closed><summary>src.hooks.effects</summary>

| File                                                                                                                                                  | Summary                                                                                                                                                                                                                                                         |
|-------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [use-online-status.ts](https://github.com/Romain-Portanguen/react_hook_extended_kit/blob/master/src/hooks/effects/use-online-status.ts)               | Enables tracking of browser online status with a custom hook. Maintains state and event listeners for online/offline changes. Crucial for real-time online status visualization in React components within the repositorys architecture.                        |
| [use-page-visibility.test.ts](https://github.com/Romain-Portanguen/react_hook_extended_kit/blob/master/src/hooks/effects/use-page-visibility.test.ts) | Tests the `usePageVisibility` hook to ensure it accurately detects page visibility changes. Verifies correct return values for both visible and hidden page states.                                                                                             |
| [use-online-status.test.ts](https://github.com/Romain-Portanguen/react_hook_extended_kit/blob/master/src/hooks/effects/use-online-status.test.ts)     | Tests for `useOnlineStatus` hook validate online/offline status accuracy. Simulates online/offline events to assert correct boolean return. Demonstrates expected behavior under network status changes within the parent repositorys React hooks architecture. |
| [use-page-visibility.ts](https://github.com/Romain-Portanguen/react_hook_extended_kit/blob/master/src/hooks/effects/use-page-visibility.ts)           | Enables tracking page visibility with a custom hook in the React project. Monitors if the page is visible and adjusts video playback accordingly. Enhances user experience by controlling video behavior based on page visibility status.                       |

</details>

---

## 🚀 Getting Started

**System Requirements:**

* **TypeScript**: `version x.y.z`

### ⚙️ Installation

<h4>From <code>source</code></h4>

> 1. Clone the react_hook_extended_kit repository:
>
> ```console
> $ git clone https://github.com/Romain-Portanguen/react_hook_extended_kit
> ```
>
> 2. Change to the project directory:
> ```console
> $ cd react_hook_extended_kit
> ```
>
> 3. Install the dependencies:
> ```console
> $ npm install
> ```

### 🤖 Usage

<h4>From <code>source</code></h4>

> Run react_hook_extended_kit using the command below:
> ```console
> $ npm run build && node dist/index.js
> ```

### 🧪 Tests

> Run the test suite using the command below:
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
