
import { lexicon } from './index.js';

const byTag = new Map<string, string[]>();
for (const [item, tags] of Object.entries(lexicon)) {
  const tagsA = tags.split('|');
  for (const tag of tagsA) {
    const ary = byTag.get(tag) ?? [];
    if (!ary.includes(item)) {
      ary.push(item);
    }
    byTag.set(tag, ary);
  }
}

let both = 0;
for (const nn of byTag.get('NNP')!) {
  if (byTag.get('NN')!.includes(nn[0].toLowerCase() + nn.slice(1))) {
    both++;
  }
}
console.log(both);