const atlasThemes = {
  yulan: {
    theme: '早春玉兰',
    category: 'flower',
    categoryLabel: '花木',
    icon: 'flower',
    time: '3月中旬 — 4月上旬',
    season: '春季',
    duration: '1—2小时',
    viewingTip: '建议清晨前往，先观察花木与古建的远近层次，再细看花芽和花瓣形态。',
    focus: '先花后叶、花芽形态与古建轮廓',
    lead: '玉兰在叶片展开之前开花，灰墙、红墙与屋檐是它最常见的背景。',
    quote: '一枝先开的玉兰，可以让整座庭院知道春天到了。',
    ode: '先花后叶，是它写给早春最克制也最明亮的一封回信。白花映着灰墙，连古建也仿佛轻轻松了一口气。',
  },
  eryuelan: {
    theme: '林下二月兰',
    category: 'flower',
    categoryLabel: '花木',
    icon: 'flower',
    time: '3月 — 5月',
    season: '春季',
    duration: '1—2小时',
    viewingTip: '选择林下散射光较柔和的时段，沿步道观察，不踩踏花丛和幼苗。',
    focus: '蓝紫花海、林下光照与群落层次',
    lead: '二月兰把春天从地面铺开，小花在林下与路边形成连绵花海。',
    quote: '一片蓝紫色花海，让林下也有了天空的颜色。',
    ode: '无数细小的蓝紫花，把林下的阴影铺成一层柔软的雾。它不争高枝，却让整个春天从地面明亮起来。',
  },
  yueji: {
    theme: '城市月季',
    category: 'flower',
    categoryLabel: '花木',
    icon: 'flower',
    time: '5月 — 10月',
    season: '春末至秋季',
    duration: '1—2小时',
    viewingTip: '上午或傍晚花色更清楚，可同时比较不同品种的花形与色彩。',
    focus: '市花景观、花形色彩与连续花期',
    lead: '月季从公园花境一直开到日常道路，以漫长花期串联北京的春夏秋。',
    quote: '它开在公园，也开在回家的路上。',
    ode: '它把花期拉得很长，像把春天折成许多次重逢。热烈而不喧哗，在街角和庭院里一遍遍赞美日常。',
  },
  luwei: {
    theme: '湿地芦苇',
    category: 'wetland',
    categoryLabel: '湿地',
    icon: 'wetland',
    time: '6月 — 11月',
    season: '夏季至秋季',
    duration: '1.5—3小时',
    viewingTip: '沿固定步道观察，不进入芦苇和湿地保护区域，留意风与水面的变化。',
    focus: '水岸群落、鸟类栖息与风过芦苇的动态',
    lead: '芦苇沿水岸生长，为湿地留下柔软的生态边界与丰富的隐蔽空间。',
    quote: '风一来，整片湿地都开始低声说话。',
    ode: '风从苇梢穿过，水岸便有了呼吸。它替湿地守住柔软的边界，也替飞鸟留下安静的归处。',
  },
  yuyan: {
    theme: '城楼雨燕',
    category: 'bird',
    categoryLabel: '鸟类',
    icon: 'bird',
    time: '5月 — 7月',
    season: '夏季',
    duration: '1—2小时',
    viewingTip: '黄昏前后更容易观察飞行活动，建议使用远摄设备并保持观鸟距离。',
    focus: '黄昏飞行、空中取食与古建巢址',
    lead: '北京雨燕绕着城楼和屋檐飞行，把古都的夏天写成一圈圈弧线。',
    quote: '每一次盘旋，都是古都夏天的签名。',
    ode: '它把天空当作道路，把城楼当作旧居。每一次掠过屋脊的弧线，都像替古都写下夏天的签名。',
  },
  zhonghuaqiushaya: {
    theme: '清流秋沙鸭',
    category: 'bird',
    categoryLabel: '鸟类',
    icon: 'bird',
    time: '12月 — 次年2月',
    season: '冬季',
    duration: '2—4小时',
    viewingTip: '携带双筒望远镜，在公开观察区域远距离记录，不靠近水面惊扰鸟类。',
    focus: '越冬个体、清洁河流与水质指示',
    lead: '它对水质和栖息地很挑剔，每一次现身都像河流交出的生态答卷。',
    quote: '它停在水面上，像生态恢复留下的回声。',
    ode: '它落在清流上，像一滴安静的墨，也像河流递来的生态回信。水越澄澈，这份相遇就越显珍贵。',
  },
  yinxing: {
    theme: '秋日银杏',
    category: 'tree',
    categoryLabel: '古树',
    icon: 'tree',
    time: '10月下旬 — 11月中旬',
    season: '秋季',
    duration: '1—2小时',
    viewingTip: '晴天上午叶色最通透，可顺光观察，并留意落叶铺地后的城市景观。',
    focus: '扇形叶、金色树冠与城市街道秩序',
    lead: '秋风把扇形叶片染成金色，北京的街巷因此有了明亮的时间层次。',
    quote: '银杏一黄，北京的秋天就有了声音。',
    ode: '风一吹，扇形叶便替城市翻开金色的书页。落叶铺满街巷，时间也在此刻有了柔软的形状。',
  },
  cebai: {
    theme: '古柏森然',
    category: 'tree',
    categoryLabel: '古树',
    icon: 'tree',
    time: '全年 · 冬季轮廓最清晰',
    season: '四季皆宜',
    duration: '1—2小时',
    viewingTip: '冬季树形轮廓最清晰，也可近距离观察树皮、枝干和古树生长痕迹。',
    focus: '常绿树形、古树年轮与坛庙空间',
    lead: '侧柏四季常青，守在坛庙、陵寝与古建旁，把时间站成一棵树。',
    quote: '在古建旁，一棵柏树也是一段沉默的历史。',
    ode: '它不与繁花争春，只以常绿守着坛庙与旧墙。沉默的年轮里，藏着北京最长久的一段呼吸。',
  },
  xiangshanhongye: {
    theme: '香山秋色',
    category: 'mountain',
    categoryLabel: '山地',
    icon: 'mountain',
    time: '10月下旬 — 11月中旬',
    season: '秋季',
    duration: '3—5小时',
    viewingTip: '登山前确认开放路线，晴天午后留意坡向、逆光和远近山色的变化。',
    focus: '黄栌、元宝枫、坡向光照与山地色谱',
    lead: '秋色沿着海拔与坡向逐层铺开，把城市生活引向可行走的山地。',
    quote: '香山的秋天不是一下子红的，是被风一层层染出来的。',
    ode: '红叶不是一夜燃起，而是被风一层层点染。山色铺开时，秋天便从远处走到眼前。',
  },
  yongdinghe: {
    theme: '永定河脉',
    category: 'wetland',
    categoryLabel: '湿地',
    icon: 'wetland',
    time: '9月 — 次年3月',
    season: '秋季至次年春季',
    duration: '2—4小时',
    viewingTip: '沿河岸步道分段观察，留意水位变化、岸线植被和现场生态提示。',
    focus: '河流廊道、河岸植被与季节性鸟类',
    lead: '河水穿过山口、平原与城市边缘，把北京的自然脉络重新串联起来。',
    quote: '河水回到城市，也让许多生命重新有路可走。',
    ode: '河水穿过山口与平原，把散落的自然重新连成脉络。岸边每一阵风，都在讲述城市与河流的和解。',
  },
};

