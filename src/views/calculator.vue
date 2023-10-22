<template>
  <div>
    <el-container>
      <el-aside width="10%"></el-aside>
      <el-aside width="20%">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="exps" label="历史记录"></el-table-column>
        </el-table>
      </el-aside>
      <el-main width="800px">
        <div class="back" style="box-shadow: 10px 8px 15px">
          <div class="side-text">
            <p class="side-exp">{{ old_exp }}</p>
          </div>
          <div class="main-text">
            <template v-if="true">
              <p class="main-exp">{{ currentVal }}</p>
            </template>
            <template v-else>
              <p class="main-exp">0</p>
            </template>
          </div>
          <div>
            <el-row class="keys">
              <el-button :disabled="isDisabled" class="shift" @click="onShiftClick">
                shift
              </el-button>
              <el-button :disabled="isDisabled" id="pi" class="func" @click="clickHandler($event)">
                π
              </el-button>
              <el-button :disabled="isDisabled" class="func" @click="getAns">ANS</el-button>
              <el-button id="ce" class="func" @click="clickHandler($event)">CE</el-button>
              <el-button :disabled="isDisabled" id="del" class="func" @click="clickHandler($event)">
                ←
              </el-button>
            </el-row>
            <el-row class="keys">
              <template v-if="shift == false">
                <el-button
                  :disabled="isDisabled"
                  id="x2"
                  class="func"
                  @click="clickHandler($event)"
                >
                  x²
                </el-button>
              </template>
              <template v-else>
                <el-button
                  :disabled="isDisabled"
                  id="sin"
                  class="func"
                  @click="clickHandler($event)"
                >
                  sin
                </el-button>
              </template>
              <el-button :disabled="isDisabled" id="1/x" class="func" @click="clickHandler($event)">
                1/x
              </el-button>
              <el-button :disabled="isDisabled" id="abs" class="func" @click="clickHandler($event)">
                |x|
              </el-button>
              <el-button :disabled="isDisabled" id="exp" class="func" @click="clickHandler($event)">
                exp
              </el-button>
              <el-button :disabled="isDisabled" id="%" class="func" @click="clickHandler($event)">
                mod
              </el-button>
            </el-row>
            <el-row class="keys">
              <template v-if="shift == false">
                <el-button
                  :disabled="isDisabled"
                  id="sqrt"
                  class="func"
                  @click="clickHandler($event)"
                >
                  √
                </el-button>
              </template>
              <template v-else>
                <el-button
                  :disabled="isDisabled"
                  id="cos"
                  class="func"
                  @click="clickHandler($event)"
                >
                  cos
                </el-button>
              </template>
              <el-button :disabled="isDisabled" id="(" class="func" @click="clickHandler($event)">
                (
              </el-button>
              <el-button :disabled="isDisabled" id=")" class="func" @click="clickHandler($event)">
                )
              </el-button>
              <el-button
                :disabled="isDisabled"
                id="fact"
                class="func"
                @click="clickHandler($event)"
              >
                x!
              </el-button>
              <el-button :disabled="isDisabled" id="/" class="func" @click="clickHandler($event)">
                ÷
              </el-button>
            </el-row>
            <el-row class="keys">
              <template v-if="shift == false">
                <el-button
                  :disabled="isDisabled"
                  id="rand"
                  class="func"
                  @click="clickHandler($event)"
                >
                  rand
                </el-button>
              </template>
              <template v-else>
                <el-button
                  :disabled="isDisabled"
                  id="tan"
                  class="func"
                  @click="clickHandler($event)"
                >
                  tan
                </el-button>
              </template>
              <el-button :disabled="isDisabled" id="7" class="num" @click="clickHandler($event)">
                7
              </el-button>
              <el-button :disabled="isDisabled" id="8" class="num" @click="clickHandler($event)">
                8
              </el-button>
              <el-button :disabled="isDisabled" id="9" class="num" @click="clickHandler($event)">
                9
              </el-button>
              <el-button :disabled="isDisabled" id="*" class="func" @click="clickHandler($event)">
                &times;
              </el-button>
            </el-row>
            <el-row class="keys">
              <template v-if="shift == false">
                <el-button
                  :disabled="isDisabled"
                  id="10x"
                  class="func"
                  @click="clickHandler($event)"
                >
                  10^x
                </el-button>
              </template>
              <template v-else>
                <el-button
                  :disabled="isDisabled"
                  id="asin"
                  class="func"
                  @click="clickHandler($event)"
                >
                  arcsin
                </el-button>
              </template>
              <el-button :disabled="isDisabled" id="4" class="num" @click="clickHandler($event)">
                4
              </el-button>
              <el-button :disabled="isDisabled" id="5" class="num" @click="clickHandler($event)">
                5
              </el-button>
              <el-button :disabled="isDisabled" id="6" class="num" @click="clickHandler($event)">
                6
              </el-button>
              <el-button :disabled="isDisabled" id="-" class="func" @click="clickHandler($event)">
                -
              </el-button>
            </el-row>
            <el-row class="keys">
              <template v-if="shift == false">
                <el-button
                  :disabled="isDisabled"
                  id="log"
                  class="func"
                  @click="clickHandler($event)"
                >
                  log
                </el-button>
              </template>
              <template v-else>
                <el-button
                  :disabled="isDisabled"
                  id="acos"
                  class="func"
                  @click="clickHandler($event)"
                >
                  arccos
                </el-button>
              </template>
              <el-button :disabled="isDisabled" id="1" class="num" @click="clickHandler($event)">
                1
              </el-button>
              <el-button :disabled="isDisabled" id="2" class="num" @click="clickHandler($event)">
                2
              </el-button>
              <el-button :disabled="isDisabled" id="3" class="num" @click="clickHandler($event)">
                3
              </el-button>
              <el-button :disabled="isDisabled" id="+" class="func" @click="clickHandler($event)">
                +
              </el-button>
            </el-row>
            <el-row class="keys">
              <template v-if="shift == false">
                <el-button
                  :disabled="isDisabled"
                  id="ln"
                  class="func"
                  @click="clickHandler($event)"
                >
                  ln
                </el-button>
              </template>
              <template v-else>
                <el-button
                  :disabled="isDisabled"
                  id="atan"
                  class="func"
                  @click="clickHandler($event)"
                >
                  arctan
                </el-button>
              </template>
              <el-button :disabled="isDisabled" id="inv" class="num" @click="clickHandler($event)">
                +/-
              </el-button>
              <el-button :disabled="isDisabled" id="0" class="num" @click="clickHandler($event)">
                0
              </el-button>
              <el-button :disabled="isDisabled" id="." class="num" @click="clickHandler($event)">
                .
              </el-button>
              <el-button :disabled="isDisabled" id="=" class="equ" @click="clickHandler($event)">
                =
              </el-button>
            </el-row>
          </div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<style lang="less" scoped>
