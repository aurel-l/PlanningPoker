const parser = 'babel-eslint';

const plugins = ['react', 'import'];

const extending = ['plugin:import/errors', 'plugin:import/warnings'];

const settings = {
  'import/ignore': ['node_modules', '\.(scss|less|css)$'],
};

const env = {
  browser: true,
  es6: true
};

// Globals injected by Webpack
const globals = {
  DEV: false,
  PROD: false,
  NAME: false,
  VERSION: false
};

const rules = {
  // Disallow spacing inside array brackets
  'array-bracket-spacing': [2, 'never'],
  // Enforces return statements in callbacks of array's methods
  'array-callback-return': 2,
  // Enforces no braces where they can be omitted
  'arrow-body-style': [2, 'as-needed'],
  // Require space before/after arrow function's arrow
  'arrow-spacing': [2, { 'before': true, 'after': true }],
  // Treat var statements as if they were block scoped
  'block-scoped-var': 2,
  // Enforce one true brace style
  'brace-style': [2, '1tbs'],
  // Require camel case names
  'camelcase': [2, { 'properties': 'never' }],
  // Disallow trailing commas in object literals
  'comma-dangle': [2, 'always-multiline'],
  // Enforce spacing after comma
  'comma-spacing': [2, { 'before': false, 'after': true }],
  // Enforce one true comma style
  'comma-style': [2, 'last'],
  // Specify the maximum cyclomatic complexity allowed in a program
  'complexity': [1, 4],
  // Disallow padding inside computed properties
  'computed-property-spacing': [2, 'never'],
  // Require return statements to either always or never specify values
  'consistent-return': 2,
  // Enforce consistent naming when capturing the current execution context
  'consistent-this': 2,
  // Verify super() callings in constructors
  'constructor-super': 2,
  // Specify curly brace conventions for all control statements
  'curly': [2, 'multi-line'],
  // Require default case in switch statements
  'default-case': 2,
  // Enforces consistent newlines before or after dots
  'dot-location': [2, 'property'],
  // Encourages use of dot notation whenever possible
  'dot-notation': [2, { 'allowKeywords': true }],
  // Enforce newline at the end of file, with no multiple empty lines
  'eol-last': 2,
  // Require the use of === and !==
  'eqeqeq': 2,
  // Enforce use of function declarations or expressions
  'func-style': [2, 'expression'],
  // Enforce the spacing around the * in generator functions
  'generator-star-spacing': [2, 'after'],
  // Make sure for-in loops have an if statement
  'guard-for-in': 2,
  // Enforce importing before anything else
  'import/imports-first': 1,
  // Set a specific indent width for your code
  'indent': [2, 2, { 'SwitchCase': 1, 'VariableDeclarator': 1 }],
  // Specify quote type in JSX attributes
  'jsx-quotes': [2, 'prefer-double'],
  // Enforce spacing style fir keys and values in object literal properties
  'key-spacing': [2, {'mode': 'minimum'}],
  // Require a space around certain keywords
  'keyword-spacing': 2,
  // Disallow mixed 'LF' and 'CRLF' as linebreaks
  'linebreak-style': [2, 'unix'],
  // Specify the maximum depth that blocks can be nested
  'max-depth': [2, 4],
  // Specify the maximum length of a line in your program
  'max-len': [1, 80, 2],
  // Specify the maximum depth callbacks can be nested
  'max-nested-callbacks': [2, 2],
  // Limits number of parameters that can be used in the function declaration
  'max-params': [2, 4],
  // Specify the maximum number of statement allowed in a function
  'max-statements': [2, 10],
  // Require a capital letter for constructors
  'new-cap': 2,
  // Disallow omission of parens when invoking constructor with no arguments
  'new-parens': 2,
  // Disallow the use of alert, confirm, and prompt
  'no-alert': 1,
  // Disallow use of the Array constructor
  'no-array-constructor': 1,
  // Disallow use of bitwise operators
  'no-bitwise': 2,
  // Disallow use of arguments.caller or arguments.callee
  'no-caller': 2,
  // Disallow lexical declarations in case/default clauses
  'no-case-declarations': 2,
  // Disallow modifying variables of class declarations
  'no-class-assign': 2,
  // Disallow assignment in conditional expressions
  'no-cond-assign': [2, 'always'],
  // Disallow use of console
  'no-console': 1,
  // Disallow use of constant expressions in conditions
  'no-constant-condition': 1,
  // Disallow modifying variables that are declared using const
  'no-const-assign': 2,
  // Disallow use of the continue statement
  'no-continue': 1,
  // Disallow control characters in regular expressions
  'no-control-regex': 2,
  // Disallow use of debugger
  'no-debugger': 1,
  // Disallow deletion of variables
  'no-delete-var': 2,
  // Disallow duplicate arguments in functions
  'no-dupe-args': 2,
  // Disallow duplicate name in class members
  'no-dupe-class-members': 2,
  // Disallow duplicate keys when creating object literals
  'no-dupe-keys': 2,
  // Disallow a duplicate case label
  'no-duplicate-case': 2,
  // Disallow else after a return in an if
  'no-else-return': 2,
  // Disallow empty statements
  'no-empty': 2,
  // Disallow the use of empty character classes in regular expressions
  'no-empty-character-class': 2,
  // Disallow empty destructuring patterns
  'no-empty-pattern': 2,
  // Disallow use of eval()
  'no-eval': 2,
  // Disallow assigning to the exception in a catch block
  'no-ex-assign': 2,
  // Disallow adding to native types
  'no-extend-native': 2,
  // Disallow unnecessary function binding
  'no-extra-bind': 2,
  // Disallow double-negation boolean casts in a boolean context
  'no-extra-boolean-cast': 2,
  // Disallow unnecessary labels
  'no-extra-label': 2,
  // Disallow unnecessary parentheses
  'no-extra-parens': [2, 'functions'],
  // Disallow unnecessary semicolons
  'no-extra-semi': 2,
  // Disallow fallthrough of case statements
  'no-fallthrough': 2,
  // Disallow use of leading or trailing decimal points in numeric literals
  'no-floating-decimal': 2,
  // Disallow overwriting functions written as function declarations
  'no-func-assign': 2,
  // Disallow use of eval()-like methods
  'no-implied-eval': 2,
  // Disallow function or variable declarations in nested blocks
  'no-inner-declarations': 2,
  // Disallow invalid regular expression strings in the RegExp constructor
  'no-invalid-regexp': 2,
  // Disallow irregular whitespace outside of strings and comments
  'no-irregular-whitespace': 2,
  // Disallow usage of __iterator__ property
  'no-iterator': 2,
  // Disallow use of labels for anything other then loops and switches
  'no-labels': 2,
  // Disallow labels that share a name with a variable
  'no-label-var': 2,
  // Disallow unnecessary nested blocks
  'no-lone-blocks': 2,
  // Disallow if as the only statement in an else block
  'no-lonely-if': 0,
  // Disallow creation of functions within loops
  'no-loop-func': 2,
  // Disallow magic numbers
  'no-magic-numbers': [1, {"ignoreArrayIndexes": true}],
  // Disallow mixed spaces and tabs for indentation
  'no-mixed-spaces-and-tabs': 2,
  // Disallow multiple empty lines and only one newline at the end
  'no-multiple-empty-lines': [2, { 'max': 2, 'maxEOF': 1 }],
  // Disallow use of multiple spaces
  'no-multi-spaces': 2,
  // Disallow use of multiline strings
  'no-multi-str': 2,
  // Disallow reassignments of native objects
  'no-native-reassign': 2,
  // Disallow use of negated expressions in conditions
  'no-negated-condition': 1,
  // Disallow negation of the left operand of an in expression
  'no-negated-in-lhs': 2,
  // Disallow nested ternary expressions
  'no-nested-ternary': 2,
  // Disallow use of new operator when not part of assignment or comparison
  'no-new': 2,
  // Disallow use of new operator for Function object
  'no-new-func': 2,
  // Disallow use of the Object constructor
  'no-new-object': 2,
  // Disallow Symbol Constructor
  'no-new-symbol': 2,
  // Disallow creating new instances of String,Number, and Boolean
  'no-new-wrappers': 2,
  // Disallow the use of object properties of
  // the global object (Math and JSON) as functions
  'no-obj-calls': 2,
  // Disallow use of (old style) octal literals
  'no-octal': 2,
  // Disallow use of octal escape sequences in string literals
  'no-octal-escape': 2,
  // Disallow reassignment of function parameters
  // Disallow parameter object manipulation
  'no-param-reassign': [2, { 'props': true }],
  // Disallow string concatenation when using __dirname and __filename
  'no-path-concat': 2,
  // Disallow use of process.env
  'no-process-env': 2,
  // Disallow usage of __proto__ property
  'no-proto': 2,
  // Disallow declaring the same variable more than once
  'no-redeclare': 2,
  // Disallow multiple spaces in a regular expression literal
  'no-regex-spaces': 2,
  // Disallow use of assignment in return statement
  'no-return-assign': 2,
  // Disallow use of `javascript:` urls.
  'no-script-url': 2,
  // Disallow self assignment
  'no-self-assign': 2,
  // Disallow comparisons where both sides are exactly the same
  'no-self-compare': 2,
  // Disallow use of comma operator
  'no-sequences': 2,
  // Disallow shadowing of restricted names
  'no-shadow-restricted-names': 1,
  // Disallow space between function identifier and application
  'no-spaced-func': 2,
  // Disallow sparse arrays
  'no-sparse-arrays': 2,
  // Sisallow to use this/super before super() calling in constructors
  'no-this-before-super': 2,
  // Restrict what can be thrown as an exception
  'no-throw-literal': 2,
  // Disallow trailing whitespace at the end of lines
  'no-trailing-spaces': 2,
  // Disallow use of undeclared variables unless set as global
  'no-undef': 2,
  // Disallow use of 'undefined' variable
  'no-undefined': 2,
  // Avoid code that looks like two expressions but is actually one
  'no-unexpected-multiline': 2,
  // Disallow unmodified conditions of loops
  'no-unmodified-loop-condition': 2,
  // Disallow the use of Boolean literals in conditional expressions,
  // also, prefer `a || b` over `a ? a : b`
  'no-unneeded-ternary': [2, {'defaultAssignment': false}],
  // Disallow unreachable statements after a
  // return, throw, continue, or break statement
  'no-unreachable': 2,
  // Disallow usage of expressions in statement position
  'no-unused-expressions': 2,
  // Disallow unused labels
  'no-unused-labels': 2,
  // Disallow declaration of variables that are not used in the code
  'no-unused-vars': [2, {'args': 'after-used'}],
  // Disallow use of variables before they are defined
  'no-use-before-define': 2,
  // Disallow unnecessary .call() and .apply()
  'no-useless-call': 2,
  // Disallow unnecessary concatenation of strings
  'no-useless-concat': 1,
  // Disallow unnecessary constructor
  'no-useless-constructor': 1,
  // Require let or const instead of var
  'no-var': 2,
  // Disallow use of void operator
  'no-void': 2,
  // Disallow whitespace before properties
  'no-whitespace-before-property': 2,
  // Disallow use of the with statement
  'no-with': 2,
  // Disallow padding inside curly braces
  'object-curly-spacing': [2, 'never'],
  // Require method and property shorthand syntax for object literals
  'object-shorthand': [2, 'always'],
  // Require assignment operator shorthand where possible
  'operator-assignment': 2,
  // Enforce line breaks to be placed after operators
  'operator-linebreak': [2, 'after'],
  // Suggest using arrow functions as callbacks
  'prefer-arrow-callback': 2,
  // Suggest using of const declaration when never modified after declared
  'prefer-const': 2,
  // Suggest using Reflect methods where applicable
  'prefer-reflect': 0,
  // Suggest using the rest parameters instead of 'arguments'
  'prefer-rest-params': 2,
  // Suggest using the spread operator instead of .apply()
  'prefer-spread': 2,
  // Suggest using template literals instead of string concatenation
  'prefer-template': 2,
  // Require quotes around object literal property names as needed
  'quote-props': [2, 'as-needed'],
  // Specify whether double or single quotes should be used
  'quotes': [2, 'single', 'avoid-escape'],
  // Require use of the second argument for parseInt()
  'radix': 2,
  // Validate closing bracket location in JSX
  'react/jsx-closing-bracket-location': 2,
  // Disallow spaces inside of curly braces in JSX attributes
  'react/jsx-curly-spacing': [2, 'never', {'allowMultiline': true}],
  // Enforce event handler naming conventions in JSX
  'react/jsx-handler-names': 2,
  // Validate props indentation in JSX
  'react/jsx-indent-props': [2, 2],
  // Validate JSX has key prop when in array or iterator
  'react/jsx-key': 2,
  // Prevent usage of .bind() and arrow functions in JSX props
  'react/jsx-no-bind': 2,
  // Prevent duplicate props in JSX
  'react/jsx-no-duplicate-props': 2,
  // Disallow undeclared variables in JSX
  'react/jsx-no-undef': 2,
  // Enforce PascalCase for user-defined JSX components
  'react/jsx-pascal-case': 2,
  // Prevent React to be incorrectly marked as unused
  'react/jsx-uses-react': 2,
  // Prevent variables used in JSX to be incorrectly marked as unused
  'react/jsx-uses-vars': 2,
  // Prevent usage of dangerous JSX properties
  'react/no-danger': 2,
  // Prevent usage of deprecated methods
  'react/no-deprecated': 1,
  // Prevent usage of setState in componentDidMount
  'react/no-did-mount-set-state': 2,
  // Prevent usage of setState in componentDidUpdate
  'react/no-did-update-set-state': 2,
  // Prevent direct mutation of this.state
  'react/no-direct-mutation-state': 2,
  // Prevent usage of isMounted
  'react/no-is-mounted': 2,
  // Prevent multiple component definition per file
  'react/no-multi-comp': [1, {'ignoreStateless': true}],
  // Prevent using string references
  'react/no-string-refs': 1,
  // Prevent usage of unknown DOM property
  'react/no-unknown-property': 2,
  // Require ES6 class declarations over React.createClass
  'react/prefer-es6-class': 2,
  // Prevent missing props validation in a React component definition
  'react/prop-types': 1,
  // Prevent missing React when using JSX
  'react/react-in-jsx-scope': 2,
  // Prevent extra closing tags for components without children
  'react/self-closing-comp': 1,
  // Enforce component methods order
  'react/sort-comp': 1,
  // Prevent missing parentheses around multilines JSX
  'react/wrap-multilines': 1,
  // Require JSDoc comment
  'require-jsdoc': [1, {require: {
    FunctionDeclaration: true,
    MethodDefinition: false,
    ClassDeclaration: false
  }}],
  // Disallow generator functions that do not have yield
  'require-yield': 2,
  // Require or disallow use of semicolons instead of ASI
  'semi': [2, 'always'],
  // Enforce spacing before and after semicolons
  'semi-spacing': [2, {'before': false, 'after': true}],
  // Disallow space before function opening parenthesis
  'space-before-function-paren': [2, 'never'],
  // Disallow spaces inside parentheses
  'space-in-parens': [2, 'never'],
  // Require spaces around operators
  'space-infix-ops': 2,
  // Require spaces before/after unary operators
  'space-unary-ops': 2,
  // Require a space immediately following the // or /* in a comment
  'spaced-comment': [1, 'always', {'markers': [':', '::'], 'exceptions': ['-']}],
  // Disallow usage of spacing in template strings
  'template-curly-spacing': [2, 'never'],
  // Disallow comparisons with the value NaN
  'use-isnan': 2,
  // Ensure JSDoc comments are valid
  'valid-jsdoc': 2,
  // Ensure that the results of typeof are compared against a valid string
  'valid-typeof': 2,
  // Requires to declare all vars on top of their containing scope
  'vars-on-top': 2,
  // Require immediate function invocation to be wrapped in parentheses
  'wrap-iife': [2, 'outside'],
  // Enforce spacing around the * in yield* expressions
  'yield-star-spacing': [2, 'after'],
  // Disallow Yoda conditions
  'yoda': 2,
};

module.exports = {
  parser, plugins, extends: extending, settings, env, globals, rules,
};
