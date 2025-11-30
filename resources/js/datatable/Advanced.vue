<template>
    <div class="datatable" v-if="!isLoading">
        <div class="row">
            <div class="col-xl-12">
                <div class="card">
                    <div class="card-body">
                        <div class="search">
                            <div class="payment" v-if="options.filterOption">
                                <div class="row">
                                    <div :class="options.colSize[0]" v-if="options.showFilter && options.showFilter.includes('startDate')">
                                        <div>
                                            <label>Start Date</label>
                                            <date-picker v-model:value="requestParams.startDate" :day-str="dayStr" placeholder="YYYY-MM-DD" :first-day-of-week="0"/>
                                        </div>
                                    </div>
                                    <div :class="options.colSize[1]" v-if="options.showFilter && options.showFilter.includes('endDate')">
                                        <label>End Date</label>
                                        <date-picker v-model:value="requestParams.endDate" :day-str="dayStr" placeholder="YYYY-MM-DD" :first-day-of-week="0"/>
                                    </div>
                                    <div :class="options.colSize[2]" v-if="options.showFilter && options.showFilter.includes('customers')">
                                        <label>Customers</label>
                                        <select class="form-control" v-model="requestParams.customer">
                                            <option value="">Select</option>
                                            <option v-for="(c,index) in customers" :key="index" :value="c.CustomerCode">{{c.CustomerName}}</option>
                                        </select>
                                    </div>
                                    <div :class="options.colSize[2]" v-if="options.showFilter && options.showFilter.includes('chassisNo')">
                                        <label>Chassis No</label>
                                        <input type="text" class="form-control" placeholder="Chassis No" v-model="requestParams.chassisNo">
                                    </div>
                                    <div :class="options.colSize[0]" v-if="options.showFilter && options.showFilter.includes('requestId')">
                                        <div>
                                            <label>Request ID</label>
                                            <input type="text" class="form-control" placeholder="Request ID" v-model="requestParams.requestId">
                                        </div>
                                    </div>
                                    <div :class="options.colSize[1]" v-if="options.showFilter && options.showFilter.includes('advanceId')">
                                        <label>Advance ID</label>
                                        <input type="text" class="form-control" placeholder="Advance ID" v-model="requestParams.advanceId">
                                    </div>
                                    <div :class="options.colSize[2]" v-if="options.showFilter && options.showFilter.includes('reqStaffId')">
                                        <label>Requester</label>
                                        <input type="text" class="form-control" placeholder="Staff ID" v-model="requestParams.reqStaffId">
                                    </div>
                                    <div :class="options.colSize[3]" v-if="options.showFilter && options.showFilter.includes('resStaffId')">
                                        <label>Responsible</label>
                                        <input type="text" class="form-control" placeholder="Staff ID" v-model="requestParams.resStaffId">
                                    </div>
                                    <div :class="options.colSize[4]" v-if="options.showFilter && options.showFilter.includes('business')">
                                        <label>Business</label>
                                        <select class="form-control" v-model="requestParams.business">
                                            <option value="">Select</option>
                                            <option v-for="(bus,index) in business" :key="index" :value="bus.Business">{{bus.BusinessName}}</option>
                                        </select>
                                    </div>
                                    <div :class="options.colSize[5]" v-if="options.showFilter && options.showFilter.includes('department')">
                                        <label>Department</label>
                                        <select class="form-control" v-model="requestParams.department">
                                            <option value="">Select</option>
                                            <option v-for="(dep,index) in department" :key="index" :value="dep.ResStaffDepartment">{{dep.ResStaffDepartment}}</option>
                                        </select>
                                    </div>
                                    <div :class="options.colSize[6]" v-if="options.showFilter && options.showFilter.includes('paymentMode')">
                                        <label>Payment Mode</label>
                                        <select class="form-control" v-model="requestParams.paymentMode">
                                            <option value="">Select</option>
                                            <option v-for="(mode,index) in paymentModes" :key="index" :value="mode.PaymentMode">{{mode.PaymentModeName}}</option>
                                        </select>
                                    </div>
                                    <div :class="options.colSize[0]" v-if="options.showFilter && options.showFilter.includes('roles')">
                                        <label>Role</label>
                                        <select class="form-control" v-model="requestParams.role">
                                            <option value="">Select</option>
                                            <option v-for="(role,index) in roles" :key="index" :value="role.RoleId">{{role.RoleName}}</option>
                                        </select>
                                    </div>
                                    <div :class="options.colSize[8]" v-if="options.showFilter && options.showFilter.includes('closingDate')">
                                        <label>Closing Date</label>
                                        <date-picker v-model:value="requestParams.closingDate" :day-str="dayStr" placeholder="YYYY-MM-DD" :first-day-of-week="0"/>
                                    </div>
                                    <div :class="options.colSize[2]" v-if="options.showFilter && options.showFilter.includes('districts')">
                                        <label>District</label>
                                        <select class="form-control" v-model="requestParams.districts">
                                            <option value="">Select District</option>
                                            <option v-for="(d,index) in districts" :key="index" :value="d.DistrictCode">{{d.DistrictName}}</option>
                                        </select>
                                    </div>
                                    <div :class="options.colSize[2]" v-if="options.showFilter && options.showFilter.includes('dealerPoints')">
                                        <label>Dealer Point</label>
                                        <select class="form-control" v-model="requestParams.dealerPoints">
                                            <option value="">Select Dealer Point</option>
                                            <option v-for="(d,index) in dealerPoints" :key="index" :value="d.CustomerCode">{{d.CustomerName}}</option>
                                        </select>
                                    </div>
                                    <div :class="options.colSize[2]" v-if="options.showFilter && options.showFilter.includes('existingOrResigned')">
                                        <label>Existing or resigned</label>
                                        <select class="form-control" v-model="requestParams.existingOrResigned">
                                            <option value="">Select Existing or resigned</option>
                                            <option value="New Joined">New joined</option>
                                            <option value="Transferred">Transferred</option>
                                            <option value="Resigned">Resigned</option>
                                        </select>
                                    </div>
                                    <div :class="options.colSize[2]" v-if="options.showFilter && options.showFilter.includes('gender')">
                                        <label>Gender</label>
                                        <select class="form-control" v-model="requestParams.gender">
                                            <option value="">Select Gender</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                        </select>
                                    </div>
                                    <div :class="options.colSize[2]" v-if="options.showFilter && options.showFilter.includes('active')">
                                        <label>Active</label>
                                        <select class="form-control" v-model="requestParams.active">
                                            <option value="">Select Active</option>
                                            <option value="Y">Yes</option>
                                            <option value="N">No</option>
                                        </select>
                                    </div>
                                    <div :class="options.colSize[2]" v-if="options.showFilter && options.showFilter.includes('approve')">
                                        <label>Approve</label>
                                        <select class="form-control" v-model="requestParams.approve">
                                            <option value="">Select Status</option>
                                            <option value="Y">Yes</option>
                                            <option value="N">No</option>
                                            <option value="R">Rejected</option>
                                        </select>
                                    </div>
                                    <div :class="options.colSize[2]" v-if="options.showFilter && options.showFilter.includes('currentStatus')">
                                        <label>Current Status</label>
                                        <select class="form-control" v-model="requestParams.currentStatus">
                                            <option value="">Select Status</option>
                                            <option value="Submitted">Submitted</option>
                                            <option value="NotSubmitted">Not Submitted</option>
                                            <option value="Approved">Approved</option>
                                            <option value="Reject">Reject</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="row" style="padding: 10px 20px;">
                                    <div style="display: flex">
                                        <button  class="btn btn-primary btn-sm" @click="readData"><i class="ti-search"></i> Filter</button>
                                        <button style="margin-left:15px" class="btn btn-info btn-sm" @click="reset"><i class="ti-reload"></i> Reset</button>
                                    </div>

                                </div>

                            </div>
                            <div class="row" style="padding: 20px 0px;">
                                <div class="col-lg-3">
                                    Show <select class="form-control" style="width:unset;display:unset" v-model="showDataAmount"
                                                 @change="selectedDataAmount" id="rows">
                                    <option v-for="(page,index) in options.pages" :value="page" :key="index">{{ page }}</option>
                                </select> rows
                                </div>
                                <div class="col-lg-3" v-if="options.search"></div>
                                <div class="col-lg-3" v-if="options.search"></div>
                                <div class="col-lg-3" v-if="options.search">
                                    <input type="text" style="float:right" class="form-control" placeholder="Search here" id="search"
                                           @change="search()" v-model="requestParams.search"/>
                                </div>
                            </div>
                        </div>
                        <div class="datatable scrollable" style="overflow-x:auto">
                            <table id="datatable scrollable"
                                   class="table table-bordered table-striped dt-responsive nowrap dataTable no-footer dtr-inline table-sm small"
                                   style="border-collapse: collapse; border-spacing: 0; width: 100%;">
                                <thead class="thead-dark">
                                <th v-for="(column,columnIndex) in headers" class="sorting text-center"
                                    :class="{'text-center':options.textCenter && options.textCenter.includes(columnIndex),'text-right':options.textRight && options.textRight.includes(columnIndex)}"
                                    :key="columnIndex">
                                    <span>{{ column }}</span>
                                    <span style="float: right"
                                          v-if="requestParams.sortedKey === column.key && requestParams.sortedType === 'asc'">
                            <a href="javascript:" @click="sortedKeyValue(column.key,'desc')">
                                <img :src="`${mainOrigin}assets/images/datatable/up.png`" alt="up.png">
                            </a>
                        </span>
                                    <span style="float: right"
                                          v-else-if="requestParams.sortedKey === column.key && requestParams.sortedType === 'desc'">
                            <a href="javascript:" @click="sortedKeyValue(column.key,'asc')">
                                <img :src="`${mainOrigin}assets/images/datatable/down.png`" alt="down.png">
                            </a>
                        </span>
                                    <span style="float: right" v-else-if="column.sortable">
                           <a href="javascript:" @click="sortedKeyValue(column.key,'desc')">
                              <img :src="`${mainOrigin}assets/images/datatable/sort.png`" alt="sort.png">
                           </a>
                        </span>
                                </th>
                                </thead>
                                <tbody>
                                <template v-if="dataSets.length > 0">
                                    <tr v-for="(data,dataIndex) in dataSets" :key="dataIndex">
                                        <td v-for="(column,columnIndex) in columns" :key="columnIndex"
                                            :class="{
                        'text-center':options.textCenter && options.textCenter.includes(columnIndex),
                        'text-right':options.textRight && options.textRight.includes(columnIndex)
                                }">
                      <span v-if="options.slots && options.slots.includes(columnIndex)">
                        <slot :name="options.slotsName[options.slots.indexOf(columnIndex)]" :item="data"></slot>
                      </span>
                                            <span v-else-if="options.numberFormat && options.numberFormat.includes(columnIndex)">{{
                                                    numberFormat(data[column])
                                                }}</span>
                                            <span v-else-if="options.periodFormat && options.periodFormat.includes(columnIndex)">{{
                                                    periodFormat(data[column])
                                                }}</span>
                                            <span v-else-if="options.dateFormat && options.dateFormat.includes(columnIndex)">{{
                                                    dateFormat(data[column])
                                                }}</span>
                                            <span v-else>{{ data[column] }}</span>
                                        </td>
                                    </tr>
                                </template>
                                <template v-else>
                                    <tr style="text-align: center;">
                                        <td :colspan="columns.length" class="no-data-row"> No data found.</td>
                                    </tr>
                                </template>
                                </tbody>
                            </table>
                        </div>
                        <div class="row">
                            <div class="col-4">
                                <div class="data-count">
                                    Show {{ showFrom }} to {{ showTo }} of {{ totalCount }} rows
                                </div>
                            </div>
                            <div class="col-8">
                                <div class="pagination" v-if="totalCount > requestParams.take">
                                    <a href="javascript:" :class="{'isDisabled':currentPage===1}" @click="newPage(1)">First Page</a>
                                    <a href="javascript:" :class="{'isDisabled':currentPage===1}"
                                       @click="newPage(currentPage-1)">&laquo;</a>
                                    <a href="javascript:" @click="newPage(page)"
                                       :class="{'active isDisabled':currentPage===page,'isDisabled':page === '...'}"
                                       v-for="(page,pageIndex) in pages" :key="pageIndex">{{ page }}</a>
                                    <a @click="newPage(currentPage+1)" :class="{'isDisabled':currentPage===totalPage}"
                                       href="javascript:">&raquo;</a>
                                    <a @click="newPage(totalPage)" :class="{'isDisabled':currentPage===totalPage}" href="javascript:">Last
                                        Page</a>
                                </div>
                                <div class="pagination" v-else>
                                    <a href="javascript:" class="isDisabled">&laquo;</a>
                                    <a href="javascript:" class="active isDisabled">1</a>
                                    <a class="isDisabled" href="javascript:">&raquo;</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <DataExport/>
    </div>
    <div v-else>
        <skeleton-loader :row="9"/>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted, onBeforeUnmount, inject } from 'vue';
