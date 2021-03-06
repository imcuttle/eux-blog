---
title: "左手D3.右手设计"
author: "陈骁"
datetime: 2015-12-29 08:00:00
cover: "http://ww1.sinaimg.cn/large/633b942ejw1ezgk8s7vsvj20rs0gi7c7.jpg"
---

<img src="http://ww1.sinaimg.cn/large/633b942ejw1ezggye95joj214g0oiwp4.jpg" alt="" width="1456" height="882" />
  


<span class="s1">相信大多数设计师对d3.js有点陌生。这是一个由纽约时报可视化编辑Mike Bostock与他斯坦福的教授和同学合作开发的数据文件处理的JavaScript Library，全称叫做Data-Driven Documents。</span>  


<span class="s1">随着大数据时代的来临，大量的数据被储存，许多沉淀着的充满“秘密”的数据需要被挖掘，而这把撬动<b>“</b></span><span class="s2"><b>数据视界”的“铁锹”</b></span><span class="s1">就是D3.js。现在D3的应用非常广泛，</span><span class="s1">现在成为了主流数据可视化工具之一，下图仅仅是给出了D3.js广泛应用的冰山一角。</span>  


<img src="http://ww3.sinaimg.cn/large/633b942ejw1ezgh8knruhj20yj0k8te8.jpg" alt="" width="1243" height="728" />
  


<span class="s1">力导向图主要用来可视化“关系数据”，每个节点代表一个个体，有关系的节点会用直线连接起来。如果节点数量庞大，关系复杂，你用传统的设计方法，在概念草图阶段就会画晕了，因为你不能按照线性的方式一次画出所有不重叠的点和尽量不交叉的线。这时候就用到了d3.js，相较于传统的表格和树状图，除了保留了原来的表示父子关系的树杈结构，D3.js加入物理算法，用两点之间的作用力表示两者关系亲密度。</span>  


<img src="http://ww1.sinaimg.cn/large/633b942ejw1ezghbs79i6j20o10at0ur.jpg" alt="" width="865" height="389" />
  


<span class="s2">现在许多数据可视化设计者，被呈现大量数据的可能性迷惑了。</span><span class="s1">使得很多数据可视化作品</span><span class="s2">是“充满数据的豪猪” (The data rich porcupine)，</span><span class="s1">作出了很多华而不实的图表，太多复杂的数据和酷炫的效果让用户和受众无法理解，这偏离了数据可视化的初衷，</span><span class="s2">而</span><span class="s1">好的数据可视化应该</span><span class="s2">是“精简的斑马”(The Edited Zebra)。避免被技术引诱的最好方式是精简，精简不是简化，而是清晰化，</span><span class="s1">清晰化的趋势表达，或者数据显示</span><span class="s2">。</span><span class="s1">例如：假设你是一位企业主，你的业务有全球影响力。你想要比较你的公司在不同国家的市场份额，数据可视化就是要使解读数据更加简单而不是困难。但是，左图表使</span><span class="s1">得读者很难去比较。</span>  


<img src="http://ww4.sinaimg.cn/large/633b942ejw1ezghgarf8rj20wh0l5dit.jpg" alt="" width="1169" height="761" />
<img src="http://ww4.sinaimg.cn/large/633b942ejw1ezghh9jr88j20n50smadk.jpg" alt="" width="833" height="1030" />
  


<span class="s1">而且数据可视化的优势是大数据处理和大数据趋势分析。对于太精确的数据表现，并不是优势。D3.js除了拥有处理大数据的复杂图表类似弦图，树状图，气泡图，地图等。还有基础图表类似柱状图，饼状图，折线图，面积图等等。它是数据可视化里的多面</span><span class="s1">手，是可视化设计的不二之选。</span>  


 <img src="http://ww3.sinaimg.cn/large/633b942ejw1ezghrilak7j210x0p3425.jpg" alt="" width="1329" height="903" />
       <img src="http://ww2.sinaimg.cn/large/633b942ejw1ezghso7sqlj211w0niq85.jpg" alt="" width="1364" height="846" />
  

<img src="http://ww2.sinaimg.cn/large/633b942ejw1ezghvfpcm2j210z0k1wh8.jpg" alt="" width="1331" height="721" />
<img src="http://ww4.sinaimg.cn/large/633b942ejw1ezgi0pt9epj21bl0pujto.jpg" alt="" width="1713" height="930" />
  


<span class="s1">D3.js给了我们处理数据的“</span><span class="s2"><b>画笔</b></span><span class="s1">”,如何正确的选择合适图表表现数据，合理使用D3里的各个维度完成可视化设计,成了我们设计师的关键。下面我们就来看看D3.js里的元素可以有以下这<b>7种维度</b>。</span>  


<img src="http://ww4.sinaimg.cn/large/633b942ejw1ezgi309w5ij21kw0jwwgo.jpg" alt="" width="2048" height="717" />
  


<span class="s1">但是人能同时处理的数据维度有限最好同时出现的维度</span><span class="s1">控制在<b>5个以下</b>。</span><span class="s1">在使用D3.js设计的时候同时还要注意以下几点:</span>  


<span class="s1">1.颜色大小分布合理</span>  


<span class="s1">将面积较大的部分从上到下，颜色顺时针分布，不要颜色有跳跃，和混乱分布。</span>  


<img src="http://ww4.sinaimg.cn/large/633b942ejw1ezgi4zvhmpj20o108ft91.jpg" alt="" width="865" height="303" />
  


<span class="s1">2.</span><span class="s2">数据缺少标注</span>  


<span class="s1">确保任何呈现都是准确的，比如</span><span class="s2">没有</span><span class="s1">标注，</span><span class="s2">或者胡乱标注。</span>  


<img src="http://ww1.sinaimg.cn/large/633b942ejw1ezgi6vocwsj20o108faa6.jpg" alt="" width="865" height="303" />
  


<span class="s1">3.数据显示不清楚</span>  


<span class="s1">确保数据不会因为设计而丢失或被覆盖。例如在面积图中使用透明效果来确保用户可</span><span class="s1">以看到全部数据。</span>  


<img src="http://ww3.sinaimg.cn/large/633b942ejw1ezgi8gru9yj20o108fwem.jpg" alt="" width="865" height="303" />
  


<span class="s1">4.在热图中使用不同颜色</span>  


<span class="s1">一些颜色比其他颜色突出，赋予了数据不必要的重元素。反而应该使用单一颜色，然</span><span class="s1">后通过颜色的深浅来表达。</span>  


<img src="http://ww2.sinaimg.cn/large/633b942ejw1ezgi9wcto4j20o108fq36.jpg" alt="" width="865" height="303" />
  


<span class="s1">5.在x，y轴中带有数字量级大时，采用简写单位，而且数据应该等比例变化。</span>  


<img src="http://ww2.sinaimg.cn/large/633b942ejw1ezgk4v7p0qj21970fxmy1.jpg" alt="" width="1627" height="573" />
  


<span class="s1">6.在使用D3气泡图时尽量让同样颜色气泡聚集在一起而不是散乱分布，这样更容易看出趋势。</span>  


<img src="http://ww4.sinaimg.cn/large/633b942ejw1ezgk6vy307j215x0es3zf.jpg" alt="" width="1509" height="532" />
  


<span class="s1">7.在使用D3力导图尽量不让子级太靠近，会导致文字重叠显示不清。</span>  


<img src="http://ww1.sinaimg.cn/large/633b942ejw1ezgk7uusfoj214a0e70tf.jpg" alt="" width="1450" height="511" />