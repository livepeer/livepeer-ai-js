# BodyGenImageToImage

## Example Usage

```typescript
import { BodyGenImageToImage } from "livepeer-ai/models/components";

// No examples available for this model
```

## Fields

| Field                                                                                                                                                                                | Type                                                                                                                                                                                 | Required                                                                                                                                                                             | Description                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `image`                                                                                                                                                                              | [File](https://developer.mozilla.org/en-US/docs/Web/API/File) \| [Blob](https://developer.mozilla.org/en-US/docs/Web/API/Blob) \| [components.Image](../../models/components/image.md) | :heavy_check_mark:                                                                                                                                                                   | Uploaded image to modify with the pipeline.                                                                                                                                          |
| `prompt`                                                                                                                                                                             | *string*                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                   | Text prompt(s) to guide image generation.                                                                                                                                            |
| `guidanceScale`                                                                                                                                                                      | *number*                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                   | Encourages model to generate images closely linked to the text prompt (higher values may reduce image quality).                                                                      |
| `imageGuidanceScale`                                                                                                                                                                 | *number*                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                   | Degree to which the generated image is pushed towards the initial image.                                                                                                             |
| `modelId`                                                                                                                                                                            | *string*                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                   | Hugging Face model ID used for image generation.                                                                                                                                     |
| `negativePrompt`                                                                                                                                                                     | *string*                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                   | Text prompt(s) to guide what to exclude from image generation. Ignored if guidance_scale < 1.                                                                                        |
| `numImagesPerPrompt`                                                                                                                                                                 | *number*                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                   | Number of images to generate per prompt.                                                                                                                                             |
| `numInferenceSteps`                                                                                                                                                                  | *number*                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                   | Number of denoising steps. More steps usually lead to higher quality images but slower inference. Modulated by strength.                                                             |
| `safetyCheck`                                                                                                                                                                        | *boolean*                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                   | Perform a safety check to estimate if generated images could be offensive or harmful.                                                                                                |
| `seed`                                                                                                                                                                               | *number*                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                   | Seed for random number generation.                                                                                                                                                   |
| `strength`                                                                                                                                                                           | *number*                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                   | Degree of transformation applied to the reference image (0 to 1).                                                                                                                    |