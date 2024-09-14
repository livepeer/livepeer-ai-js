<!-- Start SDK Example Usage [usage] -->
```typescript
import { LivepeerAI } from "@livepeer/ai";

const livepeerAI = new LivepeerAI({
  httpBearer: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await livepeerAI.generate.textToImage({
    prompt: "<value>",
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->