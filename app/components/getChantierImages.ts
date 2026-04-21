import fs from 'fs';
import path from 'path';

export function getChantierImages(): string[] {
  const base = path.join(process.cwd(), 'public', 'images', 'chantiers');

  if (!fs.existsSync(base)) return [];

  const all = fs.readdirSync(base, { recursive: true }) as string[];
  console.log('📸 fichiers trouvés:', all);

  const exts = ['.jpg', '.jpeg', '.png', '.webp', '.avif'];
  return all
    .filter(f => exts.includes(path.extname(f).toLowerCase()))
    .map(f => `/images/chantiers/${f.replace(/\\/g, '/')}`);
}