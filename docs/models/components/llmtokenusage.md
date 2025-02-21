# LLMTokenUsage

## Example Usage

```typescript
import { LLMTokenUsage } from "@livepeer/ai/models/components";

let value: LLMTokenUsage = {
  promptTokens: 102044,
  completionTokens: 208876,
  totalTokens: 161309,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `promptTokens`     | *number*           | :heavy_check_mark: | N/A                |
| `completionTokens` | *number*           | :heavy_check_mark: | N/A                |
| `totalTokens`      | *number*           | :heavy_check_mark: | N/A                |