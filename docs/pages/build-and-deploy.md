# Build and Deploy

## Build steps

### 1. Build application with Vite

```shell
npm run build
```

This will create a `build` folder used to preview the web app and also for e2e testing.  
The `www` folder is the main output of the build command. Cordova use this folder to build the configured platforms.

### 2. Testing the Android platform

```shell
cordova emulate android
cordova run --emulator
```

### 3. Build Cordova application for release

:link: [Sign your app from command line](https://developer.android.com/studio/build/building-cmdline#sign_cmdline)

```shell
cordova build android --release
```
