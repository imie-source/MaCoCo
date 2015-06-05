
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
	
	columns:[{
		//text:'Cours',
		dataIndex:'cocIntitule',
		variableRowHeight : true,
		flex:1.5,
		autoScroll : true,
	},
		],
		viewConfig:{
			plugins : {
				ptype : 'gridviewdragdrop',
				dragText : 'Réordonner les cours',
			},
			getRowClass : function(record,index,rowParams,store){
				var ret = 'heightOrdoGridRow'.concat(record.get('cocDuree')).concat(' colorOrdoGridRow');

				if(record.get('cocOrdre')==0){
					ret = ret.concat(' noOderedOrdoGridRow')
				}
				
				return ret;
			},
			
		},
		

} );

