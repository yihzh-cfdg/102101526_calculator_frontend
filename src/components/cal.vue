<script>
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  setup() {},
  methods: {
    isOperator(character) {
      return ["+", "-", "×", "÷"].indexOf(character) > -1;
    },
    // When pressed Operators or Numbers
    append(character) {
      // Start
      if (this.equation === "0" && !this.isOperator(character)) {
        if (character === ".") {
          this.equation += "" + character;
          this.isDecimalAdded = true;
        } else {
          this.equation = "" + character;
        }
        this.isStarted = true;
        return;
      }
      // If Number
      if (!this.isOperator(character)) {
        if (character === "." && this.isDecimalAdded) {
          return;
        }

        if (character === ".") {
          this.isDecimalAdded = true;
          this.isOperatorAdded = true;
        } else {
          this.isOperatorAdded = false;
        }
        this.equation += "" + character;
      }
      // Added Operator
      if (this.isOperator(character) && !this.isOperatorAdded) {
        this.equation += "" + character;
        this.isDecimalAdded = false;
        this.isOperatorAdded = true;
      }
    },
    // When pressed '='
    calculate() {
      let origin_expression = this.equation;
      let expression = this.equation
        .replace(new RegExp("×", "g"), "*")
        .replace(new RegExp("÷", "g"), "/");

      this.equation = parseFloat(eval(expression).toFixed(9)).toString();
      this.isDecimalAdded = false;
      this.isOperatorAdded = false;
      this.recordHistory(origin_expression, this.equation);
    },
    // When pressed 'AC'
    clear() {
      this.equation = "0";
      this.isDecimalAdded = false;
      this.isOperatorAdded = false;
      this.isStarted = false;
    },
    recordHistory(expression, result) {
      const formData = new FormData();

      formData.append("expression", expression);
      formData.append("result", result);
      axios
        .post("http://luke.host:8080/calculate", formData)
        .then((response) => {
          this.lastAnswerId = response.data.id;
          this.getLast10();
        })
        .catch((error) => {
          console.error("请求出错", error);
        });
    },
    getLast10() {
      axios
        .get("http://luke.host:8080/calculate/last10")
        .then((response) => {
          this.last10Ans = response.data;
        })
        .catch((error) => {
          console.error("请求出错", error);
        });
    },
  },
});
</script>

 