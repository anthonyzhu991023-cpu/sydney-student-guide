import type { Article, Category } from "@/types/content";

export const fallbackCategories: Category[] = [
  {
    _id: "arrival",
    title: "落地第一周",
    slug: "arrival",
    icon: "portal",
    description: "入境、电话卡、银行卡、Opal、住处和第一趟超市采购。",
    order: 1
  },
  {
    _id: "housing",
    title: "租房避坑",
    slug: "housing",
    icon: "key",
    description: "找房、看房、合同、Bond、室友、搬家和纠纷处理。",
    order: 2
  },
  {
    _id: "transport",
    title: "Opal 交通",
    slug: "transport",
    icon: "rail",
    description: "火车、公交、轻轨、渡轮、机场线和通勤省钱技巧。",
    order: 3
  },
  {
    _id: "work-money",
    title: "TFN 与打工",
    slug: "work-money",
    icon: "coin",
    description: "TFN、兼职、简历、工资单、税务和基础职场权益。",
    order: 4
  },
  {
    _id: "health",
    title: "OSHC 医保",
    slug: "health",
    icon: "shield",
    description: "OSHC、GP、药房、急诊、心理支持和夜间安全。",
    order: 5
  },
  {
    _id: "food-shopping",
    title: "超市与生活",
    slug: "food-shopping",
    icon: "bread",
    description: "Coles、Woolworths、Aldi、亚洲超市和一人食预算。",
    order: 6
  },
  {
    _id: "study-campus",
    title: "校园生活",
    slug: "study-campus",
    icon: "scroll",
    description: "选课、图书馆、小组作业、学术诚信和校园资源。",
    order: 7
  },
  {
    _id: "city-life",
    title: "城市生活",
    slug: "city-life",
    icon: "torch",
    description: "社交、周末活动、海滩、公园、市区探索和文化适应。",
    order: 8
  }
];

const bySlug = (slug: string) =>
  fallbackCategories.find((category) => category.slug === slug) ?? fallbackCategories[0];

