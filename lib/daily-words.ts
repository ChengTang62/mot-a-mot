// Original Chinese glosses and bilingual examples; selection informed by Lexique 3.
// Append only: row positions map to fr-1001 onward. See docs/vocabulary-sources.md.
import type { Example } from "./examples";
const blocks: { category: string; rows: string }[] = [
{ category: "常用动作与需求", rows: `pouvoir|能够；可以|v|Je peux venir demain.|我明天能来。|Pouvez-vous m'aider ?|您能帮我吗？
vouloir|想要；愿意|v|Je veux un verre d'eau.|我想要一杯水。|Tu veux venir avec nous ?|你想和我们一起来吗？
devoir|必须；欠|v|Je dois partir maintenant.|我现在必须走了。|Je te dois dix euros.|我欠你十欧元。
falloir|需要；必须（无人称）|v|Il faut réserver une table.|需要预订座位。|Il me faut un stylo.|我需要一支笔。
prendre|拿；乘坐；吃喝|v|Je prends le métro.|我坐地铁。|Prenez une chaise.|请拿一把椅子。
mettre|放；穿上|v|Mets ton sac ici.|把包放在这里。|Je mets mon manteau.|我穿上大衣。
donner|给；给予|v|Donne-moi ton numéro.|把你的号码给我。|Elle donne un cours de français.|她教一节法语课。
voir|看见；见面|v|Je vois la mer.|我看见大海。|On se voit demain ?|我们明天见吗？
entendre|听见|v|J'entends de la musique.|我听到音乐声。|Tu m'entends bien ?|你能听清我说话吗？
demander|询问；请求|v|Je demande le prix.|我询问价格。|Elle demande de l'aide.|她请求帮助。
appeler|打电话给；称呼|v|Je t'appelle ce soir.|我今晚给你打电话。|Comment s'appelle votre fils ?|您的儿子叫什么名字？
arriver|到达；发生|v|J'arrive dans cinq minutes.|我五分钟后到。|Qu'est-ce qui arrive ?|发生什么了？
passer|经过；度过|v|Je passe devant la gare.|我经过火车站前面。|Nous passons un bon moment.|我们度过一段愉快的时光。
laisser|留下；让|v|Laisse la porte ouverte.|让门开着。|Je laisse un message.|我留一条消息。
suivre|跟随；听懂|v|Suivez-moi, s'il vous plaît.|请跟我来。|Je n'arrive pas à suivre.|我跟不上了。
sortir|出去；拿出来|v|Nous sortons après le dîner.|我们晚饭后出去。|Je sors les clés de mon sac.|我从包里拿出钥匙。
rentrer|回家；返回里面|v|Je rentre à la maison.|我回家。|Il faut rentrer avant la nuit.|需要在天黑前回来。
entrer|进入|v|Vous pouvez entrer.|您可以进来。|J'entre dans le magasin.|我走进商店。
vivre|生活；活着|v|Je vis au Canada.|我住在加拿大。|Elle aime vivre près de la mer.|她喜欢住在海边。
sentir|闻到；感到|v|Je sens une odeur de café.|我闻到咖啡的气味。|Tu te sens mieux ?|你感觉好些了吗？
essayer|尝试；试穿|v|Je vais essayer encore.|我要再试一次。|Je peux essayer cette veste ?|我能试穿这件夹克吗？
changer|改变；更换|v|Je veux changer de place.|我想换个位子。|Le temps change vite.|天气变化很快。
payer|付款；支付|v|Je peux payer par carte ?|我能刷卡吗？|Je paie le café.|这杯咖啡我来付钱。
marcher|走路；运转|v|Nous marchons jusqu'au parc.|我们步行到公园。|Mon téléphone ne marche plus.|我的手机不能用了。
garder|保留；看管|v|Garde le reçu.|留好收据。|Elle garde les enfants ce soir.|她今晚照看孩子们。
montrer|展示；指给看|v|Montre-moi le chemin.|给我指一下路。|Je vous montre ma réservation.|我给您看我的预订。
porter|穿戴；携带|v|Elle porte une robe bleue.|她穿着一条蓝裙子。|Je peux porter ce sac.|我能提这个包。
servir|供应；起作用|v|On sert le dîner à sept heures.|晚饭七点供应。|À quoi sert ce bouton ?|这个按钮有什么用？
retrouver|找回；与……重逢|v|J'ai retrouvé mes clés.|我找回钥匙了。|Nous retrouvons des amis au café.|我们在咖啡馆与朋友会面。
finir|完成；结束|v|Je finis à six heures.|我六点结束工作。|Finis ton exercice.|做完你的练习。
jouer|玩；演奏|v|Les enfants jouent dehors.|孩子们在外面玩。|Elle joue du piano.|她弹钢琴。
s'asseoir|坐下|v|Asseyez-vous ici.|请坐这里。|Je m'assieds près de la fenêtre.|我在窗边坐下。
se lever|起床；站起来|v|Je me lève à huit heures.|我八点起床。|Tout le monde se lève.|大家都站起来。
se coucher|上床睡觉|v|Je me couche tôt ce soir.|我今晚早点睡。|Les enfants se couchent à neuf heures.|孩子们九点上床睡觉。
se réveiller|醒来|v|Je me réveille avant le réveil.|闹钟响之前我就醒了。|Elle se réveille doucement.|她慢慢醒来。
se laver|洗澡；洗自己身体|v|Je me lave les mains.|我洗手。|Il se lave avant de sortir.|他出门前洗漱。
s'habiller|穿衣服|v|Je m'habille rapidement.|我迅速穿好衣服。|Habille-toi, nous partons.|穿好衣服，我们要走了。
se promener|散步；闲逛|v|Nous nous promenons au bord du lac.|我们在湖边散步。|J'aime me promener le soir.|我喜欢晚上散步。
se dépêcher|赶快；抓紧|v|Dépêche-toi, le bus arrive.|快点，公交车来了。|Nous devons nous dépêcher.|我们得抓紧了。
se préparer|准备好|v|Je me prépare pour le travail.|我准备去上班。|Elle se prépare à partir.|她准备出发。
se tromper|弄错|v|Je me suis trompé de rue.|我走错街道了。|Tu te trompes de numéro.|你拨错号码了。
s'excuser|道歉|v|Je m'excuse pour le retard.|我为迟到道歉。|Il s'excuse auprès de sa voisine.|他向女邻居道歉。
se passer|发生；进行|v|Que se passe-t-il ?|发生什么了？|Tout se passe bien.|一切进展顺利。
se trouver|位于；在某处|v|Où se trouve la gare ?|车站在哪里？|Le magasin se trouve près d'ici.|商店就在这附近。
se sentir|感觉自己……|v|Je me sens bien ici.|我在这里感觉很好。|Elle se sent un peu fatiguée.|她觉得有点累。
se brosser|刷（自己的牙、头发等）|v|Je me brosse les dents.|我刷牙。|Elle se brosse les cheveux.|她梳头发。
se rencontrer|相遇；见面|v|Nous nous rencontrons demain.|我们明天见面。|Ils se sont rencontrés à l'école.|他们在学校相识。
se marier|结婚|v|Ils se marient en juin.|他们六月结婚。|Elle veut se marier ici.|她想在这里结婚。
se séparer|分开；分手|v|Nous nous séparons à la gare.|我们在车站分别。|Ils ont décidé de se séparer.|他们决定分手。
se baigner|游泳；泡澡|v|Nous nous baignons dans le lac.|我们在湖里游泳。|Elle aime se baigner en été.|她喜欢夏天游泳。` },
{ category: "日常动作", rows: `monter|上去；登上|v|Je monte dans le bus.|我上公交车。|Nous montons l'escalier.|我们上楼梯。
descendre|下来；下车|v|Je descends ici.|我在这里下车。|Descends doucement.|慢慢下来。
tomber|掉落；跌倒|v|Mon téléphone est tombé.|我的手机掉了。|La pluie tombe.|雨在下。
courir|跑步|v|Je cours dans le parc.|我在公园跑步。|Il court vers le bus.|他跑向公交车。
nager|游泳|v|Tu sais nager ?|你会游泳吗？|Je nage chaque samedi.|我每周六游泳。
conduire|驾驶；带领|v|Je conduis rarement.|我很少开车。|Elle conduit prudemment.|她开车很谨慎。
voler|飞；偷|v|Un oiseau vole au-dessus du lac.|一只鸟飞过湖面。|On a volé mon vélo.|我的自行车被偷了。
voyager|旅行|v|J'aime voyager en train.|我喜欢坐火车旅行。|Elle voyage seule.|她独自旅行。
visiter|参观；游览|v|Nous visitons le musée.|我们参观博物馆。|Je veux visiter cette ville.|我想游览这座城市。
tourner|转弯；转动|v|Tourne à droite.|向右转。|La roue tourne.|轮子在转。
traverser|穿过；横穿|v|Nous traversons la rue.|我们过马路。|Ce pont traverse la rivière.|这座桥横跨河流。
avancer|前进；推进|v|Avance un peu.|往前一点。|Le travail avance bien.|工作进展顺利。
reculer|后退|v|Recule de deux pas.|往后退两步。|La voiture recule lentement.|汽车缓缓倒退。
glisser|滑动；滑倒|v|Le sac glisse de la chaise.|包从椅子上滑落。|Attention, ça glisse !|小心，很滑！
sauter|跳；跳过|v|L'enfant saute de joie.|孩子高兴得跳起来。|Ne saute pas cette étape.|不要跳过这一步。
danser|跳舞|v|Tu veux danser ?|你想跳舞吗？|Ils dansent ensemble.|他们一起跳舞。
chanter|唱歌|v|Elle chante très bien.|她唱得很好。|Nous chantons une chanson.|我们唱一首歌。
rire|笑|v|Cette histoire me fait rire.|这个故事逗我笑。|Nous rions beaucoup ensemble.|我们在一起经常笑。
sourire|微笑|v|Elle me sourit.|她对我微笑。|Souris pour la photo.|拍照时笑一笑。
pleurer|哭|v|Le bébé pleure.|宝宝在哭。|Je pleure de joie.|我高兴得哭了。
crier|喊叫|v|Ne crie pas si fort.|别喊得这么大声。|Il crie mon nom.|他喊我的名字。
respirer|呼吸|v|Respire doucement.|慢慢呼吸。|Je respire l'air frais.|我呼吸新鲜空气。
tousser|咳嗽|v|Je tousse depuis hier.|我从昨天开始咳嗽。|Il tousse un peu.|他有点咳嗽。
éternuer|打喷嚏|v|Elle éternue souvent.|她经常打喷嚏。|La poussière me fait éternuer.|灰尘让我打喷嚏。
fumer|吸烟；冒烟|v|Je ne fume pas.|我不吸烟。|Il est interdit de fumer ici.|这里禁止吸烟。
boiter|跛行；一瘸一拐地走|v|Il boite un peu.|他走路有点跛。|Elle boite depuis sa chute.|她摔倒后走路一瘸一拐。
naître|出生|v|Je suis né en hiver.|我在冬天出生。|Le bébé vient de naître.|宝宝刚出生。
grandir|长大；增大|v|Les enfants grandissent vite.|孩子们长得很快。|J'ai grandi dans cette ville.|我在这座城市长大。
vieillir|变老；变旧|v|Nous vieillissons tous.|我们都会变老。|Ce meuble vieillit bien.|这件家具用久了依然很好。
mourir|死亡|v|Cette plante va mourir.|这株植物快死了。|Son grand-père est mort l'an dernier.|他的爷爷去年去世了。
allumer|打开（灯、电器）；点燃|v|Allume la lumière.|打开灯。|J'allume une bougie.|我点燃一支蜡烛。
éteindre|关闭（灯、电器）；熄灭|v|Éteins la télévision.|关掉电视。|J'éteins la lampe.|我关灯。
brancher|接上电源；连接|v|Je branche mon téléphone.|我给手机接上电源。|Branche le câble ici.|把电线接到这里。
débrancher|拔掉插头；断开连接|v|Je débranche la lampe.|我拔掉灯的插头。|Débranche ce câble.|拔下这根电线。
charger|充电；装载|v|Je charge mon téléphone.|我给手机充电。|Nous chargeons la voiture.|我们往车里装东西。
télécharger|下载|v|Je télécharge le document.|我下载文件。|Tu peux télécharger cette application.|你可以下载这个应用。
cliquer|点击|v|Clique sur ce bouton.|点击这个按钮。|Je clique sur le lien.|我点击链接。
imprimer|打印；印刷|v|Je dois imprimer ce billet.|我得打印这张票。|Elle imprime deux copies.|她打印两份。
scanner|扫描|v|Scanne ce code.|扫描这个码。|Je scanne le document.|我扫描文件。
enregistrer|保存；录制；登记|v|J'enregistre le fichier.|我保存文件。|Elle enregistre sa voix.|她录下自己的声音。
copier|复制；抄写|v|Copie cette adresse.|复制这个地址。|Je copie la phrase.|我抄写这句话。
sélectionner|选择；选中|v|Sélectionne une date.|选一个日期。|Je sélectionne ce fichier.|我选中这个文件。
photographier|拍照|v|Je photographie le paysage.|我拍摄风景。|Elle photographie ses amis.|她给朋友们拍照。
filmer|拍摄视频|v|Je filme la fête.|我拍摄聚会视频。|On ne peut pas filmer ici.|这里不能拍摄视频。
sonner|响铃|v|Le téléphone sonne.|电话响了。|Sonne à la porte.|按一下门铃。
vibrer|振动|v|Mon téléphone vibre.|我的手机在振动。|La fenêtre vibre avec le vent.|窗户随风振动。
fonctionner|运转；起作用|v|La machine fonctionne.|机器在运转。|Cette méthode fonctionne bien.|这个方法很管用。
utiliser|使用|v|Tu peux utiliser mon ordinateur.|你可以用我的电脑。|Comment utiliser cette machine ?|这台机器怎么用？
appuyer|按；支撑|v|Appuie sur le bouton.|按这个按钮。|Il appuie sa main sur la table.|他把手撑在桌上。
taper|敲打；打字|v|Je tape mon mot de passe.|我输入密码。|Il tape à la porte.|他敲门。` },
{ category: "交往与行动", rows: `plaire|使喜欢；合意|v|Ce livre me plaît.|我喜欢这本书。|Ça te plaît ?|你喜欢吗？
emmener|带某人去|v|Je t'emmène à la gare.|我带你去车站。|Elle emmène son fils au parc.|她带儿子去公园。
amener|带来；领来|v|Amène un ami.|带个朋友来。|Je vous amène les enfants.|我把孩子们带来给您。
toucher|触摸；触动|v|Ne touche pas ce verre.|别碰这个杯子。|Ton message me touche.|你的消息让我感动。
importer|要紧；进口|v|Peu importe le prix.|价格不重要。|Ce magasin importe du thé.|这家店进口茶叶。
valoir|价值为；值得|v|Ce livre vaut dix euros.|这本书值十欧元。|Ça vaut le coup.|这值得一试。
suffire|足够|v|Une heure suffit.|一小时足够。|Ça suffit pour aujourd'hui.|今天这样就够了。
bouger|移动；活动|v|Ne bouge pas.|别动。|J'ai besoin de bouger.|我需要活动一下。
vendre|出售|v|Il vend sa voiture.|他卖掉自己的车。|On vend du pain ici.|这里卖面包。
cacher|藏起；隐瞒|v|Je cache le cadeau.|我把礼物藏起来。|Il cache son inquiétude.|他掩饰自己的担忧。
agir|行动；产生作用|v|Il faut agir maintenant.|现在必须行动。|Elle agit avec prudence.|她行事谨慎。
adorer|非常喜欢；热爱|v|J'adore ce dessert.|我特别喜欢这道甜点。|Elle adore danser.|她很爱跳舞。
jeter|扔；丢弃|v|Ne jette pas ce papier.|别扔这张纸。|Je jette les déchets.|我扔垃圾。
promettre|承诺|v|Je promets de venir.|我答应会来。|Il promet d'être à l'heure.|他保证准时。
mentir|撒谎|v|Je ne veux pas mentir.|我不想撒谎。|Il ment sur son âge.|他谎报自己的年龄。
offrir|赠送；提供|v|Je lui offre des fleurs.|我送她花。|Le café est offert.|咖啡是赠送的。
enlever|脱下；移走|v|Enlève tes chaussures.|脱掉鞋子。|Je veux enlever cette tache.|我想去掉这块污渍。
lâcher|松开；放手|v|Lâche ma main.|松开我的手。|Ne lâche pas ton sac.|别松开你的包。
calmer|使平静|v|Cette musique me calme.|这首音乐让我平静。|Il calme son chien.|他安抚自己的狗。
disparaître|消失|v|Le soleil disparaît.|太阳消失了。|Mes clés ont disparu.|我的钥匙不见了。
casser|打破；弄坏|v|J'ai cassé un verre.|我打碎了一个杯子。|La machine est cassée.|机器坏了。
frapper|敲；打|v|Frappe avant d'entrer.|进来之前先敲门。|La pluie frappe la vitre.|雨打在玻璃上。
ignorer|不知道；不理会|v|J'ignore son adresse.|我不知道他的地址。|Elle ignore mon message.|她不理我的消息。
se taire|不说话；安静下来|v|Il se tait enfin.|他终于不说话了。|Je préfère me taire.|我宁愿不说。
ressembler|像；相似|v|Tu ressembles à ta mère.|你长得像你妈妈。|Ces maisons se ressemblent.|这些房子很相似。
remettre|放回；交给；推迟|v|Remets le livre à sa place.|把书放回原处。|Nous remettons la sortie à demain.|我们把出游推迟到明天。
s'amuser|玩得开心|v|Amuse-toi bien !|玩得开心！|Les enfants s'amusent dehors.|孩子们在外面玩得很开心。
intéresser|使感兴趣|v|Ce sujet m'intéresse.|我对这个主题感兴趣。|Le cinéma l'intéresse beaucoup.|他对电影很感兴趣。
embrasser|亲吻；拥抱|v|Elle embrasse sa fille.|她亲吻女儿。|Je t'embrasse.|亲亲你。
exister|存在|v|Cette rue existe encore.|这条街仍然存在。|Une solution doit exister.|应该存在解决办法。
prévenir|提前通知；预防|v|Préviens-moi avant de venir.|来之前告诉我。|Il faut prévenir les accidents.|需要预防事故。
habiter|居住|v|J'habite près d'ici.|我住在这附近。|Où habitez-vous ?|您住在哪里？
déranger|打扰；妨碍|v|Je vous dérange ?|我打扰您了吗？|Le bruit me dérange.|噪声让我不舒服。
rêver|做梦；梦想|v|Je rêve de voyager.|我梦想去旅行。|J'ai rêvé de toi.|我梦见了你。
paraître|显得；出版|v|Elle paraît contente.|她看起来很开心。|Le journal paraît chaque matin.|这份报纸每天早晨出版。
approcher|靠近；临近|v|Le bus approche.|公交车快到了。|Les vacances approchent.|假期快到了。
craindre|担心；害怕|v|Je crains le froid.|我怕冷。|Elle craint de se tromper.|她担心弄错。
arranger|安排妥当；使方便|v|Cette heure m'arrange.|这个时间对我方便。|Nous allons arranger ça.|我们会处理好这件事。
attraper|抓住；赶上；染上|v|Attrape la balle.|接住球。|J'ai attrapé un rhume.|我感冒了。
abandonner|放弃；遗弃|v|Je refuse d'abandonner.|我不愿放弃。|Il abandonne son projet.|他放弃自己的计划。
brûler|燃烧；烫伤|v|Le bois brûle.|木头在燃烧。|Attention, ça brûle !|小心，很烫！
assurer|确保；为……投保|v|Je vous assure que ça marche.|我向您保证，这管用。|Il assure sa voiture.|他给汽车投保。
traiter|处理；对待|v|Nous traitons votre demande.|我们处理您的申请。|Elle me traite avec respect.|她尊重我。
risquer|冒险；可能发生|v|Tu risques d'être en retard.|你可能会迟到。|Je ne veux pas risquer ma place.|我不想拿自己的职位冒险。
répéter|重复；排练|v|Pouvez-vous répéter ?|您能重复一遍吗？|Je répète cette phrase.|我重复这句话。
signer|签字|v|Signez ici.|请在这里签字。|Je signe le document.|我在文件上签字。
obliger|强迫；迫使|v|La pluie nous oblige à rentrer.|下雨迫使我们回去。|Personne ne t'oblige à venir.|没人强迫你来。
oser|敢于|v|Je n'ose pas demander.|我不敢问。|Ose essayer !|勇敢试试！
plaisanter|开玩笑|v|Je plaisante.|我开玩笑的。|Tu plaisantes ou quoi ?|你是在开玩笑吗？
supporter|忍受；承受|v|Je supporte mal la chaleur.|我很受不了炎热。|Cette étagère supporte des livres lourds.|这个架子能承受沉重的书。` },
{ category: "办事与生活", rows: `régler|调节；结清；解决|v|Je règle la température.|我调整温度。|Je voudrais régler la facture.|我想结账。
surveiller|留意；看管|v|Surveille la casserole.|看着点锅。|Elle surveille les enfants.|她看管孩子们。
recommencer|重新开始|v|On peut recommencer.|我们可以重新来。|Je recommence l'exercice.|我重做练习。
coûter|花费（金钱）|v|Combien ça coûte ?|这个多少钱？|Le billet coûte vingt euros.|车票二十欧元。
rater|错过；没做好|v|J'ai raté le bus.|我没赶上公交车。|Ne rate pas ce film.|别错过这部电影。
tenter|尝试；吸引|v|Je vais tenter ma chance.|我打算试试运气。|Ce dessert me tente.|这道甜点让我想尝尝。
fatiguer|使疲劳|v|Le voyage me fatigue.|旅行让我疲惫。|Ne te fatigue pas trop.|别太累了。
douter|怀疑|v|Je doute de sa réponse.|我怀疑他的回答。|Elle doute encore.|她仍在犹豫怀疑。
récupérer|取回；恢复|v|Je récupère mon colis.|我取回包裹。|Il récupère après le voyage.|他旅行后恢复体力。
durer|持续|v|Le cours dure une heure.|课持续一小时。|Ça va durer longtemps ?|这会持续很久吗？
deviner|猜出|v|Devine qui vient !|猜猜谁要来！|Je devine la réponse.|我猜出了答案。
retenir|记住；留住|v|Je retiens mieux avec des exemples.|有例句我记得更牢。|Je ne veux pas te retenir.|我不想耽误你。
réaliser|实现；意识到|v|Elle réalise son rêve.|她实现自己的梦想。|Je réalise mon erreur.|我意识到自己的错误。
étudier|学习；研究|v|J'étudie le français.|我学习法语。|Elle étudie ce problème.|她研究这个问题。
engager|雇用；开始|v|Le magasin engage un vendeur.|商店雇用一名售货员。|Il engage la conversation.|他开始交谈。
cesser|停止|v|La pluie a cessé.|雨停了。|Il ne cesse de parler.|他不停地说话。
signifier|意思是；意味着|v|Que signifie ce mot ?|这个词是什么意思？|Ce geste signifie oui.|这个手势表示同意。
pleuvoir|下雨|v|Il pleut aujourd'hui.|今天下雨。|Il va pleuvoir demain.|明天要下雨。
neiger|下雪|v|Il neige ce matin.|今天早上下雪。|Il neige rarement ici.|这里很少下雪。
traîner|拖着；磨蹭；散放|v|Ne traîne pas, on part.|别磨蹭，我们要走了。|Tes chaussures traînent dans l'entrée.|你的鞋子散放在门口。
diriger|管理；指引|v|Elle dirige une équipe.|她管理一个团队。|Il nous dirige vers la sortie.|他指引我们去出口。
interdire|禁止|v|On interdit de fumer ici.|这里禁止吸烟。|Ce panneau interdit le passage.|这个标志禁止通行。
commander|点餐；订购|v|Je voudrais commander.|我想点餐。|Elle commande un livre.|她订购一本书。
rouler|行驶；滚动|v|La voiture roule lentement.|汽车缓缓行驶。|La balle roule sous la table.|球滚到桌子下面。
contrôler|检查；控制|v|On contrôle les billets.|工作人员检查车票。|Il contrôle la température.|他控制温度。
téléphoner|打电话|v|Je téléphone à ma mère.|我给妈妈打电话。|Tu peux téléphoner demain.|你可以明天打电话。
renvoyer|寄回；送回|v|Je renvoie ce colis.|我寄回这个包裹。|Peux-tu me renvoyer le message ?|你能把消息重新发给我吗？
repartir|再次出发；返回离开|v|Nous repartons demain.|我们明天再次出发。|Le bus repart.|公交车又开走了。
refaire|重做|v|Je dois refaire cet exercice.|我得重做这道练习。|On refait la cuisine.|我们重新装修厨房。
gêner|妨碍；使不舒服|v|Cette chaise gêne le passage.|这把椅子挡路。|Ça vous gêne si j'ouvre ?|我打开窗户会影响您吗？
rapporter|带回；转述|v|Rapporte du pain.|带些面包回来。|Elle rapporte ce qu'elle a entendu.|她转述听到的话。
inventer|发明；编造|v|Il invente une histoire.|他编一个故事。|Elle invente un nouveau jeu.|她发明一种新游戏。
énerver|使烦躁|v|Ce bruit m'énerve.|这个噪声让我烦躁。|Ne t'énerve pas.|别生气。
étonner|使惊讶|v|Ta réponse m'étonne.|你的回答让我惊讶。|Ça ne m'étonne pas.|我对此并不意外。
déposer|放下；提交；送到|v|Je dépose mon dossier.|我提交材料。|Elle me dépose à la gare.|她送我到车站。
nourrir|喂养|v|Je nourris le chat.|我喂猫。|Il faut nourrir les poissons.|需要喂鱼。
accrocher|挂上；钩住|v|Accroche ton manteau ici.|把外套挂在这里。|Le sac s'accroche à la poignée.|包钩住了门把手。
serrer|握紧；拧紧|v|Il me serre la main.|他与我握手。|Serre bien le couvercle.|把盖子拧紧。
soigner|治疗；照顾|v|Elle soigne les animaux.|她照顾动物。|Le médecin soigne sa blessure.|医生处理他的伤口。
guérir|康复；治好|v|Sa blessure guérit.|他的伤口在愈合。|Elle espère guérir vite.|她希望快点康复。
attacher|系上；拴住|v|Attache ta ceinture.|系好安全带。|J'attache mes cheveux.|我扎起头发。
joindre|联系上；附上|v|Comment puis-je vous joindre ?|我怎么联系您？|Je joins une photo.|我附上一张照片。
apparaître|出现|v|Un message apparaît.|一条消息出现了。|Le soleil apparaît enfin.|太阳终于出来了。
marquer|标记；留下印记|v|Marque la date.|标记一下日期。|Cette rencontre m'a marqué.|这次相遇给我留下深刻印象。
ramasser|捡起；收集|v|Ramasse ton stylo.|捡起你的笔。|Nous ramassons les feuilles.|我们收集落叶。
dépasser|超过；超车|v|Le prix dépasse mon budget.|价格超出我的预算。|Cette voiture nous dépasse.|这辆车超过我们。
goûter|品尝|v|Goûte cette soupe.|尝尝这份汤。|Je voudrais goûter ce fromage.|我想尝尝这种奶酪。
réunir|聚集；召集|v|Nous réunissons toute la famille.|我们把全家聚在一起。|Elle réunit les documents.|她收集材料。
confier|托付；吐露|v|Je te confie mes clés.|我把钥匙托付给你。|Elle me confie un secret.|她向我吐露一个秘密。
contacter|联系|v|Contactez la réception.|请联系前台。|Je vais contacter le vendeur.|我要联系卖家。` },
{ category: "代词与限定词", rows: `je|我（主语）|pro|Je suis ici.|我在这里。|Je parle français.|我说法语。
tu|你（主语）|pro|Tu viens demain ?|你明天来吗？|Tu as raison.|你说得对。
il / elle|他；她；它（主语）|pro|Il travaille ici.|他在这里工作。|Elle aime lire.|她喜欢阅读。
nous|我们|pro|Nous sommes prêts.|我们准备好了。|Venez avec nous.|和我们一起来吧。
vous|您；你们|pro|Vous habitez ici ?|您住在这里吗？|Je vous remercie.|我感谢您。
ils / elles|他们；她们（主语）|pro|Ils sont en vacances.|他们在度假。|Elles arrivent demain.|她们明天到。
on|人们；我们（口语）|pro|On y va ?|我们走吗？|On mange à midi.|我们中午吃饭。
moi|我（重读形式）|pro|C'est pour moi.|这是给我的。|Viens chez moi.|来我家吧。
toi|你（重读形式）|pro|Je pense à toi.|我在想你。|C'est à toi.|轮到你了。
lui|他（重读）；给他或她|pro|Je lui téléphone.|我给他打电话。|Je pars avec lui.|我和他一起走。
eux|他们（重读形式）|pro|Je viens avec eux.|我和他们一起来。|C'est pour eux.|这是给他们的。
me / te / se|我／你／自己（非重读宾语）|pro|Tu me connais ?|你认识我吗？|Elle se lave.|她在洗澡。
le / la / les|定冠词；他／她／它们（直接宾语）|det|Le bus arrive.|公交车来了。|Je les connais.|我认识他们。
un / une / des|一个；一些（不定冠词）|det|J'ai une question.|我有一个问题。|Il achète des pommes.|他买了一些苹果。
du / de la / de l'|一些（不可数事物的部分冠词）|det|Je bois du lait.|我喝牛奶。|Il reste de l'eau.|还剩一些水。
mon / ma / mes|我的（所有格）|det|Voici mon sac.|这是我的包。|Mes clés sont ici.|我的钥匙在这里。
ton / ta / tes|你的（所有格）|det|Où est ton vélo ?|你的自行车在哪里？|Prends tes affaires.|拿上你的东西。
son / sa / ses|他或她的（所有格）|det|Son frère est gentil.|他或她的兄弟很友善。|Elle cherche ses lunettes.|她在找自己的眼镜。
notre / nos|我们的（所有格）|det|Voici notre maison.|这是我们的房子。|Nos amis arrivent.|我们的朋友来了。
votre / vos|您的；你们的（所有格）|det|Votre table est prête.|您的餐桌准备好了。|Voici vos billets.|这是您的票。
leur / leurs|他们的（所有格）；给他们|det|Leur fille est ici.|他们的女儿在这里。|Je leur écris.|我给他们写信。
ce / cet / cette / ces|这；这些（指示限定词）|det|Cette place est libre.|这个座位空着。|J'aime ces chaussures.|我喜欢这些鞋子。
ceci|这个（指示代词）|pro|Ceci est important.|这很重要。|Regardez ceci.|请看这个。
cela / ça|那个；这件事|pro|Ça va bien.|一切都好。|Cela coûte cher.|那个很贵。
celui / celle / ceux / celles|那个；那些（替代名词）|pro|Je préfère celui-ci.|我更喜欢这个。|Prends celle de gauche.|拿左边那个。
quel / quelle / quels / quelles|什么；哪一个（限定名词）|det|Quel jour sommes-nous ?|今天星期几？|Quelle taille faites-vous ?|您穿什么尺码？
quelqu'un|某人；有人|pro|Quelqu'un est là ?|有人在吗？|J'attends quelqu'un.|我在等一个人。
quelque chose|某事；某个东西|pro|Tu veux quelque chose ?|你想要点什么吗？|J'ai quelque chose à dire.|我有话要说。
chacun / chacune|每个人；每一个|pro|Chacun paie sa part.|每个人付自己的那份。|Prenez un livre chacun.|你们每人拿一本书。
chaque|每个（后接单数名词）|det|Je marche chaque jour.|我每天走路。|Chaque chambre a une douche.|每个房间都有淋浴。
tout / toute / tous / toutes|所有的；一切|det|Tout va bien.|一切都好。|Tous les magasins sont fermés.|所有商店都关门了。
plusieurs|好几个；多个|det|J'ai plusieurs questions.|我有好几个问题。|Il reste plusieurs places.|还剩好几个座位。
quelques|几个；一些（数量不多）|det|Attendez quelques minutes.|请等几分钟。|J'ai quelques amis ici.|我在这里有几个朋友。
aucun / aucune|没有一个；任何一个都不|det|Je n'ai aucune idée.|我一点头绪也没有。|Aucun bus ne passe ici.|没有公交车经过这里。
autre|其他的；另一个|det|Un autre café ?|再来一杯咖啡吗？|Prenons une autre route.|我们走另一条路吧。
même|相同的；甚至|adj|Nous avons le même âge.|我们同岁。|Même Paul est venu.|连保罗都来了。
n'importe qui|无论谁；随便什么人|pro|N'importe qui peut participer.|任何人都可以参加。|Ne le donne pas à n'importe qui.|别把它随便给人。
n'importe quoi|无论什么；胡说八道|pro|Il mange n'importe quoi.|他什么都吃。|Tu dis n'importe quoi.|你在胡说。
personne|没有人（否定代词）|pro|Personne ne répond.|没有人回答。|Je ne connais personne.|我谁也不认识。
rien|没有什么；什么也没有|pro|Je ne vois rien.|我什么也没看见。|Rien ne manque.|什么都不缺。
y|在那里；代指 à 引出的事物|pro|J'y vais demain.|我明天去那里。|J'y pense souvent.|我经常想到这件事。
en|代指 de 引出的内容或数量|pro|J'en veux deux.|我想要两个。|Tu en parles souvent.|你经常谈起这件事。
dont|关系代词：其；关于它的|pro|Voici le livre dont je parle.|这是我说的那本书。|C'est le sac dont j'ai besoin.|这是我需要的包。
qui|谁；作主语的关系代词|pro|Qui vient ce soir ?|今晚谁来？|C'est Paul qui conduit.|是保罗开车。
que|什么；作宾语的关系代词；引导从句|pro|Que voulez-vous ?|您想要什么？|Le film que j'aime est français.|我喜欢的那部电影是法国电影。
quoi|什么（介词后或口语问句中）|pro|Tu fais quoi ?|你在做什么？|De quoi as-tu besoin ?|你需要什么？
lequel / laquelle|哪一个（疑问代词）|pro|Lequel préfères-tu ?|你更喜欢哪一个？|Laquelle est à toi ?|哪一个是你的？
soi|自己（泛指的重读代词）|pro|Il faut croire en soi.|要相信自己。|Chacun rentre chez soi.|大家各自回家。
le mien / la mienne|我的那个（物主代词）|pro|Ce sac est le mien.|这个包是我的。|Ta chambre est plus grande que la mienne.|你的房间比我的大。
le tien / la tienne|你的那个（物主代词）|pro|Ce vélo est le tien ?|这辆自行车是你的吗？|Ma clé est ici, où est la tienne ?|我的钥匙在这，你的呢？` },
{ category: "连接与位置", rows: `à|在；到；向（介词）|prep|Je vais à Paris.|我去巴黎。|Le cours commence à neuf heures.|课九点开始。
de|的；从；关于（介词）|prep|Je viens de Chine.|我来自中国。|C'est le sac de Marie.|这是玛丽的包。
en tant que|作为；以……身份|prep|Je parle en tant que client.|我以顾客身份发言。|Elle travaille en tant que guide.|她担任导游。
dans|在……里面；过……以后|prep|Les clés sont dans le sac.|钥匙在包里。|Je reviens dans dix minutes.|我十分钟后回来。
sur|在……上面；关于|prep|Le livre est sur la table.|书在桌子上。|C'est un livre sur Paris.|这是一本关于巴黎的书。
sous|在……下面|prep|Le chat est sous le lit.|猫在床底下。|Attends sous cet arbre.|在那棵树下等吧。
avec|和……一起；用……|prep|Je viens avec toi.|我和你一起来。|On mange avec une fourchette.|我们用叉子吃饭。
sans|没有；不带|prep|Un café sans sucre.|一杯不加糖的咖啡。|Il est parti sans moi.|他没带我就走了。
pour|为了；给；对……来说|prep|C'est pour vous.|这是给您的。|Je suis ici pour travailler.|我来这里工作。
par|通过；经过；由|prep|Envoyez-le par courrier.|请通过邮件寄出。|Nous passons par Lyon.|我们经过里昂。
chez|在某人家；在某处营业场所|prep|Je suis chez moi.|我在自己家。|Elle va chez le médecin.|她去看医生。
entre|在两者或多者之间|prep|La banque est entre deux magasins.|银行在两家商店之间。|Garde cela entre nous.|这件事只有我们知道。
devant|在……前面|prep|Attends devant la gare.|在车站前面等。|Il marche devant moi.|他走在我前面。
derrière|在……后面|prep|Le jardin est derrière la maison.|花园在房子后面。|Regarde derrière toi.|看看你的身后。
avant|在……之前|prep|Viens avant midi.|中午之前来吧。|Lave-toi les mains avant de manger.|吃饭前洗手。
après|在……之后|prep|On se voit après le cours.|我们下课后见。|Tournez après le pont.|过桥后转弯。
depuis|自从；从……以来|prep|J'habite ici depuis un an.|我在这里住了一年了。|Il pleut depuis ce matin.|从今天早晨起一直在下雨。
pendant|在……期间；持续……|prep|J'ai dormi pendant le voyage.|我在旅途中睡了觉。|Attendez pendant dix minutes.|请等十分钟。
jusqu'à|直到；一直到|prep|Je travaille jusqu'à six heures.|我工作到六点。|Ce bus va jusqu'à la gare.|这辆车一直到车站。
dès|从……起；一到……就|prep|Appelez dès demain.|明天一早就打电话吧。|Le café ouvre dès sept heures.|咖啡馆七点就开门。
vers|朝……方向；大约在……时|prep|Je rentre vers huit heures.|我大约八点回家。|Marchez vers la gare.|朝车站走。
contre|靠着；反对|prep|Le vélo est contre le mur.|自行车靠在墙上。|Je suis contre cette idée.|我反对这个想法。
selon|根据；按照|prep|Selon la météo, il va pleuvoir.|根据天气预报，要下雨了。|Le prix change selon la saison.|价格随季节变化。
parmi|在……之中|prep|Tu es parmi les premiers.|你是最早的一批。|Choisissez parmi ces modèles.|请在这些款式中选择。
autour de|围绕；在……周围|prep|Ils sont autour de la table.|他们围坐在桌边。|Marchons autour du lac.|我们绕湖走走吧。
près de|在……附近；接近|prep|J'habite près de la gare.|我住在车站附近。|Il a près de soixante ans.|他快六十岁了。
loin de|远离；离……远|prep|La plage est loin d'ici.|海滩离这里很远。|Reste loin du bord.|离边缘远一点。
à côté de|在……旁边|prep|Assieds-toi à côté de moi.|坐在我旁边。|La pharmacie est à côté du café.|药房在咖啡馆旁边。
en face de|在……正对面|prep|L'hôtel est en face de la gare.|酒店在车站对面。|Il est assis en face de moi.|他坐在我对面。
au milieu de|在……中间|prep|La table est au milieu de la pièce.|桌子在房间中央。|Il s'arrête au milieu de la rue.|他停在路中间。
au-dessus de|在……上方|prep|La lampe est au-dessus de la table.|灯在桌子上方。|Nous volons au-dessus des nuages.|我们在云层上方飞行。
au-dessous de|在……下方；低于|prep|Le prix est au-dessous de cent euros.|价格低于一百欧元。|L'appartement au-dessous du mien est vide.|我楼下的公寓空着。
hors de|在……之外；超出|prep|Gardez cela hors de portée des enfants.|把它放在儿童够不到的地方。|C'est hors de mon budget.|这超出我的预算。
et|和；并且|conj|Du pain et du fromage.|面包和奶酪。|Elle chante et danse.|她唱歌又跳舞。
ou|或者（选择）|conj|Thé ou café ?|茶还是咖啡？|On part lundi ou mardi.|我们星期一或星期二走。
mais|但是|conj|C'est joli mais cher.|这很好看，但是很贵。|Je veux venir, mais je travaille.|我想来，但我要工作。
car|因为（解释原因）|conj|Je rentre car je suis fatigué.|我回家，因为我累了。|Il reste car il pleut.|他留下来，因为在下雨。
parce que|因为（引出原因）|conj|Je marche parce que le bus est plein.|我步行，因为公交车满了。|Elle sourit parce qu'elle est contente.|她笑了，因为她很高兴。
puisque|既然；因为已知的事实|conj|Puisque tu es là, entre.|既然来了，就进来吧。|Restons ici puisque tu es fatigué.|既然你累了，我们就待在这里吧。
si|如果；是否；肯定否定问句|conj|Si tu veux, on part.|如果你愿意，我们就走。|Je demande si elle vient.|我问她是否会来。
sinon|否则；要不然|conj|Dépêche-toi, sinon tu seras en retard.|快一点，否则你会迟到。|On marche, sinon on prend le bus.|我们步行，要不就坐公交车。
quand|何时；当……时|adv|Quand pars-tu ?|你什么时候走？|Appelle quand tu arrives.|你到了就打电话。
lorsque|当……的时候|conj|Lorsque je cuisine, j'écoute la radio.|我做饭时听广播。|Fermez la porte lorsque vous partez.|离开时请关门。
comment|怎样；如何|adv|Comment allez-vous ?|您好吗？|Comment ça marche ?|这个怎么用？
pourquoi|为什么|adv|Pourquoi tu ris ?|你为什么笑？|Pourquoi est-ce fermé ?|为什么关门了？
où|哪里；在……的地方|adv|Où sont les toilettes ?|洗手间在哪里？|Voici la ville où j'habite.|这是我居住的城市。
combien|多少|adv|Combien ça coûte ?|这个多少钱？|Combien de personnes viennent ?|有多少人来？
ni|也不；既不……也不……|conj|Je ne bois ni thé ni café.|我既不喝茶，也不喝咖啡。|Il n'a ni frère ni sœur.|他没有兄弟姐妹。
soit… soit…|要么……要么……|conj|On part soit lundi, soit mardi.|我们要么星期一走，要么星期二走。|Choisis soit le bus, soit le métro.|在公交车和地铁中选一个。
afin que|为了让……；以便……|conj|Je parle lentement afin que tu comprennes.|我说慢一点，好让你明白。|Écris-le afin que je m'en souvienne.|写下来，好让我记住。` },
{ category: "日常副词", rows: `ne… pas|不；没有（基本否定）|adv|Je ne comprends pas.|我不明白。|Il n'est pas ici.|他不在这里。
ne… plus|不再|adv|Je ne fume plus.|我不再抽烟了。|Il n'y a plus de pain.|没有面包了。
ne… que|仅仅；只有|adv|Je n'ai que dix euros.|我只有十欧元。|Elle ne travaille que le matin.|她只在上午工作。
très|很；非常|adv|C'est très bon.|这个很好吃。|Elle parle très vite.|她说话很快。
trop|太；过于|adv|C'est trop cher.|这太贵了。|Tu travailles trop.|你工作太多了。
assez|足够；相当|adv|J'ai assez de temps.|我有足够的时间。|Il fait assez chaud.|天气相当热。
beaucoup|很多；十分|adv|Merci beaucoup.|非常感谢。|Il y a beaucoup de monde.|这里人很多。
peu|少；不太|adv|J'ai peu de temps.|我时间不多。|Elle parle peu.|她话不多。
plus|更多；更加|adv|Je voudrais plus d'eau.|我想再要一些水。|Parlez plus lentement.|请说得更慢一点。
moins|更少；较不|adv|C'est moins cher ici.|这里更便宜。|Je travaille moins le vendredi.|我星期五工作少一点。
aussi|也；同样|adv|Moi aussi, je viens.|我也来。|Il est aussi grand que toi.|他和你一样高。
autant|同样多；那么多|adv|J'ai autant de livres que toi.|我的书和你一样多。|Ne mange pas autant.|别吃那么多。
encore|还；再；仍然|adv|Tu es encore là ?|你还在这里吗？|Encore un café, s'il vous plaît.|请再来一杯咖啡。
déjà|已经；曾经|adv|J'ai déjà mangé.|我已经吃过了。|Tu es déjà venu ici ?|你以前来过这里吗？
souvent|经常；时常|adv|Je viens souvent ici.|我经常来这里。|Il pleut souvent en hiver.|冬天经常下雨。
parfois|有时|adv|Parfois, je rentre à pied.|有时我步行回家。|Elle cuisine parfois le dimanche.|她有时星期天做饭。
bientôt|不久；很快|adv|Le train arrive bientôt.|火车很快就到。|On se revoit bientôt.|我们很快再见。
tôt|早；时间早|adv|Je me lève tôt.|我起得早。|Il est encore tôt.|现在还早。
tard|晚；时间晚|adv|Il est trop tard.|太晚了。|Je rentre tard ce soir.|我今晚晚回家。
vite|迅速地；快|adv|Viens vite !|快来！|Le temps passe vite.|时间过得真快。
lentement|缓慢地|adv|Parlez lentement, s'il vous plaît.|请说慢一点。|Elle marche lentement.|她走得很慢。
bien|好；妥善地|adv|J'ai bien dormi.|我睡得很好。|Tout se passe bien.|一切顺利。
mal|不好；错误地|adv|J'ai mal dormi.|我没睡好。|Tu as mal compris.|你理解错了。
mieux|更好地|adv|Je vais mieux.|我好多了。|Tu comprends mieux maintenant ?|你现在更明白了吗？
vraiment|真的；确实|adv|C'est vraiment utile.|这确实有用。|Tu viens vraiment ?|你真的来吗？
seulement|仅仅；只是|adv|J'ai seulement une question.|我只有一个问题。|Il reste seulement deux places.|只剩两个座位了。
juste|恰好；只是；正确的|adv|C'est juste à côté.|就在旁边。|Je regarde juste.|我只是看看。
peut-être|也许；可能|adv|Elle viendra peut-être.|她也许会来。|C'est peut-être une erreur.|这可能是个错误。
certainement|肯定地；很可能|adv|Il est certainement chez lui.|他很可能在家。|Je reviendrai certainement.|我肯定会再来。
ensemble|一起|adv|On mange ensemble ?|我们一起吃饭吗？|Ils travaillent ensemble.|他们一起工作。
ici|这里|adv|Attendez ici.|请在这里等。|Il fait chaud ici.|这里很热。
là|那里；在场|adv|Pose ton sac là.|把包放在那里。|Je suis là.|我在这儿。
là-bas|那边；那里（较远处）|adv|La gare est là-bas.|车站在那边。|Ils habitent là-bas.|他们住在那边。
partout|到处；各处|adv|Je te cherche partout.|我到处找你。|Il y a des fleurs partout.|到处都有花。
dehors|在外面；到室外|adv|Il fait froid dehors.|外面很冷。|Les enfants jouent dehors.|孩子们在外面玩。
dedans|在里面；到里面|adv|Mets les clés dedans.|把钥匙放进去。|Il fait chaud dedans.|里面很热。
dessus|在上面；到上面|adv|Pose le livre dessus.|把书放在上面。|Ne marche pas dessus.|别踩在上面。
dessous|在下面；到下面|adv|Le chat est dessous.|猫在下面。|Regarde dessous.|看看下面。
ensuite|然后；接着|adv|On mange, ensuite on part.|我们吃饭，然后出发。|Que fait-on ensuite ?|接下来我们做什么？
puis|随后；然后|adv|Tournez, puis continuez tout droit.|转弯，然后继续直走。|Il lit puis il dort.|他读书，然后睡觉。
d'abord|首先；先|adv|D'abord, lavez-vous les mains.|首先，请洗手。|Je dois d'abord travailler.|我得先工作。
enfin|终于；最后|adv|Tu es enfin là !|你终于来了！|Enfin, ajoutez le sel.|最后，加入盐。
alors|那么；当时；于是|adv|Alors, on part ?|那么，我们走吗？|J'habitais alors à Lyon.|我当时住在里昂。
longtemps|很长时间|adv|Tu attends depuis longtemps ?|你等很久了吗？|Je ne reste pas longtemps.|我不会待很久。
tellement|如此；那么|adv|Il fait tellement chaud !|天气这么热！|J'ai tellement de choses à faire.|我有那么多事要做。
complètement|完全地|adv|J'ai complètement oublié.|我完全忘了。|Le magasin est complètement vide.|商店里空无一人。
exactement|准确地；正是如此|adv|C'est exactement ça.|正是如此。|Où habitez-vous exactement ?|您具体住在哪里？
doucement|轻轻地；慢慢地|adv|Ferme doucement la porte.|轻轻关门。|Conduis doucement.|开慢一点。
heureusement|幸好；幸运地|adv|Heureusement, tu es là.|幸好你在这里。|Heureusement, personne n'est blessé.|幸好没有人受伤。
malheureusement|遗憾地；不幸地|adv|Malheureusement, c'est fermé.|很遗憾，这里关门了。|Je suis malheureusement occupé.|很遗憾，我正忙着。` },
{ category: "数字与日历", rows: `zéro|零|num|Il fait zéro degré.|气温是零度。|Le numéro commence par zéro.|号码以零开头。
une dizaine|十个左右；一组十个|f|Il reste une dizaine de places.|还剩十个左右的座位。|Nous attendons une dizaine de minutes.|我们等大约十分钟。
deux|二|num|Une table pour deux.|两个人的餐桌。|J'ai deux frères.|我有两个兄弟。
trois|三|num|Il est trois heures.|现在三点。|Prenez trois pommes.|拿三个苹果。
quatre|四|num|Nous sommes quatre.|我们一共四个人。|J'ai quatre billets.|我有四张票。
cinq|五|num|Attendez cinq minutes.|请等五分钟。|Ça coûte cinq euros.|这个五欧元。
six|六|num|Je pars à six heures.|我六点出发。|Nous avons six chaises.|我们有六把椅子。
sept|七|num|Une semaine compte sept jours.|一周有七天。|Le magasin ouvre à sept heures.|商店七点开门。
huit|八|num|Il est huit heures.|现在八点。|Il reste huit places.|还剩八个座位。
neuf|九|num|Le cours commence à neuf heures.|课九点开始。|J'ai neuf euros.|我有九欧元。
dix|十|num|Je reviens dans dix minutes.|我十分钟后回来。|Nous sommes dix.|我们有十个人。
onze|十一|num|Il est onze heures.|现在十一点。|Le bus onze va à la gare.|十一路车去车站。
douze|十二|num|Une année compte douze mois.|一年有十二个月。|J'achète douze œufs.|我买十二个鸡蛋。
treize|十三|num|Elle a treize ans.|她十三岁。|C'est la chambre treize.|这是十三号房间。
quatorze|十四|num|Le train part à quatorze heures.|火车十四点出发。|Nous restons quatorze jours.|我们待十四天。
quinze|十五|num|Il reste quinze minutes.|还剩十五分钟。|Le billet coûte quinze euros.|票价十五欧元。
seize|十六|num|J'habite au numéro seize.|我住在十六号。|Le musée ferme à seize heures.|博物馆十六点关闭。
dix-sept|十七|num|Il a dix-sept ans.|他十七岁。|Il est dix-sept heures.|现在十七点。
dix-huit|十八|num|Elle a dix-huit ans.|她十八岁。|Le train arrive à dix-huit heures.|火车十八点到。
dix-neuf|十九|num|Le dîner est à dix-neuf heures.|晚饭在十九点。|Il reste dix-neuf euros.|还剩十九欧元。
vingt|二十|num|Le trajet dure vingt minutes.|路程需要二十分钟。|J'ai vingt ans.|我二十岁。
trente|三十|num|Il est huit heures trente.|现在八点半。|Ce sac coûte trente euros.|这个包三十欧元。
quarante|四十|num|J'attends depuis quarante minutes.|我已经等了四十分钟。|Il a quarante ans.|他四十岁。
cinquante|五十|num|Voici cinquante euros.|这里是五十欧元。|Il y a cinquante personnes.|有五十个人。
soixante|六十|num|Une heure compte soixante minutes.|一小时有六十分钟。|Elle a soixante ans.|她六十岁。
soixante-dix|七十|num|Ça coûte soixante-dix euros.|这个七十欧元。|Il roule à soixante-dix kilomètres à l'heure.|他以每小时七十公里行驶。
quatre-vingts|八十|num|Mon grand-père a quatre-vingts ans.|我祖父八十岁。|Le billet coûte quatre-vingts euros.|票价八十欧元。
quatre-vingt-dix|九十|num|Le film dure quatre-vingt-dix minutes.|电影长九十分钟。|Il reste quatre-vingt-dix euros.|还剩九十欧元。
cent|一百|num|Cette table coûte cent euros.|这张桌子一百欧元。|Marchez encore cent mètres.|再走一百米。
mille|一千|num|Le loyer est de mille euros.|房租是一千欧元。|Il y a mille mètres dans un kilomètre.|一公里有一千米。
lundi|星期一|m|Je commence lundi.|我星期一开始。|Le magasin ferme le lundi.|这家商店每周一关门。
mardi|星期二|m|On se voit mardi.|我们星期二见。|Le marché a lieu le mardi.|集市在每周二举行。
mercredi|星期三|m|Je suis libre mercredi.|我星期三有空。|Les enfants nagent le mercredi.|孩子们每周三游泳。
jeudi|星期四|m|Le cours est jeudi.|课在星期四。|Je travaille chez moi le jeudi.|我每周四在家工作。
vendredi|星期五|m|Je rentre vendredi.|我星期五回来。|Le vendredi, on mange ensemble.|每周五我们一起吃饭。
samedi|星期六|m|Tu fais quoi samedi ?|你星期六做什么？|Nous sortons le samedi.|我们每周六外出。
dimanche|星期日|m|À dimanche !|星期天见！|La banque est fermée le dimanche.|银行星期天不营业。
janvier|一月|m|Il fait froid en janvier.|一月份很冷。|Mon anniversaire est en janvier.|我的生日在一月。
février|二月|m|Je pars en février.|我二月份出发。|Février est un mois court.|二月很短。
mars|三月|m|Les cours commencent en mars.|课程三月开始。|Elle est née en mars.|她出生在三月。
avril|四月|m|Je reviens en avril.|我四月份回来。|Il pleut souvent en avril.|四月份经常下雨。
mai|五月|m|On déménage en mai.|我们五月搬家。|J'aime le mois de mai.|我喜欢五月。
juin|六月|m|L'examen est en juin.|考试在六月。|Les jours sont longs en juin.|六月白天很长。
juillet|七月|m|Nous partons en juillet.|我们七月出发。|Il fait chaud en juillet.|七月天气炎热。
août|八月|m|Je suis en vacances en août.|我八月份休假。|Le magasin ferme en août.|商店八月份歇业。
septembre|九月|m|L'école reprend en septembre.|学校九月开学。|Je commence mon travail en septembre.|我九月份开始工作。
octobre|十月|m|Je visite Paris en octobre.|我十月份游览巴黎。|Les feuilles tombent en octobre.|十月份树叶飘落。
novembre|十一月|m|Il fait frais en novembre.|十一月天气凉爽。|Notre voyage est prévu en novembre.|我们的旅行安排在十一月。
décembre|十二月|m|La famille se réunit en décembre.|家人十二月团聚。|Les vacances commencent en décembre.|假期十二月开始。
un million|一百万|num|Cette ville compte un million d'habitants.|这座城市有一百万居民。|Cette maison vaut un million d'euros.|这套房子价值一百万欧元。` },
{ category: "生活常用名词", rows: `une chose|事物；事情|f|J'ai une chose à te dire.|我有件事要告诉你。|Range tes choses.|收好你的东西。
le temps|时间；天气|m|Je n'ai pas le temps.|我没有时间。|Quel temps fait-il ?|天气怎么样？
la vie|生活；生命|f|La vie est belle.|生活很美好。|Il raconte sa vie.|他讲述自己的生活。
une fois|一次；一回|f|Répétez encore une fois.|请再重复一次。|Je viens deux fois par semaine.|我每周来两次。
un an|一年（时长、年龄）|m|J'habite ici depuis un an.|我在这里住了一年了。|Elle a trente ans.|她三十岁。
une fille|女孩；女儿|f|Ma fille apprend le français.|我女儿在学法语。|Cette fille est ma voisine.|那个女孩是我的邻居。
le monde|世界；人们|m|Il voyage dans le monde entier.|他在世界各地旅行。|Il y a du monde ici.|这里人很多。
monsieur|先生|m|Bonjour, monsieur.|先生，您好。|Ce monsieur attend le bus.|这位先生在等公交车。
une heure|一小时；钟点|f|Quelle heure est-il ?|现在几点？|J'attends depuis une heure.|我等了一个小时。
les gens|人们|m|Les gens sont gentils ici.|这里的人很友善。|Beaucoup de gens prennent le métro.|许多人坐地铁。
la nuit|夜晚|f|Il travaille la nuit.|他夜里工作。|La nuit tombe.|天黑了。
un nom|名字；姓氏|m|Quel est votre nom ?|您叫什么名字？|Écrivez votre nom ici.|请在这里写下您的姓名。
la peur|恐惧；害怕|f|J'ai peur du noir.|我怕黑。|N'aie pas peur.|别害怕。
maman|妈妈（亲昵称呼）|f|Maman prépare le dîner.|妈妈在做晚饭。|Je téléphone à maman.|我给妈妈打电话。
un problème|问题；麻烦|m|Il y a un problème.|出了个问题。|Aucun problème !|没问题！
de l'argent|钱；银|m|Je n'ai pas d'argent liquide.|我没有现金。|Il économise de l'argent.|他在攒钱。
une main|手|f|Lève la main.|举起手。|J'ai les mains froides.|我的手很冷。
un fils|儿子|m|Mon fils a dix ans.|我儿子十岁。|Elle vient avec son fils.|她和儿子一起来。
la tête|头；头脑|f|J'ai mal à la tête.|我头疼。|Elle tourne la tête.|她转过头。
un coup|一下；一击|m|J'entends un coup à la porte.|我听见一下敲门声。|Donne-moi un coup de main.|帮我一把。
la mort|死亡|f|Ce livre parle de la mort.|这本书谈到死亡。|Il apprend la mort de son ami.|他得知了朋友去世的消息。
l'amour|爱情；爱|m|C'est une histoire d'amour.|这是一个爱情故事。|Elle parle avec amour de sa famille.|她充满爱意地谈到家人。
un moment|片刻；时刻|m|Attendez un moment.|请稍等。|C'est un bon moment pour partir.|现在是出发的好时候。
un œil / des yeux|眼睛|m|Elle a les yeux bleus.|她有蓝色的眼睛。|J'ai quelque chose dans l'œil.|我眼睛里进东西了。
une question|问题；提问|f|J'ai une question.|我有一个问题。|C'est une bonne question.|这是个好问题。
une affaire|事情；生意；个人物品|f|C'est une affaire urgente.|这是一件急事。|N'oublie pas tes affaires.|别忘了你的东西。
le travail|工作；劳动|m|Je vais au travail.|我去上班。|Il cherche du travail.|他在找工作。
un truc|东西；办法（口语）|m|C'est quoi, ce truc ?|这是什么东西？|J'ai un truc pour retenir les mots.|我有个记单词的办法。
la chance|运气；机会|f|Bonne chance !|祝你好运！|Tu as de la chance.|你运气真好。
une minute|一分钟|f|Une minute, s'il vous plaît.|请稍等一分钟。|Le bus arrive dans cinq minutes.|公交车五分钟后到。
un type|类型；人（口语）|m|Quel type de chambre voulez-vous ?|您要哪种房间？|C'est un type sympa.|他是个友好的人。
un mec|男的；家伙（口语）|m|C'est un mec sympa.|他是个友善的小伙。|Ce mec habite ici.|这个男的住在这里。
madame|女士；夫人|f|Bonjour, madame.|女士，您好。|Cette dame s'appelle madame Martin.|这位女士叫马丁夫人。
une part|一份；份额|f|Une part de gâteau, s'il vous plaît.|请给我一块蛋糕。|Chacun paie sa part.|每个人付自己的那份。
une place|座位；位置；广场|f|Cette place est libre ?|这个座位有人吗？|On se retrouve sur la place.|我们在广场见面。
la terre|土地；地球|f|La terre est humide.|泥土是湿的。|La Terre tourne autour du Soleil.|地球围绕太阳转。
un gars|小伙子；家伙（口语）|m|Ce gars est mon voisin.|这个小伙子是我的邻居。|Salut les gars !|大家好！
un côté|一边；侧面|m|Regarde de l'autre côté.|看看另一边。|De quel côté est la gare ?|车站在哪边？
un cas|情况；案例|m|Dans ce cas, je reste.|这样的话，我留下来。|C'est un cas particulier.|这是特殊情况。
un mot|单词；话语；短笺|m|Que veut dire ce mot ?|这个词是什么意思？|Laisse-moi un mot.|给我留个字条。
salut|嗨；再见（熟人间）|expr|Salut, tu vas bien ?|嗨，你好吗？|Salut, à demain !|再见，明天见！
la police|警察部门|f|Appelez la police.|请报警。|La police arrive.|警察来了。
une suite|后续；接下来的部分|f|Je veux connaître la suite.|我想知道后续。|Quelle est la suite du programme ?|接下来的安排是什么？
un mari|丈夫|m|Mon mari travaille ici.|我丈夫在这里工作。|Elle voyage avec son mari.|她和丈夫一起旅行。
papa|爸爸（亲昵称呼）|m|Papa est dans le jardin.|爸爸在花园里。|J'appelle papa.|我给爸爸打电话。
un garçon|男孩|m|Ce garçon joue au ballon.|那个男孩在玩球。|Ils ont un garçon et une fille.|他们有一个男孩和一个女孩。
le feu|火；火灾；信号灯|m|Attention au feu !|小心火！|Le feu est rouge.|红灯亮着。
un docteur|医生（常用称呼）；博士|m|Bonjour, docteur.|医生，您好。|Je vais chez le docteur.|我去看医生。
une façon|方式；做法|f|C'est une bonne façon d'apprendre.|这是个很好的学习方法。|Fais-le à ta façon.|按你的方式做吧。
un point|点；要点；分数|m|C'est un point important.|这是重要的一点。|Notre équipe gagne trois points.|我们队获得三分。` },
{ category: "时间与人际生活", rows: `une fin|结束；末尾|f|La fin du film est triste.|电影结尾很悲伤。|On se voit à la fin du cours.|我们下课后见。
un début|开始；开端|m|C'est un bon début.|这是个好开头。|J'ai raté le début du film.|我错过了电影的开头。
une journée|一天；一整天|f|Bonne journée !|祝你今天愉快！|J'ai travaillé toute la journée.|我工作了一整天。
une soirée|傍晚到夜间的时段；晚会|f|Bonne soirée !|祝你今晚愉快！|Nous passons la soirée ensemble.|我们一起度过这个晚上。
un après-midi|下午|m|Je suis libre cet après-midi.|我今天下午有空。|On marche tout l'après-midi.|我们整个下午都在走路。
midi|中午十二点|m|On mange à midi.|我们中午十二点吃饭。|Il est presque midi.|快到中午十二点了。
minuit|午夜十二点|m|Je rentre avant minuit.|我午夜之前回家。|Il est minuit.|现在是午夜十二点。
un instant|一瞬间；片刻|m|Un instant, s'il vous plaît.|请稍等一下。|Tout change en un instant.|一切瞬间改变了。
une seconde|一秒|f|Attends deux secondes.|等两秒。|Une minute compte soixante secondes.|一分钟有六十秒。
un week-end|周末|m|Bon week-end !|周末愉快！|Tu fais quoi ce week-end ?|你这个周末做什么？
des vacances|假期|f|Je suis en vacances.|我在休假。|Les vacances commencent demain.|假期明天开始。
une saison|季节|f|Quelle est ta saison préférée ?|你最喜欢哪个季节？|Les prix changent selon la saison.|价格随季节变化。
le printemps|春天|m|Les fleurs poussent au printemps.|春天花儿生长。|J'aime le printemps.|我喜欢春天。
l'été|夏天|m|Il fait chaud en été.|夏天天气炎热。|Nous allons à la mer cet été.|我们今年夏天去海边。
l'automne|秋天|m|Les feuilles tombent en automne.|秋天树叶飘落。|L'automne arrive.|秋天来了。
l'hiver|冬天|m|Il neige en hiver.|冬天下雪。|Les nuits sont longues en hiver.|冬天夜晚很长。
une date|日期|f|Quelle est la date aujourd'hui ?|今天几号？|Note la date du rendez-vous.|记下预约的日期。
un calendrier|日历；日程表|m|Regarde le calendrier.|看一下日历。|J'ajoute la date au calendrier.|我把日期记到日历上。
un horaire|时刻；时间安排|m|Quels sont vos horaires ?|你们的营业时间是什么？|L'horaire du train a changé.|火车时刻改了。
une durée|持续时间；时长|f|Quelle est la durée du vol ?|飞行时间是多久？|La durée du cours est d'une heure.|课时为一小时。
un âge|年龄|m|Quel âge as-tu ?|你多大？|Nous avons le même âge.|我们同岁。
un anniversaire|生日；周年纪念|m|Bon anniversaire !|生日快乐！|Son anniversaire est demain.|他的生日是明天。
un bébé|婴儿|m|Le bébé dort.|宝宝在睡觉。|Le bébé a faim.|宝宝饿了。
un parent|父亲或母亲；亲属|m|Mes parents habitent loin.|我的父母住得远。|Un parent doit signer.|需要一位家长签字。
un grand-père|祖父；外祖父|m|Mon grand-père lit le journal.|我祖父在看报纸。|Je rends visite à mon grand-père.|我去看望祖父。
une grand-mère|祖母；外祖母|f|Ma grand-mère cuisine bien.|我祖母做饭很好吃。|J'appelle ma grand-mère.|我给祖母打电话。
un oncle|叔伯；舅舅；姑姨父|m|Mon oncle habite à Lyon.|我的叔叔住在里昂。|Je dîne chez mon oncle.|我在叔叔家吃晚饭。
une tante|姑姑；姨妈；婶舅妈|f|Ma tante est médecin.|我姨妈是医生。|Je voyage avec ma tante.|我和姨妈一起旅行。
un cousin / une cousine|堂兄弟姐妹；表兄弟姐妹|m|Mon cousin vient demain.|我的表兄弟明天来。|Ma cousine parle français.|我的表姐妹会说法语。
un neveu|侄子；外甥|m|Mon neveu a cinq ans.|我的外甥五岁。|J'achète un cadeau pour mon neveu.|我给外甥买礼物。
une nièce|侄女；外甥女|f|Ma nièce aime dessiner.|我的外甥女喜欢画画。|Je garde ma nièce ce soir.|我今晚照看外甥女。
un couple|一对伴侣；夫妻|m|C'est un jeune couple.|这是一对年轻伴侣。|Nous voyageons en couple.|我们两口子一起旅行。
un copain / une copine|朋友；男友或女友（口语）|m|Je sors avec mes copains.|我和朋友们出去。|Ma copine vient dîner.|我女朋友来吃晚饭。
un adulte|成年人|m|Ce billet est pour un adulte.|这张票是成人票。|Un adulte accompagne les enfants.|一位成年人陪同孩子们。
un adolescent|青少年|m|Mon fils est adolescent.|我儿子处于青春期。|Cette activité plaît aux adolescents.|这项活动受青少年欢迎。
un invité|客人；受邀者|m|Les invités arrivent.|客人们到了。|Nous avons dix invités.|我们有十位客人。
un mariage|婚礼；婚姻|m|Nous sommes invités à un mariage.|我们受邀参加婚礼。|Le mariage a lieu samedi.|婚礼星期六举行。
un divorce|离婚|m|Ils parlent de leur divorce.|他们在谈离婚的事。|Le divorce a été difficile.|离婚的过程很艰难。
une naissance|出生|f|Quelle est votre date de naissance ?|您的出生日期是什么？|Ils annoncent la naissance de leur fille.|他们宣布女儿出生的消息。
une enfance|童年|f|Il parle de son enfance.|他谈起自己的童年。|C'est un souvenir d'enfance.|这是童年的回忆。
une amitié|友谊|f|Notre amitié dure depuis dix ans.|我们的友谊已有十年。|L'amitié compte beaucoup pour moi.|友谊对我很重要。
une fête|节日；聚会|f|On organise une fête.|我们组织一场聚会。|La fête commence à huit heures.|聚会八点开始。
un cadeau|礼物|m|C'est un cadeau pour toi.|这是给你的礼物。|Merci pour le cadeau.|谢谢你的礼物。
une surprise|惊喜；意外|f|Quelle bonne surprise !|真是个惊喜！|J'ai une surprise pour toi.|我有个惊喜给你。
une conversation|谈话|f|Nous avons une longue conversation.|我们聊了很久。|Je ne comprends pas la conversation.|我听不懂这段谈话。
une visite|拜访；参观|f|Merci pour votre visite.|感谢您的到访。|La visite dure une heure.|参观需要一小时。
une rencontre|相遇；会面|f|C'est notre première rencontre.|这是我们第一次见面。|La rencontre est prévue demain.|会面安排在明天。
une invitation|邀请；请柬|f|Merci pour l'invitation.|谢谢邀请。|J'envoie les invitations.|我发送请柬。
un prénom|名字（不含姓）|m|Quel est votre prénom ?|您的名字是什么？|Écrivez votre prénom ici.|请在这里写下名字。
un surnom|昵称；绰号|m|Tu as un surnom ?|你有昵称吗？|Mes amis utilisent mon surnom.|朋友们都用昵称叫我。` },
{ category: "身体与穿着", rows: `un visage|面孔；脸|m|Elle a un visage souriant.|她面带微笑。|Je reconnais ce visage.|我认得这张脸。
la bouche|嘴|f|Ouvrez la bouche.|请张嘴。|Elle met la main devant sa bouche.|她用手捂住嘴。
le nez|鼻子|m|J'ai le nez bouché.|我鼻子堵了。|Il a un petit nez.|他有个小鼻子。
une oreille|耳朵|f|J'ai mal à l'oreille.|我耳朵疼。|Ce bruit fait mal aux oreilles.|这声音刺耳。
une dent|牙齿|f|Je me brosse les dents.|我刷牙。|J'ai mal à une dent.|我有一颗牙疼。
la langue|舌头；语言|f|Quelle langue parlez-vous ?|您说什么语言？|Je me suis brûlé la langue.|我烫到了舌头。
le cou|脖子|m|J'ai mal au cou.|我脖子疼。|Elle porte une écharpe autour du cou.|她围着围巾。
la gorge|喉咙|f|J'ai mal à la gorge.|我嗓子疼。|Ma gorge est sèche.|我喉咙很干。
un bras|胳膊；手臂|m|Levez le bras.|请抬起手臂。|Elle tient le bébé dans ses bras.|她抱着宝宝。
une épaule|肩膀|f|Mon sac est sur mon épaule.|我的包在肩上。|J'ai mal à l'épaule.|我肩膀疼。
une jambe|腿|f|J'ai mal à la jambe.|我腿疼。|Il croise les jambes.|他翘起腿。
un genou|膝盖|m|Je suis tombé sur les genoux.|我摔跪在地。|Son genou est blessé.|他的膝盖受伤了。
un pied|脚|m|Je vais à pied.|我步行去。|J'ai les pieds froids.|我的脚很冷。
le dos|背部|m|J'ai mal au dos.|我背疼。|Il porte un sac sur le dos.|他背着一个包。
le ventre|肚子|m|J'ai mal au ventre.|我肚子疼。|Le bébé dort sur le dos, pas sur le ventre.|宝宝仰着睡，没有趴着睡。
un doigt|手指|m|Je me suis coupé le doigt.|我割伤了手指。|Elle montre la porte du doigt.|她用手指着门。
un cheveu|一根头发（复数：头发）|m|Elle a les cheveux longs.|她留着长发。|Il y a un cheveu sur ma veste.|我的外套上有一根头发。
une lèvre|嘴唇|f|J'ai les lèvres sèches.|我的嘴唇很干。|Elle se mord la lèvre.|她咬着嘴唇。
une joue|脸颊|f|Le bébé a les joues rouges.|宝宝的脸颊红红的。|Elle m'embrasse sur la joue.|她亲了一下我的脸颊。
le front|额头|m|Son front est chaud.|他的额头很热。|Il essuie son front.|他擦了擦额头。
un ongle|指甲|m|Je me coupe les ongles.|我剪指甲。|Mon ongle est cassé.|我的指甲断了。
une barbe|胡须；络腮胡|f|Il porte une barbe.|他留着胡子。|Il se rase la barbe.|他刮胡子。
la poitrine|胸部|f|Elle serre son sac contre sa poitrine.|她把包抱在胸前。|Il pose la main sur sa poitrine.|他把手放在胸口。
une cheville|脚踝|f|Je me suis fait mal à la cheville.|我弄伤了脚踝。|L'eau arrive aux chevilles.|水到脚踝处。
un poignet|手腕|m|Ma montre est à mon poignet.|我的手表戴在手腕上。|J'ai mal au poignet.|我手腕疼。
une chaussure|鞋子|f|Enlève tes chaussures.|脱掉鞋子。|Ces chaussures sont confortables.|这些鞋子很舒服。
une robe|连衣裙|f|Elle porte une robe bleue.|她穿着蓝色连衣裙。|Je cherche une robe pour la fête.|我想找一条聚会穿的连衣裙。
une chemise|衬衫|f|Cette chemise est trop grande.|这件衬衫太大了。|Il porte une chemise blanche.|他穿着白衬衫。
un pantalon|裤子|m|Je cherche un pantalon noir.|我想找一条黑裤子。|Ce pantalon me va bien.|这条裤子很合我身。
une veste|夹克；短外套|f|Prends ta veste.|带上你的外套。|Cette veste est légère.|这件外套很轻。
un manteau|大衣；长外套|m|Mets ton manteau.|穿上大衣。|Mon manteau est dans l'entrée.|我的大衣在门厅。
un pull|套头毛衣|m|Ce pull est chaud.|这件毛衣很暖和。|Je porte un pull gris.|我穿着灰色毛衣。
une jupe|裙子；半身裙|f|Cette jupe est trop courte.|这条裙子太短了。|Elle achète une jupe.|她买了一条裙子。
un tee-shirt|T恤衫|m|Je porte un tee-shirt blanc.|我穿着白色T恤。|Ce tee-shirt est en coton.|这件T恤是棉质的。
un jean|牛仔裤|m|Ce jean est trop serré.|这条牛仔裤太紧了。|Je mets un jean aujourd'hui.|我今天穿牛仔裤。
un short|短裤|m|Il fait chaud, mets un short.|天热，穿短裤吧。|Ce short est confortable.|这条短裤很舒服。
une chaussette|袜子|f|J'ai perdu une chaussette.|我丢了一只袜子。|Mes chaussettes sont mouillées.|我的袜子湿了。
un sous-vêtement|内衣|m|Je range mes sous-vêtements.|我整理内衣。|Ce sous-vêtement est en coton.|这件内衣是棉质的。
un pyjama|睡衣|m|Mets ton pyjama.|穿上睡衣。|J'ai oublié mon pyjama.|我忘带睡衣了。
une botte|靴子|f|Je mets mes bottes.|我穿上靴子。|Ces bottes gardent les pieds au sec.|这些靴子能让脚保持干燥。
une basket|运动鞋（常用复数）|f|Je porte des baskets.|我穿着运动鞋。|Mes baskets sont usées.|我的运动鞋穿旧了。
un chapeau|帽子（通常有帽檐）|m|Mets un chapeau au soleil.|在太阳下戴顶帽子。|J'aime ton chapeau.|我喜欢你的帽子。
un bonnet|针织帽；便帽|m|Mon bonnet est chaud.|我的帽子很暖和。|Il porte un bonnet rouge.|他戴着红色针织帽。
une écharpe|围巾|f|Prends une écharpe.|带条围巾。|Cette écharpe est douce.|这条围巾很柔软。
un gant|手套|m|Je cherche mes gants.|我在找手套。|J'ai perdu un gant.|我丢了一只手套。
une ceinture|腰带；安全带|f|Attache ta ceinture.|系好安全带。|Cette ceinture est en cuir.|这条腰带是皮的。
une poche|口袋|f|Mes clés sont dans ma poche.|钥匙在我的口袋里。|Cette veste a deux poches.|这件外套有两个口袋。
un bouton|纽扣；按钮|m|Appuyez sur ce bouton.|请按这个按钮。|Il manque un bouton.|少了一颗纽扣。
des lunettes|眼镜|f|Où sont mes lunettes ?|我的眼镜在哪里？|Elle porte des lunettes.|她戴眼镜。
une montre|手表|f|Ma montre est en panne.|我的手表坏了。|Je regarde ma montre.|我看了一下手表。` },
{ category: "饮食与买菜", rows: `un repas|一顿饭；餐食|m|Le repas est prêt.|饭好了。|Merci pour ce bon repas.|谢谢这顿美餐。
un petit-déjeuner|早餐|m|Le petit-déjeuner est inclus.|含早餐。|Je prends mon petit-déjeuner à sept heures.|我七点吃早餐。
un déjeuner|午餐|m|On se retrouve pour le déjeuner.|我们午餐时见。|Le déjeuner est à midi.|午餐在中午十二点。
un dîner|晚餐|m|Tu viens dîner ?|你来吃晚饭吗？|Le dîner est servi.|晚饭上桌了。
la faim|饥饿|f|J'ai faim.|我饿了。|Tu n'as plus faim ?|你不饿了吗？
la soif|口渴|f|J'ai soif.|我渴了。|Cette eau calme ma soif.|这水解了我的渴。
la nourriture|食物；食品|f|La nourriture est bonne ici.|这里的食物很好吃。|On ne jette pas la nourriture.|我们不浪费食物。
un plat|菜肴；大盘子|m|Quel est le plat du jour ?|今天的特餐是什么？|Ce plat est délicieux.|这道菜很好吃。
un menu|菜单；套餐|m|Le menu, s'il vous plaît.|请给我菜单。|Je prends le menu à vingt euros.|我要二十欧元的套餐。
du vin|葡萄酒|m|Un verre de vin rouge.|一杯红葡萄酒。|Je ne bois pas de vin.|我不喝葡萄酒。
de la bière|啤酒|f|Une bière, s'il vous plaît.|请来一杯啤酒。|Cette bière est sans alcool.|这种啤酒不含酒精。
un jus|果汁；汁液|m|Je voudrais un jus d'orange.|我想要一杯橙汁。|Ce jus est frais.|这个果汁是新鲜的。
une tomate|西红柿|f|Coupez les tomates.|切开西红柿。|J'achète un kilo de tomates.|我买一公斤西红柿。
une salade|沙拉；生菜|f|Je prends une salade.|我要一份沙拉。|Lave la salade.|把生菜洗一下。
un concombre|黄瓜|m|Coupe le concombre en rondelles.|把黄瓜切成圆片。|J'ajoute du concombre à la salade.|我在沙拉里加入黄瓜。
un poivron|甜椒；彩椒|m|Ce poivron est rouge.|这个甜椒是红色的。|Je cuisine des poivrons.|我做甜椒吃。
une courgette|西葫芦|f|Coupez les courgettes.|把西葫芦切开。|J'aime la soupe de courgettes.|我喜欢西葫芦汤。
une aubergine|茄子|f|L'aubergine est au four.|茄子在烤箱里。|J'achète deux aubergines.|我买两个茄子。
des épinards|菠菜|m|Je prépare des épinards.|我在做菠菜。|Tu aimes les épinards ?|你喜欢菠菜吗？
des petits pois|豌豆|m|Je sers les petits pois.|我把豌豆端上桌。|Il reste des petits pois.|还剩一些豌豆。
un chou|卷心菜；甘蓝|m|Je coupe le chou.|我切卷心菜。|On prépare une soupe au chou.|我们做卷心菜汤。
un brocoli|西兰花|m|Le brocoli est cuit.|西兰花熟了。|J'achète du brocoli.|我买西兰花。
une banane|香蕉|f|Je mange une banane.|我吃一根香蕉。|Ces bananes sont mûres.|这些香蕉熟了。
une orange|橙子|f|Tu veux une orange ?|你要一个橙子吗？|Je presse des oranges.|我榨橙汁。
un citron|柠檬|m|Ajoute un peu de citron.|加一点柠檬。|Je coupe le citron en deux.|我把柠檬切成两半。
une poire|梨|f|Cette poire est sucrée.|这个梨很甜。|Je prends deux poires.|我要两个梨。
une pêche|桃子；捕鱼|f|Cette pêche est mûre.|这个桃子熟了。|Il aime la pêche.|他喜欢钓鱼。
une fraise|草莓|f|Les fraises sont délicieuses.|草莓很好吃。|Je prépare une tarte aux fraises.|我做草莓挞。
du raisin|葡萄|m|J'achète du raisin.|我买葡萄。|Ce raisin est sucré.|这葡萄很甜。
une cerise|樱桃|f|Les cerises sont rouges.|樱桃是红色的。|J'enlève le noyau de la cerise.|我去掉樱桃核。
un melon|甜瓜|m|Le melon est frais.|甜瓜很清凉。|On partage un melon.|我们分着吃一个甜瓜。
une pastèque|西瓜|f|Je coupe la pastèque.|我切西瓜。|Cette pastèque est très sucrée.|这个西瓜很甜。
un abricot|杏|m|Ces abricots sont mûrs.|这些杏熟了。|J'aime la confiture d'abricots.|我喜欢杏酱。
un ananas|菠萝|m|Je coupe l'ananas.|我切菠萝。|Ce jus est à l'ananas.|这是菠萝汁。
une noix|核桃；坚果|f|Il y a des noix dans ce gâteau.|这个蛋糕里有核桃。|Je suis allergique aux noix.|我对坚果过敏。
une amande|杏仁|f|Ce gâteau contient des amandes.|这个蛋糕含有杏仁。|Je mange quelques amandes.|我吃几颗杏仁。
du chocolat|巧克力|m|J'aime le chocolat noir.|我喜欢黑巧克力。|Un chocolat chaud, s'il vous plaît.|请来一杯热巧克力。
un gâteau|蛋糕；糕点|m|Le gâteau est au four.|蛋糕在烤箱里。|Elle prépare un gâteau d'anniversaire.|她做生日蛋糕。
un biscuit|饼干|m|Tu veux un biscuit ?|你要一块饼干吗？|Il reste trois biscuits.|还剩三块饼干。
une glace|冰；冰激凌；镜子|f|Je prends une glace à la vanille.|我要香草冰激凌。|Il y a de la glace sur le lac.|湖面上有冰。
un bonbon|糖果|m|Ce bonbon est à la menthe.|这颗糖是薄荷味的。|Il donne un bonbon à l'enfant.|他给孩子一颗糖。
de la confiture|果酱|f|Je mets de la confiture sur mon pain.|我在面包上涂果酱。|Cette confiture est faite maison.|这种果酱是自制的。
du miel|蜂蜜|m|J'ajoute du miel dans mon thé.|我在茶里加蜂蜜。|Ce miel vient de France.|这蜂蜜来自法国。
de la compote|水果泥；煮水果甜食|f|Je prépare de la compote de pommes.|我做苹果泥。|La compote est sans sucre ajouté.|水果泥没有额外加糖。
des pâtes|意大利面；面食|f|Les pâtes sont prêtes.|意大利面好了。|Je fais cuire des pâtes.|我煮意大利面。
des lentilles|小扁豆；隐形眼镜|f|Je prépare une soupe de lentilles.|我做小扁豆汤。|Elle porte des lentilles.|她戴隐形眼镜。
du jambon|火腿|m|Un sandwich au jambon.|一个火腿三明治。|Je ne mange pas de jambon.|我不吃火腿。
une saucisse|香肠|f|Les saucisses sont grillées.|香肠烤好了。|J'achète quatre saucisses.|我买四根香肠。
une crevette|虾|f|Ce plat contient des crevettes.|这道菜里有虾。|Je décortique les crevettes.|我剥虾壳。
du saumon|三文鱼；鲑鱼|m|Je prends du saumon.|我要三文鱼。|Le saumon est servi avec du riz.|三文鱼配米饭。` },
{ category: "家居与随身物品", rows: `un sac|包；袋子|m|Mon sac est lourd.|我的包很重。|Vous voulez un sac ?|您要袋子吗？
une bouteille|瓶子；一瓶|f|Une bouteille d'eau, s'il vous plaît.|请来一瓶水。|La bouteille est vide.|瓶子空了。
une boîte|盒子；箱子|f|Les biscuits sont dans la boîte.|饼干在盒子里。|Ouvre cette boîte.|打开这个盒子。
un paquet|一包；包裹|m|Un paquet de biscuits.|一包饼干。|J'ai reçu un paquet.|我收到一个包裹。
un panier|篮子；购物篮|m|Mets les fruits dans le panier.|把水果放进篮子里。|Mon panier est plein.|我的购物篮满了。
un pot|罐子；盆|m|J'achète un pot de confiture.|我买一罐果酱。|Cette plante pousse dans un pot.|这株植物长在盆里。
un vase|花瓶|m|Mets les fleurs dans le vase.|把花放进花瓶。|Ce vase est fragile.|这个花瓶易碎。
un bocal|玻璃罐|m|Le sucre est dans ce bocal.|糖在这个玻璃罐里。|Ferme bien le bocal.|把玻璃罐盖紧。
une poubelle|垃圾桶|f|Où est la poubelle ?|垃圾桶在哪里？|Je sors la poubelle.|我把垃圾桶拿出去。
un canapé|沙发|m|Assieds-toi sur le canapé.|坐到沙发上。|Ce canapé est confortable.|这个沙发很舒服。
un fauteuil|扶手椅|m|Mon père lit dans son fauteuil.|我父亲坐在扶手椅上看书。|Ce fauteuil est près de la fenêtre.|这把扶手椅在窗边。
un meuble|家具；一件家具|m|Ce meuble est en bois.|这件家具是木制的。|Nous achetons des meubles.|我们买家具。
un réfrigérateur / un frigo|冰箱（正式／口语）|m|Le lait est dans le frigo.|牛奶在冰箱里。|Le réfrigérateur est en panne.|冰箱坏了。
un lave-linge|洗衣机|m|Le lave-linge fonctionne.|洗衣机在运转。|Je mets les vêtements dans le lave-linge.|我把衣服放进洗衣机。
un lave-vaisselle|洗碗机|m|Le lave-vaisselle est plein.|洗碗机满了。|Je vide le lave-vaisselle.|我把洗碗机里的餐具拿出来。
un micro-ondes|微波炉|m|Réchauffe la soupe au micro-ondes.|用微波炉热汤。|Le micro-ondes est dans la cuisine.|微波炉在厨房里。
un aspirateur|吸尘器|m|Je passe l'aspirateur.|我用吸尘器清扫。|L'aspirateur fait du bruit.|吸尘器发出噪声。
un fer à repasser|熨斗|m|Le fer à repasser est chaud.|熨斗很烫。|Débranche le fer à repasser.|拔掉熨斗电源。
un balai|扫帚|m|Je passe le balai.|我扫地。|Le balai est derrière la porte.|扫帚在门后。
une éponge|海绵|f|Nettoie la table avec une éponge.|用海绵擦桌子。|Cette éponge est sale.|这块海绵脏了。
un torchon|擦碗布；抹布|m|Essuie les verres avec un torchon.|用擦碗布擦干杯子。|Le torchon est propre.|抹布是干净的。
du savon|肥皂|m|Lave-toi les mains avec du savon.|用肥皂洗手。|Il n'y a plus de savon.|没有肥皂了。
du shampoing|洗发水|m|J'ai oublié mon shampoing.|我忘带洗发水了。|Ce shampoing sent bon.|这款洗发水很好闻。
du dentifrice|牙膏|m|Il reste du dentifrice.|还剩一些牙膏。|J'achète un tube de dentifrice.|我买一管牙膏。
une brosse à dents|牙刷|f|Où est ma brosse à dents ?|我的牙刷在哪里？|Je change de brosse à dents.|我换牙刷。
un peigne|梳子|m|J'utilise un peigne.|我用梳子梳头。|Le peigne est dans le tiroir.|梳子在抽屉里。
du papier|纸；证件（复数）|m|Il me faut du papier.|我需要纸。|Vos papiers, s'il vous plaît.|请出示您的证件。
un stylo|笔；钢笔；圆珠笔|m|Vous avez un stylo ?|您有笔吗？|Mon stylo ne marche plus.|我的笔写不出了。
un crayon|铅笔|m|Écris au crayon.|用铅笔写。|Je taille mon crayon.|我削铅笔。
des ciseaux|剪刀|m|Passe-moi les ciseaux.|把剪刀递给我。|Ces ciseaux coupent bien.|这把剪刀很锋利。
de la colle|胶水；胶|f|Il me faut de la colle.|我需要胶水。|La colle n'est pas sèche.|胶还没干。
du scotch|透明胶带（口语）|m|Ferme le carton avec du scotch.|用胶带封纸箱。|Il n'y a plus de scotch.|胶带用完了。
une aiguille|针；指针|f|Je cherche une aiguille.|我在找针。|Les aiguilles de l'horloge tournent.|时钟的指针在转动。
une ficelle|细绳|f|J'attache le paquet avec une ficelle.|我用细绳捆包裹。|Coupe un morceau de ficelle.|剪一段细绳。
un fil|线；电线|m|Le fil est cassé.|线断了。|Il me faut du fil blanc.|我需要白线。
une corde|粗绳；绳索|f|Tiens bien la corde.|抓紧绳子。|Les enfants sautent à la corde.|孩子们在跳绳。
un clou|钉子|m|Je plante un clou dans le mur.|我把钉子钉进墙里。|Attention, il y a un clou par terre.|小心，地上有颗钉子。
une vis|螺丝钉|f|Il manque une vis.|少了一颗螺丝。|Serre cette vis.|拧紧这颗螺丝。
un marteau|锤子|m|Passe-moi le marteau.|把锤子递给我。|Le marteau est dans la boîte à outils.|锤子在工具箱里。
une prise|电源插座；抓取|f|Il y a une prise près du lit.|床边有插座。|Branche le chargeur dans la prise.|把充电器插进插座。
un câble|线缆|m|Ce câble est trop court.|这根线太短了。|J'ai besoin d'un câble de charge.|我需要一根充电线。
un chargeur|充电器|m|J'ai oublié mon chargeur.|我忘带充电器了。|Ce chargeur est pour mon téléphone.|这个充电器是给我手机用的。
une pile|电池；一摞|f|Il faut changer les piles.|需要换电池。|Il y a une pile de livres.|那里有一摞书。
une ampoule|灯泡；水泡|f|L'ampoule ne fonctionne plus.|灯泡不亮了。|J'ai une ampoule au pied.|我脚上起了水泡。
une télécommande|遥控器|f|Où est la télécommande ?|遥控器在哪里？|La télécommande est sur le canapé.|遥控器在沙发上。
un interrupteur|电灯开关|m|L'interrupteur est près de la porte.|开关在门边。|Appuie sur l'interrupteur.|按一下开关。
une bougie|蜡烛|f|J'allume une bougie.|我点上一支蜡烛。|Souffle les bougies.|吹灭蜡烛。
une allumette|火柴|f|Tu as des allumettes ?|你有火柴吗？|L'allumette est humide.|火柴潮了。
un étui|套；小盒|m|Mes lunettes sont dans leur étui.|我的眼镜在眼镜盒里。|Cet étui protège mon téléphone.|这个套子保护我的手机。
un mouchoir|纸巾；手帕|m|Tu as un mouchoir ?|你有纸巾吗？|Je prends un mouchoir en papier.|我拿了一张纸巾。` },
{ category: "城镇与出行", rows: `un endroit|地方；地点|m|C'est un endroit calme.|这是个安静的地方。|Je connais cet endroit.|我认识这个地方。
un lieu|地点；场所|m|Quel est le lieu du rendez-vous ?|见面地点在哪里？|Ce lieu est ouvert au public.|这个场所对公众开放。
un pays|国家|m|De quel pays venez-vous ?|您来自哪个国家？|J'aimerais visiter ce pays.|我想去这个国家看看。
une route|公路；道路|f|La route est fermée.|这条路封了。|Bonne route !|一路顺风！
un chemin|小路；路径|m|Je cherche mon chemin.|我在找路。|Suivez ce chemin.|沿着这条小路走。
le métro|地铁|m|Je prends le métro.|我坐地铁。|Où est le métro ?|地铁在哪里？
un tramway|有轨电车|m|Le tramway arrive.|有轨电车来了。|Je prends le tramway pour travailler.|我坐有轨电车上班。
un taxi|出租车|m|Pouvez-vous appeler un taxi ?|您能叫辆出租车吗？|Le taxi nous attend.|出租车在等我们。
un camion|卡车；货车|m|Le camion livre les meubles.|货车来送家具。|Un camion bloque la rue.|一辆卡车挡住了街道。
une moto|摩托车|f|Il vient à moto.|他骑摩托车来。|Sa moto est rouge.|他的摩托车是红色的。
un bateau|船|m|Nous prenons le bateau.|我们坐船。|Le bateau quitte le port.|船离开港口。
un arrêt|车站停靠点；停止|m|Le prochain arrêt est la gare.|下一站是火车站。|Où est l'arrêt de bus ?|公交车站在哪里？
une sortie|出口；外出活动|f|Où est la sortie ?|出口在哪里？|On organise une sortie dimanche.|我们安排星期天出去玩。
une station|车站；站点|f|Descendez à la prochaine station.|请在下一站下车。|La station de métro est proche.|地铁站很近。
une ligne|线路；一行；线|f|Prenez la ligne deux.|请乘坐二号线。|Écrivez votre nom sur cette ligne.|在这一行写姓名。
un ticket|小票；短途车票|m|Un ticket de métro, s'il vous plaît.|请给我一张地铁票。|Gardez votre ticket de caisse.|请保留购物小票。
un centre|中心；中心场所|m|Le centre-ville est proche.|市中心很近。|Je vais au centre commercial.|我去购物中心。
un village|村庄|m|C'est un petit village.|这是个小村庄。|Ma famille habite dans ce village.|我的家人住在这个村里。
la campagne|乡村；活动运动|f|Je passe le week-end à la campagne.|我在乡下过周末。|Ils lancent une campagne de publicité.|他们发起广告宣传活动。
une île|岛屿|f|Nous visitons une île.|我们游览一座岛。|Cette île est petite.|这个岛很小。
un jardin|花园|m|Les enfants jouent dans le jardin.|孩子们在花园玩。|J'arrose le jardin.|我给花园浇水。
une plage|海滩|f|On va à la plage.|我们去海滩。|La plage est propre.|海滩很干净。
une montagne|山；高山|f|J'aime la montagne.|我喜欢山。|Il neige sur la montagne.|山上下雪了。
un port|港口|m|Le bateau arrive au port.|船到港了。|Nous marchons près du port.|我们在港口附近散步。
un garage|车库；汽车修理厂|m|La voiture est au garage.|车在车库里。|Je cherche un garage pour la réparation.|我找汽车修理厂修车。
un supermarché|超市|m|Je vais au supermarché.|我去超市。|Le supermarché ferme à vingt heures.|超市晚上八点关门。
une épicerie|杂货店；食品杂货|f|L'épicerie est encore ouverte.|杂货店还开着。|J'achète du riz à l'épicerie.|我在杂货店买米。
une boucherie|肉店|f|La boucherie est fermée.|肉店关门了。|J'achète de la viande à la boucherie.|我在肉店买肉。
une poissonnerie|鱼店；水产店|f|La poissonnerie ouvre tôt.|鱼店很早开门。|Il travaille dans une poissonnerie.|他在鱼店工作。
une pâtisserie|糕点；糕点店|f|Cette pâtisserie fait de bons gâteaux.|这家糕点店蛋糕做得很好。|J'aime les pâtisseries aux fruits.|我喜欢水果糕点。
un bureau de tabac|烟草店（常兼售邮票等）|m|Le bureau de tabac est au coin.|烟草店在拐角处。|J'achète un timbre au bureau de tabac.|我在烟草店买邮票。
un bar|酒吧；吧台|m|On se retrouve au bar.|我们在酒吧见。|Un café au bar, s'il vous plaît.|请在吧台给我来杯咖啡。
un cinéma|电影院；电影艺术|m|On va au cinéma ?|我们去看电影吗？|Le cinéma est près d'ici.|电影院离这里很近。
une piscine|游泳池|f|Je vais à la piscine.|我去游泳池。|La piscine ferme à dix-neuf heures.|游泳池十九点关闭。
un stade|体育场；阶段|m|Le match a lieu au stade.|比赛在体育场举行。|À ce stade, tout va bien.|在这个阶段，一切都好。
une église|教堂|f|Cette église est ancienne.|这座教堂很古老。|L'église est au centre du village.|教堂在村庄中心。
un château|城堡|m|Nous visitons un château.|我们参观一座城堡。|Le château est sur la colline.|城堡在山丘上。
la poste|邮局；邮政|f|Je vais à la poste.|我去邮局。|La poste ouvre à neuf heures.|邮局九点开门。
un commissariat|警察局|m|Où est le commissariat ?|警察局在哪里？|Je déclare le vol au commissariat.|我到警察局报失窃案。
une agence|代理机构；营业网点|f|Je vais à l'agence bancaire.|我去银行网点。|L'agence de voyages est ouverte.|旅行社开门了。
une boutique|小商店；专卖店|f|Cette boutique vend des vêtements.|这家店卖衣服。|J'entre dans une petite boutique.|我走进一家小店。
un bâtiment|建筑物|m|Ce bâtiment est récent.|这栋建筑很新。|L'entrée est derrière le bâtiment.|入口在建筑物后面。
une usine|工厂|f|Il travaille dans une usine.|他在工厂工作。|L'usine est loin du centre.|工厂离市中心很远。
une université|大学|f|Elle étudie à l'université.|她在大学学习。|L'université est près de la gare.|大学在车站附近。
un lycée|高中|m|Mon frère est au lycée.|我的弟弟上高中。|Le lycée est fermé aujourd'hui.|高中今天不开门。
un collège|初中（法国学制）|m|Ma fille entre au collège.|我的女儿要上初中了。|Le collège est dans notre quartier.|初中在我们街区。
une crèche|托儿所|f|Le bébé va à la crèche.|宝宝去托儿所。|La crèche ouvre à sept heures.|托儿所七点开门。
une roue|车轮；轮子|f|La roue du vélo est crevée.|自行车轮胎扎破了。|Cette valise a quatre roues.|这个行李箱有四个轮子。
un pneu|轮胎|m|Le pneu est à plat.|轮胎没气了。|Il faut changer ce pneu.|需要换这个轮胎。
un frein|刹车；制动器|m|Les freins fonctionnent bien.|刹车运作正常。|Je vérifie les freins du vélo.|我检查自行车的刹车。` },
{ category: "交流、学习与娱乐", rows: `un film|电影；影片|m|Ce film est français.|这部电影是法国电影。|On regarde un film ce soir.|我们今晚看电影。
la musique|音乐|f|J'écoute de la musique.|我听音乐。|La musique est trop forte.|音乐太响了。
une chanson|歌曲|f|J'aime cette chanson.|我喜欢这首歌。|Elle chante une chanson.|她唱了一首歌。
un jeu|游戏；一套玩法|m|On fait un jeu ?|我们玩个游戏吗？|Ce jeu est amusant.|这个游戏很好玩。
un jouet|玩具|m|Range tes jouets.|收好玩具。|Ce jouet est pour le bébé.|这个玩具是给宝宝的。
un ballon|球；气球|m|Les enfants jouent au ballon.|孩子们在玩球。|Le ballon est rouge.|这个球是红色的。
un match|体育比赛|m|Le match commence à huit heures.|比赛八点开始。|Notre équipe a gagné le match.|我们队赢了比赛。
le sport|体育；运动|m|Je fais du sport.|我做运动。|Quel sport préfères-tu ?|你最喜欢哪项运动？
le football|足球|m|Il joue au football.|他踢足球。|Je regarde un match de football.|我看足球比赛。
le tennis|网球|m|Elle joue au tennis.|她打网球。|J'apprends le tennis.|我在学网球。
un club|俱乐部；社团|m|Je suis dans un club de sport.|我加入了运动俱乐部。|Le club se réunit le mardi.|社团每周二聚会。
une guitare|吉他|f|Il joue de la guitare.|他弹吉他。|Cette guitare est à moi.|这把吉他是我的。
un piano|钢琴|m|Elle joue du piano.|她弹钢琴。|Le piano est dans le salon.|钢琴在客厅里。
un écran|屏幕|m|Mon écran est cassé.|我的屏幕坏了。|Regarde l'écran.|看屏幕。
la télévision / la télé|电视|f|J'allume la télévision.|我打开电视。|Elle regarde la télé.|她在看电视。
la radio|广播；收音机|f|J'écoute la radio.|我听广播。|Baisse la radio.|把收音机声音调小。
une caméra|摄像机；摄像头|f|La caméra est allumée.|摄像头开着。|Regarde la caméra.|看摄像头。
une vidéo|视频|f|Je regarde une vidéo.|我看一个视频。|Cette vidéo dure deux minutes.|这个视频长两分钟。
un dessin|图画；素描|m|Ton dessin est joli.|你的画很漂亮。|L'enfant fait un dessin.|孩子在画画。
une image|图像；图片|f|Regarde cette image.|看看这张图片。|L'image est floue.|图像模糊了。
un appareil photo|照相机|m|J'ai oublié mon appareil photo.|我忘带照相机了。|Cet appareil photo est léger.|这台照相机很轻。
Internet|互联网|m|Je cherche sur Internet.|我在网上搜索。|Internet ne fonctionne pas.|网络用不了。
un site|网站；地点|m|Ce site est utile.|这个网站很有用。|Nous visitons un site historique.|我们参观一处历史遗址。
une application|应用程序；应用|f|J'ouvre l'application.|我打开应用。|Cette application est gratuite.|这个应用免费。
un message|消息；留言|m|Je t'envoie un message.|我给你发消息。|J'ai reçu ton message.|我收到你的消息了。
un courrier|邮件；信件|m|Le courrier est arrivé.|邮件到了。|Envoyez la demande par courrier.|请邮寄申请。
une lettre|信；字母|f|J'écris une lettre.|我写一封信。|Ce mot contient cinq lettres.|这个词有五个字母。
une enveloppe|信封|f|Mets la lettre dans l'enveloppe.|把信放进信封。|Écris l'adresse sur l'enveloppe.|在信封上写地址。
un timbre|邮票|m|Je voudrais deux timbres.|我想要两张邮票。|Colle le timbre ici.|把邮票贴在这里。
une carte postale|明信片|f|J'envoie une carte postale.|我寄一张明信片。|Cette carte postale montre Paris.|这张明信片上是巴黎。
un numéro|号码；编号|m|Quel est ton numéro ?|你的号码是多少？|J'ai composé le mauvais numéro.|我拨错号码了。
un appel|电话呼叫；呼吁|m|J'ai manqué ton appel.|我没接到你的电话。|Je dois passer un appel.|我得打个电话。
un code|代码；密码；编码|m|Entrez votre code.|请输入密码。|Quel est le code postal ?|邮政编码是多少？
un lien|链接；联系|m|Cliquez sur le lien.|请点击链接。|Je t'envoie le lien.|我把链接发给你。
un clavier|键盘|m|Mon clavier est français.|我的键盘是法式键盘。|Une touche du clavier ne marche pas.|键盘上一个键失灵了。
une imprimante|打印机|f|L'imprimante manque de papier.|打印机缺纸了。|Cette imprimante imprime en couleur.|这台打印机能彩色打印。
une batterie|充电电池；架子鼓|f|La batterie est vide.|电池没电了。|Mon téléphone a encore de la batterie.|我的手机还有电。
un réglage|设置；调节|m|Ouvrez les réglages.|打开设置。|Ce réglage change le volume.|这项设置改变音量。
une page|页面；书页|f|Ouvrez le livre à la page dix.|把书翻到第十页。|Cette page ne se charge pas.|这个网页加载不出来。
une phrase|句子|f|Répétez cette phrase.|请重复这句话。|Écrivez une phrase simple.|写一个简单句。
un cours|课程；课堂|m|J'ai un cours de français.|我有一节法语课。|Le cours commence bientôt.|快要上课了。
une leçon|一课；教训|f|Je révise ma leçon.|我复习功课。|C'est une bonne leçon pour moi.|这对我是个教训。
un exercice|练习；运动|m|Faites cet exercice.|做这个练习。|Cet exercice est facile.|这个练习很简单。
un élève|学生（中小学等）|m|Cet élève travaille bien.|这个学生学习很好。|Les élèves entrent en classe.|学生们走进教室。
une classe|班级；课堂|f|Je suis en classe.|我在上课。|Notre classe compte vingt élèves.|我们班有二十名学生。
une matière|学科；材料物质|f|Quelle est ta matière préférée ?|你最喜欢哪门课？|Cette matière est douce.|这种材料很柔软。
une note|笔记；分数；音符|f|Je prends des notes.|我记笔记。|Elle a une bonne note.|她得了好分数。
un tableau|黑板；表格；画作|m|Regardez le tableau.|看黑板。|Ce tableau est célèbre.|这幅画很有名。
un cahier|练习本；笔记本|m|Ouvrez votre cahier.|打开练习本。|J'écris les mots dans mon cahier.|我把单词写进笔记本。
une liste|清单；名单|f|Je prépare la liste des courses.|我列购物清单。|Votre nom est sur la liste.|您的名字在名单上。` },
{ category: "自然与动物", rows: `l'air|空气；样子|m|J'ai besoin d'air frais.|我需要新鲜空气。|Tu as l'air fatigué.|你看起来很累。
le ciel|天空|m|Le ciel est bleu.|天空是蓝色的。|Il regarde le ciel.|他仰望天空。
le soleil|太阳；阳光|m|Il y a du soleil.|阳光明媚。|Le soleil se couche.|太阳落山了。
la pluie|雨|f|La pluie commence.|开始下雨了。|Nous marchons sous la pluie.|我们在雨中走路。
une étoile|星星；星级|f|On voit les étoiles.|我们能看见星星。|C'est un hôtel trois étoiles.|这是一家三星级酒店。
la lune|月亮|f|La lune est pleine.|月亮是圆的。|Regarde la lune ce soir.|今晚看看月亮。
la mer|海；大海|f|La mer est calme.|海面平静。|Nous allons à la mer.|我们去海边。
une fleur|花|f|Ces fleurs sentent bon.|这些花很香。|J'offre des fleurs.|我送鲜花。
un arbre|树|m|Cet arbre est grand.|这棵树很高。|Nous restons sous l'arbre.|我们待在树下。
une plante|植物|f|J'arrose les plantes.|我给植物浇水。|Cette plante a besoin de lumière.|这种植物需要光照。
l'herbe|草；香草|f|L'herbe est mouillée.|草是湿的。|Je m'assieds dans l'herbe.|我坐在草地上。
le bois|木材；树林|m|Cette table est en bois.|这张桌子是木制的。|Nous marchons dans le bois.|我们在树林里走路。
une pierre|石头|f|Il y a une pierre sur le chemin.|小路上有一块石头。|Cette maison est en pierre.|这座房子是石砌的。
le sable|沙子|m|Les enfants jouent dans le sable.|孩子们在沙子里玩。|J'ai du sable dans mes chaussures.|我鞋子里进沙了。
une source|源头；泉水；信息来源|f|L'eau vient d'une source.|水来自泉眼。|Quelle est la source de cette information ?|这条信息的来源是什么？
un champ|田地；表单栏位|m|Les vaches sont dans le champ.|奶牛在田里。|Remplissez ce champ.|请填写这一栏。
un terrain|地块；场地|m|Les enfants sont sur le terrain de sport.|孩子们在运动场上。|Ce terrain est à vendre.|这块地正在出售。
un espace|空间；空格|m|Il manque d'espace ici.|这里空间不足。|Laissez un espace entre les mots.|单词之间留空格。
une ombre|影子；阴凉|f|Il fait frais à l'ombre.|阴凉处很凉快。|Je vois ton ombre.|我看见你的影子。
la chaleur|热；热量|f|Je supporte mal la chaleur.|我不耐热。|La chaleur entre par la fenêtre.|热气从窗户进来。
la lumière|光；灯光|f|Allume la lumière.|开灯。|Cette pièce manque de lumière.|这个房间采光不足。
une couleur|颜色|f|Quelle couleur préférez-vous ?|您喜欢什么颜色？|J'aime cette couleur.|我喜欢这个颜色。
un animal|动物|m|Tu as un animal ?|你养动物吗？|Les animaux sont interdits ici.|这里禁止带动物。
un chien|狗|m|Je promène mon chien.|我遛狗。|Ce chien est gentil.|这只狗很温顺。
un chat|猫|m|Le chat dort.|猫在睡觉。|Mon chat est noir.|我的猫是黑色的。
un cheval|马|m|Elle monte à cheval.|她骑马。|Le cheval court.|马在奔跑。
un oiseau|鸟|m|Un oiseau chante.|一只鸟在鸣叫。|Les oiseaux volent.|鸟儿在飞翔。
une vache|奶牛；母牛|f|Les vaches mangent de l'herbe.|牛吃草。|Cette ferme a dix vaches.|这个农场有十头奶牛。
un cochon|猪|m|Le cochon est dans la ferme.|猪在农场里。|Les enfants regardent les cochons.|孩子们看着猪。
une poule|母鸡|f|La poule pond un œuf.|母鸡下了一颗蛋。|Nous avons trois poules.|我们养了三只母鸡。
un coq|公鸡|m|Le coq chante le matin.|公鸡早晨打鸣。|Ce coq a de belles plumes.|这只公鸡羽毛漂亮。
un canard|鸭子|m|Les canards nagent sur le lac.|鸭子在湖面游水。|Je vois un canard.|我看到一只鸭子。
un lapin|兔子|m|Le lapin mange une carotte.|兔子吃胡萝卜。|Mon lapin est blanc.|我的兔子是白色的。
un mouton|绵羊|m|Les moutons sont dans le champ.|绵羊在田里。|Ce mouton a une laine épaisse.|这只羊的毛很厚。
une chèvre|山羊|f|La chèvre mange de l'herbe.|山羊吃草。|Ce fromage est au lait de chèvre.|这种奶酪用山羊奶制成。
une souris|老鼠；电脑鼠标|f|La souris se cache.|老鼠藏起来了。|Cliquez avec la souris.|请用鼠标点击。
un rat|大鼠|m|Il y a un rat dans la cave.|地下室里有只大老鼠。|Le rat sort la nuit.|大老鼠夜里出来。
une mouche|苍蝇|f|Une mouche entre par la fenêtre.|一只苍蝇从窗户飞进来。|Cette mouche me dérange.|这只苍蝇烦到我了。
une abeille|蜜蜂|f|Une abeille se pose sur la fleur.|一只蜜蜂停在花上。|Les abeilles font du miel.|蜜蜂酿蜜。
un moustique|蚊子|m|Un moustique m'a piqué.|一只蚊子叮了我。|Il y a des moustiques ce soir.|今晚有蚊子。
une fourmi|蚂蚁|f|Une fourmi marche sur la table.|一只蚂蚁在桌上爬。|Les fourmis portent de la nourriture.|蚂蚁搬运食物。
un insecte|昆虫|m|Cet insecte est petit.|这只昆虫很小。|Il observe les insectes.|他观察昆虫。
un serpent|蛇|m|Le serpent se cache dans l'herbe.|蛇藏在草丛里。|Nous voyons un serpent au zoo.|我们在动物园看到一条蛇。
un ours|熊|m|L'ours vit dans la forêt.|熊生活在森林里。|L'enfant a un ours en peluche.|孩子有一只毛绒熊。
un loup|狼|m|Le loup vit en groupe.|狼群居生活。|Ce conte parle d'un loup.|这个故事讲的是一只狼。
un singe|猴子|m|Le singe grimpe dans l'arbre.|猴子爬上树。|Les enfants regardent les singes.|孩子们看着猴子。
un papillon|蝴蝶|m|Un papillon vole dans le jardin.|一只蝴蝶在花园里飞。|Ce papillon est bleu.|这只蝴蝶是蓝色的。
une patte|动物的爪或腿|f|Le chien lève la patte.|狗抬起一只爪子。|Le chat a mal à la patte.|猫的爪子疼。
une aile|翅膀；机翼|f|L'oiseau ouvre ses ailes.|鸟张开翅膀。|Je vois l'aile de l'avion.|我看见飞机的机翼。
une queue|尾巴；队伍|f|Le chien remue la queue.|狗摇着尾巴。|Il faut faire la queue.|需要排队。` },
{ category: "常用状态与评价", rows: `bon|好的；好吃的|adj|C'est un bon restaurant.|这是家好餐馆。|Ce pain est bon.|这面包很好吃。
mauvais|坏的；不好的|adj|C'est une mauvaise idée.|这是个坏主意。|Il fait mauvais aujourd'hui.|今天天气不好。
beau|美丽的；晴朗的|adj|C'est un beau jardin.|这是个美丽的花园。|Il fait beau.|天气晴朗。
joli|漂亮的；好看的|adj|Cette robe est jolie.|这条连衣裙很漂亮。|C'est un joli village.|这是个漂亮的村庄。
jeune|年轻的|adj|Il est encore jeune.|他还年轻。|C'est une jeune entreprise.|这是一家年轻的企业。
seul|独自的；唯一的|adj|Je voyage seul.|我独自旅行。|C'est le seul bus disponible.|这是唯一可乘的公交车。
prêt|准备好的|adj|Tu es prêt ?|你准备好了吗？|Le repas est prêt.|饭做好了。
vrai|真的；真实的|adj|C'est vrai.|这是真的。|Il raconte une histoire vraie.|他讲述一个真实的故事。
faux|假的；错误的|adj|Cette réponse est fausse.|这个答案是错的。|Ce billet est faux.|这张钞票是假的。
sûr|确定的；安全的|adj|Tu es sûr ?|你确定吗？|Cet endroit est sûr.|这个地方很安全。
possible|可能的；可行的|adj|C'est possible.|这是可能的。|Un remboursement est-il possible ?|可以退款吗？
important|重要的|adj|C'est très important.|这很重要。|J'ai un rendez-vous important.|我有个重要的约会。
cher|昂贵的；亲爱的|adj|C'est trop cher.|这太贵了。|Chère Marie, comment vas-tu ?|亲爱的玛丽，你好吗？
gratuit|免费的|adj|L'entrée est gratuite.|入场免费。|Ce service est gratuit.|这项服务免费。
libre|自由的；有空的；空着的|adj|Cette place est libre.|这个座位空着。|Tu es libre demain ?|你明天有空吗？
occupé|忙的；被占用的|adj|Je suis occupé maintenant.|我现在很忙。|Cette table est occupée.|这张桌子有人了。
plein|满的|adj|Le bus est plein.|公交车满了。|Mon verre est plein.|我的杯子满了。
vide|空的|adj|La bouteille est vide.|瓶子空了。|Cette chambre est vide.|这个房间空着。
propre|干净的；自己的|adj|La chambre est propre.|房间很干净。|J'ai ma propre voiture.|我有自己的车。
sale|脏的|adj|Mes chaussures sont sales.|我的鞋子脏了。|Cette table est sale.|这张桌子很脏。
ouvert|开着的；开放的|adj|Le magasin est ouvert.|商店开着门。|La fenêtre est ouverte.|窗户开着。
fermé|关着的；不营业的|adj|La porte est fermée.|门关着。|Le musée est fermé le lundi.|博物馆星期一闭馆。
content|高兴的；满意的|adj|Je suis content de te voir.|我很高兴见到你。|Elle est contente du résultat.|她对结果很满意。
triste|难过的；悲伤的|adj|Ce film est triste.|这部电影很悲伤。|Pourquoi es-tu triste ?|你为什么难过？
désolé|抱歉的；遗憾的|adj|Je suis désolé du retard.|很抱歉我迟到了。|Désolé, je ne peux pas venir.|抱歉，我来不了。
gentil|友善的；乖巧的|adj|C'est gentil de votre part.|您真好。|Ce chien est gentil.|这只狗很温顺。
méchant|刻薄的；凶的|adj|Ce chien n'est pas méchant.|这只狗不凶。|Ne sois pas méchant.|别那么刻薄。
sympa|友好随和的；不错的（口语）|adj|Ton voisin est sympa.|你的邻居很友好。|C'est un café sympa.|这是家不错的咖啡馆。
drôle|好笑的；奇怪的|adj|Cette histoire est drôle.|这个故事很好笑。|Ça fait un drôle de bruit.|它发出一种奇怪的声音。
amusant|有趣好玩的|adj|Ce jeu est amusant.|这个游戏很好玩。|C'est amusant d'apprendre ensemble.|一起学习很好玩。
intéressant|有意思的；值得关注的|adj|Ce livre est intéressant.|这本书很有意思。|C'est une offre intéressante.|这是个值得考虑的报价。
ennuyeux|无聊的；烦人的|adj|Ce film est ennuyeux.|这部电影很无聊。|C'est ennuyeux d'attendre.|等待真烦人。
calme|平静的；安静的|adj|La rue est calme.|街道很安静。|Reste calme.|保持冷静。
nerveux|紧张的；焦躁的|adj|Je suis nerveux avant l'examen.|考试前我很紧张。|Il devient nerveux.|他变得焦躁。
malade|生病的|adj|Je suis malade aujourd'hui.|我今天病了。|Son enfant est malade.|他的孩子生病了。
vivant|活着的；生动的|adj|Cet arbre est encore vivant.|这棵树还活着。|C'est un quartier vivant.|这是个充满活力的街区。
mort|死的；没电的（口语）|adj|La plante est morte.|植物枯死了。|Mon téléphone est mort.|我的手机没电了。
riche|富有的；丰富的|adj|Ce pays est riche.|这个国家富裕。|Ce repas est riche en légumes.|这顿饭里蔬菜丰富。
pauvre|贫穷的；可怜的|adj|Cette famille est pauvre.|这家人很穷。|Le pauvre, il a perdu ses clés.|真可怜，他弄丢了钥匙。
fort|强壮的；强烈的；响亮的|adj|Le café est fort.|咖啡很浓。|Parlez plus fort.|请说得大声一点。
faible|弱的；微弱的|adj|Le signal est faible.|信号很弱。|Je me sens faible.|我感觉没力气。
doux|柔和的；柔软的；温和的|adj|Ce tissu est doux.|这种布料很柔软。|Le temps est doux.|天气温和。
dur|硬的；艰难的|adj|Ce pain est dur.|这个面包很硬。|C'est un travail dur.|这是份艰苦的工作。
sec|干的；干燥的|adj|Le linge est sec.|衣服干了。|L'air est sec.|空气干燥。
mouillé|湿的；被弄湿的|adj|Mes cheveux sont mouillés.|我的头发湿了。|Le sol est mouillé.|地面湿了。
frais|新鲜的；凉爽的|adj|Le pain est frais.|面包是新鲜的。|Il fait frais ce matin.|今天早晨很凉爽。
tiède|温的；不冷不热的|adj|L'eau est tiède.|水是温的。|Mon café est tiède.|我的咖啡不太热了。
premier|第一的；最初的|adj|C'est mon premier voyage.|这是我第一次旅行。|Prenez la première rue à droite.|走右边第一条街。
dernier|最后的；上一个的|adj|C'est le dernier train.|这是末班火车。|Je suis venu la semaine dernière.|我上周来过。
prochain|下一个的；即将到来的|adj|Je pars la semaine prochaine.|我下周出发。|Descendez au prochain arrêt.|在下一站下车。` },
{ category: "描述与特征", rows: `long|长的|adj|Le voyage est long.|旅程很长。|Elle a les cheveux longs.|她留着长发。
court|短的|adj|Ce film est court.|这部电影很短。|Je préfère les manches courtes.|我更喜欢短袖。
large|宽的；宽松的|adj|Cette rue est large.|这条街很宽。|Ce pantalon est trop large.|这条裤子太宽松了。
étroit|狭窄的；窄的|adj|Le couloir est étroit.|走廊很窄。|Ces chaussures sont trop étroites.|这些鞋子太窄了。
haut|高的；在高处的|adj|Ce mur est haut.|这面墙很高。|L'étagère est trop haute.|架子太高了。
bas|低的；低处的|adj|Le plafond est bas.|天花板很低。|Les prix sont bas.|价格低。
épais|厚的；浓稠的|adj|Ce livre est épais.|这本书很厚。|La soupe est épaisse.|汤很浓稠。
fin|薄的；细的；精细的|adj|Ce papier est très fin.|这种纸很薄。|Coupez de fines tranches.|切成薄片。
rond|圆的|adj|La table est ronde.|桌子是圆的。|Ce miroir est rond.|这面镜子是圆的。
carré|方形的|adj|La pièce est carrée.|房间是方形的。|Cette table est carrée.|这张桌子是方的。
plat|平的；平坦的|adj|Le terrain est plat.|地面平坦。|Ces chaussures ont des talons plats.|这些鞋子的鞋跟是平的。
droit|直的；右边的|adj|Continuez tout droit.|一直直走。|J'ai mal au bras droit.|我的右臂疼。
gauche|左边的|adj|Tournez à gauche.|向左转。|La porte est sur votre gauche.|门在您的左边。
blanc|白色的|adj|Je porte une chemise blanche.|我穿着白衬衫。|Un verre de vin blanc.|一杯白葡萄酒。
noir|黑色的|adj|Mon sac est noir.|我的包是黑色的。|Je prends un café noir.|我要黑咖啡。
rouge|红色的|adj|Le feu est rouge.|信号灯是红色的。|Elle porte une robe rouge.|她穿着红色连衣裙。
bleu|蓝色的|adj|Le ciel est bleu.|天空是蓝色的。|J'aime cette veste bleue.|我喜欢这件蓝色外套。
vert|绿色的|adj|Les feuilles sont vertes.|叶子是绿色的。|Le feu passe au vert.|信号灯变绿了。
jaune|黄色的|adj|Le citron est jaune.|柠檬是黄色的。|Je prends le tee-shirt jaune.|我要那件黄色T恤。
rose|粉红色的；玫瑰（名词）|adj|Cette robe est rose.|这条连衣裙是粉红色的。|Il offre une rose.|他送了一朵玫瑰。
gris|灰色的|adj|Le ciel est gris.|天空灰蒙蒙的。|Mon manteau est gris.|我的大衣是灰色的。
marron|棕色的；栗子（名词）|adj|Elle a les yeux marron.|她有棕色的眼睛。|Ces chaussures sont marron.|这些鞋子是棕色的。
violet|紫色的|adj|Cette fleur est violette.|这朵花是紫色的。|J'ai un pull violet.|我有件紫色毛衣。
blond|金黄色头发的|adj|Elle est blonde.|她是金发。|Son fils a les cheveux blonds.|他儿子有金色的头发。
brun|深棕色的；深色头发的|adj|Il a les cheveux bruns.|他有深棕色的头发。|Elle est brune.|她是深色头发。
roux|红褐色头发的|adj|Mon frère est roux.|我兄弟是红发。|Ce chat a le poil roux.|这只猫是红褐色的毛。
clair|明亮的；浅色的；清楚的|adj|Cette pièce est claire.|这个房间很明亮。|Votre explication est claire.|您的解释很清楚。
foncé|深色的|adj|Je préfère le bleu foncé.|我更喜欢深蓝色。|Ce pantalon est trop foncé.|这条裤子的颜色太深了。
coloré|色彩丰富的|adj|Le marché est très coloré.|集市色彩缤纷。|Elle porte une robe colorée.|她穿着色彩鲜艳的连衣裙。
silencieux|无声的；安静不说话的|adj|Ce moteur est silencieux.|这台发动机很安静。|Il reste silencieux.|他保持沉默。
bruyant|吵闹的|adj|Ce restaurant est bruyant.|这家餐馆很吵。|Mes voisins sont bruyants.|我的邻居很吵。
lisse|光滑的|adj|Cette pierre est lisse.|这块石头很光滑。|La surface est lisse.|表面很光滑。
salé|咸的|adj|La soupe est trop salée.|汤太咸了。|Je préfère les biscuits salés.|我更喜欢咸饼干。
sucré|甜的；加糖的|adj|Ce dessert est très sucré.|这个甜点很甜。|Je bois du thé sucré.|我喝加糖的茶。
amer|苦的|adj|Ce café est amer.|这咖啡很苦。|Le chocolat noir peut être amer.|黑巧克力可能发苦。
acide|酸的|adj|Ce fruit est acide.|这个水果很酸。|La sauce est trop acide.|酱汁太酸了。
piquant|辛辣的；刺人的|adj|Ce plat est piquant.|这道菜很辣。|Je préfère une sauce moins piquante.|我更喜欢辣味淡一点的酱汁。
mûr|成熟的（水果、人等）|adj|Ces fruits sont mûrs.|这些水果熟了。|Cette banane n'est pas mûre.|这根香蕉还没熟。
cru|生的；未烹煮的|adj|Je mange des légumes crus.|我吃生蔬菜。|Ce poisson se mange cru.|这种鱼生吃。
cuit|做熟的；煮好的|adj|Le riz est cuit.|米饭熟了。|La viande est bien cuite.|肉做得很熟。
délicieux|美味的|adj|Ce gâteau est délicieux.|这个蛋糕非常好吃。|La soupe est délicieuse.|汤很美味。
confortable|舒适的|adj|Ce lit est confortable.|这张床很舒服。|Ces chaussures sont confortables.|这些鞋子很舒服。
pratique|实用的；方便的|adj|Ce sac est pratique.|这个包很实用。|Le métro est pratique ici.|这里坐地铁很方便。
proche|近的；亲近的|adj|La gare est proche.|车站很近。|C'est une amie proche.|她是很亲近的朋友。
lointain|遥远的|adj|Il rêve d'un pays lointain.|他向往一个遥远的国家。|C'est un souvenir lointain.|这是久远的回忆。
international|国际的|adj|C'est un aéroport international.|这是一个国际机场。|Elle travaille dans une équipe internationale.|她在一个国际团队中工作。
étranger|外国的；陌生的；外国人|adj|Il apprend une langue étrangère.|他在学一门外语。|Je suis étranger ici.|我是这里的外来者。
français|法国的；法语|adj|Je parle français.|我说法语。|Elle est française.|她是法国人。
anglais|英国的；英语|adj|Parlez-vous anglais ?|您说英语吗？|Ce livre est en anglais.|这本书是英语的。
chinois|中国的；中文|adj|Je parle chinois.|我说中文。|C'est un restaurant chinois.|这是一家中餐馆。` },
{ category: "聊天常用概念", rows: `un genre|种类；风格；性别（语法等）|m|Quel genre de musique aimes-tu ?|你喜欢哪种音乐？|Ce n'est pas mon genre.|这不是我的风格。
un ordre|顺序；命令|m|Mettez les mots dans l'ordre.|把单词按顺序排列。|Il donne un ordre.|他下达命令。
le reste|剩下的部分；其余|m|Garde le reste.|把剩下的留着。|Je ferai le reste demain.|我明天做剩下的。
un tour|一圈；轮次|m|C'est ton tour.|轮到你了。|On fait un tour ?|我们出去转转吗？
la vérité|真相；事实|f|Dis-moi la vérité.|告诉我真相。|C'est la vérité.|这就是事实。
une partie|部分；一局游戏|f|J'ai lu une partie du livre.|我读了这本书的一部分。|On fait une partie ?|我们玩一局吗？
un plaisir|愉快；乐趣|m|C'est un plaisir de vous rencontrer.|很高兴认识您。|Avec plaisir !|很乐意！
une aide|帮助；援助|f|J'ai besoin d'aide.|我需要帮助。|Merci pour votre aide.|谢谢您的帮助。
une faute|过错；语言错误|f|Ce n'est pas ta faute.|这不是你的错。|Il y a une faute dans cette phrase.|这句话里有个错误。
un bureau|办公室；书桌|m|Je suis au bureau.|我在办公室。|Le livre est sur mon bureau.|书在我的书桌上。
un rêve|梦；梦想|m|J'ai fait un beau rêve.|我做了个美梦。|Mon rêve est de voyager.|我的梦想是旅行。
un esprit|头脑；精神|m|J'ai l'esprit occupé.|我脑子里有事。|Elle a l'esprit ouvert.|她思想开放。
un plan|计划；平面图|m|Quel est le plan pour demain ?|明天有什么安排？|Voici le plan de la ville.|这是城市平面图。
la paix|和平；安宁|f|Laisse-moi en paix.|让我安静一会儿。|Ils souhaitent vivre en paix.|他们希望和平生活。
un rapport|报告；关系|m|Je prépare un rapport.|我在写报告。|Quel est le rapport avec ma question ?|这和我的问题有什么关系？
un retour|返回；回程|m|Bon retour !|回程顺利！|Je prends un billet aller-retour.|我买一张往返票。
une voix|嗓音；人声|f|Elle a une belle voix.|她的声音很好听。|Je reconnais ta voix.|我认得你的声音。
un bout|一小块；末端|m|Un bout de pain suffit.|一小块面包就够了。|La gare est au bout de la rue.|车站在街道尽头。
un sujet|话题；主题|m|Changeons de sujet.|我们换个话题吧。|C'est le sujet du cours.|这是这节课的主题。
un sens|意思；方向；感官|m|Quel est le sens de ce mot ?|这个词是什么意思？|Vous allez dans le mauvais sens.|您走反方向了。
une salle|厅；用于某用途的房间|f|La salle est pleine.|大厅满了。|Où est la salle d'attente ?|候诊室在哪里？
une sorte|种类；一种|f|Quelle sorte de thé voulez-vous ?|您要哪种茶？|Il vend toutes sortes de fruits.|他卖各种水果。
un fond|底部；背景|m|Les clés sont au fond du sac.|钥匙在包底。|L'image a un fond blanc.|图片背景是白色的。
une situation|情况；处境|f|La situation est difficile.|情况很困难。|Expliquez-moi la situation.|请向我说明情况。
un accident|事故；意外|m|Il y a eu un accident.|发生了一起事故。|Heureusement, l'accident n'est pas grave.|幸好事故不严重。
le silence|安静；沉默|m|J'ai besoin de silence.|我需要安静。|Elle reste en silence.|她保持沉默。
un groupe|小组；一群；乐队|m|Nous voyageons en groupe.|我们组团旅行。|J'aime ce groupe de musique.|我喜欢这个乐队。
un secret|秘密|m|C'est un secret.|这是个秘密。|Garde ce secret.|保守这个秘密。
une parole|话语；说话权；歌词|f|Je vous donne la parole.|请您发言。|Je connais les paroles de cette chanson.|我知道这首歌的歌词。
un coin|角落；街角|m|La boutique est au coin de la rue.|商店在街角。|Assieds-toi dans ce coin.|坐在这个角落。
une forme|形状；状态|f|Quelle est la forme de la table ?|桌子是什么形状？|Je suis en pleine forme.|我的状态很好。
un bruit|声音；噪声|m|Quel est ce bruit ?|这是什么声音？|Ne fais pas de bruit.|别出声。
une impression|印象；感觉；打印|f|J'ai une bonne impression.|我的印象不错。|L'impression du document est terminée.|文件打印完成了。
une vue|视力；视野；景色|f|La vue est magnifique.|景色很美。|J'ai une bonne vue.|我的视力很好。
un moyen|办法；手段|m|Il faut trouver un moyen.|得找个办法。|Le vélo est un moyen de transport.|自行车是一种交通工具。
un signe|标志；信号；手势|m|Fais-moi signe.|向我示意一下。|C'est un bon signe.|这是个好迹象。
un danger|危险|m|Il n'y a pas de danger.|没有危险。|Attention, danger !|注意，危险！
un bord|边缘；岸边|m|Reste loin du bord.|离边缘远一点。|Nous marchons au bord de l'eau.|我们在水边走路。
le bonheur|幸福|m|Je vous souhaite beaucoup de bonheur.|祝你们幸福。|Quel bonheur de te revoir !|再次见到你真开心！
un but|目的；球门；进球|m|Quel est le but de la visite ?|此次访问的目的是什么？|Il marque un but.|他进了一个球。
un système|系统；体制|m|Le système fonctionne bien.|系统运行良好。|Ce système est simple.|这个系统很简单。
un ennui|无聊；麻烦|m|Il cherche à éviter les ennuis.|他想避免麻烦。|L'ennui me fait dormir.|无聊让我犯困。
un sentiment|感情；感觉|m|J'ai un sentiment étrange.|我有一种奇怪的感觉。|Elle exprime ses sentiments.|她表达自己的感情。
une moitié|一半|f|Je prends la moitié.|我要一半。|Coupe la pomme en deux moitiés.|把苹果切成两半。
un bain|泡澡；浴缸里的水|m|Je prends un bain.|我泡澡。|Le bain est prêt.|洗澡水准备好了。
l'art|艺术|m|Elle aime l'art.|她喜欢艺术。|Nous visitons un musée d'art.|我们参观美术馆。
une blague|笑话；玩笑|f|C'est une blague.|这是个玩笑。|Il raconte une blague.|他讲了个笑话。
l'avenir|未来；前途|m|Je pense à l'avenir.|我在考虑未来。|Elle prépare son avenir.|她在规划自己的未来。
une course|跑步比赛；购物（复数）|f|Je fais les courses.|我去买日用品。|La course commence à neuf heures.|赛跑九点开始。
une manière|方式；举止|f|Il y a une autre manière.|还有另一种方法。|Elle parle d'une manière claire.|她说得很清楚。` },
{ category: "办事与常见职业", rows: `un secours|救助；救援|m|Au secours !|救命！|Les secours arrivent.|救援人员来了。
un rôle|角色；作用|m|Quel est votre rôle ?|您负责什么角色？|Elle joue un rôle important.|她起着重要作用。
une action|行动；行为|f|Il faut passer à l'action.|需要采取行动。|C'est une bonne action.|这是件好事。
un tort|错误；过失|m|Tu as tort.|你错了。|Je reconnais mes torts.|我承认自己的过错。
une machine|机器|f|Cette machine ne marche pas.|这台机器不工作。|Comment utilise-t-on cette machine ?|这台机器怎么用？
une cigarette|香烟|f|Il ne fume plus de cigarettes.|他不再抽烟了。|Éteignez votre cigarette.|请熄灭香烟。
un morceau|一块；一段|m|Un morceau de fromage.|一块奶酪。|J'écoute un morceau de musique.|我听一首乐曲。
une demande|请求；申请|f|J'envoie une demande.|我提交一份申请。|Votre demande est acceptée.|您的申请获批了。
un espoir|希望；盼望|m|Il garde espoir.|他仍抱有希望。|J'ai bon espoir de réussir.|我很有希望能成功。
une information|信息；消息|f|Merci pour l'information.|谢谢您提供信息。|Où trouver cette information ?|哪里能找到这条信息？
des toilettes|厕所；洗手间|f|Où sont les toilettes ?|洗手间在哪里？|Les toilettes sont au fond.|洗手间在里面尽头。
une opération|手术；操作|f|L'opération s'est bien passée.|手术很顺利。|Cette opération prend deux minutes.|这个操作需要两分钟。
une position|位置；姿势；立场|f|Changez de position.|换个姿势。|Envoyez-moi votre position.|请把您的位置发给我。
une excuse|借口；道歉|f|Ce n'est pas une excuse.|这不是借口。|Je vous présente mes excuses.|我向您道歉。
un regard|目光；一瞥|m|Son regard est calme.|他的目光平静。|Elle me lance un regard.|她看了我一眼。
un mensonge|谎言|m|Ce n'est pas un mensonge.|这不是谎话。|Il avoue son mensonge.|他承认自己说了谎。
la mémoire|记忆；存储内存|f|J'ai une bonne mémoire.|我的记忆力很好。|La mémoire du téléphone est pleine.|手机存储空间满了。
un goût|味道；喜好|m|Cette soupe a bon goût.|这个汤味道很好。|Nous avons les mêmes goûts.|我们的喜好一样。
une importance|重要性|f|Cela a peu d'importance.|那不太重要。|Je comprends l'importance de ce choix.|我理解这个选择的重要性。
un niveau|水平；等级|m|Quel est votre niveau de français ?|您的法语水平如何？|Ce cours est adapté à mon niveau.|这门课适合我的水平。
un souci|担心；烦心事|m|Pas de souci !|没问题！|J'ai un souci avec mon téléphone.|我的手机出了点问题。
une odeur|气味|f|Quelle est cette odeur ?|这是什么气味？|J'aime l'odeur du pain frais.|我喜欢新鲜面包的香味。
un programme|节目；程序；安排|m|Quel est le programme de demain ?|明天有什么安排？|Ce programme passe à la télévision.|这个节目在电视上播放。
un objet|物品；对象|m|J'ai perdu un objet.|我丢了一件东西。|À quoi sert cet objet ?|这个东西有什么用？
une valeur|价值；数值|f|Cette montre a de la valeur.|这块手表有价值。|Entrez une valeur entre un et dix.|输入一到十之间的数值。
un poids|重量；体重|m|Quel est le poids de votre bagage ?|您的行李多重？|Je vérifie mon poids.|我称一下体重。
un nombre|数量；数目|m|Quel est le nombre de participants ?|参加者有多少人？|Choisissez un nombre.|选一个数字。
une qualité|质量；优点|f|Ce produit est de bonne qualité.|这个产品质量好。|Elle a beaucoup de qualités.|她有很多优点。
un produit|产品；商品|m|Ce produit est disponible.|这件商品有货。|Je cherche un produit pour nettoyer.|我在找清洁用品。
une pause|休息；暂停|f|On fait une pause ?|我们休息一下吗？|La pause dure dix minutes.|休息时间为十分钟。
un chef|负责人；厨师长|m|Je parle à mon chef.|我和上司说话。|Le chef prépare le plat.|厨师长准备这道菜。
un patron|老板；雇主|m|Le patron est absent.|老板不在。|Je demande à mon patron.|我问一下老板。
un avocat|律师；牛油果|m|Je consulte un avocat.|我咨询律师。|Je prépare une salade d'avocat.|我做牛油果沙拉。
un professeur|老师；教授|m|Mon professeur parle lentement.|我的老师说话很慢。|Elle est professeur de français.|她是法语老师。
un étudiant|大学生；高等教育学生|m|Je suis étudiant.|我是大学生。|Ce tarif est pour les étudiants.|这个价格适用于学生。
un serveur|服务员；计算机服务器|m|Le serveur apporte le menu.|服务员拿来菜单。|Le serveur informatique ne répond pas.|计算机服务器没有响应。
un vendeur|售货员；卖家|m|Je demande au vendeur.|我问售货员。|Le vendeur est aimable.|这位售货员很亲切。
un chauffeur|司机|m|Le chauffeur nous attend.|司机在等我们。|Je donne l'adresse au chauffeur.|我把地址告诉司机。
un directeur|经理；负责人；校长|m|Le directeur est en réunion.|经理正在开会。|Je voudrais voir le directeur.|我想见负责人。
un propriétaire|所有者；房东|m|J'appelle le propriétaire.|我给房东打电话。|Qui est le propriétaire du vélo ?|谁是这辆自行车的主人？
un journaliste|记者|m|Elle est journaliste.|她是记者。|Le journaliste pose une question.|记者提出问题。
un acteur|男演员；参与者|m|Cet acteur est connu.|这位演员很有名。|Il veut devenir acteur.|他想成为演员。
un artiste|艺术家|m|Cet artiste peint des paysages.|这位艺术家画风景。|Elle rencontre un artiste.|她见到一位艺术家。
un guide|导游；指南|m|Le guide parle français.|导游说法语。|J'achète un guide de voyage.|我买一本旅行指南。
un policier|警察人员|m|Le policier indique le chemin.|警察指路。|Je demande de l'aide à un policier.|我向一位警察求助。
un pompier|消防员|m|Les pompiers arrivent.|消防员来了。|Mon frère est pompier.|我的哥哥是消防员。
un dentiste|牙医|m|J'ai rendez-vous chez le dentiste.|我预约了看牙医。|Le dentiste examine mes dents.|牙医检查我的牙齿。
un coiffeur|理发师|m|Je vais chez le coiffeur.|我去理发。|Le coiffeur me coupe les cheveux.|理发师给我剪头发。
un secrétaire|秘书；文书人员|m|Le secrétaire prend le message.|秘书记下留言。|Je téléphone à la secrétaire.|我给女秘书打电话。
un artisan|手工艺人；技术工匠|m|Un artisan répare la porte.|一位工匠修门。|Ce meuble est fait par un artisan.|这件家具由工匠制作。` },
{ category: "生活动作补充", rows: `préparer|准备；做饭菜|v|Je prépare le dîner.|我在做晚饭。|Prépare tes affaires.|准备好你的东西。
laver|洗；清洗|v|Je lave les légumes.|我洗蔬菜。|Il faut laver cette chemise.|这件衬衫需要洗。
sauver|救助；挽救|v|Les pompiers sauvent le chat.|消防员救出猫。|Tu m'as sauvé la journée !|你帮我解决了今天的大麻烦！
battre|打；打败；搅打|v|Battez les œufs.|把鸡蛋打散。|Notre équipe a battu la leur.|我们队打败了他们队。
maintenir|维持；保持；按住|v|Maintenez le bouton enfoncé.|请按住按钮。|Je maintiens mon rendez-vous.|我保留原来的预约。
défendre|保护；为……辩护；禁止|v|Elle défend son ami.|她维护自己的朋友。|Il est défendu de fumer.|禁止吸烟。
libérer|释放；腾出|v|Je libère une place.|我腾出一个位置。|Il faut libérer de l'espace.|需要腾出空间。
débarrasser|清理；收走|v|Je débarrasse la table.|我收拾餐桌。|Vous pouvez débarrasser ces assiettes.|您可以收走这些盘子了。
se moquer|嘲笑；不在乎|v|Ne te moque pas de moi.|别嘲笑我。|Je me moque du prix.|我不在乎价格。
s'endormir|入睡；睡着|v|Le bébé s'endort.|宝宝睡着了。|Je m'endors tôt.|我很早就睡着了。
se concentrer|集中注意力|v|J'essaie de me concentrer.|我努力集中注意力。|Concentre-toi sur la question.|把注意力集中在问题上。
placer|安放；安排位置|v|Placez la chaise ici.|请把椅子放这里。|Je place les verres sur la table.|我把杯子摆在桌上。
accorder|给予；同意准许；调音|v|On m'accorde un délai.|我获准延期。|Il accorde sa guitare.|他给吉他调音。
élever|养育；抬高|v|Ils élèvent trois enfants.|他们养育三个孩子。|N'élève pas la voix.|别提高嗓门。
entraîner|训练；导致|v|Il entraîne une équipe.|他训练一支球队。|Ce retard entraîne des problèmes.|这次延误导致了问题。
piquer|刺；叮；有刺痛感|v|Un moustique m'a piqué.|一只蚊子叮了我。|Cette écharpe pique.|这条围巾扎人。
gâcher|糟蹋；浪费|v|Ne gâche pas la nourriture.|别浪费食物。|La pluie gâche la fête.|雨破坏了聚会的兴致。
concerner|涉及；与……有关|v|Cela vous concerne.|这件事与您有关。|Ce message concerne votre commande.|这条消息是关于您的订单的。
représenter|代表；表现|v|Je représente mon équipe.|我代表我的团队。|Que représente ce dessin ?|这幅画画的是什么？
rigoler|笑；开玩笑（口语）|v|Tu rigoles ?|你在开玩笑吗？|On a bien rigolé.|我们笑得很开心。
obéir|服从；听从|v|Le chien obéit bien.|这只狗很听话。|Il faut obéir aux règles.|必须遵守规则。
posséder|拥有|v|Elle possède une maison.|她拥有一套房子。|Je ne possède pas de voiture.|我没有车。
convenir|适合；合意；商定|v|Cette date me convient.|这个日期适合我。|Nous convenons d'un rendez-vous.|我们约定见面时间。
bloquer|堵住；锁住；卡住|v|Une voiture bloque la sortie.|一辆车堵住出口。|Mon compte est bloqué.|我的账户被锁了。
rattraper|追上；弥补|v|Je te rattrape plus tard.|我稍后追上你。|Il faut rattraper le retard.|得赶上进度。
planter|种植；插入|v|Je plante un arbre.|我种一棵树。|Elle plante des fleurs.|她种花。
informer|告知；通知|v|Merci de nous informer.|谢谢您通知我们。|Je vous informe du changement.|我通知您这一变更。
fêter|庆祝|v|On fête ton anniversaire.|我们庆祝你的生日。|Ils fêtent leur réussite.|他们庆祝成功。
indiquer|指出；指示；注明|v|Pouvez-vous m'indiquer le chemin ?|您能给我指路吗？|Le prix est indiqué ici.|价格标在这里。
examiner|检查；查看|v|Le médecin examine ma gorge.|医生检查我的喉咙。|Nous examinons votre demande.|我们在审核您的申请。
peindre|画；刷漆|v|Elle peint un paysage.|她画风景。|Je peins le mur en blanc.|我把墙刷成白色。
avaler|吞下；咽下|v|J'ai du mal à avaler.|我吞咽困难。|Il avale une gorgée d'eau.|他咽下一口水。
démarrer|启动；开始|v|La voiture ne démarre pas.|汽车发动不了。|Le cours démarre demain.|课程明天开始。
confirmer|确认；证实|v|Je confirme ma réservation.|我确认预订。|Pouvez-vous confirmer l'heure ?|您能确认时间吗？
réagir|作出反应|v|Comment a-t-il réagi ?|他有什么反应？|L'écran ne réagit pas.|屏幕没有反应。
déménager|搬家；搬迁|v|Je déménage samedi.|我星期六搬家。|Ils déménagent à Lyon.|他们搬去里昂。
enseigner|教；教授|v|Elle enseigne le français.|她教法语。|Il enseigne dans une école.|他在学校任教。
noter|记下；评分|v|Note mon numéro.|记下我的号码。|Le professeur note les exercices.|老师给练习评分。
verser|倒入；支付|v|Verse l'eau dans le verre.|把水倒进杯子里。|Je verse le loyer chaque mois.|我每月交房租。
autoriser|允许；授权|v|Les photos sont autorisées.|允许拍照。|Je vous autorise à entrer.|我允许您进入。
contenir|包含；装有|v|Ce plat contient du lait.|这道菜含牛奶。|La boîte contient six verres.|盒子里装着六个杯子。
hésiter|犹豫|v|J'hésite entre deux plats.|我在两道菜之间犹豫。|N'hésitez pas à demander.|请随时提问。
exprimer|表达|v|J'exprime mon avis.|我表达自己的意见。|Elle exprime sa joie.|她表达自己的喜悦。
dessiner|画画；描画|v|L'enfant dessine une maison.|孩子画了一座房子。|J'aime dessiner.|我喜欢画画。
cuire|烹煮；使熟|v|Faites cuire le riz.|把米饭煮熟。|Le gâteau cuit au four.|蛋糕在烤箱里烤着。
bouillir|沸腾；煮沸|v|L'eau bout.|水开了。|Faites bouillir de l'eau.|请烧些开水。
mélanger|混合；搅拌|v|Mélangez les ingrédients.|把配料混合。|Ne mélange pas ces vêtements.|别把这些衣服混在一起。
éplucher|去皮；削皮|v|J'épluche les pommes de terre.|我削土豆皮。|Épluche cette pomme.|把这个苹果削皮。
rembourser|退款；偿还|v|Pouvez-vous me rembourser ?|您能给我退款吗？|Je te rembourse demain.|我明天还你钱。
valider|确认生效；验证；检票|v|Validez votre ticket.|请刷票验证。|Cliquez pour valider la commande.|点击确认订单。` },
{ category: "表达程度与生活办事", rows: `est-ce que|用于构成一般疑问句|expr|Est-ce que vous parlez français ?|您说法语吗？|Est-ce que c'est ouvert ?|这里开门吗？
ouais|嗯；是啊（口语）|expr|Ouais, je viens.|嗯，我来。|Ouais, c'est une bonne idée.|是啊，这是个好主意。
debout|站着；起床|adv|Je reste debout.|我站着。|Debout, il est huit heures !|起床，八点了！
absolument|绝对地；完全地|adv|C'est absolument nécessaire.|这绝对有必要。|Vous avez absolument raison.|您完全正确。
simplement|简单地；只是|adv|Expliquez-le simplement.|请简单说明。|Je veux simplement comprendre.|我只是想理解。
immédiatement|立刻；马上|adv|Je pars immédiatement.|我马上出发。|Appelez immédiatement.|请立刻打电话。
finalement|最终；到最后|adv|Finalement, je reste ici.|最后我还是留在这里。|Il a finalement trouvé ses clés.|他终于找到了钥匙。
parfaitement|完美地；完全清楚地|adv|Je comprends parfaitement.|我完全理解。|Tout fonctionne parfaitement.|一切运行得很好。
apparemment|看来；从表面看|adv|Apparemment, le train est en retard.|看来火车晚点了。|Elle est apparemment absente.|看来她不在。
autrement|用别的方法；否则|adv|On peut faire autrement.|我们可以换个做法。|Dépêche-toi, autrement on sera en retard.|快点，否则我们会迟到。
sérieusement|认真地；严肃地|adv|Il travaille sérieusement.|他认真工作。|Tu parles sérieusement ?|你是认真的吗？
franchement|坦率地；说实话|adv|Franchement, c'est cher.|说实话，这很贵。|Dis-moi franchement ce que tu penses.|坦白告诉我你的想法。
également|也；同样地|adv|Je parle également anglais.|我也说英语。|Ce service existe également en ligne.|这项服务也可在线使用。
évidemment|显然；当然|adv|Évidemment, tu peux venir.|当然，你可以来。|C'est évidemment une erreur.|这显然是个错误。
facilement|容易地；轻松地|adv|On trouve facilement un taxi.|很容易找到出租车。|Ce mot se retient facilement.|这个词很容易记住。
directement|直接地|adv|Je rentre directement chez moi.|我直接回家。|Ce train va directement à Paris.|这班火车直达巴黎。
rapidement|迅速地|adv|Répondez rapidement, s'il vous plaît.|请尽快回复。|Elle apprend rapidement.|她学得很快。
forcément|必然；一定|adv|Ce n'est pas forcément cher.|这个不一定贵。|Il y a forcément une solution.|一定有解决办法。
bref|总之；简短地|adv|Bref, je suis content.|总之，我很满意。|Bref, on part demain.|总之，我们明天走。
uniquement|仅仅；专门|adv|Ce tarif est uniquement pour les étudiants.|这个价格仅适用于学生。|Je travaille uniquement le matin.|我只在上午工作。
soudain|突然|adv|Soudain, le téléphone sonne.|突然，电话响了。|Il s'arrête soudain.|他突然停下。
normalement|通常；正常地；按理说|adv|Normalement, le bus passe ici.|通常公交车从这里经过。|L'appareil fonctionne normalement.|设备正常运行。
volontiers|乐意地|adv|Un café ? Volontiers !|喝杯咖啡吗？很乐意！|Je vous aide volontiers.|我很乐意帮助您。
clairement|清楚地；明确地|adv|Parlez clairement.|请说清楚。|Expliquez clairement le problème.|请清楚说明问题。
suffisamment|足够地|adv|J'ai suffisamment dormi.|我睡够了。|Avez-vous suffisamment de temps ?|您有足够的时间吗？
particulièrement|尤其；格外|adv|Il fait particulièrement froid.|天气格外冷。|J'aime particulièrement ce quartier.|我特别喜欢这个街区。
énormément|非常多；极其|adv|Merci énormément.|非常感谢。|J'ai énormément de travail.|我有很多工作。
après-demain|后天|adv|Je reviens après-demain.|我后天回来。|Le colis arrive après-demain.|包裹后天到。
actuellement|目前；现在|adv|Je travaille actuellement à Paris.|我目前在巴黎工作。|Le produit est actuellement indisponible.|这件商品目前没有货。
correctement|正确地；妥当地|adv|Ai-je prononcé ce mot correctement ?|我这个词发音正确吗？|Le logiciel fonctionne correctement.|软件正常运行。
attentivement|仔细地；专心地|adv|Écoutez attentivement.|请仔细听。|Lisez attentivement les instructions.|请仔细阅读说明。
avant-hier|前天|adv|Je suis arrivé avant-hier.|我前天到的。|Il a plu avant-hier.|前天下雨了。
régulièrement|定期地；经常有规律地|adv|Je révise régulièrement.|我定期复习。|Le bus passe régulièrement.|公交车按固定间隔经过。
un euro|欧元|m|Ça coûte dix euros.|这个十欧元。|Il me reste un euro.|我还剩一欧元。
un centime|分（欧元等货币的百分之一）|m|Il manque vingt centimes.|差二十分。|Gardez les cinq centimes.|这五分您留着吧。
un kilo|公斤；千克（口语）|m|Un kilo de pommes, s'il vous plaît.|请给我一公斤苹果。|Ce sac pèse deux kilos.|这个包重两公斤。
un gramme|克|m|Il faut cent grammes de sucre.|需要一百克糖。|Ce paquet pèse cinq cents grammes.|这包东西重五百克。
un mètre|米（长度单位）|m|La table mesure un mètre.|桌子长一米。|Continuez sur cent mètres.|继续走一百米。
un kilomètre|公里；千米|m|La gare est à un kilomètre.|车站在一公里外。|Je marche cinq kilomètres par jour.|我每天走五公里。
un litre|升（容量单位）|m|Un litre de lait.|一升牛奶。|Cette bouteille contient deux litres.|这个瓶子能装两升。
demi|半；一半的|adj|Il est huit heures et demie.|现在八点半。|J'attends depuis une demi-heure.|我已经等了半小时。
un quart|四分之一；一刻钟|m|Il est trois heures et quart.|现在三点一刻。|Je prends un quart du gâteau.|我要四分之一个蛋糕。
une addition|餐馆账单；加法|f|L'addition, s'il vous plaît.|请结账。|L'enfant apprend les additions.|孩子在学加法。
une pointure|鞋码|f|Quelle est votre pointure ?|您穿几码的鞋？|Je voudrais la pointure au-dessus.|我想要大一码的。
un formulaire|表格；申请表|m|Remplissez ce formulaire.|请填写这张表。|Le formulaire est disponible en ligne.|表格可在线获取。
une signature|签名|f|Il manque votre signature.|缺少您的签名。|Mettez votre signature ici.|请在这里签名。
un justificatif|证明材料；凭证|m|Il faut un justificatif de domicile.|需要住址证明。|Gardez ce justificatif.|请保留这张凭证。
un pourboire|小费|m|Je laisse un pourboire.|我留了小费。|Le pourboire n'est pas compris.|小费未包含在内。
une étiquette|标签|f|Le prix est sur l'étiquette.|价格在标签上。|Lisez l'étiquette avant de laver.|洗涤前请阅读标签。
un courriel / un e-mail|电子邮件|m|Je vous envoie un courriel.|我给您发电子邮件。|J'ai reçu votre e-mail.|我收到您的电子邮件了。` },
];

const kinds: Record<string, string> = { v: "动词", m: "阳性名词", f: "阴性名词", adj: "形容词", adv: "副词", pro: "代词", prep: "介词", conj: "连词", det: "限定词", num: "数词", expr: "表达" };
export const dailyWords = blocks.flatMap(block => block.rows.split("\n").map(line => {
  const [french, meaning, code, first, firstTranslation, second, secondTranslation] = line.split("|");
  const examples: Example[] = [{ french: first, translation: firstTranslation }, { french: second, translation: secondTranslation }];
  return { french, meaning, kind: kinds[code], category: block.category, example: first, translation: firstTranslation, examples, level: "intermediate" as const };
})).map((word, index) => ({ ...word, id: `fr-${index + 1001}` }));
