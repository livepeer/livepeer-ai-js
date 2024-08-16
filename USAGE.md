<!-- Start SDK Example Usage [usage] -->
```typescript
import { LivepeerAi } from "livepeer-ai";

const livepeerAi = new LivepeerAi({
    httpBearer: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
    const result = await livepeerAi.textToImage({
        prompt: "<value>",
    });

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->