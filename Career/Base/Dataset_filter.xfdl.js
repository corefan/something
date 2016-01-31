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
                this.set_name("Dataset_filter");
                this.set_classname("Dataset_filter");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,646,460);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_data1", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><ConstColumn id=\"ConstA\" type=\"STRING\" size=\"30\" value=\"A\"/><ConstColumn id=\"ConstB\" type=\"STRING\" size=\"30\" value=\"B\"/><ConstColumn id=\"ConstC\" type=\"STRING\" size=\"30\" value=\"C\"/><Column id=\"colA\" type=\"STRING\" size=\"256\"/><Column id=\"colB\" type=\"STRING\" size=\"256\"/><Column id=\"colC\" type=\"INT\" size=\"256\"/><Column id=\"colD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"colB\">유동규</Col><Col id=\"colA\">1</Col><Col id=\"colC\">100</Col><Col id=\"colD\">투우</Col></Row><Row><Col id=\"colB\">주인희</Col><Col id=\"colA\">1</Col><Col id=\"colC\">200</Col><Col id=\"colD\">비이</Col></Row><Row><Col id=\"colB\">고준영</Col><Col id=\"colA\">2</Col><Col id=\"colC\">200</Col><Col id=\"colD\">소오</Col></Row><Row><Col id=\"colB\">이정빈</Col><Col id=\"colA\">3</Col><Col id=\"colC\">300</Col><Col id=\"colD\">프트</Col></Row><Row><Col id=\"colA\">4</Col><Col id=\"colB\">김선주</Col><Col id=\"colC\">400</Col><Col id=\"colD\">비이</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("Grid00", "absolute", "5", "12", "295", "185", null, null, this);
            obj.set_taborder("6");
            obj.set_binddataset("ds_data1");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row band=\"body\" size=\"24\"/></Rows><Band id=\"head\"><Cell col=\"0\" disptype=\"normal\" text=\"colA\"/><Cell col=\"1\" disptype=\"normal\" text=\"colB\"/><Cell col=\"2\" disptype=\"normal\" text=\"colC\"/><Cell col=\"3\" disptype=\"normal\" text=\"colD\"/><Cell col=\"4\" disptype=\"normal\" text=\"ConstA\"/><Cell col=\"5\" disptype=\"normal\" text=\"ConstB\"/><Cell col=\"6\" disptype=\"normal\" text=\"ConstC\"/></Band><Band id=\"body\"><Cell col=\"0\" disptype=\"normal\" text=\"bind:colA\"/><Cell col=\"1\" disptype=\"normal\" text=\"bind:colB\"/><Cell col=\"2\" disptype=\"normal\" text=\"bind:colC\"/><Cell col=\"3\" disptype=\"normal\" text=\"bind:colD\"/><Cell col=\"4\" disptype=\"normal\" text=\"bind:ConstA\"/><Cell col=\"5\" disptype=\"normal\" text=\"bind:ConstB\"/><Cell col=\"6\" disptype=\"normal\" text=\"bind:ConstC\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "26", "219", "58", "21", null, null, this);
            obj.set_text("filter");
            obj.style.set_color("black");
            this.addChild(obj.name, obj);

            obj = new Edit("txt_filter", "absolute", "72", "214", "244", "26", null, null, this);
            obj.set_taborder("7");
            obj.set_value("colD == '비이'");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "141", "255", "83", "40", null, null, this);
            obj.set_taborder("8");
            obj.set_text("filter");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_result", "absolute", "331", "9", "298", "431", null, null, this);
            obj.set_taborder("9");
            obj.set_value("//");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "248", "254", "65", "42", null, null, this);
            obj.set_taborder("10");
            obj.set_text("clear");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "16", "326", "294", "111", null, null, this);
            obj.set_text("데이터셋은 DB table 과 각종 component 와 bind되어 동작하게 되는 객체입니다.");
            obj.set_wordwrap("char");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 646, 460, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("Dataset_filter");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("Dataset_filter.xfdl", function() {
        this.Button01_onclick = function(obj,e)
        {
        	this.txt_result.set_value("//");	
        }

        this.Button00_onclick = function(obj,e)
        {
        	this.txt_result.set_value(this.txt_result.value + "\n"+ "filter 완료" + "\n");	
        	this.ds_data1.filter(this.txt_filter.value);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);
            this.Button01.addEventHandler("onclick", this.Button01_onclick, this);

        };

        this.loadIncludeScript("Dataset_filter.xfdl");

       
    };
}
)();
