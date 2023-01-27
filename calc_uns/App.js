
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import appStayle from './appStayle';

const col = (props) => {

  const [str, setStr] = useState(0);
  const [qol, setQol] = useState("");
  const [R, setR] = useState(0);
  let n1 = 0, n2 = 0, res = 0;
  //let first=true
  let histury = ""
  const calculates = () => {

  }

  const [Results, setResults] = useState("");
  const [opr_action, setopr_action] = useState("");
  const [first, setfirst] = useState(true);


  let del = () => {
    if (butn === "del") {

      return
    }
  }

  function cal(butn) {

    if (butn === "del") {
                        setopr_action("")
                        setResults("")
                        setfirst(true)
                        return
                        }
    //התתחלה של החישוב תתעלם מ 0 וגם פעולות
    if (opr_action === "")//||['/','-','*','+'].includes(opr_action.substring(opr_action.length-1)) )
        {
          if (butn === 0) return 0
          if (['/', '*'].includes(butn)) return 0
        }
    //כאשר הפעולה הראשונה היא אפרוטור אז תתעלם ממנה    
    if (opr_action==="" && isNaN(butn))return 0

    //,לעדכן פעולה חדשה : כאשר לוחצים על פעולה אחרת  **שיש כבר פעולה 
    if (['/', '*', '+', '-','='].includes(opr_action.substring(opr_action.length - 1)) && (opr_action.length > 1 && isNaN(butn))) {
                  if (butn === '=') return //מצב שיש פעולה ולאחר מכן לוחצים שווה
                  setopr_action(opr_action.substring(0, opr_action.length - 1) + butn); return
                  }

    // + 0 number ---> למחוק את ה 0 במצב כזה
    if (opr_action.length > 1 && isNaN(opr_action.substring(opr_action.length - 2, opr_action.length - 1)) && opr_action.substring(opr_action.length - 1) === '0' && !(isNaN(butn))) {
                setopr_action(opr_action.substring(0, opr_action.length - 1) + butn);return
                  }
    // חישוב חדש על התוצאה הקיימת 
    if (!first) {
      if (butn === 0) return
      if (isNaN(butn)) {
        setopr_action(eval(opr_action) + butn)
      } else {
        setopr_action("" + butn)
        setResults("")
      }
      setfirst(true) ;return
       }

    if (butn == '=') {
      setResults(eval(opr_action))
      setfirst(false)
      return
    }
    else {
      setopr_action(opr_action + butn)
    }
  }


  let size_txt = (n) => { return n - ((opr_action.length)) }


  return (
    <View style={[appStayle.main_contner, { flex: 1, backgroundColor: "#696969" }]}>

      <View style={[appStayle.main_contner, { flex: 2, backgroundColor: "#2f2e2e" ,margin:"2px"}]}>
        <View style={appStayle.result_container}>
          <Text style={[appStayle.txt_style, { fontSize: size_txt(50), textAlign: "left" }]}>{opr_action}</Text>
        </View>
        <View style={appStayle.view_container}>
          <Text style={[appStayle.txt_style, {justifyContent:"center", fontSize: 40, textAlign: "right" ,textShadow:"red 1px 5px 10px"}]}>{Results}</Text>
        </View>
      </View>

      <View style={[appStayle.main_contner, { flex: 8 }]}>
        <View style={appStayle.row_contner}>
          <TouchableOpacity style={appStayle.butun} onPress={() => cal(1)} >1</TouchableOpacity >
          <TouchableOpacity style={appStayle.butun} onPress={() => cal(2)} >2</TouchableOpacity >
          <TouchableOpacity style={appStayle.butun} onPress={() => cal(3)} >3</TouchableOpacity >
          <TouchableOpacity style={appStayle.butun_opr} onPress={() => cal("*")}>*</TouchableOpacity >
        </View>
        <View style={appStayle.row_contner}>
          <TouchableOpacity style={appStayle.butun} onPress={() => cal(3)} >3</TouchableOpacity >
          <TouchableOpacity style={appStayle.butun} onPress={() => cal(4)} >4</TouchableOpacity >
          <TouchableOpacity style={appStayle.butun} onPress={() => cal(5)} >5</TouchableOpacity >
          <TouchableOpacity style={appStayle.butun_opr} onPress={() => cal("/")}>/</TouchableOpacity >
        </View>
        <View style={appStayle.row_contner}>
          <TouchableOpacity style={appStayle.butun} onPress={() => cal(7)} >7</TouchableOpacity >
          <TouchableOpacity style={appStayle.butun} onPress={() => cal(8)} >8</TouchableOpacity >
          <TouchableOpacity style={appStayle.butun} onPress={() => cal(9)} >9</TouchableOpacity >
          <TouchableOpacity style={appStayle.butun_opr} onPress={() => cal("-")}>-</TouchableOpacity >
        </View>

        <View style={appStayle.row_contner}>
          <TouchableOpacity style={[appStayle.butun, { flex: 3 }]} onPress={() => cal(0)} >0</TouchableOpacity >
          <TouchableOpacity style={appStayle.butun_opr} onPress={() => cal("+")}>+</TouchableOpacity >
        </View>

        <View style={appStayle.row_contner}>
          <TouchableOpacity style={appStayle.butun_clr} onPress={() => cal("del")}>CLEAR</TouchableOpacity >
          <TouchableOpacity style={appStayle.butun_result} onPress={() => cal("=")}>=</TouchableOpacity >
        </View>

      </View>

    </View>

  );

}


export default col