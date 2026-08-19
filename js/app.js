/* =====================================================
   CangCheng · 古韵新生 仓城导览
   景点数据 + 页面路由渲染
   ===================================================== */

/* ---------------- 景点数据 ---------------- */
var SITES = [
    {
        id: "dacangqiao",
        name: "大仓桥",
        tag: "明代石桥",
        type: "古建筑",
        ph: "ph-1",
        img: "img/spots/dacangqiao.jpg",
        mx: 150, my: 260,   /* 大仓桥：跨河位置（西端） */
        lat: 31.0075, lng: 121.2145,   /* 真实地图 WGS-84 估算值，可用 GPS 实测替换 */
        brief: "上海地区著名的明代五孔大石桥，明清松江漕运的起点与见证。",
        intro: "大仓桥位于仓城历史文化风貌区核心，是上海地区著名的明代大石桥之一。桥身五孔拱形，全长约五十米，青石桥身、花岗岩桥阶，共九十二级台阶。站在桥顶，可一览市河两岸的江南古镇风貌。",
        history: "大仓桥始建于明代天启年间，原名「永丰桥」，因桥南正是松江府漕运仓城所在，故俗称「大仓桥」。据记载，桥初为木桥，后于万历年间改建为石桥。明末书画大家董其昌曾为其撰《西仓桥记》，赞其「蓄风气，壮瞻视，莫此为伟」，可见其在当时的地位。",
        feature: "桥身为青石砌筑、桥阶为花岗岩，整体结构稳固、造型舒展，是典型的江南大型石拱桥。五孔设计不仅美观，更便于漕船通航。桥南桥北连接着明清时期最为繁忙的漕粮码头与仓储街区，是仓城作为「明清松江府最大漕粮仓储地」的核心地标。",
        culture: "大仓桥承载着仓城数百年的漕运记忆。「东有府城，西有仓城」之说，正是对松江城双璧格局的生动描述。作为市级文物保护单位，它不仅是交通建筑，更是松江漕运文化的活化石，见证了古代江南经济与航运的繁盛。",
        tour: {
            address: "上海市松江区中山西路仓城历史文化风貌区",
            time: "全天开放（露天景点）",
            tip: "建议清晨或黄昏前往，桥顶视野开阔，可拍摄市河两岸全景；桥面石阶较陡，注意安全。"
        }
    },
    {
        id: "dujia",
        name: "杜氏雕花楼",
        tag: "非遗基地",
        type: "古建筑",
        ph: "ph-2",
        img: "img/spots/dujia.jpeg",
        mx: 410, my: 140,   /* 杜氏雕花楼：北岸中段 */
        lat: 31.0078, lng: 121.2140,
        brief: "「沪上最美雕花楼」，现为松江非物质文化遗产传习基地。",
        intro: "杜氏雕花楼是仓城内最具代表性的江南名宅，门窗梁柱之上花卉、云纹、人物、鸟兽等木雕栩栩如生，被誉为「沪上最美雕花楼」。如今，这里已成为松江非物质文化遗产传习基地，是了解顾绣、皮影戏、昆曲等松江非遗的窗口。",
        history: "杜氏雕花楼始建于明代，一说建于清代嘉庆年间，为名绅杜氏所建，原是主人为女儿准备的婚房。建筑为四进式庭院，立柱砖墙、榫卯结构，内饰中西合璧，尽显江南水乡民间大户人家的精致与气派。",
        feature: "雕花楼以精美绝伦的木雕著称：梁枋、门窗、裙板之上雕刻的花卉纹样与瑞兽图案层层叠叠，刀工细腻、构图繁丽。屋顶为硬山式马头山墙，青瓦粉墙，整体端庄典雅。楼内还藏着一处网红打卡点「雨巷」——诗人戴望舒的《雨巷》便是在松江写成。",
        culture: "雕花楼现为松江非物质文化遗产传习基地，集作品展示、制作演示、互动体验、技艺培训、学术研讨等功能于一体，系统介绍顾绣、皮影戏、昆曲、江南丝竹、叶榭软糕等松江非遗项目，是仓城非遗文化的集散地。",
        tour: {
            address: "上海市松江区中山西路 266 号附近（仓城历史文化风貌区内）",
            time: "传习基地开放时间以现场公告为准",
            tip: "建筑内木雕精美，拍照时请勿使用闪光灯；可预约体验顾绣等非遗项目。"
        }
    },
    {
        id: "guanding",
        name: "灌顶禅院",
        tag: "明代禅院",
        type: "宗教建筑",
        ph: "ph-3",
        img: "img/spots/guanding.jpg",
        mx: 90, my: 330,   /* 灌顶禅院：南岸西侧 */
        lat: 31.0070, lng: 121.2143,
        brief: "始建于明代的「水次仓关帝庙」，松江佛教护法伽蓝道场。",
        intro: "灌顶禅院始建于明代天启二年（1622年），原名「水次仓关帝庙」，最初是为保佑漕运官兵、民夫出行平安而建。乾隆年间改称「灌顶禅院」，取佛家「灌顶」唤醒修行者心智之意。",
        history: "禅院因年久失修曾一度破旧，2014年由松江佛教协会修缮后重新作为佛教活动场所开放，现为佛教护法伽蓝菩萨关公道场，暮鼓晨钟、香火袅袅。大殿金碧辉煌，氛围庄严古朴。",
        feature: "禅院布局规整，主殿供奉关公圣像，兼有佛教伽蓝护法之意。殿宇飞檐翘角、彩绘精美，与仓城古街的白墙黛瓦融为一体，闹中取静，是感受松江宗教文化与传统建筑艺术的好去处。",
        culture: "作为仓城历史的一部分，灌顶禅院与漕运文化密不可分——从「关帝庙」到「禅院」的名称演变，见证了水次仓数百年的兴衰，也寄托了往来舟楫平安顺遂的美好愿望。",
        tour: {
            address: "上海市松江区玉树路 2336 号（大仓桥南侧，可导航直达）",
            time: "免费开放，具体时间以现场公告为准",
            tip: "禅院可免费进入参观，主殿金碧辉煌；附近有停车场，也适合作为仓城游览的起点。"
        }
    },
    {
        id: "mengjiangting",
        name: "孟姜亭",
        tag: "传说胜地",
        type: "纪念建筑",
        ph: "ph-4",
        img: "img/spots/mengjiangting.jpg",
        mx: 150, my: 330,   /* 孟姜亭：大仓桥南堍 */
        lat: 31.0072, lng: 121.2148,
        brief: "临水而立的纪念小亭，寄托着对孟姜女忠贞爱情的美好追忆。",
        intro: "孟姜亭位于大仓桥南岸，是一座临水而立的纪念亭。亭以孟姜女命名，寄托着民间对忠贞爱情的美好追忆，与桥畔的灌顶禅院、书香茶楼构成一组饶有韵味的江南水乡小景。",
        history: "孟姜女哭长城的传说在中国家喻户晓，松江一带亦流传着相关的民间故事。孟姜亭的修建，正是为纪念这段忠贞不渝的爱情。它与大仓桥一南一北守望相望，成为仓城市河沿岸极具人文气息的一处节点。",
        feature: "小亭造型简洁古朴，临水而建，与拱桥、流水、古街构成典型的江南水乡画面。凭栏可望大仓桥全貌，是游客休憩、赏景、留影的绝佳位置，尤其适合拍摄古风照片。",
        culture: "孟姜亭虽小，却浓缩着民间传说与江南市井文化的温度。它与旁边的书香茶楼共同诠释了仓城「人文底蕴深厚」的气质，让游人在桥水之间感受到历史与传说的交织。",
        tour: {
            address: "上海市松江区大仓桥南岸（灌顶禅院旁）",
            time: "全天开放（露天景点）",
            tip: "亭内临水一侧是拍摄大仓桥倒影的绝佳机位；黄昏时分灯光初上，别具韵味。"
        }
    },
    {
        id: "laojie",
        name: "仓城老街",
        tag: "历史街区",
        type: "历史街区",
        ph: "ph-5",
        img: "img/spots/laojie.jpg",
        mx: 350, my: 140,   /* 仓城老街：北岸整段 */
        lat: 31.0080, lng: 121.2135,
        brief: "明清漕运中心的中山西路核心段，松江保存最完好的历史街区。",
        intro: "仓城历史文化风貌区是松江文物保护点最多、保存最好的历史文化街区，规划范围为沪杭铁路以北、乐都路以南、仓汇路以东、西林路以西，其中中山西路（玉树路至永丰路）为核心段。这里保留了原生态的江南水乡格局，几乎没有过度商业化。",
        history: "仓城拥有四百余年历史，是明清两代松江府最大的漕粮仓储地和漕运始发地，旧有「东有府城、西有仓城」的美誉。街区内现存明清及民国时期历史建筑一百二十余处，被誉为松江府城文化的「活化石」。",
        feature: "沿街可见杜氏雕花楼、张氏米行、灌顶禅院、徐氏当铺、颐园、葆素堂等历史建筑，还散布着松江布展示馆、仓城印迹展示馆、艺云阁等打卡点位，以及富有创意的老街墙绘涂鸦。小桥、流水、人家，岁月在这里放慢了脚步。",
        culture: "老街是漕运文化、商埠文化、非遗文化共生的载体。漫步其间，可以品尝松江传统小吃，探访非遗传承人，在张氏米行感受粮仓记忆，在仓城印迹馆了解街区的前世今生，是沉浸式体验松江府城文化的绝佳路线。",
        tour: {
            address: "上海市松江区中山西路（玉树路至永丰路段）",
            time: "全天开放",
            tip: "建议安排 2-3 小时漫步；街区内无过度商业化，餐饮多在古宅改造的茶楼、小吃店，古韵十足。"
        }
    },
    {
        id: "songjiangbu",
        name: "松江布展示馆",
        tag: "非遗文化",
        type: "文化展馆",
        ph: "ph-6",
        img: "img/spots/songjiangbu.jpg",
        mx: 300, my: 140,   /* 松江布展示馆：北岸西中东段 */
        lat: 31.0082, lng: 121.2130,
        brief: "松江棉布非遗文化展示空间，一针一线织就的江南记忆。",
        intro: "松江布展示馆是仓城街区内展示松江棉布历史与技艺的文化空间。明清时期，松江是全国棉纺织业的中心，「松江布」「衣被天下」的美誉流传至今，是仓城非遗文化的重要组成部分。",
        history: "明代以来，松江府凭借发达的棉纺织业成为全国布业重镇，「松江之布，衣被天下」名动四方。松江布质地细密、花色雅致，既是民生必需品，也是远销海内外的商品。如今，松江棉布织造技艺已列入非物质文化遗产名录，得到系统保护与传承。",
        feature: "展示馆内陈列着历代松江布的实物与影像资料，可见蓝印花布、提花棉布等传统织物之美。参观者可了解从棉、纺纱、织布到印染的完整工艺流程，感受先民「衣被天下」的智慧与匠心。",
        culture: "松江布不仅是生活用品，更是松江商埠文化、纺织文明的缩影。它与顾绣一道，构成仓城非遗的两张名片，是「传承中华文脉，激活数字新韵」实践中重点采集与数字化的对象。",
        tour: {
            address: "上海市松江区仓城历史文化风貌区内（中山西路沿线）",
            time: "开放时间以现场公告为准",
            tip: "可结合顾绣、织造等非遗体验一起参观；馆内织物展品请勿触摸。"
        }
    },
    {
        id: "zhangshiminghang",
        name: "张氏米行",
        tag: "粮仓记忆",
        type: "古建筑",
        ph: "ph-7",
        img: "img/spots/zhangshiminghang.jpg",
        mx: 520, my: 140,   /* 张氏米行：北岸东段 */
        lat: 31.0085, lng: 121.2120,
        brief: "明清漕粮仓储的历史遗迹，仓城「粮仓文化」的见证者。",
        intro: "张氏米行是仓城街区内保留至今的明清米行建筑，见证了仓城作为「松江府最大漕粮仓储地」的粮仓记忆。漕运时代，江浙一带的漕粮在此汇集、储存、转运，米行、仓房构成了街区最具特色的历史景观。",
        history: "明清时期，仓城因漕粮仓储而兴盛，仓廪连片、舟楫往来。张氏米行正是这段历史遗存下来的实物见证，其建筑格局保留了传统商号的样式，让人得以想象当年粮食交易与漕运繁忙的景象。",
        feature: "米行为传统院落式建筑，青瓦木梁、格局通透，如今经修缮后开放参观，内部陈列着粮仓文化相关的图文与实物，还原了「仓」与「城」共生的历史场景。",
        culture: "「仓城」之名，正源于此地的仓储功能。张氏米行与徐氏当铺、颐园、葆素堂等建筑一起，构成了仓城完整的历史建筑群谱系，是解读漕运经济与江南城镇发展的生动教材。",
        tour: {
            address: "上海市松江区仓城历史文化风貌区内（中山西路沿线）",
            time: "开放时间以现场公告为准",
            tip: "可与仓城印迹展示馆联游，系统了解仓城历史；米行建筑木构较多，参观请勿烟火。"
        }
    }
];

