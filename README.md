# Zoom Apps SDK

The Zoom Apps SDK is a JavaScript library that faciliates communication between your Zoom App and the Zoom client. The SDK allows you to take advantage of the many APIs and events Zoom exposes in its embedded browser.

## Usage

There are two ways to use the Zoom Apps SDK.

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

If you choose to use the CDN, note that the SDK is unversioned and subject to on-demand updates. Because of this, you will need to specify an additional parameter `version` when calling `zoomSdk.config`.
