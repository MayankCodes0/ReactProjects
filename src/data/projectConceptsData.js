export const projectConceptsData = {
  bgColorChanger: {
    projectName: "Background Color Changer",
    overview:
      "A dynamic theme switcher demonstrating reactive state binding, dynamic styling synchronization, and efficient list rendering of interactive swatches.",
    reactConcepts: [
      {
        title: "useState Hook for Dynamic Theme State",
        badge: "useState",
        description:
          "Stores the active background color hex value. Invoking setColor triggers an immediate, seamless component re-render with the new palette choice.",
        code: "const [color, setColor] = useState('#101110');",
      },
      {
        title: "Dynamic Inline Styles & CSS Transitions",
        badge: "Inline Styles",
        description:
          "Applies the state variable directly to the DOM node style attribute, smoothly interpolating background changes using Tailwind's transition-colors duration-300.",
        code: "style={{ backgroundColor: color }}",
      },
      {
        title: "List Rendering with Stable Key Props",
        badge: "Virtual DOM Keys",
        description:
          "Iterates over the color palette array using Array.map(). Assigns a unique key={item.name} enabling React's reconciliation engine to accurately track DOM updates.",
        code: "{colors.map((item) => <button key={item.name} ... />)}",
      },
      {
        title: "Conditional Styling (Derived State)",
        badge: "Conditional Classes",
        description:
          "Evaluates whether color === item.value to dynamically apply active borders, accents, and subtle background glow to the currently selected swatch.",
        code: "color === item.value ? 'border-[#a3b18a] bg-[#a3b18a]/10' : '...'",
      },
      {
        title: "Event Handling with Arrow Function Closures",
        badge: "onClick Handlers",
        description:
          "Passes an anonymous arrow function callback to prevent immediate execution upon component mount, cleanly forwarding the color value to setColor.",
        code: "onClick={() => setColor(item.value)}",
      },
      {
        title: "Accessibility (a11y) States",
        badge: "ARIA Attributes",
        description:
          "Includes aria-pressed={color === item.value} and descriptive aria-label attributes to inform assistive devices of active button states.",
        code: "aria-pressed={color === item.value} aria-label={`Change background to ${item.name}`}",
      },
    ],
    jsConcepts: [
      {
        title: "Structured Object Arrays",
        badge: "Data Modeling",
        description:
          "Separates presentation logic from raw data by representing swatches as an array of objects containing descriptive labels and corresponding hex values.",
        code: "const colors = [{ name: 'Red', value: '#b85c5c' }, ...];",
      },
      {
        title: "Array.prototype.map() Transformation",
        badge: "Higher-Order Function",
        description:
          "Declaratively projects raw data items into virtual JSX elements without mutating the underlying data structure.",
        code: "colors.map((item) => ( ... ))",
      },
      {
        title: "String Formatting with toUpperCase()",
        badge: "String Manipulation",
        description:
          "Formats the active color hex string to uppercase for clean, consistent user-facing typography in the active color badge.",
        code: "{color.toUpperCase()}",
      },
      {
        title: "Lexical Scope & Callback Closures",
        badge: "Closures",
        description:
          "The arrow callback in the onClick handler captures item.value from the lexical scope of the enclosing map iteration.",
        code: "() => setColor(item.value)",
      },
    ],
    keyTakeaways: [
      "Separating configuration data (palette array) from rendering logic yields extensible components.",
      "Pairing inline styles with Tailwind transition utilities achieves dynamic styling without bulky CSS-in-JS libraries.",
      "Always use stable, unique keys when rendering dynamic lists to maintain optimal virtual DOM diffing performance.",
      "Inline callback wrappers ensure handler execution happens on user trigger rather than during initial render.",
    ],
  },

  counter: {
    projectName: "Counter App",
    overview:
      "An interactive numerical counter showcasing state boundaries, defensive validation, computed layout percentages, and accessible live feedback.",
    reactConcepts: [
      {
        title: "useState Hook for Multi-Slice State",
        badge: "useState",
        description:
          "Maintains two independent pieces of component state: numerical counter value and var1 for dynamic validation/boundary warning messages.",
        code: "const [counter, setCounter] = useState(0);\nconst [var1, setVar1] = useState('');",
      },
      {
        title: "Controlled State Boundaries & Guards",
        badge: "Defensive State",
        description:
          "Guards state transitions using conditional limit checks (counter >= 20, counter <= 0) to enforce strict business rules before updating state.",
        code: "if (counter >= 20) { setVar1(\"counter can't go above 20\"); return; }",
      },
      {
        title: "Short-Circuit Conditional Rendering",
        badge: "Logical &&",
        description:
          "Renders boundary alert messages conditionally via JavaScript's logical AND operator, keeping the DOM clean when no error exists.",
        code: "{var1 && <p role='alert'>{var1}</p>}",
      },
      {
        title: "Dynamic Computed Style Derivation",
        badge: "Computed Styles",
        description:
          "Derives the visual progress bar width directly from the counter state as a calculated percentage without maintaining redundant state.",
        code: "style={{ width: `${(counter / 20) * 100}%` }}",
      },
      {
        title: "Declarative UI Synchronization",
        badge: "Declarative React",
        description:
          "UI elements (readout, buttons, progress bar, message) synchronize automatically upon state updates without imperative DOM querying.",
        code: "setCounter(counter + 1); // Triggers re-render automatically",
      },
      {
        title: "Accessibility with ARIA Live Role",
        badge: "role='alert'",
        description:
          "Provides immediate screen-reader announcements when counter limit thresholds are reached using role='alert'.",
        code: "<p role='alert' className='...'>{var1}</p>",
      },
    ],
    jsConcepts: [
      {
        title: "String.prototype.padStart() Formatting",
        badge: "String Padding",
        description:
          "Formats single-digit numbers into consistent double-digit display strings (e.g. '05', '09'), maintaining tabular alignment.",
        code: "String(counter).padStart(2, '0')",
      },
      {
        title: "Chained Ternary Conditional Expressions",
        badge: "Ternary Operators",
        description:
          "Evaluates multiple thresholds inline to produce contextual status text ('Ready to get started', 'Keep counting', 'Maximum limit reached').",
        code: "counter === 0 ? 'Ready' : counter === 20 ? 'Max reached' : 'Keep counting'",
      },
      {
        title: "Mathematical Normalization & Percentages",
        badge: "Arithmetic Operations",
        description:
          "Translates a bounded range (0 to 20) into a 0 to 100 percentage: (counter / 20) * 100 for display and styling.",
        code: "(counter / 20) * 100",
      },
      {
        title: "Lexical Closures in Event Callbacks",
        badge: "Function Closures",
        description:
          "Handler functions addValue and substractValue retain access to counter and state setters from their component scope.",
        code: "const addValue = () => { ... setCounter(counter + 1); }",
      },
    ],
    keyTakeaways: [
      "Avoid redundant state: calculate derived values (like percentage width or formatted strings) during render rather than in extra state hooks.",
      "Enforce boundary guards before invoking state setters to ensure data integrity.",
      "Clear error messages when valid actions occur to maintain an intuitive user feedback loop.",
      "Use tabular numbers and padStart for layout stability when rendering fluctuating digits.",
    ],
  },

  passwordGenerator: {
    projectName: "Password Generator",
    overview:
      "A high-utility credential generator featuring performance-optimized function memoization, synchronized side effects, and direct DOM reference control.",
    reactConcepts: [
      {
        title: "useCallback Hook for Function Memoization",
        badge: "useCallback",
        description:
          "Caches the passwordGenerator function across component re-renders. React only recreates the function reference when length, numAllowed, or charAllowed change.",
        code: "const passwordGenerator = useCallback(() => { ... }, [length, numAllowed, charAllowed, setPassword]);",
      },
      {
        title: "useEffect Hook for Side Effect Synchronization",
        badge: "useEffect",
        description:
          "Executes the memoized generator function whenever dependencies change, automatically regenerating a new password upon slider or checkbox adjustment.",
        code: "useEffect(() => { passwordGenerator(); }, [length, numAllowed, charAllowed, passwordGenerator]);",
      },
      {
        title: "useRef Hook for Imperative DOM Control",
        badge: "useRef",
        description:
          "Stores a persistent reference to the password input element, enabling programmatic text selection (passwordRef.current?.select()) when copying.",
        code: "const passwordRef = useRef(null);\n<input ref={passwordRef} ... />",
      },
      {
        title: "Functional State Updater Pattern",
        badge: "prev State Updater",
        description:
          "Uses the updater callback signature setNumAllowed((prev) => !prev) to toggle boolean state safely, avoiding stale closures.",
        code: "onChange={() => setNumAllowed((prev) => !prev)}",
      },
      {
        title: "Controlled Component Inputs",
        badge: "Controlled Inputs",
        description:
          "Bi-directionally binds slider range value to React state (value={length}) while listening for user adjustments via onChange.",
        code: "<input type='range' value={length} onChange={(e) => setLength(e.target.value)} />",
      },
    ],
    jsConcepts: [
      {
        title: "Pseudo-Random Algorithms (Math.random & Math.floor)",
        badge: "Math Methods",
        description:
          "Computes pseudo-random indices within character pool bounds: Math.floor(Math.random() * str.length) to select characters unpredictably.",
        code: "let charElement = Math.floor(Math.random() * str.length);\npass += str.charAt(charElement);",
      },
      {
        title: "Dynamic String Concatenation & Traversal",
        badge: "String Operations",
        description:
          "Dynamically constructs the available character pool by appending character subsets based on user preferences and indexing with charAt().",
        code: "if (numAllowed) str += num;\nif (charAllowed) str += char;",
      },
      {
        title: "Asynchronous Clipboard API",
        badge: "Navigator API",
        description:
          "Uses the modern Promise-based Web API window.navigator.clipboard.writeText(password) to write the password string to the system clipboard.",
        code: "window.navigator.clipboard.writeText(password);",
      },
      {
        title: "Optional Chaining Operator (?.)",
        badge: "Optional Chaining",
        description:
          "Safely accesses the select method on the ref object (passwordRef.current?.select()), preventing runtime exceptions if the DOM node is unmounted.",
        code: "passwordRef.current?.select();",
      },
    ],
    keyTakeaways: [
      "Combine useCallback with useEffect to create performant, dependency-driven reactive execution pipelines.",
      "Use functional state updaters (prev => !prev) when new state relies on previous state to prevent concurrency race conditions.",
      "useRef is the idiomatic React technique for interacting with DOM node APIs without breaking declarative component boundaries.",
      "Prefer modern asynchronous browser APIs (navigator.clipboard) over deprecated legacy commands like execCommand.",
    ],
  },

  currencyConverter: {
    projectName: "Currency Converter",
    overview:
      "A production-grade currency exchange application utilizing custom hooks for data fetching, modular component composition, accessible IDs, and synchronized two-way state.",
    reactConcepts: [
      {
        title: "Custom Hook Architecture (useCurrencyInfo)",
        badge: "Custom Hooks",
        description:
          "Encapsulates external API data fetching, async lifecycle, and state inside useCurrencyInfo(currency), promoting clean separation of concerns.",
        code: "function useCurrencyInfo(currency) { ... return data; }",
      },
      {
        title: "Component Composition & Prop Passing",
        badge: "Component Reusability",
        description:
          "Reuses a single InputBox component for both 'From' and 'To' currency fields by supplying distinct labels, values, currency options, and event handlers.",
        code: "<InputBox label='From' amount={amount} ... />\n<InputBox label='To' amount={convertedAmount} ... />",
      },
      {
        title: "useId Hook for Unique Accessible Form Association",
        badge: "useId",
        description:
          "Generates unique, collision-free input IDs (amountInputId = useId()) inside InputBox to correctly link <label htmlFor={...}> with <input id={...}>.",
        code: "const amountInputId = useId();",
      },
      {
        title: "State Lifting & Synchronized Swapping",
        badge: "Lifting State Up",
        description:
          "Maintains from, to, amount, and convertedAmount in the parent app, passing state down to children and enabling bidirectional swapping.",
        code: "const swap = () => { setFrom(to); setTo(from); setAmount(convertedAmount); setConvertedAmount(amount); };",
      },
      {
        title: "Form Interception & Synthetic Events",
        badge: "e.preventDefault()",
        description:
          "Intercepts standard browser form submission with e.preventDefault() to calculate conversions without triggering unwanted page reloads.",
        code: "onSubmit={(e) => { e.preventDefault(); convert(); }}",
      },
      {
        title: "Defensive Callback Invocation Pattern",
        badge: "Short-Circuit Callbacks",
        description:
          "Verifies handler existence before execution (onAmountChange && onAmountChange(...)) to avoid runtime errors if optional callbacks are omitted.",
        code: "onAmountChange && onAmountChange(Number(e.target.value))",
      },
    ],
    jsConcepts: [
      {
        title: "Fetch API & Promise Resolution",
        badge: "Asynchronous JS",
        description:
          "Fetches real-time exchange rates over HTTPS and unpacks JSON data using Promise chaining with .then() callbacks.",
        code: "fetch(url).then((res) => res.json()).then((res) => setData(res[currency]))",
      },
      {
        title: "Object.keys() Introspection",
        badge: "Object Methods",
        description:
          "Extracts currency symbol keys from the nested API rate object into an iterable array (Object.keys(currencyInfo)) to populate select options.",
        code: "const options = Object.keys(currencyInfo);",
      },
      {
        title: "Dynamic Property Access (Bracket Notation)",
        badge: "Bracket Notation",
        description:
          "Dynamically looks up currency rates at runtime using variable keys: currencyInfo[to] and computes converted totals: amount * currencyInfo[to].",
        code: "setConvertedAmount(amount * currencyInfo[to]);",
      },
      {
        title: "Explicit Type Coercion with Number()",
        badge: "Type Conversion",
        description:
          "Explicitly parses string inputs from HTML input events into JavaScript numbers (Number(e.target.value)) to prevent string concatenation bugs.",
        code: "Number(e.target.value)",
      },
    ],
    keyTakeaways: [
      "Custom hooks enable clean abstraction of complex asynchronous logic, keeping UI components declarative and focused.",
      "Component reuse (DRY) with customizable props drastically simplifies maintenance and testing.",
      "useId solves accessible labeling without manual ID naming collisions or hardcoded values.",
      "Synchronizing state swaps across interdependent inputs requires centralized parent state management.",
    ],
  },
};
