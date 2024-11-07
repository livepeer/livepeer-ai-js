# VideoResponse

Response model for image generation.

## Example Usage

```typescript
import { VideoResponse } from "@livepeer/ai/models/components";

let value: VideoResponse = {
  images: [
    {
      url: "https://agitated-ocelot.name",
      seed: 616934,
      nsfw: false,
    },
  ],
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `images`                                               | [components.Media](../../models/components/media.md)[] | :heavy_check_mark:                                     | The generated images.                                  |