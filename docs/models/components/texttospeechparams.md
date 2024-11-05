# TextToSpeechParams

## Example Usage

```typescript
import { TextToSpeechParams } from "@livepeer/ai/models/components";

let value: TextToSpeechParams = {};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `modelId`                                                  | *string*                                                   | :heavy_minus_sign:                                         | Hugging Face model ID used for text to speech generation.  |
| `text`                                                     | *string*                                                   | :heavy_minus_sign:                                         | Text input for speech generation.                          |
| `description`                                              | *string*                                                   | :heavy_minus_sign:                                         | Description of speaker to steer text to speech generation. |