/* 数字海报 — 景点对应的诗意标语（每处多句，随机选取） */
var POSTER_TAGLINES = {
    dacangqiao: [
        "一桥飞架南北\n漕运千年不绝",
        "五孔拱月横市河\n石骨苍苍载岁华",
        "桥下流水千年过\n桥上行人几度秋"
    ],
    dujia: [
        "雕花刻梦\n非遗流芳",
        "梁间雕日月\n窗里刻春秋",
        "匠心独运花间舞\n百年雕镂寄深情"
    ],
    guanding: [
        "暮鼓晨钟\n禅意仓城",
        "关帝护佑漕运路\n禅音袅袅洗尘心",
        "古刹深藏市井中\n一缕梵香越百年"
    ],
    mengjiangting: [
        "临水凭栏\n千古情思",
        "一亭烟雨望桥影\n万古情思寄水流",
        "孟姜遗韵今犹在\n亭下流水诉衷肠"
    ],
    laojie: [
        "岁月放慢脚步\n老街静待来人",
        "青石巷陌深几许\n粉墙黛瓦忆华年",
        "四百载仓城旧梦\n两行街古韵新声"
    ],
    songjiangbu: [
        "一针一线\n衣被天下",
        "织机声里江南梦\n棉布纹间天下春",
        "松江之布衣被远\n非遗技艺代代传"
    ],
    zhangshiminghang: [
        "仓廪实而知礼节\n米香绵延四百年",
        "漕粮汇聚千帆过\n米行遗韵诉繁华",
        "一仓一廪藏岁月\n一米一粟见兴衰"
    ]
};

/* ---------------- 路由状态 ---------------- */
var state = { currentView: "home" };

/* ---------------- AI 绘图状态 ---------------- */
var aiState = {
    selectedStyle: null,
    selectedRatio: "1:1",
    uploadedImageBase64: null,
    generatedImageBase64: null,
    isGenerating: false
};
var aiAbortController = null;

/* 数字海报状态 */
var posterState = {
    uploadedImageBase64: null,
    selectedSpot: null,
    selectedStyle: null,
    isGenerating: false,
    posterDataUrl: null
};
var posterPollTimer = null;

// Cloudflare Worker CORS 代理 → LiblibAI 图生图（SecretKey 在 Worker 端，前端不暴露）
var API_PROXY = "https://cangcheng-api-vavwnkznlj.cn-hangzhou.fcapp.run";

// 风格 → prompt + 参数 映射（Seedream 5.0 Lite 中文优化）
var STYLE_CONFIG = {
    ink_wash: {
        prompt: "将这张建筑照片转化为中国传统水墨画风格。黑白墨色为主，宣纸质感，写意笔触，大面积留白，墨色浓淡层次丰富，雾气朦胧的江南古建筑倒映水面，诗意氛围，吴冠中风格。保留原图的建筑结构和构图。",
        negativePrompt: "油画，彩色，写实照片，3D渲染，卡通，动漫，水印，文字，低质量，模糊，现代建筑，西方风格，鲜艳色彩，人物",
        width: 2048,
        height: 2048
    },
    gongbi: {
        prompt: "将这张建筑照片转化为中国传统工笔画风格。极致精细的线条勾勒古建筑装饰细节，艳丽矿物颜料着色，绢本质感，明代宫廷画风，斗拱彩绘精美，金粉点缀，一丝不苟的建筑渲染。保留原图的建筑结构和构图。",
        negativePrompt: "素描，写意，抽象，极简，写实照片，3D渲染，水印，文字，模糊，低质量，西方风格，人物",
        width: 2048,
        height: 2048
    },
    green_landscape: {
        prompt: "将这张建筑照片转化为中国青绿山水画风格。石青石绿矿物色为主调，金色勾边云纹，唐代金碧山水意境，古建筑掩映于青翠群山和云雾之中，流水飞瀑，装饰性强，王希孟千里江山图风格。保留原图的建筑结构和构图。",
        negativePrompt: "黑白，单色，水墨，西方油画，写实照片，暗沉，水印，文字，模糊，低质量，人物",
        width: 2048,
        height: 2048
    },
    sketch: {
        prompt: "将这张建筑照片转化为建筑铅笔素描风格。精细线条绘制，专业排线阴影，中国传统建筑学术渲染图，黑白灰单色，高水准制图，纸上铅笔质感。保留原图的建筑结构和构图。",
        negativePrompt: "彩色，颜料，写实照片，3D渲染，卡通，水墨晕染，水印，文字，模糊，低质量，人物",
        width: 2048,
        height: 2048
    },
    baimiao: {
        prompt: "将这张建筑照片转化为中国传统白描画风格。纯墨色细线勾勒建筑轮廓与雕花细节，无晕染无色彩，线条疏密有致顿挫有力，宣纸白底，宋代李公麟白描风格。精确描绘斗拱、飞檐、雕花的造型美。保留原图的建筑结构和构图。",
        negativePrompt: "水墨晕染，彩色，油画，写实照片，3D渲染，卡通，水印，文字，模糊，低质量，人物",
        width: 2048,
        height: 2048
    },
    qianjiang: {
        prompt: "将这张建筑照片转化为中国浅绛山水画风格。水墨勾勒皴擦建筑与树木，淡赭石淡花青渲染，元代黄公望倪瓒文人画风，温润素雅书卷气，江南古镇烟雨朦胧气息。保留原图的建筑结构和构图。",
        negativePrompt: "浓艳色彩，油画重彩，金碧山水，写实照片，3D渲染，卡通，水印，文字，模糊，低质量，人物",
        width: 2048,
        height: 2048
    },
    watercolor_sketch: {
        prompt: "将这张建筑照片转化为水彩速写风格。钢笔细线勾勒建筑轮廓，透明水彩淡雅着色，旅行手账写生画风，轻盈通透阳光下古建筑，留白自然，文艺清新艺术感。保留原图的建筑结构和构图。",
        negativePrompt: "水墨，油画厚涂，写实照片，3D渲染，卡通，水印，文字，模糊，低质量，人物",
        width: 2048,
        height: 2048
    },
    carving: {
        prompt: "将这张建筑照片转化为中式雕花艺术风格。在建筑墙体表面浮现精美的中式传统雕花图案——缠枝纹、回纹、云纹、莲花纹样，浅浮雕质感，整体色调朴素沉稳素雅，木雕石雕般的苍劲线条，图案与建筑结构自然融合，低调而富有东方韵味。保留原图的建筑结构和构图。",
        negativePrompt: "彩色鲜艳，西方风格，写实照片，3D渲染，卡通，水印，文字，模糊，低质量，人物",
        width: 2048,
        height: 2048
    },
    guxiu: {
        prompt: "将这张建筑照片转化为顾绣（露香园顾绣）风格。顾绣是上海松江传统画绣，以针代笔、以线代墨。画面呈现细腻丝线刺绣质感——细密针脚勾勒古建筑轮廓与雕花细节，淡雅柔和的丝线配色，绸缎底纹与温润丝光，画绣结合的江南古建筑图景，清雅含蓄。保留原图的建筑结构和构图。",
        negativePrompt: "水墨，油画，写实照片，3D渲染，卡通，鲜艳浓烈色彩，水印，文字，模糊，低质量，人物",
        width: 2048,
        height: 2048
    },
    songjiang_cloth: {
        prompt: "将这张建筑照片转化为松江棉布蓝印花布风格。靛蓝底色搭配白色印花纹样，棉布织物质感，传统蓝印花布图案（缠枝纹、花卉纹样），古朴蓝白对比，图案与建筑结构自然融合，江南民间工艺韵味。保留原图的建筑结构和构图。",
        negativePrompt: "彩色鲜艳，水墨，油画，写实照片，3D渲染，卡通，水印，文字，模糊，低质量，人物",
        width: 2048,
        height: 2048
    }
};

