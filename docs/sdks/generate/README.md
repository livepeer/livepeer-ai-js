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
* [llm](#llm) - LLM
* [imageToText](#imagetotext) - Image To Text
* [liveVideoToVideo](#livevideotovideo) - Live Video To Video
* [textToSpeech](#texttospeech) - Text To Speech

## textToImage

Generate images from text prompts.

### Example Usage

```typescript
import { Livepeer } from "@livepeer/ai";

const livepeer = new Livepeer({
  httpBearer: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await livepeer.generate.textToImage({
    modelId: "",
    loras: "",
    prompt: "<value>",
    height: 576,
    width: 1024,
    guidanceScale: 7.5,
    negativePrompt: "",
    safetyCheck: true,
    numInferenceSteps: 50,
    numImagesPerPrompt: 1,
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LivepeerCore } from "@livepeer/ai/core.js";
import { generateTextToImage } from "@livepeer/ai/funcs/generateTextToImage.js";

// Use `LivepeerCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const livepeer = new LivepeerCore({
  httpBearer: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await generateTextToImage(livepeer, {
    modelId: "",
    loras: "",
    prompt: "<value>",
    height: 576,
    width: 1024,
    guidanceScale: 7.5,
    negativePrompt: "",
    safetyCheck: true,
    numInferenceSteps: 50,
    numImagesPerPrompt: 1,
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
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

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPError           | 400, 401                   | application/json           |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.HTTPError           | 500                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## imageToImage

Apply image transformations to a provided image.

### Example Usage

```typescript
import { Livepeer } from "@livepeer/ai";
import { openAsBlob } from "node:fs";

const livepeer = new Livepeer({
  httpBearer: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await livepeer.generate.imageToImage({
    image: await openAsBlob("example.file"),
    prompt: "<value>",
    guidanceScale: 7.5,
    imageGuidanceScale: 1.5,
    loras: "",
    modelId: "",
    negativePrompt: "",
    numImagesPerPrompt: 1,
    numInferenceSteps: 100,
    safetyCheck: true,
    strength: 0.8,
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LivepeerCore } from "@livepeer/ai/core.js";
import { generateImageToImage } from "@livepeer/ai/funcs/generateImageToImage.js";
import { openAsBlob } from "node:fs";

// Use `LivepeerCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const livepeer = new LivepeerCore({
  httpBearer: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await generateImageToImage(livepeer, {
    image: await openAsBlob("example.file"),
    prompt: "<value>",
    guidanceScale: 7.5,
    imageGuidanceScale: 1.5,
    loras: "",
    modelId: "",
    negativePrompt: "",
    numImagesPerPrompt: 1,
    numInferenceSteps: 100,
    safetyCheck: true,
    strength: 0.8,
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
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

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPError           | 400, 401                   | application/json           |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.HTTPError           | 500                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## imageToVideo

Generate a video from a provided image.

### Example Usage

```typescript
import { Livepeer } from "@livepeer/ai";
import { openAsBlob } from "node:fs";

const livepeer = new Livepeer({
  httpBearer: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await livepeer.generate.imageToVideo({
    image: await openAsBlob("example.file"),
    fps: 6,
    height: 576,
    modelId: "",
    motionBucketId: 127,
    noiseAugStrength: 0.02,
    numInferenceSteps: 25,
    safetyCheck: true,
    width: 1024,
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LivepeerCore } from "@livepeer/ai/core.js";
import { generateImageToVideo } from "@livepeer/ai/funcs/generateImageToVideo.js";
import { openAsBlob } from "node:fs";

// Use `LivepeerCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const livepeer = new LivepeerCore({
  httpBearer: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await generateImageToVideo(livepeer, {
    image: await openAsBlob("example.file"),
    fps: 6,
    height: 576,
    modelId: "",
    motionBucketId: 127,
    noiseAugStrength: 0.02,
    numInferenceSteps: 25,
    safetyCheck: true,
    width: 1024,
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
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

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPError           | 400, 401                   | application/json           |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.HTTPError           | 500                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## upscale

Upscale an image by increasing its resolution.

### Example Usage

```typescript
import { Livepeer } from "@livepeer/ai";
import { openAsBlob } from "node:fs";

const livepeer = new Livepeer({
  httpBearer: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await livepeer.generate.upscale({
    image: await openAsBlob("example.file"),
    prompt: "<value>",
    modelId: "",
    numInferenceSteps: 75,
    safetyCheck: true,
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LivepeerCore } from "@livepeer/ai/core.js";
import { generateUpscale } from "@livepeer/ai/funcs/generateUpscale.js";
import { openAsBlob } from "node:fs";

// Use `LivepeerCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const livepeer = new LivepeerCore({
  httpBearer: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await generateUpscale(livepeer, {
    image: await openAsBlob("example.file"),
    prompt: "<value>",
    modelId: "",
    numInferenceSteps: 75,
    safetyCheck: true,
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
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

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPError           | 400, 401                   | application/json           |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.HTTPError           | 500                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## audioToText

Transcribe audio files to text.

### Example Usage

```typescript
import { Livepeer } from "@livepeer/ai";
import { openAsBlob } from "node:fs";

const livepeer = new Livepeer({
  httpBearer: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await livepeer.generate.audioToText({
    audio: await openAsBlob("example.file"),
    modelId: "",
    returnTimestamps: "true",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LivepeerCore } from "@livepeer/ai/core.js";
import { generateAudioToText } from "@livepeer/ai/funcs/generateAudioToText.js";
import { openAsBlob } from "node:fs";

// Use `LivepeerCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const livepeer = new LivepeerCore({
  httpBearer: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await generateAudioToText(livepeer, {
    audio: await openAsBlob("example.file"),
    modelId: "",
    returnTimestamps: "true",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
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

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPError           | 400, 401, 413, 415         | application/json           |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.HTTPError           | 500                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## segmentAnything2

Segment objects in an image.

### Example Usage

```typescript
import { Livepeer } from "@livepeer/ai";
import { openAsBlob } from "node:fs";

const livepeer = new Livepeer({
  httpBearer: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await livepeer.generate.segmentAnything2({
    image: await openAsBlob("example.file"),
    modelId: "",
    multimaskOutput: true,
    normalizeCoords: true,
    returnLogits: true,
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LivepeerCore } from "@livepeer/ai/core.js";
import { generateSegmentAnything2 } from "@livepeer/ai/funcs/generateSegmentAnything2.js";
import { openAsBlob } from "node:fs";

// Use `LivepeerCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const livepeer = new LivepeerCore({
  httpBearer: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await generateSegmentAnything2(livepeer, {
    image: await openAsBlob("example.file"),
    modelId: "",
    multimaskOutput: true,
    normalizeCoords: true,
    returnLogits: true,
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
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

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPError           | 400, 401                   | application/json           |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.HTTPError           | 500                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## llm

Generate text using a language model.

### Example Usage

```typescript
import { Livepeer } from "@livepeer/ai";

const livepeer = new Livepeer({
  httpBearer: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await livepeer.generate.llm({
    messages: [

    ],
    model: "",
    temperature: 0.7,
    maxTokens: 256,
    topP: 1,
    topK: -1,
    stream: false,
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LivepeerCore } from "@livepeer/ai/core.js";
import { generateLlm } from "@livepeer/ai/funcs/generateLlm.js";

// Use `LivepeerCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const livepeer = new LivepeerCore({
  httpBearer: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await generateLlm(livepeer, {
    messages: [
  
    ],
    model: "",
    temperature: 0.7,
    maxTokens: 256,
    topP: 1,
    topK: -1,
    stream: false,
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.LLMRequest](../../models/components/llmrequest.md)                                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GenLLMResponse](../../models/operations/genllmresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPError           | 400, 401                   | application/json           |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.HTTPError           | 500                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## imageToText

Transform image files to text.

### Example Usage

```typescript
import { Livepeer } from "@livepeer/ai";
import { openAsBlob } from "node:fs";

const livepeer = new Livepeer({
  httpBearer: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await livepeer.generate.imageToText({
    image: await openAsBlob("example.file"),
    modelId: "",
    prompt: "",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LivepeerCore } from "@livepeer/ai/core.js";
import { generateImageToText } from "@livepeer/ai/funcs/generateImageToText.js";
import { openAsBlob } from "node:fs";

// Use `LivepeerCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const livepeer = new LivepeerCore({
  httpBearer: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await generateImageToText(livepeer, {
    image: await openAsBlob("example.file"),
    modelId: "",
    prompt: "",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.BodyGenImageToText](../../models/components/bodygenimagetotext.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GenImageToTextResponse](../../models/operations/genimagetotextresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPError           | 400, 401, 413              | application/json           |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.HTTPError           | 500                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## liveVideoToVideo

Apply transformations to a live video streamed to the returned endpoints.

### Example Usage

```typescript
import { Livepeer } from "@livepeer/ai";

const livepeer = new Livepeer({
  httpBearer: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await livepeer.generate.liveVideoToVideo({
    subscribeUrl: "https://soulful-lava.org/",
    publishUrl: "https://vain-tabletop.biz",
    controlUrl: "",
    eventsUrl: "",
    modelId: "",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LivepeerCore } from "@livepeer/ai/core.js";
import { generateLiveVideoToVideo } from "@livepeer/ai/funcs/generateLiveVideoToVideo.js";

// Use `LivepeerCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const livepeer = new LivepeerCore({
  httpBearer: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await generateLiveVideoToVideo(livepeer, {
    subscribeUrl: "https://soulful-lava.org/",
    publishUrl: "https://vain-tabletop.biz",
    controlUrl: "",
    eventsUrl: "",
    modelId: "",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.LiveVideoToVideoParams](../../models/components/livevideotovideoparams.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GenLiveVideoToVideoResponse](../../models/operations/genlivevideotovideoresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPError           | 400, 401                   | application/json           |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.HTTPError           | 500                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## textToSpeech

Generate a text-to-speech audio file based on the provided text input and speaker description.

### Example Usage

```typescript
import { Livepeer } from "@livepeer/ai";

const livepeer = new Livepeer({
  httpBearer: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await livepeer.generate.textToSpeech({
    modelId: "",
    text: "",
    description: "A male speaker delivers a slightly expressive and animated speech with a moderate speed and pitch.",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LivepeerCore } from "@livepeer/ai/core.js";
import { generateTextToSpeech } from "@livepeer/ai/funcs/generateTextToSpeech.js";

// Use `LivepeerCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const livepeer = new LivepeerCore({
  httpBearer: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await generateTextToSpeech(livepeer, {
    modelId: "",
    text: "",
    description: "A male speaker delivers a slightly expressive and animated speech with a moderate speed and pitch.",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.TextToSpeechParams](../../models/components/texttospeechparams.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GenTextToSpeechResponse](../../models/operations/gentexttospeechresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPError           | 400, 401                   | application/json           |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.HTTPError           | 500                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |