Ext.define('ExtJsMVC.model.promotion.PeriodePromotionModel',
{
	extend: 'Ext.data.Model',
	fields: [
	         {name: 'perproId'},
	         {name: 'perproNom'},
	         {name: 'perproDebut'},
	         {name: 'perproFin'},
	         {name: 'perproNbjours'},
	         {name: 'promotion'},
	        ],
	        
	proxy: 
	{
	    type: 'rest',
	    url: '/imieWEB/webapi/periodepromotion',
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