// 输出比例选项（Seedream 会根据宽高自动适配构图）
var RATIO_OPTIONS = [
    { key: "1:1",  label: "1:1 方形",  w: 2048, h: 2048 },
    { key: "3:4",  label: "3:4 竖幅",  w: 1680, h: 2240 },
    { key: "4:3",  label: "4:3 横幅",  w: 2240, h: 1680 },
    { key: "9:16", label: "9:16 手机", w: 1512, h: 2688 },
    { key: "16:9", label: "16:9 桌面", w: 2688, h: 1512 }
];

/* ---------------- 工具函数 ---------------- */
function el(html) {
    var tpl = document.createElement("template");
    tpl.innerHTML = html.trim();
    return tpl.content.firstElementChild;
}

/* 图片上传处理（AI 绘图页使用） */
function handleUploadFile(file) {
    if (!file.type.match(/^image\//)) {
        alert("请选择图片文件（JPG、PNG、WebP）");
        return;
    }
    if (file.size > 20 * 1024 * 1024) {
        alert("图片文件不能超过 20MB");
        return;
    }
    var reader = new FileReader();
    reader.onload = function (ev) {
        var img = document.getElementById("preview-image");
        var uz = document.getElementById("upload-zone");
        var pz = document.getElementById("preview-zone");
        var res = document.getElementById("result-zone");
        if (img) img.src = ev.target.result;
        if (uz) uz.style.display = "none";
        if (pz) pz.style.display = "";
        if (res) res.style.display = "none";
        aiState.uploadedImageBase64 = ev.target.result;
        updateGenerateButton();
    };
    reader.readAsDataURL(file);
}

/* ---------------- 渲染：首页 ---------------- */
function renderHome() {
    return el(
        '<div class="view home" id="view-home">' +
            '<header class="hero">' +
                '<div class="hero-main">' +
                    '<h1 class="hero-title">仓城</h1>' +
                    '<div class="hero-sub">古韵新生 · 仓城数字文旅导览</div>' +
                '</div>' +
            '</header>' +
            '<div class="home-entry" data-nav="__list__">' +
                '<div class="entry-badge">SCENIC SPOTS</div>' +
                '<div class="entry-title">探索仓城</div>' +
                '<div class="entry-desc">明清松江最大漕粮仓储地 · ' + SITES.length + ' 处文化地标</div>' +
                '<div class="entry-more">点击进入</div>' +
            '</div>' +
            '<div class="ai-entry" data-nav="__ai__">' +
                '<div class="entry-badge">AI CREATION</div>' +
                '<div class="entry-title">AI 绘图</div>' +
                '<div class="entry-desc">AIGC 风格迁移 · 古建筑数字再生</div>' +
                '<div class="entry-more">开始创作</div>' +
            '</div>' +
            '<div class="poster-entry" data-nav="__poster__">' +
                '<div class="entry-badge">DIGITAL POSTER</div>' +
                '<div class="entry-title">数字海报</div>' +
                '<div class="entry-desc">AI 风格化 · 诗词卡片 · 一键分享</div>' +
                '<div class="entry-more">制作海报</div>' +
            '</div>' +
            '<div class="map-entry" data-nav="__map__">' +
                '<span class="me-icon">◎</span>' +
                '<div class="me-body">' +
                    '<div class="me-text">地图总览 <small>MAP VIEW</small></div>' +
                    '<div class="me-sub">查看 ' + SITES.length + ' 处地标分布</div>' +
                '</div>' +
                '<span class="me-arrow">›</span>' +
            '</div>' +
            '<footer class="footer">' +
                '<div class="deco">◆ ◆ ◆</div>' +
                '<div>芯辉古韵 · 东南大学暑期社会实践团队</div>' +
                '<div>项目「古韵新生」 · 2026</div>' +
            '</footer>' +
        '</div>'
    );
}

/* ---------------- 渲染：景点列表页 ---------------- */
function renderList() {
    var items = SITES.map(function (site) {
        return '' +
            '<div class="spot-item" data-id="' + site.id + '">' +
                '<div class="s-thumb" style="background-image:url(' + site.img + ')"></div>' +
                '<div class="s-body">' +
                    '<div class="s-name">' + site.name + '</div>' +
                    '<div class="s-tag">' + site.tag + '</div>' +
                    '<div class="s-desc">' + site.brief + '</div>' +
                '</div>' +
                '<div class="s-arrow">›</div>' +
            '</div>';
    }).join("");

    var backSvg = '<svg viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7"/></svg>';
    var mapSvg = '<svg viewBox="0 0 24 24"><path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5c-1.4 0-2.5-1.1-2.5-2.5S10.6 6.5 12 6.5s2.5 1.1 2.5 2.5S13.4 11.5 12 11.5z"/></svg>';

    return el(
        '<div class="view list" id="view-list">' +
            '<nav class="navbar navbar-map">' +
                '<div class="back" data-nav="__home__">' + backSvg + '</div>' +
                '<div class="title">景点导览</div>' +
                '<div class="nav-map" data-nav="__map__">' + mapSvg + '</div>' +
            '</nav>' +
            '<div class="list-head">' +
                '<h2>仓城 · 文化地标</h2>' +
                '<p>共 ' + SITES.length + ' 处，点击查看详细介绍</p>' +
            '</div>' +
            '<div class="list-body">' + items + '</div>' +
        '</div>'
    );
}

/* ---------------- 渲染：地图总览页（固定手绘示意图） ---------------- */
/* 仓城核心为"一河两街"格局：市河东西横穿，中山西路在北岸、秀南街在南岸。
   地图按真实相对方位绘制：西端大仓桥跨河，北岸东段分布松江布、杜氏、张氏，
   南岸为大仓桥南堍的孟姜亭与灌顶禅院。标记位置来自各景点 mx/my 字段。 */
function renderMap() {
    var backSvg = '<svg viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7"/></svg>';

    function find(id) {
        for (var i = 0; i < SITES.length; i++) {
            if (SITES[i].id === id) return SITES[i];
        }
        return null;
    }

    // 北岸普通标记（含东段与中心）
    function marker(id) {
        var s = find(id);
        return '<g class="map-marker" data-nav="' + id + '" transform="translate(' + s.mx + ',' + s.my + ')">' +
            '<circle class="mm-pulse" r="16"/>' +
            '<circle class="mm-dot" r="8"/>' +
            '<text class="mm-label" y="34" text-anchor="middle">' + s.name + '</text>' +
        '</g>';
    }

    var northHtml = marker("songjiangbu") + marker("dujia") + marker("zhangshiminghang");
    var southHtml = marker("mengjiangting") + marker("guanding");

    return el(
        '<div class="view map" id="view-map">' +
            '<nav class="navbar">' +
                '<div class="back" data-nav="__home__">' + backSvg + '</div>' +
                '<div class="title">地图总览</div>' +
            '</nav>' +
            '<div class="map-panel-title">手绘导览 · 示意图</div>' +
            '<div class="static-map-wrap">' +
                '<svg class="static-map" viewBox="0 0 700 500" xmlns="http://www.w3.org/2000/svg">' +
                    '<rect class="sm-frame" x="6" y="6" width="688" height="488" rx="16"/>' +
                    '<text class="sm-title" x="350" y="44" text-anchor="middle">仓城 · 景点导览图</text>' +
                    '<text class="sm-sub" x="350" y="62" text-anchor="middle">CANGCHENG GUIDE MAP</text>' +
                    '<text class="sm-compass" x="628" y="104" text-anchor="middle">北 ↑</text>' +
                    /* 仓城老街：北岸整段高亮（可点击） */
                    '<rect class="sm-zone" x="100" y="92" width="560" height="92" rx="12" data-nav="laojie"/>' +
                    '<text class="sm-zone-tag" x="350" y="118" text-anchor="middle" data-nav="laojie">仓城老街 · 中山西路段（玉树路—永丰路）</text>' +
                    /* 市河 */
                    '<path class="sm-river" d="M40,262 C150,252 220,272 330,260 C440,248 560,272 660,258 L660,300 C560,290 440,310 330,298 C220,286 150,306 40,294 Z"/>' +
                    '<text class="sm-river-label" x="350" y="286" text-anchor="middle">市 河</text>' +
                    /* 两街 */
                    '<path class="sm-road" d="M50,205 L650,205"/>' +
                    '<text class="sm-road-label" x="56" y="193">中山西路</text>' +
                    '<path class="sm-road" d="M50,375 L650,375"/>' +
                    '<text class="sm-road-label" x="56" y="363">秀南街</text>' +
                    /* 大仓桥（跨河） */
                    '<g class="map-marker sm-bridge" data-nav="dacangqiao" transform="translate(150,0)">' +
                        '<rect class="sm-bridge-deck" x="-11" y="205" width="22" height="170"/>' +
                        '<path class="sm-bridge-texture" d="M-11,228 L11,228 M-11,251 L11,251 M-11,274 L11,274 M-11,317 L11,317 M-11,340 L11,340 M-11,363 L11,363"/>' +
                        '<circle class="mm-pulse" cy="258" r="16"/>' +
                        '<circle class="mm-dot" cy="258" r="8"/>' +
                        '<text class="mm-label" y="292" text-anchor="middle">大仓桥</text>' +
                    '</g>' +
                    northHtml + southHtml +
                    /* 图例 */
                    '<g class="sm-legend">' +
                        '<circle class="mm-dot-legend" cx="176" cy="456" r="8"/>' +
                        '<text class="sm-legend-text" x="194" y="461">点击标记可查看景点介绍</text>' +
                    '</g>' +
                '</svg>' +
            '</div>' +
            '<div class="map-panel-title">真实地图 · LIVE MAP</div>' +
            '<div class="leaflet-map-panel">' +
                '<div id="cangcheng-map"></div>' +
            '</div>' +
        '</div>'
    );
}

/* ---------------- 坐标转换：WGS-84 → GCJ-02 ---------------- */
/* 高德瓦片基于 GCJ-02（火星坐标），GPS 实测为 WGS-84，两者存在约 500m 偏移，
   转换后写入的 GPS 数据即可在底图上精确对齐。 */
var MAP_A = 6378245.0;
var MAP_EE = 0.00669342162296594323;

function mapOutOfChina(lat, lng) {
    return (lng < 72.004 || lng > 137.8347) || (lat < 0.8293 || lat > 55.8271);
}
function mapTransformLat(x, y) {
    var ret = -100.0 + 2.0 * x + 3.0 * y + 0.2 * y * y + 0.1 * x * y + 0.2 * Math.sqrt(Math.abs(x));
    ret += (20.0 * Math.sin(6.0 * x * Math.PI) + 20.0 * Math.sin(2.0 * x * Math.PI)) * 2.0 / 3.0;
    ret += (20.0 * Math.sin(y * Math.PI) + 40.0 * Math.sin(y / 3.0 * Math.PI)) * 2.0 / 3.0;
    ret += (160.0 * Math.sin(y / 12.0 * Math.PI) + 320.0 * Math.sin(y * Math.PI / 30.0)) * 2.0 / 3.0;
    return ret;
}
function mapTransformLng(x, y) {
    var ret = 300.0 + x + 2.0 * y + 0.1 * x * x + 0.1 * x * y + 0.1 * Math.sqrt(Math.abs(x));
    ret += (20.0 * Math.sin(6.0 * x * Math.PI) + 20.0 * Math.sin(2.0 * x * Math.PI)) * 2.0 / 3.0;
    ret += (20.0 * Math.sin(x * Math.PI) + 40.0 * Math.sin(x / 3.0 * Math.PI)) * 2.0 / 3.0;
    ret += (150.0 * Math.sin(x / 12.0 * Math.PI) + 300.0 * Math.sin(x / 30.0 * Math.PI)) * 2.0 / 3.0;
    return ret;
}
function wgs84ToGcj02(lat, lng) {
    if (mapOutOfChina(lat, lng)) return { lat: lat, lng: lng };
    var dLat = mapTransformLat(lng - 105.0, lat - 35.0);
    var dLng = mapTransformLng(lng - 105.0, lat - 35.0);
    var radLat = lat / 180.0 * Math.PI;
    var magic = Math.sin(radLat);
    magic = 1 - MAP_EE * magic * magic;
    var sqrtMagic = Math.sqrt(magic);
    dLat = (dLat * 180.0) / ((MAP_A * (1 - MAP_EE)) / (magic * sqrtMagic) * Math.PI);
    dLng = (dLng * 180.0) / (MAP_A / sqrtMagic * Math.cos(radLat) * Math.PI);
    return { lat: lat + dLat, lng: lng + dLng };
}

/* ---------------- 真实地图初始化（Leaflet + 高德瓦片） ---------------- */
var mapInstance = null;

function initCangchengMap() {
    var container = document.getElementById("cangcheng-map");
    if (!container) return;
    // 若 Leaflet CDN 未加载成功（如网络拦截），显示降级提示
    if (typeof L === "undefined") {
        container.innerHTML = '<div class="map-fallback">地图组件加载失败，请检查网络后重试</div>';
        return;
    }
    // 清除上一次的地图实例，避免容器重复初始化报错
    if (mapInstance) {
        mapInstance.remove();
        mapInstance = null;
    }

    var center = wgs84ToGcj02(31.0078, 121.2135);
    mapInstance = L.map("cangcheng-map", { zoomControl: true }).setView([center.lat, center.lng], 15);

    // 高德瓦片（国内可达、中文标注）；OpenStreetMap 在国内被墙故不使用
    L.tileLayer("https://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}", {
        maxZoom: 18,
        subdomains: ["1", "2", "3", "4"],
        attribution: '&copy; 高德地图'
    }).addTo(mapInstance);

    SITES.forEach(function (site) {
        // WGS-84 → GCJ-02，保证标记在底图上精确落位
        var gcj = wgs84ToGcj02(site.lat, site.lng);
        var popupHtml =
            '<div class="map-pop">' +
                '<div class="mp-name">' + site.name + '</div>' +
                '<div class="mp-tag">' + site.tag + '</div>' +
                '<div class="mp-link" data-nav="' + site.id + '">查看介绍 →</div>' +
            '</div>';
        L.marker([gcj.lat, gcj.lng]).addTo(mapInstance)
            .bindPopup(popupHtml, { closeButton: false });
    });
}

/* ---------------- 渲染：详情页 ---------------- */
function renderDetail(id) {
    var site = null;
    for (var i = 0; i < SITES.length; i++) {
        if (SITES[i].id === id) { site = SITES[i]; break; }
    }
    if (!site) return renderHome();

    var idx = SITES.indexOf(site);
    var prev = idx > 0 ? SITES[idx - 1] : null;
    var next = idx < SITES.length - 1 ? SITES[idx + 1] : null;

    var backSvg = '<svg viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7"/></svg>';
    var prevBtn = prev
        ? '<div class="btn btn-ghost" data-nav="' + prev.id + '">← ' + prev.name + '</div>'
        : '<div class="btn btn-ghost" disabled>已是首个</div>';
    var nextBtn = next
        ? '<div class="btn btn-primary" data-nav="' + next.id + '">' + next.name + ' →</div>'
        : '<div class="btn btn-primary" data-nav="__list__">返回列表</div>';

    return el(
        '<div class="view detail" id="view-detail">' +
            '<nav class="navbar">' +
                '<div class="back" data-nav="__list__">' + backSvg + '</div>' +
                '<div class="title">' + site.name + '</div>' +
            '</nav>' +
            '<div class="detail-hero">' +
                '<img src="' + site.img + '" alt="' + site.name + '">' +
            '</div>' +
            '<div class="detail-body">' +
                '<h2>' + site.name + '</h2>' +
                '<div class="subtitle">' + site.type + ' · ' + site.tag + '</div>' +
                '<div class="intro">' + site.intro + '</div>' +
                '<div class="block">' +
                    '<h3><span class="icon">◈</span> 历史沿革</h3>' +
                    '<p>' + site.history + '</p>' +
                '</div>' +
                '<div class="block">' +
                    '<h3><span class="icon">◈</span> 建筑特色</h3>' +
                    '<p>' + site.feature + '</p>' +
                '</div>' +
                '<div class="block">' +
                    '<h3><span class="icon">◈</span> 文化价值</h3>' +
                    '<p>' + site.culture + '</p>' +
                '</div>' +
                '<div class="tour-info">' +
                    '<div class="t-head">✈ 游览信息</div>' +
                    '<div class="t-row"><div class="k">地址</div><div class="v">' + site.tour.address + '</div></div>' +
                    '<div class="t-row"><div class="k">开放</div><div class="v">' + site.tour.time + '</div></div>' +
                    '<div class="t-row"><div class="k">贴士</div><div class="v">' + site.tour.tip + '</div></div>' +
                '</div>' +
            '</div>' +
            '<div class="detail-actions">' + prevBtn + nextBtn + '</div>' +
        '</div>'
    );
}

/* ---------------- 渲染：AI 绘图页 ---------------- */
function renderAiDraw() {
    var backSvg = '<svg viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7"/></svg>';
    var brushSvg = '<svg class="upload-icon-svg" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">' +
        '<circle cx="24" cy="24" r="23" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.3"/>' +
        '<path d="M16 32c1.5-2 4-3 7-4l6-12c1-2 3-2 4-1s1 3-1 4L20 31c-1 1-2.5 1.5-4 1z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>' +
        '<path d="M18 26l4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>' +
    '</svg>';

    return el(
        '<div class="view ai" id="view-ai">' +
            '<nav class="navbar">' +
                '<div class="back" data-nav="__home__">' + backSvg + '</div>' +
                '<div class="title">AI 绘图</div>' +
            '</nav>' +
            '<div class="upload-zone" id="upload-zone">' +
                '<div class="upload-visual">' + brushSvg + '</div>' +
                '<div class="upload-hint">点击上传 / 拖拽图片到此处</div>' +
                '<div class="upload-note">支持 JPG、PNG、WebP，不超过 20MB</div>' +
                '<input type="file" id="upload-input" accept="image/jpeg,image/png,image/webp" style="display:none">' +
            '</div>' +
            '<div class="preview-zone" id="preview-zone" style="display:none">' +
                '<div class="preview-image-wrap">' +
                    '<img id="preview-image" src="" alt="预览图片">' +
                '</div>' +
                '<div class="preview-actions">' +
                    '<button class="btn btn-ghost" id="btn-reselect">重新选择</button>' +
                '</div>' +
            '</div>' +
            '<div class="style-section">' +
                '<div class="style-section-title">风格选择</div>' +
                '<div class="style-section-hint" id="style-hint">请选择一种风格</div>' +
                '<div class="style-grid">' +
                    '<div class="style-card" data-style="ink_wash"><span>水墨</span></div>' +
                    '<div class="style-card" data-style="baimiao"><span>白描</span></div>' +
                    '<div class="style-card" data-style="gongbi"><span>工笔</span></div>' +
                    '<div class="style-card" data-style="green_landscape"><span>青绿山水</span></div>' +
                    '<div class="style-card" data-style="qianjiang"><span>浅绛山水</span></div>' +
                    '<div class="style-card" data-style="sketch"><span>素描</span></div>' +
                    '<div class="style-card" data-style="watercolor_sketch"><span>水彩速写</span></div>' +
                    '<div class="style-card" data-style="carving"><span>中式雕花</span></div>' +
                    '<div class="style-card" data-style="guxiu"><span>顾绣</span></div>' +
                    '<div class="style-card" data-style="songjiang_cloth"><span>松江布</span></div>' +
                '</div>' +
            '</div>' +
            '<div class="ratio-section">' +
                '<div class="style-section-title">画面比例</div>' +
                '<div class="ratio-options" id="ratio-options">' +
                    '<button class="ratio-btn selected" data-ratio="1:1">1:1 方形</button>' +
                    '<button class="ratio-btn" data-ratio="3:4">3:4 竖幅</button>' +
                    '<button class="ratio-btn" data-ratio="4:3">4:3 横幅</button>' +
                    '<button class="ratio-btn" data-ratio="9:16">9:16 手机</button>' +
                    '<button class="ratio-btn" data-ratio="16:9">16:9 桌面</button>' +
                '</div>' +
            '</div>' +
            '<div class="loading-zone" id="loading-zone" style="display:none">' +
                '<div class="ink-drop"></div>' +
                '<div class="loading-text">墨韵生成中...</div>' +
                '<div class="loading-sub">AI 正在将您的照片转化为所选风格</div>' +
            '</div>' +
            '<div class="result-zone" id="result-zone" style="display:none">' +
                '<div class="result-compare">' +
                    '<div class="compare-pane">' +
                        '<div class="compare-label">原图</div>' +
                        '<img id="result-original" src="" alt="原图">' +
                    '</div>' +
                    '<div class="compare-pane">' +
                        '<div class="compare-label generate-label">AI 转绘</div>' +
                        '<img id="result-generated" src="" alt="AI生成">' +
                    '</div>' +
                '</div>' +
                '<div class="result-actions">' +
                    '<button class="btn btn-ghost" id="btn-redo">重新生成</button>' +
                    '<button class="btn btn-primary" id="btn-download">保存图片</button>' +
                '</div>' +
            '</div>' +
            '<div class="generate-section">' +
                '<button class="btn btn-primary btn-generate" id="btn-generate" disabled>开始生成</button>' +
                '<div class="generate-note" id="generate-note">上传图片并选择风格后即可开始 AI 转换</div>' +
            '</div>' +
        '</div>'
    );
}

/* ---------------- 渲染：数字海报页 ---------------- */
function renderPoster() {
    var backSvg = '<svg viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7"/></svg>';
    var uploadSvg = '<svg class="upload-icon-svg" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">' +
        '<circle cx="24" cy="24" r="23" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.3"/>' +
        '<path d="M16 32c1.5-2 4-3 7-4l6-12c1-2 3-2 4-1s1 3-1 4L20 31c-1 1-2.5 1.5-4 1z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>' +
        '<path d="M18 26l4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>' +
    '</svg>';

    var spotItems = SITES.map(function (site) {
        return '<div class="poster-spot-btn" data-spot="' + site.id + '">' + site.name + '</div>';
    }).join("");

    var styleNames = {
        ink_wash: '水墨', baimiao: '白描', gongbi: '工笔',
        green_landscape: '青绿山水', qianjiang: '浅绛山水',
        sketch: '素描', watercolor_sketch: '水彩速写', carving: '中式雕花',
        guxiu: '顾绣', songjiang_cloth: '松江布'
    };
    var styleKeys = Object.keys(STYLE_CONFIG);
    var styleItems = '';
    for (var i = 0; i < styleKeys.length; i++) {
        styleItems += '<div class="poster-style-card" data-style="' + styleKeys[i] + '"><span>' + (styleNames[styleKeys[i]] || styleKeys[i]) + '</span></div>';
    }

    return el(
        '<div class="view poster" id="view-poster">' +
            '<nav class="navbar">' +
                '<div class="back" data-nav="__home__">' + backSvg + '</div>' +
                '<div class="title">数字海报</div>' +
            '</nav>' +
            // 上传照片
            '<div class="upload-zone" id="poster-upload-zone">' +
                '<div class="upload-visual">' + uploadSvg + '</div>' +
                '<div class="upload-hint">点击上传你拍的仓城照片</div>' +
                '<div class="upload-note">支持 JPG、PNG、WebP，不超过 20MB</div>' +
                '<input type="file" id="poster-upload-input" accept="image/jpeg,image/png,image/webp" style="display:none">' +
            '</div>' +
            // 照片预览
            '<div class="preview-zone" id="poster-preview-zone" style="display:none">' +
                '<div class="preview-image-wrap">' +
                    '<img id="poster-preview-image" src="" alt="你上传的照片">' +
                '</div>' +
                '<div class="preview-actions">' +
                    '<button class="btn btn-ghost" id="btn-poster-reselect">重新选择照片</button>' +
                '</div>' +
            '</div>' +
            // 选择景点
            '<div class="poster-section">' +
                '<div class="style-section-title">你拍的是哪个景点？</div>' +
                '<div class="style-section-hint" id="poster-spot-hint">选择后匹配对应诗句</div>' +
                '<div class="poster-spot-grid">' + spotItems + '</div>' +
            '</div>' +
            // 选择风格
            '<div class="poster-section">' +
                '<div class="style-section-title">选择海报风格</div>' +
                '<div class="poster-style-grid">' + styleItems + '</div>' +
            '</div>' +
            // 加载
            '<div class="loading-zone" id="poster-loading" style="display:none">' +
                '<div class="ink-drop"></div>' +
                '<div class="loading-text">海报生成中...</div>' +
                '<div class="loading-sub">AI 正在创作你的专属仓城海报</div>' +
            '</div>' +
            // 结果
            '<div class="poster-result" id="poster-result" style="display:none">' +
                '<div class="poster-preview-wrap">' +
                    '<img id="poster-preview" src="" alt="海报预览">' +
                '</div>' +
                '<div class="result-actions">' +
                    '<button class="btn btn-ghost" id="btn-poster-redo">重新生成</button>' +
                    '<button class="btn btn-primary" id="btn-poster-download">保存海报</button>' +
                '</div>' +
            '</div>' +
            // 生成按钮
            '<div class="generate-section">' +
                '<button class="btn btn-primary btn-generate" id="btn-poster-generate" disabled>生成海报</button>' +
                '<div class="generate-note" id="poster-note">上传照片、选择景点和风格后即可生成</div>' +
            '</div>' +
        '</div>'
    );
}

/* ---------------- 数字海报核心函数 ---------------- */

function findSpotById(id) {
    for (var i = 0; i < SITES.length; i++) {
        if (SITES[i].id === id) return SITES[i];
    }
    return null;
}

function loadImageAsBase64(url) {
    return new Promise(function (resolve, reject) {
        var img = new Image();
        img.crossOrigin = "anonymous";
        img.onload = function () {
            var canvas = document.createElement("canvas");
            canvas.width = img.width;
            canvas.height = img.height;
            var ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0);
            resolve(canvas.toDataURL("image/jpeg", 0.9));
        };
        img.onerror = function () {
            reject(new Error("景点图片加载失败"));
        };
        img.src = url;
    });
}

