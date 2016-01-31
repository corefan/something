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
                this.set_name("Combo_search");
                this.set_classname("Combo_search");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_Data", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"colData\" type=\"STRING\" size=\"256\"/><Column id=\"colCode\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"colData\">aa123</Col><Col id=\"colCode\">1</Col></Row><Row><Col id=\"colData\">de258</Col><Col id=\"colCode\">2</Col></Row><Row><Col id=\"colData\">ue254</Col><Col id=\"colCode\">3</Col></Row><Row><Col id=\"colData\">bc456</Col><Col id=\"colCode\">4</Col></Row><Row><Col id=\"colData\">ab553</Col><Col id=\"colCode\">5</Col></Row><Row><Col id=\"colCode\">6</Col><Col id=\"colData\">dr465</Col></Row><Row><Col id=\"colCode\">7</Col><Col id=\"colData\">ue233</Col></Row><Row><Col id=\"colCode\">8</Col><Col id=\"colData\">bc984</Col></Row><Row><Col id=\"colCode\">9</Col><Col id=\"colData\">ac598</Col></Row><Row><Col id=\"colData\">가나다</Col><Col id=\"colCode\">10</Col></Row><Row><Col id=\"colData\">가나마</Col><Col id=\"colCode\">11</Col></Row><Row><Col id=\"colData\">나다라</Col><Col id=\"colCode\">12</Col></Row><Row><Col id=\"colData\">나하가</Col><Col id=\"colCode\">13</Col></Row><Row><Col id=\"colData\">가다라</Col><Col id=\"colCode\">14</Col></Row><Row><Col id=\"colData\">ㄱ나다</Col><Col id=\"colCode\">15</Col></Row><Row><Col id=\"colData\">ㄱㄴㅌ</Col><Col id=\"colCode\">16</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new TextArea("txt_result", "absolute", "286", "8", "298", "356", null, null, this);
            obj.set_taborder("2");
            obj.set_value("//");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear", "absolute", "199", "309", "79", "35", null, null, this);
            obj.set_taborder("3");
            obj.set_text("result clear");
            this.addChild(obj.name, obj);

            obj = new Static("txt_search", "absolute", "16", "22", "69", "28", null, null, this);
            obj.set_text("search");
            this.addChild(obj.name, obj);

            obj = new Static("txt_filter", "absolute", "16", "68", "69", "28", null, null, this);
            obj.set_text("filter");
            this.addChild(obj.name, obj);

            obj = new Static("txt_test", "absolute", "12", "252", "69", "28", null, null, this);
            obj.set_text("동적타입");
            this.addChild(obj.name, obj);

            obj = new Combo("cb_search", "absolute", "96", "14", "170", "41", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("9");
            obj.set_value("1");
            obj.set_text("aa123");
            obj.getSetter("useime").set("none");
            obj.set_innerdataset("@ds_Data");
            obj.set_codecolumn("colCode");
            obj.set_datacolumn("colData");
            obj.set_index("0");
            obj.set_type("search");

            obj = new Combo("Combo00", "absolute", "96", "244", "170", "41", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("10");
            obj.set_value("1");
            obj.set_text("aa123");
            obj.set_innerdataset("@ds_Data");
            obj.set_codecolumn("colCode");
            obj.set_datacolumn("colData");
            obj.set_index("0");

            obj = new Combo("cb_Combo02", "absolute", "96", "60", "170", "41", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("11");
            obj.set_value("1");
            obj.set_text("aa123");
            obj.getSetter("useime").set("none");
            obj.set_innerdataset("@ds_Data");
            obj.set_codecolumn("colCode");
            obj.set_datacolumn("colData");
            obj.set_index("0");
            obj.set_type("filter");

            obj = new Static("Static00", "absolute", "12", "116", "257", "79", null, null, this);
            obj.set_text("텍스트 입력시 search , filter기능");
            this.addChild(obj.name, obj);

            obj = new Radio("rd_type", "absolute", "12", "202", "260", "38", null, null, this);
            this.addChild(obj.name, obj);
            var rd_type_innerdataset = new Dataset("rd_type_innerdataset", this.rd_type);
            rd_type_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">dropdown</Col><Col id=\"datacolumn\">dropdown</Col></Row><Row><Col id=\"codecolumn\">filter</Col><Col id=\"datacolumn\">filter</Col></Row><Row><Col id=\"codecolumn\">search</Col><Col id=\"datacolumn\">search</Col></Row></Rows>");
            obj.set_innerdataset(rd_type_innerdataset);
            obj.set_taborder("12");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_index("0");
            obj.set_value("dropdown");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("Combo_search");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("Combo_search.xfdl", function() {

        this.btn_clear_onclick = function(obj,e)
        {
        	this.txt_result.set_value("//");
        }

        this.rd_type_onitemchanged = function(obj,e)
        {
         	this.Combo00.set_type(this.rd_type.value);
         	this.txt_result.set_value(this.txt_result.value + "\nCombo00 type :" + this.Combo00.type);	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn_clear.addEventHandler("onclick", this.btn_clear_onclick, this);
            this.cb_search.addEventHandler("onitemchanged", this.Combo01_onitemchanged, this);
            this.Combo00.addEventHandler("onitemchanged", this.Combo01_onitemchanged, this);
            this.cb_Combo02.addEventHandler("onitemchanged", this.Combo01_onitemchanged, this);
            this.rd_type.addEventHandler("onitemchanged", this.rd_type_onitemchanged, this);

        };

        this.loadIncludeScript("Combo_search.xfdl");

       
    };
}
)();
