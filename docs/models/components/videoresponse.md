# VideoResponse

Response model for image generation.

## Example Usage

```typescript
import { VideoResponse } from "livepeer-ai/models/components";

let value: VideoResponse = {
    images: [
        {
            url: "http://gloomy-blanket.name",
            seed: 20218,
            nsfw: false,
        },
    ],
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `images`                                               | [components.Media](../../models/components/media.md)[] | :heavy_check_mark:                                     | The generated images.                                  |