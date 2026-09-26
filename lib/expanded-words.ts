// Original French–Chinese learning glosses. Append only: positions map to fr-361 onward.
const blocks = [
`croire|相信；认为是真的|动词|思辨与交流
penser|想；思索；认为|动词|思辨与交流
savoir|知道；懂得如何做|动词|思辨与交流
connaître|认识；熟悉|动词|思辨与交流
imaginer|想象；构想|动词|思辨与交流
supposer|假设；推测|动词|思辨与交流
estimer|估计；评价|动词|思辨与交流
considérer|把……看作；考虑|动词|思辨与交流
juger|判断；审判|动词|思辨与交流
analyser|分析|动词|思辨与交流
observer|观察；遵守规定|动词|思辨与交流
interpréter|解释含义；表演作品|动词|思辨与交流
déduire|推断；扣除|动词|思辨与交流
conclure|得出结论；缔结|动词|思辨与交流
démontrer|论证；证明|动词|思辨与交流
prouver|证实；证明属实|动词|思辨与交流
justifier|说明理由；证明合理|动词|思辨与交流
affirmer|肯定地说；断言|动词|思辨与交流
nier|否认|动词|思辨与交流
admettre|承认；准许进入|动词|思辨与交流
avouer|坦白；招认|动词|思辨与交流
prétendre|声称；自称|动词|思辨与交流
annoncer|宣布；预告|动词|思辨与交流
déclarer|声明；申报|动词|思辨与交流
souligner|强调；在下方画线|动词|思辨与交流
insister|坚持；反复强调|动词|思辨与交流
suggérer|建议；暗示|动词|思辨与交流
critiquer|批评；评论|动词|思辨与交流
approuver|赞同；批准|动词|思辨与交流
contredire|反驳；与……矛盾|动词|思辨与交流
mentionner|提及；注明|动词|思辨与交流
résumer|概括；总结|动词|思辨与交流
décrire|描述|动词|思辨与交流
raconter|讲述；叙述|动词|思辨与交流
traduire|翻译|动词|思辨与交流
définir|定义；界定|动词|思辨与交流
distinguer|区分；辨别|动词|思辨与交流
identifier|识别身份；确定性质|动词|思辨与交流
interroger|询问；考问|动词|思辨与交流
répondre|回答；回应|动词|思辨与交流`,
`commencer|开始|动词|行动与安排
continuer|继续|动词|行动与安排
terminer|结束；完成|动词|行动与安排
arrêter|停止；逮捕|动词|行动与安排
reprendre|重新开始；拿回|动词|行动与安排
poursuivre|继续进行；追赶|动词|行动与安排
lancer|抛出；发起|动词|行动与安排
créer|创造；创立|动词|行动与安排
produire|生产；产生|动词|行动与安排
fabriquer|制造；制作|动词|行动与安排
transformer|转变；改造|动词|行动与安排
adapter|使适应；改编|动词|行动与安排
modifier|修改；改变|动词|行动与安排
corriger|改正；批改|动词|行动与安排
installer|安装；安置|动词|行动与安排
supprimer|删除；废除|动词|行动与安排
déplacer|移动；搬动|动词|行动与安排
transporter|运输；运送|动词|行动与安排
livrer|送货；交付|动词|行动与安排
distribuer|分发；分配|动词|行动与安排
ranger|收拾；整理归位|动词|行动与安排
nettoyer|清洁；清洗|动词|行动与安排
remplir|填满；填写|动词|行动与安排
vider|倒空；清空|动词|行动与安排
couvrir|覆盖；遮盖|动词|行动与安排
découvrir|发现；揭开|动词|行动与安排
tenir|握住；维持|动词|行动与安排
poser|放置；提出问题|动词|行动与安排
lever|举起；抬起|动词|行动与安排
baisser|降低；放低|动词|行动与安排
tirer|拉；射击|动词|行动与安排
pousser|推；生长|动词|行动与安排
couper|切；剪；切断|动词|行动与安排
coller|粘贴；粘住|动词|行动与安排
mesurer|测量|动词|行动与安排
peser|称重；重达|动词|行动与安排
compter|数数；打算|动词|行动与安排
calculer|计算|动词|行动与安排
répartir|分摊；分配到各处|动词|行动与安排
rassembler|集合；汇集|动词|行动与安排`,
`ressentir|感受到；体会到|动词|感受与相处
éprouver|体验某种感受；考验|动词|感受与相处
souffrir|受苦；疼痛|动词|感受与相处
regretter|后悔；惋惜|动词|感受与相处
espérer|希望；盼望|动词|感受与相处
souhaiter|希望；祝愿|动词|感受与相处
désirer|渴望；想要|动词|感受与相处
préférer|更喜欢；宁愿|动词|感受与相处
détester|讨厌；憎恶|动词|感受与相处
admirer|钦佩；欣赏|动词|感受与相处
apprécier|欣赏；喜欢；评估|动词|感受与相处
respecter|尊重；遵守|动词|感受与相处
tolérer|容忍；允许存在|动词|感受与相处
pardonner|原谅|动词|感受与相处
remercier|感谢|动词|感受与相处
féliciter|祝贺；表扬|动词|感受与相处
saluer|问候；致意|动词|感受与相处
accueillir|迎接；接待|动词|感受与相处
accompagner|陪同；伴随|动词|感受与相处
rencontrer|遇见；会见|动词|感受与相处
inviter|邀请|动词|感受与相处
présenter|介绍；呈现|动词|感受与相处
discuter|讨论；交谈|动词|感受与相处
échanger|交换；交流|动词|感受与相处
collaborer|合作；协作|动词|感受与相处
aider|帮助|动词|感受与相处
conseiller|建议；向……提意见|动词|感受与相处
rassurer|使安心；打消顾虑|动词|感受与相处
consoler|安慰|动词|感受与相处
surprendre|使惊讶；出其不意地遇到|动词|感受与相处
décevoir|使失望|动词|感受与相处
blesser|弄伤；伤害感情|动词|感受与相处
menacer|威胁|动词|感受与相处
se disputer|争吵|动词|感受与相处
se réconcilier|和解；重归于好|动词|感受与相处
se méfier|警惕；提防|动词|感受与相处
se détendre|放松；松弛下来|动词|感受与相处
se reposer|休息|动词|感受与相处
s'ennuyer|感到无聊|动词|感受与相处
s'épanouir|舒展；充分发展自我|动词|感受与相处`,
`une idée|想法；主意|阴性名词|思考与论述
une pensée|思想；思绪|阴性名词|思考与论述
une réflexion|思考；反思|阴性名词|思考与论述
un raisonnement|推理；论证过程|阳性名词|思考与论述
un argument|论据；理由|阳性名词|思考与论述
une hypothèse|假设|阴性名词|思考与论述
une théorie|理论|阴性名词|思考与论述
un concept|概念|阳性名词|思考与论述
une notion|基本概念；初步知识|阴性名词|思考与论述
un principe|原则；原理|阳性名词|思考与论述
une logique|逻辑；推理方式|阴性名词|思考与论述
une analyse|分析；分析结果|阴性名词|思考与论述
une synthèse|综合；综述|阴性名词|思考与论述
une conclusion|结论；结尾|阴性名词|思考与论述
une explication|解释；说明|阴性名词|思考与论述
une définition|定义；清晰度|阴性名词|思考与论述
un exemple|例子；榜样|阳性名词|思考与论述
une comparaison|比较；比喻|阴性名词|思考与论述
une différence|区别；差异|阴性名词|思考与论述
une ressemblance|相似之处|阴性名词|思考与论述
une contradiction|矛盾；自相矛盾之处|阴性名词|思考与论述
une nuance|细微差别；色调|阴性名词|思考与论述
un détail|细节；小事|阳性名词|思考与论述
un contexte|背景；上下文|阳性名词|思考与论述
un point de vue|观点；观察角度|阳性名词|思考与论述
une perspective|前景；视角|阴性名词|思考与论述
une approche|处理方法；接近|阴性名词|思考与论述
une méthode|方法；有条理的做法|阴性名词|思考与论述
un critère|标准；判断依据|阳性名词|思考与论述
une condition|条件；状况|阴性名词|思考与论述
une exception|例外|阴性名词|思考与论述
une règle|规则；尺子|阴性名词|思考与论述
un fait|事实；事件|阳性名词|思考与论述
une cause|起因；事业目标|阴性名词|思考与论述
un effet|效果；影响|阳性名词|思考与论述
une influence|影响力；作用|阴性名词|思考与论述
une tendance|趋势；倾向|阴性名词|思考与论述
une certitude|确信；确定的事|阴性名词|思考与论述
une conviction|坚定信念|阴性名词|思考与论述
un préjugé|偏见；成见|阳性名词|思考与论述`,
`une entreprise|企业；公司|阴性名词|职场与项目
une société|社会；公司组织|阴性名词|职场与项目
une équipe|团队；队伍|阴性名词|职场与项目
un collègue|男同事；同僚|阳性名词|职场与项目
un employé|男雇员；职员|阳性名词|职场与项目
un employeur|雇主|阳性名词|职场与项目
un poste|职位；岗位|阳性名词|职场与项目
un emploi|工作职位；使用|阳性名词|职场与项目
un métier|职业；手艺|阳性名词|职场与项目
une profession|职业；专业工作|阴性名词|职场与项目
une carrière|职业生涯；采石场|阴性名词|职场与项目
une candidature|求职申请；候选资格|阴性名词|职场与项目
un curriculum vitae|个人简历|阳性名词|职场与项目
une lettre de motivation|求职信；申请动机信|阴性名词|职场与项目
un recrutement|招聘；招募|阳性名词|职场与项目
un stage|实习；短期培训|阳性名词|职场与项目
un diplôme|文凭；毕业证书|阳性名词|职场与项目
une qualification|资格；专业资质|阴性名词|职场与项目
une tâche|任务；待办工作|阴性名词|职场与项目
une mission|使命；受委派的工作|阴性名词|职场与项目
un projet|项目；计划|阳性名词|职场与项目
une étape|阶段；步骤|阴性名词|职场与项目
un planning|工作进度表；日程安排|阳性名词|职场与项目
une échéance|到期日；截止时间|阴性名词|职场与项目
une priorité|优先事项；优先权|阴性名词|职场与项目
une stratégie|策略；战略|阴性名词|职场与项目
une organisation|组织机构；组织安排|阴性名词|职场与项目
une gestion|管理；经营|阴性名词|职场与项目
une direction|方向；管理层|阴性名词|职场与项目
un service|服务；业务部门|阳性名词|职场与项目
un département|部门；法国的省|阳性名词|职场与项目
un partenaire|合作伙伴；搭档|阳性名词|职场与项目
un fournisseur|供应商|阳性名词|职场与项目
un client|顾客；客户|阳性名词|职场与项目
une commande|订单；操纵装置|阴性名词|职场与项目
une livraison|配送；交货|阴性名词|职场与项目
un stock|库存；存货|阳性名词|职场与项目
un réseau|网络；关系网|阳性名词|职场与项目
un contact|联系；接触|阳性名词|职场与项目
un compte rendu|情况报告；会议纪要|阳性名词|职场与项目`,
`un prix|价格；奖项|阳性名词|财务与消费
un tarif|价目；收费标准|阳性名词|财务与消费
un coût|成本；代价|阳性名词|财务与消费
un montant|金额；总额|阳性名词|财务与消费
une somme|一笔钱；总和|阴性名词|财务与消费
un revenu|收入|阳性名词|财务与消费
un bénéfice|利润；收益|阳性名词|财务与消费
une perte|损失；亏损|阴性名词|财务与消费
une dette|债务|阴性名词|财务与消费
un prêt|贷款；借出|阳性名词|财务与消费
un taux|比率；利率|阳性名词|财务与消费
un intérêt|兴趣；利益；利息|阳性名词|财务与消费
un impôt|税；税款|阳性名词|财务与消费
une taxe|税费；特定征收费|阴性名词|财务与消费
une promotion|促销；晋升|阴性名词|财务与消费
une réduction|减价；缩减|阴性名词|财务与消费
une remise|折扣；交付|阴性名词|财务与消费
un abonnement|订阅；包期服务|阳性名词|财务与消费
un paiement|付款；支付|阳性名词|财务与消费
un virement|银行转账|阳性名词|财务与消费
un prélèvement|自动扣款；取样|阳性名词|财务与消费
un dépôt|存入；存放|阳性名词|财务与消费
un retrait|取款；撤回|阳性名词|财务与消费
un solde|账户余额；结余|阳性名词|财务与消费
un compte|账户；账目|阳性名词|财务与消费
une carte bancaire|银行卡|阴性名词|财务与消费
la monnaie|货币；零钱|阴性名词|财务与消费
des espèces|现金|阴性名词|财务与消费
un chèque|支票|阳性名词|财务与消费
un reçu|收据；收条|阳性名词|财务与消费
une caisse|收银台；箱子|阴性名词|财务与消费
un achat|购买；买来的东西|阳性名词|财务与消费
une vente|出售；销售|阴性名词|财务与消费
un échange|交换；交流|阳性名词|财务与消费
une garantie|保修；担保|阴性名词|财务与消费
un investissement|投资；投入|阳性名词|财务与消费
un capital|资本；本金|阳性名词|财务与消费
un marché|市场；交易协议|阳性名词|财务与消费
une concurrence|竞争；同行竞争者|阴性名词|财务与消费
une pénurie|短缺；供应不足|阴性名词|财务与消费`,
`un État|国家；国家政权|阳性名词|社会与公共事务
un gouvernement|政府|阳性名词|社会与公共事务
un ministère|政府部门；部|阳性名词|社会与公共事务
une administration|行政机关；行政管理|阴性名词|社会与公共事务
une mairie|市政府；市政厅|阴性名词|社会与公共事务
une commune|市镇；基层行政区|阴性名词|社会与公共事务
une région|地区；区域|阴性名词|社会与公共事务
un territoire|领土；辖区|阳性名词|社会与公共事务
une population|人口；居民群体|阴性名词|社会与公共事务
un citoyen|公民；市民|阳性名词|社会与公共事务
une nationalité|国籍|阴性名词|社会与公共事务
une politique|政策；政治|阴性名词|社会与公共事务
une démocratie|民主；民主制度|阴性名词|社会与公共事务
une élection|选举|阴性名词|社会与公共事务
un vote|投票；表决|阳性名词|社会与公共事务
une loi|法律；定律|阴性名词|社会与公共事务
un droit|权利；法律学科|阳性名词|社会与公共事务
un devoir|义务；应尽的责任|阳性名词|社会与公共事务
un tribunal|法院；法庭|阳性名词|社会与公共事务
un procès|诉讼；审判|阳性名词|社会与公共事务
un juge|法官；裁判者|阳性名词|社会与公共事务
une plainte|投诉；控告|阴性名词|社会与公共事务
une amende|罚款|阴性名词|社会与公共事务
une peine|刑罚；痛苦|阴性名词|社会与公共事务
une prison|监狱|阴性名词|社会与公共事务
la sécurité|安全；治安|阴性名词|社会与公共事务
la justice|公正；司法|阴性名词|社会与公共事务
la liberté|自由|阴性名词|社会与公共事务
l'égalité|平等；相等|阴性名词|社会与公共事务
une inégalité|不平等；不等式|阴性名词|社会与公共事务
une discrimination|歧视；区别对待|阴性名词|社会与公共事务
une association|协会；联合|阴性名词|社会与公共事务
un syndicat|工会；行业联合组织|阳性名词|社会与公共事务
une manifestation|示威；公开活动|阴性名词|社会与公共事务
une réforme|改革|阴性名词|社会与公共事务
une mesure|措施；度量|阴性名词|社会与公共事务
un service public|公共服务；公共事业|阳性名词|社会与公共事务
une autorisation|许可；授权|阴性名词|社会与公共事务
une interdiction|禁止；禁令|阴性名词|社会与公共事务
une obligation|义务；强制要求|阴性名词|社会与公共事务`,
`une recherche|研究；查找|阴性名词|科学与数字生活
une découverte|发现；新发现的事物|阴性名词|科学与数字生活
un protocole|实验流程；协议规程|阳性名词|科学与数字生活
une variable|变量|阴性名词|科学与数字生活
un paramètre|参数|阳性名词|科学与数字生活
un échantillon|样本；样品|阳性名词|科学与数字生活
une donnée|一项数据；已知条件|阴性名词|科学与数字生活
la statistique|统计学；统计方法|阴性名词|科学与数字生活
une probabilité|概率；可能性大小|阴性名词|科学与数字生活
une moyenne|平均数；平均水平|阴性名词|科学与数字生活
une proportion|比例；占比|阴性名词|科学与数字生活
une quantité|数量；量|阴性名词|科学与数字生活
une unité|单位；整体中的单元|阴性名词|科学与数字生活
un volume|体积；音量|阳性名词|科学与数字生活
une surface|表面；面积|阴性名词|科学与数字生活
une longueur|长度|阴性名词|科学与数字生活
une largeur|宽度|阴性名词|科学与数字生活
une hauteur|高度|阴性名词|科学与数字生活
une profondeur|深度|阴性名词|科学与数字生活
une vitesse|速度|阴性名词|科学与数字生活
une force|力；力量|阴性名词|科学与数字生活
une pression|压力；压强|阴性名词|科学与数字生活
une température|温度|阴性名词|科学与数字生活
une énergie|能量；精力|阴性名词|科学与数字生活
une puissance|功率；强大力量|阴性名词|科学与数字生活
un courant|电流；水流|阳性名词|科学与数字生活
une tension|电压；紧张状态|阴性名词|科学与数字生活
un circuit|电路；环形路线|阳性名词|科学与数字生活
un capteur|传感器|阳性名词|科学与数字生活
un moteur|发动机；电动机|阳性名词|科学与数字生活
un matériau|材料；制造用料|阳性名词|科学与数字生活
un composant|组件；组成部分|阳性名词|科学与数字生活
un appareil|设备；仪器|阳性名词|科学与数字生活
un outil|工具|阳性名词|科学与数字生活
un logiciel|软件|阳性名词|科学与数字生活
un fichier|电脑文件|阳性名词|科学与数字生活
un dossier|文件夹；档案资料|阳性名词|科学与数字生活
un mot de passe|密码|阳性名词|科学与数字生活
une sauvegarde|备份；保护措施|阴性名词|科学与数字生活
une connexion|连接；网络接入|阴性名词|科学与数字生活`,
`un climat|气候|阳性名词|自然与生态
la météo|天气情况；天气预报|阴性名词|自然与生态
des précipitations|降水；降水量|阴性名词|自然与生态
une averse|阵雨|阴性名词|自然与生态
la neige|雪|阴性名词|自然与生态
le vent|风|阳性名词|自然与生态
un orage|雷雨；暴风雨|阳性名词|自然与生态
un éclair|闪电；一闪|阳性名词|自然与生态
le tonnerre|雷声|阳性名词|自然与生态
le brouillard|雾|阳性名词|自然与生态
un nuage|云；云团|阳性名词|自然与生态
une canicule|持续酷暑；热浪|阴性名词|自然与生态
le gel|结冰；霜冻|阳性名词|自然与生态
une sécheresse|干旱；干燥|阴性名词|自然与生态
une inondation|洪水；水淹|阴性名词|自然与生态
un incendie|火灾|阳性名词|自然与生态
un séisme|地震|阳性名词|自然与生态
un volcan|火山|阳性名词|自然与生态
un glacier|冰川|阳性名词|自然与生态
un océan|海洋|阳性名词|自然与生态
un fleuve|直接流入海洋的河流|阳性名词|自然与生态
une rivière|河流；通常汇入另一条河|阴性名词|自然与生态
un lac|湖泊|阳性名词|自然与生态
un littoral|沿海地带|阳性名词|自然与生态
une côte|海岸；坡道；肋骨|阴性名词|自然与生态
une marée|潮汐；潮水|阴性名词|自然与生态
une falaise|悬崖；峭壁|阴性名词|自然与生态
une vallée|山谷；河谷|阴性名词|自然与生态
une colline|丘陵；小山|阴性名词|自然与生态
une forêt|森林|阴性名词|自然与生态
une racine|根；根源|阴性名词|自然与生态
une feuille|叶子；一张纸|阴性名词|自然与生态
la faune|一个地区的动物群|阴性名词|自然与生态
un écosystème|生态系统|阳性名词|自然与生态
la biodiversité|生物多样性|阴性名词|自然与生态
la pollution|污染|阴性名词|自然与生态
une émission|排放；广播或电视节目|阴性名词|自然与生态
le recyclage|回收利用|阳性名词|自然与生态
l'agriculture|农业|阴性名词|自然与生态
une récolte|收获；收成|阴性名词|自然与生态`,
`un appartement|公寓；套房|阳性名词|居家与衣物
un immeuble|楼房；多层建筑|阳性名词|居家与衣物
un étage|楼层|阳性名词|居家与衣物
un escalier|楼梯|阳性名词|居家与衣物
un ascenseur|电梯|阳性名词|居家与衣物
un couloir|走廊；通道|阳性名词|居家与衣物
une entrée|入口；前菜|阴性名词|居家与衣物
un salon|客厅；沙龙|阳性名词|居家与衣物
une cuisine|厨房；烹饪|阴性名词|居家与衣物
une salle de bains|浴室|阴性名词|居家与衣物
un balcon|阳台|阳性名词|居家与衣物
une terrasse|露台；户外平台|阴性名词|居家与衣物
un toit|屋顶|阳性名词|居家与衣物
un mur|墙|阳性名词|居家与衣物
le sol|地面；土壤|阳性名词|居家与衣物
un plafond|天花板；上限|阳性名词|居家与衣物
le chauffage|供暖；暖气|阳性名词|居家与衣物
la climatisation|空调；空气调节|阴性名词|居家与衣物
un robinet|水龙头；阀门|阳性名词|居家与衣物
un évier|厨房洗涤槽|阳性名词|居家与衣物
une douche|淋浴；淋浴设备|阴性名词|居家与衣物
une baignoire|浴缸|阴性名词|居家与衣物
un miroir|镜子|阳性名词|居家与衣物
une armoire|衣柜；立柜|阴性名词|居家与衣物
une étagère|置物架；搁板|阴性名词|居家与衣物
un tiroir|抽屉|阳性名词|居家与衣物
un rideau|窗帘；帘幕|阳性名词|居家与衣物
un tapis|地毯；垫子|阳性名词|居家与衣物
une couverture|毯子；封面；覆盖|阴性名词|居家与衣物
un oreiller|枕头|阳性名词|居家与衣物
un drap|床单|阳性名词|居家与衣物
une serviette|毛巾；餐巾|阴性名词|居家与衣物
un vêtement|衣物；一件衣服|阳性名词|居家与衣物
un tissu|布料；组织|阳性名词|居家与衣物
une taille|尺码；身高；腰围|阴性名词|居家与衣物
une manche|袖子；一局比赛|阴性名词|居家与衣物
un col|衣领；山口|阳性名词|居家与衣物
une couture|缝纫；接缝|阴性名词|居家与衣物
une fermeture éclair|拉链|阴性名词|居家与衣物
une doublure|衣服的衬里；替身|阴性名词|居家与衣物`,
`un ingrédient|配料；原料|阳性名词|餐饮与烹饪
une casserole|长柄深锅|阴性名词|餐饮与烹饪
une poêle|平底煎锅|阴性名词|餐饮与烹饪
un couvercle|盖子；锅盖|阳性名词|餐饮与烹饪
un four|烤箱；炉窑|阳性名词|餐饮与烹饪
une bouilloire|烧水壶|阴性名词|餐饮与烹饪
une passoire|滤网；沥水篮|阴性名词|餐饮与烹饪
une planche à découper|砧板；切菜板|阴性名词|餐饮与烹饪
un couteau|刀；餐刀|阳性名词|餐饮与烹饪
une fourchette|叉子；数值范围|阴性名词|餐饮与烹饪
une cuillère|勺子|阴性名词|餐饮与烹饪
une assiette|盘子|阴性名词|餐饮与烹饪
un bol|碗|阳性名词|餐饮与烹饪
un verre|玻璃杯；玻璃|阳性名词|餐饮与烹饪
une tasse|茶杯；咖啡杯|阴性名词|餐饮与烹饪
une portion|一份食物；一部分|阴性名词|餐饮与烹饪
une recette|食谱；收入款项|阴性名词|餐饮与烹饪
une cuisson|烹煮；熟制过程|阴性名词|餐饮与烹饪
un assaisonnement|调味；调味料|阳性名词|餐饮与烹饪
une épice|香料|阴性名词|餐饮与烹饪
du sel|盐|阳性名词|餐饮与烹饪
du sucre|糖|阳性名词|餐饮与烹饪
de la farine|面粉|阴性名词|餐饮与烹饪
de l'huile|油|阴性名词|餐饮与烹饪
du beurre|黄油|阳性名词|餐饮与烹饪
de la crème|奶油；乳霜|阴性名词|餐饮与烹饪
un yaourt|酸奶|阳性名词|餐饮与烹饪
de la viande|肉；肉类|阴性名词|餐饮与烹饪
du bœuf|牛肉|阳性名词|餐饮与烹饪
du porc|猪肉|阳性名词|餐饮与烹饪
un légume|蔬菜|阳性名词|餐饮与烹饪
un fruit|水果；果实|阳性名词|餐饮与烹饪
une pomme de terre|土豆|阴性名词|餐饮与烹饪
une carotte|胡萝卜|阴性名词|餐饮与烹饪
un oignon|洋葱|阳性名词|餐饮与烹饪
de l'ail|大蒜|阳性名词|餐饮与烹饪
un champignon|蘑菇；真菌|阳性名词|餐饮与烹饪
un haricot|菜豆；豆角|阳性名词|餐饮与烹饪
un dessert|甜点；餐后甜食|阳性名词|餐饮与烹饪
une saveur|滋味；风味|阴性名词|餐饮与烹饪`,
`la santé|健康|阴性名词|身体与健康
une maladie|疾病|阴性名词|身体与健康
un symptôme|症状|阳性名词|身体与健康
une douleur|疼痛；痛苦|阴性名词|身体与健康
la fièvre|发烧；发热|阴性名词|身体与健康
une infection|感染|阴性名词|身体与健康
une blessure|伤口；受伤|阴性名词|身体与健康
une cicatrice|疤痕|阴性名词|身体与健康
une allergie|过敏|阴性名词|身体与健康
un traitement|治疗；处理|阳性名词|身体与健康
un médicament|药物|阳性名词|身体与健康
une ordonnance|处方；法令|阴性名词|身体与健康
une consultation|问诊；咨询|阴性名词|身体与健康
un examen|检查；考试|阳性名词|身体与健康
un diagnostic|诊断；问题判断|阳性名词|身体与健康
une prise de sang|抽血；采血检查|阴性名词|身体与健康
un soin|护理；照料|阳性名词|身体与健康
une urgence|紧急情况；急症|阴性名词|身体与健康
un hôpital|医院|阳性名词|身体与健康
une clinique|诊所；专科医院|阴性名词|身体与健康
un médecin|医生|阳性名词|身体与健康
un infirmier|男护士|阳性名词|身体与健康
un chirurgien|外科医生|阳性名词|身体与健康
un patient|病人；患者|阳性名词|身体与健康
le corps|身体；主体|阳性名词|身体与健康
la peau|皮肤；表皮|阴性名词|身体与健康
un muscle|肌肉|阳性名词|身体与健康
un os|骨头|阳性名词|身体与健康
une articulation|关节；连接处|阴性名词|身体与健康
le cœur|心脏；中心|阳性名词|身体与健康
un poumon|肺|阳性名词|身体与健康
l'estomac|胃|阳性名词|身体与健康
le cerveau|大脑|阳性名词|身体与健康
le sang|血液|阳性名词|身体与健康
la respiration|呼吸|阴性名词|身体与健康
le sommeil|睡眠|阳性名词|身体与健康
l'appétit|食欲；胃口|阳性名词|身体与健康
la fatigue|疲劳；劳累|阴性名词|身体与健康
la guérison|痊愈；治愈|阴性名词|身体与健康
la convalescence|病后恢复期|阴性名词|身体与健康`,
`un départ|出发；离去|阳性名词|旅行与交通
une arrivée|到达；抵达|阴性名词|旅行与交通
un séjour|停留；居留|阳性名词|旅行与交通
une destination|目的地；用途|阴性名词|旅行与交通
un itinéraire|路线；行程安排|阳性名词|旅行与交通
une escale|中途停靠；经停|阴性名词|旅行与交通
une correspondance|换乘；通信往来|阴性名词|旅行与交通
un embarquement|登机；登船|阳性名词|旅行与交通
un décollage|飞机起飞|阳性名词|旅行与交通
un atterrissage|飞机降落|阳性名词|旅行与交通
un vol|飞行；航班；偷窃|阳性名词|旅行与交通
un équipage|机组；船员团队|阳性名词|旅行与交通
un passager|乘客|阳性名词|旅行与交通
un bagage|行李；知识储备|阳性名词|旅行与交通
la douane|海关|阴性名词|旅行与交通
un visa|签证|阳性名词|旅行与交通
un permis|许可证；驾驶执照|阳性名词|旅行与交通
une réservation|预订；预约保留|阴性名词|旅行与交通
un hébergement|住宿；临时接待|阳性名词|旅行与交通
une auberge|旅舍；小客栈|阴性名词|旅行与交通
une réception|接待处；招待会|阴性名词|旅行与交通
une consigne|寄存处；指示要求|阴性名词|旅行与交通
un quai|站台；码头|阳性名词|旅行与交通
une voie|道路；轨道；途径|阴性名词|旅行与交通
un rail|铁轨|阳性名词|旅行与交通
un tunnel|隧道|阳性名词|旅行与交通
un pont|桥|阳性名词|旅行与交通
un carrefour|十字路口；交汇点|阳性名词|旅行与交通
un rond-point|环形交叉路口|阳性名词|旅行与交通
un trottoir|人行道|阳性名词|旅行与交通
un passage piéton|人行横道；斑马线|阳性名词|旅行与交通
un feu tricolore|交通信号灯；红绿灯|阳性名词|旅行与交通
un péage|过路费；收费站|阳性名词|旅行与交通
le stationnement|停车；车辆停放|阳性名词|旅行与交通
un parking|停车场|阳性名词|旅行与交通
un carburant|燃料；车用燃料|阳性名词|旅行与交通
de l'essence|汽油|阴性名词|旅行与交通
une station-service|加油站|阴性名词|旅行与交通
une location|租赁；租用|阴性名词|旅行与交通
une randonnée|徒步远足|阴性名词|旅行与交通`,
`une culture|文化；栽培|阴性名词|文化与阅读
un patrimoine|文化遗产；财产|阳性名词|文化与阅读
une tradition|传统|阴性名词|文化与阅读
une coutume|习俗；风俗|阴性名词|文化与阅读
une histoire|历史；故事|阴性名词|文化与阅读
une époque|时代；时期|阴性名词|文化与阅读
un siècle|世纪；一百年|阳性名词|文化与阅读
une génération|一代人；世代|阴性名词|文化与阅读
une œuvre|作品；创作成果|阴性名词|文化与阅读
un auteur|作者；创作者|阳性名词|文化与阅读
un roman|长篇小说|阳性名词|文化与阅读
un poème|诗；一首诗|阳性名词|文化与阅读
un conte|童话；故事短篇|阳性名词|文化与阅读
une intrigue|情节；阴谋|阴性名词|文化与阅读
un personnage|人物；角色|阳性名词|文化与阅读
un chapitre|章节；一章|阳性名词|文化与阅读
un paragraphe|段落|阳性名词|文化与阅读
un titre|标题；称号|阳性名词|文化与阅读
une édition|版本；出版发行|阴性名词|文化与阅读
une publication|出版物；发表|阴性名词|文化与阅读
un article|文章；商品；条款|阳性名词|文化与阅读
un journal|报纸；日记|阳性名词|文化与阅读
une revue|期刊；杂志|阴性名词|文化与阅读
un lecteur|读者；读取设备|阳性名词|文化与阅读
une bibliothèque|图书馆；书柜|阴性名词|文化与阅读
une librairie|书店|阴性名词|文化与阅读
un spectacle|演出；场面|阳性名词|文化与阅读
une scène|舞台；场景|阴性名词|文化与阅读
une pièce|戏剧作品；房间；零件|阴性名词|文化与阅读
un théâtre|剧院；戏剧|阳性名词|文化与阅读
un concert|音乐会|阳性名词|文化与阅读
un orchestre|管弦乐队；乐团|阳性名词|文化与阅读
un instrument|乐器；仪器|阳性名词|文化与阅读
une mélodie|旋律；曲调|阴性名词|文化与阅读
un rythme|节奏；规律|阳性名词|文化与阅读
une partition|乐谱；分割|阴性名词|文化与阅读
une exposition|展览；暴露|阴性名词|文化与阅读
une sculpture|雕塑；雕刻作品|阴性名词|文化与阅读
une peinture|绘画；油漆|阴性名词|文化与阅读
une photographie|照片；摄影|阴性名词|文化与阅读`,
`pertinent|切题的；相关而恰当的|形容词|描述与辨析
cohérent|连贯的；一致的|形容词|描述与辨析
contradictoire|相互矛盾的|形容词|描述与辨析
ambigu|有歧义的；含糊的|形容词|描述与辨析
explicite|明确说出的；清楚表达的|形容词|描述与辨析
implicite|隐含的；未明说的|形容词|描述与辨析
concret|具体的；实在的|形容词|描述与辨析
abstrait|抽象的|形容词|描述与辨析
complexe|复杂的|形容词|描述与辨析
simple|简单的；朴素的|形容词|描述与辨析
essentiel|至关重要的；本质的|形容词|描述与辨析
secondaire|次要的；中等教育的|形容词|描述与辨析
principal|主要的|形容词|描述与辨析
global|整体的；总体的|形容词|描述与辨析
partiel|部分的；不完全的|形容词|描述与辨析
complet|完整的；齐全的|形容词|描述与辨析
approfondi|深入的；详尽的|形容词|描述与辨析
préliminaire|初步的；准备阶段的|形容词|描述与辨析
progressif|逐步的；渐进的|形容词|描述与辨析
constant|恒定的；持续不变的|形容词|描述与辨析
prévisible|可预见的；可预测的|形容词|描述与辨析
stable|稳定的|形容词|描述与辨析
instable|不稳定的|形容词|描述与辨析
permanent|永久的；长期存在的|形容词|描述与辨析
temporaire|暂时的；有期限的|形容词|描述与辨析
provisoire|临时采用的；尚待最终确定的|形容词|描述与辨析
ponctuel|准时的；偶发的|形容词|描述与辨析
régulier|有规律的；定期的|形容词|描述与辨析
irrégulier|不规则的；不定期的|形容词|描述与辨析
fréquent|频繁的；常发生的|形容词|描述与辨析
exceptionnel|例外的；非凡的|形容词|描述与辨析
ordinaire|普通的；平常的|形容词|描述与辨析
particulier|特别的；个别的|形容词|描述与辨析
général|一般的；总体性的|形容词|描述与辨析
spécifique|特定的；专属的|形容词|描述与辨析
individuel|个人的；单独的|形容词|描述与辨析
collectif|集体的；共同的|形容词|描述与辨析
personnel|个人的；私人的|形容词|描述与辨析
professionnel|职业的；专业的|形容词|描述与辨析
autonome|自主的；能独立行动的|形容词|描述与辨析`,
`toutefois|不过；然而|副词|连接与论述表达
par conséquent|因此；由此可见|表达|连接与论述表达
en outre|此外；而且|表达|连接与论述表达
par ailleurs|另外；在其他方面|表达|连接与论述表达
d'une part… d'autre part|一方面……另一方面……|表达|连接与论述表达
autrement dit|换句话说|表达|连接与论述表达
c'est-à-dire|也就是说；即|表达|连接与论述表达
notamment|尤其；特别是|副词|连接与论述表达
par exemple|例如|表达|连接与论述表达
en particulier|特别；尤其是|表达|连接与论述表达
en général|一般来说；通常|表达|连接与论述表达
dans l'ensemble|总体而言；大体上|表达|连接与论述表达
en principe|原则上；按理说|表达|连接与论述表达
en pratique|实际上操作时；在实践中|表达|连接与论述表达
à vrai dire|说实话；坦率地说|表达|连接与论述表达
en réalité|实际上；事实上|表达|连接与论述表达
en apparence|表面上；看起来|表达|连接与论述表达
à première vue|乍一看；初看之下|表达|连接与论述表达
au début|起初；在开头|表达|连接与论述表达
à la fin|最后；在结尾|表达|连接与论述表达
entre-temps|在这期间|副词|连接与论述表达
dès que|一……就……|表达|连接与论述表达
tant que|只要；在……期间一直|表达|连接与论述表达
tandis que|而；在……的同时|表达|连接与论述表达
alors que|而；正当……的时候|表达|连接与论述表达
bien que|虽然；尽管（后接虚拟式）|表达|连接与论述表达
même si|即使；就算|表达|连接与论述表达
pourvu que|只要；但愿（后接虚拟式）|表达|连接与论述表达
à moins de|除非（后接名词或动词原形）|表达|连接与论述表达
au cas où|以防；万一|表达|连接与论述表达
quant à|至于；关于|表达|连接与论述表达
par rapport à|与……相比；相对于|表达|连接与论述表达
en fonction de|根据；随着……而定|表达|连接与论述表达
à propos de|关于；谈到|表达|连接与论述表达
au-delà de|超过；在……之外|表达|连接与论述表达
en deçà de|在……以内；低于某界限|表达|连接与论述表达
à travers|穿过；通过|表达|连接与论述表达
auprès de|在……身边；向某人或机构|表达|连接与论述表达
vis-à-vis de|面对；对于|表达|连接与论述表达
faute de|由于缺乏；因没有|表达|连接与论述表达`,
];
export const expandedEntries = blocks.join("\n");