function updatePosterButton() {
    var gen = document.getElementById("btn-poster-generate");
    var note = document.getElementById("poster-note");
    if (gen) {
        gen.disabled = !(posterState.uploadedImageBase64 && posterState.selectedSpot && posterState.selectedStyle && !posterState.isGenerating);
    }
    if (note) {
        if (!posterState.uploadedImageBase64) note.textContent = "请先上传你拍摄的仓城照片";
        else if (!posterState.selectedSpot) note.textContent = "请选择照片对应的景点";
        else if (!posterState.selectedStyle) note.textContent = "请选择一种海报风格";
        else note.textContent = "准备就绪，点击生成专属海报";
    }
}

function generatePoster() {
    if (posterState.isGenerating) return;
    posterState.isGenerating = true;

    var gen = document.getElementById("btn-poster-generate");
    var loading = document.getElementById("poster-loading");
    var result = document.getElementById("poster-result");
    var note = document.getElementById("poster-note");

    if (gen) { gen.disabled = true; gen.textContent = "生成中..."; }
    if (note) note.textContent = "正在调用 AI 模型，请耐心等待...";
    if (loading) loading.style.display = "";
    if (result) result.style.display = "none";

    var spot = findSpotById(posterState.selectedSpot);
    var cfg = STYLE_CONFIG[posterState.selectedStyle];
    if (!posterState.uploadedImageBase64 || !spot || !cfg) {
        handlePosterError("请先上传照片并选择景点和风格");
        posterState.isGenerating = false;
        return;
    }

    compressImage(posterState.uploadedImageBase64, 512, 0.8).then(function (compressed) {
        return fetch(API_PROXY + "/api/liblib/generate", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                image: compressed,
                prompt: cfg.prompt,
                width: 1680,
                height: 2240
            })
        }).then(function (res) {
            if (!res.ok) {
                return res.json().then(function (e) {
                    throw new Error(e.error || "API 返回错误 " + res.status);
                });
            }
            return res.json();
        });
    }).then(function (data) {
        if (!data.generateUuid) throw new Error("未获取到任务 ID，请重试");
        if (note) note.textContent = "AI 正在生成中，请耐心等待...";
        return pollPrediction(data.generateUuid);
    }).then(function (outputUrl) {
        if (note) note.textContent = "正在合成海报...";
        return composePoster(outputUrl, spot);
    }).then(function (dataUrl) {
        posterState.posterDataUrl = dataUrl;
        showPosterResult(dataUrl);
    }).catch(function (err) {
        handlePosterError(err.message || "海报生成失败，请重试");
    }).finally(function () {
        posterState.isGenerating = false;
        posterPollTimer = null;
        if (gen) { gen.disabled = false; gen.textContent = "生成海报"; }
        if (loading) loading.style.display = "none";
        updatePosterButton();
    });
}

