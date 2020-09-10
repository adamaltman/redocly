---
title: First time setup
excerpt: >-
  Setup phone number verification in Android for the first time with the Sinch
  Verification SDK. Verify through SMS and/or flash calls.
next:
  pages:
    - verification-android-the-verification-process
---
This is a step-by-step guide about setting up the Sinch Verification SDK for the first time.

## Register an Application

1.  Register a [Sinch Developer account](https://portal.sinch.com/#/signup)
2.  Set up a new Application using the Dashboard, where you can then obtain an *Application Key*.
3.  Enable Verification for the application by selecting: *Authentication* \> *Public* under *App* \> *Settings* \> *Verification*

## Download

The Sinch Verification SDK can be downloaded [here](https://sinch.readme.io/page/downloads). It contains: the library aar, this user guide, reference documentation, and a sample app.

## Add the Sinch library

The Verification SDK library is distributed in [AAR](http://tools.android.com/tech-docs/new-build-system/aar-format) format. To use it in your project either:

  - Copy the **.aar** file to the `libs` folder and edit the build.gradle file to include
```text
repositories {
    flatDir {
        dirs 'libs'
    }
}

dependencies {
    compile(name:'sinch-android-verification-1.6.0', ext:'aar')
}
```


  - Or using Android Studio choose `File -> New -> New Module -> Import .JAR/.AAR Package` option
