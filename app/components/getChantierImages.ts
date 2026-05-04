import fs from 'fs';
import path from 'path';

export function getChantierImages(): string[] {
  const base = path.join(process.cwd(), 'public', 'images', 'chantiers');

  if (!fs.existsSync(base)) return [];

  const all = fs.readdirSync(base, { recursive: true }) as string[];

  const exts = ['.jpg', '.jpeg', '.png', '.webp', '.avif'];
  return all
    .filter(f => exts.includes(path.extname(f).toLowerCase()))
    .filter(f => !/_hero\.(jpg|jpeg|png)$/i.test(f))
    .map(f => `/images/chantiers/${f.replace(/\\/g, '/')}`);
}