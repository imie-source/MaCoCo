Ext.define('ExtJsMVC.model.promotion.PromotionModel',
	{
		extend : 'Ext.data.TreeModel',
		fields : [
			          {name: 'proId'}, 
			          {name: 'text', mapping: 'proNom'}, 
			          {name: 'cursus'}, 
			          {name: 'children', mapping: 'uniteFormationPromotions'}
		         ],
		         
		childType : 'ExtJsMVC.model.promotion.UniteFormationPromotionModel',
		hasMany:  {model: 'ExtJsMVC.model.promotion.UniteFormationPromotionModel', 
					associationKey: 'uniteFormationPromotions'},	
	    proxy: 
		{
	    	url: './webapi/promotion/',
	    	type : 'rest',
	    	writer : 
	    	{
	    		nameProperty: 'mapping',
	    		writeAllFields: true,
	            transform: 
	            {
	                fn: function(data, request) 
	                {
	                    data.id = undefined;
	                    data.leaf = undefined;
	                    data.parentId = undefined;
	                    data.children = undefined;
	                    data.text = undefined;
	                    data.uniteFormationPromotions = undefined;
	                    return data;
	                },
	                scope: this
	            }
	    	},
	    	reader : 
	    	{
	            transform: 
	            {
	                fn: function(data) 
	                {
	                	if(data.ufpId != undefined)
	                	{
	                		data.id = 'ufpId'.concat(data.ufpId);
	                	}
	                	else if(data.mopId != undefined)
	                	{
	                		data.id = 'mopId'.concat(data.mopId);
	                	}
	                	else if(data.copId != undefined)
	                	{
	                		data.id = 'copId'.concat(data.copId);
	                	}
	                	else if(data.savId != undefined)
	                	{
	                		data.id = 'savId'.concat(data.savId);
	                	}
	                	
	                	return data;
	                },
	                scope: this
	            }
	    	} 
	    },
	    
	    pseudoWriting: function()
	    {
	    	var pseudoWriter = this.getProxy().getWriter();
	    	return pseudoWriter.getRecordData(this);
	    }
});