function log(message, tee) {
  const prefix = '[metrics]';
  const ts = '[' + (new Date().getTime() / 1000).toString() + ']';
  const newMessage = prefix + ' ' + ts + ' ' + message;

  console.log(newMessage);
  if (tee != null) {
    tee(newMessage);
  }
}

function bw(raw) {
  const kb = 1 * 1000;
  // const mb = 1000 * kb;
  return (raw / kb).toFixed(2);
}

function report(tee) {
  const brs = self.events.bitrate;
  const r = {
    bitrate: brs[brs.length - 1].bitrate,
    level: self.hls.currentLevel,
    latency: self.hls.latency,
    maxLatency: self.hls.maxLatency,
    targetLatency: self.hls.targetLatency,
    liveSyncPosition: self.hls.liveSyncPosition,
    'bw-est': bw(self.hls.bandwidthEstimate),
  };
  log(JSON.stringify(r), tee);
}
