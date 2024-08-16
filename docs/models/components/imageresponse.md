# ImageResponse

## Example Usage

```typescript
import { ImageResponse } from "livepeer-ai/models/components";

let value: ImageResponse = {
    images: [
        {
            url: "https://moral-star.info",
            seed: 623564,
            nsfw: false,
        },
    ],
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `images`                                               | [components.Media](../../models/components/media.md)[] | :heavy_check_mark:                                     | N/A                                                    |