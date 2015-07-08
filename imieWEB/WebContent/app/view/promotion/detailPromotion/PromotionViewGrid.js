Ext.define('ExtJsMVC.view.promotion.detailPromotion.PromotionViewGrid',{
	extend : 'Ext.grid.Panel',
	alias : 'widget.promotionViewGrid',

	modelValidation:true,
	bind:{
		store:'{coursByPromotion}',
		
	},
	title:'<b>Liste des promotions</b>',
	reference:'coursPromoOrdoGrid',
	hideHeaders : true,
	columns:[{
		dataIndex:'copIntitule',
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
				
				var duree = record.get('copDuree')*100;

				var ret = 'heightOrdoGridRow'.concat(duree).concat(' colorOrdoGridRow');

				if(record.get('copOrdre')==0){
					ret = ret.concat(' noOderedOrdoGridRow')
				}
				return ret;
			},
			
		},
		

} );

