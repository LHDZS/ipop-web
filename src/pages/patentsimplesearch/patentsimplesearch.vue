<style lang="less" scoped>
.patentsimplesearch {
    width: 100%;
    height: 100%;
    padding: 10px;
    box-sizing: border-box;
    .no-result{
    /* margin: 60px auto; */
    padding-bottom: 60px;
    }
}
.patentadvancedsearch .reverseback {
    width: 100%;
    text-align: left;
    line-height: 46px;
    color: #409EFF;
    font-size: 16px;
    cursor: pointer;
}
.bjt {
    background: url('/imgs/ditu.png') top;
    background-repeat:no-repeat;
}
</style>

<template>
<div class="patentsimplesearch">
  <div class="row01" v-if="a">
      <div class="image bjt" style="margin: 10% auto;">
          <span class="search-text">智能专利检索</span><br>
          <div style="margin-top: 10px;">
            <el-input v-model="input" placeholder="请输入您要检索的专利名称、申请号、申请人等内容"
                             style="color:#DE3883;width:800px">
               <el-button class="leibie-btn" slot="append" @click="checkClick">数据范围
                   <i class="el-icon-arrow-down">
                   </i>
               </el-button>
               <el-button class="search-btn1" slot="append" style="color: white" @click="search1">
                   检索
               </el-button>
            </el-input>
            <div class="search-keywords">
              <el-tabs v-model="activeName">
                <el-tab-pane label="专利名称" name="patentname"></el-tab-pane>
                <el-tab-pane label="申请号" name="applynum"></el-tab-pane>
                <el-tab-pane label="公开号" name="publishnum"></el-tab-pane>
                <el-tab-pane label="申请人" name="applier"></el-tab-pane>
                <el-tab-pane label="发明人" name="inventor"></el-tab-pane>
              </el-tabs>
            </div>
            <div v-if="b" style="z-index:999; position: relative;">
              <el-card
                      style="width:700px;font-size:13px;height:auto;text-align:left;padding-bottom: 20px;position: absolute">
                 <el-checkbox v-model="checkAll" :indeterminate="isIndeterminate" @change="handleCheckAllChange">
                   全部数据
                 </el-checkbox>
                 <div class="line"></div>
                 <el-row style="height:25px;">
                   <div style="width:200px;display:inline-block;">
                     <el-checkbox v-model="checkAll1" @change="handleCheckAllChange1" :indeterminate="isIndeterminate1">
                       中国
                     </el-checkbox>
                   </div>
                   <div style="width:440px;display:inline-block;">
                     <el-checkbox-group v-model="checked"  @change="handleCheckedCitiesChange1">
                       <el-checkbox v-for="(city1,key) in cities1" :label="city1" :key="key">{{city1}}</el-checkbox>
                     </el-checkbox-group>
                   </div>
                 </el-row>
                 <div class="line"></div>
                 <el-row style="height:50px;">
                   <div style="width:200px;display:inline-block;">
                     <el-checkbox v-model="checkAll2" @change="handleCheckAllChange2" :indeterminate="isIndeterminate2">
                       主要国家/地区/组织
                     </el-checkbox>
                   </div>
                   <div style="width:440px;display:inline-block;">
                     <el-checkbox-group v-model="checkedmain" @change="handleCheckedCitiesChange2">
                       <el-checkbox v-for="(city2,key) in cities2.slice(0,5)" :label="city2" :key="key">{{city2}}</el-checkbox>
                     </el-checkbox-group>
                     <el-checkbox-group v-model="checkedmain" @change="handleCheckedCitiesChange2" style="margin-top:10px;">
                       <el-checkbox v-for="(city2,key) in cities2.slice(5,10)" :label="city2" :key="key + 1">{{city2}}</el-checkbox>
                     </el-checkbox-group>
                   </div>
                 </el-row>
                 <div class="line"></div>
                 <el-row style="height:50px;">
                   <div style="width:200px;display:inline-block;">
                     <el-checkbox v-model="checkAll3" @change="handleCheckAllChange3" :indeterminate="isIndeterminate3">
                       其他国家/地区/组织
                     </el-checkbox>
                   </div>
                   <div style="width:440px;display:inline-block;">
                     <el-checkbox-group v-model="checkedother" @change="handleCheckedCitiesChange3">
                       <el-checkbox v-for="city3 in cities3.slice(0,4)" :label="city3" :key="city3">{{city3}}</el-checkbox>
                     </el-checkbox-group>
                     <el-checkbox-group v-model="checkedother" @change="handleCheckedCitiesChange3" style="margin-top:10px;">
                       <el-checkbox v-for="city3 in cities3.slice(4,6)" :label="city3" :key="city3">{{city3}}</el-checkbox>
                     </el-checkbox-group>
                   </div>
                 </el-row>
              </el-card>
            </div>
          </div>
      </div>
  </div>

  <div v-if="!a" class="search-warp-row01" >
    <img class="patentyc-logo" src="/imgs/patentlogo.jpg" style="cursor:pointer" @click="logoclick"/>
    <div class="search-input">
        <div style="margin-top: 20px;" >
          <el-input v-model="input" placeholder="请输入您要检索的专利名称、申请号、申请人等内容"
                           style="color:#DE3883;width:700px">
             <el-button class="leibie-btn" slot="append" @click="checkClick">数据范围
                 <i class="el-icon-arrow-down">
                 </i>
             </el-button>
             <el-button class="search-btn1" slot="append" style="color: white" @click="search2">
                 检索
             </el-button>
          </el-input>
          <div class="search-keywords" >
            <el-tabs v-model="activeName" @tab-click="handleClick">
              <el-tab-pane label="专利名称" name="patentname"></el-tab-pane>
              <el-tab-pane label="申请号" name="applynum"></el-tab-pane>
              <el-tab-pane label="公开号" name="publishnum"></el-tab-pane>
              <el-tab-pane label="申请人" name="applier"></el-tab-pane>
              <el-tab-pane label="发明人" name="inventor"></el-tab-pane>
            </el-tabs>
          </div>
          <div v-if="b" style="z-index:999; position: relative;">
            <el-card
                    style="width:700px;font-size:13px;height:auto;text-align:left;padding-bottom: 20px;position: absolute">
               <el-checkbox v-model="checkAll" :indeterminate="isIndeterminate" @change="handleCheckAllChange">
                 全部数据
               </el-checkbox>
               <div class="line"></div>
               <el-row style="height:25px;">
                 <div style="width:200px;display:inline-block;">
                   <el-checkbox v-model="checkAll1" @change="handleCheckAllChange1" :indeterminate="isIndeterminate1">
                     中国
                   </el-checkbox>
                 </div>
                 <div style="width:440px;display:inline-block;">
                   <el-checkbox-group v-model="checked"  @change="handleCheckedCitiesChange1">
                     <el-checkbox v-for="city1 in cities1" :label="city1" :key="city1">{{city1}}</el-checkbox>
                   </el-checkbox-group>
                 </div>
               </el-row>
               <div class="line"></div>
               <el-row style="height:50px;">
                 <div style="width:200px;display:inline-block;">
                   <el-checkbox v-model="checkAll2" @change="handleCheckAllChange2" :indeterminate="isIndeterminate2">
                     主要国家/地区/组织
                   </el-checkbox>
                 </div>
                 <div style="width:440px;display:inline-block;">
                   <el-checkbox-group v-model="checkedmain" @change="handleCheckedCitiesChange2">
                     <el-checkbox v-for="city2 in cities2.slice(0,5)" :label="city2" :key="city2">{{city2}}</el-checkbox>
                   </el-checkbox-group>
                   <el-checkbox-group v-model="checkedmain" @change="handleCheckedCitiesChange2" style="margin-top:10px;">
                     <el-checkbox v-for="city2 in cities2.slice(5,10)" :label="city2" :key="city2">{{city2}}</el-checkbox>
                   </el-checkbox-group>
                 </div>
               </el-row>
               <div class="line"></div>
               <el-row style="height:50px;">
                 <div style="width:200px;display:inline-block;">
                   <el-checkbox v-model="checkAll3" @change="handleCheckAllChange3" :indeterminate="isIndeterminate3">
                     其他国家/地区/组织
                   </el-checkbox>
                 </div>
                 <div style="width:440px;display:inline-block;">
                   <el-checkbox-group v-model="checkedother" @change="handleCheckedCitiesChange3">
                     <el-checkbox v-for="city3 in cities3.slice(0,4)" :label="city3" :key="city3">{{city3}}</el-checkbox>
                   </el-checkbox-group>
                   <el-checkbox-group v-model="checkedother" @change="handleCheckedCitiesChange3" style="margin-top:10px;">
                     <el-checkbox v-for="city3 in cities3.slice(4,6)" :label="city3" :key="city3">{{city3}}</el-checkbox>
                   </el-checkbox-group>
                 </div>
               </el-row>
            </el-card>
          </div>
        </div>
    </div>
    <div style="clear:both"></div>
    <div class="selected-warp">
      <span style="color:#333333;">已选条件: </span>
      <el-tag style="margin-left: 20px;font-size:10px;" size="mini"
              class="item-text"  :disable-transitions="false"
      >
        <span>{{active[activeName]}}:{{input}}</span>
      </el-tag>
      <el-tag style="margin-left: 20px;font-size:10px;" size="mini" closable
              class="item-text"  :disable-transitions="false" v-for="(tag,key) in checkedoptions" :key="key"
              @close="handleClose(tag)"
      >
        <span>{{tag.lable}}</span>
      </el-tag>
    </div>
    <div style="width:1050px;color:black;margin:auto;margin-top:18px;">
      <div class="leixing-warp">
        <el-row slot="desc">
          <el-col :span="3">
              <span style="color: #999999;">专利类型(中国)：</span>
          </el-col>
          <el-col class="item" v-for="o in datalist1.patenttype" :key="o.lable" :span="3" >
              <el-button type="text"  size="mini"  style="color:rgb(48, 49, 51)" @click="patenttypeclick(o)">
                  {{o.lable}}<var>({{o.num}})</var>
              </el-button>
          </el-col>
       </el-row>
     </div>
    </div>
    <div style="width:1050px;color:black;margin:auto;margin-top:10px;">
      <div class="leixing-warp">
        <el-row slot="desc">
          <el-col :span="3">
              <span style="color: #999999;">法律状态(中国)：</span>
          </el-col>
          <el-col class="item1" v-for="o in datalist1.status" :key="o.lable" :span="2" >
              <el-button type="text"  size="mini"  style="color:rgb(48, 49, 51)" @click="statusclick(o)">
                  {{o.lable}}<var>({{o.num}})</var>
              </el-button>
          </el-col>
       </el-row>
     </div>
    </div>
    <div style="width:1050px;color:black;margin:auto;margin-top:10px;">
      <div class="leixing-warp">
        <el-row slot="desc">
          <el-col :span="2">
              <span style="color: #999999;text-align:right">申请日期：</span>
          </el-col>
          <el-col :span="21">
            <el-row>
              <el-col class="item1" v-for="o in datalist1.applydate.slice(0,8)" :key="o.lable" :span="3" >
                <el-button type="text"  size="mini"  style="color:rgb(48, 49, 51)" @click="applydateclick(o)">
                    {{o.lable}}<var>({{o.num}})</var>
                </el-button>
              </el-col>
            </el-row>
            <el-row v-if="!isShow">
              <el-col class="item1" v-for="o in datalist1.applydate.slice(8,100)" :key="o.lable" :span="3" >
                <el-button type="text"  size="mini"  style="color:rgb(48, 49, 51)" @click="applydateclick(o)">
                    {{o.lable}}<var>({{o.num}})</var>
                </el-button>
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="1">
            <el-button v-if="isShow" style="color:rgba(130,130,130,1);font-size:12px;border-radius:0px;border-bottom:none;"
                type="text" size="mini" @click="onclick">更多
                <i class="el-icon-arrow-right"></i>
            </el-button>
            <el-button v-if="!isShow" style="color:rgba(130,130,130,1);font-size:12px;border-radius:0px;border-bottom:none;"
              type="text" size="mini" @click="onclick">更多
                <i class="el-icon-arrow-down" style="color:#108EE9"></i>
            </el-button>
          </el-col>

       </el-row>
     </div>
    </div>
    <div style="width:1050px;color:black;margin:auto;margin-top:10px;">
      <div class="leixing-warp">
        <el-row slot="desc">
          <el-col :span="2">
              <span style="color: #999999;">公开日期：</span>
          </el-col>
          <el-col :span="21">
            <el-row>
              <el-col class="item1" v-for="o in datalist1.publishdate.slice(0,8)" :key="o.lable" :span="2" >
                  <el-button type="text"  size="mini"  style="color:rgb(48, 49, 51)" @click="publishdateclick(o)">
                      {{o.lable}}<var>({{o.num}})</var>
                  </el-button>
              </el-col>
            </el-row>
            <el-row v-if="!isShow2">
              <el-col class="item1" v-for="o in datalist1.publishdate.slice(8,100)" :key="o.lable" :span="3" >
                <el-button type="text"  size="mini"  style="color:rgb(48, 49, 51)" @click="applydateclick(o)">
                    {{o.lable}}<var>({{o.num}})</var>
                </el-button>
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="1">
            <el-button v-if="isShow2" style="color:rgba(130,130,130,1);font-size:12px;border-radius:0px;border-bottom:none;"
                type="text" size="mini" @click="onclick2">更多
                <i class="el-icon-arrow-right"></i>
            </el-button>
            <el-button v-if="!isShow2" style="color:rgba(130,130,130,1);font-size:12px;border-radius:0px;border-bottom:none;"
              type="text" size="mini" @click="onclick2">更多
                <i class="el-icon-arrow-down" style="color:#108EE9"></i>
            </el-button>
          </el-col>
       </el-row>
     </div>
    </div>
  </div>
  <div v-if="!a">
    <div v-if="datalist2.length==0" class="no-result" style="text-align: center;">
        <img src="/imgs/bjclogo.jpg" style="width:150px;text-align: center;"/>
        <div class="no-result-row1">暂无查出您想要的信息~</div>
        <div class="no-result-row1">请输入关键词或选择检索数据范围进行检索！</div>
    </div>
    <div v-if="datalist2.length!=0">
      <div class="total-warp">
        <div class="total">
            <el-button type="text" size="small" style="color:#828282" disabled>共查到 <span
                    style="color:#108EE9">{{total}}条</span>
                专利信息
            </el-button>
            <el-checkbox style="margin-left:20px;" :indeterminate="isIndeterminateAnalysis" v-model="checkAllAnalysis" @change="handleCheckAllChangeAnalysis">
              全选
            </el-checkbox>
            <el-button style="float:right;margin-top:6px;margin-left:6px;" type="primary" size="mini" @click="patentIntelligence">
                <i class="fa fa-bar-chart fa-lg" aria-hidden="true"></i>
              智能分析
            </el-button>
            <el-button style="float:right;margin-top:6px;" type="primary" size="mini" @click="patentAnalysis">
                <i class="fa fa-bar-chart fa-lg" aria-hidden="true"></i>
              统计分析
            </el-button>
            <div style="float:right;margin-right:20px;color:#409EFF;font-size: 14px;cursor: pointer">批量下载</div>
        </div>
      </div>
      <div class="result-warp2">
        <div style="padding:10px;">
          <el-table :data="datalist2" :header-cell-style="tableHeaderColor" border :row-style="tableRowStyle" ref="multipleTable"
          style="margin-top:10px" @selection-change="handleSelectionChange">
            <el-table-column type="selection" width="40"></el-table-column>
            <el-table-column prop="applynum" label="申请号" width="110"></el-table-column>
            <el-table-column prop="publishnum" label="公开号" width="120"></el-table-column>
            <el-table-column prop="patentname" label="专利名称" width="160"></el-table-column>
            <el-table-column prop="pubstatus" label="法律状态" width="80">
              <template slot-scope="scope">
                <div v-if="scope.row.pubstatus == '在审'" style="color:#409EFF">
                  {{scope.row.pubstatus}}
                </div>
                <div v-if="scope.row.pubstatus == '有效'" style="color:#67C23A">
                  {{scope.row.pubstatus}}
                </div>
                <div v-if="scope.row.pubstatus == '无效'" style="color:#F56538">
                  {{scope.row.pubstatus}}
                </div>
              </template>
            </el-table-column>
            <el-table-column prop="applier" label="申请人" width="190"></el-table-column>
            <el-table-column prop="inventor" label="发明人" width="130"></el-table-column>
            <el-table-column prop="applydate" label="申请日期" width="90"></el-table-column>
            <el-table-column prop="publishdate" label="公开日期" width="90"></el-table-column>
            <el-table-column prop="articletype" label="文献类型" width="80"></el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button type="text" size="small" @click="patentdetail(scope.row)">查看详情</el-button>
              </template>
            </el-table-column>
          </el-table>
          <el-footer class="footer-row" v-if="total>0">

              <el-pagination
                      layout=" prev, pager, next, jumper,sizes,total"
                      :currentPage="currentpage"
                      :page-size="pagesize"
                      @current-change="handleCurrentChange"
                      @size-change="handleSizeChange"
                      :page-sizes="[20,50,100,200,500]"
                      :total="total">
              </el-pagination>
          </el-footer>
        </div>
      </div>
    </div>
  </div>
  <div id="wave-container" class="animate-wave-container" style="width: 1920px;">
    <div class="wave-svg-s1">
        <svg id="wave-svg" width="1920" height="178px" viewBox="0 0 1920 178" preserveAspectRatio="xMinYMax" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <defs>
                <linearGradient id="wave-gradient1" x1="0%" y1="0%" x2="100%" y2="0">
                    <stop offset="0%" style="stop-color:rgba(28,164,252, 0.5);stop-opacity:1"></stop>
                    <stop offset="50%" style="stop-color:rgba(28,164,252,1);stop-opacity:1"></stop>
                    <stop offset="100%" style="stop-color:rgba(28,164,252,0.5);stop-opacity:1"></stop>
                </linearGradient>
            </defs>
            <g id="s1-copy" transform="translate(0.000000, -22.000000)">
                <g id="线条组合" transform="translate(0.000000, 22.000000)">
                    <path class="wave-path1" d="
                        M1920,0.047
                        C1707.9649659722222,0.047 1643.2576798611112,62.965 1448.2226458333332,62.965
                        C1253.1876118055557,62.965 1141.718065277778,24 946.6817097222223,24
                        C751.6466756944444,24 661.0506604166667,62.965 466.01562638888896,62.965
                        C270.9792708333334,62.965 195.03503402777778,0 0,0
                        L0,175.047
                        L1920,175.047
                        C1920,175.047 1920.1004361111113,0.047 1920,0.047" id="S3" opacity="0.100000001"></path>
                </g>
            </g>
        </svg>
    </div>
    <div class="wave-link-s1">
        <div class="wave-keywords-link animated fadeIn" style="top:55px;left:436.1041666666667px" @click="search1('5G')">
        <span class="wave-circle-icon animated fadeIn">
            <span class="wave-circle-icon-big"></span>
            <span class="wave-circle-icon-small"></span>
        </span>
            <span class="wave-keywords-text animated fadeIn">5G</span>
        </div><div class="wave-keywords-link animated fadeIn" style="top:55px;left:1427.25px" @click="search1('大数据')">
        <span class="wave-circle-icon animated fadeIn">
            <span class="wave-circle-icon-big"></span>
            <span class="wave-circle-icon-small"></span>
        </span>
            <span class="wave-keywords-text animated fadeIn">大数据</span>
        </div>
    </div>
    <div class="wave-svg-s2">
        <svg id="wave-svg" width="1920" height="178px" viewBox="0 0 1920 178" preserveAspectRatio="xMinYMax" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">

            <g id="s1-copy" transform="translate(0.000000, -22.000000)">
                <g id="线条组合" transform="translate(0.000000, 22.000000)">
                    <path class="wave-path1" d="
                        M1920,175
                        L0,175
                        L0,85
                        C158.58333333333334,85 272.93956434861116,50.0224241 431.5228976819444,50.0224241
                        C590.1062310152778,50.0224241 811.3264802881945,118.825457 969.9098136215279,118.825457
                        C1128.4931469548612,118.825457 1303.5866638055556,50.0224241 1462.1699971388891,50.0224241
                        C1620.7533304722224,50.0224241 1744.4166666666667,83 1920,85
                        L1920,175 Z" id="S2" opacity="0.200000003"></path>
                </g>
            </g>
        </svg>
    </div>
    <div class="wave-link-s2">
        <div class="wave-keywords-link animated fadeIn" style="top:110px;left:925.0694444444445px" @click="search1('人工智能')">
        <span class="wave-circle-icon animated fadeIn">
            <span class="wave-circle-icon-big"></span>
            <span class="wave-circle-icon-small"></span>
        </span>
            <span class="wave-keywords-text animated fadeIn">人工智能</span>
        </div>
    </div>
    <div class="wave-svg-s3">
        <svg id="wave-svg" width="1920" height="178px" viewBox="0 0 1920 178" preserveAspectRatio="xMinYMax" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g id="s1-copy" transform="translate(0.000000, -22.000000)">
                <g id="线条组合" transform="translate(0.000000, 22.000000)">
                    <path class="wave-path1" d="
                        M1920,175.132909
                        L0,175.132909
                        L0,112.132909
                        C158.58333333333334,112.132909 238.7215561576389,145.132909 397.30488949097224,145.132909
                        C555.8882228243056,145.132909 768.4249060125001,99 927.0082393458334,99
                        C1085.5915726791668,99 1310.6518499708334,139.47418 1469.2351885902779,139.47418
                        C1627.8185219236111,139.47418 1744.4166666666667,113.132909 1920,112.132909
                        L1920,175.132909 Z" id="S1" opacity="0.300000012"></path>
                </g>
            </g>
        </svg>
    </div>
    <div class="wave-link-s3">
        <div class="wave-keywords-link animated fadeIn" style="top:138px;left:363.4201388888889px" @click="search1('区块链')">
        <span class="wave-circle-icon animated fadeIn">
            <span class="wave-circle-icon-big"></span>
            <span class="wave-circle-icon-small"></span>
        </span>
            <span class="wave-keywords-text animated fadeIn">区块链</span>
        </div><div class="wave-keywords-link animated fadeIn" style="top:132px;left:1453.6805555555557px" @click="search1('计算机')">
        <span class="wave-circle-icon animated fadeIn">
            <span class="wave-circle-icon-big"></span>
            <span class="wave-circle-icon-small"></span>
        </span>
            <span class="wave-keywords-text animated fadeIn">计算机</span>
        </div>
    </div>
    <div class="wave-svg-s4">
        <svg id="wave-svg" width="1920" height="178px" viewBox="0 0 1920 178" preserveAspectRatio="xMinYMax" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g id="s1-copy" transform="translate(0.000000, -22.000000)">
                <g id="线条组合" transform="translate(0.000000, 22.000000)">
                    <path class="wave-path1" d="
                        M1920,0.047
                        C1707.9649659722222,0.047 1643.2576798611112,62.965 1448.2226458333332,62.965
                        C1253.1876118055557,62.965 1141.718065277778,24 946.6817097222223,24
                        C751.6466756944444,24 661.0506604166667,62.965 466.01562638888896,62.965
                        C270.9792708333334,62.965 195.03503402777778,0 0,0
                        L0,175.047
                        L1920,175.047
                        C1920,175.047 1920.1004361111113,0.047 1920,0.047" id="S3" opacity="0.100000001"></path>
                </g>
            </g>
        </svg>
    </div>
    <div class="wave-link-s4">
        <div class="wave-keywords-link animated fadeIn" style="top:55px;left:436.1041666666667px" @click="search1('纳米')">
        <span class="wave-circle-icon animated fadeIn">
            <span class="wave-circle-icon-big"></span>
            <span class="wave-circle-icon-small"></span>
        </span>
            <span class="wave-keywords-text animated fadeIn">纳米</span>
        </div><div class="wave-keywords-link animated fadeIn" style="top:55px;left:1427.25px" @click="search1('移动终端')">
        <span class="wave-circle-icon animated fadeIn">
            <span class="wave-circle-icon-big"></span>
            <span class="wave-circle-icon-small"></span>
        </span>
            <span class="wave-keywords-text animated fadeIn">移动终端</span>
        </div>
    </div>
    <div class="wave-svg-s5">
        <svg id="wave-svg" width="1920" height="178px" viewBox="0 0 1920 178" preserveAspectRatio="xMinYMax" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g id="s1-copy" transform="translate(0.000000, -22.000000)">
                <g id="线条组合" transform="translate(0.000000, 22.000000)">
                    <path class="wave-path1" d="
                        M1920,175
                        L0,175
                        L0,85
                        C158.58333333333334,85 272.93956434861116,50.0224241 431.5228976819444,50.0224241
                        C590.1062310152778,50.0224241 811.3264802881945,118.825457 969.9098136215279,118.825457
                        C1128.4931469548612,118.825457 1303.5866638055556,50.0224241 1462.1699971388891,50.0224241
                        C1620.7533304722224,50.0224241 1744.4166666666667,83 1920,85
                        L1920,175 Z" id="S2" opacity="0.200000003"></path>
                </g>
            </g>
        </svg>
    </div>
    <div class="wave-link-s5">
        <div class="wave-keywords-link animated fadeIn" style="top:110px;left:925.0694444444445px" @click="search1('通信系统')">
        <span class="wave-circle-icon animated fadeIn">
            <span class="wave-circle-icon-big"></span>
            <span class="wave-circle-icon-small"></span>
        </span>
            <span class="wave-keywords-text animated fadeIn">通信系统</span>
        </div>
    </div>
    <div class="wave-svg-s6">
        <svg id="wave-svg" width="1920" height="178px" viewBox="0 0 1920 178" preserveAspectRatio="xMinYMax" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g id="s1-copy" transform="translate(0.000000, -22.000000)">
                <g id="线条组合" transform="translate(0.000000, 22.000000)">
                    <path class="wave-path1" d="
                        M1920,175.132909
                        L0,175.132909
                        L0,112.132909
                        C158.58333333333334,112.132909 238.7215561576389,145.132909 397.30488949097224,145.132909
                        C555.8882228243056,145.132909 768.4249060125001,99 927.0082393458334,99
                        C1085.5915726791668,99 1310.6518499708334,139.47418 1469.2351885902779,139.47418
                        C1627.8185219236111,139.47418 1744.4166666666667,113.132909 1920,112.132909
                        L1920,175.132909 Z" id="S1" opacity="0.300000012"></path>
                </g>
            </g>
        </svg>
    </div>
    <div class="wave-link-s6">
        <div class="wave-keywords-link animated fadeIn" style="top:138px;left:363.4201388888889px" @click="search1('数据传输')">
        <span class="wave-circle-icon animated fadeIn">
            <span class="wave-circle-icon-big"></span>
            <span class="wave-circle-icon-small"></span>
        </span>
            <span class="wave-keywords-text animated fadeIn">数据传输</span>
        </div><div class="wave-keywords-link animated fadeIn" style="top:132px;left:1453.6805555555557px" @click="search1('控制模块')">
        <span class="wave-circle-icon animated fadeIn">
            <span class="wave-circle-icon-big"></span>
            <span class="wave-circle-icon-small"></span>
        </span>
        <span class="wave-keywords-text animated fadeIn">控制模块</span>
    </div>
    </div>
  </div>
