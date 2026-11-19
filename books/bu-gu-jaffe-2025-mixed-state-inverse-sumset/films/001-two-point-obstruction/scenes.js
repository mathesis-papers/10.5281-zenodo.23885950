'use strict';
// All panels derive from the two-point law in manuscript Theorem 1.
// The only Lean badge is attached to the public universal negation in scope.
function filmHeading(en, zh, a) {
  txt(en, 150, 205, {size:42, fam:F.disp, w:700, c:C.white, a});
  txt(zh, 150, 255, {size:30, fam:F.zh, c:C.cyan, a});
}
function filmBars(prob, x, y, width, height, a, col) {
  const step=width/prob.length;
  line(x,y,x+width,y,C.dim,a,2);
  prob.forEach((p,i)=>{
    const barH=height*p;
    if(p>0) fillBox(x+i*step+step*.2,y-barH,step*.6,barH,col,a*.65);
    txt(String(i),x+(i+.5)*step,y+35,{size:26,fam:F.math,align:'center',a,c:C.white});
    if(p>0) txt(p===.5?'1/2':p===.25?'1/4':'1/7',x+(i+.5)*step,y-barH-18,{size:26,fam:F.math,align:'center',a,c:col});
  });
}
SCENES.question = S => {
  const a=clamp(S.u/.8);
  badgeQ(S,[[0,null,'argued']]);
  filmHeading('SMALL GROWTH: HOW MUCH STRUCTURE?', '增长得少，就一定接近结构吗？', a);
  panel(150,320,720,415,a,C.cyan,'INPUT');
  filmBars([.5,.5,0,0,0,0,0],195,650,620,420,a,C.cyan);
  arrow(910,525,1030,525,C.cyan,a,4);
  panel(1080,320,660,415,a,C.mag,'AFTER COMBINING TWO COPIES');
  filmBars([.25,0,.5,0,.25,0,0],1120,650,580,420,at(S,1,.9),C.mag);
  txt('A two-point law inside seven positions',960,805,{size:32,fam:F.disp,align:'center',c:C.white,a:at(S,2,.7)});
};
SCENES.pairs = S => {
  const a=clamp(S.u/.7);
  badgeQ(S,[[0,null,'computed']]);
  filmHeading('FOUR INPUTS, THREE OUTPUTS','四种输入，三个输出',a);
  const inputs=['(0,0)','(0,1)','(1,0)','(1,1)'];
  inputs.forEach((p,k)=>{
    const x=320+k*420;
    chip(x,370,270,80,p,C.cyan,a,38,F.math);
    txt('1/4',x,448,{size:30,fam:F.math,align:'center',a,c:C.cyan});
    const targets=[440,960,960,1480];
    arrow(x,478,targets[k],585,C.mag,at(S,1,.7),3);
  });
  ['0','2','4'].forEach((s,k)=>{
    const x=440+k*520;
    chip(x,650,250,84,s,C.mag,at(S,1,.7),44,F.math);
    txt(k===1?'1/2':'1/4',x,745,{size:40,fam:F.math,align:'center',a:at(S,2,.6),c:C.mag});
  });
  txt('2I + 2J  (mod 7)',960,805,{size:36,fam:F.math,align:'center',a,c:C.white});
};
SCENES.entropy = S => {
  const a=clamp(S.u/.7);
  badgeQ(S,[[0,null,'argued']]);
  filmHeading('THE EXTRA UNCERTAINTY','增长了多少不确定性？',a);
  panel(150,330,730,380,a,C.cyan,'INPUT ENTROPY');
  txt('S = ln 2',515,475,{size:64,fam:F.math,align:'center',a,c:C.white});
  txt('two equally likely outcomes',515,590,{size:30,fam:F.disp,align:'center',a,c:C.cyan});
  panel(1040,330,730,380,at(S,1,.7),C.mag,'OUTPUT ENTROPY');
  const c=at(S,1,.7);
  txt('1/2 ln 2 + 1/2 ln 2 + 1/2 ln 2',1405,458,{size:32,fam:F.math,align:'center',a:c,c:C.mag});
  txt('S = 3/2 ln 2',1405,570,{size:58,fam:F.math,align:'center',a:c,c:C.white});
  txt('δ = exp(1/2 ln 2) = √2 > 1',960,800,{size:48,fam:F.math,align:'center',a:at(S,2,.8),c:C.white});
};
SCENES.mean = S => {
  const a=clamp(S.u/.7),b=at(S,1,1),c=at(S,2,1);
  badgeQ(S,[[0,null,'argued']]);
  filmHeading('KEEP ONLY PERFECT CONSTRAINTS','均值态只保留完全确定的约束',a);
  panel(150,320,730,430,a,C.cyan,'TWO UNIT ARROWS, p = 1');
  const cx=515,cy=520,r=125,ang=2*Math.PI/7;
  ring(cx,cy,r,C.dim,b,2);
  arrow(cx,cy,cx+r,cy,C.cyan,b,4);
  arrow(cx,cy,cx+r*Math.cos(ang),cy+r*Math.sin(ang),C.cyan,b,4);
  arrow(cx,cy,cx+r*(1+Math.cos(ang))/2,cy+r*Math.sin(ang)/2,C.mag,b,6);
  txt('|(1 + ω⁻¹)/2| < 1',515,710,{size:36,fam:F.math,align:'center',a:b,c:C.mag});
  panel(1040,320,730,430,c,C.mag,'MEAN STATE: UNIFORM');
  filmBars(Array(7).fill(1/7),1080,630,650,650,c,C.mag);
  txt('M(ρ) = I₇ / 7',1405,725,{size:42,fam:F.math,align:'center',a:c,c:C.white});
  txt('D(ρ ∥ M(ρ)) = ln(7/2)',960,815,{size:46,fam:F.math,align:'center',a:c,c:C.white});
};
SCENES.contradiction = S => {
  const a=clamp(S.u/.7),b=at(S,1,.8),c=at(S,2,.8);
  badgeQ(S,[[0,null,'argued']]);
  filmHeading('A POSITIVE DENOMINATOR, A FAILED BOUND','分母为正，上界仍然失败',a);
  panel(150,315,1620,210,a,C.cyan,'FOR EVERY 0 ≤ ℓ ≤ 1');
  txt('1 ≤ 1 + 5ℓ/2 ≤ 7/2',960,410,{size:48,fam:F.math,align:'center',a,c:C.white});
  txt('B = ln 7 − ln(1 + 5ℓ/2) ≥ ln 2 > 0',960,485,{size:40,fam:F.math,align:'center',a:b,c:C.cyan});
  panel(150,570,720,200,b,C.mag,'PROPOSED RHS AT C = √2');
  txt('RHS ≤ 1/2 ln 7',510,690,{size:49,fam:F.math,align:'center',a:b,c:C.mag});
  panel(1050,570,720,200,c,C.argued,'ACTUAL DISCREPANCY');
  txt('D = ln(7/2)',1410,690,{size:54,fam:F.math,align:'center',a:c,c:C.white});
  txt('<',960,690,{size:80,fam:F.math,align:'center',a:c,c:C.white});
  txt('The strict comparison is exactly 7 > 4',960,825,{size:38,fam:F.disp,align:'center',a:c,c:C.white});
};
SCENES.copies = S => {
  const a=clamp(S.u/.7),b=at(S,1,.8);
  badgeQ(S,[[0,null,'argued']]);
  filmHeading('THE SAME OBSTRUCTION IN EVERY TENSOR POWER','每个正整数份独立副本都保留矛盾',a);
  [0,1,2].forEach(k=>{
    panel(210+k*520,335,460,180,a,C.cyan,'INDEPENDENT COPY '+(k+1));
    txt('ρ',440+k*520,460,{size:75,fam:F.math,align:'center',a,c:C.white});
    if(k<2) txt('⊗',700+k*520,455,{size:52,fam:F.math,align:'center',a,c:C.mag});
  });
  txt('ρₙ = ρ ⊗ ··· ⊗ ρ       n ≥ 1',960,590,{size:46,fam:F.math,align:'center',a,c:C.white});
  txt('Dₙ = n ln(7/2)',960,690,{size:56,fam:F.math,align:'center',a:b,c:C.white});
  txt('RHS ≤ n/2 ln 7 < Dₙ',960,790,{size:54,fam:F.math,align:'center',a:b,c:C.mag});
};
SCENES.weaker = S => {
  const a=clamp(S.u/.7),b=at(S,1,.8),c=at(S,2,.8);
  badgeQ(S,[[0,null,'argued']]);
  filmHeading('EQUATION (59) SURVIVES FOR THIS FAMILY','较弱估计对本族严格成立',a);
  panel(150,330,1620,210,a,C.cyan,'ACTUAL FACTOR λ = cos²(π/7)');
  txt('Eₙ = −ln[λ + (1−λ)(2/7)ⁿ]',960,435,{size:48,fam:F.math,align:'center',a,c:C.white});
  txt('0 < Eₙ < 1/2 ln 2',960,510,{size:40,fam:F.math,align:'center',a,c:C.cyan});
  txt('ln C ≥ n/2 ln 2 ≥ 1/2 ln 2 > Eₙ',960,635,{size:44,fam:F.math,align:'center',a:b,c:C.white});
  txt('(Dₙ / Eₙ) ln C > Dₙ',960,735,{size:58,fam:F.math,align:'center',a:b,c:C.mag});
  txt('Strict even at C = 2ⁿᐟ²; statement restricted to this family',960,815,{size:30,fam:F.disp,align:'center',a:c,c:C.white});
};
SCENES.scope = S => {
  const a=clamp(S.u/.7),b=at(S,1,.8),c=at(S,2,.8);
  badgeQ(S,[[0,'public Lean theorem','lean'],[1,'complete written arguments','argued'],[2,null,'argued']]);
  filmHeading('THE RESULT AND ITS PRECISE SCOPE','结论与准确的适用范围',a);
  panel(150,330,1620,155,a,C.lean,'PUBLIC FORMAL THEOREM');
  txt('The universal single-system estimate (58) is false.',960,425,{size:40,fam:F.disp,align:'center',a,c:C.white});
  panel(150,535,1620,155,b,C.argued,'WRITTEN ARGUMENTS AND FOCUSED REQUESTS');
  txt('Explicit witness · every tensor power · strict (59) for this family',960,630,{size:33,fam:F.disp,align:'center',a:b,c:C.white});
  txt('Pure-state Theorem 44 remains intact.',960,765,{size:38,fam:F.disp,align:'center',a:c,c:C.white});
  txt('Haobo Ma · Wenlin Zhang | v2 | DOI: 10.5281/zenodo.23885951',960,825,{size:26,fam:F.disp,align:'center',a:c,c:C.cyan});
};
FILM.poster = () => {
  filmHeading('TWO POINTS AMONG SEVEN','七个位置上的两点反例',1);
  panel(150,325,720,360,1,C.cyan,'INPUT: TWO EQUALLY LIKELY OUTCOMES');
  filmBars([.5,.5,0,0,0,0,0],190,620,640,420,1,C.cyan);
  panel(1050,325,720,360,1,C.mag,'OUTPUT: TWO MIDDLE EVENTS MERGE');
  filmBars([.25,0,.5,0,.25,0,0],1090,620,640,420,1,C.mag);
  arrow(910,510,1010,510,C.cyan,1,4);
  txt('ln(7/2) > 1/2 ln 7',960,790,{size:68,fam:F.math,align:'center',c:C.white});
  txt('An exact obstruction to mixed-state estimate (58)',960,855,{size:34,fam:F.disp,align:'center',c:C.cyan});
};