const atlasPlaces = [
  { id: 'yulan-summer-palace', name: '颐和园', theme: 'yulan', district: '海淀区', coordinate: [116.2753, 39.9988], location: '乐寿堂、邀月门与古建庭院周边', note: '在古建庭院里观察玉兰与檐线、院墙共同形成的早春层次。' },
  { id: 'yulan-palace-museum', name: '故宫周边', theme: 'yulan', district: '东城区', coordinate: [116.397, 39.9163], offset: [-6, 7], location: '故宫周边开放空间与历史街区', note: '红墙与白色花冠形成强烈对照，适合观察玉兰的挺拔轮廓。' },
  { id: 'yulan-dajue-temple', name: '大觉寺', theme: 'yulan', district: '海淀区', coordinate: [116.102, 40.052], location: '寺院庭院与古树景观区', note: '花木、古树与寺院空间叠在一起，是安静观察玉兰与古建关系的一处庭院。' },

  { id: 'eryuelan-tiantan', name: '天坛公园', theme: 'eryuelan', district: '东城区', coordinate: [116.4102, 39.8822], offset: [-7, -8], location: '古柏林下与公园林缘空间', note: '重点看蓝紫色花毯如何沿林下空间铺展，以及树影中的明暗变化。' },
  { id: 'eryuelan-jiangfu-park', name: '将府公园', theme: 'eryuelan', district: '朝阳区', coordinate: [116.512, 39.97], location: '林下花海与自然步道沿线', note: '成片开放时更容易观察二月兰的群落尺度和步行视线变化。' },
  { id: 'eryuelan-yuanmingyuan', name: '圆明园遗址公园', theme: 'eryuelan', district: '海淀区', coordinate: [116.298, 40.008], location: '遗址绿地与湖边林下空间', note: '遗址、树群与花海共同形成北京早春特有的历史景观。' },

  { id: 'rose-botanical-garden', name: '国家植物园月季园', theme: 'yueji', district: '海淀区', coordinate: [116.2106, 40.0014], location: '月季专类园与花境展示区', note: '集中观察月季的不同花形、花色和连续开放状态。' },
  { id: 'rose-daxing-garden', name: '世界月季主题园', theme: 'yueji', district: '大兴区', coordinate: [116.397, 39.682], location: '月季主题展园与城市花境', note: '适合比较品种群之间的花形差异和城市园艺应用。' },

  { id: 'reed-hanshiqiao', name: '汉石桥湿地', theme: 'luwei', district: '顺义区', coordinate: [116.7945, 40.1234], location: '芦苇荡、浅水岸线与观鸟区域', note: '观察芦苇群落的垂直线条，以及水鸟、昆虫与隐蔽空间的关系。' },
  { id: 'reed-nanhai-park', name: '南海子公园', theme: 'luwei', district: '大兴区', coordinate: [116.467, 39.77], location: '湖岸湿地与芦苇缓冲区', note: '适合观察人工水岸如何通过芦苇形成更自然的过渡边界。' },
  { id: 'reed-yeyahu', name: '野鸭湖湿地', theme: 'luwei', district: '延庆区', coordinate: [115.844, 40.453], location: '湿地自然保护区外围观景区域', note: '在开阔湿地中观察芦苇、水面和鸟类活动组成的完整生境。' },

  { id: 'swift-zhengyangmen', name: '正阳门', theme: 'yuyan', district: '东城区', coordinate: [116.3975, 39.8996], offset: [8, 10], location: '城楼周边公共空间与中轴线高空', note: '黄昏时段观察雨燕在城楼与中轴线上空高速盘旋。' },
  { id: 'swift-summer-palace', name: '颐和园古建群', theme: 'yuyan', district: '海淀区', coordinate: [116.2753, 39.9988], offset: [-8, 8], location: '古建屋檐与湖面上空', note: '从古建屋檐和开阔水面上方寻找雨燕的飞行剪影。' },

  { id: 'duck-miyun-reservoir', name: '密云水库', theme: 'zhonghuaqiushaya', district: '密云区', coordinate: [116.93, 40.5], location: '水库上游清洁河段与外围观察点', note: '关注清洁水面、越冬水鸟和河流生态状态。' },
  { id: 'duck-huairou-reservoir', name: '怀柔水库', theme: 'zhonghuaqiushaya', district: '怀柔区', coordinate: [116.63, 40.31], location: '山区河流与水库上游开放水域', note: '适合记录秋冬迁徙与越冬季的水鸟活动。' },

  { id: 'ginkgo-diaoyutai', name: '钓鱼台银杏大道', theme: 'yinxing', district: '海淀区', coordinate: [116.338, 39.917], offset: [-7, -8], location: '银杏大道步行空间', note: '重点观察成排银杏形成的空间秩序和落叶铺地后的时间感。' },
  { id: 'ginkgo-ditan', name: '地坛公园', theme: 'yinxing', district: '东城区', coordinate: [116.4072, 39.9524], location: '园内银杏步道与坛庙空间', note: '适合观察银杏与古建、坛庙空间共同构成的秋日色彩。' },
  { id: 'ginkgo-tanzhe', name: '潭柘寺', theme: 'yinxing', district: '门头沟区', coordinate: [116.031, 39.902], location: '寺院古银杏与庭院空间', note: '古树、寺塔和金色叶片共同形成山地古建秋景。' },

  { id: 'cypress-tiantan', name: '天坛古柏', theme: 'cebai', district: '东城区', coordinate: [116.4102, 39.8822], offset: [7, 8], location: '古柏林与祭坛空间', note: '观察古柏树形、树皮纹理和坛庙空间的长久尺度。' },
  { id: 'cypress-taimiao', name: '太庙古柏', theme: 'cebai', district: '东城区', coordinate: [116.3955, 39.908], offset: [6, -6], location: '太庙庭院与古柏廊道', note: '中轴建筑与常绿古柏共同形成庄重、稳定的历史空间。' },
  { id: 'cypress-jietai', name: '戒台寺', theme: 'cebai', district: '门头沟区', coordinate: [116.081, 39.871], location: '寺院台地古树群', note: '山地寺院中的古柏枝干姿态和石阶空间值得细看。' },

  { id: 'xiangshan-park', name: '香山公园', theme: 'xiangshanhongye', district: '海淀区', coordinate: [116.1935, 39.9954], location: '香炉峰、静宜园与主要观景点', note: '登高看色叶在山坡与沟谷间铺开，近处观察叶片纹理和林下光影。' },
  { id: 'xiangshan-west-forest', name: '西山国家森林公园', theme: 'xiangshanhongye', district: '海淀区', coordinate: [116.184, 39.981], offset: [-5, 8], location: '西山步道与观景平台', note: '从不同海拔和坡向观察黄栌、元宝枫形成的色叶层次。' },

  { id: 'yongding-park', name: '永定河休闲森林公园', theme: 'yongdinghe', district: '石景山区', coordinate: [116.148, 39.903], location: '河岸公园、慢行步道与滨水空间', note: '观察河岸植被、慢行空间和季节水鸟之间的关系。' },
  { id: 'yongding-lugou', name: '卢沟桥', theme: 'yongdinghe', district: '丰台区', coordinate: [116.213, 39.849], location: '卢沟桥与永定河沿岸', note: '历史地标、河岸滩地和城市水系在这里形成连续景观。' },
  { id: 'yongding-garden-expo', name: '园博园湿地', theme: 'yongdinghe', district: '丰台区', coordinate: [116.195, 39.875], location: '园博园水系与湿地花园', note: '适合观察湿地修复、植物配置和鸟类活动空间的连接。' },
];

