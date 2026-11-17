// Build lightweight SVG problem diagrams. Only givens belong here, never solutions.
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const base = path.resolve(__dirname, '..');
const directory = path.join(base, 'assets/diagrams');
fs.mkdirSync(directory, { recursive: true });
const escape = value => String(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
const ink = '#202124', muted = '#666970', line = '#d8dbe0', pink = '#ff5c7a';
const text = (x,y,value,size=16,_color=ink,anchor='middle') => `<text x="${x}" y="${y}" font-size="${size}" fill="#111" text-anchor="${anchor}">${escape(value)}</text>`;
const rect = (x,y,w,h,fill='#fff',stroke=line,r=12) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${fill}" stroke="${stroke}" stroke-width="1.5"/>`;
const segment = (x1,y1,x2,y2,color=line,dash='') => `<path d="M${x1} ${y1}L${x2} ${y2}" fill="none" stroke="${color}" stroke-width="2"${dash?' stroke-dasharray="'+dash+'"':''}/>`;
const arrow = (x1,y1,x2,y2,color=ink) => `<path d="M${x1} ${y1}L${x2} ${y2}" fill="none" stroke="${color}" stroke-width="2" marker-end="url(#arrow)"/>`;
const dot = (x,y,color=ink,r=4) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${color}"/>`;
const card = (x,y,w,h,title,value) => rect(x,y,w,h)+text(x+w/2,y+28,title,14,muted)+text(x+w/2,y+60,value,22);
const tiles = (items,y=64) => {
  const gap=10,w=Math.min(84,(536-(items.length-1)*gap)/items.length), total=items.length*w+(items.length-1)*gap;
  return items.map((item,i)=>rect((600-total)/2+i*(w+gap),y,w,64)+text((600-total)/2+i*(w+gap)+w/2,y+41,item,25)).join('');
};
const note = (value,y=180) => text(300,y,value,15,muted);
const title = value => text(300,30,value,15,muted);
const table = (headers,rows,widths=[140,350],startX=55,startY=52,rowHeight=38) => {
  let svg=''; const all=[headers,...rows];
  for(let r=0;r<all.length;r++) { let x=startX; for(let c=0;c<all[r].length;c++) { const w=widths[c]; svg+=rect(x,startY+r*rowHeight,w,rowHeight,r===0?'#f1f2f4':'#fff',line,0)+text(x+w/2,startY+r*rowHeight+25,all[r][c],r===0?14:16); x+=w; } }
  return svg;
};
const drawings = {};
const add=(id,alt,caption,height,body)=>{ drawings[id]={alt,caption,height,body}; };
function beaker(x,concentration,mass){
  return `<path d="M${x} 66v80q0 12 12 12h72q12 0 12-12V66" fill="#fff" stroke="${ink}" stroke-width="2"/>`+rect(x+5,112,86,39,'#f5f6f8','none',3)+text(x+48,96,concentration,23)+text(x+48,141,mass,17);
}
add('math-001','10% 소금물 300g과 25% 소금물 미지의 양을 섞어 16% 소금물을 만드는 도식.','농도와 질량을 따로 확인해보세요.',210,
  beaker(46,'10%','300g')+text(169,118,'+',25)+beaker(198,'25%','? g')+arrow(316,112,370,112)+beaker(398,'16%','완성')+note('물의 증발 없음',194));
add('math-002','A는 혼자 6시간, B는 혼자 9시간. 처음 2시간은 함께 일하고 그 뒤 A만 일합니다.','막대 길이는 실제 작업량의 비율을 나타내지 않습니다.',228,
  card(50,28,235,84,'A 혼자 완료','6시간')+card(315,28,235,84,'B 혼자 완료','9시간')+rect(50,142,215,48,'#f5f6f8')+rect(265,142,285,48)+text(157,172,'함께 2시간',18)+text(407,172,'A 혼자 ? 시간',18)+text(50,215,'시작',14,muted,'start')+text(550,215,'완료',14,muted,'end'));
add('math-003','서로 독립적인 주사위 두 개. 적어도 하나가 6이라는 조건에서 합이 9일 확률을 구합니다.','주사위의 순서는 정해져 있지 않습니다.',205,
  title('적어도 하나의 주사위가 6')+rect(160,57,100,100)+text(210,125,'?',47)+text(300,118,'+',24)+rect(340,57,100,100)+text(390,125,'?',47)+note('두 눈의 합이 9일 확률은?',190));
add('math-004','100 이상 150 이하의 정수. 7로 나눈 나머지 3, 9로 나눈 나머지 5 조건.','두 나머지 조건을 모두 만족하는 수를 찾으세요.',190,
  segment(85,59,515,59,ink)+segment(85,52,85,66,ink)+segment(515,52,515,66,ink)+text(85,90,'100',17)+text(515,90,'150',17)+text(300,48,'범위 안의 정수',15,muted)+card(50,107,235,72,'÷ 7','나머지 3')+card(315,107,235,72,'÷ 9','나머지 5'));
add('math-005','정가에서 20% 할인하고 할인 금액에 세금 10%를 더한 최종 결제액은 88,000원입니다.','할인과 세금이 적용되는 순서를 확인하세요.',185,
  card(32,40,145,86,'세전 정가','? 원')+arrow(186,83,229,83)+card(237,40,145,86,'할인 후 금액','20% 할인')+arrow(392,83,435,83)+card(443,40,125,86,'결제액','88,000원')+text(414,58,'세금',13,muted)+text(414,116,'+10%',13,muted)+note('할인 → 할인된 금액에 세금 적용',165));
{
 let body=''; const px=x=>120+x*86,py=y=>290-y*70;
 for(let x=0;x<=4;x++) body+=segment(px(x),py(0),px(x),py(3));
 for(let y=0;y<=3;y++) body+=segment(px(0),py(y),px(4),py(y));
 for(let x=0;x<=4;x++) for(let y=0;y<=3;y++) body+=dot(px(x),py(y),'#c3c7cd',3);
 body+=dot(px(0),py(0))+text(px(0),323,'출발 (0,0)',15)+dot(px(4),py(3))+text(px(4),55,'도착 (4,3)',15);
 body+=dot(px(2),py(1),pink,7)+text(px(2),py(1)-18,'통과 금지 (2,1)',15,pink);
 body+=arrow(40,128,40,83)+text(40,66,'북',15)+arrow(500,283,551,283)+text(553,310,'동',15);
 add('math-006','가로 4칸 세로 3칸 격자. 출발점 0,0, 도착점 4,3, 지나지 못하는 교차점 2,1이 표시되어 있습니다.','동쪽 또는 북쪽으로 한 칸씩 이동합니다.',347,body);
}
add('logic-001','A, B, C, D 네 상자가 있고 열쇠는 정확히 한 상자에 있습니다.','열쇠의 위치는 표시하지 않았습니다.',161,
  title('열쇠는 네 상자 중 한 곳')+tiles(['A','B','C','D'],52));
add('logic-002','왼쪽부터 1~4번 네 자리. A는 B 바로 왼쪽, C는 양 끝 제외, D는 C보다 왼쪽입니다.','아래 자리는 아직 정해지지 않은 빈자리입니다.',214,
  tiles(['?','?','?','?'],62)+text(159,151,'1번',14,muted)+text(253,151,'2번',14,muted)+text(347,151,'3번',14,muted)+text(441,151,'4번',14,muted)+note('왼쪽 → 오른쪽',30)+note('A와 B는 바로 이웃 · C는 끝자리 제외',190));
add('logic-003','연구실 구성원은 안전교육을 받은 사람 집합 안에 있고, 빨간 출입증 집합은 안전교육 집합과 겹치지 않습니다.','문제에 주어진 두 집합 관계입니다.',224,
  rect(40,45,310,150,'#f7f8fa')+text(195,77,'안전교육 받은 사람',17)+rect(75,106,240,64)+text(195,145,'연구실 구성원',18)+rect(395,71,170,105)+text(480,114,'빨간 출입증',17)+text(480,141,'소지자',17)+segment(367,100,379,152,muted)+segment(379,100,367,152,muted));
add('logic-004','정확히 두 프로젝트를 선택합니다. A 선택 시 B 필요, D 선택 시 A 필요, C와 B 동시 선택 불가.','화살표는 함께 선택해야 한다는 조건입니다.',221,
  title('정확히 두 개 선택')+rect(60,57,100,55)+text(110,92,'A',24)+arrow(175,84,245,84)+rect(260,57,100,55)+text(310,92,'B',24)+text(428,90,'C와 B 동시 선택 ×',16)+rect(60,138,100,55)+text(110,173,'D',24)+arrow(175,165,245,165)+rect(260,138,100,55)+text(310,173,'A',24));
add('logic-005','보이는 카드 네 장의 면은 A, D, 4, 7이며 반대쪽 면은 숨겨져 있습니다.','모음인 카드의 반대쪽은 짝수여야 합니다.',191,
  title('카드의 보이는 면')+tiles(['A','D','4','7'],52)+note('각 카드의 반대쪽 면은 보이지 않음',148));
add('logic-006','P, Q, R 세 스위치. P와 Q 중 정확히 하나 켜짐, P가 켜지면 R, R가 켜지면 Q도 켜짐.','각 스위치의 실제 상태는 아직 모릅니다.',203,
  title('P와 Q 중 정확히 하나만 켜짐')+tiles(['P','Q','R'],52)+note('P 켜짐 → R 켜짐     /     R 켜짐 → Q 켜짐',148));
{
 let body=title('보관실 출입 기록'); const px=m=>100+(m-17*60)*4.1;
 const rows=[['A',1050,1085],['B',1090,1110],['C',1070,1100],['D',1020,1060]];
 for(const [i,[name,start,end]] of rows.entries()) {const y=72+i*49;body+=text(45,y+5,name,18)+segment(100,y,545,y,'#eceef1')+rect(px(start),y-10,px(end)-px(start),20,'#dce0e6','none',5);}
 for(const m of [1020,1050,1080,1110]) body+=text(px(m),285,Math.floor(m/60)+':'+String(m%60).padStart(2,'0'),13,muted);
 body+=segment(px(1088),49,px(1088),247,pink,'5 4')+text(px(1088),38,'18:08 사건',14,pink);
 add('reasoning-001','A 17:30~18:05, B 18:10~18:30, C 17:50~18:20, D 17:00~17:40의 출입 구간과 사건 시각 18:08을 표시한 타임라인.','막대는 각 사람이 보관실 안에 있던 시간입니다.',305,body);
}
add('reasoning-002','라벨이 사과, 배, 혼합인 세 상자. 라벨은 모두 잘못 붙었고 혼합 라벨 상자에서 사과 하나를 꺼냈습니다.','표시는 내용물이 아닌 상자의 라벨입니다.',205,
  title('세 상자의 라벨은 모두 틀림')+tiles(['사과','배','혼합'],59)+arrow(395,135,395,163)+text(395,191,'사과 1개를 꺼냄',15)+text(190,182,'실제 내용물은 ?',16,muted));
add('reasoning-003','기록 A 09:18에 4분 빠름, B 09:10에 3분 느림, C 09:16에 1분 빠름, D 09:12에 오차 없음.','표시된 시각은 실제 시각이 아닌 시계의 기록입니다.',245,
  table(['사건','기록된 시각','시계 상태'],[['A','09:18','4분 빠름'],['B','09:10','3분 느림'],['C','09:16','1분 빠름'],['D','09:12','오차 없음']],[80,190,220],55,27,39));
add('reasoning-004','682는 숫자 1개와 자리 맞음, 614는 숫자 1개 자리 다름, 206은 숫자 2개 자리 다름, 738은 없음, 780은 숫자 1개 자리 다름.','각 행의 숫자 개수는 해당 줄에서 암호에 포함되는 숫자의 총개수입니다.',291,
  table(['입력','맞는 숫자','자리'],[['682','정확히 1개','맞음'],['614','정확히 1개','다름'],['206','정확히 2개','둘 다 다름'],['738','0개','—'],['780','정확히 1개','다름']],[130,180,180],55,23,41));
add('reasoning-005','모든 작업이 08:00 시작. A는 12분, B는 18분, C는 20분, D는 30분 간격. 오류 시각 08:54.','모든 작업은 같은 시각에 처음 실행됩니다.',204,
  text(100,40,'08:00 시작',18)+arrow(175,35,419,35)+text(490,40,'08:54 오류',18)+card(40,78,120,87,'A 간격','12분')+card(173,78,120,87,'B 간격','18분')+card(306,78,120,87,'C 간격','20분')+card(439,78,120,87,'D 간격','30분'));
{
 let body=title('1차 비교: A·B·C 쪽이 가벼움');
 body+=`<path d="M300 145l-22 64h44Z" fill="#eceef1" stroke="${ink}" stroke-width="2"/>`+segment(145,91,455,125,ink)+dot(300,108,ink,5);
 body+=segment(155,93,155,141,ink)+segment(445,124,445,172,ink)+rect(91,141,128,36)+rect(381,172,128,36)+text(155,165,'A · B · C',17)+text(445,196,'D · E · F',17);
 body+=note('2차 비교: A와 B의 무게가 같음',242);
 add('reasoning-006','첫 양팔저울에서 A·B·C 쪽 접시가 위로 올라가 더 가볍고 D·E·F 쪽은 아래로 내려갑니다. 두 번째 비교는 A와 B가 같았습니다.','가짜는 정확히 하나이며 진짜보다 가볍습니다.',261,body);
}
{
 let body='';for(const [x1,y1,x2,y2] of [[225,229,375,229],[375,229,375,129],[375,129,125,129]])body+=arrow(x1,y1,x2,y2);
 body+=dot(225,229)+text(225,260,'출발',16)+dot(125,129,pink,6)+text(125,106,'마지막 위치',15,pink)+text(299,257,'① 오른쪽 전환 · 3칸',14)+text(456,186,'② 왼쪽 전환',14)+text(456,210,'2칸',14)+text(268,102,'③ 왼쪽 전환 · 5칸',14);
 body+=arrow(57,209,57,162)+text(57,147,'북',15,muted);
 add('spatial-001','북쪽을 보고 출발한 뒤 동쪽 3칸, 북쪽 2칸, 서쪽 5칸의 꺾인 이동 경로. 출발점과 마지막 위치 표시.','화살표는 이동 순서와 방향입니다.',287,body);
}
{
 let body='';const faces=[[1,0,5],[0,1,4],[1,1,1],[2,1,3],[1,2,2],[1,3,6]];
 for(const [x,y,n] of faces) body+=rect(55+x*54,26+y*54,54,54,n===1?'#f2f3f6':'#fff',line,0)+text(82+x*54,61+y*54,n,22);
 body+=text(397,64,'처음: 윗면 1 / 앞면 2',16)+text(397,111,'앞쪽으로 1번',18)+arrow(397,126,397,157)+text(397,184,'오른쪽으로 1번',18)+note('왼쪽 그림은 처음 상태의 전개도입니다.',278);
 add('spatial-002','처음 정육면체의 전개도. 윗면 1, 아래 6, 앞 2, 뒤 5, 오른쪽 3, 왼쪽 4. 앞으로 한 번, 오른쪽으로 한 번 굴립니다.','전개도에는 처음 면의 배치만 표시했습니다.',299,body);
}
{
 const px=x=>120+x*31,py=y=>290-y*31;let body=rect(px(0),py(8),248,248,'#fff',line,0)+rect(px(4),py(8),124,124,'#f1f3f6',line,0);
 body+=segment(px(4),py(0),px(4),py(8),muted,'5 5')+segment(px(0),py(4),px(8),py(4),muted,'5 5');
 body+=arrow(px(1),py(6),px(3.4),py(6))+arrow(px(6),py(1),px(6),py(3.4));
 body+=dot(px(6),py(7),pink,5)+text(px(6)+15,py(7)-12,'(6,7)',14,pink,'start');
 body+=text(px(0),315,'0',14)+text(px(4),315,'4',14)+text(px(8),315,'8',14)+text(98,py(8)+5,'8',14)+text(98,py(4)+5,'4',14)+text(424,165,'① 왼쪽 → 오른쪽',14)+text(424,195,'② 아래 → 위',14);
 add('spatial-003','8×8 종이의 접는 선 x=4와 y=4, 왼쪽에서 오른쪽 및 아래에서 위쪽으로 접는 화살표. 남는 오른쪽 위 영역의 구멍 6,7 한 개만 표시.','음영은 접힌 뒤 겹쳐지는 영역입니다. 펼친 뒤의 구멍은 표시하지 않았습니다.',336,body);
}
{
 let body='';for(const ox of [72,375]) for(let r=0;r<3;r++)for(let c=0;c<3;c++)body+=rect(ox+c*48,67+r*48,48,48,'#fff',line,0);
 body+=text(72+2.5*48,67+1.5*48+7,'C',23)+arrow(246,137,347,137)+text(297,114,'90°',18)+text(297,166,'시계 방향',14,muted)+text(144,42,'처음',15,muted)+text(447,42,'회전 후',15,muted)+note('행: 위 → 아래   /   열: 왼쪽 → 오른쪽',245);
 add('spatial-004','3×3 판에서 C가 2행 3열에 있는 처음 모습과 빈 회전 후 판. 시계 방향 90도 회전 화살표.','오른쪽 판은 C의 위치를 직접 생각해보는 빈 판입니다.',266,body);
}
{
 let body=''; const px=x=>210+x*43,py=y=>166-y*43;
 for(let i=-3;i<=3;i++){body+=segment(px(i),py(-2),px(i),py(2),'#eceef1')+segment(px(-3),py(i),px(3),py(i),'#eceef1');}
 body+=arrow(px(-3),py(0),px(3.2),py(0))+arrow(px(0),py(-2.2),px(0),py(2.5))+text(px(3.4),py(0)+5,'x',14)+text(px(0)+18,py(2.5),'y',14);
 body+=dot(px(2),py(-1),pink,6)+text(px(2),py(-1)+28,'(2,−1)',15,pink)+text(477,112,'① y축 대칭',17)+text(477,151,'② 시계 방향 90°',17);
 add('spatial-005','좌표평면에 처음 점 2,-1만 표시. 먼저 y축 대칭, 이어 원점 중심 시계 방향 90도 회전 순서.','점의 처음 위치만 표시했습니다.',314,body);
}
{
 const a=[174,105],b=[345,105],c=[420,56],d=[249,56],e=[174,276],f=[345,276],g=[420,227];
 const pts=p=>p.map(v=>v.join(',')).join(' ');let body=`<polygon points="${pts([a,b,c,d])}" fill="#f5f6f8" stroke="${ink}" stroke-width="1.5"/><polygon points="${pts([a,b,f,e])}" fill="#fff" stroke="${ink}" stroke-width="1.5"/><polygon points="${pts([b,c,g,f])}" fill="#eceef1" stroke="${ink}" stroke-width="1.5"/>`;
 const lerp=(p,q,t)=>[p[0]+(q[0]-p[0])*t,p[1]+(q[1]-p[1])*t];
 for(let i=1;i<4;i++){const t=i/4;for(const [p,q,r,s] of [[a,b,e,f],[a,e,b,f],[a,b,d,c],[a,d,b,c],[b,c,f,g],[b,f,c,g]]){const u=lerp(p,q,t),v=lerp(r,s,t);body+=segment(...u,...v,'#aeb3bc');}}
 body+=note('각 모서리를 4등분 · 바깥 여섯 면 전체를 칠함',313);
 add('spatial-006','각 모서리가 4칸으로 나뉜 정육면체의 입체도. 보이는 세 면에 4×4 분할이 표시되어 있습니다.','그림 뒤쪽을 포함한 바깥 여섯 면에 모두 색을 칠합니다.',333,body);
}
add('pattern-001','문자 A, C, F, J, O 다음에 빈칸 하나가 있는 순서.','알파벳 이동 칸 수가 매번 1씩 증가합니다.',168,
  tiles(['A','C','F','J','O','?'],50));
add('pattern-002','코드 B3, D6, F12, H24 다음에 미지의 코드가 있는 순서.','문자는 두 글자 다음으로, 숫자는 두 배로 바뀝니다.',168,
  tiles(['B3','D6','F12','H24','?'],50));
add('pattern-003','1부터 40까지의 범위에서 3의 배수 또는 숫자 3을 포함하면 박수를 한 번 치는 규칙.','두 조건이 겹쳐도 한 번만 셉니다.',192,
  tiles(['1','2','…','40'],31)+rect(60,125,214,43)+text(167,152,'3의 배수',17)+text(300,152,'또는',15,muted)+rect(327,125,214,43)+text(434,152,'숫자 3을 포함',17));
add('pattern-004','치환 규칙 A는 AB로, B는 A로 바뀜. 처음 A, 첫 단계 AB, 두 번째 ABA 이후 계속 진행합니다.','한 단계의 모든 문자를 동시에 바꿉니다.',215,
  rect(58,30,215,64)+text(165,72,'A → AB',25)+rect(327,30,215,64)+text(434,72,'B → A',25)+tiles(['A','AB','ABA','…'],126));
{
 const definitions={0:'abcdef',1:'bc',2:'abdeg',3:'abcdg',4:'bcfg',5:'acdfg',6:'acdefg',7:'abc',8:'abcdefg',9:'abcdfg'};
 const coords={a:[10,0,42,0],b:[48,7,48,40],c:[48,53,48,86],d:[10,93,42,93],e:[4,53,4,86],f:[4,7,4,40],g:[10,47,42,47]};
 let body=title('전자 숫자판 2026');
 [...'2026'].forEach((digit,i)=>{for(const [key,v] of Object.entries(coords)){const [x1,y1,x2,y2]=v;body+=`<path d="M${133+i*88+x1} ${63+y1}L${133+i*88+x2} ${63+y2}" stroke="${definitions[digit].includes(key)?ink:'#edf0f3'}" stroke-width="6" stroke-linecap="round"/>`;}});
 body+=note('각 숫자는 독립된 막대로 표시됩니다.',190);
 add('pattern-005','막대형 전자 숫자판으로 2026을 표시한 그림. 숫자 사이의 막대는 공유하지 않습니다.','켜진 막대만 검은색으로 표시했습니다.',211,body);
}
add('pattern-006','시작값 7에서 현재 수가 짝수면 2로 나누고 홀수면 3배 더하기 1. 변환을 8번 반복하는 두 갈래 도식.','시작값은 변환 횟수에 포함하지 않습니다.',218,
  title('7에서 시작 · 정확히 8번 변환')+rect(215,62,170,49)+text(300,93,'현재 수',21)+arrow(215,87,130,144)+arrow(385,87,470,144)+rect(40,147,180,48)+text(130,177,'짝수 → ÷ 2',20)+rect(380,147,180,48)+text(470,177,'홀수 → × 3 + 1',20));

// Crop unused canvas above and below the drawing; the surrounding card supplies padding.
const contentBottoms = {
  'math-001':199, 'math-002':220, 'math-003':195, 'math-004':181, 'math-005':169, 'math-006':327,
  'logic-001':118, 'logic-002':195, 'logic-003':197, 'logic-004':195, 'logic-005':153, 'logic-006':153,
  'reasoning-001':290, 'reasoning-002':196, 'reasoning-003':224, 'reasoning-004':271, 'reasoning-005':167, 'reasoning-006':247,
  'spatial-001':265, 'spatial-002':283, 'spatial-003':320, 'spatial-004':250, 'spatial-005':298, 'spatial-006':318,
  'pattern-001':116, 'pattern-002':116, 'pattern-003':170, 'pattern-004':192, 'pattern-005':195, 'pattern-006':197,
};
const contentTops = {
  'math-001':65, 'math-002':27, 'math-003':17, 'math-004':35, 'math-005':39, 'math-006':42,
  'logic-001':17, 'logic-002':17, 'logic-003':44, 'logic-004':17, 'logic-005':17, 'logic-006':17,
  'reasoning-001':17, 'reasoning-002':17, 'reasoning-003':26, 'reasoning-004':22, 'reasoning-005':25, 'reasoning-006':17,
  'spatial-001':89, 'spatial-002':25, 'spatial-003':35, 'spatial-004':29, 'spatial-005':36, 'spatial-006':55,
  'pattern-001':49, 'pattern-002':49, 'pattern-003':30, 'pattern-004':29, 'pattern-005':17, 'pattern-006':17,
};
for (const [id,bottom] of Object.entries(contentBottoms)) {
  drawings[id].y = contentTops[id];
  drawings[id].height = bottom - contentTops[id];
}

const context={};
vm.runInNewContext(fs.readFileSync(path.join(base,'data/content/thinking-tests.js'),'utf8')+';this.tests=THINKING_TESTS;',context);
for(const test of context.tests){
 const drawing=drawings[test.id]; if(!drawing) continue;
 const svg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 ${drawing.y || 0} 600 ${drawing.height}" role="img" aria-labelledby="title"><title id="title">${escape(drawing.alt)}</title><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0L10 5L0 10Z" fill="${ink}"/></marker></defs><g font-family="Pretendard, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif">${drawing.body}</g></svg>\n`;
 fs.writeFileSync(path.join(directory,test.id+'.svg'),svg);
 test.image='assets/diagrams/'+test.id+'.svg'; test.imageAlt=drawing.alt; test.imageCaption=drawing.caption;
}
fs.writeFileSync(path.join(base,'data/content/thinking-tests.js'),'"use strict";\n\n// Problem text, choices, answers and optional diagram metadata.\n// Verify answers: node tests/thinking.test.js\nconst THINKING_TESTS = '+JSON.stringify(context.tests,null,2)+';\n');
console.log(`Built ${Object.keys(drawings).length} SVG problem diagrams.`);
