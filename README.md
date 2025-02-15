# Zoom Apps SDK

The Zoom Apps SDK is a JavaScript library that facilitates communication between your Zoom App and the Zoom client. The SDK allows you to take advantage of the many APIs and events Zoom exposes in its embedded browser.

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

You can also load a minified SDK, using a script tag in your HTML document:

```
<script src="https://appssdk.zoom.us/sdk.min.js"></script>
```

## Usage

If you installed Zoom Apps SDK from NPM, import `zoomSdk` into the component where you wanted to use the SDK and call `config` as your first call to verify your application with Zoom.

```
import zoomSdk from "@zoom/appssdk"

async function configureApp() {
  const configResponse = await zoomSdk.config({
    popoutSize: {width: 480, height: 360},
    capabilities: ["shareApp"]
  })
}
```

When you load the SDK using a script tag, zoomSDK is served as a global object and can be called across components. Even in this case `zoomSdk.config` should be the first call.

```
<script src="https://appssdk.zoom.us/sdk.js"></script>

async function configureApp() {
  const configResponse = await zoomSdk.config({
    version: "0.16",
    popoutSize: {width: 480, height: 360},
    capabilities: ["shareApp"]
  })
}
```

The cloud SDK is designed to provide on-demand patch updates, and it does not support exact versions. You will always get the latest patch version within the major version specified in the version parameter of `zoomSdk.config`. In other words, if you supplied an exact version like `0.16.1`, you will get the latest patch within the `0.16` major version.

`zoomSdk.config` response object. Read more about [zoomSdk.config](https://appssdk.zoom.us/classes/ZoomSdk.ZoomSdk.html#config)

```
{
  "clientVersion": "5.11.1.8356",
  "browserVersion": "applewebkit/17613.2.7.1.8",
  "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko)",
  "auth": {
    "status": "authorized",
    "upgradable": true
  },
  "unsupportedApis": [],
  "runningContext": "inMainClient",
  "product": "desktop"
}
```

## Role and running context change

Listen to `zoomSdk.onMyUserContextChange` and `zoomSdk.onRunningContextChange` events for role and running context changes respectively. `zoomSdk.config` needs to be called again to update API permissions.

## Note

- Zoom Desktop Client is a native application. Depending on the Zoom Desktop Client version a user has installed, they might have access to different Zoom Apps APIs and events. With the cloud version of the SDK, you automatically get the latest patches as we release new client versions, and your apps avoid potential breaks due to missing patches.

- When using SDK via npm, check for updates in our monthly release of Zoom Desktop Client. You must manually update your app when needed to the latest SDK to maintain compatibility with newer client versions.

- The SDK module installed via npm includes the `sdk.d.ts` file which provides type definitions for `sdk.es.js` and `sdk.module.js`. The cloud-based SDK does not provide this file.

### How do compatibility patches work?

This is an example of how compatibility patches delivered via cloud-based SDK help your app run on the latest client versions.

**Note**: This example is only for illustrating the concept, and does not imply Zoom is planning to change the `sendAppInvitation` API schema.

**Example**:
Your app is developed against the 3.4.0 client version and uses the `sendAppInvitation` API.

Client version 3.4.0. The `sendAppInvitation` API schema is

```
sendAppInvitation ({ participantUUIDs: [participantUUID1, participantUUID2, ...], })
```

Client version 4.0.0 introduces a breaking change to the `sendAppInvitation` API that requires one additional parameter `message` to customize your invitation. The new API schema is

```
sendAppInvitation ({ participantUUIDs: [participantUUID1, participantUUID2, ...],  message: "This app is awesome, try it!"})
```

Apps based on the client version 3.4.0 will break when used on the 4.0.0 client because the client is expecting the `message` parameter as part of the API call. Whereas, when you use the cloud-based SDK, the compatibility patch can accept your API request and transform it internally to use a default value for the `message` parameter.

Original call from app to SDK

```
sendAppInvitation ({ participantUUIDs: [participantUUID1, participantUUID2, ...], })
```

SDK transforms the call internally to

```
sendAppInvitation ({ participantUUIDs: [participantUUID1, participantUUID2, ...], message: ""})
```

## Documentation

Refer to Apps SDK documentation [here](https://appssdk.zoom.us/classes/ZoomSdk.ZoomSdk.html).

## Release notes

Refer to [release notes](https://github.com/zoom/appssdk/releases) to discover changes made in the Apps SDK.

## Resources to create a Zoom App

- Create your first Zoom App following these [steps](https://developers.zoom.us/docs/zoom-apps/create/).
- To help you start developing Zoom Apps we also provide sample reference [apps](https://developers.zoom.us/docs/zoom-apps/reference-apps/).
- Watch [How To Create a Zoom App](https://www.youtube.com/watch?v=otlyDxnU-RI) and [How To Configure the Basic Zoom App](https://www.youtube.com/watch?v=SS87nqO9ScQ).
- Discover more learning [resources](https://developers.zoom.us/docs/zoom-apps/) for Zoom Apps Development.
- Zoom Apps SDK on [npm](https://www.npmjs.com/package/@zoom/appssdk).

## Need help?

- If you are looking for help, try [Developer Support](https://devsupport.zoom.us/hc/en-us) or our [Developer Forum](https://devforum.zoom.us/).
- For questions related to Zoom Apps please direct them to [Zoom Apps](https://devforum.zoom.us/c/zoom-apps/39) category in the forum.
- Priority support is also available with [Premier Developer Support](https://explore.zoom.us/docs/en-us/developer-support-plans.html) plans.
