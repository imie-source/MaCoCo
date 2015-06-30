var mocIdArray= [];
Ext.define('ExtJsMVC.view.cursus.detailCursus.WeekGrid',{
	extend : 'Ext.grid.Panel',
	alias : 'widget.weekGrid',
	//autoScroll : true,
	modelValidation:true,
	
	store: Ext.create('Ext.data.Store',{
					storeId : 'weekStore',
					fields:['nWeek'],
					data:[[1],[2],[3],[4],[5],[6],[7],[8],[9],
					      [10],[11],[12],[13],[14],[15],[16],[17],[18],[19],
					      [20],[21],[22],[23],[24],[25],[26],[27],[28],[29],
					      [30],[31],[32],[33],[34],[35],[36],[37],[38],[39],
					      [40],[41],[42],[43],[44],[45],[46],[47],[48],[49],
					      [50],[51],[52]],
					proxy:{
						type:'memory',
						reader:'array'
					}
	}),
	title:'<b>Semaine</b>',
	reference:'weekGrid',
	hideHeaders : true,
	columns:[{
		//text:'Semaine',
		dataIndex:'n',
		variableRowHeight : true,
		flex:1.5,
		
	},
		],
		viewConfig:{
			getRowClass : function(record,index,rowParams,store){
				return 'heightWeekGridRow';
			}
		}

} );

