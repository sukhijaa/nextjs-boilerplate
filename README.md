# Dew MaOcean

## Get Started

1. Clone the project <br/>
    `git clone https://sukhijaa@bitbucket.org/sukhijaa/dew-maocean-ui.git`

2. Install all dependencies : <br/>
    `yarn` or `npm install`
    
3. Add `src` folder as Directory root for aliases to work in webstorm
    - Right click `src`
    - Select `Mark Directory As`
    - Select `Resource Root`
    
## Commands

To run app in dev mode : <br/>
`npm run dev` 

To run build : <br/>
`npm run build`

## Code Structure : 

- Complete UI is present in src/
    - `components` - contains all generic components which are not limited to a certain container/view
    - `containers` - Main building blocks of a app. Each page is supposed to render a single container
    - `hocs` - The higher Order Components which will be used in the app to inject data to containers or compponents
    - `store` - Redux Config which runs during initialization
    - `themes` - All allowed themes
    - `types` - Flow data types
    - `utils` - Utility files
    - `translations` - All config and initialization related to translations
- Server to serve the NextJS website is present in server directory
- `.babelrc`
    - Overrides the basic babelrc given by Next.
    - Defines aliases to be used inside the app.
- `.env`
    - Dotenv package is responsible for loading variables defined in this file into `process` object
    - `public.env` is used to share data between server and client.
    - If same varialbe is present in `public.env` and `.env`, then `.env` gets the precedence
    

## Author
Hyperdew Co.
