# Audio

## Example Usage

```typescript
import { Audio } from "livepeer-ai/models/components";

let value: Audio = {
    fileName: "your_file_here",
    content: new TextEncoder().encode("0xbEAb29a54B"),
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `fileName`         | *string*           | :heavy_check_mark: | N/A                |
| `content`          | *Uint8Array*       | :heavy_check_mark: | N/A                |