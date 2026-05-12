# VideoResponse

Response model for image generation.

## Example Usage

```typescript
import { VideoResponse } from "@livepeer/ai/models/components";

let value: VideoResponse = {
  images: [],
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `images`                                               | [components.Media](../../models/components/media.md)[] | :heavy_check_mark:                                     | The generated images.                                  |