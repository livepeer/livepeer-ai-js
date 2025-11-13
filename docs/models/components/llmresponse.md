# LLMResponse

## Example Usage

```typescript
import { LLMResponse } from "@livepeer/ai/models/components";

let value: LLMResponse = {
  id: "<id>",
  model: "Malibu",
  created: 961008,
  usage: {
    promptTokens: 293908,
    completionTokens: 872256,
    totalTokens: 850393,
  },
  choices: [],
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