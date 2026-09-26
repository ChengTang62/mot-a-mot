# 2,000 daily core entries

The app now contains **2,100 learning cards**: a daily core of **2,000** and a separately selectable extension of **100**. The original 1,000 cards, their IDs, glosses, examples, order in the exported array, and stored progress are preserved. The 120-card basic deck is a subset of the core. The new 1,100 cards are appended as `fr-1001` through `fr-2100`.

“2,000” counts learning entries (words and useful expressions), not 2,000 strictly distinct dictionary lemmas. Related gender/plural forms are generally grouped on one new card. Conjugations are taught in examples, not added as separate cards. Some existing gender pairs and useful differences in grammatical function remain separate to retain established cards and progress.

## Selection and learning order

- Fill gaps in everyday conversation: modal verbs, common actions, questions, pronouns, negation, location, time and quantity.
- Cover meals and shopping, housing and household objects, clothes and the body, travel, school/work, communication and leisure.
- Preserve 900 original entries in the core. Keep 100 more specialized or formal original entries in the extension (IDs in `lib/vocabulary-metadata.ts`). This is a practical editorial grouping, not an official proficiency classification.
- Prioritize 30 conversational verbs in the core learning queue. Thereafter use available subtitle lemma ranks as a guide; unranked expressions retain stable ID order at the end. An entry with saved progress is skipped by new-word selection, and a mastered entry is excluded from learning and review.
- No assertion that these are the exact 2,000 highest-frequency French words, an official CEFR list, or a measured conversational comprehension threshold. Subtitle dialogue has genre biases; frequency alone would overselect crime/violence, slang and names and underselect useful transactions and food items.

## Frequency reference and attribution

**Lexique 3.83**, by **Boris New and Christophe Pallier**, licensed under **Creative Commons Attribution-ShareAlike 4.0 International**:

- Maintainers' repository and description: <https://github.com/chrplr/openlexicon/blob/master/datasets-info/Lexique383/README-Lexique.md>
- Dataset index: <https://openlexicon.fr/datasets-info/>
- Official repository: <https://github.com/chrplr/openlexicon>
- License: <https://creativecommons.org/licenses/by-sa/4.0/>
- Reference: New, B., Brysbaert, M., Veronis, J., & Pallier, C. (2007). *The use of film subtitles to estimate word frequencies*. Applied Psycholinguistics, 28(4), 661–677. <https://doi.org/10.1017/S014271640707035X>

The Lexique website was unavailable during this update. The full 3.83 tabular data was retrieved on 2026-09-25 from the public text mirror <https://a3nm.net/git/lexique/file/Lexique383.txt.html>, after confirming the dataset identity and license in the maintainers' repository. HTML line-number anchors were removed and entities decoded; no frequency values were invented.

The resulting TSV has 142,694 records. Its SHA-256 is `8f0271473d18e32c27583d44ec9c5c1d656d5f957320a099434e69c63f3313a5`.

`lib/vocabulary-metadata.ts` preserves the selected, derived frequency data under **CC BY-SA 4.0**. Each tuple is `[matched lemma, freqlemfilms2, rank]`: subtitle lemma occurrences per million and a rank over 46,947 unique lemmas. To avoid double-counting repeated inflected rows and homographs, the maximum `freqlemfilms2` for each lemma is used. Ties are ordered by lemma. This rank is derived, not a published Lexique ranking.

Matching lowercases entries, normalizes œ/oe, removes teaching articles, and tries the non-reflexive lemma where appropriate. Grouped forms use an explicit grammatical alias or the highest-frequency matched member, never the sum. Plural nouns use their singular lemmas. For grouped negation cards the matched particle is a frequency proxy, not a measured frequency of the complete construction. Exactly **2,006 cards have a match**; the remaining **94** have no assigned frequency. Multiword expressions are not assigned the frequency of an arbitrary constituent.

All new Chinese glosses and the **2,200 new French/Chinese example pairs** were authored for this app. They were not copied from Lexique. Every one of the total 2,100 entries has two examples. Normal/slow pronunciation uses the existing device French speech synthesis; no recorded audio corpus was scraped.

## Standalone edition

Stable card IDs and learning content are retained. Progress in this edition is stored only in the browser; cloud records from the original hosted application are not included or migrated.

Reproducible checks: `pnpm test`.