function composePoster(imageUrl, spot) {
    var W = 1680, H = 2240;
    return new Promise(function (resolve, reject) {
        var canvas = document.createElement("canvas");
        canvas.width = W;
        canvas.height = H;
        var ctx = canvas.getContext("2d");

        // 古纸底色
        ctx.fillStyle = "#f7f2e7";
        ctx.fillRect(0, 0, W, H);

        // 随机选取诗句
        var taglines = POSTER_TAGLINES[spot.id] || [""];
        var tagline = taglines[Math.floor(Math.random() * taglines.length)];

        var img = new Image();
        img.crossOrigin = "anonymous";
        img.onload = function () {
            // Cover 适配铺满画布
            var scale = Math.max(W / img.width, H / img.height);
            var sw = img.width * scale, sh = img.height * scale;
            var sx = (W - sw) / 2, sy = (H - sh) / 2;
            ctx.drawImage(img, sx, sy, sw, sh);

            // 顶部渐变遮罩
            var tg = ctx.createLinearGradient(0, 0, 0, H * 0.5);
            tg.addColorStop(0, "rgba(0,0,0,0.6)");
            tg.addColorStop(0.5, "rgba(0,0,0,0.15)");
            tg.addColorStop(1, "rgba(0,0,0,0)");
            ctx.fillStyle = tg;
            ctx.fillRect(0, 0, W, H * 0.5);

            // ---- 景点名：竖排毛笔字效果 ----
            var nameChars = spot.name.split("");
            var nameFontSize = 130;
            var nameX = W * 0.13;      // 名字竖排 X 坐标（左上方）
            var nameStartY = H * 0.09;
            var nameCharGap = nameFontSize + 20;

            ctx.fillStyle = "#ffffff";
            ctx.font = "bold " + nameFontSize + "px 'Noto Serif SC','STSong','SimSun','KaiTi',serif";
            ctx.textAlign = "center";
            ctx.shadowColor = "rgba(0,0,0,0.4)";
            ctx.shadowBlur = 12;
            for (var ci = 0; ci < nameChars.length; ci++) {
                ctx.fillText(nameChars[ci], nameX, nameStartY + ci * nameCharGap);
            }
            ctx.shadowBlur = 0;

            // 名字右侧装饰线
            var lineX = nameX + nameFontSize * 0.9;
            ctx.strokeStyle = "rgba(255,255,255,0.35)";
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.moveTo(lineX, nameStartY - 30);
            ctx.lineTo(lineX, nameStartY + (nameChars.length - 1) * nameCharGap + 30);
            ctx.stroke();

            // 朱红印章（竖排名字下方）
            var sealCX = nameX;
            var sealCY = nameStartY + nameChars.length * nameCharGap + 80;
            var sealR = 48;
            // 印章底色
            ctx.fillStyle = "rgba(176,58,46,0.85)";
            ctx.beginPath();
            ctx.arc(sealCX, sealCY, sealR, 0, Math.PI * 2);
            ctx.fill();
            // 印章边框
            ctx.strokeStyle = "rgba(176,58,46,0.9)";
            ctx.lineWidth = 4;
            ctx.beginPath();
            ctx.arc(sealCX, sealCY, sealR - 4, 0, Math.PI * 2);
            ctx.stroke();
            // 印章文字（取景点名首字）
            ctx.fillStyle = "#f7f2e7";
            ctx.font = "bold 52px 'Noto Serif SC','STSong','KaiTi',serif";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText(nameChars[0], sealCX, sealCY + 2);

            // 底部渐变
            var bg = ctx.createLinearGradient(0, H * 0.55, 0, H);
            bg.addColorStop(0, "rgba(0,0,0,0)");
            bg.addColorStop(0.35, "rgba(0,0,0,0.25)");
            bg.addColorStop(1, "rgba(0,0,0,0.75)");
            ctx.fillStyle = bg;
            ctx.fillRect(0, H * 0.55, W, H * 0.45);

            // 底部装饰线
            var decoY = H * 0.72;
            ctx.strokeStyle = "rgba(255,255,255,0.3)";
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(W * 0.25, decoY);
            ctx.lineTo(W * 0.75, decoY);
            ctx.stroke();

            // 诗意标语（竖排，偏右）
            var lines = tagline.split("\n");
            var poemFontSize = 48;
            var poemX = W * 0.82;
            var poemStartY = decoY + 80;
            var poemLineGap = poemFontSize + 24;
            ctx.fillStyle = "rgba(255,255,255,0.88)";
            ctx.font = poemFontSize + "px 'Noto Serif SC','STSong','KaiTi',serif";
            ctx.textAlign = "center";
            ctx.textBaseline = "top";
            for (var pi = 0; pi < lines.length; pi++) {
                // 诗句也逐字竖排
                var poemChars = lines[pi].split("");
                for (var pci = 0; pci < poemChars.length; pci++) {
                    ctx.fillText(poemChars[pci], poemX + pi * (poemFontSize + 28), poemStartY + pci * (poemFontSize + 14));
                }
            }

            // 底部装饰线
            var decoY2 = H * 0.88;
            ctx.strokeStyle = "rgba(255,255,255,0.25)";
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(W * 0.3, decoY2);
            ctx.lineTo(W * 0.7, decoY2);
            ctx.stroke();

            // 品牌标识
            ctx.fillStyle = "rgba(255,255,255,0.65)";
            ctx.font = "32px 'Noto Serif SC','PingFang SC','Microsoft YaHei',serif";
            ctx.textAlign = "center";
            ctx.textBaseline = "top";
            ctx.fillText("仓城 · 古韵新生", W / 2, decoY2 + 28);

            resolve(canvas.toDataURL("image/png"));
        };
        img.onerror = function () {
            reject(new Error("海报图片加载失败"));
        };
        img.src = imageUrl;
    });
}

