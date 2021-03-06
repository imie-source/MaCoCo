Ext.define('ExtJsMVC.model.promotion.CursusPromotionModel',
	{
		extend : 'Ext.data.TreeModel',
		fields : [
			          {name: 'curId'}, 
			          {name: 'text', mapping: 'curNom'}, 
			          {name: 'refId'}, 
			          {name: 'children', mapping: 'promotions'}
		         ],
		         
		childType : 'ExtJsMVC.model.promotion.FirstTreePromotionModel',
		hasMany:  {model: 'ExtJsMVC.model.promotion.FirstTreePromotionModel', associationKey: 'promotions'},	
	   
	    proxy: 
		{
	    	url: './webapi/cursus',
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
	                    data.uniteFormationCursuses = undefined;
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
	                	if(data.ufcId != undefined)
	                	{
	                		data.id = 'ufcId'.concat(data.ufcId);
	                	}
	                	else if(data.mocId != undefined)
	                	{
	                		data.id = 'mocId'.concat(data.mocId);
	                	}
	                	else if(data.cocId != undefined)
	                	{
	                		data.id = 'cocId'.concat(data.cocId);
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