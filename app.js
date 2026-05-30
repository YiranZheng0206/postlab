const metricCatalog = [
  { key: "views", label: "Views" },
  { key: "likes", label: "Likes" },
  { key: "comments", label: "Comment" },
  { key: "stars", label: "Star" },
];

const checkpointCatalog = [
  { key: "24h", label: "24 hours", hours: 24 },
  { key: "72h", label: "72 hours", hours: 72 },
  { key: "7d", label: "One week", hours: 168 },
  { key: "30d", label: "One month", hours: 720 },
];

const defaultState = {
  settings: {
    language: "en",
    timezone: "Asia/Shanghai",
    platforms: ["TikTok", "抖音", "YouTube", "小红书"],
    metrics: ["views", "likes", "comments", "stars"],
    checkpoints: ["24h", "72h", "7d"],
  },
  videos: [],
  completedReminders: [],
};

const translations = {
  en: {
    navHome: "Home",
    navDashboard: "Overview",
    navEntry: "Entry",
    navSettings: "Settings",
    cloudStorage: "Cloud storage",
    emailPlaceholder: "Email",
    passwordPlaceholder: "Password",
    signIn: "Sign in",
    signUp: "Sign up",
    signOut: "Sign out",
    syncCloud: "Sync now",
    localMode: "Local mode. Add Supabase env vars to enable cloud sync.",
    signedOutMode: "Sign in to sync data across devices.",
    signedInMode: "Cloud sync is on.",
    savingCloud: "Saving to cloud...",
    savedCloud: "Saved to cloud",
    cloudLoadError: "Could not load cloud data",
    cloudSaveError: "Could not save cloud data",
    authMissing: "Enter email and password",
    authCheckEmail: "Check your email to confirm your account",
    authSuccess: "Signed in",
    authSignedOut: "Signed out",
    nextReminderLabel: "Next reminder",
    noPending: "No pending entry",
    homeSummary:
      "Configure platforms and metrics, then let PostLab turn 24h, 72h, weekly, and monthly checkpoints into readable creator insights.",
    startEntry: "Start entry",
    configureTracking: "Configure tracking",
    dashboardTitle: "Overview",
    exportExcel: "Export Excel",
    recentRange: "Latest 30 posts",
    platformPerformance: "Platform performance",
    sortByQuality: "Sorted by interaction quality",
    bestTimesTitle: "Best posting time",
    basedHistory: "Based on historical performance",
    hashtagTitle: "High-potential Hashtags",
    higherAverage: "Higher average performance",
    hookTitle: "Hook Type comparison",
    longerScore: "Longer bars mean stronger scores",
    pendingReminders: "Pending reminders",
    fillMetrics: "Fill metrics when due",
    entryTitle: "Video and metric entry",
    newVideo: "New video",
    autoReminder: "Reminders are created after saving",
    videoLink: "Video link",
    videoUrlPlaceholder: "Paste a TikTok / Douyin / YouTube link",
    extractNote: "Link extraction reads only what is visible in the URL. Short links need manual fields or an API connection.",
    extract: "Extract",
    platform: "Platform",
    topicPlaceholder: "e.g. Spring outfit idea / AI tool tutorial",
    saveVideo: "Save video and create reminders",
    contentList: "Content list",
    settingsTitle: "Platform and tracking settings",
    setupTitle: "Setup",
    editableLater: "You can change this anytime",
    language: "Language",
    timezone: "Time zone",
    addPlatformLabel: "Add operating platform",
    platformPlaceholder: "e.g. TikTok, Douyin, YouTube",
    add: "Add",
    metricsTitle: "Tracked metrics",
    selectAll: "Select all",
    checkpointsTitle: "Data entry checkpoints",
    checkpointDefault: "Default 24h / 72h / weekly",
    backupTitle: "Backup",
    backupHint: "Save or restore all local data",
    exportBackup: "Export backup",
    importBackup: "Import backup",
    saveSettings: "Save settings",
    autoExtractTitle: "Auto extraction note",
    draftParsing: "Current prototype supports draft parsing",
    autoExtractP1:
      "After you paste a link, PostLab can usually identify the platform and, for some links, a video ID or visible URL tags. Publish time, topic, hashtags, and metrics still need confirmation unless an official API is connected.",
    autoExtractP2:
      "Fully automated reads for title, publish time, views, likes, comments, and stars usually require official APIs, account authorization, or exported platform data. This interface keeps the structure ready for that upgrade.",
    emptyDashboard: "Enter your first video to generate platform, timing, Hashtag, and Hook Type analysis.",
    totalContent: "Total posts",
    totalContentNote: "Recorded video count",
    totalViews: "Total views",
    totalViewsNote: "Across all platforms",
    interactions: "Interactions",
    interactionNote: "Likes / Comment / Star",
    qualityScore: "Quality score",
    qualityNote: "Estimated by interaction quality",
    posts: "posts",
    views: "Views",
    score: "Score",
    highPotential: "High potential",
    observing: "Watching",
    afterHour: "after",
    noEnoughData: "Not enough data yet.",
    hashtagEmpty: "Hashtags will appear here after entry.",
    hookEmpty: "Hook Type comparison appears after entry.",
    reminderEmpty: "Reminders will appear here after you save a video.",
    completeEntry: "Complete entry",
    videoEmpty: "No videos yet. Paste a link to create a draft, then add metrics.",
    delete: "Delete",
    draftTopic: "Draft topic",
    draftTag: "#draft",
    invalidUrl: "That link does not look valid",
    draftReady: "Editable draft created",
    shortLinkReady: "Short link detected. Platform filled; hashtags and metrics need manual entry or API access.",
    manualConfirm: "Needs manual confirmation",
    settingsSaved: "Settings saved",
    videoSaved: "Video saved and reminders created",
    videoDeleted: "Video deleted",
    reminderDone: "Reminder completed",
    noExport: "No data to export yet",
    exported: "Excel exported",
    backupExported: "Backup exported",
    backupImported: "Backup imported",
    backupInvalid: "This backup file is not valid",
    maybeLater: "You can leave it blank and fill it when reminded",
  },
  zh: {
    navHome: "首页",
    navDashboard: "总览",
    navEntry: "录入",
    navSettings: "设置",
    cloudStorage: "云端存储",
    emailPlaceholder: "邮箱",
    passwordPlaceholder: "密码",
    signIn: "登录",
    signUp: "注册",
    signOut: "退出",
    syncCloud: "立即同步",
    localMode: "本地模式。添加 Supabase 环境变量后可开启云同步。",
    signedOutMode: "登录后可跨设备同步数据。",
    signedInMode: "云同步已开启。",
    savingCloud: "正在保存到云端...",
    savedCloud: "已保存到云端",
    cloudLoadError: "无法读取云端数据",
    cloudSaveError: "无法保存到云端",
    authMissing: "请输入邮箱和密码",
    authCheckEmail: "请查看邮箱并确认账号",
    authSuccess: "已登录",
    authSignedOut: "已退出",
    nextReminderLabel: "下一次提醒",
    noPending: "暂无待录入",
    homeSummary: "配置平台和指标，让 PostLab 把 24h、72h、一周、一月等复盘节点沉淀成可读的运营洞察。",
    startEntry: "开始录入",
    configureTracking: "配置追踪项",
    dashboardTitle: "总体分析",
    exportExcel: "导出 Excel",
    recentRange: "近 30 条内容",
    platformPerformance: "平台表现",
    sortByQuality: "按互动质量排序",
    bestTimesTitle: "理想发布时间",
    basedHistory: "基于历史表现",
    hashtagTitle: "高潜 Hashtag",
    higherAverage: "平均表现更高",
    hookTitle: "Hook Type 对比",
    longerScore: "越长代表综合分越高",
    pendingReminders: "待录入提醒",
    fillMetrics: "到点后补充指标",
    entryTitle: "视频与数据录入",
    newVideo: "新增视频",
    autoReminder: "保存后自动生成提醒节点",
    videoLink: "视频链接",
    videoUrlPlaceholder: "粘贴 TikTok / 抖音 / YouTube 链接",
    extractNote: "链接提取只能读取 URL 里能看到的信息。短链需要手动补充字段，或接入 API。",
    extract: "提取",
    platform: "平台",
    topicPlaceholder: "例如：春季穿搭选题 / AI 工具教程",
    saveVideo: "保存视频并创建提醒",
    contentList: "内容列表",
    settingsTitle: "平台与追踪设置",
    setupTitle: "首次配置",
    editableLater: "之后可随时修改",
    language: "语言",
    timezone: "时区",
    addPlatformLabel: "添加运营平台",
    platformPlaceholder: "例如 TikTok、抖音、YouTube",
    add: "添加",
    metricsTitle: "追踪数据类型",
    selectAll: "全选",
    checkpointsTitle: "登入数据时间",
    checkpointDefault: "默认 24h / 72h / 一周",
    backupTitle: "备份",
    backupHint: "保存或恢复全部本地数据",
    exportBackup: "导出备份",
    importBackup: "导入备份",
    saveSettings: "保存设置",
    autoExtractTitle: "自动提取说明",
    draftParsing: "当前原型支持草稿解析",
    autoExtractP1: "粘贴链接后，PostLab 通常只能识别平台；部分链接能识别视频 ID 或 URL 里可见的标签。发布时间、Topic、Hashtag 和数据仍需要手动确认，除非接入官方 API。",
    autoExtractP2: "真实自动读取标题、发布时间、views、likes、comment、star 通常需要接入各平台官方 API、账号授权或数据导出文件。这个界面已经把入口和数据结构预留好。",
    emptyDashboard: "录入第一条视频后，总览会开始生成平台、时间、Hashtag 和 Hook Type 分析。",
    totalContent: "总内容",
    totalContentNote: "已记录视频数量",
    totalViews: "总播放",
    totalViewsNote: "所有平台累计",
    interactions: "互动量",
    interactionNote: "Likes / Comment / Star",
    qualityScore: "综合分",
    qualityNote: "按互动质量估算",
    posts: "条内容",
    views: "播放",
    score: "综合分",
    highPotential: "高潜",
    observing: "观察中",
    afterHour: "后",
    noEnoughData: "暂无足够数据。",
    hashtagEmpty: "Hashtag 会在录入后自动进入分析。",
    hookEmpty: "录入 Hook Type 后会形成对比。",
    reminderEmpty: "保存视频后，提醒会自动出现在这里。",
    completeEntry: "完成补录",
    videoEmpty: "还没有视频。可以先粘贴链接生成草稿，再补充数据。",
    delete: "删除",
    draftTopic: "待确认选题",
    draftTag: "#待确认",
    invalidUrl: "链接格式看起来不太对",
    draftReady: "已生成可编辑草稿",
    shortLinkReady: "检测到短链。已填入平台，但 Hashtag 和数据需要手动录入或接入 API。",
    manualConfirm: "需要手动确认",
    settingsSaved: "设置已保存",
    videoSaved: "视频已保存，提醒节点已生成",
    videoDeleted: "视频已删除",
    reminderDone: "这条提醒已完成",
    noExport: "还没有可导出的数据",
    exported: "Excel 已导出",
    backupExported: "备份已导出",
    backupImported: "备份已导入",
    backupInvalid: "这个备份文件无效",
    maybeLater: "可先留空，提醒时补录",
  },
  ja: {
    navHome: "ホーム",
    navDashboard: "概要",
    navEntry: "入力",
    navSettings: "設定",
    cloudStorage: "クラウド保存",
    emailPlaceholder: "メール",
    passwordPlaceholder: "パスワード",
    signIn: "ログイン",
    signUp: "登録",
    signOut: "ログアウト",
    syncCloud: "今すぐ同期",
    localMode: "ローカルモード。Supabase 環境変数を追加するとクラウド同期できます。",
    signedOutMode: "ログインすると端末間で同期できます。",
    signedInMode: "クラウド同期が有効です。",
    savingCloud: "クラウドに保存中...",
    savedCloud: "クラウドに保存しました",
    cloudLoadError: "クラウドデータを読み込めませんでした",
    cloudSaveError: "クラウドに保存できませんでした",
    authMissing: "メールとパスワードを入力してください",
    authCheckEmail: "メールを確認してアカウントを承認してください",
    authSuccess: "ログインしました",
    authSignedOut: "ログアウトしました",
    nextReminderLabel: "次のリマインド",
    noPending: "未入力なし",
    homeSummary: "プラットフォームと指標を設定し、24h、72h、週次、月次の記録ポイントを読みやすい運用インサイトに変換します。",
    startEntry: "入力を始める",
    configureTracking: "追跡項目を設定",
    dashboardTitle: "概要",
    exportExcel: "Excel 書き出し",
    recentRange: "最新 30 件",
    platformPerformance: "プラットフォーム実績",
    sortByQuality: "反応品質で並び替え",
    bestTimesTitle: "理想の投稿時間",
    basedHistory: "過去実績に基づく",
    hashtagTitle: "有望な Hashtag",
    higherAverage: "平均実績が高い",
    hookTitle: "Hook Type 比較",
    longerScore: "バーが長いほど高スコア",
    pendingReminders: "未入力リマインド",
    fillMetrics: "期限後に指標を入力",
    entryTitle: "動画と指標の入力",
    newVideo: "新規動画",
    autoReminder: "保存後にリマインドを作成",
    videoLink: "動画リンク",
    videoUrlPlaceholder: "TikTok / Douyin / YouTube のリンクを貼り付け",
    extractNote: "リンク抽出は URL に見える情報だけを読み取ります。短縮リンクは手入力または API 接続が必要です。",
    extract: "抽出",
    platform: "プラットフォーム",
    topicPlaceholder: "例：春コーデ企画 / AI ツール解説",
    saveVideo: "動画を保存してリマインドを作成",
    contentList: "コンテンツ一覧",
    settingsTitle: "プラットフォームと追跡設定",
    setupTitle: "初期設定",
    editableLater: "いつでも変更できます",
    language: "言語",
    timezone: "タイムゾーン",
    addPlatformLabel: "運用プラットフォームを追加",
    platformPlaceholder: "例：TikTok、Douyin、YouTube",
    add: "追加",
    metricsTitle: "追跡指標",
    selectAll: "すべて選択",
    checkpointsTitle: "データ入力タイミング",
    checkpointDefault: "標準 24h / 72h / 週次",
    backupTitle: "バックアップ",
    backupHint: "すべてのローカルデータを保存または復元",
    exportBackup: "バックアップを書き出し",
    importBackup: "バックアップを読み込み",
    saveSettings: "設定を保存",
    autoExtractTitle: "自動抽出について",
    draftParsing: "現在のプロトタイプは下書き解析に対応",
    autoExtractP1: "リンクを貼り付けると、PostLab は通常プラットフォームを識別できます。一部のリンクでは動画 ID や URL に見えるタグも読み取れますが、投稿時間、Topic、Hashtag、指標は手動確認が必要です。",
    autoExtractP2: "タイトル、投稿時間、views、likes、comments、stars の完全自動取得には、通常、公式 API、アカウント認証、またはエクスポートデータが必要です。",
    emptyDashboard: "最初の動画を入力すると、プラットフォーム、時間、Hashtag、Hook Type の分析が始まります。",
    totalContent: "投稿数",
    totalContentNote: "記録済み動画数",
    totalViews: "総再生数",
    totalViewsNote: "全プラットフォーム合計",
    interactions: "反応数",
    interactionNote: "Likes / Comment / Star",
    qualityScore: "品質スコア",
    qualityNote: "反応品質から推定",
    posts: "件",
    views: "再生",
    score: "スコア",
    highPotential: "有望",
    observing: "観察中",
    afterHour: "以降",
    noEnoughData: "十分なデータがありません。",
    hashtagEmpty: "入力後に Hashtag 分析が表示されます。",
    hookEmpty: "入力後に Hook Type 比較が表示されます。",
    reminderEmpty: "動画を保存するとリマインドが表示されます。",
    completeEntry: "入力完了",
    videoEmpty: "まだ動画がありません。リンクから下書きを作成し、指標を追加できます。",
    delete: "削除",
    draftTopic: "確認待ちトピック",
    draftTag: "#下書き",
    invalidUrl: "リンク形式が正しくありません",
    draftReady: "編集可能な下書きを作成しました",
    shortLinkReady: "短縮リンクを検出しました。プラットフォームのみ入力し、Hashtag と指標は手入力または API が必要です。",
    manualConfirm: "手動確認が必要",
    settingsSaved: "設定を保存しました",
    videoSaved: "動画を保存し、リマインドを作成しました",
    videoDeleted: "動画を削除しました",
    reminderDone: "リマインドを完了しました",
    noExport: "書き出すデータがありません",
    exported: "Excel を書き出しました",
    backupExported: "バックアップを書き出しました",
    backupImported: "バックアップを読み込みました",
    backupInvalid: "このバックアップファイルは無効です",
    maybeLater: "空欄のままにして、リマインド時に入力できます",
  },
};