function showPosterResult(dataUrl) {
    var result = document.getElementById("poster-result");
    var preview = document.getElementById("poster-preview");
    var gen = document.getElementById("btn-poster-generate");
    var note = document.getElementById("poster-note");
    if (result) result.style.display = "";
    if (preview) preview.src = dataUrl;
    if (gen) gen.disabled = true;
    if (note) note.textContent = "海报已生成！可保存到手机相册分享到小红书/微博";
}

function handlePosterError(msg) {
    var existing = document.querySelector(".error-toast");
    if (existing) existing.remove();
    var toast = document.createElement("div");
    toast.className = "error-toast";
    toast.textContent = msg;
    document.body.appendChild(toast);
    setTimeout(function () {
        if (toast.parentNode) toast.remove();
    }, 3000);
    var note = document.getElementById("poster-note");
    if (note) note.textContent = msg + "，请重试";
}

function resetPosterState() {
    posterState.uploadedImageBase64 = null;
    posterState.selectedSpot = null;
    posterState.selectedStyle = null;
    posterState.isGenerating = false;
    posterState.posterDataUrl = null;
    if (posterPollTimer) {
        clearTimeout(posterPollTimer);
        posterPollTimer = null;
    }
}

/* ---------------- 导航 ---------------- */
function navigateTo(target) {
    var app = document.getElementById("app");
    // 离开 AI 页面时取消 pending 请求 + 重置状态
    if (state.currentView === "ai") resetAiState();
    if (state.currentView === "poster") resetPosterState();
    var node;
    if (target === "__home__" || target === "home") {
        node = renderHome();
        state.currentView = "home";
    } else if (target === "__list__" || target === "list") {
        node = renderList();
        state.currentView = "list";
    } else if (target === "__map__" || target === "map") {
        node = renderMap();
        state.currentView = "map";
    } else if (target === "__ai__" || target === "ai") {
        node = renderAiDraw();
        state.currentView = "ai";
    } else if (target === "__poster__" || target === "poster") {
        node = renderPoster();
        state.currentView = "poster";
    } else {
        node = renderDetail(target);
        state.currentView = target;
    }
    app.innerHTML = "";
    app.appendChild(node);
    // 关键：激活视图，使其从 display:none 切换为可见
    node.classList.add("active");
    window.scrollTo(0, 0);
    // 事件绑定必须在 DOM 插入之后，否则 getElementById 找不到元素
    if (state.currentView === "home") {
        bindHomeEvents();
    } else if (state.currentView === "list") {
        bindListEvents();
    } else if (state.currentView === "map") {
        bindMapEvents();
        setTimeout(initCangchengMap, 60);
    } else if (state.currentView === "ai") {
        bindAiDrawEvents();
    } else if (state.currentView === "poster") {
        bindPosterEvents();
    } else {
        bindDetailEvents();
    }
}

