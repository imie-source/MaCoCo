Ext.define('ExtJsMVC.view.home.RefAdminWindowForm',{
	extend:'Ext.form.Panel',
	alias:'widget.refAdminWindowForm',
	requires:[
	          'Ext.form.field.Text'
	],
	resizable : true,
	draggable : true,
	floating : true,
	width : 500,
	height : 200,
	bodyPadding:10,

	id : 'refAdminWindowForm',
	modelValidation:true,
	fieldDefaults:{
		labelWidth:150,
		labelAlign:'right',
		selectOnFocus:true,
		flex:1,
		anchor:'100%'
	},
	items:[{
				fieldLabel:'Référentiel',
				bind:'{currentReferentiel.text}',
				xtype:'textfield',
				id : 'seleniumTextRefHome'
			
		}],
		
		buttons:[{
			text:'Enregistrer',
			handler:'onCommit',
			glyph:0xf00c,
			disabled:true,
			bind:{
				disabled:'{!refStatus.dirtyAndValid}'
			},
			id : 'seleniumBtnRefFormHome'
		},
		{
			text:'Annuler',
			handler:'onReject',
			glyph:0xf0e2,
			
		},

		]
	
});
