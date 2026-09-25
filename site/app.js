(() => {
  'use strict';

  const byId = (id) => document.getElementById(id);
  const fields = {
    notes: byId('release-notes'),
    githubUrl: byId('github-url'),
    project: byId('project-name'),
    version: byId('version'),
    title: byId('card-title'),
    summary: byId('summary'),
    highlights: byId('highlights'),
    accent: byId('accent-color'),
  };
  const card = byId('release-card');
  const presets = [
    { id: 'aurora', name: 'Aurora', label: 'Big type', category: 'bold', layout: 'hero', accent: '#d4f873', darkA: '#182019', darkB: '#354736', lightA: '#f6ffdf', lightB: '#dceeb9', darkText: '#f7f9ed', darkMuted: '#ced5bc', lightText: '#22291c', lightMuted: '#697255' },
    { id: 'atelier', name: 'Atelier', label: 'Book cover', category: 'editorial', layout: 'editorial', accent: '#e79b62', darkA: '#30251e', darkB: '#634a34', lightA: '#fff8ed', lightB: '#ead6bb', darkText: '#fff5e8', darkMuted: '#ddc8a8', lightText: '#35271c', lightMuted: '#80664c' },
    { id: 'terminal', name: 'Terminal', label: 'Console', category: 'technical', layout: 'terminal', accent: '#83ffad', darkA: '#071711', darkB: '#16432f', lightA: '#f1fff5', lightB: '#c8f0d5', darkText: '#e9fff0', darkMuted: '#acd1b6', lightText: '#143724', lightMuted: '#4b7659' },
    { id: 'blueprint', name: 'Blueprint', label: 'Index rail', category: 'technical', layout: 'rail', accent: '#78caff', darkA: '#102a49', darkB: '#276a9c', lightA: '#f1f9ff', lightB: '#d2e7f8', darkText: '#f2faff', darkMuted: '#b9d3e8', lightText: '#193650', lightMuted: '#597890' },
    { id: 'sunset', name: 'Sunset', label: 'Color band', category: 'bold', layout: 'banner', accent: '#ffc269', darkA: '#371e3b', darkB: '#a74658', lightA: '#fff5ed', lightB: '#ffd7c1', darkText: '#fff5ef', darkMuted: '#eac8c3', lightText: '#452635', lightMuted: '#896155' },
    { id: 'ocean', name: 'Ocean', label: 'Three-up tiles', category: 'playful', layout: 'tiles', accent: '#50efd4', darkA: '#092b3a', darkB: '#126777', lightA: '#f0fffb', lightB: '#c6ece7', darkText: '#ecfffb', darkMuted: '#b6dbd5', lightText: '#173d44', lightMuted: '#577b7d' },
    { id: 'ultraviolet', name: 'Ultraviolet', label: 'Centered', category: 'bold', layout: 'centered', accent: '#ce98ff', darkA: '#21163b', darkB: '#654398', lightA: '#fbf6ff', lightB: '#e6d7ff', darkText: '#fbf5ff', darkMuted: '#d5c3e8', lightText: '#312349', lightMuted: '#77648d' },
    { id: 'mono', name: 'Mono', label: 'Swiss minimal', category: 'editorial', layout: 'minimal', accent: '#eff47d', darkA: '#111214', darkB: '#36383e', lightA: '#ffffff', lightB: '#e9e9eb', darkText: '#fff', darkMuted: '#c6c7ca', lightText: '#191a1d', lightMuted: '#64666a' },
    { id: 'citrus', name: 'Citrus', label: 'Numbered list', category: 'playful', layout: 'list', accent: '#e0ff53', darkA: '#1f3117', darkB: '#61762a', lightA: '#fcffe9', lightB: '#e1efb7', darkText: '#f8ffe9', darkMuted: '#d5e2aa', lightText: '#29371d', lightMuted: '#6a794e' },
    { id: 'rose', name: 'Rose', label: 'Pull quote', category: 'editorial', layout: 'quote', accent: '#ff9dc9', darkA: '#321a2d', darkB: '#813b69', lightA: '#fff5fa', lightB: '#f4d9e7', darkText: '#fff3f8', darkMuted: '#e3c3d2', lightText: '#472b3c', lightMuted: '#886a78' },
    { id: 'retro', name: 'Retro Arcade', label: 'Arcade marquee', category: 'playful', layout: 'arcade', accent: '#ffd166', darkA: '#19213d', darkB: '#4851a0', lightA: '#fff9e9', lightB: '#ede1b8', darkText: '#fff9e8', darkMuted: '#ded3ad', lightText: '#292a43', lightMuted: '#74715f' },
    { id: 'ember', name: 'Ember', label: 'Feature sidecar', category: 'bold', layout: 'sidecar', accent: '#ff8050', darkA: '#29140e', darkB: '#8f371d', lightA: '#fff6ed', lightB: '#f1d2b5', darkText: '#fff5ed', darkMuted: '#e7c6ab', lightText: '#48271d', lightMuted: '#8c6752' },
    { id: 'glacier', name: 'Glacier', label: 'Release timeline', category: 'technical', layout: 'timeline', accent: '#94e6ff', darkA: '#102638', darkB: '#558aa1', lightA: '#f4fcff', lightB: '#d5eef7', darkText: '#f4fcff', darkMuted: '#c1dce5', lightText: '#1d394a', lightMuted: '#678392' },
    { id: 'garden', name: 'Garden', label: 'Asymmetric', category: 'playful', layout: 'asym', accent: '#c4eb87', darkA: '#183425', darkB: '#5c7a4e', lightA: '#f7fbed', lightB: '#dce9cb', darkText: '#f5faed', darkMuted: '#ccdabd', lightText: '#283c2c', lightMuted: '#687b62' },
    { id: 'midnight', name: 'Midnight', label: 'Night-sky story', category: 'bold', layout: 'night', accent: '#c0baff', darkA: '#10172c', darkB: '#354578', lightA: '#f6f6ff', lightB: '#dfe4fa', darkText: '#f6f7ff', darkMuted: '#c3cbe2', lightText: '#202942', lightMuted: '#6b7690' },
    { id: 'confetti', name: 'Confetti', label: 'Bento blocks', category: 'playful', layout: 'bento', accent: '#ffb1de', darkA: '#302364', darkB: '#6653bd', lightA: '#fff5fb', lightB: '#ebdcff', darkText: '#fff8ff', darkMuted: '#ded2f0', lightText: '#33264f', lightMuted: '#756789' },
  ];
  const presetById = new Map(presets.map((preset) => [preset.id, preset]));
  const state = { theme: 'dark', preset: 'aurora', filter: 'all', omitted: 0, sourceLabel: '', statusTimer: 0, versionEdited: false, importing: false, readmeSections: [], readmeOwner: '', readmeRepo: '' };
  const example = {
    project: 'Northstar',
    notes: '# v1.4.0 — A calmer way to ship\n\nYour release updates now look a little more like your product.\n\n## Fresh from the oven\n- Turn release notes into a share card\n- Explore sixteen original layouts\n- Bring public release notes in from GitHub\n- Keep your writing on your own device',
  };
  const safeFonts = {
    sans: 'Arial, Helvetica, sans-serif',
    serif: 'Georgia, Times New Roman, serif',
    mono: 'Courier New, monospace',
  };

  const inlineMarkdownToText = (value) => String(value)
    .replace(/!\[([^\]]*)\]\([^)]+\)/g, '$1')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/<[^>]*>/g, '')
    .replace(/(`{1,3})(.*?)\1/g, '$2')
    .replace(/\*\*(.*?)\*\*/g, '$1')
    .replace(/__(.*?)__/g, '$1')
    .replace(/\*(.*?)\*/g, '$1')
    .replace(/_(.*?)_/g, '$1')
    .replace(/~~(.*?)~~/g, '$1')
    .replace(/\\([\\`*_{}\[\]()#+\-.!>])/g, '$1')
    .trim();
  const limitCharacters = (value, count) => Array.from(String(value)).slice(0, count).join('');

  const isGenericHeading = (text) => /^(release notes?|changelog|what'?s changed|what'?s new|highlights|features|bug fixes|fixes|improvements)$/i.test(text.trim());

  function parseReleaseNotes(markdown) {
    const lines = String(markdown || '').replace(/\r/g, '').split('\n');
    const headings = [];
    const paragraphs = [];
    const bullets = [];
    let paragraph = [];

    const flushParagraph = () => {
      if (!paragraph.length) return;
      const text = inlineMarkdownToText(paragraph.join(' '));
      if (text) paragraphs.push(text);
      paragraph = [];
    };

    for (const original of lines) {
      const line = original.trim();
      if (!line) { flushParagraph(); continue; }
      const heading = line.match(/^#{1,6}\s+(.+?)\s*#*$/);
      if (heading) { flushParagraph(); headings.push(inlineMarkdownToText(heading[1])); continue; }
      const listItem = line.match(/^(?:[-*+]\s+|\d+[.)]\s+)(?:\[[ xX]\]\s*)?(.+)$/);
      if (listItem) { flushParagraph(); const text = inlineMarkdownToText(listItem[1]); if (text) bullets.push(text); continue; }
      if (/^(?:>|---+|\*\*\*+)$/.test(line)) { flushParagraph(); continue; }
      paragraph.push(line.replace(/^>\s?/, ''));
    }
    flushParagraph();

    let title = headings.find((text) => text && !isGenericHeading(text)) || '';
    let version = '';
    if (title) {
      const versionMatch = title.match(/\bv?\d+\.\d+(?:\.\d+)?(?:[-+][\w.-]+)?\b/i);
      if (versionMatch) {
        version = versionMatch[0].toLowerCase().startsWith('v') ? versionMatch[0] : `v${versionMatch[0]}`;
        title = title.replace(versionMatch[0], '').replace(/^\s*[-–—:|]+\s*|\s*[-–—:|]+\s*$/g, '').trim();
        if (isGenericHeading(title)) title = '';
      }
    }
    if (!title) title = markdown.trim() ? 'Release update' : '';
    return { title, version, summary: paragraphs[0] || '', bullets, omitted: Math.max(0, bullets.length - 3) };
  }

  function setStatus(message, kind = '') {
    window.clearTimeout(state.statusTimer);
    const element = byId('parse-status');
    element.dataset.state = kind;
    element.textContent = message;
  }

  function announceStatus(message, kind = '') {
    window.clearTimeout(state.statusTimer);
    const element = byId('parse-status');
    element.dataset.state = kind;
    element.textContent = '';
    state.statusTimer = window.setTimeout(() => { element.textContent = message; }, 180);
  }

  function setImportStatus(message, kind = '') {
    const element = byId('import-status');
    element.dataset.state = kind;
    element.textContent = message;
  }

  function getHighlights() {
    return fields.highlights.value.split(/\r?\n/)
      .map((line) => inlineMarkdownToText(line.replace(/^\s*(?:[-*+]|\d+[.)])\s+/, '')))
      .filter(Boolean);
  }

  function omittedCount() {
    return Math.max(state.omitted, Math.max(0, getHighlights().length - 3));
  }

  function footerSourceLabel() {
    const source = String(state.sourceLabel || '').replace(/^github\.com\//i, '').trim();
    if (!source) return '';
    return Array.from(source).length > 36 ? `${limitCharacters(source, 35)}…` : source;
  }

  function contrastColor(hex) {
    const match = /^#?([\da-f]{6})$/i.exec(hex);
    if (!match) return '#20291c';
    const channels = match[1].match(/../g).map((part) => parseInt(part, 16) / 255).map((value) => (
      value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4
    ));
    const luminance = 0.2126 * channels[0] + 0.7152 * channels[1] + 0.0722 * channels[2];
    return luminance > 0.42 ? '#20291c' : '#ffffff';
  }

  function setPresetVariables(element, preset) {
    element.style.setProperty('--preset-accent', preset.accent);
    element.style.setProperty('--preset-dark-a', preset.darkA);
    element.style.setProperty('--preset-dark-b', preset.darkB);
    element.style.setProperty('--preset-light-a', preset.lightA);
    element.style.setProperty('--preset-light-b', preset.lightB);
    element.style.setProperty('--preset-dark-text', preset.darkText);
    element.style.setProperty('--preset-dark-muted', preset.darkMuted);
    element.style.setProperty('--preset-light-text', preset.lightText);
    element.style.setProperty('--preset-light-muted', preset.lightMuted);
  }

  function makePresetCards() {
    const grid = byId('preset-grid');
    const thumbParts = ['thumb-logo', 'thumb-version', 'thumb-kicker', 'thumb-title', 'thumb-copy', 'thumb-mark', 'thumb-tile-one', 'thumb-tile-two', 'thumb-tile-three'];
    for (const preset of presets) {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'preset-choice';
      button.dataset.preset = preset.id;
      button.dataset.category = preset.category;
      button.dataset.layout = preset.layout;
      button.setAttribute('aria-pressed', 'false');
      button.setAttribute('aria-label', `${preset.name}, ${preset.label} layout`);
      setPresetVariables(button, preset);

      const thumb = document.createElement('span');
      thumb.className = 'template-thumb';
      thumb.dataset.layout = preset.layout;
      thumb.setAttribute('aria-hidden', 'true');
      for (const part of thumbParts) {
        const shape = document.createElement('i');
        shape.className = part;
        thumb.append(shape);
      }

      const label = document.createElement('span');
      label.className = 'template-card-label';
      const name = document.createElement('b');
      name.textContent = preset.name;
      const layoutName = document.createElement('small');
      layoutName.textContent = preset.label;
      label.append(name, layoutName);
      button.append(thumb, label);
      grid.append(button);
      button.addEventListener('click', () => selectPreset(preset.id));
    }
    updatePresetFilter('all');
    selectPreset('aurora', false);
  }

  function updatePresetFilter(filter) {
    state.filter = filter;
    let count = 0;
    document.querySelectorAll('.preset-choice').forEach((button) => {
      const visible = filter === 'all' || button.dataset.category === filter;
      button.hidden = !visible;
      if (visible) count += 1;
    });
    document.querySelectorAll('.filter-chip').forEach((button) => {
      const active = button.dataset.filter === filter;
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', String(active));
    });
    byId('preset-count').textContent = filter === 'all' ? String(presets.length) : `${count} of ${presets.length}`;
  }

  function selectPreset(id, announce = true) {
    const preset = presetById.get(id);
    if (!preset) return;
    state.preset = preset.id;
    fields.accent.value = preset.accent;
    document.querySelectorAll('.preset-choice').forEach((button) => {
      const selected = button.dataset.preset === preset.id;
      button.classList.toggle('active', selected);
      button.setAttribute('aria-pressed', String(selected));
    });
    render();
    if (announce) showToast(`${preset.name} is on the canvas. Tweak it or keep browsing.`);
  }

  function render() {
    const project = fields.project.value.trim();
    const version = fields.version.value.trim();
    const title = fields.title.value.trim();
    const summary = fields.summary.value.trim();
    const highlights = getHighlights().slice(0, 3);
    const hasContent = Boolean(fields.notes.value.trim() || title || summary || highlights.length);
    const preset = presetById.get(state.preset) || presets[0];

    byId('preview-project').textContent = project || 'Your project';
    byId('project-mark').textContent = Array.from(project || 'R')[0].toLocaleUpperCase();
    byId('preview-version').textContent = version ? version.toUpperCase() : 'NEW RELEASE';
    byId('preview-title').textContent = title;
    byId('preview-summary').textContent = summary;
    byId('preview-repo').textContent = footerSourceLabel();
    byId('highlight-count').textContent = `${highlights.length} / 3`;
    byId('preview-highlights').replaceChildren(...highlights.map((text) => {
      const item = document.createElement('li');
      item.textContent = text;
      return item;
    }));

    const omittedNote = byId('omitted-note');
    const omitted = omittedCount();
    omittedNote.hidden = omitted === 0;
    omittedNote.textContent = omitted === 1 ? '+ 1 more highlight in your notes' : `+ ${omitted} more highlights in your notes`;

    card.dataset.preset = preset.id;
    card.dataset.layout = preset.layout;
    setPresetVariables(card, preset);
    card.classList.toggle('theme-light', state.theme === 'light');
    card.classList.toggle('theme-dark', state.theme === 'dark');
    card.style.setProperty('--card-accent', fields.accent.value);
    card.style.setProperty('--card-accent-ink', contrastColor(fields.accent.value));
    byId('preview-image').src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(createSvg())}`;
    card.hidden = !hasContent;
    byId('empty-state').hidden = hasContent;
    byId('export-png').disabled = !hasContent;
    byId('export-svg').disabled = !hasContent;
  }

  function switchSource(source) {
    document.querySelectorAll('.source-tab').forEach((button) => {
      const selected = button.dataset.sourceTab === source;
      button.classList.toggle('active', selected);
      button.setAttribute('aria-pressed', String(selected));
    });
    document.querySelectorAll('.source-panel').forEach((panel) => {
      panel.hidden = panel.dataset.sourcePanel !== source;
    });
    if (source === 'github') fields.githubUrl.focus();
  }

  function readSource({ announce = true } = {}) {
    const source = fields.notes.value;
    const parsed = parseReleaseNotes(source);
    state.omitted = parsed.omitted;

    if (!source.trim()) {
      fields.title.value = '';
      fields.summary.value = '';
      fields.highlights.value = '';
      state.omitted = 0;
      state.sourceLabel = '';
      if (!state.versionEdited) fields.version.value = '';
      setStatus('Add notes or load the sample to begin.');
      render();
      return;
    }

    fields.title.value = limitCharacters(parsed.title, 62);
    fields.summary.value = limitCharacters(parsed.summary, 150);
    fields.highlights.value = parsed.bullets.slice(0, 3).map((item) => Array.from(item).slice(0, 79).join('')).join('\n');
    if (!state.versionEdited) fields.version.value = parsed.version;
    state.sourceLabel = '';

    const pieces = [];
    if (parsed.title) pieces.push('a title');
    if (parsed.summary) pieces.push('an intro');
    if (parsed.bullets.length) pieces.push(`${Math.min(3, parsed.bullets.length)} highlight${parsed.bullets.length === 1 ? '' : 's'}`);
    const message = pieces.length
      ? `Found ${pieces.join(', ')}${parsed.omitted ? ` · ${parsed.omitted} more in your notes` : ''}. Fine-tune any of it below.`
      : 'Notes are in. Add a title or highlight if you like.';
    if (announce) announceStatus(message, pieces.length ? 'success' : '');
    else setStatus(message, pieces.length ? 'success' : '');
    render();
  }

  function useExample({ focus = false } = {}) {
    switchSource('markdown');
    fields.project.value = example.project;
    fields.notes.value = example.notes;
    state.versionEdited = false;
    state.sourceLabel = '';
    readSource();
    if (focus) fields.notes.focus();
  }

  function parseGitHubReleaseUrl(raw) {
    let url;
    try { url = new URL(String(raw).trim()); } catch { throw new Error('Paste a valid GitHub URL to get started.'); }
    if (url.protocol !== 'https:' || url.username || url.password || url.port) {
      throw new Error('Use a regular HTTPS GitHub link.');
    }

    const host = url.hostname.toLowerCase();
    if (host !== 'github.com' && host !== 'api.github.com') {
      throw new Error('For privacy, this importer accepts links from github.com only.');
    }

    const segments = url.pathname.split('/').filter(Boolean);
    const decode = (segment) => {
      try { return decodeURIComponent(segment); } catch { throw new Error('That GitHub URL does not look quite right.'); }
    };
    let owner;
    let repo;
    let tag = '';
    let isRepositoryUrl = false;

    if (host === 'api.github.com') {
      if (segments.length < 5 || decode(segments[0]) !== 'repos' || decode(segments[3]) !== 'releases') {
        throw new Error('Use a GitHub release API URL ending in /releases/latest or /releases/tags/TAG.');
      }
      owner = decode(segments[1]);
      repo = decode(segments[2]).replace(/\.git$/i, '');
      if (segments.length === 5 && decode(segments[4]) === 'latest') tag = '';
      else if (segments.length === 6 && decode(segments[4]) === 'tags') tag = decode(segments[5]);
      else throw new Error('Use a release API URL ending in /releases/latest or /releases/tags/TAG.');
    } else {
      if (segments.length < 2) throw new Error('Add a repository URL, a release page, or a GitHub API URL.');
      owner = decode(segments[0]);
      repo = decode(segments[1]).replace(/\.git$/i, '');
      const tail = segments.slice(2).map(decode);
      if (tail.length === 0) {
        isRepositoryUrl = true;
        tag = '';
      } else if ((tail.length === 1 && tail[0] === 'releases') || (tail.length === 2 && tail[0] === 'releases' && tail[1] === 'latest')) {
        tag = '';
      } else if (tail.length === 3 && tail[0] === 'releases' && tail[1] === 'tag') {
        tag = tail[2];
      } else if (tail.length === 2 && tail[0] === 'releases' && tail[1] !== 'latest') {
        tag = tail[1];
      } else {
        throw new Error('Use a repository link or a GitHub release page such as /owner/repo/releases/tag/v1.2.3.');
      }
    }

    if (!/^[\w.-]{1,100}$/.test(owner) || !/^[\w.-]{1,100}$/.test(repo) || owner === '.' || repo === '..') {
      throw new Error('That repository owner or name is not valid.');
    }
    if (tag.length > 255 || /[\u0000-\u001f]/.test(tag)) throw new Error('That release tag is too long or contains unsupported characters.');

    const encodedOwner = encodeURIComponent(owner);
    const encodedRepo = encodeURIComponent(repo);
    const apiUrl = tag
      ? `https://api.github.com/repos/${encodedOwner}/${encodedRepo}/releases/tags/${encodeURIComponent(tag)}`
      : `https://api.github.com/repos/${encodedOwner}/${encodedRepo}/releases/latest`;
    return { apiUrl, owner, repo, tag, isRepositoryUrl };
  }

  function rateLimitHint(response) {
    const reset = Number(response.headers.get('x-ratelimit-reset'));
    if (Number.isFinite(reset) && reset > 0) {
      const time = new Date(reset * 1000).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
      return ` Try again after ${time}.`;
    }
    return ' Try again later.';
  }

  function githubRequestError(response, notFoundMessage) {
    const error = new Error(response.status === 404
      ? notFoundMessage
      : response.status === 403 || response.status === 429
        ? `GitHub is limiting requests from this network.${rateLimitHint(response)}`
        : `GitHub returned ${response.status}. You can still paste the Markdown instead.`);
    error.status = response.status;
    return error;
  }

  async function requestGitHubJson(apiUrl, signal, notFoundMessage) {
    const response = await fetch(apiUrl, {
      method: 'GET',
      mode: 'cors',
      credentials: 'omit',
      headers: {
        Accept: 'application/vnd.github+json',
        'X-GitHub-Api-Version': '2026-03-10',
      },
      signal,
    });
    if (!response.ok) throw githubRequestError(response, notFoundMessage);
    return response.json();
  }

  function decodeBase64Utf8(content) {
    const binary = window.atob(content.replace(/\s/g, ''));
    const bytes = Uint8Array.from(binary, (character) => character.charCodeAt(0));
    return new TextDecoder('utf-8').decode(bytes);
  }

  function parseReadmeSections(markdown, repoName) {
    const sections = [];
    let title = 'Overview';
    let level = 0;
    let lines = [];
    let inFence = false;
    const flush = () => {
      const body = lines.join('\n').trim();
      if (body) sections.push({ title, level, markdown: body });
      lines = [];
    };
    for (const line of String(markdown || '').replace(/\r/g, '').split('\n')) {
      if (/^\s{0,3}(?:```|~~~)/.test(line)) {
        inFence = !inFence;
        lines.push(line);
        continue;
      }
      const heading = !inFence && line.match(/^\s{0,3}(#{1,6})\s+(.+?)\s*#*\s*$/);
      if (heading) {
        flush();
        title = inlineMarkdownToText(heading[2]) || 'Section';
        level = heading[1].length;
      } else {
        lines.push(line);
      }
    }
    flush();

    const ignored = /^(?:contents|table of contents|license|licence|contributing|contribute|code of conduct|security|security policy|authors?|contributors?|credits?|acknowledg(?:e)?ments?|sponsors?)$/i;
    const projectTitle = String(repoName || '').replace(/[_.-]+/g, ' ').trim().toLowerCase();
    const usable = sections
      .filter((section) => !ignored.test(section.title.trim()) && section.markdown.trim())
      .map((section, index) => {
        const titleText = section.title.replace(/[_.-]+/g, ' ').trim();
        if ((section.level === 1 && index === 0) || titleText.toLowerCase() === projectTitle || /^readme$/i.test(titleText)) {
          section.title = 'Project overview';
        }
        const linesInSection = section.markdown.split('\n');
        const previewLine = linesInSection.find((item) => {
          const value = item.trim();
          return value && !/^#{1,6}\s/.test(value) && !/^\s*```/.test(value) && !/^---+$/.test(value);
        }) || '';
        const preview = limitCharacters(inlineMarkdownToText(previewLine) || 'Read this section', 112);
        const bulletCount = (section.markdown.match(/^\s*(?:[-*+]\s+|\d+[.)]\s+)/gm) || []).length;
        return { ...section, preview, bulletCount, id: index };
      });
    return usable;
  }

  function updateReadmeSelection() {
    const checkboxes = Array.from(byId('readme-section-list').querySelectorAll('input[type="checkbox"]'));
    const selectedCount = checkboxes.filter((checkbox) => checkbox.checked).length;
    checkboxes.forEach((checkbox) => { checkbox.disabled = !checkbox.checked && selectedCount >= 3; });
    byId('readme-selection-count').textContent = `${selectedCount} / 3`;
    byId('use-readme-sections').disabled = selectedCount === 0;
  }

  function renderReadmePicker(target, markdown) {
    const sections = parseReadmeSections(markdown, target.repo);
    if (!sections.length) {
      switchSource('markdown');
      fields.project.value = limitCharacters(target.repo, 28);
      fields.notes.value = markdown;
      fields.version.value = 'PROJECT';
      state.versionEdited = true;
      readSource({ announce: false });
      state.sourceLabel = `README · ${target.owner}/${target.repo}`;
      if (fields.title.value === 'Release update') fields.title.value = `About ${target.repo}`;
      render();
      byId('details-editor').open = true;
      setImportStatus('No headings found, so the README is ready to edit as Markdown.', 'success');
      return;
    }

    state.readmeSections = sections;
    state.readmeOwner = target.owner;
    state.readmeRepo = target.repo;
    const preferred = sections.filter((section) => /overview|about|features|highlights|what.?s new|what.?s changed|capabilities/i.test(section.title));
    const defaults = (preferred.length ? preferred : sections).slice(0, 2).map((section) => section.id);
    const list = byId('readme-section-list');
    list.replaceChildren();
    sections.forEach((section) => {
      const label = document.createElement('label');
      label.className = 'readme-section-choice';
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.value = String(section.id);
      checkbox.checked = defaults.includes(section.id);
      checkbox.addEventListener('change', updateReadmeSelection);
      const copy = document.createElement('span');
      copy.className = 'readme-section-copy';
      const heading = document.createElement('b');
      heading.textContent = section.title;
      const preview = document.createElement('small');
      preview.textContent = section.bulletCount ? `${section.preview} · ${section.bulletCount} list items` : section.preview;
      copy.append(heading, preview);
      label.append(checkbox, copy);
      list.append(label);
    });
    updateReadmeSelection();
    byId('readme-picker-title').textContent = `${target.repo} README`;
    byId('readme-picker').hidden = false;
    setImportStatus(`README loaded from ${target.owner}/${target.repo}. Choose up to three sections.`, 'success');
  }

  async function fetchReadme(target, signal) {
    const apiUrl = `https://api.github.com/repos/${encodeURIComponent(target.owner)}/${encodeURIComponent(target.repo)}/readme`;
    const readme = await requestGitHubJson(apiUrl, signal, 'No public README was found for this repository.');
    if (!readme || readme.encoding !== 'base64' || typeof readme.content !== 'string') {
      throw new Error('GitHub could not provide this README as text. Try a smaller README or paste its Markdown.');
    }
    if (Number(readme.size) > 1024 * 1024) {
      throw new Error('This README is over 1 MB. Paste the part you want to use instead.');
    }
    const markdown = decodeBase64Utf8(readme.content);
    if (!markdown.trim()) throw new Error('This repository README is empty.');
    renderReadmePicker(target, markdown);
  }

  async function importReadmeFromUrl() {
    if (state.importing) return;
    let target;
    try { target = parseGitHubReleaseUrl(fields.githubUrl.value); }
    catch (error) { setImportStatus(error.message, 'error'); fields.githubUrl.focus(); return; }

    const releaseButton = byId('import-release');
    const readmeButton = byId('fetch-readme');
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 15000);
    state.importing = true;
    state.readmeSections = [];
    releaseButton.disabled = true;
    readmeButton.disabled = true;
    releaseButton.setAttribute('aria-busy', 'true');
    readmeButton.setAttribute('aria-busy', 'true');
    byId('readme-picker').hidden = true;
    setImportStatus('Fetching the public README directly from GitHub…', 'loading');
    try {
      await fetchReadme(target, controller.signal);
      if (!state.readmeSections.length) showToast('README ready to edit. Make it your own.');
      else showToast('README sections are ready. Pick the parts you want on your card.');
    } catch (error) {
      if (error.name === 'AbortError') setImportStatus('GitHub took too long to reply. Try again or paste the Markdown instead.', 'error');
      else if (error instanceof TypeError) setImportStatus('Could not reach GitHub. Check your connection, or paste the Markdown directly.', 'error');
      else setImportStatus(error.message || 'Could not fetch that README.', 'error');
    } finally {
      window.clearTimeout(timeout);
      state.importing = false;
      releaseButton.disabled = false;
      readmeButton.disabled = false;
      releaseButton.removeAttribute('aria-busy');
      readmeButton.removeAttribute('aria-busy');
    }
  }

  function useReadmeSections() {
    const selectedIds = Array.from(byId('readme-section-list').querySelectorAll('input[type="checkbox"]:checked'))
      .map((checkbox) => Number(checkbox.value));
    const selected = state.readmeSections.filter((section) => selectedIds.includes(section.id));
    if (!selected.length) return;

    const markdown = selected.map((section) => `## ${section.title}\n\n${section.markdown}`).join('\n\n');
    switchSource('markdown');
    fields.project.value = limitCharacters(state.readmeRepo, 28);
    fields.version.value = 'PROJECT';
    fields.notes.value = markdown;
    state.versionEdited = true;
    readSource({ announce: false });
    fields.title.value = limitCharacters(`About ${state.readmeRepo}`, 62);
    state.sourceLabel = `README · ${state.readmeOwner}/${state.readmeRepo}`;
    render();
    byId('readme-picker').hidden = true;
    byId('details-editor').open = true;
    setImportStatus(`Using ${selected.length} README section${selected.length === 1 ? '' : 's'} from ${state.readmeOwner}/${state.readmeRepo}. Edit the card freely.`, 'success');
    showToast('Project card ready from your selected README sections.');
  }

  async function importRelease() {
    if (state.importing) return;
    let target;
    try { target = parseGitHubReleaseUrl(fields.githubUrl.value); }
    catch (error) { setImportStatus(error.message, 'error'); fields.githubUrl.focus(); return; }

    const button = byId('import-release');
    const readmeButton = byId('fetch-readme');
    const label = button.querySelector('span');
    const originalLabel = label.textContent;
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 15000);
    state.importing = true;
    state.readmeSections = [];
    button.disabled = true;
    readmeButton.disabled = true;
    button.setAttribute('aria-busy', 'true');
    readmeButton.setAttribute('aria-busy', 'true');
    byId('readme-picker').hidden = true;
    label.textContent = 'Fetching…';
    setImportStatus('Fetching the public release directly from GitHub…', 'loading');

    try {
      let release;
      try {
        release = await requestGitHubJson(target.apiUrl, controller.signal, 'No public release was found at this URL.');
      } catch (error) {
        if (target.isRepositoryUrl && error.status === 404) {
          setImportStatus('No published release found. Loading this repository’s README…', 'loading');
          await fetchReadme(target, controller.signal);
          if (state.readmeSections.length) showToast('No release yet. Pick README sections to make a project card.');
          else showToast('README ready to edit. Make it your own.');
          return;
        }
        if (error.status === 404) {
          throw new Error('No public release found. Try a repository URL to choose from its README, or paste your notes.');
        }
        throw error;
      }

      if (!release || typeof release !== 'object' || typeof release.tag_name !== 'string') {
        throw new Error('GitHub sent an unexpected response. Try pasting the Markdown instead.');
      }
      const notes = typeof release.body === 'string' ? release.body : '';
      switchSource('markdown');
      fields.project.value = target.repo.slice(0, 28);
      fields.notes.value = notes;
      state.versionEdited = false;
      readSource({ announce: false });
      state.sourceLabel = `github.com/${target.owner}/${target.repo}`;
      fields.version.value = limitCharacters(release.tag_name, 20);
      if (release.name && release.name.trim() && release.name.trim() !== release.tag_name) {
        fields.title.value = limitCharacters(release.name.trim(), 62);
      } else if (!fields.title.value || fields.title.value === 'Release update') {
        fields.title.value = limitCharacters(release.name?.trim() || `Release ${release.tag_name}`, 62);
      }
      render();
      const releaseKind = target.tag ? `release ${release.tag_name}` : `latest release ${release.tag_name}`;
      setImportStatus(`Imported ${releaseKind} from ${target.owner}/${target.repo}. Edit it freely before you export.`, 'success');
      byId('details-editor').open = true;
      showToast('Release notes found. Your card is ready for a little styling.');
    } catch (error) {
      if (error.name === 'AbortError') setImportStatus('GitHub took too long to reply. Try again or paste your notes instead.', 'error');
      else if (error instanceof TypeError) setImportStatus('Could not reach GitHub. Check your connection, or paste the Markdown directly.', 'error');
      else setImportStatus(error.message || 'Could not import that release. Paste the Markdown instead.', 'error');
    } finally {
      window.clearTimeout(timeout);
      state.importing = false;
      button.disabled = false;
      readmeButton.disabled = false;
      button.removeAttribute('aria-busy');
      readmeButton.removeAttribute('aria-busy');
      label.textContent = originalLabel;
    }
  }

  function xmlEscape(text) {
    return String(text).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;' }[char]));
  }

  function wrapText(text, maxCharacters, maxLines = 2) {
    const words = String(text).trim().split(/\s+/).filter(Boolean);
    const lines = [];
    let current = '';
    for (const word of words) {
      if (Array.from(word).length > maxCharacters) {
        if (current) { lines.push(current); current = ''; }
        const characters = Array.from(word);
        while (characters.length > maxCharacters) lines.push(characters.splice(0, maxCharacters).join(''));
        current = characters.join('');
        continue;
      }
      if (current && `${current} ${word}`.length > maxCharacters) { lines.push(current); current = word; }
      else current = current ? `${current} ${word}` : word;
    }
    if (current) lines.push(current);
    if (lines.length > maxLines) {
      lines.length = maxLines;
      const finalLine = Array.from(lines[maxLines - 1].replace(/[\s.,:;!?-]+$/, ''));
      lines[maxLines - 1] = `${finalLine.slice(0, Math.max(0, maxCharacters - 1)).join('')}…`;
    }
    return lines;
  }

  function svgText(text, x, y, className, { chars = 34, lines = 2, size = 24, anchor = 'start', font = 'sans', lineHeight = 1.13 } = {}) {
    const rows = wrapText(text, chars, lines);
    if (!rows.length) return '';
    const tspans = rows.map((line, index) => `<tspan x="${x}" dy="${index === 0 ? 0 : `${lineHeight}em`}">${xmlEscape(line)}</tspan>`).join('');
    return `<text x="${x}" y="${y}" class="${className}" text-anchor="${anchor}" style="font-size:${size}px;font-family:${safeFonts[font]}">${tspans}</text>`;
  }

  function svgList(items, { x, y, chars = 32, lineGap = 45, fontSize = 17, layout = 'plain', width = 300 } = {}) {
    let markup = '';
    let cursor = y;
    items.forEach((item, index) => {
      const rows = wrapText(item, chars, 2);
      const height = Math.max(1, rows.length) * 22 + 15;
      if (layout === 'tile') {
        markup += `<rect x="${x}" y="${cursor - 27}" width="${width}" height="${Math.max(62, height + 20)}" rx="14" class="tile-box"/>`;
        markup += `<path d="M${x + 18} ${cursor - 4}h17" stroke="${fields.accent.value}" stroke-width="3" stroke-linecap="round"/>`;
        markup += svgText(item, x + 18, cursor + 20, 'list-text', { chars, lines: 2, size: fontSize });
        cursor += Math.max(lineGap, height + 12);
      } else if (layout === 'number') {
        markup += `<text x="${x}" y="${cursor}" class="list-index">${String(index + 1).padStart(2, '0')}</text>`;
        markup += svgText(item, x + 46, cursor, 'list-text', { chars, lines: 2, size: fontSize });
        cursor += lineGap;
      } else if (layout === 'timeline') {
        markup += `<circle cx="${x}" cy="${cursor - 5}" r="8" class="timeline-dot"/><path d="M${x} ${cursor + 8}v${lineGap - 16}" class="timeline-line"/>`;
        markup += svgText(item, x + 30, cursor, 'list-text', { chars, lines: 2, size: fontSize });
        cursor += lineGap;
      } else {
        markup += `<circle cx="${x}" cy="${cursor - 5}" r="4.5" fill="${fields.accent.value}"/>`;
        markup += svgText(item, x + 17, cursor, 'list-text', { chars, lines: 2, size: fontSize });
        cursor += Math.max(lineGap, height);
      }
    });
    return markup;
  }

  function presetArtwork(id, accent, text) {
    const a = xmlEscape(accent);
    const t = xmlEscape(text);
    const marks = {
      aurora: `<circle cx="1080" cy="132" r="245" fill="url(#glow)"/><circle cx="1080" cy="320" r="220" fill="none" stroke="${a}" stroke-opacity=".32"/><circle cx="1080" cy="320" r="168" fill="none" stroke="${a}" stroke-opacity=".14"/>`,
      atelier: `<path d="M72 0v630" stroke="${a}" stroke-width="6"/><path d="M89 80h130M89 96h85" stroke="${t}" stroke-opacity=".24" stroke-width="2"/>`,
      terminal: `<rect x="798" y="181" width="336" height="286" rx="17" fill="#000" fill-opacity=".12" stroke="${a}" stroke-opacity=".36"/><path d="M798 223h336" stroke="${a}" stroke-opacity=".25"/><circle cx="822" cy="202" r="5" fill="${a}"/><circle cx="842" cy="202" r="5" fill="${a}" fill-opacity=".48"/>`,
      blueprint: `<path d="M34 42h226v500H34z" fill="none" stroke="${a}" stroke-opacity=".3" stroke-dasharray="8 8"/><path d="M78 42v500M122 42v500M166 42v500M210 42v500M34 86h226M34 130h226M34 174h226M34 218h226M34 262h226M34 306h226M34 350h226M34 394h226M34 438h226M34 482h226" stroke="${t}" stroke-opacity=".07"/>`,
      sunset: `<circle cx="1070" cy="405" r="184" fill="url(#glow)"/><circle cx="1070" cy="405" r="117" fill="${a}" fill-opacity=".2"/><path d="M953 405h234M974 438h193M1000 471h140" stroke="${t}" stroke-opacity=".48" stroke-width="8"/>`,
      ocean: `<path d="M0 474c130-85 211 83 342 0s212 82 343 0 212 82 343 0 212 83 343 0v200H0z" fill="${a}" fill-opacity=".09"/><path d="M0 502c130-85 211 83 342 0s212 82 343 0 212 82 343 0 212 83 343 0M0 542c130-85 211 83 342 0s212 82 343 0 212 82 343 0 212 83 343 0" fill="none" stroke="${a}" stroke-opacity=".3" stroke-width="3"/>`,
      ultraviolet: `<circle cx="604" cy="312" r="240" fill="url(#glow)"/><circle cx="604" cy="312" r="208" fill="none" stroke="${a}" stroke-opacity=".24"/><circle cx="604" cy="312" r="174" fill="none" stroke="${a}" stroke-opacity=".14"/>`,
      mono: `<path d="M884 74h220v220H884z" fill="none" stroke="${a}" stroke-width="2"/><path d="M907 97h174v174H907z" fill="${a}" fill-opacity=".08" stroke="${a}" stroke-width="7"/>`,
      citrus: `<path d="M850 610 1130 20M910 630l280-590M800 540l250-520M990 630l210-450" stroke="${a}" stroke-opacity=".18" stroke-width="25"/>`,
      rose: `<path d="M0 476c160-110 299-103 424 5" fill="none" stroke="${a}" stroke-opacity=".38" stroke-width="3"/><text x="774" y="370" fill="${a}" fill-opacity=".12" font-family="Georgia,serif" font-size="240">“</text>`,
      retro: `<path d="M833 431h38v-38h38v-38h38v-38h38v-38h38v-38h38" fill="none" stroke="${a}" stroke-opacity=".6" stroke-width="10" stroke-linejoin="round"/><rect x="1034" y="116" width="21" height="21" fill="${a}"/><rect x="1090" y="163" width="13" height="13" fill="${a}" fill-opacity=".62"/>`,
      ember: `<path d="M824 630 1110 0h90v630z" fill="${a}" fill-opacity=".09"/><path d="M0 0h1200" stroke="${a}" stroke-width="8"/><circle cx="1020" cy="297" r="164" fill="url(#glow)"/>`,
      glacier: `<path d="M14 34h254v520H14z" fill="none" stroke="${a}" stroke-opacity=".35"/><path d="M269 86h50v448h-50" fill="none" stroke="${t}" stroke-opacity=".13"/>`,
      garden: `<path d="M976 470c-8-155 49-275 167-364M1020 354c-77-80-157-96-235-48 45 93 126 112 235 48ZM1060 260c68-96 151-124 249-82-29 108-112 135-249 82Z" fill="${a}" fill-opacity=".15" stroke="${a}" stroke-opacity=".38" stroke-width="3"/>`,
      midnight: `<g fill="${a}" fill-opacity=".8"><circle cx="891" cy="104" r="3"/><circle cx="1015" cy="153" r="2"/><circle cx="1122" cy="250" r="3"/><circle cx="969" cy="336" r="2"/><circle cx="1146" cy="441" r="2"/><circle cx="1040" cy="527" r="3"/></g><path d="m1039 77 10 20 22 3-16 15 4 22-20-11-20 11 4-22-16-15 22-3z" fill="${a}" fill-opacity=".5"/>`,
      confetti: `<circle cx="1025" cy="112" r="110" fill="${a}" fill-opacity=".09"/><circle cx="1114" cy="489" r="137" fill="${a}" fill-opacity=".1"/><rect x="992" y="246" width="20" height="20" rx="5" fill="${a}"/><rect x="1093" y="325" width="13" height="13" rx="3" fill="${a}" fill-opacity=".6"/><path d="m911 174 9 18 20 2-14 13 4 19-19-9-17 9 3-19-14-13 20-2z" fill="${a}" fill-opacity=".7"/>`,
    };
    return marks[id] || marks.aurora;
  }

  function createSvg() {
    const preset = presetById.get(state.preset) || presets[0];
    const dark = state.theme === 'dark';
    const palette = dark
      ? { start: preset.darkA, end: preset.darkB, text: preset.darkText, muted: preset.darkMuted }
      : { start: preset.lightA, end: preset.lightB, text: preset.lightText, muted: preset.lightMuted };
    const accent = fields.accent.value;
    const project = fields.project.value.trim() || 'Your project';
    const version = fields.version.value.trim() || 'New release';
    const title = fields.title.value.trim() || 'Release update';
    const summary = fields.summary.value.trim();
    const highlights = getHighlights().slice(0, 3);
    const first = xmlEscape(Array.from(project)[0].toLocaleUpperCase());
    const titleFont = ['editorial', 'quote'].includes(preset.layout) ? 'serif' : ['terminal', 'minimal', 'arcade', 'list'].includes(preset.layout) ? 'mono' : 'sans';
    const artwork = presetArtwork(preset.id, accent, palette.text);
    const header = `<rect x="82" y="56" width="43" height="43" rx="13" fill="${accent}"/><text x="103.5" y="85" text-anchor="middle" font-family="Arial,sans-serif" font-size="23" font-weight="700" fill="${contrastColor(accent)}">${first}</text><text x="140" y="84" class="project">${xmlEscape(project)}</text><rect x="976" y="62" width="142" height="32" rx="16" class="version-box"/><text x="1047" y="83" text-anchor="middle" class="version">${xmlEscape(version.toUpperCase())}</text>`;
    const eyebrow = (x, y, anchor = 'start', label = 'THE LATEST &amp; GREATEST') => `<path d="M${x} ${y - 4}h16" stroke="${accent}" stroke-width="2"/><text x="${x + 27}" y="${y}" text-anchor="${anchor}" class="eyebrow">${label}</text>`;
    const titleAt = (x, y, chars, size, anchor = 'start', lines = 2) => svgText(title, x, y, 'title', { chars, lines, size, anchor, font: titleFont, lineHeight: 1.02 });
    const summaryAt = (x, y, chars, size, anchor = 'start', lines = 2) => svgText(summary, x, y, 'summary', { chars, lines, size, anchor, lineHeight: 1.22 });
    const bulletRow = (items, y, xStart = 90, width = 320, style = 'tile') => {
      const gap = width + 23;
      return items.map((item, index) => svgList([item], { x: xStart + index * gap, y, chars: 26, lineGap: 45, fontSize: 16, layout: style, width })).join('');
    };
    let content = '';

    switch (preset.layout) {
      case 'hero':
        content = `${header}${eyebrow(88, 174)}${titleAt(88, 285, 22, 83)}${summaryAt(92, 438, 74, 21)}${bulletRow(highlights, 532, 90, 322, 'tile')}`;
        break;
      case 'editorial':
        content = `${header}${eyebrow(130, 180, 'start', 'A NOTE FROM THE RELEASE DESK')}${titleAt(130, 292, 24, 72)}${summaryAt(133, 378, 66, 19)}${bulletRow(highlights, 507, 105, 320, 'tile')}`;
        break;
      case 'terminal':
        content = `${header}${eyebrow(88, 174, 'start', '&gt; RELEASE_NOTES')}${titleAt(88, 268, 25, 55)}${summaryAt(92, 326, 46, 18)}${svgList(highlights, { x: 837, y: 274, chars: 28, lineGap: 62, fontSize: 16, layout: 'tile', width: 260 })}`;
        break;
      case 'rail':
        content = `<rect x="276" y="55" width="2" height="510" fill="${accent}" fill-opacity=".56"/><rect x="82" y="56" width="43" height="43" rx="13" fill="${accent}"/><text x="103.5" y="85" text-anchor="middle" font-family="Arial,sans-serif" font-size="23" font-weight="700" fill="${contrastColor(accent)}">${first}</text><text x="82" y="127" class="project">${xmlEscape(project)}</text><text x="82" y="157" class="version">${xmlEscape(version.toUpperCase())}</text>${eyebrow(332, 178, 'start', 'FIELD NOTES / RELEASE')}${titleAt(332, 275, 24, 59)}${summaryAt(336, 344, 55, 19)}${svgList(highlights, { x: 350, y: 426, chars: 45, lineGap: 44, fontSize: 16, layout: 'plain' })}`;
        break;
      case 'banner':
        content = `${header}<path d="M80 166h1030" stroke="${accent}" stroke-width="2" stroke-opacity=".4"/>${eyebrow(88, 211)}${titleAt(88, 332, 21, 92)}${summaryAt(92, 403, 78, 19)}${bulletRow(highlights, 509, 90, 322, 'tile')}`;
        break;
      case 'tiles':
        content = `${header}${eyebrow(88, 169)}${titleAt(88, 255, 29, 61)}${summaryAt(92, 306, 84, 18)}${bulletRow(highlights, 420, 88, 325, 'tile')}`;
        break;
      case 'centered':
        content = `<text x="600" y="82" text-anchor="middle" class="project">${xmlEscape(project)}</text><rect x="965" y="55" width="145" height="32" rx="16" class="version-box"/><text x="1037" y="76" text-anchor="middle" class="version">${xmlEscape(version.toUpperCase())}</text>${eyebrow(458, 180, 'middle', 'A FRESH RELEASE')}${titleAt(600, 281, 28, 72, 'middle')}${summaryAt(600, 345, 70, 20, 'middle')}${bulletRow(highlights, 471, 75, 338, 'tile')}`;
        break;
      case 'minimal':
        content = `${header}${eyebrow(88, 196, 'start', 'A CLEARER KIND OF CHANGE')}${titleAt(88, 326, 22, 80)}<path d="M88 367h88" stroke="${accent}" stroke-width="3"/>${summaryAt(92, 405, 72, 20)}${svgList(highlights, { x: 99, y: 496, chars: 83, lineGap: 40, fontSize: 16, layout: 'number' })}`;
        break;
      case 'list':
        content = `${header}${eyebrow(88, 164, 'start', 'WHAT’S CHANGED')}${titleAt(88, 248, 28, 57)}${summaryAt(92, 294, 86, 17)}${svgList(highlights, { x: 98, y: 397, chars: 82, lineGap: 53, fontSize: 18, layout: 'number' })}`;
        break;
      case 'quote':
        content = `${header}${eyebrow(88, 185, 'start', 'A WORD FROM THIS RELEASE')}${titleAt(88, 294, 20, 69)}<text x="702" y="279" class="quote-mark">“</text>${summaryAt(735, 321, 32, 28, 'start', 3)}${bulletRow(highlights, 513, 88, 323, 'tile')}`;
        break;
      case 'arcade':
        content = `${header}${eyebrow(465, 169, 'middle', 'LEVEL UP')}${titleAt(600, 265, 24, 67, 'middle')}${summaryAt(600, 321, 60, 18, 'middle')}${bulletRow(highlights, 445, 75, 338, 'tile')}`;
        break;
      case 'sidecar':
        content = `${header}${eyebrow(88, 190)}${titleAt(88, 312, 21, 73)}${summaryAt(92, 385, 42, 19)}<rect x="780" y="163" width="340" height="370" rx="22" class="sidecar-box"/>${svgList(highlights, { x: 813, y: 252, chars: 31, lineGap: 74, fontSize: 17, layout: 'plain' })}`;
        break;
      case 'timeline':
        content = `${header}${eyebrow(88, 161, 'start', 'THE RELEASE, AT A GLANCE')}${titleAt(88, 243, 26, 57)}${summaryAt(92, 288, 80, 16)}${svgList(highlights, { x: 111, y: 386, chars: 75, lineGap: 58, fontSize: 18, layout: 'timeline' })}`;
        break;
      case 'asym':
        content = `${header}${eyebrow(88, 183, 'start', 'GROWING IN THE RIGHT DIRECTION')}${titleAt(88, 297, 20, 71)}${summaryAt(92, 371, 43, 18)}${svgList(highlights, { x: 808, y: 253, chars: 30, lineGap: 70, fontSize: 17, layout: 'plain' })}`;
        break;
      case 'night':
        content = `${header}${eyebrow(88, 178, 'start', 'A BRIGHTER BUILD')}${titleAt(88, 306, 23, 85)}${summaryAt(92, 378, 62, 18)}${bulletRow(highlights, 512, 90, 322, 'tile')}`;
        break;
      case 'bento':
        content = `${header}${eyebrow(88, 163)}<rect x="82" y="188" width="495" height="174" rx="20" class="tile-box"/>${titleAt(111, 270, 22, 57)}<rect x="604" y="188" width="510" height="174" rx="20" class="tile-box"/>${summaryAt(636, 260, 45, 19)}${bulletRow(highlights, 456, 88, 325, 'tile')}`;
        break;
      default:
        content = `${header}${eyebrow(88, 174)}${titleAt(88, 274, 25, 68)}${summaryAt(92, 338, 72, 19)}${svgList(highlights, { x: 96, y: 436, chars: 55, lineGap: 45, fontSize: 17, layout: 'plain' })}`;
    }

    const sourceLabel = footerSourceLabel();
    const footer = `<path d="M82 565h1036" stroke="${palette.text}" stroke-opacity=".16"/>${sourceLabel ? `<text x="84" y="591" class="footer">${xmlEscape(sourceLabel)}</text>` : ''}<text x="1117" y="591" text-anchor="end" class="brand"><tspan fill="${accent}">✳ </tspan>RELEASE STUDIO</text>`;
    const texture = ['rail', 'terminal', 'timeline', 'list'].includes(preset.layout) ? 'grid' : preset.layout === 'arcade' ? 'dots' : 'none';
    const grid = texture === 'grid' ? '<rect width="1200" height="630" fill="url(#grid)" opacity=".5"/>' : texture === 'dots' ? '<rect width="1200" height="630" fill="url(#dots)" opacity=".32"/>' : '';

    return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630" role="img" aria-label="${xmlEscape(title)} release card">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="${palette.start}"/><stop offset="1" stop-color="${palette.end}"/></linearGradient>
        <radialGradient id="glow"><stop stop-color="${accent}" stop-opacity=".45"/><stop offset="1" stop-color="${accent}" stop-opacity="0"/></radialGradient>
        <pattern id="grid" width="36" height="36" patternUnits="userSpaceOnUse"><path d="M36 0H0V36" fill="none" stroke="${palette.text}" stroke-opacity=".12"/></pattern>
        <pattern id="dots" width="22" height="22" patternUnits="userSpaceOnUse"><circle cx="3" cy="3" r="1.5" fill="${accent}" fill-opacity=".33"/></pattern>
      </defs>
      <rect width="1200" height="630" fill="url(#bg)"/>${grid}${artwork}${content}${footer}
      <style>.project,.title,.summary,.list-text,.footer{fill:${palette.text}}.project{font:700 19px Arial,sans-serif}.version,.eyebrow,.list-index{font-family:Courier New,monospace;fill:${palette.muted}}.version{font-size:11px;letter-spacing:1px}.version-box{fill:${palette.text};fill-opacity:.08;stroke:${palette.text};stroke-opacity:.22}.eyebrow{font-size:11px;letter-spacing:1.5px}.title{font-weight:700;letter-spacing:-2.2px}.summary{font:20px Arial,sans-serif;opacity:.82}.list-text{font:17px Arial,sans-serif}.list-index{font-size:16px;fill:${accent}}.timeline-dot{fill:${accent}}.timeline-line{stroke:${accent};stroke-opacity:.45;stroke-width:2}.tile-box,.sidecar-box{fill:${palette.text};fill-opacity:.07;stroke:${palette.text};stroke-opacity:.17}.quote-mark{font:180px Georgia,serif;fill:${accent};fill-opacity:.4}.footer{font:12px Courier New,monospace;opacity:.7}.brand{font:700 11px Courier New,monospace;fill:${palette.text};opacity:.8}</style>
    </svg>`;
  }

  function fileName(extension) {
    const clean = (value) => value.toLowerCase().normalize('NFKD').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 32);
    return `release-card-${clean(fields.project.value || 'project') || 'project'}-${clean(fields.version.value || 'release') || 'release'}.${extension}`;
  }

  function downloadBlob(blob, name) {
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = name;
    anchor.style.display = 'none';
    document.body.append(anchor);
    anchor.click();
    anchor.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 1500);
  }

  function downloadSvg() {
    downloadBlob(new Blob([createSvg()], { type: 'image/svg+xml;charset=utf-8' }), fileName('svg'));
    showToast('SVG saved. Sharp at any size.');
  }

  function downloadPng() {
    const url = URL.createObjectURL(new Blob([createSvg()], { type: 'image/svg+xml;charset=utf-8' }));
    const image = new Image();
    image.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 1200;
      canvas.height = 630;
      const context = canvas.getContext('2d');
      if (!context) {
        URL.revokeObjectURL(url);
        showToast('PNG export is unavailable here. Try SVG instead.', 'error');
        return;
      }
      context.drawImage(image, 0, 0, canvas.width, canvas.height);
      URL.revokeObjectURL(url);
      canvas.toBlob((blob) => {
        if (!blob) { showToast('Could not create a PNG. Try SVG instead.', 'error'); return; }
        downloadBlob(blob, fileName('png'));
        showToast('Your crisp 1200 × 630 PNG is ready.');
      }, 'image/png');
    };
    image.onerror = () => {
      URL.revokeObjectURL(url);
      showToast('Could not render the PNG. Try SVG instead.', 'error');
    };
    image.src = url;
  }

  function showToast(message, kind = '') {
    const toast = byId('toast');
    toast.dataset.state = kind;
    toast.textContent = message;
    toast.classList.add('show');
    window.clearTimeout(showToast.timer);
    showToast.timer = window.setTimeout(() => toast.classList.remove('show'), 3000);
  }

  byId('load-example').addEventListener('click', () => useExample({ focus: true }));
  byId('preview-example').addEventListener('click', () => {
    useExample();
    document.querySelector('.source-tab[data-source-tab="markdown"]').focus();
  });
  byId('clear-notes').addEventListener('click', () => {
    fields.notes.value = '';
    fields.project.value = '';
    fields.version.value = '';
    fields.title.value = '';
    fields.summary.value = '';
    fields.highlights.value = '';
    fields.githubUrl.value = '';
    state.versionEdited = false;
    state.omitted = 0;
    state.sourceLabel = '';
    state.readmeSections = [];
    state.readmeOwner = '';
    state.readmeRepo = '';
    byId('readme-picker').hidden = true;
    setStatus('All set. Paste another release whenever you’re ready.');
    setImportStatus('Only public releases; fetched directly from GitHub when you press the button.');
    render();
    fields.notes.focus();
  });
  fields.notes.addEventListener('input', () => readSource());
  fields.version.addEventListener('input', () => { state.versionEdited = true; render(); });
  for (const key of ['project', 'title', 'summary', 'highlights']) fields[key].addEventListener('input', render);
  fields.accent.addEventListener('input', render);
  fields.accent.addEventListener('change', render);

  document.querySelectorAll('.source-tab').forEach((button) => button.addEventListener('click', () => switchSource(button.dataset.sourceTab)));
  byId('import-release').addEventListener('click', importRelease);
  byId('fetch-readme').addEventListener('click', importReadmeFromUrl);
  byId('use-readme-sections').addEventListener('click', useReadmeSections);
  fields.githubUrl.addEventListener('input', () => {
    state.readmeSections = [];
    byId('readme-picker').hidden = true;
  });
  fields.githubUrl.addEventListener('keydown', (event) => { if (event.key === 'Enter') importRelease(); });
  byId('fill-example-url').addEventListener('click', () => {
    fields.githubUrl.value = 'https://api.github.com/repos/vercel/next.js/releases/latest';
    fields.githubUrl.focus();
    setImportStatus('Example filled. Press Fetch notes to bring in the latest public release.', 'success');
  });

  document.querySelectorAll('.filter-chip').forEach((button) => button.addEventListener('click', () => updatePresetFilter(button.dataset.filter)));
  document.querySelectorAll('[data-theme]').forEach((button) => button.addEventListener('click', () => {
    state.theme = button.dataset.theme;
    document.querySelectorAll('[data-theme]').forEach((item) => {
      const active = item === button;
      item.classList.toggle('active', active);
      item.setAttribute('aria-pressed', String(active));
    });
    render();
  }));

  byId('export-svg').addEventListener('click', downloadSvg);
  byId('export-png').addEventListener('click', downloadPng);
  makePresetCards();
  render();
})();
