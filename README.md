# Project notes

Blocked
  Need html code from passo 3
    Are select values in english? Curious.

Must
  Add required html5 validation
  Validation for other inputs step 1
  Add TOS checkboxes
    Tenho restrições no meu nome
    Tenho casa própria
    Tenho carro quitado
    Tenho cartão de crédito
    Aceito os Termos de Uso, a Política de Privacidade e o Termo de Autorização de Consulta (SCR)
  Auto disable submit button


Question
  input label should be a string or a sentence?

Best practices
  Use Prettier
  Unit tests step 1 
  Use for label attributes for forms [1]
  Add FormGroup [1] and FormRow [2]

Nice
  Add react-icons
  Add https://github.com/ycs77/bootstrap-steps
  Benchmark citiesToState read, it's 112 kb
  Consiser refactor field names to portuguese so its readable to business users
  Input fields correct/incorrect UX (CSS system)
  Remove steps image. Use react-step-progress.
  Use 2 column form styling
  Use CSS lib for React styling. Remove inline styling.


[1] https://github.com/kentcdodds/bookshelf/blob/83f5daa2578aef3828d9aa80ca46b382f4d4d9a0/src/unauthenticated-app.js#L40
[2] https://getbootstrap.com/docs/4.0/components/forms/


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.