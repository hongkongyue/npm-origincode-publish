
这是一个基于vue的树形table列表     --作者 ：洪坤越

    npm i vue-tree-table-1
    import VueTreeTable from 'vue-tree-table-1'
    Vue.use(VueTreeTable)



    <VueTreeTable  ref="table"
                    sum-text="sum"
                    index-text="#"
                    :data="data"
                    :columns="columns"
                    :expand-type="expandType"
                    :selection-type="expandType"
                    children-prop="sysResourceList">
                <template slot="operate" slot-scope="scope">
                    <Button size="small" type="success" v-if="scope.row.isLeaf == 1"
                            @click="openUploadModal(scope.row)">上传图片
                    </Button>
                    <Button size="small" type="default" v-if="scope.row.isLeaf == 1"
                            @click="openButtonModal(scope.row)">按钮
                    </Button>
                    <Button size="small" type="primary" @click="openModal('编辑资源',scope.row)">编辑</Button>
                    <Button size="small" type="error" @click="del_res(scope.row)">删除</Button>
                </template>
 </VueTreeTable>

<script>
    export default {
        name: "resource_list",
        data() {
            return {
                expandType: false,
                data: [],
            
                columns: [
                    {
                        label: '资源名称',
                        prop: 'resourceName',
                        width: '250px',
                        align: 'center',
                        headerAlign: 'center',
                    },
                    {
                        label: '资源类型',
                        prop: 'resourceType',
                        width: '100px',
                        align: 'center',
                        headerAlign: 'center',
                    },
                    {
                        label: '菜单图标',
                        prop: 'menuIcon',
                        width: '100px',
                        align: 'center',
                        headerAlign: 'center',
                    },
                    {
                        label: '菜单路径',
                        prop: 'menuUrl',
                        width: '150px',
                        align: 'center',
                        headerAlign: 'center',
                    },
                    {
                        label: '菜单等级',
                        prop: 'menuLevel',
                        width: '80px',
                        align: 'center',
                        headerAlign: 'center',
                    },
                    {
                        label: '创建时间',
                        prop: 'created',
                        width: '80px',
                        align: 'center',
                        headerAlign: 'center',
                    },
                    {
                        label: '操作',
                        prop: 'operate',
                        width: '200px',
                        type: 'template',
                        align: 'center',
                        headerAlign: 'center',
                        template: 'operate'
                    }
                ],
               
            }
        },
    }
</script>
 