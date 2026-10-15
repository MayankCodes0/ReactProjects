# React Basic Projects Suite

A modular, production-ready portfolio showcasing four foundational React applications merged into a unified single-page application (SPA). Built with **React 19**, **Vite 8**, **Tailwind CSS v4**, and **React Router 7**, this repository demonstrates essential React design patterns, modern JavaScript (ES6+) paradigms, and accessible UI engineering.

---

## 🚀 Live Demo & Navigation

The application features a centralized dashboard routing to four interactive tools:

1. **Background Color Changer** (`/bgColorChanger`) — Real-time interactive theme and background switcher.
2. **Counter App** (`/counter`) — Numerical counter with boundary constraints, visual progress tracking, and validation alerts.
3. **Password Generator** (`/passwordGenerator`) — Configurable credential generator with character controls, length sliders, and clipboard integration.
4. **Currency Converter** (`/currencyConverter`) — Real-time foreign exchange converter featuring custom data-fetching hooks, modular inputs, and currency swapping.

Every project page includes a dedicated **Concepts & Architecture** section directly below the interactive interface detailing the specific React and JavaScript mechanisms at play.

---

## 🛠️ Tech Stack & Tooling

| Technology | Version | Purpose |
| :--- | :--- | :--- |
| **React** | `^19.2.8` | Core UI library for component composition and state reconciliation |
| **React DOM** | `^19.2.8` | DOM renderer for React components |
| **React Router** | `^7.18.4` | Declarative client-side routing, layout nesting, and history tracking |
| **Tailwind CSS** | `^4.3.3` | Utility-first CSS framework using modern CSS variables and transitions |
| **Vite** | `^8.3.0` | Next-generation frontend build tooling and lightning-fast HMR |
| **ESLint** | `^10.10.0` | Code quality, React Hooks rules, and syntax linting |

---

## 📂 Project Architecture

```text
reactBasicProjectsMerged/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── apps/
│   │   ├── bgColorChanger/
│   │   │   └── BgColorChanger.jsx       # Color Changer App + Concepts Section
│   │   ├── counter/
│   │   │   └── CounterApp.jsx           # Counter App + Concepts Section
│   │   ├── currencyConverter/
│   │   │   ├── components/
│   │   │   │   └── InputBox.jsx         # Reusable currency input component
│   │   │   ├── hooks/
│   │   │   │   └── useCurrencyInfo.js   # Custom data-fetching hook
│   │   │   └── CurrencyConverterApp.jsx # Currency Converter App + Concepts Section
│   │   └── passwordGenerator/
│   │       └── PasswordGeneratorApp.jsx # Password Generator + Concepts Section
│   ├── assets/                          # Static assets and brand marks
│   ├── components/
│   │   ├── common/
│   │   │   └── ProjectConcepts.jsx      # Reusable concepts documentation component
│   │   ├── header/
│   │   │   └── Header.jsx               # Navigation bar with active route indicators
│   │   └── home/
│   │       └── Home.jsx                 # Showcase homepage & project gallery
│   ├── data/
│   │   └── projectConceptsData.js       # Centralized concepts data for each app
│   ├── App.css                          # Tailwind CSS imports
│   ├── index.css                        # Global CSS and Tailwind entry
│   ├── Layout.jsx                       # Shared layout wrapper with auto-scroll to top
│   └── main.jsx                         # React Router browser provider setup
├── package.json
├── vite.config.js
└── README.md
```

---

## 🔍 Detailed Analysis of Projects & Concepts Implemented

### 1. Background Color Changer (`/bgColorChanger`)

An interactive palette selector that morphs the viewport background color in real time.

#### ⚛️ React Concepts Implemented
- **`useState` Hook**: Holds the currently active color hex string (`const [color, setColor] = useState("#101110")`). Calling `setColor` triggers an immediate component re-render with the selected shade.
- **Dynamic Inline Style Binding**: Binds the active state directly to the container DOM style attribute (`style={{ backgroundColor: color }}`), combining with Tailwind's `transition-colors duration-300` for smooth color interpolation.
- **List Rendering & Reconciliation**: Maps over a structured array of palette options via `colors.map(...)`. Assigns a unique, stable `key={item.name}` prop to assist React's virtual DOM diffing engine.
- **Derived Conditional Class Names**: Dynamically applies active borders and tinted highlights (`color === item.value ? 'border-[#a3b18a] bg-[#a3b18a]/10' : '...'`) based on whether the swatch matches current state.
- **Event Handling Closures**: Uses inline arrow functions (`onClick={() => setColor(item.value)}`) to pass arguments without invoking setters during the initial render.
- **Accessibility Attributes (a11y)**: Enhances button elements with `aria-pressed={color === item.value}` and descriptive `aria-label` tags for screen reader compatibility.

#### 🟨 JavaScript Concepts Implemented
- **Structured Object Arrays**: Models palette metadata as objects `{ name: "Red", value: "#b85c5c" }`, decoupling data definitions from JSX markup.
- **`Array.prototype.map()`**: Pure, declarative transformation of raw data objects into virtual DOM JSX elements.
- **String Formatting (`toUpperCase()`)**: Normalizes hex codes into uppercase strings for user-facing typography.
- **Lexical Scoping & Closures**: Event handler callbacks retain access to `item.value` from the outer map loop.

---

### 2. Counter App (`/counter`)

A bounded numerical counter with range enforcement (0 to 20), visual progress calculation, and real-time validation alerts.

