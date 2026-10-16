# public-packages

## Intent

This area contains API documentation for each of the XM Mobile SDK products: 

- [iOS](https://foreseecode.github.io/public-packages/mobile/iOS/current/index.html)
- [Android](https://foreseecode.github.io/public-packages/mobile/android/8.0.1/index.html)
- [React native](https://foreseecode.github.io/public-packages/mobile/react-native/docs/index.html)

## Usage

The documentation is updated using automated workflows:

### Android

Updated as a part of the `publish_docs` workflow in the Android SDK's [Fastlane configuration](https://github.com/verint-XM/foresee-sdk-android/blob/core/fastlane/Fastfile#L232)

The docs link above relies on a `latest` redirect (See [Redirects](#redirects) below) which is automatically updated to point to each new docs version. 

### iOS

Updated as part of the `create_public_docs` workflow in the iOS SDK's [Fastlane configuration](https://github.com/verint-XM/foresee-sdk-ios/blob/core/fastlane/Fastfile#L324)

### React Native

React Native docs are currently updated manually as part of the release workflow. 

## Notes

### Redirects

The [404 page](./404.html) included in this repository allows for a redirects to be configured using the content in the [redirect script](./scripts/redirect.js). This script is automatically updated by the Android workflow covered above.
