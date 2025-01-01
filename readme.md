# Pretty Class
`pretty-class` is a lightweight utility package designed to simplify the process of generating dynamic class names in JavaScript and TypeScript applications. It provides a flexible and intuitive way to conditionally combine class names based on different input types.

## Installation
To install `pretty-class`, use npm or yarn:

```bash
npm install pretty-class
```

or

```bash
yarn add pretty-class
```

## Usage

### Importing the Package

```typescript
import prettyClass from 'pretty-class';
```

### Function Signature

```typescript
export type prettyClassTypes = string | Record<string, boolean> | prettyClassTypes[] | undefined | null | false;
const prettyClass: (...args: prettyClassTypes[]) => string;
```

### Parameters
- `args`: A variable number of arguments of type `prettyClassTypes`. Each argument can be:
  - A `string`: Adds the string directly to the class list.
  - An `object` with keys as class names and values as boolean: Includes the key if the value is `true`.
  - An `array`: Recursively processes the array elements.
  - `undefined`, `null`, or `false`: Ignored in the output.

### Returns
- A `string` containing the concatenated class names.

### Example Usage

#### Basic String Input
```typescript
const result = prettyClass('class1', 'class2');
console.log(result); // Output: "class1 class2"
```

#### Conditional Classes
```typescript
const result = prettyClass({ 'class1': true, 'class2': false, 'class3': true });
console.log(result); // Output: "class1 class3"
```

#### Nested Arrays
```typescript
const result = prettyClass(['class1', { 'class2': true }, ['class3', { 'class4': false }]]);
console.log(result); // Output: "class1 class2 class3"
```

#### Mixed Inputs
```typescript
const result = prettyClass('class1', { 'class2': true }, ['class3', null, false]);
console.log(result); // Output: "class1 class2 class3"
```

## Benefits
- **Lightweight**: Minimal code footprint.
- **Flexible**: Supports various input types.
- **Recursive**: Handles nested arrays gracefully.
- **Typed**: Fully typed for TypeScript users.

## License
`pretty-class` is licensed under the MIT License. See the LICENSE file for more details.

---

For contributions, issues, or feature requests, visit the [GitHub repository](#).