#### ⚛️ React Concepts Implemented
- **Multi-Slice `useState`**: Manages independent state variables: `counter` (current number) and `var1` (boundary alert message).
- **State Boundary Guards**: Validates operational thresholds before state updates (`if (counter >= 20)` / `if (counter <= 0)`), halting illegal state transitions.
- **Short-Circuit Conditional Rendering**: Employs JavaScript's logical AND (`var1 && <p role="alert">...`) to inject error messages only when active.
- **Computed Inline Styling**: Derives visual progress percentage `(counter / 20) * 100` dynamically, updating the progress bar width on each render without maintaining redundant state.
- **Declarative UI Synchronization**: Mutating state through `setCounter` causes the entire view to synchronize automatically without manual DOM manipulation.
- **ARIA Live Regions**: Utilizes `role="alert"` so assistive technology immediately announces boundary violations.

#### 🟨 JavaScript Concepts Implemented
- **`String.prototype.padStart()`**: Ensures consistent double-digit display (e.g. `String(counter).padStart(2, '0')` converts `7` into `"07"`).
- **Nested Ternary Expressions**: Concise multi-branch status evaluation (`counter === 0 ? "Ready" : counter === 20 ? "Max" : "Keep counting"`).
- **Mathematical Normalization**: Maps bounded values between 0 and 20 into a 0%–100% scale for progress calculation.
- **Closures**: `addValue` and `substractValue` encapsulate and preserve access to component-level variables.

---

### 3. Password Generator (`/passwordGenerator`)

A security tool generating randomized strings based on user-specified length (8 to 32 characters) and character pool configurations.

#### ⚛️ React Concepts Implemented
- **`useCallback` Hook (Memoization)**: Memoizes the `passwordGenerator` function definition across renders, preventing needless function recreations unless `length`, `numAllowed`, or `charAllowed` change.
- **`useEffect` Hook (Synchronization)**: Synchronizes password generation with state changes, automatically triggering regeneration whenever slider or checkbox options update.
- **`useRef` Hook (DOM Reference)**: Holds a direct, persistent reference to the password `<input>` node (`passwordRef`), enabling programmatic text selection (`passwordRef.current?.select()`) upon clicking copy.
- **Functional State Updaters**: Uses updater callbacks `setNumAllowed((prev) => !prev)` to toggle booleans safely based on prior state, avoiding race conditions and stale closures.
- **Controlled Components**: Controls the range slider via `value={length}` and synchronizes adjustments through `onChange`.

#### 🟨 JavaScript Concepts Implemented
- **Pseudo-Random Algorithms**: Calculates randomized indices within character pool bounds: `Math.floor(Math.random() * str.length)`.
- **String Manipulation**: Traverses characters via `str.charAt()` and conditionally concatenates character subsets (`str += num`, `str += char`).
- **Navigator Clipboard Web API**: Asynchronously writes text to the operating system clipboard using `window.navigator.clipboard.writeText(password)`.
- **Optional Chaining (`?.`)**: Defensively calls `passwordRef.current?.select()` to prevent runtime exceptions when refs are unmounted.

---

### 4. Currency Converter (`/currencyConverter`)

A financial exchange calculator connecting to live foreign exchange rates, featuring modular inputs and bidirectional currency swapping.

#### ⚛️ React Concepts Implemented
- **Custom Hook Architecture (`useCurrencyInfo`)**: Encapsulates external API communication, asynchronous lifecycle, and internal state within a reusable hook function.
- **Component Reusability & Composition**: Reuses a single `<InputBox />` component for both "From" and "To" currency sections via customizable props (`label`, `amount`, `currencyOptions`, etc.).
- **`useId` Hook for Accessible IDs**: Generates unique, stable input identifiers (`amountInputId = useId()`) within `InputBox` to tie `<label htmlFor={...}>` to `<input id={...}>`.
- **State Lifting**: Manages `from`, `to`, `amount`, and `convertedAmount` in the parent component to allow bidirectional swapping and synchronized calculations.
- **Synthetic Event Handling**: Intercepts standard browser form submissions using `e.preventDefault()` to compute exchange totals without triggering full page reloads.
- **Defensive Callbacks**: Uses guard evaluations (`onAmountChange && onAmountChange(...)`) before invoking props.

#### 🟨 JavaScript Concepts Implemented
- **Fetch API & Promises**: Executes asynchronous network requests against CDN currency endpoints with `.then()` Promise chaining.
- **`Object.keys()` Reflection**: Extracts currency ticker symbols from the rate response object to dynamically populate dropdown selections.
- **Dynamic Property Access**: Employs bracket notation (`currencyInfo[to]`) to evaluate live rates and perform multiplication at runtime.
- **Explicit Type Coercion**: Casts string inputs to numbers using `Number(e.target.value)` to prevent string concatenation during arithmetic operations.
- **Variable Swapping Algorithm**: Exchanges source and destination states simultaneously.

---

## 💻 Getting Started Locally

### Prerequisites
- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher

### Installation

1. Clone or navigate to the repository directory:
   ```bash
   cd reactBasicProjectsMerged
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to the local Vite URL (typically `http://localhost:5173`).

---

## 📜 Available Scripts

- `npm run dev`: Starts the Vite development server with Hot Module Replacement (HMR).
- `npm run build`: Compiles production assets into the `dist/` directory.
- `npm run preview`: Locally previews the production build.
- `npm run lint`: Runs ESLint to verify code quality and style standards.

---

## 🎨 Design System

- **Background Palette**: `#101110` (Dark canvas), `#171916` (Card surface), `#1c1f1a` (Interactive state)
- **Border Palette**: `#2c2f2a`, `#41443d`, `#292b28`
- **Accent Color**: `#a3b18a` (Sage green), `#b4c09d` (Hover state)
- **Typography**: Clean sans-serif headings with monospace accents (`font-mono`) for numerical readouts and code snippets.
- **Responsive Layout**: Fluid breakpoints supporting mobile devices, tablets, and wide desktop viewports.

---

## 📄 License

This project is licensed under the MIT License.