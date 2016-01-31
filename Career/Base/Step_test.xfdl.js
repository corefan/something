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
                this.set_name("Step_test");
                this.set_classname("Step_test");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("Div00", "absolute", "66", "32", "326", "490", null, null, this);
            obj.set_taborder("0");
            obj.set_url("Base::Form_step.xfdl");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("Step_test");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "Base::Form_step.xfdl");
        };
        
        // User Script
        this.registerScript("Step_test.xfdl", function() {

        this.Step00_onstepchanged = function(obj,e)
        {
        	this.Div00.components[e.postindex].setFocus();
        }

        this.Step_test_onload = function(obj,e)
        {
        //	this.Div00.hscrollbar.set_visible(false);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.Step_test_onload, this);

        };

        this.loadIncludeScript("Step_test.xfdl");
        this.loadPreloadList();
       
    };
}
)();
