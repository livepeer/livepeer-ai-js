# Image

## Example Usage

```typescript
import { Image } from "livepeer-ai/models/components";

let value: Image = {
    fileName: "your_file_here",
    content: new TextEncoder().encode("0x8aBBbac8EC"),
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `fileName`         | *string*           | :heavy_check_mark: | N/A                |
| `content`          | *Uint8Array*       | :heavy_check_mark: | N/A                |