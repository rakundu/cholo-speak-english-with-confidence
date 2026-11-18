# Switching on Cholo's AI coach (one-time setup, about 30–40 minutes)

Your mother never has to do any of this. You do it once; after that the coach is simply part of the app on her phone.

The coach has two parts:

| Part | What it does | Service | Cost |
|---|---|---|---|
| **Grammar coach** | Reads what she said, praises what was good, corrects mistakes, explains in English and Bengali | Claude (Anthropic) | Pay per use — a few pence a day at her pace (see step 1) |
| **Pronunciation coach** (optional) | Listens to her voice on "say it" cards, scores each word against British English, gives sound tips | Microsoft Azure Speech | Free tier includes some free audio each month; pay as you go after |

Both are reached through a small "relay" (a Cloudflare Worker) that keeps your secret keys off her phone.

---

## 1. Claude API key (grammar coach)

1. Go to **platform.claude.com** (the Claude Console) and create an account. This is separate from a claude.ai chat account.
2. Add credit under **Billing** (a small amount, e.g. $10, lasts a long time).
3. Under **Billing → Spend limits**, set a monthly limit (e.g. $10) so costs can never surprise you.
4. Go to **Settings → API keys** (platform.claude.com/settings/keys) → **Create key** → name it `cholo-coach` → copy the key (starts with `sk-ant-`). It's shown only once.

**Which model?** The relay uses `claude-sonnet-5-5` by default — best explanations, especially in Bengali (about 1p per check). To spend much less, set `MODEL` to `claude-haiku-5-5` in step 3 (a tiny fraction of a penny per check; explanations a little simpler).

## 2. Azure Speech key (pronunciation coach — optional)

Skip this section if you only want the grammar coach.

1. Go to **portal.azure.com** and create a free Microsoft Azure account.
2. **Create a resource** → search **Speech** (Azure AI Speech) → Create.
3. Choose: Region **UK South**, Pricing tier **Free F0**, any name (e.g. `cholo-speech`).
4. When it's ready, open it → **Keys and Endpoint** → copy **Key 1** and note the **Location/Region** (e.g. `uksouth`).

## 3. The relay (Cloudflare Worker, free)

1. Go to **dash.cloudflare.com** and create a free account.
2. **Workers & Pages → Create → Create Worker**. Name it `cholo-coach` → **Deploy**.
3. Click **Edit code**, delete everything, paste the whole of `worker.js` (in this folder) → **Deploy**.
4. Go to the worker's **Settings → Variables and Secrets** and add:

| Name | Type | Value |
|---|---|---|
| `ANTHROPIC_API_KEY` | Secret | your Claude key from step 1 |
| `APP_TOKEN` | Secret | make up a long random password, e.g. `cholo-7f3k9q-2xLw-81mz` |
| `ALLOWED_ORIGINS` | Text | your app's address, e.g. `https://rakundu.github.io` (no slash at the end) |
| `MODEL` | Text (optional) | `claude-haiku-5-5` if you want the cheaper model |
| `AZURE_SPEECH_KEY` | Secret (optional) | Key 1 from step 2 |
| `AZURE_SPEECH_REGION` | Text (optional) | e.g. `uksouth` |

5. Save and deploy. Copy the worker's address, e.g. `https://cholo-coach.yourname.workers.dev`.

## 4. Tell the app where the coach is

Open `config.js` in the app folder and fill in the two values:

```js
window.CHOLO_COACH = { url: "https://cholo-coach.yourname.workers.dev", token: "cholo-7f3k9q-2xLw-81mz" };
```

Upload the app folder to GitHub Pages as usual. On her phone, open the app once with internet on.

## 5. Check it works

In the app: **⚙️ Settings → 🤖 AI coach → Test the connection**. You should see
`Connected ✓ · Grammar coach: on ✓ · Pronunciation: on ✓`.

## Good to know

- **No internet?** The app quietly falls back to its built-in checker, so practice never stops.
- **Privacy:** when the coach is on, her spoken answers (as text) go to Anthropic, and on "say it" cards her voice recording goes to Microsoft for scoring. The relay itself stores nothing.
- **Safety of the key:** the real keys live only in Cloudflare. The app only knows the relay address and the token, and the relay only answers requests from your app's address.
- **Costs:** check usage any time in the Claude Console and Azure portal. The spend limit from step 1 caps the Claude side.
