/**
 * Generic Data Dashboard Component
 * Zero-dependency, lightweight, reusable table & KPI cards engine.
 */
class DataDashboard {
  constructor(config) {
    this.container = document.querySelector(config.container);
    this.data = config.data || [];
    this.columns = config.columns || [];
    this.kpis = config.kpis || [];
    this.pageSize = config.pageSize || 15;
    this.currentPage = 1;
    this.searchTerm = '';
    this.sortKey = config.defaultSortKey || null;
    this.sortDir = config.defaultSortDir || 'desc';

    this.filteredData = [...this.data];
    this.init();
  }

  init() {
    this.container.innerHTML = `
      <div class="dashboard-wrapper">
        <div class="kpi-grid" id="kpiGrid"></div>
        
        <div class="dashboard-controls">
          <input type="text" class="dashboard-search" placeholder="Search entries..." id="dashboardSearch" />
          <div class="dashboard-count" id="recordCount"></div>
        </div>

        <div class="table-responsive">
          <table class="dashboard-table">
            <thead><tr id="tableHeader"></tr></thead>
            <tbody id="tableBody"></tbody>
          </table>
        </div>

        <div class="dashboard-pagination" id="paginationControls"></div>
      </div>
    `;

    this.renderKPIs();
    this.renderHeader();
    this.bindEvents();
    this.update();
  }

  bindEvents() {
    const searchInput = this.container.querySelector('#dashboardSearch');
    searchInput.addEventListener('input', (e) => {
      this.searchTerm = e.target.value.toLowerCase();
      this.currentPage = 1;
      this.update();
    });
  }

  renderKPIs() {
    const kpiContainer = this.container.querySelector('#kpiGrid');
    if (!this.kpis.length) {
      kpiContainer.style.display = 'none';
      return;
    }

    kpiContainer.innerHTML = this.kpis.map(kpi => {
      const val = kpi.compute(this.data);
      return `
        <div class="kpi-card">
          <div class="kpi-title">${kpi.label}</div>
          <div class="kpi-value ${kpi.className ? kpi.className(val) : ''}">${val}</div>
        </div>
      `;
    }).join('');
  }

  renderHeader() {
    const thead = this.container.querySelector('#tableHeader');
    thead.innerHTML = this.columns.map(col => {
      const isSorted = this.sortKey === col.key;
      const arrow = isSorted ? (this.sortDir === 'asc' ? '▲' : '▼') : '';
      return `
        <th data-key="${col.key}" class="${col.sortable !== false ? 'sortable' : ''}">
          ${col.label} <span class="sort-indicator">${arrow}</span>
        </th>
      `;
    }).join('');

    thead.querySelectorAll('th.sortable').forEach(th => {
      th.addEventListener('click', () => {
        const key = th.dataset.key;
        if (this.sortKey === key) {
          this.sortDir = this.sortDir === 'asc' ? 'desc' : 'asc';
        } else {
          this.sortKey = key;
          this.sortDir = 'desc';
        }
        this.renderHeader();
        this.update();
      });
    });
  }

  update() {
    // 1. Filter
    this.filteredData = this.data.filter(row => {
      return Object.values(row).some(val => 
        String(val).toLowerCase().includes(this.searchTerm)
      );
    });

    // 2. Sort
    if (this.sortKey) {
      this.filteredData.sort((a, b) => {
        let valA = a[this.sortKey];
        let valB = b[this.sortKey];

        if (typeof valA === 'string') valA = valA.toLowerCase();
        if (typeof valB === 'string') valB = valB.toLowerCase();

        if (valA < valB) return this.sortDir === 'asc' ? -1 : 1;
        if (valA > valB) return this.sortDir === 'asc' ? 1 : -1;
        return 0;
      });
    }

    // 3. Paginate
    const total = this.filteredData.length;
    const startIdx = (this.currentPage - 1) * this.pageSize;
    const paginatedData = this.filteredData.slice(startIdx, startIdx + this.pageSize);

    // 4. Render Rows
    const tbody = this.container.querySelector('#tableBody');
    if (paginatedData.length === 0) {
      tbody.innerHTML = `<tr><td colspan="${this.columns.length}" style="text-align:center; padding: 2rem;">No matching entries found</td></tr>`;
    } else {
      tbody.innerHTML = paginatedData.map(row => `
        <tr>
          ${this.columns.map(col => {
            const rawVal = row[col.key];
            const displayVal = col.render ? col.render(rawVal, row) : rawVal;
            return `<td class="${col.align ? 'text-' + col.align : ''}">${displayVal}</td>`;
          }).join('')}
        </tr>
      `).join('');
    }

    // 5. Update Record Count & Pagination UI
    this.container.querySelector('#recordCount').textContent = `Showing ${paginatedData.length} of ${total} records`;
    this.renderPagination(total);
  }

  renderPagination(total) {
    const totalPages = Math.ceil(total / this.pageSize);
    const container = this.container.querySelector('#paginationControls');
    if (totalPages <= 1) {
      container.innerHTML = '';
      return;
    }

    container.innerHTML = `
      <button ${this.currentPage === 1 ? 'disabled' : ''} id="prevPage">Previous</button>
      <span>Page ${this.currentPage} of ${totalPages}</span>
      <button ${this.currentPage === totalPages ? 'disabled' : ''} id="nextPage">Next</button>
    `;

    container.querySelector('#prevPage')?.addEventListener('click', () => {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.update();
      }
    });

    container.querySelector('#nextPage')?.addEventListener('click', () => {
      if (this.currentPage < totalPages) {
        this.currentPage++;
        this.update();
      }
    });
  }
}