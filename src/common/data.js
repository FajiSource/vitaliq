// Sample readings, taken from the Vitaliq design board. Replace with
// live data from the band once the sensor APIs are wired in.
export default {
  readiness: { score: 78, note: 'Recovered well. Fine for a hard session.' },
  sleep: {
    total: '7h 12m',
    window: '00:36 – 07:48 · +38m vs avg',
    deep: '1h 34m',
    rem: '1h 48m',
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
  activity: { steps: 6420, goal: 8000, active: '1h 35m' },
  stress: { text: 'Heart rate raised for 14 min without movement.' }
}
