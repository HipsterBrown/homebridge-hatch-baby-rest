export const enum RestCommand {
  SetPower = 'SI',
  SetColor = 'SC',
  SetTrackNumber = 'SN',
  SetVolume = 'SV'
}

export const enum AudioTrack {
  None = 0,
  Stream = 2,
  PinkNoise = 3,
  Dryer = 4,
  Ocean = 5,
  Wind = 6,
  Rain = 7,
  Bird = 9,
  Crickets = 10,
  Brahms = 11,
  Twinkle = 13,
  RockABye = 14
}

export interface Color {
  r: number
  g: number
  b: number
  a: number
}

export type RestCommandValue = number | Color

function zeroPaddedHex(value: number) {
  let hex = value.toString(16)

  while (hex.length < 2) {
    hex = '0' + hex
  }

  return hex.toUpperCase()
}

export function formatRestCommand(
  command: RestCommand,
  value: RestCommandValue
) {
  if (typeof value === 'number') {
    return Buffer.from(`${command}${zeroPaddedHex(value)}`)
  }

  return Buffer.from(
    `${command}${zeroPaddedHex(value.r)}${zeroPaddedHex(
      value.g
    )}${zeroPaddedHex(value.b)}${zeroPaddedHex(value.a)}`
  )
}
