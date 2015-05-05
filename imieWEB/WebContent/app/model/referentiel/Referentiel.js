Ext.define('ExtJsMVC.model.referentiel.Referentiel',
{
		extend : 'Ext.data.TreeModel',
		fields : [
			          {name: 'refId'}, 
			          {name: 'text', mapping: 'refNom'},
			          {name: 'children', mapping: 'activiteTypes'}
		         ],
		         
		childType : 'ExtJsMVC.model.referentiel.ActiviteType',
		hasMany: {model: 'ExtJsMVC.model.referentiel.ActiviteType', associationKey : 'activiteTypes'},
	   
	    proxy: 
		{
	    	url: '/imieWEB/webapi/referentiel/',
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
	                    data.activiteTypes = undefined;
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
	                	else if(data.comId != undefined)
	                	{
	                		data.id = 'comId'.concat(data.comId);
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
	    
	    //TODO: essayer enlever suite passage 5.0.1
	    pseudoWriting: function()
	    {
	    	var pseudoWriter = this.getProxy().getWriter();
	    	return pseudoWriter.getRecordData(this);
	    }

});