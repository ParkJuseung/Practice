function browserStack(actions, start) {
    if(typeof start !== "string") return false
  
      let prev = [];
      let next = [];
      let curr = start;
  
    actions.map(el =>{
      if(el == -1){
        next.push(curr)
        let curPage = prev.pop()
        return curPage
      }
      else if(typeof el == "string"){
        prev.push(curr)
        let curPage = el
        return curPage
      }
      else if(el == 1){
        prev.push(curr)
        let curPage = next.pop()
        return curPage
      }
    }
    )
    return [prev, curr, next];
  }

const actions = ["B", "C", -1, "D", "A", -1, 1, -1, -1];
const start = "A";
const output = browserStack(actions, start);

console.log(output); // [["A"], "B", ["A", "D"]]