import DatePicker from 'vue-datepicker-next';
import 'vue-datepicker-next/index.css';
import moment from 'moment';
import DataExport from '../datatable/Export.vue';

// Props definition
const props = defineProps({
    options: {
        type: Object,
        required: true
    },
    action: String,
    roles: Array,
    customers: Array,
    districts: Array,
    dealerPoints: Array,
    existingOrResigned: Array,
    gender: Array,
    business: Array,
    department: Array,
    paymentModes: Array
});

// Inject event bus (emitter)
const emitter = inject('emitter');

// Inject common functions
const { axiosPost, errorNoti, numberFormat, periodFormat, dateFormat } = inject('common');

// Data
const dataSets = ref([]);
const filename = ref('');
const requestParams = reactive({
    take: '',
    search: '',
    sortedType: 'asc',
    sortedKey: '',
    filters: [],
    startDate: '',
    endDate: '',
    customer: '',
    chassisNo: '',
    requestId: '',
    advanceId: '',
    reqStaffId: '',
    resStaffId: '',
    department: '',
    business: '',
    paymentMode: '',
    role: '',
    closingDate: moment().format('yyyy-MM-DD'),
    category: '',
    approve: '',
    currentStatus: '',
    districts: '',
    dealerPoints: '',
    existingOrResigned: '',
    gender: '',
    active: ''
});

