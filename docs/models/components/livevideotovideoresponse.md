# LiveVideoToVideoResponse

Response model for live video-to-video generation.

## Example Usage

```typescript
import { LiveVideoToVideoResponse } from "@livepeer/ai/models/components";

let value: LiveVideoToVideoResponse = {
  subscribeUrl: "https://hateful-humor.net",
  publishUrl: "https://rare-pillbox.biz/",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `subscribeUrl`                                       | *string*                                             | :heavy_check_mark:                                   | Source URL of the incoming stream to subscribe to    |
| `publishUrl`                                         | *string*                                             | :heavy_check_mark:                                   | Destination URL of the outgoing stream to publish to |