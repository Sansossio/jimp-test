import Jimp from 'jimp'
import { join } from 'path'

const OUTPUT_PATH = join(__dirname, '..', 'output', 'resize.png')
const IMAGE = join(__dirname, '..', 'image.png')

;(async () => {
  const baseImage = await Jimp.read(IMAGE)
  baseImage.resize(100, 100)
  baseImage.write(OUTPUT_PATH)
})()
