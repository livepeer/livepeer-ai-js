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
    prompt: "<value>",
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
    prompt: "<value>",
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
| `liveVideoToVideoParams`                                                                                                                                                       | [components.LiveVideoToVideoParams](../../models/components/livevideotovideoparams.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `requestID`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `streamID`                                                                                                                                                                     | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | N/A                                                                                                                                                                            |
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
  const result = await livepeer.generate.textToSpeech({});

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
  const res = await generateTextToSpeech(livepeer, {});

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