
Ext.define('ExtJsMVC.view.cursus.detailCursus.CursusViewGrid',{
	extend : 'Ext.grid.Panel',
	alias : 'widget.cursusViewGrid',

	modelValidation:true,
	bind:{
		store:'{coursByCursus}',
		//title:'<b>Liste des cours de {currentCursus.curNom}</b>'
	},
	title:'<b>Liste des cours</b>',
	reference:'coursOrdoGrid',
	hideHeaders : true,
	columns:[{
		//text:'Cours',
		dataIndex:'cocIntitule',
		variableRowHeight : true,
		flex:1.5,
		autoScroll : true,
	},{
    	xtype : 'actioncolumn',
    	width : '15%',
    	menuDisabled : true,
		items : [ {
			icon : 'img/info.png',
			//tooltip : '{cocDuree}',
			tooltip : {
				bind : {
					html : '{cocDuree}',
				}
			},
			handler : 'getInfo'
		} ]
	} ],
		

		 
		viewConfig:{
			plugins : {
				ptype : 'gridviewdragdrop',
				dragText : 'Réordonner les cours',
			},
			getRowClass : function(record,index,rowParams,store){
				var duree = record.get('cocDuree')*100;

				var ret = 'heightOrdoGridRow'.concat(duree).concat(' colorOrdoGridRow');
				
				if(record.get('cocOrdre')==0){
					ret = ret.concat(' noOderedOrdoGridRow')
				}
				
				return ret;
			},
			
		},
		

} );