</div>
</template>

<script>
import "../../../public/css/patentyc.css";
export default {
    data:function(){
      return {
        a:true,
        b:false,
        checkAll:true,
        isIndeterminate:false,
        cities1:["中国大陆","香港","澳门","台湾"],
        cities2:["EPO","WIPO","美国","日本","韩国","英国","法国","德国","俄罗斯","瑞士"],
        cities3:["奥地利","澳大利亚","西班牙","意大利","加拿大","瑞典"],
        isIndeterminate1: false,
        checkAll1:true,
        isIndeterminate2: false,
        checkAll2:true,
        isIndeterminate3: false,
        checkAll3:true,
        checked:["中国大陆","香港","澳门","台湾"],
        checkedmain:["EPO","WIPO","美国","日本","韩国","英国","法国","德国","俄罗斯","瑞士"],
        checkedother:["奥地利","澳大利亚","西班牙","意大利","加拿大","瑞典"],
        activeName: "patentname",
        active:{patentname:"专利名称",applynum:"申请号",publishnum:"公开号",applier:"申请人",inventor:"发明人"},
        input:"",
        checkedoptions:[],
        patenttype:"",
        status:"",
        applydate:"",
        publishdate:"",
        pagesize:20,
        currentpage:1,
        datalist1:{
          patenttype:[
            {code:"fmsq",lable:"发明申请",num:0},
            {code:"syxx",lable:"实用新型",num:0},
            {code:"wgsj",lable:"外观设计",num:0}
          ],
          status:[
            {code:"yx",lable:"有效",num:0},
            {code:"zs",lable:"在审",num:0},
            {code:"wx",lable:"无效",num:0}
          ],
          applydate:[
            {code:"2001",lable:"2001年",num:0},{code:"2002",lable:"2002年",num:0},
            {code:"2003",lable:"2003年",num:0},{code:"2004",lable:"2004年",num:0},
            {code:"2005",lable:"2005年",num:0},{code:"2006",lable:"2006年",num:0},
            {code:"2007",lable:"2007年",num:0},{code:"2008",lable:"2008年",num:0}
          ],
          publishdate:[
            {code:"2001",lable:"2001年",num:0},{code:"2002",lable:"2002年",num:0},
            {code:"2003",lable:"2003年",num:0},{code:"2004",lable:"2004年",num:0},
            {code:"2005",lable:"2005年",num:0},{code:"2006",lable:"2006年",num:0},
            {code:"2007",lable:"2007年",num:0},{code:"2008",lable:"2008年",num:0}
          ]
        },
        isShow:true,
        isShow2:true,
        total:20,
        datalist2:[],

        isIndeterminateAnalysis: false,
        checkAllAnalysis:false,
        multipleSelection:[],
        checkListAnalysis:[],
      };
    },
    methods:{
      patentIntelligence() {
        var that=this;
        console.log("--------分析可视化前------------");
        var object=JSON.parse(localStorage.getItem("patentyc_patentanalysis")) || '';
        var params = { search: 'simpleall', obj: object };
        this.loading = true;
        this.$post("web/patentycCtl/ezReportUploadData",params).then(function (d) {
            console.log("---------------------------------------------");
            console.log(d);
            that.loading = false;
            if(d.status == 0 && d.data){
                that.$router.push({path: '/iframehtml'});
                that.$root.loadingHome = true;
                that.$root.iframeUrl = 'http://81.70.95.248:81/ezOutputL.aspx?guid=' + d.data.uid;
            }else{
                that.$message.error('分析失败,请重试!'); 
                that.agentRankShow=false;
            }
        });
      },
      checkClick(){
        this.b=!this.b;
      },
      search(){
        if(!this.input){
          this.$message.warning("输入的搜索关键字不能为空");
          return false;
        };
        var obj={
          lable:this.activeName,
          content:this.input,
          range:{
            china:this.checked,
            main:this.checkedmain,
            other:this.checkedother
          },
          patenttype:this.patenttype,
          status:this.status,
          applydate:this.applydate,
          publishdate:this.publishdate,
          pagesize:this.pagesize,
          currentpage:this.currentpage,
        };
        var that=this;
        console.log(obj);
        const loadingbyc = this.$loading({
            lock: true,
            text: 'Loading',
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.7)'
        });
        this.$post("/web/patentycCtl/simplesearch",obj).then(function (d) {
          console.log("--------/web/patentycCtl/simplesearch----------");
          console.log(d);
          if(d.status==0){
            loadingbyc.close();
            that.total=d.data.total;
            if(d.data.dataList1.patenttype.length==0){
              d.data.dataList1.patenttype=[
                {code:"发明",lable:"发明申请",num:0},
                {code:"实用新型",lable:"实用新型",num:0},
                {code:"外观设计",lable:"外观设计",num:0}
              ]
            }
            if(d.data.dataList1.status==0){
              d.data.dataList1.status=[
                {code:"有效",lable:"有效",num:0},
                {code:"在审",lable:"在审",num:0},
                {code:"无效",lable:"无效",num:0}
              ]
            }
            that.datalist1=d.data.dataList1;
            that.datalist2=d.data.dataList2;
            if(that.checkAllAnalysis){
              that.$nextTick(function(){
                that.datalist2.forEach(d=>{
                  that.$refs.multipleTable.toggleRowSelection(d,true);
                })
              })
            }else{
              that.$nextTick(function(){
                for(var i=0;i<that.checkListAnalysis.length;i++){
                  if(that.currentpage==that.checkListAnalysis[i].pageNo){
                    for (var j=0;j<that.checkListAnalysis[i].data.length;j++){
                      that.datalist2.forEach(d=>{
                        if(d.applynum==that.checkListAnalysis[i].data[j].applynum){
                          console.log("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzz");
                          that.$refs.multipleTable.toggleRowSelection(d,true);
                        }
                      })
                    }
                  }
                }
              })
            }

          }
          that.a=false;that.b=false;
          $('#wave-container').css('display','none');
        })

      },
      search1(val){
        if (typeof val == 'string') {
          this.input = val;
        };
        this.total=0;
        this.currentpage=1;
        /*清楚勾选的痕迹*/
        this.checkAllAnalysis=false;
        this.checkListAnalysis=[];
        this.multipleSelection=[];
        this.search();
      },
      search2(){
        this.total=0;
        this.currentpage=1;
        this.checkedoptions=[];
        this.patenttype="";
        this.status="";
        this.applydate="";
        this.publishdate="";
        /*清楚勾选的痕迹*/
        this.checkAllAnalysis=false;
        this.checkListAnalysis=[];
        this.multipleSelection=[];
        this.search();
      },
      onclick(){
        this.isShow=!this.isShow;
      },
      onclick2(){
        this.isShow2=!this.isShow2;
      },
      handleSizeChange(val){
        console.log("------------handleSizeChange--------------");
        console.log(val);
        this.pagesize=val;
        this.currentpage=1;
        /*清楚勾选的痕迹*/
        this.checkAllAnalysis=false;
        this.checkListAnalysis=[];
        this.multipleSelection=[];
        this.search();
      },
      handleCurrentChange(val){
        console.log("------------handleCurrentChange--------------");
        if(!this.checkAllAnalysis){
          var bool=true;
          for(var i=0;i< this.checkListAnalysis.length;i++){
            if(this.checkListAnalysis[i].pageNo==this.currentpage){
              bool=false;
              this.checkListAnalysis[i].data=this.multipleSelection;
              break;
            }
          }
          if(bool){
            var item={pageNo:this.currentpage,data:this.multipleSelection};
            this.checkListAnalysis.push(item);
          }
        }

        this.currentpage=val;
        this.search();
      },
      patentdetail(row){
        console.log(row);
        var localurl = location.href;
        var base = localurl.split("#");
        var url = base[0] + "p#/patentdetail?applynum=" + row.applynum + "&publishnum=" + row.publishnum+"&activeIndex=1";
        window.open(url);

        // var url = base[0] + "#/patentdetail";
        // this.$root.windowOpen({
        //   url:url,
        //   title:"专利详情",
        //   params:[
        //     {name:"applynum",value:row.applynum},
        //     {name:"publishnum",value:row.publishnum},
        //     {name:"activeIndex",value:1}
        //   ]
        // })
      },
      handleClick(){
        this.total=0;
        this.currentpage=1;
        this.checkedoptions=[];
        this.patenttype="";
        this.status="";
        this.applydate="";
        this.publishdate="";
        /*清楚勾选的痕迹*/
        this.checkAllAnalysis=false;
        this.checkListAnalysis=[];
        this.multipleSelection=[];
        this.search();
      },
      patenttypeclick(o){
        this.total=0;
        this.currentpage=1;
        this.patenttype=o.code;
        var bool=true;
        for(var i=0;i<this.checkedoptions.length;i++){
          if(this.checkedoptions[i].name=="patenttype"){
            bool=false;
            break;
          }
        }
        if(bool){
          this.checkedoptions.push({name:"patenttype",code:o.code,lable:o.lable});
        }
        /*清楚勾选的痕迹*/
        this.checkAllAnalysis=false;
        this.checkListAnalysis=[];
        this.multipleSelection=[];
        this.search();
      },
      handleClose(tag){
        if(tag.name=="patenttype"){
          this.patenttype="";
        }
        if(tag.name=="status"){
          this.status="";
        }
        if(tag.name=="applydate"){
          this.applydate="";
        }
        if(tag.name=="publishdate"){
          this.publishdate="";
        }
        this.total=0;
        this.currentpage=1;
        this.checkedoptions.splice(this.checkedoptions.indexOf(tag), 1);
        /*清楚勾选的痕迹*/
        this.checkAllAnalysis=false;
        this.checkListAnalysis=[];
        this.multipleSelection=[];
        this.search();
      },
      statusclick(o){
        this.total=0;
        this.currentpage=1;
        this.status=o.code;
        var bool=true;
        for(var i=0;i<this.checkedoptions.length;i++){
          if(this.checkedoptions[i].name=="status"){
            bool=false;
            break;
          }
        }
        if(bool){
          this.checkedoptions.push({name:"status",code:o.code,lable:o.lable});
        }
        /*清楚勾选的痕迹*/
        this.checkAllAnalysis=false;
        this.checkListAnalysis=[];
        this.multipleSelection=[];
        this.search();
      },
      applydateclick(o){
        this.total=0;
        this.currentpage=1;
        this.applydate=o.code;
        var bool=true;
        for(var i=0;i<this.checkedoptions.length;i++){
          if(this.checkedoptions[i].name=="applydate"){
            bool=false;
            break;
          }
        }
        if(bool){
          this.checkedoptions.push({name:"applydate",code:o.code,lable:o.lable});
        }
        /*清楚勾选的痕迹*/
        this.checkAllAnalysis=false;
        this.checkListAnalysis=[];
        this.multipleSelection=[];
        this.search();
      },
      publishdateclick(o){
        this.total=0;
        this.currentpage=1;
        this.publishdate=o.code;
        var bool=true;
        for(var i=0;i<this.checkedoptions.length;i++){
          if(this.checkedoptions[i].name=="publishdate"){
            bool=false;
            break;
          }
        }
        if(bool){
          this.checkedoptions.push({name:"publishdate",code:o.code,lable:o.lable});
        }
        /*清楚勾选的痕迹*/
        this.checkAllAnalysis=false;
        this.checkListAnalysis=[];
        this.multipleSelection=[];
        this.search();
      },
      tableHeaderColor({row, column, rowIndex, columnIndex}){
        if (rowIndex === 0) {
          return 'background: #F5F5F5;color:#333333;text-align:center'
        }
      },
      tableRowStyle({ row, rowIndex }) {
        return 'height:50px;text-align:center'
      },
      logoclick(){
        this.a=true;this.b=false;
        $('#wave-container').css('display','block');
      },
      handleCheckAllChange(val) {
        this.checked =val ? this.cities1:[];
        this.checkAll1=this.checked===this.cities1;
        this.isIndeterminate1=this.checked.length > 0 && this.checked.length < this.cities1.length;
        this.checkedmain=val ? this.cities2:[];
        this.checkAll2=this.checkedmain===this.cities2;
        this.isIndeterminate2=this.checkedmain.length > 0 && this.checkedmain.length < this.cities2.length;
        this.checkedother=val ? this.cities3:[];
        this.checkAll3=this.checkedother===this.cities3;
        this.isIndeterminate3=this.checkedother.length > 0 && this.checkedother.length < this.cities3.length;
      },
      check(){
        if(this.checkAll1&&this.checkAll2&&this.checkAll3){
          this.checkAll=true;
          this.isIndeterminate=false;
        }else{
          this.checkAll=false;
          this.isIndeterminate=true;
        }
      },
      handleCheckAllChange1(val) {
        this.checked =val ? this.cities1:[];
        this.isIndeterminate1=false;
        this.check();
      },
      handleCheckedCitiesChange1(value) {
        let checkedCount = value.length;
        this.checkAll1 = checkedCount === this.cities1.length;
        this.isIndeterminate1 = checkedCount > 0 && checkedCount < this.cities1.length;
        this.check();
      },
      handleCheckAllChange2(val) {
        this.checkedmain =val ? this.cities2:[];
        this.isIndeterminate2=false;
        this.check();
      },
      handleCheckedCitiesChange2(value) {
        let checkedCount = value.length;
        this.checkAll2 = checkedCount === this.cities2.length;
        this.isIndeterminate2 = checkedCount > 0 && checkedCount < this.cities2.length;
        this.check();
      },
      handleCheckAllChange3(val) {
        this.checkedother =val ? this.cities3:[];
        this.isIndeterminate3=false;
        this.check();
      },
      handleCheckedCitiesChange3(value) {
        let checkedCount = value.length;
        this.checkAll3 = checkedCount === this.cities3.length;
        this.isIndeterminate3 = checkedCount > 0 && checkedCount < this.cities3.length;
        this.check();
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      handleCheckAllChangeAnalysis(val){
        this.multipleSelection =val ? this.datalist2:[];
        console.log(this.multipleSelection);
        this.toggleSelection(this.multipleSelection);
        this.isIndeterminateAnalysis=false;
      },
      toggleSelection(rows){
        if (rows.length!=0) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        }else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      patentAnalysis(){
        var localurl = location.href;
        var base = localurl.split("#");
        if((this.checkAllAnalysis)||(!this.checkAllAnalysis && this.multipleSelection.length==0)){
        let url=base[0] + "#/patentanalysis?search=simpleall";
        //   url=base[0] + "#/patentanalysis";
          var obj={
            total:this.total,
            lable:this.activeName,
            content:this.input,
            patenttype:this.patenttype,
            range:{
              china:this.checked,
              main:this.checkedmain,
              other:this.checkedother
            },
            status:this.status,
            applydate:this.applydate,
            publishdate:this.publishdate,
          };
          localStorage.setItem("patentyc_patentanalysis",JSON.stringify(obj));
        //   this.$root.windowOpen({
        //     url:url,
        //     title:"专利分析",
        //     params:[
        //       {name:"search",value:"simpleall"}
        //     ]
        //   })
        window.open(url);
        }else{
          url=base[0] + "#/patentanalysis";
          if(!this.checkAllAnalysis){
            var bool=true;
            for(var i=0;i< this.checkListAnalysis.length;i++){
              if(this.checkListAnalysis[i].pageNo==this.currentpage){
                bool=false;
                this.checkListAnalysis[i].data=this.multipleSelection;
                break;
              }
            }
            if(bool){
              var item={pageNo:this.currentpage,data:this.multipleSelection};
              this.checkListAnalysis.push(item);
            }
          }
          var list="";
          for(var i=0;i<this.checkListAnalysis.length;i++){
            for(var j=0;j<this.checkListAnalysis[i].data.length;j++){
              if(list.length>0){
                list=list+","+this.checkListAnalysis[i].data[j].applynum;
              }else{
                list=this.checkListAnalysis[i].data[j].applynum;
              }
            }
          }
          var num=list.split(",").length;
          var obj={
            total:num,
            applynumList:list.split(",")
          };
          localStorage.setItem("patentyc_patentanalysis",JSON.stringify(obj));
            //   this.$root.windowOpen({
            //     url:url,
            //     title:"专利分析",
            //     params:[
            //       {name:"search",value:"simpleother"}
            //     ]
            //   })
            window.open(url);
        }

      }
    },
    mounted:function(){
      $('#wave-container').hover(function(){
          $("#wave-container").addClass("animate-wave-container-hover");
      },function(){
          $("#wave-container").removeClass("animate-wave-container-hover");
      });
      $("#patentyc").text("专眼查-常规检索");

    }

}
</script>

<style>

</style>