# LLMResponse

## Example Usage

```typescript
import { LLMResponse } from "@livepeer/ai/models/components";

let value: LLMResponse = {
  id: "<id>",
  model: "CX-9",
  created: 128926,
  usage: {
    promptTokens: 315428,
    completionTokens: 363711,
    totalTokens: 570197,
  },
  choices: [
    {
      index: 438601,
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