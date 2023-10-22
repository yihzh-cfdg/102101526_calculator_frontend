<template>
  <el-container>
    <el-aside width="400px" style="margin-left: 160px">
      <h1>存款利率</h1>
      <el-table :data="tableData1" stripe>
        <el-table-column label="时长" prop="month">
          <template slot-scope="scope">
            <el-input v-if="scope.row.dno == activedepo" v-model="scope.row.month" />
            <div v-else>{{ scope.row.month }}</div>
          </template>
        </el-table-column>
        <el-table-column label="实际年数" prop="realtime">
          <template slot-scope="scope">
            <el-input v-if="scope.row.dno == activedepo" v-model="scope.row.realtime" />
            <div v-else>{{ scope.row.realtime }}</div>
          </template>
        </el-table-column>
        <el-table-column label="利率" prop="rate">
          <template slot-scope="scope">
            <el-input v-if="scope.row.dno == activedepo" v-model="scope.row.rate" />
            <div v-else>{{ scope.row.rate }}</div>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="150px">
          <template slot-scope="scope">
            <template v-if="scope.row.dno !== activedepo">
              <el-button size="mini" @click="onDepoEdit(scope.$index, scope.row)">编辑</el-button>
            </template>
            <template v-if="scope.row.dno == activedepo">
              <el-button size="mini" @click="handleDepoEdit(scope.$index, scope.row)">
                确认
              </el-button>
            </template>
            <el-button size="mini" type="danger" @click="handleDepoDelete(scope.$index, scope.row)">
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-button style="width: 300px; margin-top: 20px" type="primary" @click="handleDepoAdd">
        添加
      </el-button>
    </el-aside>
    <el-aside width="400px" style="margin-left: 50px">
      <h1>贷款利率</h1>
      <el-table :data="tableData2" stripe>
        <el-table-column label="时长" prop="month">
          <template slot-scope="scope">
            <el-input v-if="scope.row.lno == activeloan" v-model="scope.row.month" />
            <div v-else>{{ scope.row.month }}</div>
          </template>
        </el-table-column>
        <el-table-column label="实际年数" prop="realtime">
          <template slot-scope="scope">
            <el-input v-if="scope.row.lno == activeloan" v-model="scope.row.realtime" />
            <div v-else>{{ scope.row.realtime }}</div>
          </template>
        </el-table-column>
        <el-table-column label="利率" prop="rate">
          <template slot-scope="scope">
            <el-input v-if="scope.row.lno == activeloan" v-model="scope.row.rate" />
            <div v-else>{{ scope.row.rate }}</div>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="150px">
          <template slot-scope="scope">
            <template v-if="scope.row.lno !== activeloan">
              <el-button size="mini" @click="onLoanEdit(scope.$index, scope.row)">编辑</el-button>
            </template>
            <template v-if="scope.row.lno == activeloan">
              <el-button size="mini" @click="handleLoanEdit(scope.$index, scope.row)">
                确认
              </el-button>
            </template>
            <el-button size="mini" type="danger" @click="handleLoanDelete(scope.$index, scope.row)">
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-button style="width: 300px; margin-top: 20px" type="primary" @click="handleLoanAdd">
        添加
      </el-button>
    </el-aside>
    <el-aside style="width: 420px; height: 600px">
      <h1>利率计算器</h1>
      <div class="back">
        <el-form ref="form" :model="form" label-width="80px" label-position="left">
          <el-form-item label="利率类型">
            <el-radio-group v-model="form.type1">
              <el-radio-button label="存款"></el-radio-button>
              <el-radio-button label="贷款"></el-radio-button>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="存期" v-show="form.type1 == '存款'">
            <el-switch
              v-model="form.type2"
              active-text="活期"
              inactive-text="定期"
              active-color="#409EFF"
              inactive-color="#409EFF"
            ></el-switch>
          </el-form-item>
          <el-form-item label="金额">
            <el-input
              v-model="form.money"
              placeholder="请输入内容"
              onkeyup="this.value=this.value.match(/\d+\.?\d{0,6}/);this.dispatchEvent(new Event('input'))"
            ></el-input>
          </el-form-item>
          <el-form-item label="时长(年)">
            <template v-if="form.type1 == '存款'">
              <el-select
                v-if="form.type2 == false"
                value-key="dno"
                v-model="form.choose1"
                placeholder="请选择"
              >
                <el-option
                  v-for="item in tableData1"
                  :key="item.dno"
                  :label="item.month"
                  :value="item"
                  v-show="item.realtime !== 0"
                ></el-option>
              </el-select>
              <template v-if="form.type2 == true">
                <el-input
                  v-model="form.freetime"
                  placeholder="请输入年数"
                  onkeyup="this.value=this.value.match(/\d+\.?\d{0,2}/);this.dispatchEvent(new Event('input'))"
                ></el-input>
              </template>
            </template>
            <template v-if="form.type1 == '贷款'">
              <el-select value-key="lno" v-model="form.choose2" placeholder="请选择">
                <el-option
                  v-for="item in tableData2"
                  :key="item.lno"
                  :label="item.month"
                  :value="item"
                ></el-option>
              </el-select>
            </template>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">计算</el-button>
          </el-form-item>
          <el-form-item>
            <div class="res">利息为{{ result }}元</div>
          </el-form-item>
        </el-form>
      </div>
    </el-aside>
  </el-container>