const MAP_WIDTH = 1000;
const MAP_HEIGHT = 840;
const MAP_PADDING = 54;
const MAP_BOUNDS = {
  minLon: 115.423411,
  maxLon: 117.514583,
  minLat: 39.442758,
  maxLat: 41.0608,
};
const midLat = (MAP_BOUNDS.minLat + MAP_BOUNDS.maxLat) / 2;
const lonScale = Math.cos((midLat * Math.PI) / 180);
const projectedLonRange = (MAP_BOUNDS.maxLon - MAP_BOUNDS.minLon) * lonScale;
const latRange = MAP_BOUNDS.maxLat - MAP_BOUNDS.minLat;
const mapScale = Math.min(
  (MAP_WIDTH - MAP_PADDING * 2) / projectedLonRange,
  (MAP_HEIGHT - MAP_PADDING * 2) / latRange,
);
const mapOffsetX = (MAP_WIDTH - projectedLonRange * mapScale) / 2;
const mapOffsetY = (MAP_HEIGHT - latRange * mapScale) / 2;

const districtColors = [
  '#edf1e6',
  '#e5ede3',
  '#eaf0e4',
  '#e2ebe0',
  '#eef0e4',
  '#e5ede1',
  '#e8eee2',
  '#edf0e6',
  '#e3ece4',
  '#eaf0e5',
  '#e4ecdf',
  '#edf1e7',
  '#e6eee3',
  '#e1eade',
  '#e8efe5',
  '#ebf0e5',
];

