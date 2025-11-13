# LLMTokenUsage

## Example Usage

```typescript
import { LLMTokenUsage } from "@livepeer/ai/models/components";

let value: LLMTokenUsage = {
  promptTokens: 569217,
  completionTokens: 376999,
  totalTokens: 487229,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `promptTokens`     | *number*           | :heavy_check_mark: | N/A                |
| `completionTokens` | *number*           | :heavy_check_mark: | N/A                |
| `totalTokens`      | *number*           | :heavy_check_mark: | N/A                |