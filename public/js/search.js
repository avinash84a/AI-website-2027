// AI Tools Marathi - search.js
// Vanilla JS filter & live search logic

document.addEventListener('DOMContentLoaded', function () {
  initToolsDirectory();
  initGlobalQuickSearch();
});

function initToolsDirectory() {
  const container = document.getElementById('tools-grid-container');
  const searchInput = document.getElementById('tool-search-input');
  const categoryFilter = document.getElementById('category-filter');
  const difficultyFilter = document.getElementById('difficulty-filter');
  const countBadge = document.getElementById('results-count');
  const emptyState = document.getElementById('no-results-state');
  const resetBtn = document.getElementById('reset-filters-btn');

  if (!container || typeof ALL_TOOLS === 'undefined') return;

  function renderFilteredTools() {
    const query = searchInput ? searchInput.value.trim().toLowerCase() : '';
    const selectedCategory = categoryFilter ? categoryFilter.value : 'All';
    const selectedDifficulty = difficultyFilter ? difficultyFilter.value : 'All';

    const filtered = ALL_TOOLS.filter(tool => {
      // Category match
      const categoryMatch = selectedCategory === 'All' || 
        tool.category.toLowerCase() === selectedCategory.toLowerCase() ||
        tool.categorySlug === selectedCategory.toLowerCase();

      // Difficulty match
      const difficultyMatch = selectedDifficulty === 'All' || 
        tool.difficulty.toLowerCase() === selectedDifficulty.toLowerCase();

      // Search match across name, tagline, description, audience, category, tags
      const searchMatch = !query || 
        tool.name.toLowerCase().includes(query) ||
        tool.marathiTagline.toLowerCase().includes(query) ||
        tool.description.toLowerCase().includes(query) ||
        tool.audience.toLowerCase().includes(query) ||
        tool.category.toLowerCase().includes(query) ||
        (tool.tags && tool.tags.some(t => t.toLowerCase().includes(query)));

      return categoryMatch && difficultyMatch && searchMatch;
    });

    if (countBadge) {
      countBadge.innerText = `${filtered.length} Tools उपलब्ध`;
    }

    if (filtered.length === 0) {
      container.innerHTML = '';
      if (emptyState) emptyState.classList.remove('hidden');
    } else {
      if (emptyState) emptyState.classList.add('hidden');
      container.innerHTML = filtered.map(tool => createToolCardHtml(tool)).join('');
    }
  }

  if (searchInput) {
    searchInput.addEventListener('input', renderFilteredTools);
  }

  if (categoryFilter) {
    categoryFilter.addEventListener('change', renderFilteredTools);
  }

  if (difficultyFilter) {
    difficultyFilter.addEventListener('change', renderFilteredTools);
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', function () {
      if (searchInput) searchInput.value = '';
      if (categoryFilter) categoryFilter.value = 'All';
      if (difficultyFilter) difficultyFilter.value = 'All';
      renderFilteredTools();
    });
  }

  // Handle URL query parameters if present (e.g. tools.html?cat=design or ?q=pdf)
  const urlParams = new URLSearchParams(window.location.search);
  const paramCat = urlParams.get('cat') || urlParams.get('category');
  const paramQuery = urlParams.get('q') || urlParams.get('search');

  if (paramCat && categoryFilter) {
    categoryFilter.value = paramCat;
  }
  if (paramQuery && searchInput) {
    searchInput.value = paramQuery;
  }

  // Initial render
  renderFilteredTools();
}

// Global Quick Search Modal or Header search if enabled
function initGlobalQuickSearch() {
  const heroSearchInput = document.getElementById('hero-quick-search');
  if (heroSearchInput) {
    heroSearchInput.addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
        const val = encodeURIComponent(this.value.trim());
        if (val) {
          window.location.href = `/tools.html?q=${val}`;
        }
      }
    });
  }
}
