Ext.define('ExtJsMVC.model.promotion.FirstTreePromotionModel',
	{
		extend : 'Ext.data.TreeModel',
		fields : [
			          {name: 'proId'}, 
			          {name: 'text', mapping: 'proNom'}, 
			          {name: 'cursus'},
			          {name : 'leaf',  type : 'boolean', defaultValue : true}
		         ],
		            
	    proxy: 
		{
	    	url: './webapi/promotion/',
	    	type : 'rest',
	    	
	    	//TODO: expliquer implementation writer (pollution champs arbre)
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
	    	
	    	
	    	//TODO: expliquer implementation reader (id unique)
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