const currentPage = ref(1);
const pages = ref([]);
const showDataAmount = ref('');
const totalPage = ref(1);
const totalCount = ref(0);
const showTo = ref(0);
const showFrom = ref(0);
const isLoading = ref(true);
const headers = ref([]);
const columns = ref([]);
const requisitionId = ref('');
const checkType = ref('');
const dayStr = ref(['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']);
const mainOrigin = ref(window.location.origin + '/');

// Methods
const sortedKeyValue = (key, type) => {
    requestParams.sortedKey = key;
    requestParams.sortedType = type;
    readData();
};

const readData = (type = '') => {
    requestParams.type = type;

    axiosPost(props.options.source + '?page=' + currentPage.value, requestParams,
        (response) => {
            if (type !== 'export') {
                dataSets.value = response.data;
                if (dataSets.value.length > 0) {
                    let cols = Object.keys(response.data[0]);
                    cols = cols.filter((item) => item !== 'row_num');
                    columns.value = [];

                    if (props.options.hideColumn) {
                        cols.forEach((item) => {
                            let find = props.options.hideColumn.find((hide) => hide == item);
                            if (!find) {
                                columns.value.push(item);
                            }
                        });
                    } else {
                        columns.value = cols;
                    }

                    if (props.options.addHeader) columns.value = [...columns.value, ...props.options.addHeader];

                    let rex = /([A-Z])([A-Z])([a-z])|([a-z])([A-Z])/g;
                    headers.value = columns.value.map((item) => item.replace(rex, '$1$4 $2$3$5'));
                    totalCount.value = response.total;
                    showTo.value = response.to;
                    showFrom.value = response.from;
                    totalPage.value = Math.ceil(totalCount.value / requestParams.take);
                    pages.value = pagination(currentPage.value, totalPage.value);
                }
                isLoading.value = false;
            } else {
                let dataSetsExport = response.data;
                if (dataSetsExport.length > 0) {
                    let cols = Object.keys(dataSetsExport[0]);
                    let allColumns = [];

                    if (props.options.hideColumn) {
                        cols.forEach((item) => {
                            let find = props.options.hideColumn.find((hide) => hide == item);
                            if (!find) {
                                allColumns.push(item);
                            }
                        });
                    } else {
                        allColumns = cols;
                    }

                    cols = allColumns.filter((item) => item !== 'row_num');
                    let rex = /([A-Z])([A-Z])([a-z])|([a-z])([A-Z])/g;
                    cols = cols.map((item) => {
                        let title = item.replace(rex, '$1$4 $2$3$5');
                        return { title, key: item };
                    });

                    // Emit event for export
                    emitter.emit('data-table-import', dataSetsExport, cols, filename.value);
                }
            }
        },
        (error) => {
            errorNoti(error);
        }
    );
};

