function log(m) {
  const prefix = '[metrics]';
  const ts = '[' + (new Date().getTime() / 1000).toString() + ']';
  console.log(prefix + ' ' + ts + ' ' + m);
}

function bw(raw) {
  const kb = 1 * 1000;
  const mb = 1000 * kb;
  return Math.round(raw / mb);
}

function report() {
  const brs = self.events.bitrate;
  const r = {
    bitrate: brs[brs.length - 1].bitrate,
    level: self.hls.currentLevel,
    'bw-est': bw(self.hls.bandwidthEstimate),
    latency: self.hls.latency,
    maxLatency: self.hls.maxLatency,
    targetLatency: self.hls.targetLatency,
    liveSyncPosition: self.hls.liveSyncPosition,
  };
  log(JSON.stringify(r));
}
