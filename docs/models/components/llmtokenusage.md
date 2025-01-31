# LLMTokenUsage

## Example Usage

```typescript
import { LLMTokenUsage } from "@livepeer/ai/models/components";

let value: LLMTokenUsage = {
  promptTokens: 670638,
  completionTokens: 210382,
  totalTokens: 128926,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `promptTokens`     | *number*           | :heavy_check_mark: | N/A                |
| `completionTokens` | *number*           | :heavy_check_mark: | N/A                |
| `totalTokens`      | *number*           | :heavy_check_mark: | N/A                |