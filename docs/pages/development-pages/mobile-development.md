# Mobile Application Development

The applicaiton is developed as a single page web application and then uses 
[Apache Cordova](https://cordova.apache.org/) to build the mobile application.

The mobile application supports Android SDK 33

## Build Cordova Applicatikn

The web application must be build first and then Cordova can build the application for the registered platforms

```shell
npm run build
```

and then

```shell
cordova build android
```

## Cordova Issues

The Cordova framework injects a `cordova.js` into the _index.html_ file. This JavaScript file is not present during 
development of the web application. 

This file should be added in the _public_ folder to allow the web application access to the Cordova API. But when 
building the web application, the file should be removed.

Here is the configuration to allow this manipulation of the `cordova.js` file:

```json
rollupOptions: {
  external: [
    path.resolve(
      path.dirname(fileURLToPath(import.meta.url)),
      "public/cordova.js"
    ),
  ],
  plugins: [
    copy({
      targets: [{ src: "build/*", dest: "www" }],
      hook: "generateBundle",
    }),
    del({ targets: "www/cordova.js", hook: "writeBundle" }),
  ]
}
```

This issue bleeds to E2E testing and the preview function of Vite, as both commands use the final build folder to 
start the application.

The `cordova.js` should be present for both E2E testing and preview, but not for the production release build.
