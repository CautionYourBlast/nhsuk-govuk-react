# nhsuk-govuk-react
Transpiling [nhsuk-react-components](https://github.com/NHSDigital/nhsuk-react-components) to govuk components.

p.s. Thanks NHSDigital team - this API is awesome.  

This repository is responsible for downloading, transpiling and republishing nhsuk-react-components. 

### Why
Current govuk react libraries try to follow the njks govuk-frontend api. It makes for ugly React code.

### How it works (also follow these steps if you want to transpile locally)
1. `sh get-src.sh` Downloads and unzips the repository and moves things around.. tidies up after itself.. etc
2. `yarn build` transpiles with babel. It is doing a regex replacement of /nhsuk/ to govuk and building into `lib/` to match the nhsuk-react-components api.
3. `npm publish` Publishing to github packages

This package does not provide styles. You must include govuk-frontend styles in your own project.
