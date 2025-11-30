<template>
    <div></div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, inject } from 'vue';
import * as XLSX from 'xlsx';

import { saveExcel } from '@progress/kendo-vue-excel-export';
import Papa from 'papaparse';

// Inject event bus
const emitter = inject('emitter');

// Define emits
const emit = defineEmits(['resetExport']);

// Data
const data = ref([]);
const headers = ref([]);
const exportExcelData = ref([]);
const columnHeader = ref([]);
const excelFileName = ref('');
const exportShow = ref(false);

// Methods
const excelExport = () => {
    data.value = [];
    let headersArray = [];

    columnHeader.value.forEach((item) => {
        headersArray.push({
            field: item.key,
            title: item.title
        });
    });

    let dataSets = exportExcelData.value;

    if (dataSets.length > 0) {
        const csv = Papa.unparse(dataSets);

        // Create a Blob containing the CSV data
        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });

        // Create a download link and trigger the download
        const link = document.createElement('a');
        const url = URL.createObjectURL(blob);
        link.href = url;
        link.setAttribute('download', excelFileName.value + '.csv');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        exportShow.value = false;
    }
};

const typeIdentifier = (value) => {
    return '"' + typeof value + '"';
};

const dataExport = () => {
    data.value = [];
    let header = columnHeader.value;

    exportExcelData.value.forEach((dataValue, dataIndex) => {
        let object = {};

        header.forEach((value, index) => {
            let title = value.title;

            if (headers.value.indexOf(title) === -1) {
                headers.value.push(title);
            }
            object[title] = dataValue[value.key];
        });

        data.value.push(Object.assign({}, object));
    });

    let name = excelFileName.value + ".xlsx";
    let posWS = XLSX.utils.json_to_sheet(data.value, {
        raw: true
    });

    // Excel width set
    let columnWidth = [];

    headers.value.forEach((value, index) => {
        const max = data.value.reduce((prev, current) => {
            if (prev[value] === undefined || prev[value] === null)
                prev[value] = "";
            if (current[value] === undefined || current[value] === null)
                current[value] = "";
            return prev[value].length > current[value].length ? prev : current;
        });

        if (max[value] === undefined || max[value] === null) {
            max[value] = "";
        }

        let maxLength =
            max[value].toString().length > value.length
                ? max[value].toString().length
                : value.length;
        columnWidth.push(Object.assign({ wch: maxLength + 2 }));
    });

    posWS["!cols"] = columnWidth;
    let wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, posWS, "AMS");
    XLSX.writeFile(wb, name);

    emit("resetExport", false);
};

// Lifecycle
onMounted(() => {
    // Listen for data-table-import event
    emitter.on("data-table-import", (dataParam, columns, fileName) => {
        exportExcelData.value = dataParam;
        columnHeader.value = columns;
        excelFileName.value = fileName;
        excelExport();
    });
});

onBeforeUnmount(() => {
    // Clean up event listener
    emitter.off('data-table-import');
});
</script>

<style scoped>
/* Add any styles if needed */
</style>
