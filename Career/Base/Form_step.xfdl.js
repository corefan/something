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
                this.set_name("Form_E_canstepchange_52970_01");
                this.set_classname("23711_Buttoncssimage_01");
                this.set_titletext("Form_E_canstepchange_52970_01");
                this._setFormPosition(0,0,310,450);
            }
            this.getSetter("inheritanceid").set("");
            this.getSetter("ontouch").set("Form_E_canstepchange_52970_01_ontouch");

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static02", "absolute", "28", "16", "240", "93", null, null, this);
            obj.set_text("STEP0");
            obj.style.set_align("center middle");
            obj.style.set_font("Verdana,26,bold");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_result", "absolute", "4", "351", "298", "65", null, null, this);
            obj.set_taborder("31");
            obj.set_value("요놈은 공통");
            obj.set_positionstep("-1");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "40", "16", "240", "93", null, null, this);
            obj.set_text("STEP2");
            obj.set_positionstep("2");
            obj.style.set_align("center middle");
            obj.style.set_font("Verdana,26,bold");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "36", "16", "240", "93", null, null, this);
            obj.set_text("STEP1");
            obj.set_positionstep("1");
            obj.style.set_align("center middle");
            obj.style.set_font("Verdana,26,bold");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00", "absolute", "25", "104", "257", "228", null, null, this);
            obj.set_taborder("32");
            obj.set_image("URL('../test1.jpg')");
            obj.set_stretch("fit");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer01", "absolute", "28", "104", "257", "228", null, null, this);
            obj.set_taborder("33");
            obj.set_positionstep("1");
            obj.set_image("URL('../test2.jpg')");
            obj.set_stretch("fit");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer02", "absolute", "25", "103", "257", "228", null, null, this);
            obj.set_taborder("34");
            obj.set_positionstep("2");
            obj.set_image("URL('../test3.jpg')");
            obj.set_stretch("fit");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 310, 450, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("23711_Buttoncssimage_01");
            		p.getSetter("inheritanceid").set("");
            		p.set_titletext("Form_E_canstepchange_52970_01");
            		p.getSetter("ontouch").set("Form_E_canstepchange_52970_01_ontouch");

            	}
            );
            obj.set_stepindex("");
            obj.set_stepcount("3");
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("Form_step.xfdl", function() {
        this.btn_main_onclick = function(obj,e)
        {
        	this.getOwnerFrame().set_formurl("Main_menu::Main.xfdl");		
        }

        this.btn_button_menu_onclick = function(obj,e)
        {
        	this.getOwnerFrame().set_formurl("Sub_menu::Form_menu7.xfdl");		
        }

        
        this.btn_clear_onclick = function(obj,e)
        {
        	this.txt_result.set_value("//");
        }

        
        this.Form_E_canstepchange_52970_01_canstepchange = function(obj,e)
        {
        	this.txt_result.set_value(this.txt_result.value + "\n=== canstepchange Event ===");
        	this.txt_result.set_value(this.txt_result.value + "\n e.eventid: " + e.eventid);
        	this.txt_result.set_value(this.txt_result.value + "\n e.fromobject: " + e.fromobject);
        	this.txt_result.set_value(this.txt_result.value + "\n e.fromoreferencebject: " + e.fromreferenceobject);
        	this.txt_result.set_value(this.txt_result.value + "\n e.postindex: " + e.postindex);
        	this.txt_result.set_value(this.txt_result.value + "\n e.preindex: " + e.preindex);
        	this.txt_result.set_value(this.txt_result.value + "\n");
        	
        	if(this.rd_return.text == "true")
         	{
        		return true;
         	}
         	else if(this.rd_return.text == "false")
         	{
        		return false;
         	}
         	else
         	{
         	}
        }

        this.Form_E_canstepchange_52970_01_onstepchanged = function(obj,e)
        {
        	this.txt_result.set_value(this.txt_result.value +  "\n=== onstepchanged Event ===");	
        }

        this.Form_E_canstepchange_52970_01_ontouch = function(obj,e)
        {
        	trace(11);
        	this.txt_result.set_value(this.txt_result.value + "\n" + e.type);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.txt_result.addEventHandler("oneditclick", this.txt_result_oneditclick, this);

        };

        this.loadIncludeScript("Form_step.xfdl");

       
    };
}
)();
