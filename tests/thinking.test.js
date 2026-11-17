// Independent calculations and exhaustive finite-model checks for all 30 problems.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const context = {};
vm.runInNewContext(fs.readFileSync('data/content/thinking-tests.js', 'utf8') + ';this.tests=THINKING_TESTS;', context);
const tests = JSON.parse(JSON.stringify(context.tests));
const categories = ['수리', '논리', '추리', '공간지각', '규칙찾기'];
assert.ok(tests.length >= 30);
assert.equal(new Set(tests.map(t => t.id)).size, tests.length);
assert.equal(new Set(tests.map(t => t.title)).size, tests.length);
assert.equal(new Set(tests.map(t => t.question)).size, tests.length);
for (const c of categories) assert.ok(tests.filter(t => t.category === c).length >= 6, c);
for (const t of tests) {
  assert.ok(categories.includes(t.category));
  assert.ok(Number.isInteger(t.difficulty) && t.difficulty >= 1 && t.difficulty <= 5);
  assert.equal(t.choices.length, 4, t.id);
  assert.equal(new Set(t.choices).size, 4, t.id);
  assert.ok(Number.isInteger(t.answer) && t.answer >= 0 && t.answer < 4);
  assert.ok(t.question && t.explanation);
}
const checked = new Set();
const check = (id, expected) => {
  const t = tests.find(t => t.id === id);
  assert.ok(t, id);
  const matches = t.choices.map((c,i) => c === expected ? i : -1).filter(i => i >= 0);
  assert.equal(matches.length, 1, `${id}: expected exactly one choice matching ${expected}`);
  assert.equal(t.answer, matches[0], `${id}: incorrect answer`);
  checked.add(id);
};
const single = values => { assert.equal(values.length, 1, JSON.stringify(values)); return values[0]; };
const range = (start, end) => Array.from({length:end-start+1}, (_,i) => start+i);
const permutations = items => items.length ? items.flatMap((v,i) => permutations(items.filter((_,j) => j!==i)).map(p=>[v,...p])) : [[]];
const states = n => range(0,2**n-1).map(mask => range(0,n-1).map(i => Boolean(mask & (1<<i))));

// Mass balance in integer units, then independently check every offered amount.
const mix = tests.find(t=>t.id==='math-001');
const validMix = mix.choices.filter(c => { const x=parseInt(c); return 10*300+25*x === 16*(300+x); });
check('math-001', single(validMix));
const remainingHours = (1 - 2*(1/6+1/9))*6;
check('math-002', `${Math.floor(remainingHours)}시간 ${Math.round((remainingHours%1)*60)}분`);
const dice=range(1,6).flatMap(a=>range(1,6).map(b=>[a,b])).filter(([a,b])=>a===6||b===6);
check('math-003', `${dice.filter(([a,b])=>a+b===9).length}/${dice.length}`);
check('math-004', String(single(range(100,150).filter(n=>n%7===3&&n%9===5))));
check('math-005', `${(88000/0.8/1.1).toLocaleString('en-US',{maximumFractionDigits:0})}원`);
let paths=0;
function walk(x,y) {
  if (x>4||y>3||(x===2&&y===1)) return;
  if (x===4&&y===3) { paths++; return; }
  walk(x+1,y); walk(x,y+1);
}
walk(0,0); check('math-006', `${paths}개`);

// Evaluate every possible key location and every permutation of the queue.
check('logic-001', single(['A','B','C','D'].filter(key => [key==='B',key!=='B',key!=='A'].filter(Boolean).length===1))+' 상자');
const line=single(permutations(['A','B','C','D']).filter(p=>p.indexOf('B')===p.indexOf('A')+1&&![0,3].includes(p.indexOf('C'))&&p.indexOf('D')<p.indexOf('C')));
check('logic-002', line.join(' → '));
// All possible populations made from person types satisfying the two premises.
const people=states(3).filter(([lab,trained,red])=>(!lab||trained)&&(!trained||!red));
const populations=states(people.length).map(included=>people.filter((_,i)=>included[i]));
const conclusions=[
  p=>p.every(([lab,trained])=>!trained||lab),
  p=>p.every(([lab,,red])=>!red||!lab),
  p=>p.some(([lab,,red])=>lab&&red),
  p=>p.every(([lab,,red])=>lab||red)
];
const necessary=conclusions.map(f=>populations.every(f));
assert.equal(necessary.filter(Boolean).length,1);
check('logic-003', ['안전교육을 받은 사람은 모두 연구실 구성원이다.','빨간 출입증을 가진 사람은 연구실 구성원이 아니다.','연구실 구성원 중 빨간 출입증을 가진 사람이 있다.','연구실 구성원이 아닌 사람은 모두 빨간 출입증을 가졌다.'][necessary.indexOf(true)]);
const projects=single(states(4).filter(s=>s.filter(Boolean).length===2).filter(([a,b,c,d])=>(!a||b)&&(!c||!b)&&(!d||a)));
check('logic-004', ['A','B','C','D'].filter((_,i)=>projects[i]).join('와 '));
// Enumerate the possible hidden side of each visible card.
const cards=[['A',true,'letter'],['D',false,'letter'],['4',true,'number'],['7',false,'number']];
const mustFlip=cards.filter(([,value,type])=>[true,false].some(hidden=>type==='letter' ? value&&!hidden : hidden&&!value)).map(([v])=>v);
check('logic-005', mustFlip.join('와 '));
const switches=states(3).filter(([p,q,r])=>p!==q&&(!p||r)&&(!r||q));
const switchClaims=[s=>s[0],s=>s[2],s=>s[1],s=>!s[2]];
const required=switchClaims.map(f=>switches.every(f)); assert.equal(required.filter(Boolean).length,1);
check('logic-006', ['P는 켜져 있다.','R는 켜져 있다.','Q는 켜져 있다.','R는 꺼져 있다.'][required.indexOf(true)]);

