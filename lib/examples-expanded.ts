// Original short French examples with Chinese translations, keyed by vocabulary text.
const blocks = [
`croire|Je crois que tu as raison.|我相信你说得对。|Elle croit en son projet.|她对自己的项目有信心。
penser|Je pense souvent à toi.|我经常想起你。|Que penses-tu de ce livre ?|你觉得这本书怎么样？
savoir|Je sais où il habite.|我知道他住在哪里。|Elle sait nager.|她会游泳。
connaître|Tu connais cette ville ?|你熟悉这座城市吗？|Je connais bien son frère.|我很熟悉他的哥哥。
imaginer|Imagine une maison au bord de la mer.|想象一座海边的房子。|Je peux imaginer ta surprise.|我能想象你有多惊讶。
supposer|Je suppose qu'il est chez lui.|我猜他在家。|Supposons que le train soit en retard.|假设火车晚点了。
estimer|J'estime le trajet à deux heures.|我估计路程需要两小时。|Elle estime beaucoup son professeur.|她很敬重自己的老师。
considérer|Je le considère comme un ami.|我把他当作朋友。|Il faut considérer toutes les options.|需要考虑所有选项。
juger|Ne juge pas trop vite.|不要过早下判断。|Je juge cette solution utile.|我认为这个方案有用。
analyser|Nous analysons les résultats.|我们分析结果。|Elle analyse chaque détail.|她分析每个细节。
observer|J'observe les oiseaux du jardin.|我观察花园里的鸟。|Il faut observer ces règles.|需要遵守这些规则。
interpréter|Comment interpréter ce geste ?|这个动作该怎么理解？|Elle interprète une chanson française.|她演唱一首法语歌。
déduire|Que peut-on en déduire ?|我们能从中推断出什么？|On déduit les frais du total.|费用从总额中扣除。
conclure|Il conclut que le projet est possible.|他得出结论，认为项目可行。|Nous avons conclu un accord.|我们达成了一项协议。
démontrer|Cet exemple démontre l'utilité de la méthode.|这个例子证明了该方法的用处。|Peux-tu démontrer ce résultat ?|你能证明这个结果吗？
prouver|Il faut prouver ce que tu dis.|你需要证实自己说的话。|Cette photo prouve sa présence.|这张照片证明他当时在场。
justifier|Peux-tu justifier ton choix ?|你能说明选择的理由吗？|Il justifie son retard.|他说明自己迟到的原因。
affirmer|Elle affirme avoir vu Paul.|她肯定地说自己见过保罗。|Il affirme que tout va bien.|他断言一切都好。
nier|Il nie avoir pris le livre.|他否认拿了那本书。|On ne peut pas nier ce fait.|我们无法否认这个事实。
admettre|J'admets mon erreur.|我承认自己的错误。|Elle admet qu'elle a oublié.|她承认自己忘记了。
avouer|J'avoue que je suis fatigué.|我承认我累了。|Il a avoué la vérité.|他坦白了真相。
prétendre|Il prétend tout savoir.|他自称什么都知道。|Elle prétend être malade.|她声称自己病了。
annoncer|Ils annoncent leur départ.|他们宣布要离开。|La météo annonce de la pluie.|天气预报说要下雨。
déclarer|Il déclare ses revenus chaque année.|他每年申报收入。|Elle déclare qu'elle est prête.|她宣布自己准备好了。
souligner|Souligne les mots importants.|在重要的词下面画线。|Je voudrais souligner ce point.|我想强调这一点。
insister|N'insiste pas, je suis fatigué.|别坚持了，我累了。|Elle insiste sur la qualité.|她强调质量。
suggérer|Je suggère de partir tôt.|我建议早点出发。|Que suggères-tu pour demain ?|对于明天，你有什么建议？
critiquer|Il critique souvent ce restaurant.|他经常批评这家餐馆。|On peut critiquer une idée sans blesser.|我们可以批评一个想法而不伤害别人。
approuver|J'approuve cette décision.|我赞同这个决定。|Le directeur a approuvé le projet.|主管批准了这个项目。
contredire|Ces deux résultats se contredisent.|这两个结果相互矛盾。|Je ne veux pas te contredire.|我不想反驳你。
mentionner|Elle mentionne ton nom.|她提到了你的名字。|Il faut mentionner la date.|需要注明日期。
résumer|Peux-tu résumer le texte ?|你能概括这篇文章吗？|Je résume la situation en trois phrases.|我用三句话概括情况。
décrire|Décris-moi ta chambre.|向我描述一下你的房间。|Elle décrit son voyage.|她描述自己的旅行。
raconter|Raconte-moi une histoire.|给我讲个故事吧。|Il raconte sa journée.|他讲述自己一天的经历。
traduire|Je traduis cette phrase en chinois.|我把这句话译成中文。|Peux-tu traduire ce message ?|你能翻译这条消息吗？
définir|Comment définir ce mot ?|这个词该怎么定义？|Nous devons définir nos objectifs.|我们必须明确目标。
distinguer|Je distingue une maison au loin.|我辨认出远处有一座房子。|Il faut distinguer les deux cas.|需要区分这两种情况。
identifier|Peux-tu identifier cet oiseau ?|你能认出这是什么鸟吗？|Nous avons identifié le problème.|我们已经找出了问题。
interroger|Le professeur interroge les élèves.|老师向学生提问。|Elle m'interroge sur mon travail.|她问我工作的情况。
répondre|Je réponds à ton message.|我回复你的消息。|Peux-tu répondre à cette question ?|你能回答这个问题吗？`,
`commencer|Le cours commence à neuf heures.|课九点开始。|Je commence à comprendre.|我开始明白了。
continuer|Continue tout droit.|继续直走。|Elle continue à travailler.|她继续工作。
terminer|Je termine mon exercice.|我做完练习。|Le film se termine bien.|这部电影结局不错。
arrêter|Arrête la voiture ici.|把车停在这里。|Il arrête de parler.|他停止说话。
reprendre|Nous reprenons le travail lundi.|我们周一恢复工作。|Tu peux reprendre ton livre.|你可以拿回你的书。
poursuivre|Elle poursuit ses études à Paris.|她在巴黎继续学业。|Le chien poursuit une balle.|狗追着一个球跑。
lancer|Lance-moi la balle.|把球扔给我。|Nous lançons un nouveau projet.|我们启动一个新项目。
créer|Elle crée des bijoux.|她创作首饰。|Je veux créer un site.|我想建一个网站。
produire|Cette ferme produit du fromage.|这个农场生产奶酪。|La machine produit beaucoup de bruit.|这台机器产生很大的噪声。
fabriquer|Il fabrique une table.|他制作一张桌子。|Ces chaussures sont fabriquées ici.|这些鞋在这里制造。
transformer|Ils transforment le garage en chambre.|他们把车库改成卧室。|La chaleur transforme la glace en eau.|热量使冰变成水。
adapter|Il faut adapter le texte aux enfants.|需要改写文章，使其适合儿童。|Elle adapte son emploi du temps.|她调整自己的时间安排。
modifier|Je dois modifier mon adresse.|我得修改地址。|Nous avons modifié le plan.|我们修改了计划。
corriger|Le professeur corrige les copies.|老师批改试卷。|Peux-tu corriger cette erreur ?|你能改正这个错误吗？
installer|J'installe une nouvelle application.|我安装一个新应用。|Ils installent une table dehors.|他们在外面摆上一张桌子。
supprimer|Je supprime ce vieux message.|我删除这条旧消息。|Ils ont supprimé le dernier train.|他们取消了末班火车。
déplacer|Peux-tu déplacer cette chaise ?|你能移动这把椅子吗？|Nous déplaçons la réunion à mardi.|我们把会议改到周二。
transporter|Ce camion transporte des fruits.|这辆卡车运送水果。|Il transporte les cartons à la main.|他用手搬运纸箱。
livrer|Le magasin livre les meubles demain.|商店明天送家具。|On peut livrer les courses chez vous.|购物商品可以送到您家。
distribuer|Elle distribue les feuilles.|她分发纸张。|Nous distribuons de l'eau aux coureurs.|我们给跑步的人发水。
ranger|Je range mes vêtements.|我收拾衣服。|Range ce livre sur l'étagère.|把这本书放回书架上。
nettoyer|Je nettoie la cuisine.|我打扫厨房。|Il faut nettoyer ces chaussures.|需要清洗这些鞋。
remplir|Remplis ton verre d'eau.|把你的杯子倒满水。|Je remplis le formulaire.|我填写表格。
vider|Il vide la poubelle.|他倒垃圾。|Je vide ma valise.|我清空行李箱。
couvrir|La neige couvre le jardin.|雪覆盖了花园。|Couvre le plat avec un couvercle.|用盖子盖上这盘菜。
découvrir|Je découvre un nouveau quartier.|我探索一个新街区。|Elle a découvert la réponse.|她发现了答案。
tenir|Tiens ma main.|握住我的手。|Il tient un livre.|他拿着一本书。
poser|Pose ton sac ici.|把包放在这里。|Je voudrais poser une question.|我想问一个问题。
lever|Lève la main si tu sais.|如果知道，就举手。|Il lève les yeux vers le ciel.|他抬眼望向天空。
baisser|Peux-tu baisser le son ?|你能调低音量吗？|Le prix a baissé.|价格下降了。
tirer|Il faut tirer la porte.|这扇门要拉开。|Le cheval tire une voiture.|马拉着一辆车。
pousser|Pousse la porte doucement.|轻轻推门。|Les fleurs poussent vite.|花长得很快。
couper|Je coupe le pain.|我切面包。|Elle coupe ses cheveux.|她剪头发。
coller|Colle cette photo dans ton cahier.|把这张照片贴进本子里。|Le riz colle au fond de la casserole.|米饭粘在锅底。
mesurer|Je mesure la longueur de la table.|我测量桌子的长度。|Il mesure un mètre quatre-vingts.|他身高一米八。
peser|Ce sac pèse deux kilos.|这个包重两公斤。|Peux-tu peser les pommes ?|你能称一下苹果吗？
compter|L'enfant compte jusqu'à dix.|孩子数到十。|Je compte partir demain.|我打算明天出发。
calculer|Je calcule le prix total.|我计算总价。|Il faut calculer la distance.|需要计算距离。
répartir|Nous répartissons les tâches.|我们分配任务。|Répartis le riz dans deux bols.|把米饭分到两个碗里。
rassembler|Elle rassemble ses affaires.|她把自己的东西收在一起。|Ce concert rassemble beaucoup de gens.|这场音乐会吸引了很多人。`,
`ressentir|Je ressens une grande joie.|我感到非常喜悦。|Elle ressent de la fatigue.|她感到疲惫。
éprouver|J'éprouve du respect pour lui.|我很尊敬他。|Elle éprouve le besoin de parler.|她觉得需要说说话。
souffrir|Il souffre du dos.|他背疼。|Elle souffre de la solitude.|她因孤独而痛苦。
regretter|Je regrette mon choix.|我后悔自己的选择。|Nous regrettons de partir si tôt.|我们很遗憾这么早就要离开。
espérer|J'espère te revoir bientôt.|我希望很快再见到你。|Nous espérons qu'il fera beau.|我们希望天气会好。
souhaiter|Je te souhaite un bon voyage.|祝你旅途愉快。|Elle souhaite apprendre le français.|她希望学习法语。
désirer|Que désirez-vous boire ?|您想喝点什么？|Il désire changer de travail.|他想换工作。
préférer|Je préfère le thé au café.|比起咖啡，我更喜欢茶。|Tu préfères rester ici ?|你更想留在这里吗？
détester|Je déteste attendre.|我讨厌等待。|Elle déteste le bruit.|她讨厌噪声。
admirer|Nous admirons le paysage.|我们欣赏风景。|J'admire ton courage.|我钦佩你的勇气。
apprécier|J'apprécie ton aide.|我很感谢你的帮助。|Elle apprécie ce restaurant.|她很喜欢这家餐馆。
respecter|Il faut respecter les autres.|要尊重他人。|Nous respectons les horaires.|我们遵守时间安排。
tolérer|Je ne tolère pas ce comportement.|我不能容忍这种行为。|Elle tolère mal la chaleur.|她很受不了炎热。
pardonner|Peux-tu me pardonner ?|你能原谅我吗？|Je lui pardonne son erreur.|我原谅他的错误。
remercier|Je te remercie pour le cadeau.|谢谢你送的礼物。|Elle remercie le serveur.|她向服务员道谢。
féliciter|Je te félicite pour ton diplôme.|祝贺你拿到文凭。|Le professeur félicite ses élèves.|老师表扬学生们。
saluer|Je salue mes voisins.|我向邻居打招呼。|Elle nous salue de la main.|她向我们挥手致意。
accueillir|Nous accueillons des amis ce soir.|我们今晚接待朋友。|Elle m'accueille avec un sourire.|她微笑着迎接我。
accompagner|Je peux t'accompagner à la gare.|我可以陪你去车站。|Du riz accompagne le poisson.|这道鱼配有米饭。
rencontrer|Je rencontre Paul demain.|我明天见保罗。|Nous avons rencontré un problème.|我们遇到了一个问题。
inviter|Je t'invite à dîner.|我邀请你吃晚饭。|Elle invite ses voisins à la fête.|她邀请邻居参加聚会。
présenter|Je te présente ma sœur.|我向你介绍我的姐姐。|Il présente son projet à l'équipe.|他向团队介绍自己的项目。
discuter|Nous discutons du voyage.|我们讨论旅行的事。|J'aime discuter avec elle.|我喜欢和她聊天。
échanger|Nous échangeons nos numéros.|我们交换电话号码。|Je voudrais échanger cette chemise.|我想换这件衬衫。
collaborer|Nous collaborons sur ce projet.|我们合作开展这个项目。|Elle collabore avec une petite équipe.|她与一个小团队合作。
aider|Peux-tu m'aider à porter ce sac ?|你能帮我提这个包吗？|Il aide sa sœur à étudier.|他帮助妹妹学习。
conseiller|Je te conseille ce livre.|我向你推荐这本书。|Elle me conseille de partir tôt.|她建议我早点出发。
rassurer|Ta présence me rassure.|有你在，我很安心。|Il rassure son enfant.|他安抚自己的孩子。
consoler|Elle console son amie.|她安慰朋友。|Ces mots me consolent un peu.|这些话让我得到一点安慰。
surprendre|Ta réponse me surprend.|你的回答让我惊讶。|La pluie nous a surpris.|雨下得让我们措手不及。
décevoir|Ce film m'a déçu.|这部电影让我失望。|Je ne veux pas te décevoir.|我不想让你失望。
blesser|Ces mots peuvent blesser.|这些话可能伤人。|Il s'est blessé au pied.|他伤了脚。
menacer|L'orage menace notre pique-nique.|雷雨可能影响我们的野餐。|Il menace de partir.|他威胁说要离开。
se disputer|Ils se disputent pour un jouet.|他们为一个玩具争吵。|Je ne veux pas me disputer.|我不想吵架。
se réconcilier|Ils se sont réconciliés hier.|他们昨天和好了。|Elle veut se réconcilier avec son frère.|她想与哥哥和解。
se méfier|Je me méfie de cette offre.|我对这个报价有戒心。|Méfie-toi des messages étranges.|要提防奇怪的消息。
se détendre|Je me détends en lisant.|我通过阅读放松。|Nous allons nous détendre au parc.|我们要去公园放松一下。
se reposer|Elle se repose après le travail.|她下班后休息。|Je vais me reposer un peu.|我要休息一会儿。
s'ennuyer|Je m'ennuie quand j'attends.|等待时我觉得无聊。|Les enfants ne s'ennuient jamais ici.|孩子们在这里从不觉得无聊。
s'épanouir|Elle s'épanouit dans son travail.|她在工作中找到了成就感。|Cet enfant s'épanouit à l'école.|这个孩子在学校茁壮成长。`,
`une idée|J'ai une bonne idée.|我有个好主意。|Ton idée me plaît.|我喜欢你的想法。
une pensée|Cette pensée me rassure.|这个想法让我安心。|Il écrit ses pensées dans un carnet.|他把自己的想法写在小本子里。
une réflexion|J'ai besoin d'un temps de réflexion.|我需要一点思考时间。|Cette question mérite une réflexion.|这个问题值得思考。
un raisonnement|Ton raisonnement est clair.|你的推理很清楚。|Je ne comprends pas son raisonnement.|我不理解他的推理过程。
un argument|C'est un bon argument.|这是一个好理由。|Elle présente trois arguments.|她提出了三个论据。
une hypothèse|Ce n'est qu'une hypothèse.|这只是一个假设。|Nous devons vérifier cette hypothèse.|我们必须验证这个假设。
une théorie|Il explique sa théorie.|他解释自己的理论。|Cette théorie est difficile à comprendre.|这个理论很难理解。
un concept|Ce concept est nouveau pour moi.|这个概念对我来说是新的。|Elle explique un concept simple.|她解释一个简单的概念。
une notion|J'apprends les notions de base.|我学习基础概念。|La notion de temps est importante ici.|时间这一概念在这里很重要。
un principe|C'est une question de principe.|这是一个原则问题。|Je comprends le principe de la machine.|我理解这台机器的原理。
une logique|Je comprends ta logique.|我理解你的逻辑。|Ce jeu demande de la logique.|这个游戏需要逻辑思维。
une analyse|Son analyse est précise.|她的分析很准确。|Nous faisons une analyse des résultats.|我们对结果进行分析。
une synthèse|Voici une synthèse du rapport.|这是报告的综述。|Je prépare une courte synthèse.|我在准备一份简短的总结。
une conclusion|Quelle est ta conclusion ?|你的结论是什么？|La conclusion du texte est claire.|文章的结论很明确。
une explication|Merci pour ton explication.|谢谢你的解释。|Il demande une explication simple.|他要求一个简单的说明。
une définition|Je cherche la définition de ce mot.|我查找这个词的定义。|Cette définition est trop vague.|这个定义太模糊了。
un exemple|Peux-tu donner un exemple ?|你能举个例子吗？|Voici un exemple très simple.|这是一个非常简单的例子。
une comparaison|La comparaison est intéressante.|这个比较很有意思。|Je fais une comparaison des prix.|我比较价格。
une différence|Je vois une petite différence.|我看到一点差别。|Quelle est la différence entre les deux ?|这两者有什么区别？
une ressemblance|Il y a une ressemblance entre ces maisons.|这些房子有相似之处。|La ressemblance est frappante.|相似之处非常明显。
une contradiction|Je vois une contradiction dans ton récit.|我发现你的叙述中有一处矛盾。|Ces deux idées sont en contradiction.|这两个想法相互矛盾。
une nuance|Il y a une nuance entre ces mots.|这些词之间有细微差别。|J'aime cette nuance de bleu.|我喜欢这种蓝色调。
un détail|J'ai oublié un détail.|我忘了一个细节。|Chaque détail compte.|每个细节都很重要。
un contexte|Il faut comprendre le contexte.|需要理解背景。|Ce mot change de sens selon le contexte.|这个词的意思随上下文而变化。
un point de vue|Je comprends ton point de vue.|我理解你的观点。|Elle explique son point de vue.|她解释自己的观点。
une perspective|Cette perspective me plaît.|这个前景让我满意。|Regardons le problème sous une autre perspective.|我们换个角度看这个问题。
une approche|Essayons une autre approche.|我们试试另一种方法。|Son approche est très pratique.|她的方法很实用。
une méthode|Cette méthode est facile à suivre.|这个方法很容易照着做。|Il faut changer de méthode.|需要换一种方法。
un critère|Le prix est un critère important.|价格是一个重要标准。|Quels sont tes critères de choix ?|你的选择标准是什么？
une condition|J'accepte à une condition.|我有一个条件，满足就同意。|Les conditions de travail sont bonnes.|工作条件很好。
une exception|Cette règle a une exception.|这条规则有一个例外。|Je peux faire une exception.|我可以破例一次。
une règle|Il faut respecter cette règle.|要遵守这条规则。|Trace une ligne avec une règle.|用尺子画一条线。
un fait|C'est un fait certain.|这是一个确定的事实。|Il faut vérifier les faits.|需要核实事实。
une cause|Quelle est la cause du retard ?|延误的原因是什么？|Elle soutient une bonne cause.|她支持一项有益的事业。
un effet|La lumière produit un bel effet.|灯光产生了漂亮的效果。|Ce changement a un effet positif.|这个改变产生了积极影响。
une influence|La météo a une influence sur mon humeur.|天气会影响我的心情。|Il a une bonne influence sur moi.|他对我有积极影响。
une tendance|Les prix suivent une tendance à la hausse.|价格呈上涨趋势。|J'ai tendance à parler vite.|我说话容易偏快。
une certitude|Je n'ai aucune certitude.|我没有任何把握。|Elle parle avec certitude.|她说话很肯定。
une conviction|Il défend ses convictions.|他捍卫自己的信念。|Elle parle avec conviction.|她说话充满信心。
un préjugé|C'est un préjugé courant.|这是一个常见的偏见。|Essayons de dépasser nos préjugés.|我们试着克服自己的偏见。`,
`une entreprise|Elle travaille dans une petite entreprise.|她在一家小公司工作。|Cette entreprise recrute.|这家公司正在招聘。
une société|Il dirige une société de transport.|他管理一家运输公司。|La société change rapidement.|社会变化很快。
une équipe|Notre équipe travaille bien ensemble.|我们团队合作得很好。|Elle rejoint une nouvelle équipe.|她加入一个新团队。
un collègue|Mon collègue m'aide souvent.|我的同事经常帮助我。|Je déjeune avec un collègue.|我和一位同事吃午饭。
un employé|Cet employé arrive tôt.|这名员工来得很早。|Le magasin cherche un employé.|商店在招一名员工。
un employeur|Mon employeur propose une formation.|我的雇主提供一项培训。|Il parle avec son employeur.|他与自己的雇主交谈。
un poste|Elle cherche un poste à Paris.|她在巴黎找职位。|Ce poste demande de l'expérience.|这个岗位需要经验。
un emploi|J'ai trouvé un emploi.|我找到工作了。|Il cherche un emploi à temps partiel.|他在找兼职工作。
un métier|Quel métier veux-tu faire ?|你想从事什么职业？|J'aime mon métier.|我喜欢自己的职业。
une profession|Quelle est votre profession ?|您的职业是什么？|Elle exerce une profession créative.|她从事创意类职业。
une carrière|Il commence sa carrière ici.|他在这里开始职业生涯。|Elle souhaite changer de carrière.|她希望转换职业方向。
une candidature|J'envoie ma candidature aujourd'hui.|我今天提交求职申请。|Sa candidature a été retenue.|他的申请被选中了。
un curriculum vitae|Je mets à jour mon curriculum vitae.|我更新个人简历。|Envoyez votre curriculum vitae par courriel.|请通过电子邮件发送您的简历。
une lettre de motivation|J'écris une lettre de motivation.|我写一封求职信。|Ta lettre de motivation est claire.|你的求职信写得很清楚。
un recrutement|Le recrutement commence lundi.|招聘周一开始。|Elle s'occupe du recrutement.|她负责招聘。
un stage|Je fais un stage dans un musée.|我在一家博物馆实习。|Son stage dure trois mois.|他的实习持续三个月。
un diplôme|Elle vient d'obtenir son diplôme.|她刚拿到文凭。|Ce travail exige un diplôme.|这份工作要求有文凭。
une qualification|Ce poste demande une qualification précise.|这个岗位要求特定的专业资质。|Il veut obtenir une nouvelle qualification.|他想取得一项新的资格。
une tâche|Cette tâche prend dix minutes.|这项任务需要十分钟。|Je termine ma dernière tâche.|我完成最后一项任务。
une mission|Notre mission est simple.|我们的任务很简单。|Elle part en mission à Lyon.|她去里昂执行工作任务。
un projet|Nous préparons un nouveau projet.|我们在筹备一个新项目。|Ton projet avance bien.|你的项目进展顺利。
une étape|C'est la première étape.|这是第一步。|Nous avançons étape par étape.|我们一步步推进。
un planning|Je consulte mon planning.|我查看日程表。|Le planning a changé.|日程安排变了。
une échéance|L'échéance approche.|截止日期快到了。|Il faut respecter cette échéance.|必须遵守这个截止时间。
une priorité|La sécurité est notre priorité.|安全是我们的首要任务。|Il faut définir les priorités.|需要确定优先事项。
une stratégie|Nous changeons de stratégie.|我们改变策略。|Cette stratégie fonctionne bien.|这个策略很有效。
une organisation|Cette organisation aide les familles.|这个组织帮助家庭。|Une bonne organisation facilite le travail.|良好的安排让工作更容易。
une gestion|Elle s'occupe de la gestion du magasin.|她负责商店的管理。|La gestion du temps est importante.|时间管理很重要。
une direction|Dans quelle direction allons-nous ?|我们往哪个方向走？|La direction a accepté le projet.|管理层接受了这个项目。
un service|Le service est rapide ici.|这里的服务很快。|Il travaille au service des ventes.|他在销售部门工作。
un département|Elle dirige le département informatique.|她负责信息技术部门。|Ce département recrute deux personnes.|这个部门招聘两个人。
un partenaire|Nous cherchons un partenaire.|我们在找一位合作伙伴。|Mon partenaire arrive demain.|我的合作伙伴明天到。
un fournisseur|Le fournisseur a livré les cartons.|供应商送来了纸箱。|Nous contactons un nouveau fournisseur.|我们联系一家新供应商。
un client|Le client attend sa commande.|顾客在等订单。|Ce client revient chaque semaine.|这位顾客每周都会来。
une commande|Je passe une commande en ligne.|我在网上下单。|Votre commande est prête.|您的订单准备好了。
une livraison|La livraison est prévue demain.|预计明天送达。|La livraison est gratuite.|配送免费。
un stock|Ce livre est en stock.|这本书有库存。|Nous vérifions le stock.|我们检查库存。
un réseau|Le réseau fonctionne mal.|网络运行不顺畅。|Elle développe son réseau professionnel.|她拓展自己的职业人脉。
un contact|Nous restons en contact.|我们保持联系。|Il m'a donné un contact utile.|他给了我一位有帮助的联系人的信息。
un compte rendu|Je rédige le compte rendu de la réunion.|我撰写会议纪要。|Tu peux lire le compte rendu ici.|你可以在这里阅读报告。`,
`un prix|Quel est le prix de ce sac ?|这个包多少钱？|Elle a gagné un prix.|她得了一个奖。
un tarif|Le tarif comprend le petit déjeuner.|费用包含早餐。|Il existe un tarif étudiant.|有学生优惠价。
un coût|Le coût du voyage est élevé.|旅行的成本很高。|Nous devons réduire les coûts.|我们必须降低成本。
un montant|Quel est le montant total ?|总金额是多少？|Le montant figure sur le reçu.|金额写在收据上。
une somme|C'est une petite somme.|这是一小笔钱。|Je mets cette somme de côté.|我把这笔钱存起来。
un revenu|Son revenu est régulier.|他的收入很稳定。|Elle cherche un revenu supplémentaire.|她想找一份额外收入。
un bénéfice|Le magasin réalise un bénéfice.|商店获得了利润。|Les bénéfices augmentent cette année.|今年利润有所增加。
une perte|Cette erreur a causé une perte.|这个错误造成了损失。|L'entreprise limite ses pertes.|公司控制损失。
une dette|Il rembourse sa dette.|他偿还债务。|Elle n'a plus de dettes.|她不再有债务。
un prêt|La banque a accepté le prêt.|银行批准了贷款。|Le prêt de ce livre est gratuit.|这本书可以免费借阅。
un taux|Le taux d'intérêt a baissé.|利率下降了。|Quel est le taux de change ?|汇率是多少？
un intérêt|Ce sujet présente un grand intérêt.|这个主题很有研究价值。|Il paie des intérêts sur son prêt.|他支付贷款利息。
un impôt|Il paie ses impôts en ligne.|他在网上缴税。|Cet impôt concerne les entreprises.|这项税涉及企业。
une taxe|La taxe est comprise dans le prix.|价格已包含税费。|Une nouvelle taxe est proposée.|有人提议征收一项新税。
une promotion|Ces chaussures sont en promotion.|这些鞋在促销。|Elle a obtenu une promotion.|她升职了。
une réduction|Les étudiants ont une réduction.|学生可以享受优惠。|Je demande une réduction du prix.|我请求降价。
une remise|Le vendeur propose une remise.|卖家提供折扣。|J'ai obtenu une remise de dix euros.|我获得了十欧元的优惠。
un abonnement|Mon abonnement se termine demain.|我的订阅明天到期。|J'ai un abonnement à la piscine.|我办了游泳馆的会员卡。
un paiement|Le paiement se fait en ligne.|付款在网上完成。|Votre paiement a été reçu.|您的付款已收到。
un virement|Je fais un virement bancaire.|我进行银行转账。|Le virement est arrivé ce matin.|转账今天上午到账了。
un prélèvement|Le prélèvement a lieu chaque mois.|每个月都会自动扣款。|Je vérifie le montant du prélèvement.|我核对自动扣款的金额。
un dépôt|Je fais un dépôt de cent euros.|我存入一百欧元。|Le dépôt est visible sur mon compte.|我的账户里能看到这笔存款。
un retrait|Je fais un retrait au distributeur.|我在自动取款机取款。|Le retrait apparaît sur mon relevé.|这笔取款出现在我的账单上。
un solde|Je consulte le solde de mon compte.|我查看账户余额。|Le solde est de cinquante euros.|余额是五十欧元。
un compte|Je veux ouvrir un compte.|我想开一个账户。|Elle vérifie ses comptes.|她核对自己的账目。
une carte bancaire|Je paie avec ma carte bancaire.|我用银行卡付款。|J'ai oublié ma carte bancaire.|我忘带银行卡了。
la monnaie|Vous avez de la monnaie ?|您有零钱吗？|Le vendeur me rend la monnaie.|卖家给我找零。
des espèces|Je préfère payer en espèces.|我更喜欢付现金。|Ce magasin accepte les espèces.|这家商店收现金。
un chèque|Il paie par chèque.|他用支票付款。|Je dépose un chèque à la banque.|我去银行存一张支票。
un reçu|Gardez votre reçu.|请保留收据。|Je voudrais un reçu, s'il vous plaît.|请给我一张收据。
une caisse|Je fais la queue à la caisse.|我在收银台排队。|La caisse est au fond du magasin.|收银台在商店里面。
un achat|Je suis content de mon achat.|我对买的东西很满意。|Elle fait ses achats le samedi.|她周六购物。
une vente|La vente commence demain.|销售明天开始。|Cette maison est en vente.|这栋房子正在出售。
un échange|Un échange est possible.|可以换货。|Cet échange d'idées est utile.|这次思想交流很有用。
une garantie|Ce téléphone a une garantie.|这部手机有保修。|La garantie dure deux ans.|保修期为两年。
un investissement|Cet achat est un investissement.|这次购买是一项投资。|Le projet demande un grand investissement.|这个项目需要大量投入。
un capital|Ils ont besoin de capital.|他们需要资金。|Le capital de départ est limité.|初始资金有限。
un marché|Je vais au marché le dimanche.|我周日去市场。|Cette entreprise entre sur un nouveau marché.|这家公司进入一个新市场。
une concurrence|La concurrence est forte.|竞争很激烈。|Ces deux magasins sont en concurrence.|这两家商店存在竞争关系。
une pénurie|Il y a une pénurie d'eau.|出现了缺水的情况。|Le magasin fait face à une pénurie de produits.|商店面临商品短缺。`,
`un État|L'État finance ce projet.|国家为这个项目提供资金。|Cet État compte plusieurs régions.|这个国家由多个地区组成。
un gouvernement|Le gouvernement présente un nouveau projet.|政府提出一项新计划。|Le gouvernement a changé.|政府更替了。
un ministère|Elle travaille dans un ministère.|她在一个政府部门工作。|Le ministère publie un rapport.|该部发布一份报告。
une administration|Je contacte l'administration de l'école.|我联系学校行政部门。|L'administration demande un document.|行政部门要求提供一份文件。
une mairie|La mairie est près de la gare.|市政厅在车站附近。|Nous avons rendez-vous à la mairie.|我们在市政厅有预约。
une commune|Cette commune est très calme.|这个市镇很安静。|La commune organise une fête.|这个市镇组织一场庆祝活动。
une région|J'aime cette région.|我喜欢这个地区。|Cette région produit du vin.|这个地区出产葡萄酒。
un territoire|Le territoire est très vaste.|这片领土很广阔。|Cette espèce vit sur un petit territoire.|这个物种生活在一小片区域内。
une population|La population augmente.|人口在增长。|La population locale participe au projet.|当地居民参与这个项目。
un citoyen|Chaque citoyen peut donner son avis.|每位公民都可以发表意见。|Il est citoyen français.|他是法国公民。
une nationalité|Quelle est votre nationalité ?|您的国籍是什么？|Elle a la nationalité française.|她拥有法国国籍。
une politique|Nous discutons de politique.|我们讨论政治。|L'entreprise change sa politique de prix.|公司改变定价政策。
une démocratie|Ils défendent la démocratie.|他们捍卫民主。|Le débat est important dans une démocratie.|在民主制度下，讨论很重要。
une élection|Une élection aura lieu dimanche.|周日将举行一场选举。|Elle participe à l'élection.|她参加这次选举。
un vote|Le vote commence à huit heures.|投票八点开始。|Nous décidons par un vote.|我们通过投票决定。
une loi|Il faut respecter la loi.|要遵守法律。|Le parlement examine une nouvelle loi.|议会审议一项新法律。
un droit|Tu as le droit de poser des questions.|你有权提问。|Elle étudie le droit.|她学习法律。
un devoir|C'est notre devoir de les aider.|帮助他们是我们的责任。|Il fait ses devoirs après le dîner.|他晚饭后做作业。
un tribunal|Le tribunal est au centre-ville.|法院在市中心。|Elle attend devant le tribunal.|她在法院门前等候。
un procès|Le procès commence lundi.|审判周一开始。|Il assiste au procès.|他旁听这场审判。
un juge|Le juge écoute les témoins.|法官听取证人证言。|La juge pose une question.|女法官提出一个问题。
une plainte|Elle a déposé une plainte.|她提出了控告。|Le service a reçu plusieurs plaintes.|该部门收到了几起投诉。
une amende|Il a reçu une amende.|他收到了一张罚单。|Elle paie son amende.|她缴纳罚款。
une peine|Cette nouvelle me fait de la peine.|这个消息让我难过。|Le juge a prononcé une peine.|法官作出了刑罚判决。
une prison|Il travaille dans une prison.|他在一所监狱工作。|L'ancienne prison est devenue un musée.|旧监狱变成了一座博物馆。
la sécurité|La sécurité des enfants est importante.|孩子们的安全很重要。|Je me sens en sécurité ici.|我在这里感到安全。
la justice|Elle croit en la justice.|她相信公正。|Il travaille pour la justice.|他从事司法工作。
la liberté|J'aime cette liberté.|我喜欢这种自由。|Nous défendons la liberté d'expression.|我们捍卫言论自由。
l'égalité|L'égalité est un principe important.|平等是一项重要原则。|Elle défend l'égalité des chances.|她主张机会平等。
une inégalité|Il faut réduire les inégalités.|需要减少不平等。|Cette étude montre une inégalité de revenus.|这项研究显示存在收入不平等。
une discrimination|Elle dénonce une discrimination.|她揭露一起歧视事件。|L'association lutte contre les discriminations.|该协会反对歧视。
une association|Je fais partie d'une association.|我是一个协会的成员。|Cette association organise des cours.|这个协会组织课程。
un syndicat|Il a rejoint un syndicat.|他加入了一个工会。|Le syndicat demande une réunion.|工会要求召开会议。
une manifestation|Une manifestation passe dans la rue.|一支示威队伍经过这条街。|La manifestation se déroule dans le calme.|示威平静地进行。
une réforme|La réforme est en discussion.|这项改革正在讨论中。|Ils proposent une réforme de l'école.|他们提出一项学校改革方案。
une mesure|Cette mesure réduit le bruit.|这个措施降低了噪声。|Nous prenons des mesures pour améliorer le service.|我们采取措施改善服务。
un service public|La bibliothèque est un service public.|图书馆是一项公共服务。|Ce service public accueille les habitants.|这项公共服务面向居民。
une autorisation|Il faut une autorisation pour entrer.|进入需要许可。|J'ai reçu l'autorisation de partir.|我获准离开。
une interdiction|L'interdiction est indiquée sur la porte.|门上标明了禁令。|Il respecte l'interdiction de stationner.|他遵守禁止停车的规定。
une obligation|C'est une obligation, pas un choix.|这是义务，不是选择。|Elle remplit ses obligations.|她履行自己的义务。`,
`une recherche|Je fais une recherche sur ce sujet.|我对这个主题进行研究。|La recherche d'un appartement prend du temps.|找公寓需要时间。
une découverte|Cette découverte est importante.|这个发现很重要。|Chaque promenade est une découverte.|每次散步都有新发现。
un protocole|Nous suivons un protocole précis.|我们遵循明确的流程。|Le protocole décrit chaque étape.|流程说明了每个步骤。
une variable|La température est une variable.|温度是一个变量。|Nous changeons une seule variable.|我们只改变一个变量。
un paramètre|Il faut régler ce paramètre.|需要调整这个参数。|Ce paramètre change le résultat.|这个参数改变结果。
un échantillon|Elle analyse un échantillon d'eau.|她分析一个水样。|Le magasin offre un échantillon gratuit.|商店赠送一份免费小样。
une donnée|Il manque une donnée dans le tableau.|表格里缺少一项数据。|Cette donnée semble incorrecte.|这项数据似乎不正确。
la statistique|Il étudie la statistique.|他学习统计学。|La statistique aide à analyser les données.|统计学帮助分析数据。
une probabilité|La probabilité est faible.|概率很低。|Nous calculons la probabilité de ce résultat.|我们计算这个结果出现的概率。
une moyenne|La moyenne est de quinze.|平均值是十五。|Elle calcule la moyenne des notes.|她计算成绩的平均分。
une proportion|La proportion a augmenté.|比例增加了。|Une grande proportion des élèves participe.|很大一部分学生参与了。
une quantité|La quantité est suffisante.|数量足够了。|Ajoute une petite quantité d'eau.|加入少量水。
une unité|Le mètre est une unité de longueur.|米是长度单位。|Quelle unité utilises-tu ?|你使用什么单位？
un volume|Baisse le volume de la radio.|把收音机音量调低。|Nous mesurons le volume de la boîte.|我们测量盒子的体积。
une surface|La surface est lisse.|表面很光滑。|Cette pièce a une surface de vingt mètres carrés.|这个房间面积为二十平方米。
une longueur|Quelle est la longueur du pont ?|这座桥有多长？|Je mesure la longueur du tissu.|我测量布料的长度。
une largeur|La largeur de la porte est suffisante.|门的宽度足够。|Cette table fait un mètre de largeur.|这张桌子宽一米。
une hauteur|La hauteur du plafond est impressionnante.|天花板的高度令人惊叹。|Nous réglons la hauteur de la chaise.|我们调整椅子的高度。
une profondeur|Quelle est la profondeur du lac ?|湖有多深？|Le bassin a deux mètres de profondeur.|水池深两米。
une vitesse|Le train roule à grande vitesse.|火车高速行驶。|Il réduit sa vitesse.|他降低速度。
une force|Il pousse la porte de toutes ses forces.|他用尽全力推门。|Le vent a une grande force.|风的力量很大。
une pression|La pression de l'eau est faible.|水压很低。|Elle travaille sous pression.|她在压力下工作。
une température|La température baisse ce soir.|今晚气温下降。|Je vérifie la température de l'eau.|我检查水温。
une énergie|Ce matin, j'ai beaucoup d'énergie.|今天早上我精力充沛。|Cette maison utilise l'énergie solaire.|这栋房子使用太阳能。
une puissance|La puissance du moteur est élevée.|发动机功率很大。|Cette lampe a une faible puissance.|这盏灯的功率很低。
un courant|Le courant de la rivière est fort.|河水的水流很急。|Il y a une coupure de courant.|停电了。
une tension|La tension monte pendant la réunion.|会议期间气氛越来越紧张。|On mesure la tension électrique.|我们测量电压。
un circuit|Le circuit électrique est simple.|这个电路很简单。|Nous suivons un circuit de dix kilomètres.|我们沿一条十公里的环线行进。
un capteur|Le capteur mesure la température.|传感器测量温度。|Ce capteur détecte le mouvement.|这个传感器检测运动。
un moteur|Le moteur ne démarre pas.|发动机启动不了。|Cette voiture a un moteur électrique.|这辆车配有电动机。
un matériau|Le bois est un matériau naturel.|木材是一种天然材料。|Ce matériau est très léger.|这种材料很轻。
un composant|Il faut remplacer ce composant.|需要更换这个组件。|Chaque composant a une fonction.|每个组件都有一个功能。
un appareil|Cet appareil est facile à utiliser.|这个设备很容易使用。|J'éteins tous les appareils.|我关闭所有设备。
un outil|Il me manque un outil.|我缺一个工具。|Ce logiciel est un outil utile.|这个软件是一个实用工具。
un logiciel|J'installe un nouveau logiciel.|我安装一个新软件。|Ce logiciel est gratuit.|这个软件免费。
un fichier|J'enregistre le fichier.|我保存文件。|Peux-tu m'envoyer ce fichier ?|你能把这个文件发给我吗？
un dossier|Je crée un nouveau dossier.|我新建一个文件夹。|Ce dossier contient toutes les photos.|这个文件夹包含所有照片。
un mot de passe|J'ai oublié mon mot de passe.|我忘了密码。|Choisis un mot de passe différent.|选择一个不同的密码。
une sauvegarde|Je fais une sauvegarde de mes photos.|我备份照片。|La sauvegarde est terminée.|备份完成了。
une connexion|La connexion est lente.|网络连接很慢。|J'ai besoin d'une connexion Internet.|我需要网络连接。`,
`un climat|Cette région a un climat doux.|这个地区气候温和。|Le climat change selon les régions.|气候因地区而异。
la météo|Je regarde la météo avant de sortir.|出门前我看天气预报。|La météo annonce du soleil.|天气预报说会出太阳。
des précipitations|Les précipitations sont faibles ce mois-ci.|这个月降水少。|De fortes précipitations sont annoncées.|预报有强降水。
une averse|Une averse commence.|开始下阵雨了。|Nous attendons la fin de l'averse.|我们等阵雨停下来。
la neige|La neige couvre les arbres.|雪覆盖着树木。|Les enfants jouent dans la neige.|孩子们在雪地里玩。
le vent|Le vent souffle fort.|风刮得很大。|Il n'y a pas de vent ce matin.|今天早上没有风。
un orage|Un orage approche.|雷雨快来了。|L'orage nous a réveillés.|雷雨把我们吵醒了。
un éclair|J'ai vu un éclair.|我看见一道闪电。|Un éclair illumine le ciel.|一道闪电照亮天空。
le tonnerre|On entend le tonnerre.|能听到雷声。|Le tonnerre gronde au loin.|远处雷声隆隆。
le brouillard|Le brouillard cache la montagne.|雾遮住了山。|Il y a du brouillard ce matin.|今天早上有雾。
un nuage|Un nuage passe devant le soleil.|一朵云飘到太阳前面。|Le ciel est sans nuages.|天空万里无云。
une canicule|La canicule dure depuis trois jours.|酷暑已经持续三天。|Pendant la canicule, le parc reste calme.|酷暑期间，公园依然很安静。
le gel|Le gel a abîmé les plantes.|霜冻损坏了植物。|On annonce du gel cette nuit.|预报说今晚会有霜冻。
une sécheresse|La sécheresse touche cette région.|干旱影响了这个地区。|Les champs souffrent de la sécheresse.|田地受到干旱影响。
une inondation|L'inondation a fermé la route.|洪水导致道路封闭。|Le village se remet de l'inondation.|村庄正在从洪灾中恢复。
un incendie|Les pompiers éteignent un incendie.|消防员正在灭火。|L'incendie a détruit la grange.|火灾烧毁了谷仓。
un séisme|Un séisme a secoué la région.|这个地区发生了地震。|Le musée explique les séismes.|博物馆讲解地震知识。
un volcan|Ce volcan est encore actif.|这座火山仍然活跃。|Nous voyons le volcan au loin.|我们看到远处的火山。
un glacier|Le glacier est immense.|冰川很辽阔。|Nous observons le glacier depuis le sentier.|我们从小路上观察冰川。
un océan|L'océan semble infini.|海洋仿佛无边无际。|Elle rêve de traverser l'océan.|她梦想横渡海洋。
un fleuve|Ce fleuve traverse la ville.|这条河穿过城市。|Le fleuve se jette dans la mer.|这条河流入大海。
une rivière|Une rivière coule près du village.|一条河从村庄附近流过。|Nous marchons le long de la rivière.|我们沿河步行。
un lac|Le lac est calme ce matin.|今天早上湖面很平静。|Nous faisons le tour du lac.|我们绕湖走一圈。
un littoral|Le littoral attire les visiteurs.|沿海地区吸引游客。|Nous longeons le littoral à vélo.|我们骑车沿着海岸走。
une côte|On aperçoit la côte.|我们隐约看到海岸。|Cette côte est difficile à monter.|这个坡很难爬。
une marée|La marée monte.|潮水正在上涨。|À marée basse, la plage est immense.|退潮时，海滩非常宽阔。
une falaise|La falaise domine la mer.|悬崖俯瞰着大海。|Le sentier passe près de la falaise.|小路经过悬崖附近。
une vallée|Le village est dans une vallée.|村庄坐落在山谷里。|La vallée est très verte.|山谷绿意盎然。
une colline|Une maison se trouve sur la colline.|小山上有一栋房子。|Nous montons la colline à pied.|我们步行上山。
une forêt|Nous traversons la forêt.|我们穿过森林。|Cette forêt est très ancienne.|这片森林非常古老。
une racine|Les racines de cet arbre sont profondes.|这棵树的根很深。|Une racine dépasse du sol.|一条树根露出地面。
une feuille|Une feuille tombe de l'arbre.|一片叶子从树上落下。|Donne-moi une feuille de papier.|给我一张纸。
la faune|La faune locale est variée.|当地动物种类繁多。|Ce parc protège la faune.|这个公园保护野生动物。
un écosystème|La forêt forme un écosystème.|森林构成一个生态系统。|Cet écosystème est fragile.|这个生态系统很脆弱。
la biodiversité|Cette forêt abrite une grande biodiversité.|这片森林拥有丰富的生物多样性。|Nous étudions la biodiversité du lac.|我们研究湖泊的生物多样性。
la pollution|La pollution de l'air diminue.|空气污染有所减少。|La pollution touche aussi les rivières.|污染也影响河流。
une émission|L'usine réduit ses émissions.|工厂减少排放。|Je regarde une émission sur les voyages.|我看一档旅行节目。
le recyclage|Le recyclage du papier est utile.|纸张回收利用很有用。|Ces bouteilles partent au recyclage.|这些瓶子被送去回收利用。
l'agriculture|L'agriculture est importante dans cette région.|农业在这个地区很重要。|Elle étudie l'agriculture.|她学习农业。
une récolte|La récolte commence demain.|明天开始收割。|Cette année, la récolte est bonne.|今年收成很好。`,
`un appartement|Je cherche un appartement lumineux.|我在找采光好的公寓。|Son appartement est près de la gare.|他的公寓在车站附近。
un immeuble|Cet immeuble est très haut.|这栋楼很高。|J'habite dans cet immeuble.|我住在这栋楼里。
un étage|À quel étage habites-tu ?|你住在哪一层？|Nous montons un étage.|我们上一层楼。
un escalier|Je prends l'escalier.|我走楼梯。|L'escalier est étroit.|楼梯很窄。
un ascenseur|L'ascenseur est en panne.|电梯坏了。|Nous attendons l'ascenseur.|我们在等电梯。
un couloir|La chambre est au bout du couloir.|卧室在走廊尽头。|Le couloir est bien éclairé.|走廊照明很好。
une entrée|L'entrée est de l'autre côté.|入口在另一边。|Je prends une salade en entrée.|我点一份沙拉作前菜。
un salon|Nous sommes dans le salon.|我们在客厅。|Le salon donne sur le jardin.|客厅朝向花园。
une cuisine|La cuisine est petite mais pratique.|厨房虽小但很实用。|J'aime la cuisine française.|我喜欢法国菜。
une salle de bains|La salle de bains est libre.|浴室现在没人用。|Il nettoie la salle de bains.|他打扫浴室。
un balcon|Je prends mon café sur le balcon.|我在阳台上喝咖啡。|Le balcon donne sur la rue.|阳台朝向街道。
une terrasse|Nous déjeunons sur la terrasse.|我们在露台上吃午饭。|La terrasse est au soleil.|露台上阳光充足。
un toit|La pluie tombe sur le toit.|雨落在屋顶上。|Le toit est rouge.|屋顶是红色的。
un mur|Je peins le mur en blanc.|我把墙刷成白色。|Une photo est accrochée au mur.|墙上挂着一张照片。
le sol|Le sol est mouillé.|地面湿了。|Ce sol convient aux légumes.|这种土壤适合种蔬菜。
un plafond|Le plafond est très haut.|天花板很高。|Une lampe est fixée au plafond.|天花板上装着一盏灯。
le chauffage|J'allume le chauffage.|我打开暖气。|Le chauffage ne fonctionne plus.|暖气不能用了。
la climatisation|La climatisation est trop forte.|空调开得太强了。|Cette chambre a la climatisation.|这个房间有空调。
un robinet|Ferme le robinet.|关上水龙头。|Le robinet fuit.|水龙头漏水。
un évier|Les assiettes sont dans l'évier.|盘子在厨房水槽里。|Je nettoie l'évier.|我清洗水槽。
une douche|Je prends une douche le matin.|我早上洗淋浴。|La douche est au fond de la pièce.|淋浴间在房间里面。
une baignoire|La baignoire est pleine.|浴缸装满水了。|Cette salle de bains a une baignoire.|这间浴室有浴缸。
un miroir|Je me regarde dans le miroir.|我照镜子。|Le miroir est au-dessus du lavabo.|镜子在洗手池上方。
une armoire|Mes vêtements sont dans l'armoire.|我的衣服在衣柜里。|Cette armoire est en bois.|这个衣柜是木制的。
une étagère|Je pose le livre sur l'étagère.|我把书放在架子上。|Cette étagère est trop haute.|这个架子太高了。
un tiroir|Ouvre le premier tiroir.|打开第一个抽屉。|Mes clés sont dans le tiroir.|我的钥匙在抽屉里。
un rideau|Je ferme les rideaux.|我拉上窗帘。|Le rideau laisse passer la lumière.|窗帘透光。
un tapis|Le chat dort sur le tapis.|猫睡在地毯上。|Ce tapis est très doux.|这块地毯很柔软。
une couverture|J'ai besoin d'une couverture.|我需要一条毯子。|La couverture du livre est bleue.|这本书的封面是蓝色的。
un oreiller|Cet oreiller est confortable.|这个枕头很舒服。|Je voudrais un oreiller supplémentaire.|我想再要一个枕头。
un drap|Je change les draps.|我换床单。|Le drap est en coton.|床单是棉制的。
une serviette|La serviette est propre.|毛巾是干净的。|Pose la serviette à côté de l'assiette.|把餐巾放在盘子旁边。
un vêtement|Ce vêtement est trop grand.|这件衣服太大了。|Je range mes vêtements dans l'armoire.|我把衣服收进衣柜。
un tissu|Ce tissu est agréable au toucher.|这种布料摸起来很舒服。|Elle choisit un tissu bleu.|她选了一块蓝布。
une taille|Quelle taille portez-vous ?|您穿什么尺码？|Cette veste n'est pas à ma taille.|这件夹克的尺码不适合我。
une manche|Les manches sont trop longues.|袖子太长了。|Je retrousse mes manches.|我卷起袖子。
un col|Le col de ma chemise est froissé.|我衬衫的领子皱了。|Ce pull a un col rond.|这件毛衣是圆领的。
une couture|La couture est solide.|这处缝线很结实。|Elle apprend la couture.|她学习缝纫。
une fermeture éclair|La fermeture éclair est coincée.|拉链卡住了。|Ce sac a une fermeture éclair.|这个包有拉链。
une doublure|La doublure du manteau est douce.|大衣的衬里很柔软。|Cette veste a une doublure rouge.|这件夹克有红色衬里。`,
`un ingrédient|Il manque un ingrédient.|少了一种配料。|Je prépare tous les ingrédients.|我准备好所有配料。
une casserole|L'eau chauffe dans la casserole.|水在深锅里加热。|Cette casserole est trop petite.|这口锅太小了。
une poêle|Je fais cuire les œufs dans une poêle.|我用平底锅煎鸡蛋。|La poêle est chaude.|平底锅很烫。
un couvercle|Mets le couvercle sur la casserole.|把锅盖盖上。|Je ne trouve pas le couvercle.|我找不到盖子。
un four|Le pain est dans le four.|面包在烤箱里。|J'allume le four.|我打开烤箱。
une bouilloire|La bouilloire est pleine d'eau.|烧水壶里装满了水。|J'utilise une bouilloire électrique.|我用电热水壶。
une passoire|Je mets les pâtes dans la passoire.|我把意大利面放进沥水篮。|La passoire est dans l'évier.|沥水篮在水槽里。
une planche à découper|Je pose les légumes sur la planche à découper.|我把蔬菜放在砧板上。|La planche à découper est propre.|砧板是干净的。
un couteau|Ce couteau coupe bien.|这把刀很好切。|Je prends un couteau à pain.|我拿一把面包刀。
une fourchette|Il manque une fourchette.|少了一把叉子。|Je mange les pâtes avec une fourchette.|我用叉子吃意大利面。
une cuillère|Ajoute une cuillère de sucre.|加一勺糖。|La cuillère est dans la tasse.|勺子在杯子里。
une assiette|Mon assiette est vide.|我的盘子空了。|Je mets les assiettes sur la table.|我把盘子放在桌上。
un bol|Je prends un bol de soupe.|我要一碗汤。|Ce bol est assez grand.|这个碗够大。
un verre|Je voudrais un verre d'eau.|我想要一杯水。|Attention, le verre est fragile.|小心，玻璃杯容易碎。
une tasse|Je bois une tasse de thé.|我喝一杯茶。|Cette tasse est ma préférée.|这个杯子是我最喜欢的。
une portion|Une petite portion suffit.|一小份就够了。|Nous partageons une portion de frites.|我们分享一份薯条。
une recette|Cette recette est facile.|这个食谱很简单。|Je cherche une recette de soupe.|我在找一个汤的食谱。
une cuisson|La cuisson prend vingt minutes.|烹煮需要二十分钟。|Je vérifie la cuisson du gâteau.|我检查蛋糕烤熟了没有。
un assaisonnement|L'assaisonnement est parfait.|调味恰到好处。|Je prépare l'assaisonnement de la salade.|我准备沙拉的调味汁。
une épice|Cette épice sent très bon.|这种香料闻起来很香。|Elle ajoute des épices au riz.|她往米饭里加香料。
du sel|Il manque du sel.|缺点盐。|Passe-moi le sel, s'il te plaît.|请把盐递给我。
du sucre|Tu prends du sucre dans ton café ?|你的咖啡加糖吗？|Il reste un peu de sucre.|还剩一点糖。
de la farine|J'ajoute de la farine dans le bol.|我往碗里加面粉。|Il faut acheter de la farine.|需要买面粉。
de l'huile|Je mets de l'huile dans la poêle.|我往平底锅里倒油。|Cette huile vient d'Italie.|这种油来自意大利。
du beurre|Je mets du beurre sur le pain.|我把黄油抹在面包上。|Le beurre est au réfrigérateur.|黄油在冰箱里。
de la crème|Elle ajoute de la crème à la soupe.|她往汤里加奶油。|Cette crème est très épaisse.|这种奶油很浓稠。
un yaourt|Je mange un yaourt nature.|我吃一份原味酸奶。|Tu veux un yaourt aux fraises ?|你想要草莓酸奶吗？
de la viande|Je ne mange pas de viande.|我不吃肉。|La viande est déjà cuite.|肉已经熟了。
du bœuf|Nous préparons du bœuf aux carottes.|我们做胡萝卜炖牛肉。|Je voudrais deux tranches de bœuf.|我想要两片牛肉。
du porc|Ce plat contient du porc.|这道菜含有猪肉。|Le porc est servi avec du riz.|猪肉配米饭上桌。
un légume|La carotte est un légume.|胡萝卜是一种蔬菜。|J'achète des légumes au marché.|我在市场买蔬菜。
un fruit|Je prends un fruit après le repas.|我饭后吃一个水果。|Ces fruits sont bien mûrs.|这些水果熟透了。
une pomme de terre|Je coupe les pommes de terre.|我切土豆。|La pomme de terre est encore chaude.|土豆还很烫。
une carotte|Je râpe une carotte.|我把一根胡萝卜擦成丝。|Les carottes cuisent dans la soupe.|胡萝卜在汤里煮着。
un oignon|Je coupe un oignon.|我切一个洋葱。|Les oignons me font pleurer.|洋葱让我流泪。
de l'ail|Cette sauce contient de l'ail.|这个酱汁里有大蒜。|J'ajoute une gousse d'ail.|我加一瓣蒜。
un champignon|J'aime les champignons grillés.|我喜欢烤蘑菇。|Cette soupe contient des champignons.|这份汤里有蘑菇。
un haricot|Les haricots verts sont cuits.|四季豆煮熟了。|Elle prépare une salade de haricots.|她做豆子沙拉。
un dessert|Que prends-tu comme dessert ?|你想吃什么甜点？|Le dessert est délicieux.|甜点很好吃。
une saveur|J'aime la saveur de ce thé.|我喜欢这种茶的味道。|Cette épice apporte une nouvelle saveur.|这种香料带来一种新风味。`,
`la santé|Je suis en bonne santé.|我身体健康。|Elle travaille dans le domaine de la santé.|她在卫生健康领域工作。
une maladie|Le médecin explique la maladie.|医生解释病情。|Cette maladie l'oblige à se reposer.|这种病让他不得不休息。
un symptôme|Quels sont vos symptômes ?|您有什么症状？|Ce symptôme est apparu hier.|这个症状昨天出现了。
une douleur|J'ai une douleur dans le bras.|我的手臂疼。|La douleur a diminué.|疼痛减轻了。
la fièvre|Il a de la fièvre.|他发烧了。|La fièvre est tombée ce matin.|今天早上退烧了。
une infection|Le médecin recherche une infection.|医生检查是否有感染。|Cette infection est sous surveillance.|这次感染正在监测中。
une blessure|Sa blessure guérit lentement.|他的伤口愈合得很慢。|Le médecin examine la blessure.|医生检查伤口。
une cicatrice|J'ai une cicatrice sur la main.|我手上有一道疤。|La cicatrice est presque invisible.|疤痕几乎看不见了。
une allergie|Avez-vous une allergie ?|您有过敏情况吗？|Elle a une allergie aux chats.|她对猫过敏。
un traitement|Le médecin propose un traitement.|医生提出一个治疗方案。|Son traitement a commencé hier.|他的治疗昨天开始了。
un médicament|Le pharmacien explique ce médicament.|药剂师讲解这种药。|J'ai oublié le nom du médicament.|我忘了药名。
une ordonnance|Le médecin rédige une ordonnance.|医生开处方。|J'apporte mon ordonnance à la pharmacie.|我拿着处方去药店。
une consultation|La consultation dure vingt minutes.|问诊持续二十分钟。|J'ai une consultation demain matin.|我明天上午要去看诊。
un examen|Je passe un examen médical.|我做一次医学检查。|Les résultats de l'examen sont arrivés.|检查结果出来了。
un diagnostic|Le médecin explique son diagnostic.|医生解释诊断结果。|Nous attendons le diagnostic.|我们等待诊断结果。
une prise de sang|J'ai une prise de sang demain.|我明天要抽血检查。|L'infirmier prépare la prise de sang.|护士准备抽血。
un soin|Ce soin prend quelques minutes.|这项护理需要几分钟。|Elle reçoit des soins à domicile.|她在家接受护理。
une urgence|C'est une urgence.|这是紧急情况。|Il travaille aux urgences.|他在急诊科工作。
un hôpital|L'hôpital est près de chez moi.|医院在我家附近。|Elle rend visite à son ami à l'hôpital.|她去医院探望朋友。
une clinique|La clinique ouvre à huit heures.|诊所八点开门。|Il travaille dans une clinique.|他在一家诊所工作。
un médecin|Je prends rendez-vous chez le médecin.|我预约看医生。|Le médecin écoute le patient.|医生听病人说话。
un infirmier|L'infirmier entre dans la chambre.|护士走进病房。|Il veut devenir infirmier.|他想成为一名护士。
un chirurgien|Le chirurgien explique l'opération.|外科医生讲解手术。|Elle parle avec le chirurgien.|她和外科医生交谈。
un patient|Le patient attend dans la salle.|病人在房间里等候。|Le médecin rassure le patient.|医生安抚病人。
le corps|Le corps a besoin de repos.|身体需要休息。|Il apprend les parties du corps.|他学习身体各部位的名称。
la peau|J'ai la peau sèche.|我的皮肤干燥。|L'eau chaude réchauffe ma peau.|热水让我的皮肤暖和起来。
un muscle|Ce mouvement fait travailler les muscles.|这个动作锻炼肌肉。|J'ai mal aux muscles après la course.|跑步后我的肌肉疼。
un os|Le médecin regarde l'image de l'os.|医生查看骨骼影像。|Le chien enterre un os.|狗埋起一根骨头。
une articulation|Le genou est une articulation.|膝盖是一个关节。|Cette articulation me fait mal.|这个关节让我感到疼痛。
le cœur|Mon cœur bat vite.|我的心跳得很快。|Le médecin écoute son cœur.|医生听他的心音。
un poumon|L'air entre dans les poumons.|空气进入肺部。|Le médecin examine ses poumons.|医生检查他的肺。
l'estomac|J'ai mal à l'estomac.|我胃疼。|Mon estomac est vide.|我的胃空空的。
le cerveau|Le cerveau reçoit des informations.|大脑接收信息。|Ce livre parle du cerveau.|这本书讲大脑。
le sang|On analyse un échantillon de sang.|我们分析一份血液样本。|Elle donne son sang.|她献血。
la respiration|Sa respiration est calme.|他的呼吸很平稳。|J'écoute le bruit de ma respiration.|我听自己呼吸的声音。
le sommeil|Le bruit perturbe mon sommeil.|噪声打扰我的睡眠。|Je manque de sommeil.|我睡眠不足。
l'appétit|J'ai de l'appétit ce soir.|我今晚胃口很好。|Elle a perdu l'appétit.|她没了食欲。
la fatigue|Je ressens de la fatigue.|我感到疲倦。|La fatigue se voit sur son visage.|疲惫显露在他的脸上。
la guérison|La guérison prend du temps.|康复需要时间。|Nous espérons sa guérison.|我们希望他康复。
la convalescence|Il est en convalescence chez lui.|他在家休养。|Sa convalescence a duré plusieurs semaines.|他的恢复期持续了几周。`,
`un départ|Le départ est prévu à neuf heures.|计划九点出发。|Je prépare mon départ.|我准备动身。
une arrivée|L'arrivée du train est annoncée.|正在播报火车即将到站。|Préviens-moi de ton arrivée.|到了请告诉我。
un séjour|Notre séjour dure une semaine.|我们停留一周。|J'ai passé un bon séjour.|我度过了一段愉快的旅居时光。
une destination|Quelle est votre destination ?|您的目的地是哪里？|Nous changeons de destination.|我们改变目的地。
un itinéraire|Je prépare notre itinéraire.|我规划我们的路线。|Cet itinéraire évite le centre-ville.|这条路线避开市中心。
une escale|Nous faisons escale à Rome.|我们在罗马经停。|L'escale dure deux heures.|经停持续两小时。
une correspondance|J'ai une correspondance à Lyon.|我在里昂换乘。|Il ne faut pas rater la correspondance.|不能错过换乘班次。
un embarquement|L'embarquement commence bientôt.|马上开始登机。|Nous attendons à la porte d'embarquement.|我们在登机口等候。
un décollage|Le décollage est prévu dans dix minutes.|预计十分钟后起飞。|J'observe le décollage de l'avion.|我观看飞机起飞。
un atterrissage|L'atterrissage s'est bien passé.|降落很顺利。|Nous préparons l'atterrissage.|我们准备降落。
un vol|Mon vol est à midi.|我的航班在中午。|Le vol a duré trois heures.|飞行持续了三小时。
un équipage|L'équipage accueille les passagers.|机组人员迎接乘客。|L'équipage du bateau est expérimenté.|船上的船员经验丰富。
un passager|Un passager cherche sa place.|一位乘客在找座位。|Les passagers montent dans le bus.|乘客们登上公交车。
un bagage|J'ai un seul bagage.|我只有一件行李。|Où puis-je récupérer mes bagages ?|我在哪里领取行李？
la douane|Nous passons la douane.|我们通过海关。|Un agent de la douane vérifie ma valise.|一名海关工作人员检查我的行李箱。
un visa|Je demande un visa.|我申请签证。|Son visa est encore valable.|他的签证仍然有效。
un permis|J'ai obtenu mon permis de conduire.|我拿到驾照了。|Il présente son permis.|他出示许可证。
une réservation|J'ai une réservation à mon nom.|我用自己的名字做了预订。|Pouvez-vous confirmer ma réservation ?|您能确认我的预订吗？
un hébergement|Nous cherchons un hébergement pour ce soir.|我们在找今晚的住处。|L'hébergement est compris dans le prix.|价格包含住宿。
une auberge|Nous dormons dans une auberge.|我们住在一家旅舍。|Cette auberge est près du lac.|这家旅舍在湖边。
une réception|La réception est ouverte toute la nuit.|接待处整夜开放。|Je laisse la clé à la réception.|我把钥匙留在前台。
une consigne|Je laisse ma valise à la consigne.|我把行李箱放在寄存处。|Lisez bien les consignes.|请仔细阅读说明。
un quai|Le train arrive au quai numéro deux.|火车到达二号站台。|Nous attendons sur le quai.|我们在站台等候。
une voie|Le train part de la voie trois.|火车从三号轨道发车。|Cette voie est réservée aux bus.|这条车道专供公交车使用。
un rail|Le train roule sur des rails.|火车在铁轨上行驶。|Un rail doit être remplacé.|一根铁轨需要更换。
un tunnel|La route passe dans un tunnel.|公路穿过一条隧道。|Ce tunnel est très long.|这条隧道很长。
un pont|Nous traversons le pont.|我们过桥。|Le pont relie les deux quartiers.|这座桥连接两个街区。
un carrefour|Tourne à gauche au carrefour.|在十字路口左转。|Il y a beaucoup de voitures au carrefour.|十字路口有很多车。
un rond-point|Prends la deuxième sortie du rond-point.|在环岛的第二个出口驶出。|Le rond-point est fleuri.|环岛里种满了花。
un trottoir|Nous marchons sur le trottoir.|我们走在人行道上。|Le trottoir est étroit.|人行道很窄。
un passage piéton|Le passage piéton est devant l'école.|人行横道在学校前面。|Nous traversons au passage piéton.|我们走人行横道过街。
un feu tricolore|Le feu tricolore passe au vert.|交通信号灯变绿了。|Il s'arrête au feu tricolore.|他在红绿灯前停下。
un péage|Nous arrivons au péage.|我们到了收费站。|Le péage coûte cinq euros.|过路费是五欧元。
le stationnement|Le stationnement est gratuit ici.|这里停车免费。|Le panneau interdit le stationnement.|标志禁止停车。
un parking|Le parking est complet.|停车场满了。|Je cherche l'entrée du parking.|我在找停车场入口。
un carburant|Le prix du carburant augmente.|燃料价格上涨。|Cette voiture consomme peu de carburant.|这辆车油耗很低。
de l'essence|Il faut mettre de l'essence.|需要加汽油了。|Il reste peu d'essence.|汽油剩得不多了。
une station-service|La station-service est ouverte.|加油站开着。|Nous nous arrêtons à la station-service.|我们在加油站停下。
une location|La location de vélos est possible ici.|这里可以租自行车。|Cette voiture est une voiture de location.|这辆车是租来的。
une randonnée|Nous faisons une randonnée dimanche.|我们周日去徒步。|Cette randonnée dure trois heures.|这次徒步需要三小时。`,
`une culture|Je découvre une autre culture.|我了解另一种文化。|La culture de cette région est riche.|这个地区的文化很丰富。
un patrimoine|La ville protège son patrimoine.|这座城市保护自己的文化遗产。|Ce château fait partie du patrimoine local.|这座城堡是当地文化遗产的一部分。
une tradition|C'est une tradition familiale.|这是一个家庭传统。|Nous gardons cette tradition.|我们保留这个传统。
une coutume|Je découvre les coutumes locales.|我了解当地习俗。|Cette coutume est très ancienne.|这个习俗非常古老。
une histoire|Raconte-moi une histoire.|给我讲个故事。|Elle étudie l'histoire de France.|她学习法国历史。
une époque|À cette époque, je vivais à Paris.|那时我住在巴黎。|Ce bâtiment date d'une autre époque.|这栋建筑来自另一个时代。
un siècle|Un siècle dure cent ans.|一个世纪是一百年。|Cette maison a plus d'un siècle.|这栋房子有一百多年历史。
une génération|Chaque génération a ses habitudes.|每一代人都有自己的习惯。|Trois générations vivent dans cette maison.|三代人住在这栋房子里。
une œuvre|Cette œuvre me touche.|这件作品打动了我。|Le musée expose ses œuvres.|博物馆展出他的作品。
un auteur|Qui est l'auteur de ce livre ?|这本书的作者是谁？|L'auteur rencontre ses lecteurs.|作者与读者见面。
un roman|Je lis un roman français.|我读一本法国小说。|Ce roman raconte un voyage.|这部小说讲述一次旅行。
un poème|Elle écrit un poème.|她写一首诗。|J'apprends ce poème par cœur.|我背诵这首诗。
un conte|Ce conte parle d'un petit village.|这个故事讲的是一个小村庄。|Il lit un conte aux enfants.|他给孩子们读童话。
une intrigue|L'intrigue est facile à suivre.|情节很容易理解。|Ce film a une intrigue surprenante.|这部电影的情节令人意外。
un personnage|Ce personnage est très drôle.|这个角色很有趣。|Le personnage principal quitte sa ville.|主人公离开自己的城市。
un chapitre|Je lis un chapitre chaque soir.|我每晚读一章。|Le dernier chapitre est court.|最后一章很短。
un paragraphe|Lis le premier paragraphe.|读第一段。|Ce paragraphe résume l'idée principale.|这一段概括了主要观点。
un titre|Quel est le titre du film ?|电影叫什么名字？|Le titre attire mon attention.|标题吸引了我的注意。
une édition|J'ai une ancienne édition de ce livre.|我有这本书的旧版。|La nouvelle édition sort demain.|新版明天出版。
une publication|Cette publication est disponible en ligne.|这份出版物可以在线阅读。|La publication du livre est prévue en juin.|这本书计划六月出版。
un article|Je lis un article sur le cinéma.|我读一篇关于电影的文章。|Cet article est en promotion.|这件商品在促销。
un journal|Il lit le journal au café.|他在咖啡馆看报纸。|J'écris dans mon journal chaque soir.|我每晚写日记。
une revue|Elle achète une revue de cuisine.|她买一本烹饪杂志。|Cette revue paraît chaque mois.|这本杂志每月出版。
un lecteur|Les lecteurs posent des questions.|读者们提问。|Il est un lecteur passionné.|他是个热爱阅读的人。
une bibliothèque|J'emprunte un livre à la bibliothèque.|我在图书馆借一本书。|La bibliothèque ferme à dix-huit heures.|图书馆十八点关门。
une librairie|Cette librairie vend des livres d'occasion.|这家书店卖二手书。|Je passe à la librairie après le travail.|我下班后去一趟书店。
un spectacle|Le spectacle commence bientôt.|演出马上开始。|Nous avons aimé le spectacle.|我们很喜欢这场演出。
une scène|Les acteurs montent sur scène.|演员们登上舞台。|Cette scène du film est émouvante.|电影中的这一幕很感人。
une pièce|Nous regardons une pièce de théâtre.|我们看一场话剧。|Cette pièce de la maison est lumineuse.|房子的这个房间采光很好。
un théâtre|Le théâtre est près de la place.|剧院在广场附近。|Elle adore le théâtre.|她很喜欢戏剧。
un concert|Je vais à un concert ce soir.|我今晚去听音乐会。|Le concert dure deux heures.|音乐会持续两小时。
un orchestre|L'orchestre commence à jouer.|乐团开始演奏。|Elle joue dans un orchestre.|她在一个乐团演奏。
un instrument|Quel instrument joues-tu ?|你演奏什么乐器？|Le violon est un instrument à cordes.|小提琴是弦乐器。
une mélodie|Cette mélodie est douce.|这段旋律很柔和。|Je reconnais cette mélodie.|我认得这段旋律。
un rythme|Le rythme est rapide.|节奏很快。|Je marche au rythme de la musique.|我随着音乐的节奏走路。
une partition|Elle lit la partition.|她看乐谱。|J'ai oublié ma partition.|我忘带乐谱了。
une exposition|Nous visitons une exposition de photos.|我们参观一个摄影展。|L'exposition est gratuite.|这个展览免费。
une sculpture|Cette sculpture est en bois.|这件雕塑是木制的。|Une sculpture se trouve dans le jardin.|花园里有一座雕塑。
une peinture|J'admire cette peinture.|我欣赏这幅画。|La peinture du mur est encore fraîche.|墙上的油漆还没干。
une photographie|Cette photographie est très ancienne.|这张照片很久远了。|Elle apprend la photographie.|她学习摄影。`,
`pertinent|Ton exemple est pertinent.|你的例子很贴切。|Elle pose une question pertinente.|她提出一个切题的问题。
cohérent|Ton récit est cohérent.|你的叙述很连贯。|Nous voulons un plan cohérent.|我们想要一个前后一致的计划。
contradictoire|Ces réponses sont contradictoires.|这些回答相互矛盾。|Il donne des conseils contradictoires.|他给出的建议自相矛盾。
ambigu|Ce message est ambigu.|这条消息有歧义。|La phrase est un peu ambiguë.|这句话有点含糊。
explicite|La consigne est explicite.|指示很明确。|Il faut un accord explicite.|需要明确的同意。
implicite|Son accord est implicite.|他的同意是默许的。|C'est une règle implicite du groupe.|这是这个群体未明说的规则。
concret|Donne-moi un exemple concret.|给我一个具体的例子。|Nous cherchons une solution concrète.|我们在寻找具体的解决方案。
abstrait|Ce concept est abstrait.|这个概念很抽象。|Elle préfère la peinture abstraite.|她更喜欢抽象画。
complexe|Ce problème est complexe.|这个问题很复杂。|Le plan est trop complexe.|这个计划太复杂了。
simple|La réponse est simple.|答案很简单。|Je cherche une recette simple.|我在找一个简单的食谱。
essentiel|L'eau est essentielle à la vie.|水对生命至关重要。|C'est un point essentiel.|这是一个关键点。
secondaire|Ce détail est secondaire.|这个细节是次要的。|Elle joue un rôle secondaire.|她扮演一个次要角色。
principal|Quel est le problème principal ?|主要问题是什么？|L'entrée principale est à gauche.|正门在左边。
global|J'ai besoin d'une vue globale.|我需要了解全貌。|Le coût global est élevé.|总成本很高。
partiel|Voici un résultat partiel.|这是部分结果。|Elle travaille à temps partiel.|她做兼职工作。
complet|Le dossier est complet.|资料齐全了。|Le restaurant est complet ce soir.|餐馆今晚满座。
approfondi|Il faut un examen approfondi.|需要深入检查。|Son analyse est approfondie.|她的分析很深入。
préliminaire|Nous organisons une réunion préliminaire.|我们组织一次预备会议。|Ce résultat est préliminaire.|这是初步结果。
progressif|Le changement est progressif.|变化是逐步进行的。|Nous prévoyons une reprise progressive.|我们计划逐步恢复。
constant|La température reste constante.|温度保持恒定。|Elle fait des efforts constants.|她持续努力。
prévisible|La fin du film est prévisible.|这部电影的结局可以预料。|Ce retard était prévisible.|这次延误是可以预见的。
stable|Le prix reste stable.|价格保持稳定。|Cette table est stable.|这张桌子很稳。
instable|La connexion est instable.|网络连接不稳定。|Cette chaise semble instable.|这把椅子似乎不稳。
permanent|Le musée présente une exposition permanente.|博物馆设有常设展览。|Elle cherche un emploi permanent.|她在找一份长期工作。
temporaire|C'est une solution temporaire.|这是一个暂时的解决办法。|Le magasin annonce une fermeture temporaire.|商店宣布暂时关闭。
provisoire|Nous avons un accord provisoire.|我们有一个临时协议。|Ce planning est provisoire.|这个日程安排是暂定的。
ponctuel|Il est toujours ponctuel.|他总是准时。|C'est un besoin ponctuel.|这是一次性的需求。
régulier|Elle fait un travail régulier.|她持续而有规律地工作。|Les bus passent à intervalles réguliers.|公交车按固定间隔发车。
irrégulier|Ce verbe est irrégulier.|这个动词是不规则动词。|Ses horaires sont irréguliers.|他的工作时间不固定。
fréquent|Les retards sont fréquents.|延误经常发生。|C'est une erreur fréquente.|这是一个常见的错误。
exceptionnel|Cette vue est exceptionnelle.|这个景色非同寻常。|C'est un événement exceptionnel.|这是一个难得一见的事件。
ordinaire|C'est une journée ordinaire.|这是平常的一天。|Il porte des vêtements ordinaires.|他穿着普通的衣服。
particulier|Elle a un talent particulier.|她有一种特别的天赋。|Ce cas est particulier.|这个情况很特殊。
général|Voici une idée générale du projet.|这是项目的大致想法。|L'ambiance générale est agréable.|总体气氛很好。
spécifique|Ce problème demande une solution spécifique.|这个问题需要专门的解决办法。|Cet outil a un usage spécifique.|这个工具有特定用途。
individuel|Chaque élève fait un travail individuel.|每个学生独立完成一份作业。|Nous réservons deux chambres individuelles.|我们预订两个单人间。
collectif|C'est un effort collectif.|这是集体努力的结果。|Nous prenons une décision collective.|我们共同作出决定。
personnel|C'est mon avis personnel.|这是我个人的看法。|Ne touche pas à mes affaires personnelles.|别碰我的私人物品。
professionnel|Son comportement est professionnel.|他的举止很专业。|Elle prépare un voyage professionnel.|她准备一次出差。
autonome|Cet enfant devient autonome.|这个孩子逐渐能够独立生活。|Elle est autonome dans son travail.|她在工作中能独立完成任务。`,
`toutefois|Le trajet est court, toutefois il coûte cher.|路程短，不过费用高。|J'accepte, toutefois j'ai une question.|我同意，不过我有个问题。
par conséquent|Le magasin est fermé ; par conséquent, nous rentrons.|商店关门了，因此我们回去。|Il a oublié son billet ; par conséquent, il attend.|他忘了票，因此只能等着。
en outre|Ce vélo est léger. En outre, il est solide.|这辆自行车很轻，而且很结实。|Elle parle français et, en outre, apprend le chinois.|她会说法语，此外还在学中文。
par ailleurs|Le logement est agréable. Par ailleurs, il est bien situé.|这处住所很舒适，而且位置很好。|Je termine ce travail. Par ailleurs, je prépare un voyage.|我快做完这项工作了。另外，我在筹备旅行。
d'une part… d'autre part|D'une part, c'est loin ; d'autre part, c'est cher.|一方面路远，另一方面费用高。|D'une part, je travaille ; d'autre part, j'étudie.|一方面我工作，另一方面我学习。
autrement dit|Il est bilingue, autrement dit il parle deux langues.|他是双语使用者，换句话说，他会说两种语言。|Le magasin est fermé, autrement dit nous devons revenir.|商店关门了，换句话说，我们得再来。
c'est-à-dire|Je viens demain, c'est-à-dire mardi.|我明天来，也就是周二。|Il est midi, c'est-à-dire douze heures.|现在是中午，也就是十二点。
notamment|J'aime les fruits, notamment les pommes.|我喜欢水果，尤其是苹果。|Elle visite plusieurs villes, notamment Lyon.|她游览多个城市，其中包括里昂。
par exemple|Tu peux prendre un fruit, par exemple une poire.|你可以拿一个水果，比如梨。|J'aime les sports, par exemple la natation.|我喜欢运动，例如游泳。
en particulier|J'aime les fleurs, les roses en particulier.|我喜欢花，尤其是玫瑰。|Ce chapitre en particulier est utile.|这一章尤其有用。
en général|En général, je me lève tôt.|通常我起得早。|En général, les magasins ferment à dix-neuf heures.|一般来说，商店十九点关门。
dans l'ensemble|Dans l'ensemble, le voyage s'est bien passé.|总的来说，旅行很顺利。|Le résultat est bon dans l'ensemble.|结果总体不错。
en principe|En principe, je suis libre demain.|按理说，我明天有空。|En principe, la livraison arrive lundi.|正常情况下，货物周一送达。
en pratique|En pratique, cette méthode est simple.|实际操作时，这个方法很简单。|En pratique, nous utilisons surtout le bus.|实际生活中，我们主要坐公交车。
à vrai dire|À vrai dire, je suis fatigué.|说实话，我累了。|À vrai dire, je ne connais pas ce film.|说实话，我不知道这部电影。
en réalité|Il semble froid. En réalité, il est gentil.|他看起来冷淡，其实人很好。|En réalité, le trajet dure deux heures.|实际上，路程需要两小时。
en apparence|En apparence, tout va bien.|表面上，一切都好。|Cette question est simple en apparence.|这个问题看起来很简单。
à première vue|À première vue, les sacs sont identiques.|乍一看，这些包一模一样。|À première vue, cela semble facile.|乍一看，这似乎很容易。
au début|Au début, je ne comprenais rien.|起初我什么都听不懂。|Le nom apparaît au début du livre.|名字出现在书的开头。
à la fin|À la fin, tout le monde applaudit.|最后，所有人都鼓掌。|La réponse est à la fin du texte.|答案在文章结尾。
entre-temps|Je reviens à midi. Entre-temps, tu peux lire.|我中午回来。这期间，你可以读书。|Le bus arrive dans dix minutes ; entre-temps, nous attendons ici.|公交车十分钟后到，这期间我们在这里等。
dès que|Je t'appelle dès que j'arrive.|我一到就给你打电话。|Dès qu'il pleut, le chat rentre.|一下雨，猫就回家。
tant que|Reste ici tant que tu veux.|你想在这里待多久就待多久。|Tant qu'il fait beau, nous restons dehors.|只要天气好，我们就待在外面。
tandis que|Je cuisine tandis qu'elle lit.|我做饭的时候，她在看书。|Il aime le thé, tandis que je préfère le café.|他喜欢茶，而我更喜欢咖啡。
alors que|Il fait froid alors que nous sommes en été.|明明是夏天，天气却很冷。|Le téléphone sonne alors que je sors.|正当我要出门时，电话响了。
bien que|Bien qu'il soit tard, je continue.|虽然很晚了，我还是继续。|Elle sourit bien qu'elle soit fatiguée.|虽然她累了，但仍然微笑。
même si|Je viens même s'il pleut.|即使下雨，我也来。|Même si c'est difficile, j'essaie.|即使很难，我也试试。
pourvu que|Tu peux venir, pourvu que tu préviennes.|只要提前说一声，你就可以来。|Pourvu qu'il fasse beau demain !|但愿明天天气好！
à moins de|À moins de courir, nous serons en retard.|除非跑着去，否则我们会迟到。|À moins de changer d'avis, je partirai demain.|除非改变主意，否则我明天出发。
au cas où|Prends un parapluie au cas où il pleuvrait.|带把伞，以防下雨。|Je note ton numéro au cas où j'en aurais besoin.|我记下你的号码，以备需要时使用。
quant à|Quant à moi, je préfère rester.|至于我，我更想留下。|Quant au prix, il est raisonnable.|至于价格，还算合理。
par rapport à|Il fait chaud par rapport à hier.|和昨天相比，今天很暖和。|Ce sac est léger par rapport à l'autre.|和另一个相比，这个包很轻。
en fonction de|Choisis en fonction de tes besoins.|根据你的需要来选择。|Le prix change en fonction de la saison.|价格随季节变化。
à propos de|J'ai une question à propos du cours.|关于这门课，我有一个问题。|Elle m'écrit à propos de notre voyage.|她写信给我，谈我们的旅行。
au-delà de|Le village est au-delà de la rivière.|村庄在河的另一边。|Le résultat va au-delà de mes attentes.|结果超出了我的预期。
en deçà de|Le prix reste en deçà de notre budget.|价格仍低于我们的预算上限。|Le résultat est en deçà de mes attentes.|结果低于我的预期。
à travers|Nous marchons à travers la forêt.|我们步行穿过森林。|Je regarde à travers la fenêtre.|我透过窗户看。
auprès de|Elle reste auprès de sa mère.|她留在母亲身边。|Renseigne-toi auprès de la mairie.|向市政府咨询一下。
vis-à-vis de|Il est prudent vis-à-vis de cette offre.|他对这个报价很谨慎。|Elle se montre patiente vis-à-vis des enfants.|她对孩子们表现得很有耐心。
faute de|Faute de temps, je reste chez moi.|由于时间不够，我留在家里。|Le match est annulé faute de joueurs.|比赛因球员不足而取消。`,
];
export const expandedExamples = blocks.join("\n");
