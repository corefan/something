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
                this.set_name("Dataset_expr");
                this.set_classname("Dataset_expr");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,391);
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
            obj = new TextArea("txt_result", "absolute", "342", "16", "222", "209", null, null, this);
            obj.set_taborder("2");
            obj.set_value("//");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear", "absolute", "249", "328", "63", "35", null, null, this);
            obj.set_taborder("3");
            obj.set_text("clear");
            this.addChild(obj.name, obj);

            obj = new Button("btn_lookup", "absolute", "147", "328", "92", "37", null, null, this);
            obj.set_taborder("5");
            obj.set_text("lookup");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "18", "235", "94", "21", null, null, this);
            obj.set_text("Col expr");
            obj.style.set_color("black");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "18", "267", "58", "21", null, null, this);
            obj.set_text("ColVal");
            obj.style.set_color("black");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "18", "299", "97", "21", null, null, this);
            obj.set_text("OutputColID");
            obj.style.set_color("black");
            this.addChild(obj.name, obj);

            obj = new Edit("txtColID", "absolute", "122", "232", "182", "26", null, null, this);
            obj.set_taborder("7");
            obj.set_value("expr : Grid00.binddataset == 'ds_data1' ? 'colA' : 'colB'");
            obj.set_inputtype("number");
            this.addChild(obj.name, obj);

            obj = new Edit("txtColVal", "absolute", "120", "264", "182", "26", null, null, this);
            obj.set_taborder("8");
            obj.set_value("2");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Edit("txtColoutput", "absolute", "120", "296", "182", "26", null, null, this);
            obj.set_taborder("9");
            obj.set_value("colD");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "16", "13", "295", "203", null, null, this);
            obj.set_taborder("10");
            obj.set_binddataset("ds_data1");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"colA\"/><Cell col=\"1\" text=\"colB\"/><Cell col=\"2\" text=\"colC\"/><Cell col=\"3\" text=\"colD\"/><Cell col=\"4\" text=\"ConstA\"/><Cell col=\"5\" text=\"ConstB\"/><Cell col=\"6\" text=\"ConstC\"/></Band><Band id=\"body\"><Cell text=\"bind:colA\"/><Cell col=\"1\" text=\"bind:colB\"/><Cell col=\"2\" text=\"bind:colC\"/><Cell col=\"3\" text=\"bind:colD\"/><Cell col=\"4\" text=\"bind:ConstA\"/><Cell col=\"5\" text=\"bind:ConstB\"/><Cell col=\"6\" text=\"bind:ConstC\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "330", "248", "234", "111", null, null, this);
            obj.set_text("dataset은 눈에 보이지 않는 객체이다보니 눈으로 보고싶을땐 datset을 그대로 표현한 grid에서 봐야합니다");
            obj.set_wordwrap("char");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 391, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("Dataset_expr");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("Dataset_expr.xfdl", function() {
        this.btn_lookup_onclick = function(obj,e)
        {
        	var strCol = eval("this." + this.Grid00.binddataset).lookup(this.txtColID.value, this.txtColVal.value, this.txtColoutput.value);
        	this.txt_result.set_value(this.txt_result.value + "\n"+ "구해진 Column 값 : " +strCol);		
        }

        this.btn_clear_onclick = function(obj,e)
        {
        	this.txt_result.set_value("//");
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_data1.addEventHandler("cancolumnchange", this.ds_data1_cancolumnchange, this);
            this.ds_data1.addEventHandler("oncolumnchanged", this.ds_data1_oncolumnchanged, this);
            this.btn_clear.addEventHandler("onclick", this.btn_clear_onclick, this);
            this.btn_lookup.addEventHandler("onclick", this.btn_lookup_onclick, this);

        };

        this.loadIncludeScript("Dataset_expr.xfdl");

       
    };
}
)();
