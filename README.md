# hey, at least

hey everyone this is YOUUUUR daily dose of... motivation?
not sure.

check it out yourself: [hey-atleast.pages.dev](https://hey-atleast.pages.dev/)

here's some screenshots
<img width="1163" height="677" alt="image" src="https://github.com/user-attachments/assets/82dfb506-632e-4962-8438-666d351c79cb" />
<img width="1145" height="694" alt="image" src="https://github.com/user-attachments/assets/9f553459-9d00-4b36-afd3-e52c2d5593d0" />
<img width="1184" height="688" alt="image" src="https://github.com/user-attachments/assets/5ef6aa32-9bcb-4623-a08f-3791715a5591" />



# what

this was a shower-thought "oh yeah what-if" website. 

not necessarily a project, more of a demonstration and experimentation of deploying Cloudflare Pages and Cloudflare Workers.

and maybe getting feet wetter with React.

certainly not CSS though, the CSS is still bad and i'm too dumb to comprehend fixing it, leave alone fix it.

# how to run

this project is basically a vite app (root) and a cloudflare worker (`/worker`)

## 1. install dependencies

for the vite app, root directory
```bash
pnpm install
```

for the worker
```bash
cd worker
pnpm install
```

## 2. configure secrets

in the worker folder, create a `.env` with
```bash
GEMINI_API_KEY=your_api_key_here
```

if deploying to cloudflare worker, set the secret with
```bash
npx wrangler secret put GEMINI_API_KEY
```
and follow the appropriate instruction.

## 3. run the worker locally

from the `worker` directory,
```bash
pnpm run dev
```
this should start the worker, likely on `127.0.0.1:8787`. take note of this, for updating in the frontend

## 4. updating API URL in the frontend

in the root `App.jsx`, find the `fetch` call
```js
const res = await fetch("https://hey-atleast-worker.bhushanwho.workers.dev/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({})
      })
```

replace the URL with either
- your local worker URL (from earlier)
- your deployed worker URL

## 5. run the frontend

```bash
pnpm run dev
```

this will start the vite app.

further, cloudflare pages deployment was done through the repo itself.
