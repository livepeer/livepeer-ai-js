# LLMResponse

## Example Usage

```typescript
import { LLMResponse } from "@livepeer/ai/models/components";

let value: LLMResponse = {
  id: "<id>",
  model: "Volt",
  created: 681820,
  usage: {
    promptTokens: 359508,
    completionTokens: 437032,
    totalTokens: 697631,
  },
  choices: [
    {
      index: 60225,
    },
  ],
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `id`                                                                 | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `model`                                                              | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `created`                                                            | *number*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `usage`                                                              | [components.LLMTokenUsage](../../models/components/llmtokenusage.md) | :heavy_check_mark:                                                   | N/A                                                                  |
| `choices`                                                            | [components.LLMChoice](../../models/components/llmchoice.md)[]       | :heavy_check_mark:                                                   | N/A                                                                  |