const atlasMarkersElement = document.getElementById('atlasMarkers');
const atlasDistricts = document.getElementById('atlasDistricts');
const atlasDistrictLabels = document.getElementById('atlasDistrictLabels');
const atlasLegendItems = Array.from(document.querySelectorAll('[data-atlas-filter]'));
const atlasDetailIndex = document.getElementById('atlasDetailIndex');
const atlasDetailCategory = document.getElementById('atlasDetailCategory');
const atlasDetailTitle = document.getElementById('atlasDetailTitle');
const atlasDetailLead = document.getElementById('atlasDetailLead');
const atlasDetailTheme = document.getElementById('atlasDetailTheme');
const atlasDetailTime = document.getElementById('atlasDetailTime');
const atlasDetailSeason = document.getElementById('atlasDetailSeason');
const atlasDetailDuration = document.getElementById('atlasDetailDuration');
const atlasDetailDistrict = document.getElementById('atlasDetailDistrict');
const atlasDetailFocus = document.getElementById('atlasDetailFocus');
const atlasDetailLocation = document.getElementById('atlasDetailLocation');
const atlasDetailAdvice = document.getElementById('atlasDetailAdvice');
const atlasDetailQuote = document.getElementById('atlasDetailQuote');
const atlasMonthInput = document.getElementById('atlasMonth');
const atlasMonthOutput = document.getElementById('atlasMonthOutput');
const atlasThemeChip = document.getElementById('atlasThemeChip');
const atlasThemeChipLabel = document.getElementById('atlasThemeChipLabel');
const atlasDetailEnter = document.getElementById('atlasDetailEnter');
const atlasDetailElement = document.getElementById('atlasDetail');
const pageParams = new URLSearchParams(location.search);