.back {
  background-color: rgb(243, 243, 243);
  width: 600px;
  height: 800px;
  position: relative;
}
.side-text {
  position: absolute;
  left: 15px;
  top: 75px;
  width: 575px;
  height: 82px;
  color: rgba(154, 154, 154, 1);
  font-size: 24px;
  font-family: SourceHanSansSC-regular;
  .side-exp {
    position: absolute;
    margin: auto; /* 添加自动外边距 */
    right: 0; /* 添加右边距为零 */
    bottom: 0; /* 添加底边距为零 */
  }
}
.main-text {
  position: absolute;
  left: 15px;
  top: 171px;
  width: 575px;
  height: 89px;
  color: rgba(16, 16, 16, 1);
  font-size: 72px;
  font-family: SourceHanSansSC-regular;
  .main-exp {
    text-align: right;
    vertical-align: bottom;
    height: 89px; /* 设置 <p> 元素的高度 */
    line-height: 89px; /* 设置 <p> 元素的行高 */
  }
}
.keys {
  top: 277px;
  margin-bottom: 7px;
  &:last-child {
    margin-bottom: 0;
  }
  .func {
    width: 110px;
    height: 68px;
    border-radius: 4px;
    background-color: rgba(249, 249, 249, 1);
    color: rgba(16, 16, 16, 1);
    font-size: 28px;
    text-align: center;
    box-shadow: 1px 1px 1px -4px rgba(0, 0, 0, 0.4);
    font-family: Roboto;
    border: 1px solid rgba(187, 187, 187, 1);
    &:hover {
      background-color: rgb(246, 246, 246);
    }
    &:active {
      background-color: rgb(244, 244, 244);
      color: rgb(100, 100, 100);
    }
  }
  .num {
    width: 110px;
    height: 68px;
    border-radius: 4px;
    background-color: rgba(255, 255, 255, 1);
    color: rgba(16, 16, 16, 1);
    font-size: 28px;
    text-align: center;
    box-shadow: 1px 1px 1px -4px rgba(0, 0, 0, 0.4);
    font-family: Roboto;
    border: 1px solid rgba(187, 187, 187, 1);
    &:hover {
      background-color: rgb(249, 249, 249);
    }
    &:active {
      background-color: rgb(247, 247, 247);
      color: rgb(120, 120, 120);
    }
  }
  .shift {
    width: 110px;
    height: 68px;
    border-radius: 4px;
    background-color: rgba(249, 249, 249, 1);
    color: rgba(89, 27, 183, 1);
    font-size: 28px;
    text-align: center;
    box-shadow: 1px 1px 1px -4px rgba(0, 0, 0, 0.4);
    font-family: Roboto;
    border: 1px solid rgba(187, 187, 187, 1);
    &:hover {
      background-color: rgb(246, 246, 246);
      color: #591bb7;
    }
    &:active {
      background-color: rgb(247, 247, 247);
      color: #8359c2;
    }
  }
  .equ {
    width: 110px;
    height: 68px;
    border-radius: 4px;
    background-color: rgba(89, 27, 183, 1);
    color: rgba(255, 255, 255, 1);
    font-size: 28px;
    text-align: center;
    box-shadow: 1px 1px 1px -4px rgba(0, 0, 0, 0.4);
    font-family: Roboto;
    border: 1px solid rgba(187, 187, 187, 1);
    &:hover {
      background-color: rgb(80, 20, 170);
      color: rgb(255, 255, 255);
    }
    &:active {
      background-color: rgb(70, 10, 160);
      color: rgb(255, 255, 255);
    }
  }
}
</style>

