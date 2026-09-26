import { advancedEntries } from "./advanced-words";
import { expandedEntries } from "./expanded-words";
import { examplesByFrench, type Example } from "./examples";
import { dailyWords } from "./daily-words";
import { memoryHints, type MemoryHint } from "./memory-hints";
export type Word = { id: string; french: string; meaning: string; kind: string; category: string; example: string; translation: string; examples: Example[]; memoryHint: MemoryHint; level: "basic" | "intermediate" };
type WordEntry = Omit<Word, "examples" | "memoryHint"> & { examples?: Example[] };
// Original beginner vocabulary and example sentences; articles teach noun gender.
const entries = `bonjour|你好；日间问候|表达|日常表达|Bonjour, madame !|您好，女士！
merci|谢谢|表达|日常表达|Merci pour votre aide.|谢谢您的帮助。
bonsoir|晚上好|表达|日常表达|Bonsoir, monsieur !|晚上好，先生！
au revoir|再见|表达|日常表达|Au revoir et bonne journée !|再见，祝您今天愉快！
s'il vous plaît|请（礼貌用语）|表达|日常表达|Un café, s'il vous plaît.|请给我一杯咖啡。
pardon|抱歉；劳驾|表达|日常表达|Pardon, où est la gare ?|劳驾，火车站在哪里？
oui|是；好的|表达|日常表达|Oui, je comprends.|是的，我明白。
non|不；不是|表达|日常表达|Non, merci.|不了，谢谢。
à bientôt|回头见；不久再见|表达|日常表达|À bientôt, les amis !|朋友们，回头见！
bienvenue|欢迎|表达|日常表达|Bienvenue à Paris !|欢迎来到巴黎！
d'accord|同意；没问题|表达|日常表达|D'accord, on part demain.|好的，我们明天出发。
bonne nuit|晚安|表达|日常表达|Bonne nuit, à demain !|晚安，明天见！
une personne|一个人|阴性名词|人与关系|C'est une personne gentille.|这是一个友善的人。
une famille|家庭|阴性名词|人与关系|Ma famille habite ici.|我的家人住在这里。
une mère|母亲|阴性名词|人与关系|Ma mère parle français.|我妈妈说法语。
un père|父亲|阳性名词|人与关系|Mon père aime lire.|我爸爸喜欢阅读。
une sœur|姐妹|阴性名词|人与关系|Ma sœur est étudiante.|我的姐妹是学生。
un frère|兄弟|阳性名词|人与关系|Mon frère est à la maison.|我的兄弟在家。
un enfant|孩子|阳性名词|人与关系|Cet enfant aime jouer.|这个孩子喜欢玩。
un ami|男性朋友|阳性名词|人与关系|Paul est un ami.|保罗是一位朋友。
une amie|女性朋友|阴性名词|人与关系|Marie est une amie.|玛丽是一位朋友。
un voisin|男邻居|阳性名词|人与关系|Mon voisin est sympathique.|我的邻居很友好。
une femme|女人；妻子|阴性名词|人与关系|Cette femme est médecin.|这位女士是医生。
un homme|男人|阳性名词|人与关系|Un homme attend le bus.|一位男士在等公交车。
une maison|房子|阴性名词|家中物品|La maison est grande.|这栋房子很大。
une chambre|卧室；客房|阴性名词|家中物品|Ma chambre est calme.|我的卧室很安静。
une porte|门|阴性名词|家中物品|La porte est ouverte.|门开着。
une fenêtre|窗户|阴性名词|家中物品|Ouvre la fenêtre, s'il te plaît.|请打开窗户。
une table|桌子|阴性名词|家中物品|Le livre est sur la table.|书在桌子上。
une chaise|椅子|阴性名词|家中物品|Cette chaise est confortable.|这把椅子很舒服。
un lit|床|阳性名词|家中物品|Le chat est sur le lit.|猫在床上。
une clé|钥匙|阴性名词|家中物品|Où est ma clé ?|我的钥匙在哪里？
un livre|书|阳性名词|家中物品|Je lis un livre.|我在读一本书。
un téléphone|电话；手机|阳性名词|家中物品|Mon téléphone est ici.|我的手机在这里。
une lampe|灯|阴性名词|家中物品|La lampe est allumée.|灯亮着。
un ordinateur|电脑|阳性名词|家中物品|Je travaille sur mon ordinateur.|我在电脑上工作。
de l'eau|水|阴性名词|吃与喝|Je voudrais de l'eau.|我想要一些水。
du pain|面包|阳性名词|吃与喝|J'achète du pain.|我买面包。
un café|咖啡；一杯咖啡|阳性名词|吃与喝|Je prends un café.|我要一杯咖啡。
du thé|茶|阳性名词|吃与喝|Tu veux du thé ?|你想喝茶吗？
du lait|牛奶|阳性名词|吃与喝|Il reste du lait.|还剩一些牛奶。
une pomme|苹果|阴性名词|吃与喝|Je mange une pomme.|我吃一个苹果。
du fromage|奶酪|阳性名词|吃与喝|J'aime le fromage.|我喜欢奶酪。
un œuf|鸡蛋|阳性名词|吃与喝|Je voudrais un œuf.|我想要一个鸡蛋。
du riz|米；米饭|阳性名词|吃与喝|Nous mangeons du riz.|我们吃米饭。
du poisson|鱼；鱼肉|阳性名词|吃与喝|Elle prépare du poisson.|她在做鱼。
du poulet|鸡肉|阳性名词|吃与喝|Je prends du poulet.|我要鸡肉。
une soupe|汤|阴性名词|吃与喝|La soupe est chaude.|汤是热的。
une ville|城市|阴性名词|城市生活|Paris est une grande ville.|巴黎是一座大城市。
une rue|街道|阴性名词|城市生活|Cette rue est calme.|这条街很安静。
un magasin|商店|阳性名词|城市生活|Le magasin ouvre à neuf heures.|商店九点开门。
une école|学校|阴性名词|城市生活|L'école est près d'ici.|学校离这里很近。
une gare|火车站|阴性名词|城市生活|Je vais à la gare.|我去火车站。
un restaurant|餐馆|阳性名词|城市生活|Ce restaurant est ouvert.|这家餐馆开着。
un hôtel|酒店|阳性名词|城市生活|Nous cherchons un hôtel.|我们在找酒店。
une pharmacie|药房|阴性名词|城市生活|Il y a une pharmacie ici.|这里有一家药房。
un parc|公园|阳性名词|城市生活|Les enfants jouent au parc.|孩子们在公园里玩。
un musée|博物馆|阳性名词|城市生活|Le musée est fermé.|博物馆关门了。
une boulangerie|面包店|阴性名词|城市生活|J'entre dans la boulangerie.|我走进面包店。
une banque|银行|阴性名词|城市生活|La banque est à gauche.|银行在左边。
aujourd'hui|今天|副词|时间|Aujourd'hui, il fait beau.|今天天气很好。
demain|明天|副词|时间|Je pars demain.|我明天出发。
hier|昨天|副词|时间|Hier, j'étais à Paris.|昨天我在巴黎。
maintenant|现在|副词|时间|On part maintenant.|我们现在出发。
toujours|总是；一直|副词|时间|Elle est toujours à l'heure.|她总是准时。
jamais|从不（常与 ne 连用）|副词|时间|Je ne bois jamais de café.|我从不喝咖啡。
un jour|一天；白天|阳性名词|时间|Je reste un jour.|我待一天。
une semaine|一周|阴性名词|时间|Je reste une semaine.|我待一周。
un mois|一个月|阳性名词|时间|Il travaille ici depuis un mois.|他在这里工作一个月了。
une année|一年|阴性名词|时间|Une année a douze mois.|一年有十二个月。
le matin|早晨；上午|阳性名词|时间|Je lis le matin.|我上午读书。
le soir|傍晚；晚上|阳性名词|时间|Je cuisine le soir.|我晚上做饭。
être|是；处于|动词|常用动作|Je suis étudiant.|我是学生。
avoir|有；拥有|动词|常用动作|J'ai un vélo.|我有一辆自行车。
aller|去|动词|常用动作|Je vais au marché.|我去市场。
venir|来|动词|常用动作|Tu viens avec nous ?|你和我们一起来吗？
faire|做|动词|常用动作|Je fais un gâteau.|我做一个蛋糕。
dire|说；告诉|动词|常用动作|Elle dit bonjour.|她说你好。
parler|说话；讲某种语言|动词|常用动作|Je parle français.|我说法语。
écouter|听；倾听|动词|常用动作|J'écoute de la musique.|我听音乐。
regarder|看；观看|动词|常用动作|Je regarde un film.|我看一部电影。
lire|阅读|动词|常用动作|Elle lit un livre.|她在读一本书。
écrire|写|动词|常用动作|J'écris une lettre.|我写一封信。
manger|吃|动词|常用动作|Nous mangeons ensemble.|我们一起吃饭。
boire|喝|动词|常用动作|Je bois de l'eau.|我喝水。
dormir|睡觉|动词|常用动作|Le bébé dort.|宝宝睡着了。
travailler|工作|动词|常用动作|Je travaille à la maison.|我在家工作。
apprendre|学习；学会|动词|常用动作|J'apprends le français.|我在学法语。
comprendre|理解；明白|动词|常用动作|Je comprends la question.|我理解这个问题。
acheter|买|动词|常用动作|J'achète des fruits.|我买水果。
chercher|寻找|动词|常用动作|Je cherche mes clés.|我在找我的钥匙。
trouver|找到；发现|动词|常用动作|Je trouve mon téléphone.|我找到我的手机。
ouvrir|打开|动词|常用动作|J'ouvre la porte.|我打开门。
fermer|关闭|动词|常用动作|Elle ferme la fenêtre.|她关上窗户。
aimer|喜欢；爱|动词|常用动作|J'aime la musique.|我喜欢音乐。
attendre|等待|动词|常用动作|J'attends le train.|我在等火车。
grand|大的；高的|形容词|描述事物|Le jardin est grand.|花园很大。
petit|小的；矮的|形容词|描述事物|Le sac est petit.|包很小。
chaud|热的|形容词|描述事物|Le café est chaud.|咖啡是热的。
froid|冷的|形容词|描述事物|Le lait est froid.|牛奶是冷的。
nouveau|新的|形容词|描述事物|J'ai un nouveau livre.|我有一本新书。
vieux|老的；旧的|形容词|描述事物|Ce vélo est vieux.|这辆自行车很旧。
facile|容易的|形容词|描述事物|Cet exercice est facile.|这道练习很容易。
difficile|困难的|形容词|描述事物|Ce mot est difficile.|这个词很难。
rapide|快的|形容词|描述事物|Ce train est rapide.|这列火车很快。
lent|慢的|形容词|描述事物|Ce bus est lent.|这辆公交车很慢。
heureux|幸福的；高兴的|形容词|描述事物|Je suis heureux de te voir.|见到你我很高兴。
fatigué|疲倦的|形容词|描述事物|Je suis fatigué.|我累了。
un train|火车|阳性名词|出行|Le train arrive.|火车到了。
un avion|飞机|阳性名词|出行|L'avion part à midi.|飞机中午起飞。
un bus|公共汽车|阳性名词|出行|Je prends le bus.|我坐公交车。
une voiture|汽车|阴性名词|出行|La voiture est rouge.|这辆车是红色的。
un vélo|自行车|阳性名词|出行|Je vais à l'école à vélo.|我骑自行车去学校。
un billet|票；车票|阳性名词|出行|Je voudrais un billet pour Lyon.|我想要一张去里昂的票。
un passeport|护照|阳性名词|出行|Voici mon passeport.|这是我的护照。
une valise|行李箱|阴性名词|出行|Ma valise est lourde.|我的行李箱很重。
un voyage|旅行|阳性名词|出行|Bon voyage !|旅途愉快！
une adresse|地址|阴性名词|出行|Quelle est votre adresse ?|您的地址是什么？
une carte|地图；卡片|阴性名词|出行|Je regarde la carte.|我在看地图。
un aéroport|机场|阳性名词|出行|L'aéroport est loin.|机场很远。`;
const basicWords: WordEntry[] = entries.split("\n").map((line, index) => {
  const [french, meaning, kind, category, example, translation] = line.split("|");
  return { id: `fr-${String(index + 1).padStart(3,"0")}`, french, meaning, kind, category, example, translation, level: "basic" };
});
const wordEntries: WordEntry[] = [...basicWords, ...advancedEntries.split("\n").map((line,index):WordEntry=>{
  const [french,meaning,kind,category]=line.split("|");
  return {id:`fr-${String(index+121).padStart(3,"0")}`,french,meaning,kind,category,example:"",translation:"",level:"intermediate"};
}), ...expandedEntries.split("\n").map((line,index):WordEntry=>{
  const [french,meaning,kind,category]=line.split("|");
  return {id:`fr-${String(index+361).padStart(3,"0")}`,french,meaning,kind,category,example:"",translation:"",level:"intermediate"};
}), ...dailyWords];
export const words: Word[] = wordEntries.map(word => {
  const examples = word.examples ?? [
    ...(word.example ? [{ french: word.example, translation: word.translation }] : []),
    ...examplesByFrench[word.french],
  ];
  return { ...word, example: examples[0].french, translation: examples[0].translation, examples, memoryHint: memoryHints[word.id] };
});
export const wordById: Record<string, Word> = Object.fromEntries(words.map(w=>[w.id,w]));
