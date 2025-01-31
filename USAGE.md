<!-- Start SDK Example Usage [usage] -->
```typescript
import { Livepeer } from "@livepeer/ai";

const livepeer = new Livepeer({
  httpBearer: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await livepeer.generate.textToImage({
    modelId: "",
    loras: "",
    prompt: "<value>",
    height: 576,
    width: 1024,
    guidanceScale: 7.5,
    negativePrompt: "",
    safetyCheck: true,
    numInferenceSteps: 50,
    numImagesPerPrompt: 1,
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->