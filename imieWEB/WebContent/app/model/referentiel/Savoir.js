Ext.define('ExtJsMVC.model.referentiel.Savoir',
	{
		extend : 'Ext.data.TreeModel',
		fields : [
			          {name: 'savId'}, 
			          {name: 'text', mapping: 'savLibelle'}, 
			          {name: 'competencePro'}, 
			          {name : 'leaf',  type : 'boolean', defaultValue : true}
		         ],
		         
	    proxy: 
		{
	    	url: '/imieWEB/webapi/savoir/',
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
	                    data.competencePro.savoirs=undefined;
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
		            	if(data.savId != undefined)
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