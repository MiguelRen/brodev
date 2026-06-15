import fs from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
import sharp from 'sharp';
import ffmpegPath from 'ffmpeg-static';
import { execFile } from 'child_process';
import { promisify } from 'util';

const execFileAsync = promisify(execFile);

const PROJECT_ROOT = process.cwd();
const ASSETS_IMG_DIR = path.join(PROJECT_ROOT, 'app', 'assets', 'images');
const PUBLIC_IMG_DIR = path.join(PROJECT_ROOT, 'public', 'images');

async function ensureDir(dir) {
  try {
    await fs.mkdir(dir, { recursive: true });
  } catch (err) {
    // Ignore
  }
}
async function optimizePNG(srcPath, destPaths, maxWidth = null) {
  console.log(`Optimizing PNG: ${path.basename(srcPath)}...`);
  if (!existsSync(srcPath)) {
    console.warn(`File not found: ${srcPath}`);
    return;
  }

  const fileBuffer = await fs.readFile(srcPath);
  let pipeline = sharp(fileBuffer);
  if (maxWidth) {
    pipeline = pipeline.resize({
      width: maxWidth,
      height: maxWidth,
      fit: 'inside',
      withoutEnlargement: true
    });
  }

  // Use pngquant-like palette reduction for maximum size reduction
  const buffer = await pipeline
    .png({ quality: 80, compressionLevel: 9, palette: true })
    .toBuffer();

  for (const destPath of destPaths) {
    await ensureDir(path.dirname(destPath));
    await fs.writeFile(destPath, buffer);
    const stats = await fs.stat(destPath);
    console.log(`  Saved to ${destPath.replace(PROJECT_ROOT, '')} (${(stats.size / 1024).toFixed(1)} KB)`);
  }
}

async function optimizeJPG(srcPath, destPaths, maxWidth = null) {
  console.log(`Optimizing JPG: ${path.basename(srcPath)}...`);
  if (!existsSync(srcPath)) {
    console.warn(`File not found: ${srcPath}`);
    return;
  }

  const fileBuffer = await fs.readFile(srcPath);
  let pipeline = sharp(fileBuffer);
  if (maxWidth) {
    pipeline = pipeline.resize({
      width: maxWidth,
      height: maxWidth,
      fit: 'inside',
      withoutEnlargement: true
    });
  }

  const buffer = await pipeline
    .jpeg({ quality: 80, mozjpeg: true })
    .toBuffer();

  for (const destPath of destPaths) {
    await ensureDir(path.dirname(destPath));
    await fs.writeFile(destPath, buffer);
    const stats = await fs.stat(destPath);
    console.log(`  Saved to ${destPath.replace(PROJECT_ROOT, '')} (${(stats.size / 1024).toFixed(1)} KB)`);
  }
}
async function optimizeVideo(srcPath, destPaths) {
  console.log(`Optimizing Video: ${path.basename(srcPath)} using ffmpeg...`);
  if (!existsSync(srcPath)) {
    console.warn(`File not found: ${srcPath}`);
    return;
  }

  const tempOut = path.join(PROJECT_ROOT, 'temp_opt_video.mp4');

  // ffmpeg options:
  // -y: overwrite output
  // -vf scale=-2:720: scale to 720p height, even width (divisible by 2)
  // -vcodec libx264: H.264 video codec
  // -crf 28: quality factor (higher is lower size, 23 is default, 28 is great for web backgrounds)
  // -preset fast: compression speed/efficiency trade-off
  // -an: remove audio (background video does not need audio, saves lots of space)
  const args = [
    '-y',
    '-i', srcPath,
    '-vf', 'scale=-2:720',
    '-vcodec', 'libx264',
    '-crf', '28',
    '-preset', 'fast',
    '-an',
    tempOut
  ];

  try {
    console.log(`Running ffmpeg command...`);
    await execFileAsync(ffmpegPath, args);
    console.log(`ffmpeg optimization completed.`);

    const tempStats = await fs.stat(tempOut);
    console.log(`Optimized video size: ${(tempStats.size / (1024 * 1024)).toFixed(2)} MB`);

    for (const destPath of destPaths) {
      await ensureDir(path.dirname(destPath));
      await fs.copyFile(tempOut, destPath);
      console.log(`  Saved to ${destPath.replace(PROJECT_ROOT, '')}`);
    }

    // Clean up temp file
    await fs.unlink(tempOut);
  } catch (err) {
    console.error('Error optimizing video with ffmpeg:', err);
  }
}

async function main() {
  console.log('--- STARTING MEDIA OPTIMIZATION ---');

  // 1. Optimize Luis Profile Image (7.4 MB -> target 800px max, compressed PNG)
  const luisSrc = path.join(ASSETS_IMG_DIR, 'luis-traje-fondo-naranja.png');
  const luisDests = [
    path.join(ASSETS_IMG_DIR, 'luis-traje-fondo-naranja.png'),
    path.join(PUBLIC_IMG_DIR, 'luis-traje-fondo-naranja.png')
  ];
  await optimizePNG(luisSrc, luisDests, 800);

  // 2. Optimize Plus Logo No Background (46 KB -> compressed in-place)
  const logoSrc = path.join(ASSETS_IMG_DIR, 'plus_logo_no_background.png');
  const logoDests = [
    path.join(ASSETS_IMG_DIR, 'plus_logo_no_background.png'),
    path.join(PUBLIC_IMG_DIR, 'plus_logo_no_background.png')
  ];
  await optimizePNG(logoSrc, logoDests);

  // 3. Optimize Background JPG (652 KB -> target 1920px max, compressed JPG)
  const bgSrc = path.join(ASSETS_IMG_DIR, 'xp-background.jpg');
  const bgDests = [
    path.join(ASSETS_IMG_DIR, 'xp-background.jpg')
  ];
  await optimizeJPG(bgSrc, bgDests, 1920);

  // 4. Optimize Background Video (93 MB -> target 720p, no audio, CRF 28)
  const videoSrc = path.join(ASSETS_IMG_DIR, 'IMG_1114.MP4');
  const videoDests = [
    path.join(ASSETS_IMG_DIR, 'IMG_1114.MP4'),
    path.join(PUBLIC_IMG_DIR, 'IMG_1114.MP4')
  ];
  await optimizeVideo(videoSrc, videoDests);

  console.log('--- MEDIA OPTIMIZATION COMPLETED ---');
}

main().catch(err => {
  console.error('Unhandled error in optimization script:', err);
});