let atlasMarkers = [];
let activePlaceId = 'yulan-summer-palace';

/** 地图筛选状态：主题类别 × 观赏月份 × 单一主题聚焦，三者取交集 */
const atlasFilter = {
  category: 'all',
  month: JinghuaCalendar.normalizeMonth(pageParams.get('month')),
  theme: atlasThemes[pageParams.get('theme')] ? pageParams.get('theme') : '',
};

function projectCoordinate([longitude, latitude]) {
  return [
    mapOffsetX + (longitude - MAP_BOUNDS.minLon) * lonScale * mapScale,
    mapOffsetY + (MAP_BOUNDS.maxLat - latitude) * mapScale,
  ];
}

function geometryToPath(geometry) {
  const polygons = geometry.type === 'Polygon' ? [geometry.coordinates] : geometry.coordinates;
  return polygons.flatMap((polygon) => polygon.map((ring) => (
    ring.map((coordinate, index) => {
      const [x, y] = projectCoordinate(coordinate);
      return `${index === 0 ? 'M' : 'L'}${x.toFixed(2)} ${y.toFixed(2)}`;
    }).join(' ') + ' Z'
  ))).join(' ');
}

function createSvgElement(name, attributes = {}) {
  const element = document.createElementNS('http://www.w3.org/2000/svg', name);
  Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value));
  return element;
}