const search = () => {
    currentPage.value = 1;
    readData();
};

const reset = () => {
    Object.assign(requestParams, {
        take: requestParams.take,
        search: '',
        sortedType: 'asc',
        sortedKey: '',
        filters: props.options.filters || [],
        startDate: '',
        endDate: '',
        customer: '',
        chassisNo: '',
        requestId: '',
        advanceId: '',
        reqStaffId: '',
        resStaffId: '',
        department: '',
        business: '',
        paymentMode: '',
        role: '',
        closingDate: moment().format('yyyy-MM-DD'),
        category: props.options.category,
        approve: '',
        currentStatus: '',
        districts: '',
        dealerPoints: '',
        existingOrResigned: '',
        gender: '',
        active: ''
    });
    readData();
};

const selectedDataAmount = () => {
    requestParams.take = showDataAmount.value;
    readData();
};

const newPage = (page) => {
    if (page !== 0 && page <= totalPage.value) {
        currentPage.value = page;
        readData();
    }
};

const pagination = (c, m) => {
    var delta = 2,
        range = [],
        rangeWithDots = [],
        l;

    range.push(1);
    for (let i = c - delta; i <= c + delta; i++) {
        if (i < m && i > 1) {
            range.push(i);
        }
    }
    range.push(m);

    for (let i of range) {
        if (l) {
            if (i - l === 2) {
                rangeWithDots.push(l + 1);
            } else if (i - l !== 1) {
                rangeWithDots.push('...');
            }
        }
        rangeWithDots.push(i);
        l = i;
    }
    return rangeWithDots;
};

