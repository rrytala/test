function doGet(e) {
  const template = HtmlService.createTemplateFromFile('index');
  template.deployURL = ScriptApp.getService().getUrl();
  const htmlOutput = template.evaluate();
  htmlOutput.addMetaTag('viewport', 'width=device-width, initial-scale=1');
  return htmlOutput;
}

function loginCheck(){
  return true;
}

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