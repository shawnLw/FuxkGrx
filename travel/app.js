(() => {
  const $ = (selector) => document.querySelector(selector);
  const safe = (value) => String(value ?? '').replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
  const icon = (name) => `<i data-lucide="${name}" aria-hidden="true"></i>`;
  const query = new URLSearchParams(location.search);
  const initialDay = DAYS.find((day) => day.id === query.get('day')) || DAYS[0];
  let selectedDay = initialDay.id;
  let selectedPlan = ['A', 'B', 'C'].includes(query.get('plan')) ? query.get('plan') : 'A';
  let checkins = readCheckins();
  let collectedTickets = readCollectedTickets();
  let toastTimer;

  function readCheckins() {
    try { return new Set(JSON.parse(localStorage.getItem('japan-trip-checkins-v1') || '[]')); }
    catch { return new Set(); }
  }
  function saveCheckins() {
    try { localStorage.setItem('japan-trip-checkins-v1', JSON.stringify([...checkins])); }
    catch { notify('浏览器未允许保存记录，刷新后可能丢失。'); }
  }
  function readCollectedTickets() {
    try { return new Set(JSON.parse(localStorage.getItem('japan-trip-collected-tickets-v1') || '[]')); }
    catch { return new Set(); }
  }
  function saveCollectedTickets() {
    try { localStorage.setItem('japan-trip-collected-tickets-v1', JSON.stringify([...collectedTickets])); }
    catch { notify('浏览器未允许保存取票状态，刷新后可能丢失。'); }
  }
  function notify(message) {
    const toast = $('#toast');
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 2900);
  }
  function mapUrl(id) {
    const place = PLACES[id];
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place.mapQuery || `${place.query || place.name} ${place.address}`)}`;
  }
  function routeUrl(stops) {
    const points = stops.filter((stop, i, all) => i === 0 || stop.place !== all[i - 1].place).map((stop) => PLACES[stop.place]).filter(Boolean);
    const mapQuery = (place) => encodeURIComponent(place.mapQuery || `${place.query || place.name} ${place.address}`);
    if (points.length < 2) return points.length ? mapUrl(stops[0].place) : 'https://www.google.com/maps';
    const parts = [`api=1`, `origin=${mapQuery(points[0])}`, `destination=${mapQuery(points[points.length - 1])}`];
    if (points.length > 2) {
      const middle = points.slice(1, -1);
      const waypoints = middle.length <= 3 ? middle : [middle[0], middle[Math.floor(middle.length / 2)], middle[middle.length - 1]];
      parts.push(`waypoints=${waypoints.map(mapQuery).join('%7C')}`);
    }
    return `https://www.google.com/maps/dir/?${parts.join('&')}`;
  }
  function actionButtons(id) {
    const place = PLACES[id];
    const checked = checkins.has(id);
    return `<div class="place-actions"><a href="${mapUrl(id)}" target="_blank" rel="noopener noreferrer" aria-label="在 Google 地图中查找${safe(place.name)}">${icon('navigation')} Google 地图</a>${place.source ? `<a href="${safe(place.source)}" target="_blank" rel="noopener noreferrer" aria-label="查看${safe(place.name)}的官方或旅游资料">${icon('external-link')} 资料</a>` : ''}<button type="button" class="check-button ${checked ? 'is-checked' : ''}" data-checkin="${safe(id)}" aria-pressed="${checked}">${icon(checked ? 'check-circle-2' : 'circle')} ${checked ? '已打卡' : '打卡'}</button></div>`;
  }
  function renderDayStrip() {
    $('#day-strip').innerHTML = DAYS.map((day, i) => `<button type="button" class="day-tab" role="tab" data-day="${day.id}" aria-selected="${day.id === selectedDay}" aria-label="第${i + 1}天，${day.date}，${safe(day.area)}"><span class="day-tab-top">${safe(day.date)}</span><span class="day-tab-bottom">D${String(i + 1).padStart(2, '0')} · ${safe(day.area)}</span></button>`).join('');
  }
  function renderTimeline(day, plan) {
    $('#timeline').innerHTML = plan.stops.map((stop) => {
      const place = PLACES[stop.place];
      if (!place) return '';
      const marker = place.kind === '酒店' ? 'bed-double' : place.kind === '餐厅' ? 'utensils' : place.kind === '交通' ? 'train-front' : 'map-pin';
      return `<li class="timeline-item"><div class="timeline-time">${safe(stop.time)}</div><div class="timeline-dot">${icon(marker)}</div><div class="timeline-content"><div class="timeline-topline"><h4>${safe(place.name)}</h4><span class="timeline-kind">${safe(place.kind)}</span></div>${stop.note ? `<p class="timeline-note">${safe(stop.note)}</p>` : ''}<p class="timeline-description">${safe(place.description)}</p><p class="timeline-address">${place.area ? '区域 · ' : '地址 · '}${safe(place.address)}</p>${actionButtons(stop.place)}</div></li>`;
    }).join('');
  }
  function renderExtra(placeId, meta) {
    const place = PLACES[placeId];
    if (!place) return '';
    return `<article class="extra-item"><strong>${safe(place.name)}</strong>${meta ? `<p class="extra-meta">${safe(meta)}</p>` : ''}<p class="extra-detail">${safe(place.description)}</p><p class="place-address">${place.area ? '区域 · ' : '地址 · '}${safe(place.address)}</p>${actionButtons(placeId)}</article>`;
  }
  function renderStays() {
    $('#stays-list').innerHTML = STAYS.map((stay, index) => `<article class="stay-item"><span class="stay-counter">STAY ${String(index + 1).padStart(2, '0')} / 05</span><h3>${safe(PLACES[stay.place].name)}</h3><p class="stay-dates">${safe(stay.dates)} · ${safe(stay.nights)}</p><p>${safe(PLACES[stay.place].address)}</p>${actionButtons(stay.place)}</article>`).join('');
  }
  function renderFieldGuides() {
    $('#hadano-scenes').innerHTML = HADANO_SCENES.map((item) => {
      const place = PLACES[item.place];
      return `<article class="scene-item"><div class="scene-mark" aria-hidden="true"><span>SCENE</span><strong>${safe(item.number)}</strong></div><div class="scene-copy"><span class="scene-shot">${safe(item.shot)}</span><h3>${safe(place.name)}</h3><p>${safe(item.detail)}</p><p class="place-address">导航位置 · ${safe(place.address)}</p><div class="scene-links"><a href="${safe(item.still)}" target="_blank" rel="noopener noreferrer">${icon('image')} 官方剧集图文</a><a href="${safe(place.source)}" target="_blank" rel="noopener noreferrer">${icon('images')} 实景照片 / 资料</a></div>${actionButtons(item.place)}</div></article>`;
    }).join('');
    $('#izu-highlights').innerHTML = IZU_HIGHLIGHTS.map((item, index) => {
      const place = PLACES[item.place];
      return `<article class="izu-stop"><div class="izu-stop-top"><span>${safe(item.day)} · ${String(index + 1).padStart(2, '0')}</span><strong>${safe(item.priority)}</strong></div><h3>${safe(place.name)}</h3><p>${safe(item.tip)}</p><p class="place-address">${safe(place.address)}</p>${actionButtons(item.place)}</article>`;
    }).join('');
  }
  function renderRailTickets() {
    $('#rail-list').innerHTML = RAIL_TICKETS.map((ticket) => {
      const collected = collectedTickets.has(ticket.id);
      return `<article class="rail-ticket">
        <div class="rail-ticket-top"><span class="rail-day">${safe(ticket.day)}</span><span class="rail-product">${safe(ticket.product)}</span></div>
        <h3>${safe(ticket.name)}</h3>
        <div class="rail-journey"><div><span>出发</span><strong>${safe(ticket.departure)}</strong><small>${safe(ticket.from)}</small></div><span class="rail-arrow" aria-hidden="true">→</span><div><span>抵达</span><strong>${safe(ticket.arrival)}</strong><small>${safe(ticket.to)}</small></div></div>
        <div class="rail-facts"><span>${icon('armchair')} ${safe(ticket.seats)}</span><span>${icon('users-round')} ${safe(ticket.travelers)}</span></div>
        <p class="rail-notice">${safe(ticket.notice)}</p>
        <details class="ticket-credentials"><summary>${icon('ticket')} 显示取票码</summary><div class="credential-row"><span>预订编号</span><strong>${safe(ticket.reservation)}</strong></div><div class="credential-row"><span>取票码</span><strong>${safe(ticket.pickupCode)}</strong></div><button type="button" data-copy-code="${safe(ticket.pickupCode)}" aria-label="复制${safe(ticket.name)}的取票码">${icon('copy')} 复制取票码</button><p>此码公开可见；现场无法使用时，请从 JR 原始订单打开取票二维码。</p></details>
        <div class="rail-pickup"><h4>到站怎么取票</h4><ol>${ticket.pickup.map((step) => `<li>${safe(step)}</li>`).join('')}</ol></div>
        <div class="rail-actions"><a href="https://www.eki-net.com/top/tr/guide/receive/" target="_blank" rel="noopener noreferrer">${icon('external-link')} JR 东日本取票说明</a><button type="button" data-ticket="${safe(ticket.id)}" class="ticket-button ${collected ? 'is-collected' : ''}" aria-pressed="${collected}">${icon(collected ? 'check-circle-2' : 'circle')} ${collected ? '已取票' : '标记已取票'}</button></div>
      </article>`;
    }).join('');
    refreshIcons();
  }
  function renderProgress() {
    $('#progress-text').textContent = `已打卡 ${checkins.size} 处`;
  }
  function updateUrl() {
    const url = new URL(location.href);
    url.searchParams.set('day', selectedDay);
    url.searchParams.set('plan', selectedPlan);
    history.replaceState(null, '', url);
  }
  function refreshIcons() {
    if (window.lucide) window.lucide.createIcons();
  }
  function renderDay() {
    const index = DAYS.findIndex((item) => item.id === selectedDay);
    const day = DAYS[index];
    const plan = day.plans[selectedPlan];
    renderDayStrip();
    $('#day-number').textContent = `${String(index + 1).padStart(2, '0')} / 10`;
    $('#main-day-number').textContent = String(index + 1).padStart(2, '0');
    $('#scene-label').textContent = day.area.toUpperCase();
    $('#sidebar-date').textContent = `${day.date} · ${day.week} · ${day.area}`;
    $('#sidebar-title').textContent = day.title;
    $('#sidebar-subtitle').textContent = day.subtitle;
    $('#sidebar-hotel').innerHTML = `<p class="side-hotel-name">${safe(PLACES[day.hotel].name)}</p><p class="side-hotel-stay">${safe(day.stay)}</p>`;
    $('#sidebar-note').textContent = day.note;
    $('#main-title').textContent = day.title;
    $('#main-subtitle').textContent = day.subtitle;
    $('#ticket-shortcut').hidden = !['d1', 'd2', 'd10'].includes(day.id);
    $('#plan-name').textContent = `${selectedPlan} · ${plan.name}`;
    $('#plan-mood').textContent = plan.mood;
    $('#plan-tabs').innerHTML = ['A', 'B', 'C'].map((option) => `<button type="button" role="tab" class="plan-tab" data-plan="${option}" aria-selected="${option === selectedPlan}" aria-label="方案${option}：${safe(day.plans[option].name)}">${option}</button>`).join('');
    $('#route-names').innerHTML = plan.stops.filter((stop, i, all) => i === 0 || stop.place !== all[i - 1].place).map((stop) => `<span class="route-name">${safe(PLACES[stop.place].name)}</span>`).join('');
    $('#route-map').href = routeUrl(plan.stops.filter((stop) => stop.place !== 'hkg'));
    renderTimeline(day, plan);
    $('#hotel-detail').innerHTML = renderExtra(day.hotel, day.stay);
    $('#food-list').innerHTML = day.food.map((id) => renderExtra(id)).join('');
    renderProgress();
    updateUrl();
    refreshIcons();
  }

  document.addEventListener('click', (event) => {
    const dayButton = event.target.closest('[data-day]');
    if (dayButton) { selectedDay = dayButton.dataset.day; selectedPlan = 'A'; renderDay(); return; }
    const planButton = event.target.closest('[data-plan]');
    if (planButton) { selectedPlan = planButton.dataset.plan; renderDay(); return; }
    const checkButton = event.target.closest('[data-checkin]');
    if (checkButton) {
      const id = checkButton.dataset.checkin;
      if (checkins.has(id)) checkins.delete(id); else checkins.add(id);
      saveCheckins();
      renderDay();
      renderStays();
      renderFieldGuides();
      refreshIcons();
      notify(checkins.has(id) ? `已打卡：${PLACES[id].name}` : `已取消打卡：${PLACES[id].name}`);
      return;
    }
    const ticketButton = event.target.closest('[data-ticket]');
    if (ticketButton) {
      const id = ticketButton.dataset.ticket;
      if (collectedTickets.has(id)) collectedTickets.delete(id); else collectedTickets.add(id);
      saveCollectedTickets();
      renderRailTickets();
      notify(collectedTickets.has(id) ? '已标记取票。' : '已取消取票标记。');
      return;
    }
    const copyButton = event.target.closest('[data-copy-code]');
    if (copyButton) {
      navigator.clipboard.writeText(copyButton.dataset.copyCode)
        .then(() => notify('取票码已复制。'))
        .catch(() => notify('无法自动复制，请长按取票码复制。'));
    }
  });
  $('#reset-button').addEventListener('click', () => {
    if (!checkins.size) return notify('还没有打卡记录。');
    if (!confirm('确定清除这台设备上的全部打卡记录吗？')) return;
    checkins = new Set();
    saveCheckins();
    renderDay();
    renderStays();
    renderFieldGuides();
    refreshIcons();
    notify('打卡记录已清除。');
  });
  $('#share-button').addEventListener('click', async () => {
    const data = { title: '日本十天九晚 · 旅行手帖', text: '一起看看这份日本行程', url: location.href };
    if (navigator.share) {
      try { await navigator.share(data); return; }
      catch (error) { if (error.name === 'AbortError') return; }
    }
    try { await navigator.clipboard.writeText(location.href); notify('行程链接已复制。'); }
    catch { notify('请复制浏览器地址栏里的链接分享。'); }
  });
  window.addEventListener('popstate', () => {
    const params = new URLSearchParams(location.search);
    const day = DAYS.find((item) => item.id === params.get('day'));
    if (day) selectedDay = day.id;
    selectedPlan = ['A', 'B', 'C'].includes(params.get('plan')) ? params.get('plan') : 'A';
    renderDay();
  });
  renderStays();
  renderFieldGuides();
  renderRailTickets();
  renderDay();
})();
