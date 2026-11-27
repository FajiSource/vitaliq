// Sample readings, taken from the Vitaliq design board. The values match the phone
// app's src/data/sample.ts so the wrist and the phone never disagree. Replace with
// live data from the band once the sensor APIs are wired in.
export default {
  readiness: { score: 78, note: 'Recovered well. Fine for a hard session.' },
  sleep: {
    total: '7h 12m',
    window: '00:36 – 07:48 · +38m vs avg',
    deep: '1h 34m',
    rem: '1h 48m',
    // How much bed and wake times move night to night.
    consistency: '±48m drift',
    // height in px, kind: deep | rem | light
    bars: [
      { h: 62, k: 'deep' }, { h: 46, k: 'light' }, { h: 54, k: 'rem' }, { h: 62, k: 'deep' },
      { h: 46, k: 'light' }, { h: 12, k: 'light' }, { h: 24, k: 'light' }, { h: 38, k: 'light' },
      { h: 54, k: 'rem' }, { h: 62, k: 'deep' }, { h: 46, k: 'light' }, { h: 14, k: 'light' },
      { h: 38, k: 'light' }, { h: 24, k: 'rem' }
    ]
  },
  heart: {
    bpm: 73,
    hrv: '64 ms',
    resting: '58 bpm',
    trace: [70, 69, 71, 70, 72, 70, 73, 75, 72, 74, 71, 73, 76, 74, 73]
  },
  // The two overnight readings the first build left out.
  body: {
    respiratory: '14.2 br/min',
    respiratoryNote: 'Normal for you',
    temperature: '-0.1 °C',
    temperatureNote: 'From your overnight normal'
  },
  activity: { steps: 6420, goal: 8000, active: '1h 35m' },
  // Several readings drifting from their personal normal at once. One reading moving is
  // noise; five moving together over three days is the finding worth a buzz on the wrist.
  pattern: {
    window: 'LAST 3 DAYS',
    title: 'Five readings moved together',
    changes: [
      { label: 'Resting HR', change: '+9 bpm' },
      { label: 'HRV', change: '-16%' },
      { label: 'Sleep', change: '-22%' }
    ],
    more: 'and 2 more · see the app'
  },
  // Shown wherever the watch interprets a reading rather than just showing it.
  safety: {
    short: 'Not a medical reading',
    long: 'Explains changes from your normal. Does not diagnose.'
  }
}