</template>

<style lang="less" scoped>
.back {
  padding: 20px 20px 20px 20px;
  margin-left: 50px;
  margin-top: 20px;
  width: 300px;
  height: 400px;
  position: relative;
  box-shadow: 10px 8px 15px;
}
.el-form {
  position: absolute;
  text-align: "left";
}
.el-form-item {
  text-align: left;
}
.res {
  font-size: 16px;
  font-family: Roboto;
}
</style>>


<script>
import axios from "axios";
export default {
  mounted: function () {
    this.$nextTick(function () {
      this.getDepo();
      this.getLoan();
    });
  },
  data() {
    return {
      activedepo: -1,
      activeloan: -1,
      result: 0,
      switch_dis: false,
      tableData1: [],
      tableData2: [],
      form: {
        type1: "存款",
        type2: false,
        money: 0.0,
        freetime: 0,
        choose1: {},
        choose2: {},
      },
    };
  },
  methods: {
    onSubmit() {
      let f = this.form;
      if (f.type1 == "存款") {
        if (f.type2 == true) {
          this.result = eval(f.choose1.rate / 100 + "*" + f.money + "*" + f.freetime);
        } else {
          this.result = eval(f.choose1.rate / 100 + "*" + f.money + "*" + f.choose1.realtime);
        }
      } else {
        this.result = eval(f.choose2.rate / 100 + "*" + f.money + "*" + f.choose2.realtime);
      }
      this.result = this.result.toFixed(4);
      console.log(f);
      console.log(this.result);
    },
    getDepo() {
      axios
        .get("/api/rate/getDeposit")
        .then((response) => {
          this.tableData1 = response.data.data;
          if (this.tableData1.length > 0) this.form.choose1 = this.tableData1[0];
        })
        .catch((error) => {
          console.error("Get deposit table error", error);
        });
    },
    getLoan() {
      axios
        .get("/api/rate/getLoan")
        .then((response) => {
          this.tableData2 = response.data.data;
          if (this.tableData2.length > 0) this.form.choose2 = this.tableData2[0];
        })
        .catch((error) => {
          console.error("Get loan table error", error);
        });
    },
    onDepoEdit(index, row) {
      this.activedepo = row.dno;
    },
    onLoanEdit(index, row) {
      this.activeloan = row.lno;
    },
    handleDepoEdit(index, row) {
      console.log(index, row);
      if (row.dno == 0) {
        axios
          .post("/api/rate/insertDeposit", this.tableData1[index])
          .then((response) => {
            console.log(response);
            this.activedepo = -1;
            this.getDepo();
          })
          .catch((error) => {
            console.error("Set error", error);
          });
      } else {
        axios
          .post("/api/rate/updateDeposit", this.tableData1[index])
          .then((response) => {
            console.log(response);
            this.activedepo = -1;
            this.getDepo();
          })
          .catch((error) => {
            console.error("Set error", error);
          });
      }
    },
    handleLoanEdit(index, row) {
      if (row.lno == 0) {
        axios
          .post("/api/rate/insertLoan", this.tableData1[index])
          .then((response) => {
            console.log(response);
            this.activeloan = -1;
            this.getLoan();
          })
          .catch((error) => {
            console.error("Set error", error);
          });
      } else {
        console.log(index, row);
        axios
          .post("/api/rate/insertLoan", this.tableData2[index])
          .then((response) => {
            console.log(response);
            this.activeloan = -1;
            this.getLoan();
          })
          .catch((error) => {
            console.error("Set error", error);
          });
      }
    },
    handleDepoDelete(index, row) {
      console.log(index, row);
      axios
        .post("/api/rate/delDeposit", this.tableData1[index])
        .then((response) => {
          console.log(response);
          this.getDepo();
        })
        .catch((error) => {
          console.error("Delete error", error);
        });
    },
    handleLoanDelete(index, row) {
      console.log(index, row);
      axios
        .post("/api/rate/delLoan", this.tableData2[index])
        .then((response) => {
          console.log(response);
          this.getLoan();
        })
        .catch((error) => {
          console.error("Delete error", error);
        });
    },
    handleDepoAdd() {
      this.tableData1.push({ dno: 0, month: "", rate: 0, realtime: 0 });
      this.activedepo = 0;
      0;
    },
    handleLoanAdd() {
      this.tableData2.push({ lno: 0, month: "", rate: 0, realtime: 0 });
      this.activeloan = 0;
    },
  },
};
</script>