import Jimp from 'jimp'
import { join } from 'path'

const OUTPUT_PATH = join(__dirname, '..', 'output', 'text.png')
const IMAGE = join(__dirname, '..', 'image.png')

;(async () => {
  const font = await Jimp.loadFont(Jimp.FONT_SANS_10_BLACK)
  const baseImage = await Jimp.read(IMAGE)
  baseImage.print(font, 0, 0, 'TOP TEXT')
  baseImage.print(font, 0, 0, {
    text: 'Middle center',
    alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER,
    alignmentY: Jimp.VERTICAL_ALIGN_MIDDLE
  }, baseImage.bitmap.width, baseImage.bitmap.height)
  await baseImage.writeAsync(OUTPUT_PATH)
})()
