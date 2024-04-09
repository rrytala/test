function doGet(e) {
  const template = HtmlService.createTemplateFromFile('index');
  template.deployURL = ScriptApp.getService().getUrl();
  const htmlOutput = template.evaluate();
  htmlOutput.addMetaTag('viewport', 'width=device-width, initial-scale=1');
  return htmlOutput;
}

//ログイン用データの取得
/*
function getCSV(callback){
  var req = new XMLHttpRequest();
  req.open("get","login.csv",true);
  req.send("null");
  console.log("bbbbbbbbbbbbbbbbbbbbbbbbbbb");

  req.onload = function(){
    console.log("cccccccccccccccccccccc");
    var result = convertCSVtoArray(req.responseText);
    alert(result);
    callback(result);
  }
  

  console.log("ddddddddddddddddddd");
  return;
}
*/
function getCSV(callback) {
  var req = new XMLHttpRequest();
  req.open("GET", "login.csv", true);
  req.send();

  req.onreadystatechange = function() {
    if (req.readyState === XMLHttpRequest.DONE) {
      if (req.status === 200) {
        var result = convertCSVtoArray(req.responseText);
        callback(result);
      } else {
        console.error('Failed to fetch CSV data');
      }
    }
  };

}

//データの変換
function convertCSVtoArray(str){
  var result = [];
  var tmp = str.split("\n");

  for(var i = 0;i<tmp.length;i++){
    result[i] = tmp[i].split(',');
  }
  return result;
}

var csvData;
function processLogin(username,password){
  var username = document.getElementById("Username").value;
  var password = document.getElementById("Password").value;
  var flag = false;
    for(var i=1;i<csvData.length;i++){
      if(username == csvData[i][0] && password == csvData[i][1]){
        flag = true;
        break;
      }
    }
    if(flag){
      window.location.href = 'home.html';
    }else{
      alert('miss');
    } 
}

//ユーザー名とパスワードの一致を確認
function loginCheck(){
  // getCSV関数を呼び出して、コールバック関数を渡す
  getCSV(function(result) {
    // resultを使って必要な処理を行う
    csvData = result;
    processLogin();
  });
  return true;
}

let buttonLogin = document.getElementById('login');

// addEventListener( 'イベント', 処理)で要素にイベントが発火した際に処理を実行する
buttonLogin.addEventListener('click', loginCheck);


function doPost(e) {
  if(e.parameter.login){
    const template = HtmlService.createTemplateFromFile('home');
    template.deployURL = ScriptApp.getService().getUrl();
    const htmlOutput = template.evaluate();
    htmlOutput.addMetaTag('viewport', 'width=device-width, initial-scale=1');
    return htmlOutput;
  }

  if(e.parameter.test){
    const template = HtmlService.createTemplateFromFile('test');
    template.deployURL = ScriptApp.getService().getUrl();
    const htmlOutput = template.evaluate();
    htmlOutput.addMetaTag('viewport', 'width=device-width, initial-scale=1');
    return htmlOutput;
  }
  if(e.parameter.input){
    const template = HtmlService.createTemplateFromFile('input');
    template.deployURL = ScriptApp.getService().getUrl();
    const htmlOutput = template.evaluate();
    htmlOutput.addMetaTag('viewport', 'width=device-width, initial-scale=1');
    return htmlOutput;
  }
}