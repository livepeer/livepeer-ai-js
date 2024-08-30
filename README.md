# Livepeer AI JavaScript/TypeScript Library

<div align="left">
    <a href="https://www.speakeasy.com/?utm_source=livepeer-ai&utm_campaign=typescript"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" style="width: 100px; height: 28px;" />
    </a>
</div>

Welcome to the [Livepeer AI](https://livepeer.ai/) JavaScript/TypeScript Library! This library offers a seamless integration with the [Livepeer AI API](https://docs.livepeer.org/ai/api-reference/text-to-image), enabling you to easily incorporate powerful AI capabilities into your JavaScript applications, whether they run in the browser or on the server side.

<!-- Start SDK Installation [installation] -->
## SDK Installation

The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add https://github.com/livepeer/livepeer-ai-js
```

### PNPM

```bash
pnpm add https://github.com/livepeer/livepeer-ai-js
```

### Bun

```bash
bun add https://github.com/livepeer/livepeer-ai-js
```

### Yarn

```bash
yarn add https://github.com/livepeer/livepeer-ai-js zod

# Note that Yarn does not install peer dependencies automatically. You will need
# to install zod as shown above.
```
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

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
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

### [LivepeerAI SDK](docs/sdks/livepeerai/README.md)

* [textToImage](docs/sdks/livepeerai/README.md#texttoimage) - Text To Image
* [imageToImage](docs/sdks/livepeerai/README.md#imagetoimage) - Image To Image
* [imageToVideo](docs/sdks/livepeerai/README.md#imagetovideo) - Image To Video
* [upscale](docs/sdks/livepeerai/README.md#upscale) - Upscale
* [audioToText](docs/sdks/livepeerai/README.md#audiototext) - Audio To Text
<!-- End Available Resources and Operations [operations] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [audioToText](docs/sdks/livepeerai/README.md#audiototext)
- [imageToImage](docs/sdks/livepeerai/README.md#imagetoimage)
- [imageToVideo](docs/sdks/livepeerai/README.md#imagetovideo)
- [textToImage](docs/sdks/livepeerai/README.md#texttoimage)
- [upscale](docs/sdks/livepeerai/README.md#upscale)


</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start File uploads [file-upload] -->
## File uploads

Certain SDK methods accept files as part of a multi-part request. It is possible and typically recommended to upload files as a stream rather than reading the entire contents into memory. This avoids excessive memory consumption and potentially crashing with out-of-memory errors when working with very large files. The following example demonstrates how to attach a file stream to a request.

> [!TIP]
>
> Depending on your JavaScript runtime, there are convenient utilities that return a handle to a file without reading the entire contents into memory:
>
> - **Node.js v20+:** Since v20, Node.js comes with a native `openAsBlob` function in [`node:fs`](https://nodejs.org/docs/latest-v20.x/api/fs.html#fsopenasblobpath-options).
> - **Bun:** The native [`Bun.file`](https://bun.sh/docs/api/file-io#reading-files-bun-file) function produces a file handle that can be used for streaming file uploads.
> - **Browsers:** All supported browsers return an instance to a [`File`](https://developer.mozilla.org/en-US/docs/Web/API/File) when reading the value from an `<input type="file">` element.
> - **Node.js v18:** A file stream can be created using the `fileFrom` helper from [`fetch-blob/from.js`](https://www.npmjs.com/package/fetch-blob).

```typescript
import { LivepeerAI } from "livepeer-ai";
import { openAsBlob } from "node:fs";

const livepeerAI = new LivepeerAI({
    httpBearer: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
    const result = await livepeerAI.imageToImage({
        image: await openAsBlob("./sample-file"),
        prompt: "<value>",
    });

    // Handle the result
    console.log(result);
}

run();

```
<!-- End File uploads [file-upload] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { LivepeerAI } from "livepeer-ai";

const livepeerAI = new LivepeerAI({
    httpBearer: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
    const result = await livepeerAI.textToImage(
        {
            prompt: "<value>",
        },
        {
            retries: {
                strategy: "backoff",
                backoff: {
                    initialInterval: 1,
                    maxInterval: 50,
                    exponent: 1.1,
                    maxElapsedTime: 100,
                },
                retryConnectionErrors: false,
            },
        }
    );

    // Handle the result
    console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { LivepeerAI } from "livepeer-ai";

const livepeerAI = new LivepeerAI({
    retryConfig: {
        strategy: "backoff",
        backoff: {
            initialInterval: 1,
            maxInterval: 50,
            exponent: 1.1,
            maxElapsedTime: 100,
        },
        retryConnectionErrors: false,
    },
    httpBearer: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
    const result = await livepeerAI.textToImage({
        prompt: "<value>",
    });

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

All SDK methods return a response object or throw an error. If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.

| Error Object               | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPError           | 400,401,500                | application/json           |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4xx-5xx                    | */*                        |

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted string since validation errors can list many issues and the plain error string may be difficult read when debugging. 


```typescript
import { LivepeerAI } from "livepeer-ai";
import { HTTPError, HTTPValidationError, SDKValidationError } from "livepeer-ai/models/errors";

const livepeerAI = new LivepeerAI({
    httpBearer: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
    let result;
    try {
        result = await livepeerAI.textToImage({
            prompt: "<value>",
        });
    } catch (err) {
        switch (true) {
            case err instanceof SDKValidationError: {
                // Validation errors can be pretty-printed
                console.error(err.pretty());
                // Raw value may also be inspected
                console.error(err.rawValue);
                return;
            }
            case err instanceof HTTPError: {
                // Handle err.data$: HTTPErrorData
                console.error(err);
                return;
            }
            case err instanceof HTTPValidationError: {
                // Handle err.data$: HTTPValidationErrorData
                console.error(err);
                return;
            }
            default: {
                throw err;
            }
        }
    }

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| # | Server | Variables |
| - | ------ | --------- |
| 0 | `https://dream-gateway.livepeer.cloud` | None |
| 1 | `https://livepeer.studio/api/beta/generate` | None |

```typescript
import { LivepeerAI } from "livepeer-ai";

const livepeerAI = new LivepeerAI({
    serverIdx: 1,
    httpBearer: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
    const result = await livepeerAI.textToImage({
        prompt: "<value>",
    });

    // Handle the result
    console.log(result);
}

run();

```


### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL` optional parameter when initializing the SDK client instance. For example:

```typescript
import { LivepeerAI } from "livepeer-ai";

const livepeerAI = new LivepeerAI({
    serverURL: "https://dream-gateway.livepeer.cloud",
    httpBearer: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
    const result = await livepeerAI.textToImage({
        prompt: "<value>",
    });

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { LivepeerAI } from "livepeer-ai";
import { HTTPClient } from "livepeer-ai/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new LivepeerAI({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name         | Type         | Scheme       |
| ------------ | ------------ | ------------ |
| `httpBearer` | http         | HTTP Bearer  |

To authenticate with the API the `httpBearer` parameter must be set when initializing the SDK client instance. For example:
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
    console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { LivepeerAI } from "livepeer-ai";

const sdk = new LivepeerAI({ debugLogger: console });
```
<!-- End Debugging [debug] -->

<!-- Start Summary [summary] -->
## Summary

Livepeer AI Runner: An application to run AI pipelines
<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents

* [SDK Installation](#sdk-installation)
* [Requirements](#requirements)
* [SDK Example Usage](#sdk-example-usage)
* [Available Resources and Operations](#available-resources-and-operations)
* [Standalone functions](#standalone-functions)
* [File uploads](#file-uploads)
* [Retries](#retries)
* [Error Handling](#error-handling)
* [Server Selection](#server-selection)
* [Custom HTTP Client](#custom-http-client)
* [Authentication](#authentication)
* [Debugging](#debugging)
<!-- End Table of Contents [toc] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in **alpha**, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. Any manual changes added to internal files will be overwritten on the next generation. We look forward to hearing your feedback. Feel free to open a [PR](https://github.com/livepeer/livepeer-ai-js/compare) or [an issue](https://github.com/livepeer/livepeer-ai-js/issues) with a proof of concept and we'll do our best to include it in a future release.

### SDK Created by [Speakeasy](https://www.speakeasy.com/?utm_source=livepeer-ai&utm_campaign=typescript)