function renderDistricts(features) {
  const labelLayout = [];

  features.forEach((feature, index) => {
    const path = createSvgElement('path', {
      class: 'atlas-district',
      d: geometryToPath(feature.geometry),
      style: `fill:${districtColors[index % districtColors.length]}`,
    });
    atlasDistricts.appendChild(path);

    const center = feature.properties.center || feature.properties.centroid;
    if (!center) return;
    const [x, y] = projectCoordinate(center);
    const name = feature.properties.name.replace(/区$/, '');
    labelLayout.push({
      name,
      anchorX: x,
      anchorY: y,
      x,
      y,
      width: name.length * 9 + 12,
    });
  });

  for (let iteration = 0; iteration < 80; iteration += 1) {
    for (let left = 0; left < labelLayout.length; left += 1) {
      for (let right = left + 1; right < labelLayout.length; right += 1) {
        const a = labelLayout[left];
        const b = labelLayout[right];
        let dx = b.x - a.x;
        let dy = b.y - a.y;
        let distance = Math.hypot(dx, dy);
        const minimumDistance = Math.max(a.width, b.width);
        if (distance >= minimumDistance) continue;
        if (distance < 0.01) {
          dx = (left + right) % 2 ? 1 : -1;
          dy = (left - right) % 3 - 1;
          distance = Math.hypot(dx, dy);
        }
        const push = (minimumDistance - distance) / 2;
        const nx = dx / distance;
        const ny = dy / distance;
        a.x -= nx * push;
        a.y -= ny * push;
        b.x += nx * push;
        b.y += ny * push;
      }
    }

    labelLayout.forEach((label) => {
      label.x += (label.anchorX - label.x) * 0.045;
      label.y += (label.anchorY - label.y) * 0.045;
    });
  }

  labelLayout.forEach((item) => {
    const moved = Math.hypot(item.x - item.anchorX, item.y - item.anchorY) > 4;
    if (moved) {
      atlasDistrictLabels.appendChild(createSvgElement('line', {
        class: 'atlas-label-leader',
        x1: item.anchorX.toFixed(2),
        y1: item.anchorY.toFixed(2),
        x2: item.x.toFixed(2),
        y2: item.y.toFixed(2),
      }));
    }

    atlasDistrictLabels.appendChild(createSvgElement('circle', {
      class: 'atlas-district-center',
      cx: item.anchorX.toFixed(2),
      cy: item.anchorY.toFixed(2),
      r: '2.5',
    }));

    const label = createSvgElement('text', {
      class: 'atlas-district-label',
      x: item.x.toFixed(2),
      y: item.y.toFixed(2),
    });
    label.textContent = item.name;
    atlasDistrictLabels.appendChild(label);
  });
}

function markerMarkup(place, x, y) {
  const theme = atlasThemes[place.theme];
  const left = (x / MAP_WIDTH) * 100;
  const top = (y / MAP_HEIGHT) * 100;
  return `
    <button class="atlas-marker is-${theme.category}" style="left:${left.toFixed(3)}%;top:${top.toFixed(3)}%" type="button" data-place="${place.id}" aria-label="${place.name}，${place.district}" aria-pressed="false">
      <svg aria-hidden="true"><use href="#atlas-icon-${theme.icon}"></use></svg>
      <span>${place.name} · ${place.district}</span>
    </button>
  `;
}

function spreadMarkerLayout() {
  const minimumDistance = 28;
  const layout = atlasPlaces.map((place, index) => {
    const [x, y] = projectCoordinate(place.coordinate);
    const [offsetX, offsetY] = place.offset || [0, 0];
    return {
      x: x + offsetX,
      y: y + offsetY,
      anchorX: x + offsetX * 0.35,
      anchorY: y + offsetY * 0.35,
      index,
    };
  });

  for (let iteration = 0; iteration < 90; iteration += 1) {
    for (let left = 0; left < layout.length; left += 1) {
      for (let right = left + 1; right < layout.length; right += 1) {
        const a = layout[left];
        const b = layout[right];
        let dx = b.x - a.x;
        let dy = b.y - a.y;
        let distance = Math.hypot(dx, dy);
        if (distance >= minimumDistance) continue;
        if (distance < 0.01) {
          dx = (right - left) % 2 ? 1 : -1;
          dy = (left + right) % 3 - 1;
          distance = Math.hypot(dx, dy);
        }
        const push = (minimumDistance - distance) / 2;
        const nx = dx / distance;
        const ny = dy / distance;
        a.x -= nx * push;
        a.y -= ny * push;
        b.x += nx * push;
        b.y += ny * push;
      }
    }

    layout.forEach((point) => {
      point.x += (point.anchorX - point.x) * 0.035;
      point.y += (point.anchorY - point.y) * 0.035;
      point.x = Math.max(MAP_PADDING, Math.min(MAP_WIDTH - MAP_PADDING, point.x));
      point.y = Math.max(MAP_PADDING, Math.min(MAP_HEIGHT - MAP_PADDING, point.y));
    });
  }

  return layout;
}

