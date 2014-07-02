Ext.define('ExtJsMVC.view.savoir.List', 
{
	extend : 'Ext.grid.Panel',
	xtype  : 'savoir-List',
	title : 'liste des savoirs',
    columns: 
    [
        { text: 'Name',  dataIndex: 'name' }
    ],
    store : 'SavoirStore'
});


