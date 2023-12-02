# gas-clasp-starter
A starter template for Google Apps Script by [google/clasp](https://github.com/google/clasp)

## Tech Stack
- [google/clasp](https://github.com/google/clasp)
- [rollup](https://rollupjs.org/)
- [TypeScript](http://www.typescriptlang.org/)
- [ESLint](https://github.com/eslint/eslint)
- [Prettier](https://prettier.io/)
- [Jest](https://facebook.github.io/jest/)

## Prerequisites
- [Node.js](https://nodejs.org/)
- [google/clasp](https://github.com/google/clasp)

## Getting Started
### Clone the repository
```
git clone --depth=1 https://github.com/howdy39/gas-clasp-starter.git <project_name>
cd <project_name>
rm -Rf .git
```

### Install dependencies
```
npm install
```

### Configuration
#### Open `.clasp.json`, change scriptId
What is scriptId ? https://github.com/google/clasp#scriptid-required
```
{
  "scriptId": <your_script_id>,
  "rootDir": "dist"
}
```

#### Open `src/appsscript.json`, change timeZone (optional)
[Apps Script Manifests](https://developers.google.com/apps-script/concepts/manifests)
```
{
  "timeZone": "Asia/Tokyo", ## Change timeZone
  "dependencies": {
  },
  "exceptionLogging": "STACKDRIVER"
}
```

### Development and build project
```
npm run build
```

### Push
```
clasp push
```


## License
This software is released under the MIT License, see LICENSE.txt.