function renderMarkers() {
  const layout = spreadMarkerLayout();
  atlasMarkersElement.innerHTML = atlasPlaces.map((place, index) => markerMarkup(place, layout[index].x, layout[index].y)).join('');
  atlasMarkers = Array.from(atlasMarkersElement.querySelectorAll('[data-place]'));
  atlasMarkers.forEach((marker) => {
    marker.addEventListener('click', () => selectPlace(marker.dataset.place));
  });
  atlasMarkersElement.setAttribute('aria-busy', 'false');
}

function placeIsVisible(place) {
  const theme = atlasThemes[place.theme];
  if (atlasFilter.theme && place.theme !== atlasFilter.theme) return false;
  if (atlasFilter.category !== 'all' && theme.category !== atlasFilter.category) return false;
  if (atlasFilter.month && !JinghuaCalendar.isInMonth(place.theme, atlasFilter.month)) return false;
  return true;
}

/** 把当前筛选与选中地点写进地址栏，便于刷新与分享 */
function syncAtlasUrl() {
  const params = new URLSearchParams();
  if (activePlaceId) params.set('place', activePlaceId);
  if (atlasFilter.month) params.set('month', String(atlasFilter.month));
  if (atlasFilter.category !== 'all') params.set('category', atlasFilter.category);
  if (atlasFilter.theme) params.set('theme', atlasFilter.theme);
  try {
    window.history.replaceState(null, '', `${location.pathname}?${params.toString()}`);
  } catch (error) {
    /* file:// 下 History API 不可用，跳过地址同步 */
  }
}

function applyAtlasFilters() {
  atlasLegendItems.forEach((item) => {
    const active = atlasFilter.category === 'all'
      ? item.dataset.atlasFilter === 'all'
      : item.dataset.atlasFilter === atlasFilter.category;
    item.classList.toggle('is-active', active);
    item.setAttribute('aria-pressed', String(active));
  });

  atlasMonthInput.value = String(atlasFilter.month);

  if (atlasFilter.theme) {
    const focusTheme = atlasThemes[atlasFilter.theme];
    atlasThemeChip.hidden = false;
    atlasThemeChipLabel.textContent = `仅看 ${focusTheme.theme}`;
    atlasThemeChip.setAttribute('aria-label', `清除「${focusTheme.theme}」主题筛选`);
  } else {
    atlasThemeChip.hidden = true;
    atlasThemeChipLabel.textContent = '';
    atlasThemeChip.removeAttribute('aria-label');
  }

  let visibleCount = 0;
  atlasMarkers.forEach((marker) => {
    const place = atlasPlaces.find((item) => item.id === marker.dataset.place);
    const visible = placeIsVisible(place);
    marker.hidden = !visible;
    if (visible) visibleCount += 1;
  });

  atlasMonthOutput.textContent = `${JinghuaCalendar.monthText(atlasFilter.month)} · ${visibleCount} 处`;

  if (!visibleCount) {
    renderEmptyDetail();
    return;
  }

  atlasDetailElement.classList.remove('is-empty');
  const selected = atlasPlaces.find((item) => item.id === activePlaceId);
  if (!selected || !placeIsVisible(selected)) {
    const firstVisible = atlasMarkers.find((marker) => !marker.hidden);
    if (firstVisible) selectPlace(firstVisible.dataset.place);
  }
}

/** 类别 × 月份筛选后没有任何地点时的空态 */
function renderEmptyDetail() {
  activePlaceId = '';
  atlasMarkers.forEach((marker) => {
    marker.classList.remove('is-active');
    marker.setAttribute('aria-pressed', 'false');
  });

  atlasDetailElement.classList.add('is-empty');
  atlasDetailIndex.textContent = '—';
  atlasDetailCategory.innerHTML = '<span>筛选结果</span>';
  atlasDetailTitle.textContent = '这个组合下暂无推荐地点';
  atlasDetailLead.textContent = '换一个月份或类别，可以看到更多可观赏的自然地点。';
  atlasDetailQuote.textContent = '';
  atlasDetailEnter.hidden = true;
  syncAtlasUrl();
}

