w=W[new Date%W.length],g=7,i.onkeyup=n=>{if(13==n.which&&W.includes(v=i.value)&&--g>0){for(l in f=[0,0,0,0,0],c=[...w],v)w[l]==v[l]&&(f[l]=595,c[l]="");for(l in v)!f[l]&&~(x=c.indexOf(v[l]))&&(f[l]=985,c[x]="");for(l in v)p.innerHTML+=`<tt style='background:#${f[l]}'>&nbsp;${v[l]} </tt>&nbsp;`;p.innerHTML+="<p>",i.value=f.every((l=>595==l))?":)":1==g?":(":""}}

w=W[new Date%W.length],g=7,i.onkeyup=e=>{if(13==e.which&&W.includes(v=i.value)&&--g>0){for(l in f=[0,0,0,0,0],c=[...w],v)w[l]==v[l]?(f[l]=595,c[l]=0):~(x=c.indexOf(v[l]))&&c[x]!=v[x]&&(f[l]=985,c[x]=0),p.innerHTML+=`<tt style='background:#${f[l]}'>&nbsp;${v[l]} </tt>&nbsp;`+(l>3?"<p>":"");i.value=f.every((l=>595==l))?":)":1==g?":(":""}}

w=W[new Date%W.length],g=6,i.onkeyup=e=>{if(13==e.which&&W.includes(v=i.value)&&g){for(o=[],s=[...w],j=[...v],e=5;e--;j[e]==s[e]&&(s[e]=j[e]=o[e]="🟩"))o[e]="⬛";for(e=5;e--;~q&&"🟩"!=s[q]&&(s[q]=j[q]=o[q]="🟨"))q=j.indexOf(s[e]);p.innerHTML+="<p>"+--g+o+v,i.value=v==w?":)":g?"":":("}}

w=W[new Date%W.length],g=6,i.onkeyup=e=>{if(e.which<14&&W.includes(v=i.value)&&g){for(o=[],s=[...w],j=[...v],e=5;e--;j[e]==s[e]&&(s[e]=j[e]=o[e]="🟩"))o[e]="⬛";for(e=5;e--;~q&&"🟩"!=s[q]&&(s[q]=j[q]=o[q]="🟨"))q=j.indexOf(s[e]);p.innerHTML+="<p>"+--g+o+v,i.value=v==w?":)":g?"":":("}}

w=W[new Date%W.length],g=6,i.onkeyup=e=>{if(e.which<14&&W.includes(v=i.value)&&g){for(o=[],s=[...w],j=[...v],e=5;e--;j[e]==s[e]&&(s[e]=j[e]=o[e]="🟩"))o[e]="⬛";for(e=5;e--;~q&&"🟩"!=s[q]&&(s[q]=j[q]=o[q]="🟨"))q=j.indexOf(s[e]);p.innerHTML+="<p>"+o+v,i.value=v==w?":)":--g?"":":("}}

w=W[new Date%W.length],g=6,i.onkeyup=e=>{if(13==e.which&&W.includes(v=i.value)&&g){for(o=[],s=[...w],j=[...v],e=5;e--;j[e]==s[e]&&(s[e]=o[j[e]=e]="🟩"))o[e]="⬛";for(e=5;e--;~q&&(s[q]=j[q]=o[q]="🟨"))q=j.indexOf(s[e]);p.innerHTML+="<p>"+o+v,i.value=v==w?":)":--g?"":":("}}

w=W[new Date%W.length],g=6,i.onkeyup=e=>{if(13==e.which&&W.includes(v=i.value)&&g){for(o=[],s=[...w],j=[...v],e=5;e--;)o[e]=j[e]==s[e]?s[j[e]=e]="🟩":"⬛";for(e=5;e--;~q&&(s[q]=j[q]=o[q]="🟨"))q=j.indexOf(s[e]);p.innerHTML+="<p>"+o+v,i.value=v==w?":)":--g?"":":("}}

w=W[new Date%W.length],g=6,i.onkeyup=e=>{if(13==e.which&&W.includes(v=i.value)){for(l in Z=[...w],v)p.innerHTML+=(l<1?"<br>"+v:"")+(v[l]==w[l]?"🟩":~(x=w.indexOf(v[l]))&&v[x]!=w[x]&&1!=Z[x]&&(Z[x]=1)?"🟨":"⬛");i.value=v==w?":)":--g?"":":("}}

w=W[new Date%W.length],g=6,i.onkeyup=e=>{13==e.which&&W.includes(v=i.value)&&(Z=[...w],p.innerHTML+="<p>"+[...v].map(((e,i)=>[..."⬛🟨🟩"][(Z[i]!=e&&(x=Z.indexOf(e))>=0&&Z[x]!=v[x]&&(Z[x]=1))+2*(e==w[i])]))+v,i.value=v==w?":)":--g?"":":(")}

w=W[new Date%W.length],g=6,i.onkeyup=e=>{13==e.which&&W.includes(v=i.value)&&(Z=[...w],p.innerHTML+="<p>"+[...v].map(((e,i)=>[..."⬛🟨🟩"][((z=Z[i]!=e)&&+~(x=Z.indexOf(e))&&Z[x]!=v[x]&&(Z[x]=1))+2*!z]))+v,i.value=v==w?":)":--g?"":":(")}

w=W[new Date%W.length],g=6,i.onkeyup=e=>{13==e.which&&W.includes(v=i.value)&&(Z=[...w],p.innerHTML+="<p>"+[...v].map((e,n)=>[..."⬛🟨🟩"][((z=Z[n]!=e)&&~(x=Z.indexOf(e))&&Z[x]!=v[x]&&(Z[x]=1))+2*!z])+v,i.value=v!=w&&--g?"":w)}

w=W[new Date%W.length],g=6,i.onkeyup=n=>{13==n.which&&W.includes(v=i.value)&&(Z=[...w],p.innerHTML+="<p>"+[...v].map((n,e)=>[..."⬛🟨🟩"][Z[e]==n?2:~(x=Z.indexOf(n))&&Z[x]!=v[x]&&(Z[x]=1)])+v,i.value=v!=w&&--g?"":w)}
