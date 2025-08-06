# Scientific Calculator

A **scientific calculator** built with **React + Vite**, supporting:

- Basic operations (+, -, ×, ÷)
- Scientific functions (sin, cos, tan, log, ln)
- Keyboard navigation with **arrow keys** to move the caret
- Expression evaluation with **MathJS**
- `DEL`, `AC`, and `Ans` functionality
- Some buttons are not working at the moment

## 🛠️ Tech Stack

- **React 19:** For building the UI and managing state.
- **Vite:** For the development server and application bundling.
- **Tailwind CSS:** For modern, utility-first styling.
- **Math.js:** For performing precise and safe mathematical calculations.

## 💡 Important Notes

- **Navigation:** The **←** and **→** arrow keys move the caret through the expression for easy editing.
- **Radians vs. Degrees:** By default, the Math.js library calculates trigonometric functions (e.g., `sin(30)`) in **radians**, not degrees.
- **Logarithmic Functions:**
    - `ln()` is interpreted as `log(x)` (natural logarithm, base *e*).
    - `log()` is interpreted as `log10(x)` (decimal logarithm, base 10).

## 🚀 How to Run

### 1. Clone the repository

```bash
git clone https://github.com/LuckInzz/calculadora-cientifica.git
```
```bash
cd calculadora-cientifica
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run

```bash
npm run dev
```