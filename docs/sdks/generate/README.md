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
import { LivepeerAI } from "livepeer-ai";

const livepeerAI = new LivepeerAI({
  httpBearer: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await livepeerAI.generate.textToImage({
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
import { LivepeerAICore } from "livepeer-ai/core.js";
import { generateTextToImage } from "livepeer-ai/funcs/generateTextToImage.js";

// Use `LivepeerAICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const livepeerAI = new LivepeerAICore({
  httpBearer: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await generateTextToImage(livepeerAI, {
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

**Promise\<[operations.GenTextToImageResponse](../../models/operations/gentexttoimageresponse.md)\>**

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
import { LivepeerAI } from "livepeer-ai";
import { openAsBlob } from "node:fs";

const livepeerAI = new LivepeerAI({
  httpBearer: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await livepeerAI.generate.imageToImage({
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
import { LivepeerAICore } from "livepeer-ai/core.js";
import { generateImageToImage } from "livepeer-ai/funcs/generateImageToImage.js";
import { openAsBlob } from "node:fs";

// Use `LivepeerAICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const livepeerAI = new LivepeerAICore({
  httpBearer: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await generateImageToImage(livepeerAI, {
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

**Promise\<[operations.GenImageToImageResponse](../../models/operations/genimagetoimageresponse.md)\>**

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
import { LivepeerAI } from "livepeer-ai";
import { openAsBlob } from "node:fs";

const livepeerAI = new LivepeerAI({
  httpBearer: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await livepeerAI.generate.imageToVideo({
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
import { LivepeerAICore } from "livepeer-ai/core.js";
import { generateImageToVideo } from "livepeer-ai/funcs/generateImageToVideo.js";
import { openAsBlob } from "node:fs";

// Use `LivepeerAICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const livepeerAI = new LivepeerAICore({
  httpBearer: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await generateImageToVideo(livepeerAI, {
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

**Promise\<[operations.GenImageToVideoResponse](../../models/operations/genimagetovideoresponse.md)\>**

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
import { LivepeerAI } from "livepeer-ai";
import { openAsBlob } from "node:fs";

const livepeerAI = new LivepeerAI({
  httpBearer: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await livepeerAI.generate.upscale({
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
import { LivepeerAICore } from "livepeer-ai/core.js";
import { generateUpscale } from "livepeer-ai/funcs/generateUpscale.js";
import { openAsBlob } from "node:fs";

// Use `LivepeerAICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const livepeerAI = new LivepeerAICore({
  httpBearer: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await generateUpscale(livepeerAI, {
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

**Promise\<[operations.GenUpscaleResponse](../../models/operations/genupscaleresponse.md)\>**

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
import { LivepeerAI } from "livepeer-ai";
import { openAsBlob } from "node:fs";

const livepeerAI = new LivepeerAI({
  httpBearer: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await livepeerAI.generate.audioToText({
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
import { LivepeerAICore } from "livepeer-ai/core.js";
import { generateAudioToText } from "livepeer-ai/funcs/generateAudioToText.js";
import { openAsBlob } from "node:fs";

// Use `LivepeerAICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const livepeerAI = new LivepeerAICore({
  httpBearer: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await generateAudioToText(livepeerAI, {
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

**Promise\<[operations.GenAudioToTextResponse](../../models/operations/genaudiototextresponse.md)\>**

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
import { LivepeerAI } from "livepeer-ai";
import { openAsBlob } from "node:fs";

const livepeerAI = new LivepeerAI({
  httpBearer: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await livepeerAI.generate.segmentAnything2({
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
import { LivepeerAICore } from "livepeer-ai/core.js";
import { generateSegmentAnything2 } from "livepeer-ai/funcs/generateSegmentAnything2.js";
import { openAsBlob } from "node:fs";

// Use `LivepeerAICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const livepeerAI = new LivepeerAICore({
  httpBearer: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await generateSegmentAnything2(livepeerAI, {
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

**Promise\<[operations.GenSegmentAnything2Response](../../models/operations/gensegmentanything2response.md)\>**

### Errors

| Error Object               | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPError           | 400,401,500                | application/json           |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4xx-5xx                    | */*                        |
