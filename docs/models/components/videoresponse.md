# VideoResponse

Response model for image generation.

## Example Usage

```typescript
import { VideoResponse } from "openapi/models/components";

let value: VideoResponse = {
  images: [
    {
      url: "http://unique-baboon.org",
      seed: 272656,
      nsfw: false,
    },
  ],
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `images`                                               | [components.Media](../../models/components/media.md)[] | :heavy_check_mark:                                     | The generated images.                                  |