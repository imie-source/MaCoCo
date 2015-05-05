Ext.define('ExtJsMVC.view.home.CursusAdminWindowForm',{
	extend:'Ext.form.Panel',
	alias:'widget.cursusAdminWindowForm',
	requires:[
	          'Ext.form.field.Text'
	],

	resizable : true,
	draggable : true,
	floating : true,
	width : 500,
	height : 200,
	bodyPadding:10,
	bind:{
		title:'<b>{currentCursus.curNom}</b>'
	},
	id : 'cursusAdminWindowForm',
	modelValidation:true,
	fieldDefaults:{
		labelWidth:70,
		labelAlign:'right',
		selectOnFocus:true,
		flex:1,
		anchor:'100%'
	},
	items:[{
				fieldLabel:'Cursus',
				bind:'{currentCursus.curNom}',
				xtype:'textfield'
			},
			{
				fieldLabel:'Sélectionner un référentiel',
				displayField : 'refNom',
				valueField : 'refId',
				store : Ext.create('ExtJsMVC.store.ReferentielStore',{
				}),
				xtype:'combobox',
				queryMode : 'remote',
				width : '30%',
				bind:'{currentCursus.refId}',

		}],
		
		buttons:[{
			text:'Enregistrer',
			handler:'onCommit',
			glyph:0xf00c,
			disabled:true,
			bind:{
				disabled:'{!cursusStatus.dirtyAndValid}'
			}
		},
		{
			text:'Annuler',
			handler:'onReject',
			glyph:0xf0e2,

		},

		]
	
});
