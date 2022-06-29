# Zoom Apps SDK

The Zoom Apps SDK is a JavaScript library that faciliates communication between your Zoom App and the Zoom client. The SDK allows you to take advantage of the many APIs and events Zoom exposes in its embedded browser.

## Installation

There are two ways to install the Zoom Apps SDK into your frontend project

### NPM

You can install it from NPM, if you are using a module bundler such as Webpack:

```
$ npm install @zoom/appssdk
```

### CDN

Alternatively, you can load the SDK from a CDN, using a script tag in your HTML document:

```
<script src="https://appssdk.zoom.us/sdk.js"></script>
```

## Usage

If you installed Zoom Apps SDK from NPM, import `zoomSdk` into the component where you wanted to use the SDK and call `config` as your first call to verify your application with Zoom.

```
import zoomSdk from "@zoom/appssdk"

async function configureApp {
  const configResponse = await zoomSdk.config({
    popoutSize: {width: 480, height: 360},
    capabilities: ["shareApp"]
  })
}
```

When you load the SDK using a script tag, zoomSDK is served as a global object and can be called across components. Even in this case `zoomSdk.config` should be the first call.

```
async function configureApp {
  const configResponse = await zoomSdk.config({
    version: "0.16"
    popoutSize: {width: 480, height: 360},
    capabilities: ["shareApp"]
  })
}
```


The cloud SDK is designed to provide on-demand patch updates, and it does not support exact versions. You will always get the latest patch version within the major version specified in the version parameter of `zoomSdk.config`. In other words, if you supplied an exact version like `0.16.1`, you will get the latest patch within the `0.16` major version.


## Documentation

Refer to Apps SDK documentation [here](https://marketplace.zoom.us/docs/zoom-apps/js-sdk/reference)

## Resources to create a Zoom App

- Create your first Zoom App following these [steps](https://marketplace.zoom.us/docs/zoom-apps/getstarted).
- To help you start developing Zoom Apps we also provide sample reference [apps](https://marketplace.zoom.us/docs/zoom-apps/referenceapp#quick-start-reference-apps). 
- Watch [How to Create a Zoom App](https://www.youtube.com/watch?v=otlyDxnU-RI) and [How To Configure the Basic Zoom App](https://www.youtube.com/watch?v=SS87nqO9ScQ).
- Discover more learning [resources](https://marketplace.zoom.us/docs/zoom-apps/introduction) for Zoom Apps Development.
- Zoom Apps SDK on [npm](https://www.npmjs.com/package/@zoom/appssdk)
