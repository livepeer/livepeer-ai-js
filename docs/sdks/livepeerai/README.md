# LivepeerAI SDK

## Overview

Livepeer AI Runner: An application to run AI pipelines

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
  const result = await livepeerAI.textToImage({
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
import { textToImage } from "livepeer-ai/funcs/textToImage.js";

// Use `LivepeerAICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const livepeerAI = new LivepeerAICore({
  httpBearer: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await textToImage(livepeerAI, {
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

**Promise\<[operations.TextToImageResponse](../../models/operations/texttoimageresponse.md)\>**

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
  const result = await livepeerAI.imageToImage({
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
import { imageToImage } from "livepeer-ai/funcs/imageToImage.js";
import { openAsBlob } from "node:fs";

// Use `LivepeerAICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const livepeerAI = new LivepeerAICore({
  httpBearer: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await imageToImage(livepeerAI, {
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
| `request`                                                                                                                                                                      | [components.BodyImageToImageImageToImagePost](../../models/components/bodyimagetoimageimagetoimagepost.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ImageToImageResponse](../../models/operations/imagetoimageresponse.md)\>**

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
  const result = await livepeerAI.imageToVideo({
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
import { imageToVideo } from "livepeer-ai/funcs/imageToVideo.js";
import { openAsBlob } from "node:fs";

// Use `LivepeerAICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const livepeerAI = new LivepeerAICore({
  httpBearer: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await imageToVideo(livepeerAI, {
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
| `request`                                                                                                                                                                      | [components.BodyImageToVideoImageToVideoPost](../../models/components/bodyimagetovideoimagetovideopost.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ImageToVideoResponse](../../models/operations/imagetovideoresponse.md)\>**

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
  const result = await livepeerAI.upscale({
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
import { upscale } from "livepeer-ai/funcs/upscale.js";
import { openAsBlob } from "node:fs";

// Use `LivepeerAICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const livepeerAI = new LivepeerAICore({
  httpBearer: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await upscale(livepeerAI, {
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
| `request`                                                                                                                                                                      | [components.BodyUpscaleUpscalePost](../../models/components/bodyupscaleupscalepost.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UpscaleResponse](../../models/operations/upscaleresponse.md)\>**

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
  const result = await livepeerAI.audioToText({
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
import { audioToText } from "livepeer-ai/funcs/audioToText.js";
import { openAsBlob } from "node:fs";

// Use `LivepeerAICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const livepeerAI = new LivepeerAICore({
  httpBearer: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await audioToText(livepeerAI, {
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
| `request`                                                                                                                                                                      | [components.BodyAudioToTextAudioToTextPost](../../models/components/bodyaudiototextaudiototextpost.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AudioToTextResponse](../../models/operations/audiototextresponse.md)\>**

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
  const result = await livepeerAI.segmentAnything2({
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
import { segmentAnything2 } from "livepeer-ai/funcs/segmentAnything2.js";
import { openAsBlob } from "node:fs";

// Use `LivepeerAICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const livepeerAI = new LivepeerAICore({
  httpBearer: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await segmentAnything2(livepeerAI, {
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
| `request`                                                                                                                                                                      | [components.BodySegmentAnything2SegmentAnything2Post](../../models/components/bodysegmentanything2segmentanything2post.md)                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.SegmentAnything2Response](../../models/operations/segmentanything2response.md)\>**

### Errors

| Error Object               | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPError           | 400,401,500                | application/json           |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4xx-5xx                    | */*                        |
