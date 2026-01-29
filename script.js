// Generate the grayscale strip
function generateGrayscaleStrip() {
    const grayscaleStrip = document.getElementById('grayscale-strip');

    for (let col = 1; col <= 30; col++) {
        const cell = document.createElement('div');
        cell.className = 'grayscale-cell';

        // Calculate lightness for grayscale (from dark to light)
        const lightness = 10 + (col - 1) * (85 / 29); // Range from 10% to 95%
        cell.style.backgroundColor = `hsl(0, 0%, ${lightness}%)`;

        grayscaleStrip.appendChild(cell);
    }
}

// Generate column numbers
function generateColumnNumbers() {
    const columnNumbers = document.getElementById('column-numbers');

    for (let col = 1; col <= 30; col++) {
        const label = document.createElement('div');
        label.className = 'column-number';
        label.textContent = col;
        columnNumbers.appendChild(label);
    }
}

// Generate the main color grid
function generateColorGrid() {
    const colorGrid = document.getElementById('color-grid');
    const rowLabels = document.getElementById('row-labels');
    const rows = 'ABCDEFGHIJKLMNOP';

    for (let rowIndex = 0; rowIndex < rows.length; rowIndex++) {
        const rowLetter = rows[rowIndex];

        // Create row label
        const rowLabel = document.createElement('div');
        rowLabel.className = 'row-label';
        rowLabel.textContent = rowLetter;
        rowLabels.appendChild(rowLabel);

        // Create cells for this row
        for (let col = 1; col <= 30; col++) {
            const cell = document.createElement('div');
            cell.className = 'color-cell';
            cell.dataset.row = rowLetter;
            cell.dataset.col = col;

            // Calculate color using HSL
            const hue = calculateHue(col);
            const { saturation, lightness } = calculateSaturationAndLightness(rowIndex);

            cell.style.backgroundColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;

            colorGrid.appendChild(cell);
        }
    }
}

// Calculate hue based on column (1-30)
// Progression: browns/reds → yellows → greens → cyans → blues → purples
function calculateHue(col) {
    // Start at ~15° (browns/reds) and end at ~280° (purples)
    const startHue = 15;
    const endHue = 280;
    const hueRange = endHue - startHue;

    return startHue + ((col - 1) / 29) * hueRange;
}

// Calculate saturation and lightness based on row (0-15 for A-P)
function calculateSaturationAndLightness(rowIndex) {
    // Top rows (A-C): High saturation, medium-dark lightness
    // Middle rows (D-L): Varying saturation, lighter
    // Bottom rows (M-P): Medium saturation, light

    if (rowIndex <= 2) {
        // Rows A-C: High saturation, medium-dark
        return {
            saturation: 85 - rowIndex * 5,
            lightness: 35 + rowIndex * 5
        };
    } else if (rowIndex <= 11) {
        // Rows D-L: Varying saturation, lighter
        const offset = rowIndex - 3;
        return {
            saturation: 75 - offset * 5,
            lightness: 45 + offset * 4
        };
    } else {
        // Rows M-P: Medium saturation, light
        const offset = rowIndex - 12;
        return {
            saturation: 50 - offset * 5,
            lightness: 75 + offset * 3
        };
    }
}

// Selection and preview functionality
let currentSelectedCell = null;
let isPreviewVisible = true;

function updatePreview(color, coordinate, isHover = false) {
    const previewSwatch = document.getElementById('preview-swatch');
    const previewText = document.getElementById('preview-text');

    previewSwatch.style.backgroundColor = color;

    if (coordinate) {
        previewText.textContent = isHover ? `Hovering: ${coordinate}` : `Selected: ${coordinate}`;
    } else {
        previewText.textContent = 'Hover or select a color';
        previewSwatch.style.backgroundColor = '#333';
    }
}

function selectCell(cell) {
    // Remove previous selection
    if (currentSelectedCell) {
        currentSelectedCell.classList.remove('selected');
    }

    // Add selection to new cell
    cell.classList.add('selected');
    currentSelectedCell = cell;

    // Scroll the cell into view if needed
    cell.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });

    // Update preview and display
    const coordinate = `${cell.dataset.row}-${cell.dataset.col}`;
    const color = window.getComputedStyle(cell).backgroundColor;
    updatePreview(color, coordinate, false);
    document.getElementById('selection-display').textContent = `Selected: ${coordinate}`;
}

function clearSelection() {
    if (currentSelectedCell) {
        currentSelectedCell.classList.remove('selected');
        currentSelectedCell = null;
    }
    document.getElementById('selection-display').textContent = '';
    updatePreview(null, null);
}

function randomSelect() {
    const rows = 'ABCDEFGHIJKLMNOP';
    const randomRow = rows[Math.floor(Math.random() * rows.length)];
    const randomCol = Math.floor(Math.random() * 30) + 1;

    // Find and select the cell
    const selectedCell = document.querySelector(
        `.color-cell[data-row="${randomRow}"][data-col="${randomCol}"]`
    );

    if (selectedCell) {
        selectCell(selectedCell);
    }
}

function togglePreview() {
    const previewPanel = document.getElementById('preview-panel');
    const toggleBtn = document.getElementById('toggle-preview');

    isPreviewVisible = !isPreviewVisible;

    if (isPreviewVisible) {
        previewPanel.classList.remove('hidden');
        toggleBtn.textContent = 'Hide Preview';
    } else {
        previewPanel.classList.add('hidden');
        toggleBtn.textContent = 'Show Preview';
    }
}

// Initialize the board
function init() {
    generateGrayscaleStrip();
    generateColumnNumbers();
    generateColorGrid();

    // Add event listeners
    document.getElementById('random-btn').addEventListener('click', randomSelect);
    document.getElementById('clear-btn').addEventListener('click', clearSelection);
    document.getElementById('toggle-preview').addEventListener('click', togglePreview);

    // Add click listeners to all color cells
    const colorCells = document.querySelectorAll('.color-cell');
    colorCells.forEach(cell => {
        cell.addEventListener('click', () => selectCell(cell));

        // Add hover listeners
        cell.addEventListener('mouseenter', () => {
            if (!currentSelectedCell) {
                cell.classList.add('hovered');
                const coordinate = `${cell.dataset.row}-${cell.dataset.col}`;
                const color = window.getComputedStyle(cell).backgroundColor;
                updatePreview(color, coordinate, true);
            }
        });

        cell.addEventListener('mouseleave', () => {
            cell.classList.remove('hovered');
            if (!currentSelectedCell) {
                updatePreview(null, null);
            }
        });
    });

    // Info modal functionality
    const infoBtn = document.getElementById('info-btn');
    const infoModal = document.getElementById('info-modal');
    const closeModal = document.querySelector('.close-modal');

    infoBtn.addEventListener('click', () => {
        infoModal.classList.add('show');
    });

    closeModal.addEventListener('click', () => {
        infoModal.classList.remove('show');
    });

    // Close modal when clicking outside
    window.addEventListener('click', (event) => {
        if (event.target === infoModal) {
            infoModal.classList.remove('show');
        }
    });
}

// Run initialization when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