export const fallbackArticles: Article[] = [
  {
    _id: "first-72-hours-in-sydney",
    title: "刚到悉尼的前 72 小时：留学生新手任务清单",
    slug: "first-72-hours-in-sydney",
    excerpt: "从机场落地到电话卡、银行卡、Opal、临时住处和第一趟超市采购，一篇走完悉尼新手村。",
    category: bySlug("arrival"),
    tags: ["新生", "落地清单", "电话卡", "银行卡", "Opal"],
    publishedAt: "2026-06-01T09:00:00.000Z",
    readTime: "8 分钟",
    featured: true,
    fallbackBody: [
      "抵达前一天，把护照、签证、学校 offer、住宿地址、紧急联系人和保险信息都保存到手机离线文件夹。机场网络不稳定时，这些文件会比临时找邮箱可靠得多。",
      "机场出来后先解决网络和交通。第一次进城可以用银行卡直接 Tap on，也可以购买 Opal 卡。若行李多，先别硬省交通费，安全抵达临时住处更重要。",
      "第一天优先处理电话卡、银行卡和基础采购。第二天确认住处、熟悉附近超市和车站。第三天再去学校周边走一圈，记住图书馆、学生中心和常用公交站。",
      "不要在疲惫状态下签长期租房合同。刚落地的一周，最重要的是稳住睡眠、网络、交通和住处，再慢慢完成后续任务。"
    ]
  },
  {
    _id: "sydney-rental-survival-guide",
    title: "悉尼租房避坑指南：看房、Bond、合同和室友都要看什么",
    slug: "sydney-rental-survival-guide",
    excerpt: "帮你判断一套房能不能住、合同能不能签、室友靠不靠谱，以及押金和账单怎么处理。",
    category: bySlug("housing"),
    tags: ["租房", "Bond", "看房", "合同", "室友"],
    publishedAt: "2026-06-03T09:00:00.000Z",
    readTime: "10 分钟",
    featured: true,
    fallbackBody: [
      "看房前先筛掉明显异常的房源：价格远低于同区、只给模糊照片、拒绝现场或视频看房、催你立刻转账的，都要提高警惕。",
      "现场看房重点看通风、采光、霉斑、虫害、噪音、热水、网络和公共区域卫生。不要只看卧室，厨房和卫生间往往更能反映居住质量。",
      "Bond、租金、账单和钥匙交接都要留下文字记录。入住前拍照保存房屋状态，尤其是墙面、地毯、家具、电器和已有损坏。",
      "和室友提前说清清洁、访客、作息、公共用品和账单分摊。比起找到完美房子，避免高风险合住关系更现实。"
    ]
  },
  {
    _id: "how-to-use-sydney-public-transport",
    title: "Opal 和悉尼公共交通怎么坐：火车、公交、轻轨一次讲清",
    slug: "how-to-use-sydney-public-transport",
    excerpt: "快速理解 Opal、换乘、通勤规划、机场线和夜间回家方案。",
    category: bySlug("transport"),
    tags: ["Opal", "火车", "公交", "轻轨", "通勤"],
    publishedAt: "2026-06-05T09:00:00.000Z",
    readTime: "7 分钟",
    featured: true,
    fallbackBody: [
      "悉尼公共交通主要包括火车、公交、轻轨和渡轮。多数日常通勤用火车加公交就够，住处选择时要同时看距离车站的步行时间和夜间安全。",
      "使用 Opal 或支持的银行卡都需要 Tap on 和 Tap off。公交也要记得下车前刷卡，否则可能按更远距离计费。",
      "机场线会有额外费用，第一次从机场进城前先比较行李量、到达时间和目的地位置。深夜抵达时，安全和少折腾比最低价格更重要。",
      "常用路线建议收藏到手机地图里。遇到周末轨道维护时，提前看替代公交，不要到站后才发现线路停运。"
    ]
  },
  {
    _id: "student-work-guide-australia",
    title: "澳洲留学生打工入门：TFN、最低工资、简历和试工避坑",
    slug: "student-work-guide-australia",
    excerpt: "找兼职前需要准备什么，如何识别不靠谱岗位，以及工资、税号和基本权益。",
    category: bySlug("work-money"),
    tags: ["兼职", "TFN", "简历", "工资", "学生签证"],
    publishedAt: "2026-06-07T09:00:00.000Z",
    readTime: "9 分钟",
    fallbackBody: [
      "开始找工作前先准备 TFN、英文简历、澳洲手机号、银行卡和可工作时间表。很多兼职看重稳定排班和沟通清楚，而不只是经验。",
      "警惕长期无薪试工、明显低于合理工资、拒绝提供工资单、要求交押金或扣证件的岗位。现金工并不等于安全或划算。",
      "简历重点写可用时间、语言能力、过往服务经验和能承担的工作类型。面试时回答要具体，少用空泛的努力表态。",
      "保存排班、工时、工资单和沟通记录。遇到不合理要求时，先整理证据，再寻求学校学生服务或 Fair Work 相关信息。"
    ]
  },
  {
    _id: "oshc-gp-pharmacy-emergency-guide",
    title: "在悉尼生病了怎么办：OSHC、GP、药房和紧急情况指南",
    slug: "oshc-gp-pharmacy-emergency-guide",
    excerpt: "讲清留学生在悉尼看病的基本路径：药房、GP、急诊和心理支持怎么选。",
    category: bySlug("health"),
    tags: ["OSHC", "GP", "药房", "急诊", "心理健康"],
    publishedAt: "2026-06-09T09:00:00.000Z",
    readTime: "8 分钟",
    fallbackBody: [
      "小病可以先去药房咨询，药剂师会告诉你是否需要预约 GP。持续高烧、严重疼痛、呼吸困难或明显外伤，不要硬扛。",
      "预约 GP 前准备护照、学生证、OSHC 信息、症状时间线和正在使用的药。描述症状时尽量具体：什么时候开始、哪里痛、有没有加重。",
      "紧急情况拨打 000。心理压力很大时，也可以优先联系学校支持服务或 OSHC 提供商资源，不必等到完全崩溃才求助。",
      "建议把 OSHC 卡号、紧急联系人、常用诊所、附近药房和过敏信息保存到手机备忘录。"
    ]
  },
  {
    _id: "sydney-grocery-guide-for-students",
    title: "悉尼留学生买菜地图：Coles、Woolworths、Aldi 和亚洲超市怎么选",
    slug: "sydney-grocery-guide-for-students",
    excerpt: "从主流超市到亚洲食材店，整理适合留学生的采购路线、预算组合和第一周购物清单。",
    category: bySlug("food-shopping"),
    tags: ["买菜", "超市", "省钱", "亚洲超市", "生活用品"],
    publishedAt: "2026-06-11T09:00:00.000Z",
    readTime: "6 分钟",
    fallbackBody: [
      "Coles 和 Woolworths 分布广，适合买日常基础食材；Aldi 选择少一些，但很多基础品更便宜。亚洲超市适合买调料、速冻、米面和熟悉的家乡食材。",
      "第一周别囤太多。先买能撑 3 到 5 天的基础组合：主食、鸡蛋、牛奶或豆浆、蔬菜、水果、简单蛋白质、洗衣液和纸巾。",
      "留意半价标签和会员价，但不要因为打折买一堆用不完的东西。真正省钱的是稳定做饭和减少浪费。",
      "如果合租，先确认厨房空间、冰箱格子和公共调料规则，再决定要不要买大包装。"
    ]
  }
];
