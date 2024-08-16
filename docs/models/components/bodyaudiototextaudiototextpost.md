# BodyAudioToTextAudioToTextPost

## Example Usage

```typescript
import { BodyAudioToTextAudioToTextPost } from "livepeer-ai/models/components";
import { openAsBlob } from "node:fs";

let value: BodyAudioToTextAudioToTextPost = {
    audio: await openAsBlob("./sample-file"),
};
```

## Fields

| Field                                                                                                                                                                                | Type                                                                                                                                                                                 | Required                                                                                                                                                                             | Description                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `audio`                                                                                                                                                                              | [File](https://developer.mozilla.org/en-US/docs/Web/API/File) \| [Blob](https://developer.mozilla.org/en-US/docs/Web/API/Blob) \| [components.Audio](../../models/components/audio.md) | :heavy_check_mark:                                                                                                                                                                   | Uploaded audio file to be transcribed.                                                                                                                                               |
| `modelId`                                                                                                                                                                            | *string*                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                   | Hugging Face model ID used for transcription.                                                                                                                                        |