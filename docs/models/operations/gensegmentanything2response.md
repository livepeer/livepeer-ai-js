# GenSegmentAnything2Response

## Example Usage

```typescript
import { GenSegmentAnything2Response } from "livepeer-ai/models/operations";

let value: GenSegmentAnything2Response = {
  contentType: "<value>",
  statusCode: 857946,
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
| `masksResponse`                                                       | [components.MasksResponse](../../models/components/masksresponse.md)  | :heavy_minus_sign:                                                    | Successful Response                                                   |