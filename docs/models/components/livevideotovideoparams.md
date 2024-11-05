# LiveVideoToVideoParams

## Example Usage

```typescript
import { LiveVideoToVideoParams } from "@livepeer/ai/models/components";

let value: LiveVideoToVideoParams = {
  subscribeUrl: "https://oily-hundred.org/",
  publishUrl: "https://dual-cod.name/",
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `subscribeUrl`                                         | *string*                                               | :heavy_check_mark:                                     | Source URL of the incoming stream to subscribe to.     |
| `publishUrl`                                           | *string*                                               | :heavy_check_mark:                                     | Destination URL of the outgoing stream to publish.     |
| `modelId`                                              | *string*                                               | :heavy_minus_sign:                                     | Hugging Face model ID used for image generation.       |
| `params`                                               | [components.Params](../../models/components/params.md) | :heavy_minus_sign:                                     | Initial parameters for the model.                      |