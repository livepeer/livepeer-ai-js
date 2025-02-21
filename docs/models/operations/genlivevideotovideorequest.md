# GenLiveVideoToVideoRequest

## Example Usage

```typescript
import { GenLiveVideoToVideoRequest } from "@livepeer/ai/models/operations";

let value: GenLiveVideoToVideoRequest = {
  liveVideoToVideoParams: {
    subscribeUrl: "https://talkative-sauerkraut.org/",
    publishUrl: "https://steep-independence.net",
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `requestID`                                                                            | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `streamID`                                                                             | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `liveVideoToVideoParams`                                                               | [components.LiveVideoToVideoParams](../../models/components/livevideotovideoparams.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |