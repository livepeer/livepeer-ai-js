# Generate
(*generate*)

## Overview

### Available Operations

* [textToImage](#texttoimage) - Text To Image
* [imageToImage](#imagetoimage) - Image To Image
* [imageToVideo](#imagetovideo) - Image To Video
* [upscale](#upscale) - Upscale
* [audioToText](#audiototext) - Audio To Text
* [segmentAnything2](#segmentanything2) - Segment Anything 2

## textToImage

Generate images from text prompts.

### Example Usage

```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  httpBearer: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.generate.textToImage({
    prompt: "<value>",
  });
  
  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { generateTextToImage } from "openapi/funcs/generateTextToImage.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  httpBearer: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await generateTextToImage(sdk, {
    prompt: "<value>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.TextToImageParams](../../models/components/texttoimageparams.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.ImageResponse](../../models/components/imageresponse.md)\>**

### Errors

| Error Object               | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPError           | 400,401,500                | application/json           |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4xx-5xx                    | */*                        |


## imageToImage

Apply image transformations to a provided image.

### Example Usage

```typescript
import { openAsBlob } from "node:fs";
import { SDK } from "openapi";

const sdk = new SDK({
  httpBearer: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.generate.imageToImage({
    image: await openAsBlob("example.file"),
    prompt: "<value>",
  });
  
  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { openAsBlob } from "node:fs";
import { SDKCore } from "openapi/core.js";
import { generateImageToImage } from "openapi/funcs/generateImageToImage.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  httpBearer: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await generateImageToImage(sdk, {
    image: await openAsBlob("example.file"),
    prompt: "<value>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.BodyGenImageToImage](../../models/components/bodygenimagetoimage.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.ImageResponse](../../models/components/imageresponse.md)\>**

### Errors

| Error Object               | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPError           | 400,401,500                | application/json           |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4xx-5xx                    | */*                        |


## imageToVideo

Generate a video from a provided image.

### Example Usage

```typescript
import { openAsBlob } from "node:fs";
import { SDK } from "openapi";

const sdk = new SDK({
  httpBearer: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.generate.imageToVideo({
    image: await openAsBlob("example.file"),
  });
  
  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { openAsBlob } from "node:fs";
import { SDKCore } from "openapi/core.js";
import { generateImageToVideo } from "openapi/funcs/generateImageToVideo.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  httpBearer: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await generateImageToVideo(sdk, {
    image: await openAsBlob("example.file"),
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.BodyGenImageToVideo](../../models/components/bodygenimagetovideo.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.VideoResponse](../../models/components/videoresponse.md)\>**

### Errors

| Error Object               | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPError           | 400,401,500                | application/json           |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4xx-5xx                    | */*                        |


## upscale

Upscale an image by increasing its resolution.

### Example Usage

```typescript
import { openAsBlob } from "node:fs";
import { SDK } from "openapi";

const sdk = new SDK({
  httpBearer: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.generate.upscale({
    image: await openAsBlob("example.file"),
    prompt: "<value>",
  });
  
  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { openAsBlob } from "node:fs";
import { SDKCore } from "openapi/core.js";
import { generateUpscale } from "openapi/funcs/generateUpscale.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  httpBearer: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await generateUpscale(sdk, {
    image: await openAsBlob("example.file"),
    prompt: "<value>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.BodyGenUpscale](../../models/components/bodygenupscale.md)                                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.ImageResponse](../../models/components/imageresponse.md)\>**

### Errors

| Error Object               | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPError           | 400,401,500                | application/json           |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4xx-5xx                    | */*                        |


## audioToText

Transcribe audio files to text.

### Example Usage

```typescript
import { openAsBlob } from "node:fs";
import { SDK } from "openapi";

const sdk = new SDK({
  httpBearer: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.generate.audioToText({
    audio: await openAsBlob("example.file"),
  });
  
  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { openAsBlob } from "node:fs";
import { SDKCore } from "openapi/core.js";
import { generateAudioToText } from "openapi/funcs/generateAudioToText.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  httpBearer: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await generateAudioToText(sdk, {
    audio: await openAsBlob("example.file"),
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.BodyGenAudioToText](../../models/components/bodygenaudiototext.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.TextResponse](../../models/components/textresponse.md)\>**

### Errors

| Error Object               | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPError           | 400,401,413,500            | application/json           |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4xx-5xx                    | */*                        |


## segmentAnything2

Segment objects in an image.

### Example Usage

```typescript
import { openAsBlob } from "node:fs";
import { SDK } from "openapi";

const sdk = new SDK({
  httpBearer: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.generate.segmentAnything2({
    image: await openAsBlob("example.file"),
  });
  
  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { openAsBlob } from "node:fs";
import { SDKCore } from "openapi/core.js";
import { generateSegmentAnything2 } from "openapi/funcs/generateSegmentAnything2.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  httpBearer: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await generateSegmentAnything2(sdk, {
    image: await openAsBlob("example.file"),
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.BodyGenSegmentAnything2](../../models/components/bodygensegmentanything2.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.MasksResponse](../../models/components/masksresponse.md)\>**

### Errors

| Error Object               | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPError           | 400,401,500                | application/json           |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4xx-5xx                    | */*                        |
