const spawn = require("child_process").spawn;
const log = console.log;

const search = async function(req, res) {
  try{
    const data = await req.query.name;
    const pythonProcess = await spawn('python', ['./pythonConnection/searchPage.py']);
  
    // send data to python script
    await pythonProcess.stdin.write(data);
    pythonProcess.stdin.end();
  
    // handle close event of stdin stream to make sure all data has been written
    pythonProcess.stdin.on('close', () => {
      // begin reading from stdout stream after all data has been written
      pythonProcess.stdout.on('data', (data) => {  
        const jsonData = JSON.parse(data.toString());
        res.json(jsonData);
      });
    });
    
    // handle errors in the Python script
    pythonProcess.stderr.on('data', (data) => {
      console.error(data.toString());
    });
    
    
    // log process ID for debugging purposes
    log(`Spawned Python process with PID ${pythonProcess.pid}`);
  }catch(e){
    log("Server Error");
  }
 
}

const anime= async function(req,res){  
  try{
    const Url= await req.body;
    const pythonProcess = await spawn('python', ['./pythonConnection/episodeList.py']);
    await pythonProcess.stdin.write((Url.animeUrl));
    pythonProcess.stdin.end();
    pythonProcess.stdin.on('close', () => {
        // begin reading from stdout stream after all data has been written
        pythonProcess.stdout.on('data', (data) => {  
            const jsonString =JSON.parse(data.toString());
            log(jsonString);
            res.json(jsonString);
          });
      });

 // handle errors in the Python script
  pythonProcess.stderr.on('data', (data) => {
    console.error(data.toString());
  });


  // log process ID for debugging purposes
  log(`Spawned Python process with PID ${pythonProcess.pid}`);

  }catch(e){
    log("Server Error");
  }
    
}

const watch=async function(req,res){
  try{
    const url=await req.body.url;
    const pythonProcess = await spawn('python', ['./pythonConnection/videoScreen.py']);
    await pythonProcess.stdin.write((url));
    pythonProcess.stdin.end();
    pythonProcess.stdin.on('close', () => {
      // begin reading from stdout stream after all data has been written
      pythonProcess.stdout.on('data', (data) => {  
        const jsonData = JSON.parse(data.toString());
        res.json(jsonData);
        });
    });

// handle errors in the Python script
pythonProcess.stderr.on('data', (data) => {
  console.error(data.toString());
});

// log process ID for debugging purposes
log(`Spawned Python process with PID ${pythonProcess.pid}`);
  }catch(e){
    log(e);
  }
}

const home1=async function(req,res){
  try{
    const pythonProcess = await spawn('python', ['./pythonConnection/homeScreenList1.py']);
  
    // handle close event of stdin stream to make sure all data has been written
      // begin reading from stdout stream after all data has been written
      pythonProcess.stdout.on('data', (data) => {  
        const jsonData = JSON.parse(data.toString());
        res.json(jsonData);
      });
  
    
    // handle errors in the Python script
    pythonProcess.stderr.on('data', (data) => {
      console.error(data.toString());
    });
    
    
    // log process ID for debugging purposes
    log(`Spawned Python process with PID ${pythonProcess.pid}`);
  }catch(e){
    log("Server Error");
  }
  
}
const home2=async function(req,res){
  try{
    const pythonProcess = await spawn('python', ['./pythonConnection/homeScreenList2.py']);
  
    // handle close event of stdin stream to make sure all data has been written
      // begin reading from stdout stream after all data has been written
      pythonProcess.stdout.on('data', (data) => {  
        const jsonData = JSON.parse(data.toString());
        res.json(jsonData);
      });
  
    
    // handle errors in the Python script
    pythonProcess.stderr.on('data', (data) => {
      console.error(data.toString());
    });
    
    
    // log process ID for debugging purposes
    log(`Spawned Python process with PID ${pythonProcess.pid}`);
  }catch(e){
    log("Server Error");
  }
  
}
const home3=async function(req,res){
  try{
    const pythonProcess = await spawn('python', ['./pythonConnection/homeScreenList3.py']);
  
    // handle close event of stdin stream to make sure all data has been written
      // begin reading from stdout stream after all data has been written
      pythonProcess.stdout.on('data', (data) => {  
        const jsonData = JSON.parse(data.toString());
        res.json(jsonData);
      });
  
    
    // handle errors in the Python script
    pythonProcess.stderr.on('data', (data) => {
      console.error(data.toString());
    });
    
    
    // log process ID for debugging purposes
    log(`Spawned Python process with PID ${pythonProcess.pid}`);
  }catch(e){
    log("Server Error");
  }
  
}
const trailer=async function(req,res){
  try{
    const data = await req.query.vidid;
    const pythonProcess = await spawn('python', ['./pythonConnection/getTrailer.py']);
  
    // send data to python script
    await pythonProcess.stdin.write(data);
    pythonProcess.stdin.end();
  
    // handle close event of stdin stream to make sure all data has been written
    pythonProcess.stdin.on('close', () => {
      // begin reading from stdout stream after all data has been written
      pythonProcess.stdout.on('data', (data) => {  
        const jsonData = JSON.parse(data.toString());
        res.json(jsonData);
      });
    });
    
    // handle errors in the Python script
    pythonProcess.stderr.on('data', (data) => {
      console.error(data.toString());
    });
    // log process ID for debugging purposes
    log(`Spawned Python process with PID ${pythonProcess.pid}`);
  }catch(e){
    log("Server Error");
  }
}

module.exports = {search,anime,watch,home1,home2,home3,trailer};
