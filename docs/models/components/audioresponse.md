# AudioResponse

Response model for audio generation.

## Example Usage

```typescript
import { AudioResponse } from "@livepeer/ai/models/components";

let value: AudioResponse = {
  audio: {
    url: "https://lighthearted-developing.com/",
  },
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `audio`                                                    | [components.MediaURL](../../models/components/mediaurl.md) | :heavy_check_mark:                                         | The generated audio.                                       |