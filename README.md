# Multiple Condition Wait App

A simple web application that dynamically updates the output based on the state of multiple conditions. It includes interactive buttons for managing these conditions and displays messages reflecting the current state.

## Usage

1. **HTML Setup**:  
   The HTML defines a button to perform an action (`doSomething`) and additional buttons to confirm conditions or reset them. The state of conditions updates the message in the `#output` section dynamically.

   - Buttons for conditions:
     - `Condition 1`
     - `Condition 2`
     - `Condition 3`
   - `Reset All Conditions` button resets all conditions and triggers `doSomething`.

2. **JavaScript Functionality**:
   - Tracks and manages conditions (`conditions` array).
   - `doSomething()`: Displays messages based on conditions:
     - "Waiting for condition 1/2/3..." until all are confirmed.
     - "All conditions are met!" when all conditions are true.
   - `confirmCondition(number)`: Updates the respective condition.
   - `reset()`: Resets all conditions to false.

3. **Integration**:
   - **CSS**: Define styles in `assets/index.css`.
   - **JavaScript**: Dynamic functionality via `assets/index.js`.

4. **Interactive Output**:
   Output is displayed in the `<div id="output">` section, reflecting the conditions' states.

---
Example: Click through each condition button in order, then reset for another demonstration.
