const test = document.querySelector("body");

const html =
  '<h2><span style="color: #ff6600;">지난 2~3년간 VC업계는</span></h2>\r\n' +
  '<h2><span style="color: #ff6600;">역대 최고의 호황을</span></h2>\r\n' +
  '<h2><span style="color: #ff6600;">누렸다고 해도 과언이 아닌데요.</span></h2>\r\n' +
  "<p>&nbsp;</p>\r\n" +
  "<p><strong>(1) 정부가 스타트업 육성을 목적으로</strong></p>\r\n" +
  "<p><strong>역대 최고의 벤처투자금을 조성했고</strong></p>\r\n" +
  "<p>&nbsp;</p>\r\n" +
  "<p><strong>(2) 여기에 사모펀드, 외국계 투자사,</strong></p>\r\n" +
  "<p><strong>자산가, 대기업이 가세했으며</strong></p>\r\n" +
  "<p>&nbsp;</p>\r\n" +
  "<p><strong>(3) 코로나 사태에 힘입어</strong></p>\r\n" +
  "<p><strong>유동성이 폭발적으로 늘었기 때문입니다.</strong></p>\r\n" +
  "<p>&nbsp;</p>\r\n" +
  "\r\n" +
  '[caption id="attachment_717072" align="alignnone" width="600"]<img class="size-medium wp-image-717072" src="https://wp.outstanding.kr/wp-content/uploads/2022/06/shutterstock_1892702830-600x338.jpg" alt="" width="600" height="338"  srcset="https://cdn.outstanding.kr/wp-content/uploads/2022/06/shutterstock_1892702830-300x169.jpg 300w,https://cdn.outstanding.kr/wp-content/uploads/2022/06/shutterstock_1892702830-600x338.jpg 600w,https://cdn.outstanding.kr/wp-content/uploads/2022/06/shutterstock_1892702830-900x507.jpg 900w,https://cdn.outstanding.kr/wp-content/uploads/2022/06/shutterstock_1892702830-e1655890602305.jpg 800w" sizes="(max-width: 800px) 100vw, 800px"/> (출처=셔터스톡)[/caption]\r\n' +
  "\r\n" +
  "<p>&nbsp;</p>\r\n" +
  "<p><strong>자연스럽게 벤처기업의 기업가치가</strong></p>\r\n" +
  "<p><strong>천정부지로 오른 가운데</strong></p>\r\n" +
  "<p><strong>대규모 M&amp;A와 IPO 사례까지 나왔는데요.</strong></p>\r\n" +
  "<p>&nbsp;</p>\r\n" +
  "<p>이러한 상황에서 국내 VC들은</p>\r\n" +
  "<p>영리하게 펀드운용을 넘어</p>\r\n" +
  "<p>자체 자금을 통해 직접 투자에 나섬으로써</p>\r\n" +
  "<p>더 많은 수익을 창출하고자 했습니다.</p>\r\n" +
  "<p>&nbsp;</p>\r\n" +
  "<p><strong>IFRS 기준상 직접 투자액은</strong></p>\r\n" +
  "<p><strong>실제 처분을 하지 않더라도</strong></p>\r\n" +
  "<p><strong>평가차익을 계산해 매출로 집계합니다. </strong></p>\r\n" +
  "<p>&nbsp;</p>\r\n" +
  "<p>이 모든 것은 주요 VC회사들의</p>\r\n" +
  "<p>외형성장과 수익증대로 이어졌죠.</p>\r\n" +
  "<p>&nbsp;</p>\r\n" +
  "<p>그렇다면 지난해 이들의 성적표는 어떨까. </p>\r\n" +
  "<p>&nbsp;</p>\r\n" +
  "<p><strong>전자공시와 감사보고서를 기반으로</strong></p>\r\n" +
  "<p><strong>최상위 20개 회사를 선정해</strong></p>\r\n" +
  "<p><strong>매출순위를 내볼까 하는데요.</strong></p>\r\n" +
  "<p>&nbsp;</p>\r\n" +
  "<p>하나하나 나열해보겠습니다.</p>\r\n" +
  "<p>&nbsp;</p>\r\n" +
  "\r\n" +
  '[caption id="attachment_717067" align="alignnone" width="800"]<img class="wp-image-717067 size-full" src="https://wp.outstanding.kr/wp-content/uploads/2022/06/참3-3-e1655890523426.png" alt="" width="800" height="663"  srcset="https://cdn.outstanding.kr/wp-content/uploads/2022/06/참3-3-241x200.png 241w,https://cdn.outstanding.kr/wp-content/uploads/2022/06/참3-3-600x497.png 600w,https://cdn.outstanding.kr/wp-content/uploads/2022/06/참3-3-900x746.png 900w,https://cdn.outstanding.kr/wp-content/uploads/2022/06/참3-3-1200x995.png 1200w,https://cdn.outstanding.kr/wp-content/uploads/2022/06/참3-3-1080x895.png 1080w,https://cdn.outstanding.kr/wp-content/uploads/2022/06/참3-3-e1655890523426.png 800w" sizes="(max-width: 800px) 100vw, 800px"/> (출처=각 사)[/caption]\r\n' +
  "\r\n" +
  "<p>&nbsp;</p>\r\n" +
  '<h2><span style="color: #ff6600;">1. 본엔젤스벤처파트너스</span></h2>\r\n' +
  '<h2><span style="color: #ff6600;">매출 5092억원, 영업이익 4448억원</span></h2>\r\n' +
  '<p class=""> </p>\r\n' +
  "<p>본엔젤스벤처파트너스는</p>\r\n" +
  "<p>장병규 크래프톤 창업자가 세운</p>\r\n" +
  "<p>민간자금 기반의 초기투자사입니다.</p>\r\n" +
  "<p>&nbsp;</p>\r\n" +
  "<p>지난해 그야말로 기록적인 실적을 기록했는데요.</p>\r\n" +
  '<p class=""> </p>\r\n' +
  "<p><strong>배달의민족의 M&amp;A 결과가</strong></p>\r\n" +
  "<p><strong>재무제표에 반영된 것으로 추정합니다.</strong></p>\r\n" +
  '<p class=""> </p>\r\n' +
  "<p><strong>본엔젤벤처파트너스는 회사 초창기</strong></p>\r\n" +
  "<p><strong>단독으로 투자한 바 있으며</strong></p>\r\n" +
  "<p><strong>이후에도 지속적으로 라운드에 참여해</strong></p>\r\n" +
  "<p><strong>유력주주 위치를 유지했습니다. </strong></p>\r\n" +
  "<p>";

const div = document.createElement("div");
div.innerHTML = html;
test.append(div);

const text = div.textContent || div.innerText || "";
