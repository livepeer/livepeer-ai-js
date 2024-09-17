# ImageResponse

Response model for image generation.

## Example Usage

```typescript
import { ImageResponse } from "openapi/models/components";

let value: ImageResponse = {
  images: [
    {
      url: "https://opulent-rabbit.org",
      seed: 602763,
      nsfw: false,
    },
  ],
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `images`                                               | [components.Media](../../models/components/media.md)[] | :heavy_check_mark:                                     | The generated images.                                  |