/* 事件委托：入口/返回按钮统一在此处理 */
function bindHomeEvents() {
    var app = document.getElementById("app");
    app.onclick = function (e) {
        var nav = e.target.closest("[data-nav]");
        if (nav && nav.dataset.nav) {
            navigateTo(nav.dataset.nav);
        }
    };
}

function bindListEvents() {
    var app = document.getElementById("app");
    app.onclick = function (e) {
        var nav = e.target.closest("[data-nav]");
        if (nav && nav.dataset.nav) {
            navigateTo(nav.dataset.nav);
            return;
        }
        var item = e.target.closest(".spot-item");
        if (item && item.dataset.id) {
            navigateTo(item.dataset.id);
        }
    };
}

/* 地图页：返回按钮 + 标记弹窗内"查看介绍"链接均走 data-nav 委托 */
function bindMapEvents() {
    var app = document.getElementById("app");
    app.onclick = function (e) {
        var nav = e.target.closest("[data-nav]");
        if (nav && nav.dataset.nav) {
            navigateTo(nav.dataset.nav);
        }
    };
}

function bindDetailEvents() {
    var app = document.getElementById("app");
    app.onclick = function (e) {
        var btn = e.target.closest("[data-nav]");
        if (btn && btn.dataset.nav) {
            navigateTo(btn.dataset.nav);
        }
    };
}

function bindAiDrawEvents() {
    var app = document.getElementById("app");
    // 导航委托（返回按钮等）
    app.onclick = function (e) {
        var nav = e.target.closest("[data-nav]");
        if (nav && nav.dataset.nav) {
            navigateTo(nav.dataset.nav);
            return;
        }
        // 点击上传区域 → 触发文件选择
        if (e.target.closest("#upload-zone")) {
            var inp = document.getElementById("upload-input");
            if (inp) inp.click();
            return;
        }
        // 风格卡片选择
        if (e.target.closest(".style-card")) {
            var card = e.target.closest(".style-card");
            var allCards = document.querySelectorAll(".style-card");
            allCards.forEach(function (c) { c.classList.remove("selected"); });
            card.classList.add("selected");
            aiState.selectedStyle = card.dataset.style;
            var hint = document.getElementById("style-hint");
            if (hint) { hint.textContent = "已选择：" + card.querySelector("span").textContent; hint.style.color = "var(--cinnabar)"; }
            updateGenerateButton();
            return;
        }
        // 比例按钮选择
        if (e.target.closest(".ratio-btn")) {
            var btn = e.target.closest(".ratio-btn");
            var allBtns = document.querySelectorAll(".ratio-btn");
            allBtns.forEach(function (b) { b.classList.remove("selected"); });
            btn.classList.add("selected");
            aiState.selectedRatio = btn.dataset.ratio;
            return;
        }
        // 重新选择按钮
        if (e.target.closest("#btn-reselect")) {
            var uz = document.getElementById("upload-zone");
            var pz = document.getElementById("preview-zone");
            var inp = document.getElementById("upload-input");
            var gen = document.getElementById("btn-generate");
            var res = document.getElementById("result-zone");
            if (uz) uz.style.display = "";
            if (pz) pz.style.display = "none";
            if (res) res.style.display = "none";
            if (inp) inp.value = "";
            if (gen) gen.disabled = true;
            aiState.uploadedImageBase64 = null;
            aiState.selectedStyle = null;
            aiState.selectedRatio = "1:1";
            aiState.generatedImageBase64 = null;
            var allCards = document.querySelectorAll(".style-card");
            allCards.forEach(function (c) { c.classList.remove("selected"); });
            var allBtns = document.querySelectorAll(".ratio-btn");
            allBtns.forEach(function (b) { b.classList.remove("selected"); });
            var firstBtn = document.querySelector('.ratio-btn[data-ratio="1:1"]');
            if (firstBtn) firstBtn.classList.add("selected");
            var hint = document.getElementById("style-hint");
            if (hint) { hint.textContent = "请选择一种风格"; hint.style.color = ""; }
            return;
        }
        // 生成按钮
        if (e.target.closest("#btn-generate") && !aiState.isGenerating) {
            startAiGeneration();
            return;
        }
        // 下载按钮
        if (e.target.closest("#btn-download")) {
            downloadGeneratedImage();
            return;
        }
        // 重新生成按钮
        if (e.target.closest("#btn-redo")) {
            var res = document.getElementById("result-zone");
            var gen = document.getElementById("btn-generate");
            if (res) res.style.display = "none";
            if (gen) gen.disabled = false;
            aiState.generatedImageBase64 = null;
            aiState.isGenerating = false;
            return;
        }
    };

    // 文件选择
    var fileInput = document.getElementById("upload-input");
    if (fileInput) {
        fileInput.onchange = function (e) {
            if (e.target.files && e.target.files[0]) {
                handleUploadFile(e.target.files[0]);
            }
        };
    }

    // 拖拽上传
    var zone = document.getElementById("upload-zone");
    if (zone) {
        zone.addEventListener("dragover", function (e) {
            e.preventDefault();
            zone.classList.add("drag-over");
        });
        zone.addEventListener("dragleave", function () {
            zone.classList.remove("drag-over");
        });
        zone.addEventListener("drop", function (e) {
            e.preventDefault();
            zone.classList.remove("drag-over");
            if (e.dataTransfer.files && e.dataTransfer.files[0]) {
                handleUploadFile(e.dataTransfer.files[0]);
            }
        });
    }
}

/* ---------------- AI 生图核心函数 ---------------- */

/* 根据图片+风格状态更新生成按钮 */
function updateGenerateButton() {
    var gen = document.getElementById("btn-generate");
    var note = document.getElementById("generate-note");
    if (gen) {
        gen.disabled = !(aiState.uploadedImageBase64 && aiState.selectedStyle && !aiState.isGenerating);
    }
    if (note) {
        if (!aiState.uploadedImageBase64) {
            note.textContent = "上传图片并选择风格后即可开始 AI 转换";
        } else if (!aiState.selectedStyle) {
            note.textContent = "请在上方选择一种风格";
        } else {
            note.textContent = "准备就绪，点击按钮开始 AI 风格转换";
        }
    }
}

/* Canvas 压缩图片：限制宽度 + JPEG 输出，减少传输体积 */
function compressImage(base64, maxWidth, quality) {
    return new Promise(function (resolve) {
        var img = new Image();
        img.onload = function () {
            var canvas = document.createElement("canvas");
            var ratio = Math.min(1, maxWidth / img.width);
            canvas.width = img.width * ratio;
            canvas.height = img.height * ratio;
            var ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            resolve(canvas.toDataURL("image/jpeg", quality || 0.85));
        };
        img.onerror = function () {
            resolve(base64);
        };
        img.src = base64;
    });
}

/* LiblibAI 图生图：先压缩 → 发送到 Worker → Worker 上传+提交 → 返回 uuid → 轮询 */
var aiPollTimer = null;

function startAiGeneration() {
    if (aiState.isGenerating) return;
    aiState.isGenerating = true;

    var gen = document.getElementById("btn-generate");
    var loading = document.getElementById("loading-zone");
    var pz = document.getElementById("preview-zone");
    var result = document.getElementById("result-zone");
    var note = document.getElementById("generate-note");

    if (gen) { gen.disabled = true; gen.textContent = "生成中..."; }
    if (note) note.textContent = "正在调用 AI 模型，请耐心等待...";
    if (loading) loading.style.display = "";
    if (pz) pz.style.display = "none";
    if (result) result.style.display = "none";

    var cfg = STYLE_CONFIG[aiState.selectedStyle];
    if (!cfg) {
        handleGenerationError("未知风格，请重新选择");
        return;
    }

    // 根据选择的画面比例计算输出尺寸
    var ratioW = 2048, ratioH = 2048;
    for (var i = 0; i < RATIO_OPTIONS.length; i++) {
        if (RATIO_OPTIONS[i].key === aiState.selectedRatio) {
            ratioW = RATIO_OPTIONS[i].w;
            ratioH = RATIO_OPTIONS[i].h;
            break;
        }
    }

    // 带重试的 fetch 包装
    function fetchWithRetry(url, options, retries) {
        retries = retries || 1;
        return fetch(url, options).catch(function (err) {
            if (retries > 0) {
                if (note) note.textContent = "连接失败，正在自动重试...";
                return new Promise(function (r) { setTimeout(r, 1500); }).then(function () {
                    return fetchWithRetry(url, options, retries - 1);
                });
            }
            throw err;
        });
    }

    // 压缩图片到 512px 宽以减少 Worker CPU 消耗，Seedream 内部会放大
    compressImage(aiState.uploadedImageBase64, 512, 0.8).then(function (compressed) {
        // 发送到 Worker（带自动重试）
        return fetchWithRetry(API_PROXY + "/api/liblib/generate", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                image: compressed,
                prompt: cfg.prompt,
                width: ratioW,
                height: ratioH
            })
        }).then(function (res) {
            if (!res.ok) {
                return res.json().then(function (e) {
                    throw new Error(e.error || "API 返回错误 " + res.status);
                });
            }
            return res.json();
        });
    }).then(function (data) {
        if (!data.generateUuid) throw new Error("未获取到任务 ID");
        // 开始轮询
        return pollPrediction(data.generateUuid);
    }).then(function (outputUrl) {
        aiState.generatedImageBase64 = outputUrl;
        showResult(aiState.uploadedImageBase64, outputUrl);
    }).catch(function (err) {
        if (err.name === "AbortError") {
            handleGenerationError("生成超时，请稍后重试");
        } else if (!navigator.onLine) {
            handleGenerationError("网络连接失败，请检查网络");
        } else {
            handleGenerationError(err.message || "生成失败，请稍后重试");
        }
    }).finally(function () {
        aiState.isGenerating = false;
        aiPollTimer = null;
        if (gen) { gen.disabled = false; gen.textContent = "开始生成"; }
        if (loading) loading.style.display = "none";
    });
}

