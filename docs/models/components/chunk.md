# Chunk

A chunk of text with a timestamp.

## Example Usage

```typescript
import { Chunk } from "@livepeer/ai/models/components";

let value: Chunk = {
  timestamp: [
    6818.20,
  ],
  text: "<value>",
};
```

## Fields

| Field                       | Type                        | Required                    | Description                 |
| --------------------------- | --------------------------- | --------------------------- | --------------------------- |
| `timestamp`                 | *number*[]                  | :heavy_check_mark:          | The timestamp of the chunk. |
| `text`                      | *string*                    | :heavy_check_mark:          | The text of the chunk.      |