let state = loadState();
let supabase = null;
let currentUser = null;
let cloudRecordId = null;
let cloudSaveTimer = null;
let isLoadingCloud = false;

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

function currentLanguage() {
  return state.settings.language || "en";
}

function currentTimezone() {
  return state.settings.timezone || "Asia/Shanghai";
}

function t(key) {
  return translations[currentLanguage()]?.[key] || translations.en[key] || key;
}

function checkpointLabel(item) {
  const labels = {
    en: { "24h": "24 hours", "72h": "72 hours", "7d": "One week", "30d": "One month" },
    zh: { "24h": "24 小时", "72h": "72 小时", "7d": "一周", "30d": "一月" },
    ja: { "24h": "24 時間", "72h": "72 時間", "7d": "1 週間", "30d": "1 か月" },
  };
  return labels[currentLanguage()]?.[item.key] || item.label;
}

function applyLanguage() {
  document.documentElement.lang = currentLanguage() === "zh" ? "zh-CN" : currentLanguage();
  $$("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });
  $$("[data-placeholder-i18n]").forEach((element) => {
    element.placeholder = t(element.dataset.placeholderI18n);
  });
  const languageSelect = $("#languageSelect");
  if (languageSelect) languageSelect.value = currentLanguage();
  const timezoneSelect = $("#timezoneSelect");
  if (timezoneSelect) timezoneSelect.value = currentTimezone();
  renderAuthPanel();
}

function renderHomeDate() {
  const locale = currentLanguage() === "zh" ? "en-US" : currentLanguage() === "ja" ? "en-US" : "en-US";
  const parts = new Intl.DateTimeFormat(locale, {
    timeZone: currentTimezone(),
    month: "short",
    day: "2-digit",
  }).formatToParts(new Date());
  const month = parts.find((part) => part.type === "month")?.value || "";
  const day = parts.find((part) => part.type === "day")?.value || "";
  $("#homeMonth").textContent = month.toUpperCase();
  $("#homeDay").textContent = day.replace(/^0/, "");
}

function loadState() {
  const saved = localStorage.getItem("postLabState");
  if (!saved) return structuredClone(defaultState);

  try {
    const parsed = JSON.parse(saved);
    return {
      ...structuredClone(defaultState),
      ...parsed,
      settings: { ...defaultState.settings, ...(parsed.settings || {}) },
      videos: parsed.videos || [],
      completedReminders: parsed.completedReminders || [],
    };
  } catch {
    return structuredClone(defaultState);
  }
}

function saveState() {
  localStorage.setItem("postLabState", JSON.stringify(state));
  queueCloudSave();
}

function serializableState() {
  return {
    settings: state.settings,
    videos: state.videos,
    completedReminders: state.completedReminders,
  };
}

async function initSupabase() {
  const env = import.meta.env || {};
  const url = env.VITE_SUPABASE_URL;
  const key = env.VITE_SUPABASE_ANON_KEY;
  if (!url || !key) return null;
  const { createClient } = await import("@supabase/supabase-js");
  return createClient(url, key);
}

function setCloudStatus(messageKey) {
  const element = $("#cloudStatus");
  if (element) element.textContent = t(messageKey);
}

function renderAuthPanel() {
  const signedOut = $("#authSignedOut");
  const signedIn = $("#authSignedIn");
  const email = $("#authUserEmail");
  if (!signedOut || !signedIn) return;

  signedOut.hidden = Boolean(currentUser);
  signedIn.hidden = !currentUser;
  if (email) email.textContent = currentUser?.email || "";

  if (!supabase) {
    setCloudStatus("localMode");
  } else if (currentUser) {
    setCloudStatus("signedInMode");
  } else {
    setCloudStatus("signedOutMode");
  }
}

async function initCloud() {
  supabase = await initSupabase();
  renderAuthPanel();
  if (!supabase) return;

  const { data } = await supabase.auth.getSession();
  currentUser = data.session?.user || null;
  if (currentUser) await loadCloudState();

  supabase.auth.onAuthStateChange(async (_event, session) => {
    currentUser = session?.user || null;
    cloudRecordId = null;
    if (currentUser) {
      await loadCloudState();
    } else {
      state = loadState();
    }
    renderAll();
  });
}

async function loadCloudState() {
  if (!supabase || !currentUser) return;
  isLoadingCloud = true;
  const { data, error } = await supabase
    .from("postlab_data")
    .select("id,data")
    .eq("user_id", currentUser.id)
    .maybeSingle();

  if (error) {
    setCloudStatus("cloudLoadError");
    isLoadingCloud = false;
    return;
  }

  if (data?.data) {
    cloudRecordId = data.id;
    const normalized = normalizeImportedState(data.data);
    if (normalized) {
      state = normalized;
      localStorage.setItem("postLabState", JSON.stringify(state));
    }
  } else {
    await saveCloudState();
  }

  isLoadingCloud = false;
}

function queueCloudSave() {
  if (!supabase || !currentUser || isLoadingCloud) return;
  window.clearTimeout(cloudSaveTimer);
  cloudSaveTimer = window.setTimeout(() => {
    saveCloudState();
  }, 550);
}

async function saveCloudState() {
  if (!supabase || !currentUser) return;
  setCloudStatus("savingCloud");
  const payload = {
    user_id: currentUser.id,
    data: serializableState(),
    updated_at: new Date().toISOString(),
  };

  const query = cloudRecordId
    ? supabase.from("postlab_data").update(payload).eq("id", cloudRecordId).select("id").single()
    : supabase.from("postlab_data").insert(payload).select("id").single();

  const { data, error } = await query;
  if (error) {
    setCloudStatus("cloudSaveError");
    return;
  }
  cloudRecordId = data.id;
  setCloudStatus("savedCloud");
}

function formatNumber(value) {
  const locale = currentLanguage() === "zh" ? "zh-CN" : currentLanguage() === "ja" ? "ja-JP" : "en-US";
  return new Intl.NumberFormat(locale, { notation: "compact" }).format(value || 0);
}

function formatDateTime(value) {
  const locale = currentLanguage() === "zh" ? "zh-CN" : currentLanguage() === "ja" ? "ja-JP" : "en-US";
  return new Intl.DateTimeFormat(locale, {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(value);
}

function scoreVideo(video) {
  const metrics = video.metrics || {};
  const views = Number(metrics.views) || 1;
  const likes = Number(metrics.likes) || 0;
  const comments = Number(metrics.comments) || 0;
  const stars = Number(metrics.stars) || 0;
  return ((likes + comments * 3 + stars * 2) / views) * 100;
}

function latestMetricTotal(metric) {
  return state.videos.reduce((sum, video) => sum + (Number(video.metrics?.[metric]) || 0), 0);
}

function getPublishedAt(video) {
  return new Date(`${video.publishDate}T${video.publishTime || "00:00"}`);
}

function reminderKey(videoId, checkpointKey) {
  return `${videoId}:${checkpointKey}`;
}

function dueReminders() {
  const now = new Date();
  return state.videos
    .flatMap((video) => {
      return state.settings.checkpoints.flatMap((key) => {
        const checkpoint = checkpointCatalog.find((item) => item.key === key);
        if (!checkpoint || state.completedReminders.includes(reminderKey(video.id, key))) return [];
        const dueAt = new Date(getPublishedAt(video).getTime() + checkpoint.hours * 60 * 60 * 1000);
        return [{ video, checkpoint, dueAt, isDue: dueAt <= now, key: reminderKey(video.id, key) }];
      });
    })
    .sort((a, b) => a.dueAt - b.dueAt);
}

function groupBy(list, getter) {
  return list.reduce((groups, item) => {
    const key = getter(item);
    groups[key] = groups[key] || [];
    groups[key].push(item);
    return groups;
  }, {});
}

function average(list, getter) {
  if (!list.length) return 0;
  return list.reduce((sum, item) => sum + getter(item), 0) / list.length;
}

function toast(message) {
  const element = $("#toast");
  element.textContent = message;
  element.classList.add("is-visible");
  window.clearTimeout(toast.timer);
  toast.timer = window.setTimeout(() => element.classList.remove("is-visible"), 2600);
}

function switchView(viewId) {
  $$(".view").forEach((view) => view.classList.toggle("is-visible", view.id === viewId));
  $$(".nav-item").forEach((item) => item.classList.toggle("is-active", item.dataset.view === viewId));
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderSettings() {
  $("#platformChips").innerHTML = state.settings.platforms
    .map(
      (platform) => `
        <span class="chip">${platform}<button type="button" data-remove-platform="${platform}" aria-label="${t("delete")} ${platform}">×</button></span>
      `,
    )
    .join("");

  $("#metricOptions").innerHTML = metricCatalog
    .map(
      (metric) => `
        <label class="option-card">
          <input type="checkbox" name="metric" value="${metric.key}" ${state.settings.metrics.includes(metric.key) ? "checked" : ""}>
          <span>${metric.label}</span>
        </label>
      `,
    )
    .join("");

  $("#checkpointOptions").innerHTML = checkpointCatalog
    .map(
      (item) => `
        <label class="option-card">
          <input type="checkbox" name="checkpoint" value="${item.key}" ${state.settings.checkpoints.includes(item.key) ? "checked" : ""}>
          <span>${checkpointLabel(item)}</span>
        </label>
      `,
    )
    .join("");

  $("#platformSelect").innerHTML = state.settings.platforms
    .map((platform) => `<option value="${platform}">${platform}</option>`)
    .join("");

  renderMetricInputs();
}

function renderMetricInputs() {
  $("#metricEntry").innerHTML = state.settings.metrics
    .map((key) => {
      const metric = metricCatalog.find((item) => item.key === key);
      return `
        <label>
          ${metric.label}
          <input type="number" min="0" step="1" data-metric-input="${key}" placeholder="${t("maybeLater")}">
        </label>
      `;
    })
    .join("");
}

function renderDashboard() {
  const videos = state.videos;
  const analyticsGrid = document.querySelector(".analytics-grid");

  if (!videos.length) {
    $("#kpiGrid").innerHTML = `<div class="empty-state">${t("emptyDashboard")}</div>`;
    if (analyticsGrid) analyticsGrid.style.display = "none";
    renderReminders();
    return;
  }

  if (analyticsGrid) analyticsGrid.style.display = "";
  const avgScore = average(videos, scoreVideo);
  const totalViews = latestMetricTotal("views");
  const totalLikes = latestMetricTotal("likes");
  const totalComments = latestMetricTotal("comments");

  $("#kpiGrid").innerHTML = [
    [t("totalContent"), videos.length, t("totalContentNote")],
    [t("totalViews"), formatNumber(totalViews), t("totalViewsNote")],
    [t("interactions"), formatNumber(totalLikes + totalComments + latestMetricTotal("stars")), t("interactionNote")],
    [t("qualityScore"), avgScore.toFixed(1), t("qualityNote")],
  ]
    .map(([label, value, note]) => `<article class="kpi-card"><span>${label}</span><strong>${value}</strong><small>${note}</small></article>`)
    .join("");

  renderPlatformTable();
  renderBestTimes();
  renderHashtags();
  renderHookBars();
  renderReminders();
}

function renderPlatformTable() {
  const groups = groupBy(state.videos, (video) => video.platform);
  const rows = Object.entries(groups)
    .map(([platform, videos]) => ({
      platform,
      count: videos.length,
      views: videos.reduce((sum, video) => sum + (Number(video.metrics?.views) || 0), 0),
      score: average(videos, scoreVideo),
    }))
    .sort((a, b) => b.score - a.score);

  $("#platformTable").innerHTML =
    rows
      .map(
        (row) => `
          <div class="platform-row">
            <div class="row-title"><strong>${row.platform}</strong><span>${row.count} ${t("posts")}</span></div>
            <div><span class="muted">${t("views")}</span><strong>${formatNumber(row.views)}</strong></div>
            <div><span class="muted">${t("score")}</span><strong>${row.score.toFixed(1)}</strong></div>
            <span class="status-pill">${row.score >= 10 ? t("highPotential") : t("observing")}</span>
          </div>
        `,
      )
      .join("") || `<p class="empty">${t("emptyDashboard")}</p>`;
}

function renderBestTimes() {
  const groups = groupBy(state.videos, (video) => video.platform);
  const items = Object.entries(groups).map(([platform, videos]) => {
    const byHour = groupBy(videos, (video) => Number(video.publishTime.split(":")[0]));
    const best = Object.entries(byHour)
      .map(([hour, hourVideos]) => ({ hour, score: average(hourVideos, scoreVideo) }))
      .sort((a, b) => b.score - a.score)[0];

    return { platform, hour: best?.hour?.padStart(2, "0") || "00", score: best?.score || 0 };
  });

  $("#bestTimes").innerHTML =
    items
      .map(
        (item) => `
          <div class="stack-item">
            <strong>${item.platform}</strong>
            <span class="metric-pill">${item.hour}:00 ${t("afterHour")}</span>
          </div>
        `,
      )
      .join("") || `<p class="empty">${t("noEnoughData")}</p>`;
}

function renderHashtags() {
  const tagScores = {};
  state.videos.forEach((video) => {
    video.hashtags.forEach((tag) => {
      tagScores[tag] = tagScores[tag] || [];
      tagScores[tag].push(scoreVideo(video));
    });
  });

  const tags = Object.entries(tagScores)
    .map(([tag, scores]) => ({ tag, score: average(scores, (value) => value) }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 10);

  $("#hashtagList").innerHTML =
    tags.map((item) => `<span class="tag">${item.tag}</span>`).join("") ||
    `<p class="empty">${t("hashtagEmpty")}</p>`;
}

function renderHookBars() {
  const groups = groupBy(state.videos, (video) => video.hookType);
  const rows = Object.entries(groups)
    .map(([hook, videos]) => ({ hook, score: average(videos, scoreVideo) }))
    .sort((a, b) => b.score - a.score);
  const max = Math.max(...rows.map((row) => row.score), 1);

  $("#hookBars").innerHTML =
    rows
      .map(
        (row) => `
          <div class="bar-item">
            <strong>${row.hook}</strong>
            <div class="bar-track"><div class="bar-fill" style="--bar-width:${Math.max(8, (row.score / max) * 100)}%"></div></div>
            <span>${row.score.toFixed(1)}</span>
          </div>
        `,
      )
      .join("") || `<p class="empty">${t("hookEmpty")}</p>`;
}

function renderReminders() {
  const reminders = dueReminders().slice(0, 8);
  const next = reminders.find((item) => !item.isDue) || reminders[0];
  $("#nextReminder").textContent = next ? `${next.video.platform} · ${formatDateTime(next.dueAt)}` : t("noPending");

  $("#reminderList").innerHTML =
    reminders
      .map(
        (item) => `
          <div class="reminder-item ${item.isDue ? "is-due" : ""}">
            <div>
              <strong>${item.video.topic}</strong>
              <div class="muted">${item.video.platform} · ${checkpointLabel(item.checkpoint)} · ${formatDateTime(item.dueAt)}</div>
            </div>
            <div class="video-actions">
              <button class="mini-button" type="button" data-complete-reminder="${item.key}">${t("completeEntry")}</button>
            </div>
          </div>
        `,
      )
      .join("") || `<p class="empty">${t("reminderEmpty")}</p>`;
}

function renderVideos() {
  $("#videoCount").textContent = `${state.videos.length} ${t("posts")}`;
  $("#videoList").innerHTML =
    state.videos
      .slice()
      .sort((a, b) => getPublishedAt(b) - getPublishedAt(a))
      .map(
        (video) => `
          <div class="video-item">
            <div>
              <strong>${video.topic}</strong>
              <div class="muted">${video.platform} · ${video.publishDate} ${video.publishTime} · ${video.hookType}</div>
            </div>
            <div class="video-meta">
              ${video.hashtags.map((tag) => `<span class="metric-pill">${tag}</span>`).join("")}
            </div>
            <div class="video-meta">
              ${state.settings.metrics
                .map((key) => {
                  const metric = metricCatalog.find((item) => item.key === key);
                  return `<span class="metric-pill">${metric.label}: ${formatNumber(video.metrics?.[key] || 0)}</span>`;
                })
                .join("")}
            </div>
            <div class="video-actions">
              <button class="mini-button" type="button" data-delete-video="${video.id}">${t("delete")}</button>
            </div>
          </div>
        `,
      )
      .join("") || `<p class="empty">${t("videoEmpty")}</p>`;
}

function renderAll() {
  applyLanguage();
  renderHomeDate();
  renderSettings();
  renderDashboard();
  renderVideos();
  applyLanguage();
  renderHomeDate();
}

function parseHashtags(text) {
  return (text.match(/#[\p{L}\p{N}_-]+/gu) || [])
    .map((tag) => tag.trim())
    .filter(Boolean);
}

function inferFromUrl(url) {
  let parsed;
  try {
    parsed = new URL(url);
  } catch {
    return null;
  }

  const host = parsed.hostname.toLowerCase();
  const platform = host.includes("tiktok")
    ? "TikTok"
    : host.includes("douyin")
      ? "抖音"
      : host.includes("youtube") || host.includes("youtu.be")
        ? "YouTube"
        : host.includes("xiaohongshu")
          ? "小红书"
          : state.settings.platforms[0];

  const tags = parseHashtags(decodeURIComponent(parsed.hash + " " + parsed.search));
  const isShortLink =
    (host.includes("tiktok") && /^\/t\/[^/]+\/?$/.test(parsed.pathname)) ||
    (host.includes("youtu.be") && parsed.pathname.length > 1) ||
    (host.includes("douyin") && /^\/[A-Za-z0-9]+\/?$/.test(parsed.pathname));

  return {
    platform,
    topic: "",
    hashtags: tags,
    publishDate: "",
    publishTime: "",
    isShortLink,
  };
}

function escapeCell(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function exportExcel() {
  if (!state.videos.length) {
    toast(t("noExport"));
    return;
  }

  const metricKeys = state.settings.metrics;
  const headers = [
    t("platform"),
    "Publish Date",
    "Publish Time",
    "Topic",
    "Hook Type",
    "Hashtag",
    t("videoLink"),
    ...metricKeys.map((key) => metricCatalog.find((metric) => metric.key === key)?.label || key),
  ];
  const rows = state.videos.map((video) => [
    video.platform,
    video.publishDate,
    video.publishTime,
    video.topic,
    video.hookType,
    video.hashtags.join(", "),
    video.url,
    ...metricKeys.map((key) => video.metrics?.[key] || 0),
  ]);
  const table = [headers, ...rows]
    .map((row) => `<tr>${row.map((cell) => `<td>${escapeCell(cell)}</td>`).join("")}</tr>`)
    .join("");
  const workbook = `
    <html>
      <head><meta charset="UTF-8"></head>
      <body><table>${table}</table></body>
    </html>
  `;
  const blob = new Blob([workbook], { type: "application/vnd.ms-excel;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `PostLab-${new Date().toISOString().slice(0, 10)}.xls`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(link.href);
  toast(t("exported"));
}

function normalizeImportedState(imported) {
  if (!imported || typeof imported !== "object" || Array.isArray(imported)) return null;
  if (!imported.settings || typeof imported.settings !== "object") return null;
  if (!Array.isArray(imported.videos)) return null;

  const settings = {
    ...structuredClone(defaultState.settings),
    ...imported.settings,
  };

  if (!Array.isArray(settings.platforms)) settings.platforms = [...defaultState.settings.platforms];
  if (!Array.isArray(settings.metrics)) settings.metrics = [...defaultState.settings.metrics];
  if (!Array.isArray(settings.checkpoints)) settings.checkpoints = [...defaultState.settings.checkpoints];
  if (!translations[settings.language]) settings.language = "en";
  if (!settings.timezone) settings.timezone = "Asia/Shanghai";

  return {
    settings,
    videos: imported.videos,
    completedReminders: Array.isArray(imported.completedReminders) ? imported.completedReminders : [],
  };
}

function exportBackup() {
  const backup = {
    app: "PostLab",
    version: 1,
    exportedAt: new Date().toISOString(),
    ...state,
  };
  const blob = new Blob([JSON.stringify(backup, null, 2)], { type: "application/json;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `PostLab-backup-${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(link.href);
  toast(t("backupExported"));
}

function importBackupFile(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    try {
      const imported = JSON.parse(reader.result);
      const normalized = normalizeImportedState(imported);
      if (!normalized) {
        toast(t("backupInvalid"));
        return;
      }
      state = normalized;
      saveState();
      renderAll();
      toast(t("backupImported"));
    } catch {
      toast(t("backupInvalid"));
    }
  });
  reader.readAsText(file);
}

function authValues() {
  return {
    email: $("#authEmail").value.trim(),
    password: $("#authPassword").value,
  };
}

async function signIn() {
  if (!supabase) {
    toast(t("localMode"));
    return;
  }
  const { email, password } = authValues();
  if (!email || !password) {
    toast(t("authMissing"));
    return;
  }
  const { error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) {
    toast(error.message);
    return;
  }
  toast(t("authSuccess"));
}

async function signUp() {
  if (!supabase) {
    toast(t("localMode"));
    return;
  }
  const { email, password } = authValues();
  if (!email || !password) {
    toast(t("authMissing"));
    return;
  }
  const { error } = await supabase.auth.signUp({ email, password });
  if (error) {
    toast(error.message);
    return;
  }
  toast(t("authCheckEmail"));
}

async function signOut() {
  if (!supabase) return;
  await supabase.auth.signOut();
  toast(t("authSignedOut"));
}

function bindEvents() {
  $$(".nav-item").forEach((button) => {
    button.addEventListener("click", () => switchView(button.dataset.view));
  });

  $$("[data-view-target]").forEach((button) => {
    button.addEventListener("click", () => switchView(button.dataset.viewTarget));
  });

  $("#exportExcel").addEventListener("click", exportExcel);

  $("#signInButton").addEventListener("click", signIn);
  $("#signUpButton").addEventListener("click", signUp);
  $("#signOutButton").addEventListener("click", signOut);
  $("#syncCloudButton").addEventListener("click", () => {
    saveCloudState();
  });

  $("#exportBackup").addEventListener("click", exportBackup);

  $("#importBackup").addEventListener("click", () => {
    $("#backupFile").click();
  });

  $("#backupFile").addEventListener("change", (event) => {
    importBackupFile(event.target.files?.[0]);
    event.target.value = "";
  });

  $("#languageSelect").addEventListener("change", (event) => {
    state.settings.language = event.target.value;
    saveState();
    renderAll();
  });

  $("#timezoneSelect").addEventListener("change", (event) => {
    state.settings.timezone = event.target.value;
    saveState();
    renderAll();
  });

  $("#addPlatform").addEventListener("click", () => {
    const input = $("#platformInput");
    const platform = input.value.trim();
    if (!platform) return;
    if (!state.settings.platforms.includes(platform)) {
      state.settings.platforms.push(platform);
      saveState();
      renderAll();
    }
    input.value = "";
  });

  $("#platformChips").addEventListener("click", (event) => {
    const platform = event.target.dataset.removePlatform;
    if (!platform) return;
    state.settings.platforms = state.settings.platforms.filter((item) => item !== platform);
    saveState();
    renderAll();
  });

  $("#selectAllMetrics").addEventListener("click", () => {
    state.settings.metrics = metricCatalog.map((metric) => metric.key);
    saveState();
    renderAll();
  });

  $("#settingsForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const metrics = $$('input[name="metric"]:checked').map((input) => input.value);
    const checkpoints = $$('input[name="checkpoint"]:checked').map((input) => input.value);
    state.settings.metrics = metrics.length ? metrics : ["views"];
    state.settings.checkpoints = checkpoints.length ? checkpoints : ["24h"];
    saveState();
    renderAll();
    toast(t("settingsSaved"));
  });

  $("#importLink").addEventListener("click", () => {
    const url = $("#videoUrl").value.trim();
    const draft = inferFromUrl(url);
    const status = $("#importStatus");
    if (!draft) {
      toast(t("invalidUrl"));
      return;
    }

    if (!state.settings.platforms.includes(draft.platform)) {
      state.settings.platforms.push(draft.platform);
    }
    renderSettings();
    $("#platformSelect").value = draft.platform;
    $("#publishDate").value = draft.publishDate;
    $("#publishTime").value = draft.publishTime;
    $("#topic").value = draft.topic;
    $("#hashtags").value = draft.hashtags.join(", ");
    status.textContent = `${draft.isShortLink ? t("shortLinkReady") : t("draftReady")} · ${t("manualConfirm")}`;
    status.classList.add("is-warning");
    toast(t("manualConfirm"));
  });

  $("#videoForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const metrics = {};
    $$("[data-metric-input]").forEach((input) => {
      metrics[input.dataset.metricInput] = Number(input.value) || 0;
    });

    state.videos.push({
      id: crypto.randomUUID(),
      url: $("#videoUrl").value.trim(),
      platform: $("#platformSelect").value,
      publishDate: $("#publishDate").value,
      publishTime: $("#publishTime").value,
      topic: $("#topic").value.trim(),
      hookType: $("#hookType").value,
      hashtags: parseHashtags($("#hashtags").value).length
        ? parseHashtags($("#hashtags").value)
        : $("#hashtags").value
            .split(",")
            .map((tag) => tag.trim())
            .filter(Boolean)
            .map((tag) => (tag.startsWith("#") ? tag : `#${tag}`)),
      metrics,
      createdAt: new Date().toISOString(),
    });

    saveState();
    event.target.reset();
    const status = $("#importStatus");
    status.textContent = t("extractNote");
    status.classList.remove("is-warning");
    const now = new Date();
    $("#publishDate").value = now.toISOString().slice(0, 10);
    $("#publishTime").value = now.toTimeString().slice(0, 5);
    renderAll();
    toast(t("videoSaved"));
    switchView("dashboard");
  });

  $("#videoList").addEventListener("click", (event) => {
    const id = event.target.dataset.deleteVideo;
    if (!id) return;
    state.videos = state.videos.filter((video) => video.id !== id);
    state.completedReminders = state.completedReminders.filter((key) => !key.startsWith(`${id}:`));
    saveState();
    renderAll();
    toast(t("videoDeleted"));
  });

  $("#reminderList").addEventListener("click", (event) => {
    const key = event.target.dataset.completeReminder;
    if (!key) return;
    if (!state.completedReminders.includes(key)) state.completedReminders.push(key);
    saveState();
    renderAll();
    toast(t("reminderDone"));
  });
}

async function init() {
  const now = new Date();
  $("#publishDate").value = now.toISOString().slice(0, 10);
  $("#publishTime").value = now.toTimeString().slice(0, 5);
  bindEvents();
  await initCloud();
  renderAll();
}

init();