const records=[['A',17*60+30,18*60+5],['B',18*60+10,18*60+30],['C',17*60+50,18*60+20],['D',17*60,17*60+40]];
check('reasoning-001', single(records.filter(([,start,end])=>start<=18*60+8&&18*60+8<end))[0]);
const boxes=single(permutations(['사과','배','혼합']).filter(p=>p.every((v,i)=>v!==['사과','배','혼합'][i])&&p[2]==='사과'));
check('reasoning-002', boxes[0]==='배'?'배만 들어 있다.':boxes[0]==='사과'?'사과만 들어 있다.':'사과와 배가 섞여 있다.');
const times=[9*60+18-4,9*60+10+3,9*60+16-1,9*60+12];
check('reasoning-003', ['A','B','C','D'][times.indexOf(Math.min(...times))]+' 사건');
const clues=[['682',1,1],['614',1,0],['206',2,0],['738',0,0],['780',1,0]];
const codes=[];
for(const a of range(0,9)) for(const b of range(0,9)) for(const c of range(0,9)) {
  if(new Set([a,b,c]).size!==3) continue;
  const code=''+a+b+c;
  if(clues.every(([guess,total,right])=>[...guess].filter(d=>code.includes(d)).length===total&&[...guess].filter((d,i)=>code[i]===d).length===right)) codes.push(code);
}
check('reasoning-004', single(codes));
check('reasoning-005', ['A','B','C','D'][single([12,18,20,30].map((n,i)=>54%n===0?i:-1).filter(i=>i>=0))]+' 작업');
const fake=single(range(0,8).filter(light=>{
  const weight=i=>i===light?9:10;
  return [0,1,2].reduce((s,i)=>s+weight(i),0)<[3,4,5].reduce((s,i)=>s+weight(i),0)&&weight(0)===weight(1);
}));
check('reasoning-006', 'ABCDEFGHI'[fake]);

const directions=[[0,1],[1,0],[0,-1],[-1,0]];
let facing=0, x=0, y=0;
for(const [turn,steps] of [[1,3],[-1,2],[-1,5]]) { facing=(facing+turn+4)%4; x+=directions[facing][0]*steps; y+=directions[facing][1]*steps; }
check('spatial-001', (y>0?'북':'남')+(x>0?'동':'서')+'쪽');
let cube={top:1,bottom:6,front:2,back:5,right:3,left:4};
cube={...cube,top:cube.back,front:cube.top,bottom:cube.front,back:cube.bottom};
cube={...cube,top:cube.left,right:cube.top,bottom:cube.right,left:cube.bottom};
check('spatial-002', String(cube.top));
const holes=[];
for(const a of range(0,8)) for(const b of range(0,8)) if((a<4?8-a:a)===6&&(b<4?8-b:b)===7) holes.push(`(${a},${b})`);
const paper=tests.find(t=>t.id==='spatial-003'); check(paper.id, single(paper.choices.filter(c=>!holes.includes(c))));
// Rotate around the center in Cartesian coordinates, then convert back to rows.
const row=2,col=3, cartX=col-2,cartY=2-row;
const rotatedX=cartY, rotatedY=-cartX;
check('spatial-004', `${2-rotatedY}행 ${rotatedX+2}열`);
const reflected=[-2,-1]; const rotated=[reflected[1],-reflected[0]];
check('spatial-005', `(${rotated[0]},${rotated[1]})`.replaceAll('-', '−'));
let painted=0;
for(const a of range(0,3)) for(const b of range(0,3)) for(const c of range(0,3)) if([a,b,c].filter(n=>n===0||n===3).length===2) painted++;
check('spatial-006', `${painted}개`);

let letter=1; for(const jump of [2,3,4,5,6]) letter+=jump;
check('pattern-001', String.fromCharCode(64+letter));
let char=2,value=3; for(let i=0;i<4;i++){char+=2;value*=2;}
check('pattern-002', String.fromCharCode(64+char)+value);
check('pattern-003', `${range(1,40).filter(n=>n%3===0||String(n).includes('3')).length}번`);
let text='A'; for(let i=0;i<6;i++) text=[...text].map(c=>c==='A'?'AB':'A').join('');
check('pattern-004', `${[...text].filter(c=>c==='B').length}개`);
const segments=[6,2,5,5,4,5,6,3,7,6];
check('pattern-005', `${[...'2026'].reduce((sum,n)=>sum+segments[Number(n)],0)}개`);
let number=7; for(let i=0;i<8;i++) number=number%2===0?number/2:3*number+1;
check('pattern-006', String(number));
assert.equal(checked.size, tests.length, 'Every published problem needs an independent solution');
console.log(`PASS: ${tests.length} independently solved problems, unique answers, 5 categories × 6, four choices each`);
console.log('Difficulty distribution:', JSON.stringify(tests.reduce((counts,t)=>(counts[t.difficulty]=(counts[t.difficulty]||0)+1,counts),{})));
