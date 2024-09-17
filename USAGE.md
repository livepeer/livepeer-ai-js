<!-- Start SDK Example Usage [usage] -->
```typescript
import { Livepeer } from "@livepeer/ai";

const livepeer = new Livepeer({
  httpBearer: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await livepeer.generate.textToImage({
    prompt: "<value>",
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->