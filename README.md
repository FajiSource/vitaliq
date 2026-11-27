# vitaliq

Vitaliq on the wrist: a Xiaomi Vela quick app with six faces — Readiness, Sleep,
Heart, Body, Activity and the multi-metric Pattern alert. The readings are sample
data in `src/common/data.js`, kept in step with the phone app's
`src/data/sample.ts`.

## Scope: this is a demonstration, not a shipped feature

Vitaliq ships as a phone app on iOS and Android, reading whatever watch a student
already owns through HealthKit or Health Connect. This build exists to show the
pattern alert on a wrist. It is deliberately not on the roadmap, because it cannot
work for every student:

- **An iPhone cannot install an `.rpk`.** There is no sideload or store path, so
  the wrist experience would be Android-only.
- **`system.interconnect`, the watch-to-phone channel, pairs with an _Android_
  app.** It needs a shared package name and signing certificate, and Xiaomi has to
  authorise the pairing.
- **Device support is narrow.** `system.fetch` works on Watch S1 Pro, S3, S4, S5
  and Redmi Watch 5 and 6, but not on Band 8 Pro, Band 9, 9 Pro, Band 10 or Redmi
  Watch 4. Some global firmware never exposes third-party apps at all.

The package name matches the phone app (`com.fajimobile.vitaliqapp`) so the
interconnect route stays open if that decision is ever revisited. The `.rpk` is
still signed with the toolkit's bundled debug key, which would have to change
first.

## Layout

Six swipe pages in `src/pages/index/index.ux`, in the same order as the phone
app's watch preview. The screen is 480px tall and the page dots take 44px, so
every page has to fit inside 436px.

## Run

```
npm install
npm run start   # build and install on a connected watch or Vela emulator
npm run build   # build the .rpk only
```
