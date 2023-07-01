//To identify colors in an image using Node.js
//first download
//npm install node-vibrant sharp

const Vibrant = require('node-vibrant');
const sharp = require('sharp');

// Path to the input image
const imagePath = 'path/to/your/image.jpg';

// Resize image for faster processing (optional)
const resizedImagePath = 'path/to/resized/image.jpg';
const resizeWidth = 500;

// Resize the image
sharp(imagePath)
  .resize(resizeWidth)
  .toFile(resizedImagePath, (err) => {
    if (err) {
      console.error('Error resizing image:', err);
      return;
    }

    // Create a Vibrant object with the resized image
    Vibrant.from(resizedImagePath)
      .getPalette()
      .then((palette) => {
        const { Vibrant, Muted, DarkVibrant, DarkMuted, LightVibrant, LightMuted } = palette;

        // Retrieve the colors
        const colors = {
          Vibrant: Vibrant.getHex(),
          Muted: Muted.getHex(),
          DarkVibrant: DarkVibrant.getHex(),
          DarkMuted: DarkMuted.getHex(),
          LightVibrant: LightVibrant.getHex(),
          LightMuted: LightMuted.getHex(),
        };

        console.log('Dominant Colors:');
        console.log(colors);
      })
      .catch((err) => {
        console.error('Error processing image palette:', err);
      });
  });
