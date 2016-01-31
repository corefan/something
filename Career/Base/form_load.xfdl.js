(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        this.on_create = function()
        {
            // Declare Reference
            var obj = null;
            
            if (Form == this.constructor) {
                this.set_name("form_load");
                this.set_classname("form_load");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("Div00", "absolute", "12", "64", "500", "500", null, null, this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.style.set_border("1px solid red");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00", "absolute", "22", "14", "222", "42", null, null, this);
            this.addChild(obj.name, obj);
            var Combo00_innerdataset = new Dataset("Combo00_innerdataset", this.Combo00);
            Combo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">combo</Col><Col id=\"datacolumn\">Base::Combo_search.xfdl</Col></Row><Row><Col id=\"codecolumn\">dataset</Col><Col id=\"datacolumn\">Base::Dataset_expr.xfdl</Col></Row><Row><Col id=\"codecolumn\">dataset2</Col><Col id=\"datacolumn\">Base::Dataset_filter.xfdl</Col></Row><Row><Col id=\"codecolumn\">excel export</Col><Col id=\"datacolumn\">Base::ExportObject.xfdl</Col></Row><Row><Col id=\"codecolumn\">fileupload</Col><Col id=\"datacolumn\">Base::FileUpload_tap.xfdl</Col></Row><Row><Col id=\"codecolumn\">video</Col><Col id=\"datacolumn\">Base::MediaPlayer_demo.xfdl</Col></Row><Row><Col id=\"codecolumn\">menu</Col><Col id=\"datacolumn\">Base::Menu_test.xfdl</Col></Row><Row><Col id=\"codecolumn\">sketch</Col><Col id=\"datacolumn\">Base::sketch.xfdl</Col></Row></Rows>");
            obj.set_innerdataset(Combo00_innerdataset);
            obj.set_taborder("1");
            obj.set_codecolumn("datacolumn");
            obj.set_datacolumn("codecolumn");
            obj.set_index("-1");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("form_load");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("form_load.xfdl", function() {

        this.Combo00_onitemchanged = function(obj,e)
        {
        	this.Div00.set_url(obj.value);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Combo00.addEventHandler("onitemchanged", this.Combo00_onitemchanged, this);

        };

        this.loadIncludeScript("form_load.xfdl");

       
    };
}
)();
