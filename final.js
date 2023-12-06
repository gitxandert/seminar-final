let device;
let values=[];
let out13=0;

async function setup() {
  const patchExportURL = "chaos.export.json";

  // Create AudioContext
  const WAContext = window.AudioContext || window.webkitAudioContext;
  const context = new WAContext();

  // Create gain node and connect it to audio output
  const outputNode = context.createGain();
  outputNode.connect(context.destination);

  // Fetch the exported patcher
  let response, patcher;
  try {
    response = await fetch(patchExportURL);
    patcher = await response.json();

    if (!window.RNBO) {
      // Load RNBO script dynamically
      // Note that you can skip this by knowing the RNBO version of your patch
      // beforehand and just include it using a <script> tag
      await loadRNBOScript(patcher.desc.meta.rnboversion);
    }
  } catch (err) {
    const errorContext = {
      error: err
    };
    if (response && (response.status >= 300 || response.status < 200)) {
      (errorContext.header = `Couldn't load patcher export bundle`),
        (errorContext.description =
          `Check app.js to see what file it's trying to load. Currently it's` +
          ` trying to load "${patchExportURL}". If that doesn't` +
          ` match the name of the file you exported from RNBO, modify` +
          ` patchExportURL in app.js.`);
    }
    if (typeof guardrails === "function") {
      guardrails(errorContext);
    } else {
      throw err;
    }
    return;
  }

  try {
    device = await RNBO.createDevice({ context, patcher });
  } catch (err) {
    if (typeof guardrails === "function") {
      guardrails({ error: err });
    } else {
      throw err;
    }
    return;
  }

  device.node.connect(outputNode);
  
  context.suspend();

  const rnbo_values=device.parametersById.get('values');
  const rnbo_response=device.parametersById.get('response');

  const prep_values=document.getElementById('values');
  const prep_response=document.getElementById('response');
  let asciis=[];
  
  prep_response.addEventListener('click', () => {
    if(!context.resume()){
        context.resume();
    }
    let the_string=prep_values.value;
    for(let i=0; i<the_string.length; i++){
        let character = parseInt(the_string.charCodeAt(i));
        asciis.push(character);
        rnbo_values.value = character;
    }
    console.log(asciis);
    rnbo_response.value = 'go';
    asciis=[];
    prep_values.value='';
    prep_values.focus();
  })

  device.messageEvent.subscribe((ev) => {
    if(ev.tag === "out3"){
        console.log("out3: " + ev.payload);
        values=[];
        values.push(ev.payload);
    }
    if(ev.tag === "out4"){
        console.log("out4: " + ev.payload);
        values.push(ev.payload);
    }
    if(ev.tag === "out5"){
        console.log("out5: " + ev.payload);
        values.push(ev.payload);
    }
    if(ev.tag === "out6"){
        console.log("out6: " + ev.payload);
        values.push(ev.payload);
    }
    if(ev.tag === "out7"){
        console.log("out7: " + ev.payload);
        values.push(ev.payload);
    }
    if(ev.tag === "out8"){
        console.log("out8: " + ev.payload);
        values.push(ev.payload);
    }
    if(ev.tag === "out9"){
        console.log("out9: " + ev.payload);
        values.push(ev.payload);
    }
    if(ev.tag === "out10"){
        console.log("out10: " + ev.payload);
        values.push(ev.payload);
    }
    if(ev.tag === "out11"){
        console.log("out11: " + ev.payload);
        values.push(ev.payload);
    }
    if(ev.tag === "out12"){
        console.log("out12: " + ev.payload);
        values.push(ev.payload);
    }
    if(ev.tag === "out13"){
        console.log("out13: " + ev.payload);
        out13=ev.payload;
    };
    })
}

setup();