# ImageResponse

Response model for image generation.

## Example Usage

```typescript
import { ImageResponse } from "@livepeer/ai/models/components";

let value: ImageResponse = {
  images: [
    {
      url: "https://inexperienced-divine.net",
      seed: 456150,
      nsfw: false,
    },
  ],
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `images`                                               | [components.Media](../../models/components/media.md)[] | :heavy_check_mark:                                     | The generated images.                                  |