/* 轮询 LiblibAI 任务状态（每 2 秒一次，最多 120 次 = 4 分钟） */
function pollPrediction(generateUuid) {
    var attempts = 0;
    var maxAttempts = 120;
    return new Promise(function (resolve, reject) {
        function check() {
            if (attempts >= maxAttempts) {
                reject(new Error("生成超时，请稍后重试"));
                return;
            }
            attempts++;
            fetch(API_PROXY + "/api/liblib/status", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ generateUuid: generateUuid })
            }).then(function (res) {
                if (!res.ok) {
                    return res.json().then(function (e) {
                        throw new Error(e.error || "查询失败");
                    });
                }
                return res.json();
            }).then(function (data) {
                if (data.status === "succeeded") {
                    if (!data.imageUrl) {
                        reject(new Error("AI 生成结果为空"));
                        return;
                    }
                    resolve(data.imageUrl);
                } else if (data.status === "failed") {
                    reject(new Error("AI 生成失败，请重试"));
                } else {
                    // processing → 继续轮询
                    aiPollTimer = setTimeout(check, 2000);
                }
            }).catch(function (err) {
                reject(err);
            });
        }
        check();
    });
}

/* 显示生成结果：原图 + AI 转绘对比 */
function showResult(originalSrc, generatedSrc) {
    var result = document.getElementById("result-zone");
    var origImg = document.getElementById("result-original");
    var genImg = document.getElementById("result-generated");
    var genBtn = document.getElementById("btn-generate");
    var note = document.getElementById("generate-note");

    if (origImg) origImg.src = originalSrc;

    // LiblibAI 返回的是 URL（非 base64），跨域加载
    if (genImg) {
        genImg.src = generatedSrc;
        genImg.crossOrigin = "anonymous";
    }
    if (result) result.style.display = "";
    if (genBtn) genBtn.disabled = true;
    if (note) note.textContent = "AI 转绘完成！可保存图片或重新生成";
}

/* 下载生成的图片（通过 canvas 解决跨域问题） */
function downloadGeneratedImage() {
    var genImg = document.getElementById("result-generated");
    if (!genImg || !genImg.src) return;

    // 如果已经是 base64，直接下载
    if (genImg.src.indexOf("data:") === 0) {
        var link = document.createElement("a");
        link.download = "cangcheng_ai_" + (aiState.selectedStyle || "style") + "_" + Date.now() + ".png";
        link.href = genImg.src;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        return;
    }

    // 跨域 URL：用 canvas 捕获已加载的图片再导出
    try {
        var canvas = document.createElement("canvas");
        canvas.width = genImg.naturalWidth;
        canvas.height = genImg.naturalHeight;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(genImg, 0, 0);
        var dataUrl = canvas.toDataURL("image/png");
        var link = document.createElement("a");
        link.download = "cangcheng_ai_" + (aiState.selectedStyle || "style") + "_" + Date.now() + ".png";
        link.href = dataUrl;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } catch (e) {
        // Canvas 被跨域污染时 fallback：新窗口打开
        handleGenerationError("请长按图片保存");
        window.open(genImg.src, "_blank");
    }
}

/* 错误提示 toast */
function handleGenerationError(msg) {
    var existing = document.querySelector(".error-toast");
    if (existing) existing.remove();

    var toast = document.createElement("div");
    toast.className = "error-toast";
    toast.textContent = msg;
    document.body.appendChild(toast);

    setTimeout(function () {
        if (toast.parentNode) toast.remove();
    }, 3000);

    var note = document.getElementById("generate-note");
    if (note) note.textContent = msg + "，请重试";
}

/* 数字海报事件绑定 */
function bindPosterEvents() {
    var app = document.getElementById("app");
    app.onclick = function (e) {
        var nav = e.target.closest("[data-nav]");
        if (nav && nav.dataset.nav) {
            navigateTo(nav.dataset.nav);
            return;
        }
        // 上传区域 → 触发文件选择
        if (e.target.closest("#poster-upload-zone")) {
            var inp = document.getElementById("poster-upload-input");
            if (inp) inp.click();
            return;
        }
        // 重新选择照片
        if (e.target.closest("#btn-poster-reselect")) {
            var uz = document.getElementById("poster-upload-zone");
            var pz = document.getElementById("poster-preview-zone");
            var inp = document.getElementById("poster-upload-input");
            var gen = document.getElementById("btn-poster-generate");
            var res = document.getElementById("poster-result");
            if (uz) uz.style.display = "";
            if (pz) pz.style.display = "none";
            if (res) res.style.display = "none";
            if (inp) inp.value = "";
            if (gen) gen.disabled = true;
            posterState.uploadedImageBase64 = null;
            posterState.posterDataUrl = null;
            updatePosterButton();
            return;
        }
        // 景点按钮选择
        if (e.target.closest(".poster-spot-btn")) {
            var btn = e.target.closest(".poster-spot-btn");
            var allBtns = document.querySelectorAll(".poster-spot-btn");
            allBtns.forEach(function (b) { b.classList.remove("selected"); });
            btn.classList.add("selected");
            posterState.selectedSpot = btn.dataset.spot;
            var hint = document.getElementById("poster-spot-hint");
            if (hint) {
                var poems = POSTER_TAGLINES[btn.dataset.spot] || [""];
                var preview = poems[0].replace(/\n/g, " / ");
                hint.textContent = "已选择：" + btn.textContent + " — " + preview;
                hint.style.color = "var(--cinnabar)";
            }
            updatePosterButton();
            return;
        }
        // 风格卡片选择
        if (e.target.closest(".poster-style-card")) {
            var sc = e.target.closest(".poster-style-card");
            var allSc = document.querySelectorAll(".poster-style-card");
            allSc.forEach(function (c) { c.classList.remove("selected"); });
            sc.classList.add("selected");
            posterState.selectedStyle = sc.dataset.style;
            updatePosterButton();
            return;
        }
        // 生成按钮
        if (e.target.closest("#btn-poster-generate") && !posterState.isGenerating) {
            generatePoster();
            return;
        }
        // 下载按钮
        if (e.target.closest("#btn-poster-download")) {
            downloadPoster();
            return;
        }
        // 重新生成
        if (e.target.closest("#btn-poster-redo")) {
            var res = document.getElementById("poster-result");
            var gen = document.getElementById("btn-poster-generate");
            if (res) res.style.display = "none";
            if (gen) gen.disabled = false;
            posterState.posterDataUrl = null;
            posterState.isGenerating = false;
            updatePosterButton();
            return;
        }
    };

    // 文件选择
    var fileInput = document.getElementById("poster-upload-input");
    if (fileInput) {
        fileInput.onchange = function (ev) {
            if (ev.target.files && ev.target.files[0]) {
                handlePosterUploadFile(ev.target.files[0]);
            }
        };
    }

    // 拖拽上传
    var zone = document.getElementById("poster-upload-zone");
    if (zone) {
        zone.addEventListener("dragover", function (ev) { ev.preventDefault(); zone.classList.add("drag-over"); });
        zone.addEventListener("dragleave", function () { zone.classList.remove("drag-over"); });
        zone.addEventListener("drop", function (ev) {
            ev.preventDefault();
            zone.classList.remove("drag-over");
            if (ev.dataTransfer.files && ev.dataTransfer.files[0]) {
                handlePosterUploadFile(ev.dataTransfer.files[0]);
            }
        });
    }
}

function handlePosterUploadFile(file) {
    if (!file.type.match(/^image\//)) {
        alert("请选择图片文件（JPG、PNG、WebP）");
        return;
    }
    if (file.size > 20 * 1024 * 1024) {
        alert("图片文件不能超过 20MB");
        return;
    }
    var reader = new FileReader();
    reader.onload = function (ev) {
        var img = document.getElementById("poster-preview-image");
        var uz = document.getElementById("poster-upload-zone");
        var pz = document.getElementById("poster-preview-zone");
        var res = document.getElementById("poster-result");
        if (img) img.src = ev.target.result;
        if (uz) uz.style.display = "none";
        if (pz) pz.style.display = "";
        if (res) res.style.display = "none";
        posterState.uploadedImageBase64 = ev.target.result;
        posterState.posterDataUrl = null;
        updatePosterButton();
    };
    reader.readAsDataURL(file);
}

function downloadPoster() {
    if (!posterState.posterDataUrl) return;
    var spot = findSpotById(posterState.selectedSpot);
    var name = spot ? spot.name : "仓城";
    var link = document.createElement("a");
    link.download = "仓城海报_" + name + "_" + Date.now() + ".png";
    link.href = posterState.posterDataUrl;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

/* 重置 AI 状态（页面切换时调用） */
function resetAiState() {
    aiState.selectedStyle = null;
    aiState.selectedRatio = "1:1";
    aiState.uploadedImageBase64 = null;
    aiState.generatedImageBase64 = null;
    aiState.isGenerating = false;
    if (aiAbortController) {
        aiAbortController.abort();
        aiAbortController = null;
    }
    if (aiPollTimer) {
        clearTimeout(aiPollTimer);
        aiPollTimer = null;
    }
}

/* ---------------- 启动 ---------------- */
document.addEventListener("DOMContentLoaded", function () {
    navigateTo("home");
});
