# GenAudioToTextResponse

## Example Usage

```typescript
import { GenAudioToTextResponse } from "@livepeer/ai/models/operations";

let value: GenAudioToTextResponse = {
  contentType: "<value>",
  statusCode: 602763,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `contentType`                                                         | *string*                                                              | :heavy_check_mark:                                                    | HTTP response content type for this operation                         |
| `statusCode`                                                          | *number*                                                              | :heavy_check_mark:                                                    | HTTP response status code for this operation                          |
| `rawResponse`                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) | :heavy_check_mark:                                                    | Raw HTTP response; suitable for custom response parsing               |
| `textResponse`                                                        | [components.TextResponse](../../models/components/textresponse.md)    | :heavy_minus_sign:                                                    | Successful Response                                                   |