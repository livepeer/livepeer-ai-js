# VideoResponse

## Example Usage

```typescript
import { VideoResponse } from "livepeer-ai/models/components";

let value: VideoResponse = {
    images: [
        {
            url: "http://nice-gorilla.org",
            seed: 836079,
            nsfw: false,
        },
    ],
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `images`                                               | [components.Media](../../models/components/media.md)[] | :heavy_check_mark:                                     | N/A                                                    |