// Lifecycle
onMounted(() => {
    requestParams.category = props.options.category;
    requestParams.filters = props.options.filters || [];
    requestParams.take = showDataAmount.value = props.options.pages[0];
    readData();

    // Event listeners
    emitter.on('refresh-datatable', (reqId, chkType) => {
        requisitionId.value = reqId;
        checkType.value = chkType;
        readData();
    });

    emitter.on('export-data', (name) => {
        filename.value = name;
        readData('export');
    });
});

onBeforeUnmount(() => {
    // Clean up event listeners
    emitter.off('refresh-datatable');
    emitter.off('export-data');
});
</script>

<style lang="scss">
:root {
    --code-color: darkred;
    --code-bg-color: #aaaaaa;
    --code-font-size: 14px;
    --code-line-height: 1.4;
    --scroll-bar-color: #c5c5c5;
    --scroll-bar-bg-color: #f6f6f6;
}

pre {
    color: var(--code-color);
    font-size: var(--code-font-size);
    line-height: var(--code-line-height);
    background-color: var(--code-bg-color);
}

.code-block {
    max-height: 100px;
    overflow: auto;
    padding: 8px 7px 5px 15px;
    margin: 0px 0px 0px 0px;
    border-radius: 7px;
}

::-webkit-scrollbar-corner {
    background: rgba(0, 0, 0, 0.5);
}

* {
    scrollbar-width: thin;
    scrollbar-color: var(--scroll-bar-color) var(--scroll-bar-bg-color);
}

*::-webkit-scrollbar {
    width: 12px;
    height: 12px;
}

*::-webkit-scrollbar-track {
    background: var(--scroll-bar-bg-color);
}

*::-webkit-scrollbar-thumb {
    background-color: var(--scroll-bar-color);
    border-radius: 20px;
    border: 3px solid var(--scroll-bar-bg-color);
}

.datatable select {
    margin: 0 5px;
}

#datatable {
    border-collapse: collapse;
    width: 100%;
}

#datatable td, #datatable th {
    border: 1px solid #ddd;
    padding: 6px;
    text-align: center;
}

#datatable tr:hover {
    background-color: #f1f1f1;
}

#datatable th {
    text-align: center !important;
}

.datatable .pagination {
    display: inline-block;
    margin-top: 12px;
    float: right;
}

.datatable .data-count {
    display: inline-block;
    margin-top: 12px;
}

.datatable .pagination a {
    color: black;
    float: left;
    padding: 3px 10px;
    text-decoration: none;
    transition: background-color .3s;
    border: 1px solid #ddd;
}

.datatable .pagination a.active {
    background-color: #626ed4;
    border-color: #626ed4;
    color: #fff;
}

.datatable .pagination a:hover:not(.active) {
    background-color: #ddd;
}

.datatable .isDisabled {
    cursor: not-allowed;
    opacity: 0.5;
}

.thead-dark th span{
    background: #805dca !important;
    padding: 0 !important;
    color: white
}
thead {
    background: #805dca;
    color: white;
    font-size: 18px;
}

.table {
    margin-bottom: unset !important;
}

.no-data-row {
    height: 100px;
    font-size: 20px;
    font-weight: 600;
    text-transform: capitalize;
}

.mx-datepicker {
    width: 100% !important;
}

.payment {
    padding: 5px 8px;
    margin: 0 0 15px 0;
    background: #3335471f;
    border-radius: 5px;
}

.payment>div {
    padding: 0 15px;
}

.payment>div>div {
    padding: 0 3px !important;
}

.payment input, .payment select {
    font-size: 10px;
}

.payment p {
    font-weight: bold;
    text-transform: uppercase;
    padding: 0 5px;
}

.payment label {
    font-size: 12px;
}

.payment i {
    font-size: 12px;
}

.datepicker .picker .picker-content {
    width: 350px !important;
}

</style>