<script>
import axios from "axios";
export default {
  name: "calculator",
  mounted() {
    this.$nextTick(function () {
      this.getHistory();
    });
  },
  methods: {
    clickHandler(e) {
      let that = this;
      let target = e.target;
      if (target.nodeName == "SPAN") {
        target = e.target.parentNode;
        target.blur();
      }
      let button_text = target.id;
      console.log(target.id);
      // impl
      if (that.isNum(button_text)) {
        if (!that.noPrev) that.remake();
        if (button_text === "0" && that.isEmpty()) return;
        if (that.changeOp) that.changeOp = false;
        that.new_exp += button_text;
        try {
          that.currentVal = eval(this.new_exp);
        } catch (error) {
          this.errorHandler(error);
          return;
        }
      } else if (that.isSym(button_text)) {
        if (that.dot && that.new_exp.slice(-1) == ".") that.new_exp = "0";
        if (that.changeOp) {
          that.old_exp = that.old_exp.substring(0, that.old_exp.length - 1);
          that.old_exp += button_text;
        } else if (!that.noPrev) {
          that.noPrev = true;
          that.changeOp = true;
          that.new_exp = "";
          that.old_exp = that.currentVal.toString() + button_text;
        } else {
          if (that.isEmpty()) that.old_exp = "0";
          else that.old_exp += that.new_exp;
          that.new_exp = "";
          if (!this.bracket)
            try {
              that.lastVal = that.currentVal;
              that.currentVal = eval(that.old_exp);
            } catch (error) {
              this.errorHandler("等式错误");
              return;
            }
          that.old_exp += button_text;
          that.changeOp = true;
        }
      } else if (button_text === "=") {
        if (that.bracket != 0) this.errorHandler("括号不匹配");
        if (!that.noPrev) {
          that.old_exp = that.currentVal.toString();
          that.old_exp += that.holdVal;
          try {
            that.currentVal = eval(that.old_exp);
          } catch (error) {
            this.errorHandler("等式错误");
            return;
          }
          that.old_exp += "=";
        } else if (that.changeOp) {
          that.changeOp = false;
          that.noPrev = false;
          that.holdVal += that.old_exp.slice(-1);
          that.old_exp += that.currentVal.toString();
          try {
            that.currentVal = eval(that.old_exp);
          } catch (error) {
            this.errorHandler("等式错误");
            return;
          }
          that.holdVal += that.currentVal.toString();
          that.old_exp += "=";
        } else {
          that.noPrev = false;
          if (that.old_exp != "") {
            that.holdVal = that.old_exp.slice(-1) + that.new_exp;
            that.old_exp += that.new_exp;
          } else {
            that.holdVal = "";
            that.old_exp = that.new_exp;
            if (that.isEmpty()) that.old_exp = "0";
          }
          try {
            that.currentVal = eval(that.old_exp);
          } catch (error) {
            this.errorHandler(error);
            return;
          }
          that.old_exp += "=";
        }
        that.setHistory(that.old_exp + that.currentVal);
      } else if (button_text == "inv" && that.currentVal != 0) {
        that.currentVal = -that.currentVal;
        if (that.inv == false) {
          that.new_exp = "-" + that.new_exp;
          that.inv = true;
        } else {
          that.new_exp = that.new_exp.substring(1);
          that.inv = false;
        }
      } else if (button_text == ".") {
        if (!that.dot) {
          if (that.currentVal == 0) that.new_exp = "0";
          that.dot = true;
          that.new_exp += ".";
          that.currentVal = that.new_exp;
        }
      } else if (target.className === "el-button func el-button--default") {
        that.funcHandler(button_text);
      }
    },
    getAns() {
      let that = this;
      let pattern = /(?<==)[0-9.-]+/;
      if (that.tableData.length > 0) {
        that.currentVal = eval(that.tableData[0].exps.match(pattern)[0]);
        that.inv = that.currentVal < 0;
        that.new_exp = that.currentVal.toString();
      }
    },
    funcHandler(button_text) {
      let that = this;
      if (button_text == "ce") {
        that.remake();
      } else if (button_text == "(") {
        that.bracket++;
        that.old_exp += button_text;
      } else if (button_text == ")") {
        that.bracket--;
        if (that.bracket == 0) {
          this.old_exp += this.new_exp + ")";
          this.new_exp = "";
          this.clickHandler("=");
        }
        that.old_exp += button_text;
      } else if (button_text == "del") {
        if (!that.noPrev) return;
        if (!that.isEmpty()) {
          if (that.new_exp.slice(-1) == ".") dot = false;
          that.new_exp = that.new_exp.substring(0, that.new_exp.length - 1);
        }
        if (that.new_exp == "") that.currentVal = 0;
        else
          try {
            that.currentVal = eval(that.new_exp);
          } catch (error) {
            this.errorHandler(error);
            return;
          }
      } else if (button_text == "x2") {
        that.currentVal = (that.currentVal * that.currentVal).toFixed(8);
        that.new_exp = that.currentVal.toString();
        that.inv = false;
      } else if (button_text == "pi") {
        that.currentVal = Math.PI.toFixed(8);
        that.new_exp = that.currentVal.toString();
        if (that.changeOp) that.changeOp = false;
      } else if (button_text == "1/x") {
        if (that.currentVal == 0) {
          this.errorHandler("不能除以0");
          return;
        }
        that.currentVal = (1 / that.currentVal).toFixed(8);
        that.new_exp = that.currentVal.toString();
      } else if (button_text == "abs") {
        that.currentVal = Math.abs(that.currentVal);
        that.inv = false;
        that.new_exp = that.currentVal.toString();
      } else if (button_text == "exp") {
        that.currentVal = Math.exp(that.currentVal).toFixed(8);
        that.new_exp = that.currentVal.toString();
      } else if (button_text == "sqrt") {
        if (this.currentVal < 0) {
          this.errorHandler("无定义");
          return;
        }
        that.currentVal = Math.sqrt(that.currentVal).toFixed(8);
        that.new_exp = that.currentVal.toString();
      } else if (button_text == "fact") {
        if (that.currentVal >= 0 && that.currentVal <= 20)
          that.currentVal = this.fact[parseInt(that.currentVal)];
        else {
          this.errorHandler("数值溢出");
          return;
        }
        that.new_exp = that.currentVal.toString();
      } else if (button_text == "rand") {
        that.currentVal = Math.random().toFixed(8);
        that.new_exp = that.currentVal.toString();
      } else if (button_text == "10x") {
        that.currentVal = Math.pow(10, that.currentVal).toFixed(8);
        that.new_exp = that.currentVal.toString();
        that.inv = false;
      } else if (button_text == "log") {
        if (that.currentVal > 0) {
          that.currentVal = Math.log10(that.currentVal).toFixed(8);
          that.new_exp = that.currentVal.toString();
          that.inv = that.currentVal < 0;
        } else {
          this.errorHandler("无定义");
          return;
        }
      } else if (button_text == "ln") {
        if (that.currentVal > 0) {
          that.currentVal = Math.log(that.currentVal).toFixed(8);
          that.new_exp = that.currentVal.toString();
          that.inv = that.currentVal < 0;
        } else {
          this.errorHandler("无定义");
          return;
        }
      } else if (button_text == "sin") {
        that.currentVal = Math.sin(this.degToRad(that.currentVal)).toFixed(8);
        that.new_exp = that.currentVal.toString();
        that.inv = that.currentVal < 0;
      } else if (button_text == "cos") {
        that.currentVal = Math.cos(this.degToRad(that.currentVal)).toFixed(8);
        that.new_exp = that.currentVal.toString();
        that.inv = that.currentVal < 0;
      } else if (button_text == "tan") {
        that.currentVal = Math.tan(this.degToRad(that.currentVal)).toFixed(8);
        that.new_exp = that.currentVal.toString();
        that.inv = that.currentVal < 0;
      } else if (button_text == "asin") {
        if (this.currentVal > 1 || this.currentVal < -1) {
          this.errorHandler("无定义");
          return;
        }
        that.currentVal = Math.asin(that.currentVal).toFixed(8);
        that.new_exp = that.currentVal.toString();
        that.inv = that.currentVal < 0;
      } else if (button_text == "acos") {
        if (this.currentVal > 1 || this.currentVal < -1) {
          this.errorHandler("无定义");
          return;
        }
        that.currentVal = Math.acos(that.currentVal).toFixed(8);
        that.new_exp = that.currentVal.toString();
        that.inv = that.currentVal < 0;
      } else if (button_text == "atan") {
        that.currentVal = Math.atan(that.currentVal).toFixed(8);
        that.new_exp = that.currentVal.toString();
        that.inv = that.currentVal < 0;
      }
    },
    errorHandler(e) {
      this.currentVal = "错误：" + e;
      this.isDisabled = true;
    },
    onShiftClick() {
      this.shift = !this.shift;
    },
    setHistory(history) {
      axios
        .post("/api/cal/setHistory", { exps: history })
        .then((response) => {
          console.log(response);
          this.getHistory();
        })
        .catch((error) => {
          console.error("Set history error", error);
        });
    },
    getHistory() {
      axios
        .get("/api/cal/getHistory")
        .then((response) => {
          this.tableData = response.data.data;
        })
        .catch((error) => {
          console.error("Get history error", error);
        });
    },
    remake() {
      let that = this;
      that.old_exp = "";
      that.new_exp = "";
      that.holdVal = "";
      that.currentVal = 0;
      that.lastVal = 0;
      that.dot = false;
      that.changeOp = false;
      that.inv = false;
      that.noPrev = true;
      that.bracket = 0;
      that.isDisabled = false;
    },
    isNum(val) {
      let pattern = /^[0-9]*$/;
      return pattern.test(val);
    },
    isSym(val) {
      return ["+", "-", "*", "/", "%"].indexOf(val) != -1;
    },
    isEmpty() {
      return this.currentVal === 0 && this.new_exp === "";
    },
    degToRad(deg) {
      return Math.PI * 2 * (deg / 360);
    },
  },
  data() {
    return {
      old_exp: "",
      new_exp: "",
      holdVal: "",
      currentVal: 0,
      lastVal: 0,
      shift: false,
      dot: false,
      changeOp: false,
      inv: false,
      noPrev: true,
      bracket: 0,
      isDisabled: false,
      tableData: [],
      fact: [
        1.0, 1.0, 2.0, 6.0, 24.0, 120.0, 720.0, 5040.0, 40320.0, 362880.0, 3628800.0, 39916800.0,
        479001600.0, 6227020800.0, 87178291200.0, 1307674368000.0, 20922789888000.0,
        355687428096000.0, 6402373705728000.0, 121645100408832000.0, 2432902008176640000.0,
      ],
    };
  },
};
</script>
