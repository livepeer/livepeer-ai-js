# LiveVideoToVideoResponse

Response model for live video-to-video generation.

## Example Usage

```typescript
import { LiveVideoToVideoResponse } from "@livepeer/ai/models/components";

let value: LiveVideoToVideoResponse = {
  subscribeUrl: "https://heavy-middle.info/",
  publishUrl: "https://carefree-cross-contamination.com",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `subscribeUrl`                                             | *string*                                                   | :heavy_check_mark:                                         | Source URL of the incoming stream to subscribe to          |
| `publishUrl`                                               | *string*                                                   | :heavy_check_mark:                                         | Destination URL of the outgoing stream to publish to       |
| `controlUrl`                                               | *string*                                                   | :heavy_minus_sign:                                         | URL for updating the live video-to-video generation        |
| `eventsUrl`                                                | *string*                                                   | :heavy_minus_sign:                                         | URL for subscribing to events for pipeline status and logs |