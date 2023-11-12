### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
  React is a library, you could use it when you want to have state changes. May be used
  when maintiaining and updating a web application

- What is Babel?
 a JavaScript transpiler that changes new JS into plain old ES5 JavaScript

- What is JSX?
  a syntax extension to JavaScript

- How is a Component created in React?
  Define a function with a capital letter,
  export function
  import with with the syntax of html

- What are some difference between state and props?
 state is stored in the memory,
 props is data passed down from a parent component

- What does "downward data flow" refer to in React?
  Data moving from parent component down to child component

- What is a controlled component?
- Value that can be set by a user

- What is an uncontrolled component?
- Value can't be set by user

- What is the purpose of the `key` prop when rendering a list of components?
- Assign ids

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
- The order can change

- Describe useEffect.  What use cases is it used for in React components?
- Runs code after the first render. Used when fetching data

- What does useRef do?  Does a change to a ref value cause a rerender of a component?
  Use to reference a value that is not used for rendering. Changes to useRef does not causr a rerender.

- When would you use a ref? When wouldn't you use one?
  useRef is good to use when you want to store information that doesnt change between renders.
  You wouldnt want to use one when you want information to change between renders.

- What is a custom hook in React? When would you want to write one?
- Custom hook allow the user to create their own hook. You would write on to help refactor code.
