Ext.define('ExtJsMVC.model.referentiel.ActiviteType',
	{
		extend : 'Ext.data.TreeModel',
		fields : [
			          {name: 'actId'}, 
			          {name: 'text', mapping: 'actLibelle'}, 
			          {name: 'referentiel'}, 
			          {name: 'children', mapping: 'competencePros'}
		         ],
		         
		childType : 'ExtJsMVC.model.referentiel.CompetencePro',
	    hasMany:  {model: 'ExtJsMVC.model.referentiel.CompetencePro', associationKey : 'competencePros'},	
	   
	    proxy: 
		{
	    	url: './webapi/activitetype/',
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
	                    data.competencePros = undefined;
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
		            	if(data.actId != undefined)
		        		{
		            		data.id = 'actId'.concat(data.actId);
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