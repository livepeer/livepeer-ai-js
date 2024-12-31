# LLMRequest

## Example Usage

```typescript
import { LLMRequest } from "@livepeer/ai/models/components";

let value: LLMRequest = {
  messages: [
    {
      role: "<value>",
      content: "<value>",
    },
  ],
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `messages`                                                       | [components.LLMMessage](../../models/components/llmmessage.md)[] | :heavy_check_mark:                                               | N/A                                                              |
| `model`                                                          | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `temperature`                                                    | *number*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `maxTokens`                                                      | *number*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `topP`                                                           | *number*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `topK`                                                           | *number*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `stream`                                                         | *boolean*                                                        | :heavy_minus_sign:                                               | N/A                                                              |