Ext.define('ExtJsMVC.model.cursus.PeriodeCursusModel',
{
	extend: 'Ext.data.Model',
	fields: [
	         {name: 'perId'},
	         {name: 'perNom'},
	         {name: 'perDebut'},
	         {name: 'perFin'},
	         {name: 'perNbjours'},
	         {name: 'cursus'},
	         
	        ],
	        
	proxy: 
	{
	    type: 'rest',
	    url: '/imieWEB/webapi/periode',
    	writer : 
    	{
    		nameProperty: 'mapping',
    		writeAllFields: true,
            transform: 
            {
                fn: function(data, request) 
                {
                    data.id = undefined;
                    
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