/** 支持 ?place=<地点> 与 ?theme=<主题> 两种深链 */
function applyEntryParams() {
  const requestedPlace = pageParams.get('place');
  const requestedTheme = pageParams.get('theme');

  if (requestedPlace && atlasPlaces.some((place) => place.id === requestedPlace)) {
    activePlaceId = requestedPlace;
    return;
  }
  if (atlasFilter.theme) {
    const firstPlace = atlasPlaces.find((place) => place.theme === atlasFilter.theme);
    if (firstPlace) activePlaceId = firstPlace.id;
  }
}

function setCategoryIcon(theme) {
  atlasDetailCategory.innerHTML = `
    <svg aria-hidden="true"><use href="#atlas-icon-${theme.icon}"></use></svg>
    <span>${theme.categoryLabel}</span>
  `;
}

function selectPlace(placeId) {
  const place = atlasPlaces.find((item) => item.id === placeId);
  if (!place) return;
  const theme = atlasThemes[place.theme];
  activePlaceId = placeId;

  atlasMarkers.forEach((marker) => {
    const isActive = marker.dataset.place === placeId;
    marker.classList.toggle('is-active', isActive);
    marker.setAttribute('aria-pressed', String(isActive));
  });

  atlasDetailIndex.textContent = String(atlasPlaces.indexOf(place) + 1).padStart(2, '0');
  setCategoryIcon(theme);
  atlasDetailTitle.textContent = place.name;
  atlasDetailLead.textContent = place.note;
  atlasDetailTheme.textContent = theme.theme;
  atlasDetailTime.textContent = theme.time;
  atlasDetailSeason.textContent = theme.season;
  atlasDetailDuration.textContent = theme.duration;
  atlasDetailDistrict.textContent = place.district;
  atlasDetailFocus.textContent = theme.focus;
  atlasDetailLocation.textContent = place.location;
  atlasDetailAdvice.textContent = theme.viewingTip;
  atlasDetailQuote.textContent = theme.ode;

  atlasDetailEnter.hidden = false;
  atlasDetailEnter.href = JinghuaCalendar.speciesHref(place.theme);
  atlasDetailEnter.innerHTML = `进入「${theme.theme}」主页<span aria-hidden="true">↗</span>`;

  syncAtlasUrl();
}

function bindLegendControls() {
  atlasLegendItems.forEach((button) => {
    button.addEventListener('click', () => {
      atlasFilter.category = button.dataset.atlasFilter;
      atlasFilter.theme = '';
      applyAtlasFilters();
    });
  });

  atlasMonthInput.addEventListener('input', () => {
    atlasFilter.month = JinghuaCalendar.normalizeMonth(atlasMonthInput.value);
    applyAtlasFilters();
  });

  atlasThemeChip.addEventListener('click', () => {
    atlasFilter.theme = '';
    atlasFilter.category = 'all';
    applyAtlasFilters();
  });
}

/** 优先用内置脚本里的行政区数据；万一脚本没载入，再退回请求 geojson。
 *  内置是为了避免 file:// 打开时 fetch 失败，导致底图整块空白。 */
async function loadDistricts() {
  if (window.BeijingDistricts && window.BeijingDistricts.features) return window.BeijingDistricts;
  const response = await fetch(new URL('assets/beijing-districts.geojson', document.baseURI));
  if (!response.ok) throw new Error(`Map data request failed: ${response.status}`);
  return response.json();
}

async function initializeAtlas() {
  try {
    const geojson = await loadDistricts();
    renderDistricts(geojson.features);
  } catch (error) {
    // 用页面上的真实元素提示；伪元素对 <svg> 不生效，写了也不会显示
    const frame = document.querySelector('.atlas-map-frame');
    if (frame) frame.classList.add('has-map-error');
    console.error(error);
  }

  renderMarkers();
  bindLegendControls();
  applyEntryParams();
  applyAtlasFilters();
  selectPlace(activePlaceId);
}

initializeAtlas();
