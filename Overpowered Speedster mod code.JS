Mod_Name =
  "Overpowered Speedster";
Version =
  "2.0.3";
/*
CREDITS  ______________________________________________________________________________________________________________________
-=-=-=-=|  MAIN CREATOR / OWNER:                                                                                               |
-=-=-=-=|    Basit#8259               - DEVELOPMENT & SHIP BUILDING                                                            |
-=-=-=-=|    🅰TTACK 🅰S TEAM#1132   - CONTRIBUTION OF IDEAS AND ADVERTISING                                                  |
-=-=-=-=|    HΞLPΞЯ#3194              - CONTRIBUTION OF IDEAS AND ADVERTISING                                                  |
-=-=-=-=|                                                                                                                      |
-=-=-=-=|  Github link:                                                                                                        |
-=-=-=-=|    https://github.com/Modraxis/Overpowered-Speedster                                                                 |
-=-=-=-=|                                                                                                                      |
-=-=-=-=|  IMPORTANT NOTE:                                                                                                     |
-=-=-=-=|    Warning: Dont try to change anything when mod is started                                                          |
-=-=-=-=|    If the mod fails to run and displays a "mod stopped after initializing" error, please try the following steps:    |
-=-=-=-=|                                                                                                                      |
-=-=-=-=|    1. Restart the mod.                                                                                               |
-=-=-=-=|    2. Reload your Tab.                                                                                               |
-=-=-=-=|                                                                                                                      |
-=-=-=-=|    If you encounter persistent issues even after attempting the above steps,                                         |
-=-=-=-=|    it might be due to a network problem.Please ensure your internet connection is stable,                            |
-=-=-=-=|    or it could be an issue with the servers on the other end.                                                        |
-=-=-=-=|______________________________________________________________________________________________________________________|
*/
const GAME_OPTIONS = {
  Timer_of_match: 30,  // Put Time in minutes
  Subspace_allow: true,  //Put true if you want subspace users else put false but before start
  required_players: 2,  //Required players before start the game
  waiting_time: 30,  //Waiting time before start the game
  NumberTeams: 0,  //Number teams in game if you want but before start the mod
  Commands_allow: false //Put true if you want to use commands else put false but before start
};



const Ship = [];

Ship.A_101 = '{"name":"A","designer":"Basit","level":1,"model":1,"size":1.5,"specs":{"shield":{"capacity":[1000,1000],"reload":[5000,5000]},"generator":{"capacity":[0.01,0.01],"reload":[0.001,0.001]},"ship":{"mass":10,"speed":[350,350],"rotation":[500,500],"acceleration":[350,350]}},"bodies":{"A_1":{"section_segments":[45,135,225,315],"offset":{"x":0.1,"y":0,"z":0},"position":{"x":[10,10,0,0],"y":[-16,-16,0,0],"z":[0,0,0,0]},"width":[0,3.4,3.4,0],"height":[0,10,10,0],"texture":[49],"angle":180},"A_2":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0],"y":[-16,-16,-12.60000001,-12.60000001],"z":[0,0,0,0,0]},"width":[0,7.2,4,0],"height":[0,10,10,10],"texture":[49],"angle":180}},"typespec":{"name":"A","level":1,"model":1,"code":101,"specs":{"shield":{"capacity":[1000,1000],"reload":[5000,5000]},"generator":{"capacity":[0.01,0.01],"reload":[0.001,0.001]},"ship":{"mass":10,"speed":[350,350],"rotation":[500,500],"acceleration":[350,350]}},"shape":[0,0,0,0,0,0,0,0,0,0,0,0,0.001,0.075,0.083,0.096,0.12,0.156,0.226,0.442,0.606,0.568,0.53,0.504,0.488,0.481,0.488,0.504,0.53,0.568,0.606,0.442,0.226,0.156,0.12,0.096,0.083,0.072,0.075,0,0,0,0,0,0,0,0,0,0,0],"lasers":[],"radius":0.606}}';
Ship[191] = '{"name":"Slow Spectator","level":1.9,"model":1,"size":0.025,"zoom":0.075,"specs":{"shield":{"capacity":[1e-30,1e-30],"reload":[1000,1000]},"generator":{"capacity":[1e-30,1e-30],"reload":[1,1]},"ship":{"mass":1,"speed":[200,200],"rotation":[1000,1000],"acceleration":[1000,1000]}},"bodies":{"face":{"section_segments":100,"angle":0,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"y":[-2,-2,2,2],"z":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},"width":[0,1,1,0],"height":[0,1,1,0],"vertical":true,"texture":[6]}},"typespec":{"name":"Slow Spectator","level":1,"model":1,"code":101,"specs":{"shield":{"capacity":[1e-30,1e-30],"reload":[1000,1000]},"generator":{"capacity":[1e-30,1e-30],"reload":[1,1]},"ship":{"mass":1,"speed":[200,200],"rotation":[1000,1000],"acceleration":[1000,1000]}},"shape":[0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001],"lasers":[],"radius":0.001}}';
Ship[193] = '{"name":"Fast Spectator","level":1.9,"model":2,"size":0.025,"zoom":0.075,"specs":{"shield":{"capacity":[1e-30,1e-30],"reload":[1000,1000]},"generator":{"capacity":[1e-30,1e-30],"reload":[1,1]},"ship":{"mass":1,"speed":[600,600],"rotation":[1000,1000],"acceleration":[1000,1000]}},"bodies":{"face":{"section_segments":100,"angle":0,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"y":[-2,-2,2,2],"z":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},"width":[0,1,1,0],"height":[0,1,1,0],"vertical":true,"texture":[6]}},"typespec":{"name":"Fast Spectator","level":1.9,"model":2,"code":192,"specs":{"shield":{"capacity":[1e-30,1e-30],"reload":[1000,1000]},"generator":{"capacity":[1e-30,1e-30],"reload":[1,1]},"ship":{"mass":1,"speed":[600,600],"rotation":[1000,1000],"acceleration":[1000,1000]}},"shape":[0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001],"lasers":[],"radius":0.001}}';
Ship[601] = '{"name":"Arena-Speedster","remodel":"Basit","level":6,"model":1,"size":1.5,"zoom":1.1,"specs":{"shield":{"capacity":[350,350],"reload":[8,8]},"generator":{"capacity":[320,320],"reload":[100,100]},"ship":{"mass":175,"speed":[115,115],"rotation":[80,80],"acceleration":[140,140]}},"bodies":{"main1":{"section_segments":[22.5,67.5,112.5,157.5,202.5,247.5,292.5,337.5,382.5],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-100,-95,0,5],"z":[0,0,0,0]},"width":[0,10,40,0],"height":[0,5,30,0],"texture":[6,18.1,4],"laser":{"damage":[200,200],"rate":1,"type":2,"speed":[80,80],"recoil":50,"number":1,"error":0}},"main2":{"section_segments":[22.5,67.5,112.5,157.5,202.5,247.5,292.5,337.5,382.5],"offset":{"x":0,"y":0,"z":0.1},"position":{"x":[0,0,0,0],"y":[-100,-95,0,5],"z":[0,0,0,0]},"width":[0,9,39,0],"height":[0,5,30,0],"texture":[6,4,4]},"main3":{"section_segments":[22.5,67.5,112.5,157.5,202.5,247.5,292.5,337.5,382.5],"offset":{"x":0.2,"y":0,"z":-0.6},"position":{"x":[0,0,0,0],"y":[-100,-95,0,5],"z":[0,0,0,0]},"width":[0,10,40,0],"height":[0,5,30,0],"texture":[6,4,4]},"warp_drive":{"section_segments":12,"offset":{"x":0,"y":20,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"y":[-22,-22,-11,-8,-2,-3,1,-20,40,40,45,55,66,80,80,66],"z":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},"width":[0,30,25,22,23,21,21,13,13,21,23,25,25,18,16.5,0],"height":[0,25,25,22,23,21,21,13,13,21,23,25,25,18,16.5,0],"propeller":1,"texture":[4,13,17,4,8,4,16,17,18,4,4,15,3,17,17],"vertical":0,"angle":0},"side_connector":{"section_segments":12,"offset":{"x":10,"y":-20,"z":-35},"position":{"x":[-9,-9,0,0,0,0,0,0,0,0,-1,0,0,0],"y":[-27,-27,-3,0,-1,4,3,15,15,20,40,40],"z":[0,0,0,0,0,0,0,0,0,0,0,0]},"width":[0,20,20,18,16,16,13,12,16,18,20,0],"height":[0,20,20,18,16,16,13,12,16,18,20,0],"propeller":false,"texture":[4,13,4,8,4,17,3,63,4,4,4],"vertical":1,"angle":70},"struts":{"section_segments":12,"offset":{"x":15,"y":50,"z":0},"position":{"x":[0,0,0,0],"y":[-50,-20,40,40],"z":[0,0,0,0]},"width":[2,4,4,2],"height":[2,5,5,2],"angle":0,"propeller":false,"texture":4},"struts2":{"section_segments":12,"offset":{"x":0,"y":50,"z":10},"position":{"x":[0,0,0,0],"y":[-50,-20,40,40],"z":[0,0,0,0]},"width":[2,4,4,2],"height":[2,5,5,2],"angle":0,"propeller":false,"texture":4},"cockring1":{"section_segments":[22.5,67.5,112.5,157.5,202.5,247.5,292.5,337.5,382.5],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-10,-8,0,0],"z":[0,0,0,0]},"width":[0,39,41.5,20],"height":[0,29.5,31.5,20],"texture":[63],"propeller":false},"cockring2":{"section_segments":[22.5,67.5,112.5,157.5,202.5,247.5,292.5,337.5,382.5],"offset":{"x":0,"y":-43,"z":0},"position":{"x":[0,0,0,0],"y":[-10,-8,0,0],"z":[0,0,0,0]},"width":[0,25,27,20],"height":[0,18,21,20],"texture":[63],"propeller":false},"cockring3":{"section_segments":8,"offset":{"x":0,"y":35,"z":0},"position":{"x":[0,0,0,0],"y":[-4,-4,0,0],"z":[0,0,0,0]},"width":[0,18,18,0],"height":[0,18,18,0],"texture":[4],"propeller":false},"cockpit":{"section_segments":8,"offset":{"x":0,"y":-60,"z":15},"position":{"x":[0,0,0,0,0,0,0],"y":[-15,0,20,40,50],"z":[-7,-5,0,0,0]},"width":[0,6,10,12,0],"height":[0,10,15,12,0],"texture":[9]},"side_propulsors":{"section_segments":[22.5,67.5,112.5,157.5,202.5,247.5,292.5,337.5,382.5],"offset":{"x":50,"y":25,"z":-5},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0],"y":[-20,-15,0,10,20,25,30,40,60,65,90,70],"z":[0,0,0,0,0,0,0,0,0,0,0,0]},"width":[0,15,20,20,20,15,15,15,15,15,10,0],"height":[0,15,20,20,20,15,15,15,15,15,10,0],"propeller":true,"texture":[4,4,2,2,5,63,5,4,63,17,17]},"thruster":{"section_segments":[22.5,67.5,112.5,157.5,202.5,247.5,292.5,337.5,382.5],"offset":{"x":50,"y":24,"z":-5},"position":{"x":[0,0,0],"y":[10,30,30],"z":[0,0,0]},"width":[18,18,20],"height":[18,18,20],"propeller":true,"texture":[4,17,17,4]},"flame_shield":{"section_segments":[35,55,125,145,215,235,305,325],"offset":{"x":50,"y":80,"z":10},"position":{"x":[0,0,0,0],"y":[-50,-20,40,40],"z":[0,0,0,0]},"width":[0,4,4,0],"height":[0,5,5,0],"angle":0,"propeller":false,"texture":4},"flame_shield2":{"section_segments":[35,55,125,145,215,235,305,325],"offset":{"x":65,"y":80,"z":-5},"position":{"x":[0,0,0,0],"y":[-50,-20,40,40],"z":[0,0,0,0]},"width":[0,4,4,0],"height":[0,5,5,0],"angle":0,"propeller":false,"texture":4},"flame_shield3":{"section_segments":[35,55,125,145,215,235,305,325],"offset":{"x":35,"y":80,"z":-5},"position":{"x":[0,0,0,0],"y":[-50,-20,40,40],"z":[0,0,0,0]},"width":[0,4,4,0],"height":[0,5,5,0],"angle":0,"propeller":false,"texture":4},"flame_shield4":{"section_segments":[35,55,125,145,215,235,305,325],"offset":{"x":50,"y":80,"z":-20},"position":{"x":[0,0,0,0],"y":[-50,-20,40,40],"z":[0,0,0,0]},"width":[0,4,4,0],"height":[0,5,5,0],"angle":0,"propeller":false,"texture":4},"cannons":{"section_segments":8,"offset":{"x":55,"y":40,"z":30},"position":{"x":[0,0,0,0,0,0,0],"y":[-50,-45,-20,0,20,30,40],"z":[0,0,0,0,0,0,0]},"width":[0,5,7,10,3,5,0],"height":[0,5,7,8,3,5,0],"angle":0,"laser":{"damage":[12,12],"rate":2,"type":1,"speed":[130,130],"number":1,"angle":0,"error":0},"propeller":false,"texture":[6,4,10,4,63,4]}},"wings":{"winglets1":{"offset":{"x":15,"y":-40,"z":10},"doubleside":true,"length":[35,10],"width":[10,20,30],"angle":[30,0],"position":[90,80,50],"texture":[4],"bump":{"position":0,"size":40}},"winglets2":{"offset":{"x":15,"y":-43,"z":10},"doubleside":true,"length":[35,10],"width":[10,20,30],"angle":[30,0],"position":[90,80,50],"texture":[63],"bump":{"position":0,"size":0}},"winglets3":{"offset":{"x":15,"y":-37,"z":10},"doubleside":true,"length":[35,10],"width":[10,20,30],"angle":[30,0],"position":[90,80,50],"texture":[63],"bump":{"position":0,"size":0}}},"typespec":{"name":"Arena-Speedster","level":6,"model":1,"code":601,"specs":{"shield":{"capacity":[350,350],"reload":[8,8]},"generator":{"capacity":[320,320],"reload":[100,100]},"ship":{"mass":175,"speed":[115,115],"rotation":[80,80],"acceleration":[140,140]}},"shape":[3,2.91,2.35,1.89,1.647,1.421,1.277,1.189,1.132,1.093,1.073,1.745,1.811,1.844,2.043,2.209,2.344,2.484,2.799,3.206,3.818,4.142,3.939,3.779,3.048,3.006,3.048,3.779,3.939,4.142,3.818,3.206,2.799,2.484,2.344,2.209,2.043,1.844,1.812,1.745,1.073,1.093,1.132,1.189,1.277,1.421,1.647,1.89,2.35,2.91],"lasers":[{"x":0,"y":-3,"z":0,"angle":0,"damage":[200,200],"rate":1,"type":2,"speed":[80,80],"number":1,"spread":0,"error":0,"recoil":50},{"x":1.65,"y":-0.3,"z":0.9,"angle":0,"damage":[12,12],"rate":2,"type":1,"speed":[130,130],"number":1,"spread":0,"error":0,"recoil":0},{"x":-1.65,"y":-0.3,"z":0.9,"angle":0,"damage":[12,12],"rate":2,"type":1,"speed":[130,130],"number":1,"spread":0,"error":0,"recoil":0}],"radius":4.142}}';
Ship[602] = '{"name":"Captureflag-Speedster","level":6,"model":2,"size":1.5,"zoom":1.1,"specs":{"shield":{"capacity":[350,350],"reload":[6,8]},"generator":{"capacity":[320,320],"reload":[100,100]},"ship":{"mass":175,"speed":[90,115],"rotation":[60,80],"acceleration":[90,140]}},"bodies":{"main":{"section_segments":8,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"y":[-110,-95,-100,-95,-10,0,2,10,13,30,55,65,90,80],"z":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},"width":[0,8,9,11,38,36,29,27,21,20,21,23,20,0],"height":[0,5,5,7,33,30,29,27,21,20,21,23,20,0],"texture":[6,17,4,11,8,4,63,4,18,4,3,13,17],"propeller":true,"laser":{"damage":[200,200],"rate":1,"type":2,"speed":[80,80],"recoil":50,"number":1,"error":0}},"cockpit":{"section_segments":8,"offset":{"x":0,"y":-60,"z":16},"position":{"x":[0,0,0,0,0,0,0],"y":[-17,0,20,45,50],"z":[-7,-5,0,0,0]},"width":[6,10,12,12,0],"height":[2,10,15,12,0],"texture":[9]},"side_propulsors":{"section_segments":12,"offset":{"x":45,"y":26,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0,0],"y":[-30,-10,-15,0,10,20,25,30,40,45,85,70],"z":[0,0,0,0,0,0,0,0,0,0,0,0]},"width":[0,12,15,20,20,20,15,15,20,20,11,0],"height":[0,12,15,20,20,20,15,15,20,20,11,0],"propeller":true,"texture":[63,13,4,63,2,4,63,8,4,13,17]},"cannons":{"section_segments":12,"offset":{"x":25,"y":50,"z":45},"position":{"x":[0,0,0,0,0,0,0],"y":[-50,-45,-20,0,20,30,40],"z":[0,0,0,0,0,0,0]},"width":[0,4,7,10,3,5,0],"height":[0,4,7,8,3,5,0],"angle":-6,"laser":{"damage":[12,12],"rate":2,"type":1,"speed":[130,130],"number":1,"angle":-10,"error":0},"propeller":false,"texture":[6,4,10,18,63,4]}},"wings":{"join":{"doubleside":1,"offset":{"x":0,"y":0,"z":0},"length":[40,10,34],"width":[30,30,50,15],"angle":[0,0,0],"position":[-20,35,35,105],"texture":[63],"bump":{"position":20,"size":15}},"winglets2":{"offset":{"x":50,"y":-40,"z":10},"doubleside":true,"length":[0,40,35],"width":[0,10,15,15],"angle":[120,120,180],"position":[95,95,95,95],"texture":[63],"bump":{"position":40,"size":20}}},"typespec":{"name":"Captureflag-Speedster","level":6,"model":2,"code":602,"specs":{"shield":{"capacity":[350,350],"reload":[6,8]},"generator":{"capacity":[320,320],"reload":[100,100]},"ship":{"mass":175,"speed":[90,115],"rotation":[60,80],"acceleration":[90,140]}},"shape":[3.3,3.012,2.461,2.008,1.718,1.535,1.392,1.302,1.234,1.196,1.18,1.175,1.418,1.549,1.908,2.091,2.225,2.389,2.976,3.95,4.212,3.73,3.68,3.501,2.748,2.705,2.748,3.501,3.68,3.73,4.212,3.95,2.976,2.389,2.225,2.091,1.908,1.549,1.422,1.175,1.18,1.196,1.234,1.302,1.392,1.535,1.718,2.008,2.461,3.012],"lasers":[{"x":0,"y":-3.3,"z":0,"angle":0,"damage":[200,200],"rate":1,"type":2,"speed":[80,80],"number":1,"spread":0,"error":0,"recoil":50},{"x":0.907,"y":0.008,"z":1.35,"angle":-6,"damage":[12,12],"rate":2,"type":1,"speed":[130,130],"number":1,"spread":-10,"error":0,"recoil":0},{"x":-0.907,"y":0.008,"z":1.35,"angle":6,"damage":[12,12],"rate":2,"type":1,"speed":[130,130],"number":1,"spread":-10,"error":0,"recoil":0}],"radius":4.212}}';
Ship[603] = '{"name":"Black-Speedster","level":6,"model":3,"size":1.5,"zoom":1.1,"specs":{"shield":{"capacity":[350,350],"reload":[6,8]},"generator":{"capacity":[320,320],"reload":[100,100]},"ship":{"mass":175,"speed":[90,115],"rotation":[60,80],"acceleration":[90,140]}},"bodies":{"main":{"section_segments":8,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0],"y":[-100,-95,0,0,70,73,50],"z":[0,0,0,0,0,0,0]},"width":[0,10,40,20,20,20,0],"height":[0,5,30,30,15,15,0],"texture":[5,5,5,5,17,17],"propeller":true,"laser":{"damage":[200,200],"rate":1,"type":2,"speed":[80,80],"recoil":50,"number":1,"error":0}},"cockpit":{"section_segments":8,"offset":{"x":0,"y":-60,"z":15},"position":{"x":[0,0,0,0,0,0,0],"y":[-20,0,20,40,50],"z":[-7,-5,0,0,0]},"width":[0,10,10,10,0],"height":[0,10,15,12,0],"texture":[17]},"side_propulsors":{"section_segments":10,"offset":{"x":50,"y":25,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-20,-15,0,10,20,25,30,40,80,70],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,15,20,20,20,15,15,20,10,0],"height":[0,15,20,20,20,15,15,20,10,0],"propeller":true,"texture":[5,5,5,5,5,5,5,17]},"cannons":{"section_segments":12,"offset":{"x":30,"y":40,"z":45},"position":{"x":[0,0,0,0,0,0,0],"y":[-50,-45,-20,0,20,30,40],"z":[0,0,0,0,0,0,0]},"width":[0,5,7,10,3,5,0],"height":[0,5,7,8,3,5,0],"angle":-10,"laser":{"damage":[12,12],"rate":2,"type":1,"speed":[100,130],"number":1,"angle":-10,"error":0},"propeller":false,"texture":[17,5,17,5,17,17]}},"wings":{"join":{"offset":{"x":0,"y":0,"z":10},"length":[40,0],"width":[10,20],"angle":[-1],"position":[0,30],"texture":5,"bump":{"position":0,"size":25}},"winglets":{"offset":{"x":0,"y":-40,"z":10},"doubleside":true,"length":[45,10],"width":[5,20,30],"angle":[50,-10],"position":[90,80,50],"texture":5,"bump":{"position":10,"size":30}}},"typespec":{"name":"Black-Speedster","level":6,"model":3,"code":603,"specs":{"shield":{"capacity":[350,350],"reload":[6,8]},"generator":{"capacity":[320,320],"reload":[100,100]},"ship":{"mass":175,"speed":[90,115],"rotation":[60,80],"acceleration":[90,140]}},"shape":[3,2.914,2.408,1.952,1.675,1.49,1.349,1.263,1.198,1.163,1.146,1.254,1.286,1.689,2.06,2.227,2.362,2.472,2.832,3.082,3.436,3.621,3.481,2.48,2.229,2.194,2.229,2.48,3.481,3.621,3.436,3.082,2.832,2.472,2.362,2.227,2.06,1.689,1.286,1.254,1.146,1.163,1.198,1.263,1.349,1.49,1.675,1.952,2.408,2.914],"lasers":[{"x":0,"y":-3,"z":0,"angle":0,"damage":[200,200],"rate":1,"type":2,"speed":[80,80],"number":1,"spread":0,"error":0,"recoil":50},{"x":1.16,"y":-0.277,"z":1.35,"angle":-10,"damage":[12,12],"rate":2,"type":1,"speed":[100,130],"number":1,"spread":-10,"error":0,"recoil":0},{"x":-1.16,"y":-0.277,"z":1.35,"angle":10,"damage":[12,12],"rate":2,"type":1,"speed":[100,130],"number":1,"spread":-10,"error":0,"recoil":0}],"radius":3.621}}';
Ship[604] = '{"name":"Cool-Speedster","level":6,"model":4,"size":1.5,"zoom":1.1,"specs":{"shield":{"capacity":[350,350],"reload":[6,8]},"generator":{"capacity":[320,320],"reload":[100,100]},"ship":{"mass":175,"speed":[90,115],"rotation":[60,80],"acceleration":[90,140]}},"bodies":{"main":{"section_segments":8,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0],"y":[-100,-95,0,0,70,73,50],"z":[0,0,0,0,0,0,0]},"width":[0,10,40,20,20,20,0],"height":[0,5,30,30,15,15,0],"texture":[17,63,63,63,17,17],"propeller":true,"laser":{"damage":[200,200],"rate":1,"type":2,"speed":[80,80],"recoil":50,"number":1,"error":0}},"cockpit":{"section_segments":8,"offset":{"x":0,"y":-60,"z":15},"position":{"x":[0,0,0,0,0,0,0],"y":[-20,0,20,40,50],"z":[-7,-5,0,0,0]},"width":[0,10,10,10,0],"height":[0,10,15,12,0],"texture":[7]},"side_propulsors":{"section_segments":10,"offset":{"x":50,"y":25,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-20,-15,0,10,20,25,30,40,80,70],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,15,20,20,20,15,15,20,12,0],"height":[0,15,20,20,20,15,15,20,12,0],"propeller":true,"texture":[63,63,63,63,63,63,63,49]},"cannons":{"section_segments":12,"offset":{"x":30,"y":40,"z":45},"position":{"x":[0,0,0,0,0,0,0],"y":[-50,-45,-20,0,20,30,40],"z":[0,0,0,0,0,0,0]},"width":[0,5,7,10,3,5,0],"height":[0,5,7,8,3,5,0],"angle":-10,"laser":{"damage":[12,12],"rate":2,"type":1,"speed":[100,130],"number":1,"angle":-10,"error":0},"propeller":false,"texture":[17,63,5,63,63,63]}},"wings":{"join":{"offset":{"x":0,"y":0,"z":10},"length":[40,0],"width":[10,20],"angle":[-1],"position":[0,30],"texture":63,"bump":{"position":0,"size":25}},"winglets":{"offset":{"x":0,"y":-40,"z":10},"doubleside":true,"length":[45,10],"width":[5,20,30],"angle":[50,-10],"position":[90,80,50],"texture":63,"bump":{"position":10,"size":30}}},"typespec":{"name":"Cool-Speedster","level":6,"model":4,"code":604,"specs":{"shield":{"capacity":[350,350],"reload":[6,8]},"generator":{"capacity":[320,320],"reload":[100,100]},"ship":{"mass":175,"speed":[90,115],"rotation":[60,80],"acceleration":[90,140]}},"shape":[3,2.914,2.408,1.952,1.675,1.49,1.349,1.263,1.198,1.163,1.146,1.254,1.286,1.689,2.06,2.227,2.362,2.472,2.832,3.111,3.504,3.649,3.481,2.48,2.229,2.194,2.229,2.48,3.481,3.649,3.504,3.111,2.832,2.472,2.362,2.227,2.06,1.689,1.286,1.254,1.146,1.163,1.198,1.263,1.349,1.49,1.675,1.952,2.408,2.914],"lasers":[{"x":0,"y":-3,"z":0,"angle":0,"damage":[200,200],"rate":1,"type":2,"speed":[80,80],"number":1,"spread":0,"error":0,"recoil":50},{"x":1.16,"y":-0.277,"z":1.35,"angle":-10,"damage":[12,12],"rate":2,"type":1,"speed":[100,130],"number":1,"spread":-10,"error":0,"recoil":0},{"x":-1.16,"y":-0.277,"z":1.35,"angle":10,"damage":[12,12],"rate":2,"type":1,"speed":[100,130],"number":1,"spread":-10,"error":0,"recoil":0}],"radius":3.649}}';
Ship[605] = '{"name":"A-Speedster","level":6,"model":5,"size":1.5,"zoom":1.1,"specs":{"shield":{"capacity":[350,350],"reload":[6,8]},"generator":{"capacity":[320,320],"reload":[100,100]},"ship":{"mass":175,"speed":[90,115],"rotation":[60,80],"acceleration":[90,140]}},"bodies":{"main":{"section_segments":8,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0],"y":[-100,-95,0,0,70,65],"z":[0,0,0,0,0,0]},"width":[0,10,40,20,20,0],"height":[0,5,30,30,15,0],"texture":[6,11,5,63,12],"propeller":true,"laser":{"damage":[200,200],"rate":1,"type":2,"speed":[80,80],"recoil":50,"number":1,"error":0}},"cockpit":{"section_segments":8,"offset":{"x":0,"y":-60,"z":15},"position":{"x":[0,0,0,0,0,0,0],"y":[-20,0,20,40,50],"z":[-7,-5,0,0,0]},"width":[0,10,10,10,0],"height":[0,10,15,12,0],"texture":[9]},"side_propulsors":{"section_segments":10,"offset":{"x":50,"y":25,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-20,-15,0,10,20,25,30,40,80,70],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,15,20,20,20,15,15,20,10,0],"height":[0,15,20,20,20,15,15,20,10,0],"propeller":true,"texture":[4,4,2,2,5,63,5,4,12]},"cannons":{"section_segments":12,"offset":{"x":30,"y":40,"z":45},"position":{"x":[0,0,0,0,0,0,0],"y":[-50,-45,-20,0,20,30,40],"z":[0,0,0,0,0,0,0]},"width":[0,5,7,10,3,5,0],"height":[0,5,7,8,3,5,0],"angle":-10,"laser":{"damage":[12,12],"rate":2,"type":1,"speed":[100,130],"number":1,"angle":-10,"error":0},"propeller":false,"texture":[6,4,10,4,63,4]}},"wings":{"join":{"offset":{"x":0,"y":0,"z":10},"length":[40,0],"width":[10,20],"angle":[-1],"position":[0,30],"texture":[63],"bump":{"position":0,"size":25}},"winglets":{"offset":{"x":0,"y":-40,"z":10},"doubleside":true,"length":[45,10],"width":[5,20,30],"angle":[50,-10],"position":[90,80,50],"texture":[4],"bump":{"position":10,"size":30}}},"typespec":{"name":"A-Speedster","level":6,"model":5,"code":605,"specs":{"shield":{"capacity":[350,350],"reload":[6,8]},"generator":{"capacity":[320,320],"reload":[100,100]},"ship":{"mass":175,"speed":[90,115],"rotation":[60,80],"acceleration":[90,140]}},"shape":[3,2.914,2.408,1.952,1.675,1.49,1.349,1.263,1.198,1.163,1.146,1.254,1.286,1.689,2.06,2.227,2.362,2.472,2.832,3.082,3.436,3.621,3.481,2.48,2.138,2.104,2.138,2.48,3.481,3.621,3.436,3.082,2.832,2.472,2.362,2.227,2.06,1.689,1.286,1.254,1.146,1.163,1.198,1.263,1.349,1.49,1.675,1.952,2.408,2.914],"lasers":[{"x":0,"y":-3,"z":0,"angle":0,"damage":[200,200],"rate":1,"type":2,"speed":[80,80],"number":1,"spread":0,"error":0,"recoil":50},{"x":1.16,"y":-0.277,"z":1.35,"angle":-10,"damage":[12,12],"rate":2,"type":1,"speed":[100,130],"number":1,"spread":-10,"error":0,"recoil":0},{"x":-1.16,"y":-0.277,"z":1.35,"angle":10,"damage":[12,12],"rate":2,"type":1,"speed":[100,130],"number":1,"spread":-10,"error":0,"recoil":0}],"radius":3.621}}';

var ships = [];
for (let ship in Ship) ships.push(Ship[ship]);

const vocabulary = [
  { text: "You", icon: "\u004e", key: "O" },
  { text: "Me", icon: "\u004f", key: "E" },
  { text: "Wait", icon: "\u0048", key: "W" },
  { text: "Yes", icon: "\u004c", key: "Y" },
  { text: "No", icon: "\u004d", key: "N" },
  { text: "Hello", icon: "\u0045", key: "H" },
  { text: "Sorry", icon: "\u00a1", key: "S" },
  { text: "Thanks", icon: "\u0041", key: "X" },
  { text: "Attack", icon: "\u0049", key: "A" },
  { text: "Follow Me", icon: "\u0050", key: "F" },
  { text: "Good Game", icon: "\u00a3", key: "G" },
  { text: "Gems", icon: "\u0044", key: "M" },
  { text: "Kill", icon: "\u005b", key: "K" },
  { text: "Hmm", icon: "\u004b", key: "Q" },
  { text: "No Prb", icon: "\u0047", key: "P" },
  { text: "Discord", icon: "\u007b", key: "D" },
  { text: "Bruh", icon: "\u{1F480}", key: "I" },
  { text: "Lag", icon: "\u0069", key: "J" },
  { text: "Team", icon: "\u0031", key: "T" }
];

const map =
  "                 9                                          \n" +
  "                              9            9        9       \n" +
  "                                                            \n" +
  "                                                            \n" +
  "       9                                                    \n" +
  "                                 9                          \n" +
  "  9                9                                        \n" +
  "            9                                               \n" +
  "                            9          9         9          \n" +
  "                                                        9   \n" +
  "                    9                                       \n" +
  "                                                            \n" +
  "  9                                                         \n" +
  "        9                                                   \n" +
  "                9                    9       9              \n" +
  "                                                            \n" +
  "                                                            \n" +
  "                                                            \n" +
  "                            9          9                    \n" +
  "                  9                                         \n" +
  "           9                                           9    \n" +
  "                                                            \n" +
  "     9                     9                                \n" +
  "                                             9              \n" +
  "                    9                                       \n" +
  "        9                                                   \n" +
  "                                                            \n" +
  "               9                                            \n" +
  "                                     9                      \n" +
  "  9                                                         \n" +
  "                                                            \n" +
  "                                                            \n" +
  "                                                            \n" +
  "                      9                      9      9       \n" +
  "            9                                               \n" +
  "                                  9                         \n" +
  "                                                            \n" +
  "                                                            \n" +
  "     9                                    9                 \n" +
  "                   9     9                         9        \n" +
  "                                                            \n" +
  "                                                            \n" +
  "                                                            \n" +
  "            9     9            9      9                     \n" +
  "                                                            \n" +
  "                                              9             \n" +
  "     9                                                      \n" +
  "                                                            \n" +
  "                           9                9        9      \n" +
  "                                                            \n" +
  "            9                                               \n" +
  "                    9             9                         \n" +
  "                                                            \n" +
  "                                                            \n" +
  "                                                   9        \n" +
  "                                           9        9       \n" +
  "   9         9          9                                   \n" +
  "                                                            \n" +
  "                                                            \n" +
  "                                                            ";

onStart();
const tracks = ["civilisation.mp3", "procedurality.mp3", "argon.mp3", "crystals.mp3", "red_mist.mp3", "warp_drive.mp3"];
const OPspeedsters = [601, 602, 603, 604, 605];
const Spectators = [191, 192];
const ACWtag = "Λᴄᗯ | ☆";
this.options = {
  root_mode: "",
  reset_tree: true,
  map_size: 60,
  vocabulary,
  choose_ship: [601, 602, 603, 604, 605],
  ships,
  max_level: 1,
  custom_map: map,
  friendly_colors: GAME_OPTIONS.NumberTeams,
  weapons_store: false,
  max_players: 60,
  soundtrack: tracks[~~(Math.random() * tracks.length)],
  lives: 5,
  starting_ship: 808,
  starting_ship_maxed: true,
  asteroids_strength: 100000,
};
const ACWsFunctions = {
  Subspace_Detector: function (ship) {
    if (GAME_OPTIONS.Subspace_allow) {
      if (!ship.custom.cheater) {
        ship.custom.cheater = true;
        game.modding.terminal.echo(`[[bg;#AA00FF;]Subspace hack alert:\n[[bg;#ff0000;]${ship.name} has been caught using Subspace.]`);
        game.modding.terminal.echo(`[[bg;#AA00FF;]Subspace Action:\n  [[bg;#ff0000;]${ship.name} has not been kicked because you allow Subspace.]`);
      }
    } else {
      ship.gameover({ "You have been caught": "using Subspace" });
      game.modding.terminal.echo(`[[bg;#AA00FF;]Subspace hack alert:\n[[bg;#ff0000;]${ship.name} has been caught using Subspace.]`);
      game.modding.terminal.echo(`[[bg;#AA00FF;]Subspace Action:\n[[bg;#ff0000;]${ship.name} has been kicked because you do not allow Subspace.]`);
    }
  },
  spectate: function (ship) {
    if (!ship.custom.Spectatee) {
      ship.setUIComponent({
        id: "Speedsters",
        visible: false
      });
      ship.custom.Spectatecolor = true;
      if (!ship.custom.Spectatetype) {
        ship.custom.last_ship = ship.type;
        ship.set({ type: 191, crystals: 0, collider: false, vx: 0, vy: 0 });
        ship.custom.Spectatetype = true;
      } else if (ship.custom.Spectatetype) {
        ship.set({ type: 192, crystals: 0, collider: false, vx: 0, vy: 0 });
        ship.custom.Spectatetype = false;
        ship.custom.Spectatee = true;
      }
    } else {
      ship.setUIComponent(ACWsUIs.Speedsters);
      ship.custom.Spectatee = false;
      ship.custom.Spectatetype = false;
      ship.custom.Spectatecolor = false;
      ship.set({ type: ship.custom.last_ship, shield: 500, crystals: 720, generator: 0, collider: true, stats: 88888888, vx: 0, vy: 0 });
    }
  },
  speedsters: function (ship) {
    if (!ship.custom.Spectatee) {
      ship.set({ type: OPspeedsters[OPspeedsters.indexOf(ship.type) + 1] || OPspeedsters[0], generator: 0, collider: true, stats: 88888888 });
    }
  },
  updateScoreboard: function (game) {
    let sorted_ships_KDratio = [...game.ships].sort((a, b) => (b.custom.Kills - b.custom.Deaths) - (a.custom.Kills - a.custom.Deaths)).slice(0, 10);
    for (let ship of game.ships) {
      if (ship.name.startsWith(ACWtag)) {
        if (ship.id === sorted_ships_KDratio[0].id && ship.custom.Kills >= 1) {
          ship.custom.MainColor = "#F9D800";
          ship.custom.FillColor = "rgba(249, 216, 0, 0.20)";
        } else if (ship.custom.Spectatecolor) {
          ship.custom.MainColor = "rgba(255, 255, 0, 0.20)";
          ship.custom.FillColor = "rgba(255, 255, 0, 0.20)";
        } else {
          ship.custom.MainColor = "#FFFF00";
          ship.custom.FillColor = "rgba(255, 255, 0, 0.20)";
        }
      } else {
        if (ship.id === sorted_ships_KDratio[0].id && ship.custom.Kills >= 1) {
          ship.custom.MainColor = "#00FFFF";
          ship.custom.FillColor = "rgba(0, 255, 255, 0.20)";
        } else if (ship.custom.Spectatecolor) {
          ship.custom.MainColor = "rgba(255, 255, 255, 0.50)";
          ship.custom.FillColor = "rgba(255, 255, 255, 0.20)";
        } else {
          ship.custom.MainColor = "#FFFFFF";
          ship.custom.FillColor = "rgba(255, 255, 255, 0.20)";
        }
      }
    }
    let columnHeight = 100 / 11;
    let textHeight = columnHeight / 1.2;
    let offsetY = (columnHeight - textHeight) / 2;
    let Scoreboard = {
      id: "scoreboard",
      clickable: false,
      visible: true,
      components: [
        { type: "box", position: [0, 0, 100, 100], fill: "#000000" },

        { type: "text", position: [2, offsetY, 100, textHeight], color: "#ffffff", value: "Players:", align: "left" },
        { type: "text", position: [-8.5, offsetY + 0.5, 100, textHeight], color: "#FF0000", value: "K", align: "right" },
        { type: "text", position: [-5.9, offsetY + 0.5, 100, textHeight], color: "#FFFFFF", value: "/", align: "right" },
        { type: "text", position: [-1.5, offsetY + 0.5, 100, textHeight], color: "lime", value: "D", align: "right" },

        { type: "text", position: [30, offsetY, 100, textHeight], color: "#ffffff", value: game.ships.length, align: "left" },

        ...(sorted_ships_KDratio).map((ship, i) => {
          let playernamepos = [0, offsetY + columnHeight * (i + 1), 100, textHeight];
          let playerKillandDeathspos = [-1.5, offsetY + columnHeight * (i + 1), 100, textHeight];
          return [
            { type: "player", index: i, position: playernamepos, id: sorted_ships_KDratio[i].id, color: ship.custom.MainColor, value: "", align: "left" },
            { type: "text", position: playerKillandDeathspos, value: sorted_ships_KDratio[i].custom.Kills + "/" + ship.custom.Deaths, color: ship.custom.MainColor, align: "right" },
          ];
        }).flat()
      ]
    };
    for (let ship of game.ships) {
      if (ship === null) continue;
      let components = [...Scoreboard.components];
      let index = components.findIndex(c => c.type == "player" && c.id === ship.id);
      if (index == -1) {
        let last = Scoreboard.components.at(-2);
        last.id = ship.id;
        last.color = ship.custom.MainColor;
        Scoreboard.components.at(-1).value = ship.custom.Kills + "/" + ship.custom.Deaths;
        index = Scoreboard.components.length - 2;
      }
      Scoreboard.components.splice(index, 0, { type: "box", position: [0, components[index].index * 100 / 11 + 100 / 11, 100, 100 / 11], fill: ship.custom.FillColor, stroke: ship.custom.MainColor, width: 0.5 });
      ship.setUIComponent(Scoreboard);
      Scoreboard.components = components;
    }
  },
  toTimer: function () {
    const timerr = GAME_OPTIONS.Timer_of_match * 60;
    let seconds = ACWsFunctions.timeLeft(game.custom.startedStep + timerr * 60);
    let minutes = Math.trunc(seconds / 60);
    seconds %= 60;
    if (minutes < 60) {
      return `${minutes}:${seconds.toString().padStart(2, "0")}`;
    }
    let hours = Math.trunc(minutes / 60);
    minutes %= 60;
    return `${hours}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  },
  timeLeft: function (timestamp) {
    return Math.max(Math.ceil((timestamp - game.step) / 60), 0);
  },
  timeExceeded: function (timestamp, timerr) {
    return game.step > (timerr + timestamp);
  },
  sendWaitingText: function (ship) {
    ship.setUIComponent({
      id: "waiting_text",
      position: [40, 20, 20, 20],
      components: [
        { type: "text", position: [0, 0, 100, 50], value: "Waiting for more players...", color: "#cde" },
        { type: "text", position: [0, 30, 100, 50], value: String(game.custom.waiting_text).toString(), color: "#cde" }
      ]
    });
  },
  clone: function (obj) {
    return JSON.parse(JSON.stringify(obj));
  }
};
const ACWsUIs = {
  Spectate: {
    id: "Spectate",
    position: [70, 0.5, 9, 4],
    clickable: true,
    visible: true,
    shortcut: "4",
    components: [
      { type: "box", position: [0, 0, 100, 100], fill: "#052A29", stroke: "#00FFFF", width: 5 },
      { type: "text", position: [0, 20, 100, 60], value: "Spectate (4)", color: "#00FFFF" }
    ]
  },
  Speedsters: {
    id: "Speedsters",
    position: [22, 0.5, 11, 4],
    clickable: true,
    visible: true,
    shortcut: "2",
    components: [
      { type: "box", position: [0, 0, 100, 100], fill: "#2A2905", stroke: "#FFFB00", width: 5 },
      { type: "text", position: [0, 20, 100, 60], value: "Speedsters (2)", color: "rgba(255, 251, 0, 0.80)" },
    ]
  },
  Blockers: function (ship) {
    const blockers = [
      {
        id: "score_block",
        position: [4, 2, 12, 6],
        visible: true,
        components: [
          { type: "box", position: [-0.25, -0.25, 100, 100], fill: "#000000", stroke: "#cde", width: 4 },
          { type: "text", position: [6, -8, 85, 75], value: "Overpowered", color: "#cde" },
          { type: "text", position: [15, 35, 70, 60], value: " Speedster ", color: "#cde" }
        ]
      },
      {
        id: "buy_lives_blocker",
        position: [65, 0, 10, 10],
        clickable: true,
        visible: true,
        shortcut: String.fromCharCode(187),
        components: []
      },
      {
        id: "steam_exit_block",
        position: [0, 95, 20, 5],
        clickable: true,
      }
    ];
    blockers.forEach(component => {
      ship.setUIComponent(component);
    });
  },
  hide_notification: {
    id: "notificationUI",
    visible: true
  },
  scoreboard: {
    id: "scoreboard",
    visible: true,
    components: [
      { type: "box", position: [0, 0, 100, 100], fill: "#000000" },
      { type: "text", position: [5, 5, 90, 10], value: "Waiting for more players...", color: "#cde" },
    ]
  }
};
const mainTicks = function (game) {
  if (game.step % 60 === 0) {
    for (let ship of game.ships) {
      const stats = 88888888;
      const shipName = JSON.parse(Ship[ship.type]);
      ship.setUIComponent({
        id: "shipinfo",
        position: [1.5, 88, 16, 12],
        visible: true,
        components: [
          { type: "text", position: [0, 0, 100, 100], value: `Ship: ${shipName.name}`, color: "#cde" },
        ]
      });
      if (ship.stats < stats) ship.set({ stats: stats });
      if (!ship.custom.join) {
        ship.custom.join = true;
        ship.custom.Deaths = 0;
        ship.custom.Kills = 0;
        ACWsUIs.Blockers(ship);
      }
    }
  }
};
const waiting = function (game) {
  mainTicks(game);
  let players = game.ships.filter(ship => ship && ship.id != null);
  let text = "";
  if (players.length >= GAME_OPTIONS.required_players) {
    if (game.custom.waiting_time == null || isNaN(game.custom.waiting_time)) game.custom.waiting_time = game.step + GAME_OPTIONS.waiting_time * 60;

    if (game.step > game.custom.waiting_time) {

      players.forEach(ship => {
        ACWsUIs.Blockers(ship);
        ship.setUIComponent({
          id: "waiting_text",
          visible: false
        });
        let xx = (Math.random() - .5) * ship.game.options.map_size * 10;
        let yy = (Math.random() - .5) * ship.game.options.map_size * 10;
        ship.set({ idle: false, collider: true, invulnerable: 300, shield: 999, crystals: 720, x: xx, y: yy });
      });

      if (game.custom.startedStep == null) game.custom.startedStep = game.step + 1;
      return this.tick = main_function;
    } else text = ACWsFunctions.timeLeft(game.custom.waiting_time);
  } else {
    game.custom.waiting_time = null;
    text = `${players.length}/${GAME_OPTIONS.required_players} players required`;
    players.forEach(ship => {
      ACWsUIs.Blockers(ship);
      ship.setUIComponent(ACWsUIs.scoreboard);
      ship.setUIComponent({
        id: "Speedsters",
        visible: false
      });
      ship.set({ idle: true, collider: false, x: 0, y: 10, vx: 0, vy: 0 });
    });
  }
  if (text != game.custom.waiting_text) {
    game.custom.waiting_text = text;
    players.forEach(ship => {
      ACWsUIs.Blockers(ship);
      ship.setUIComponent(ACWsUIs.scoreboard);
      ship.setUIComponent({
        id: "Speedsters",
        visible: false
      });
      ship.set({ idle: true, collider: false, x: 0, y: 10, vx: 0, vy: 0 });
    });
    ACWsFunctions.sendWaitingText(game);
  }
}
const main_function = function (game) {
  mainTicks(game);
  if ((game.step - game.custom.startedStep) % 60 === 0) {
    for (let ship of game.ships) {
      ACWsFunctions.updateScoreboard(game);
      if (!ship.custom.gameStart) {
        ship.setUIComponent(ACWsUIs.Speedsters);
        ship.setUIComponent({
          id: "notificationUI",
          position: [25, 10, 50, 30],
          visible: true,
          components: [
            { type: "text", position: [0, -10, 100, 35], value: "Hi! Welcome to ACW's Overpowered Speedster mod", color: "#cde", align: "center" },
            { type: "text", position: [0, 15, 100, 12], value: "GET SOME TIPS!", color: "#cde", align: "center" },
            { type: "text", position: [0, 22, 100, 20], value: "Press (2) to change your look of Speedster", color: "#cde", align: "center" },
            { type: "text", position: [0, 38, 100, 12], value: "Important note!", color: "#cde", align: "center" },
            { type: "box", position: [0, 52, 100, 1], fill: "#cde", stroke: "#cde", width: 5, align: "center" },
            { type: "text", position: [0, 30, 100, 60], value: "All the Speedster are equal But there looks are changed", color: "#cde", align: "center" },
            { type: "text", position: [0, 65, 100, 20], value: "Enjoy the mod", color: "#cde", align: "center" }
          ]
        });
        hide_notificationUI = 5000;
        setTimeout(() => {
          ship.setUIComponent(ACWsUIs.hide_notification);
        }, hide_notificationUI);
        ship.custom.gameStart = true;
      }
      ship.setUIComponent({
        id: "timer",
        position: [40, 2, 20, 4],
        components: [
          { type: "text", position: [0, 0, 100, 100], value: ACWsFunctions.toTimer(), color: "#cde", align: "center" }
        ]
      });
    }
    let timerr = GAME_OPTIONS.Timer_of_match * 60
    game.custom.timeout = ACWsFunctions.timeExceeded(game.custom.startedStep, timerr * 60);
    if (game.custom.timeout) this.tick = endFunction;
  } if (game.step % 500 === 0) {
    playerList();
    game.modding.terminal.echo(`\n${GAME_OPTIONS.Commands_allow ? "[[ug;#00B9FF;]Type [[ug;#FF0000;]commands] to see all the available commands and there usage\n\n]" : " "}`);
  }
}

const endFunction = function (game) {
  mainTicks(game);
  let sorted_ships_KDratio = [...game.ships].sort((a, b) => (b.custom.Kills - b.custom.Deaths) - (a.custom.Kills - a.custom.Deaths)).slice(0, 10);
  for (let ship of game.ships) {
    ship.setUIComponent({
      id: "notificationUI",
      position: [25, 10, 50, 30],
      visible: true,
      components: [
        { type: "text", position: [0, 5, 100, 20], value: game.custom.timeout ? "Times up!" : "Game has been end by Hoster", color: game.custom.timeout ? "#cde" : "#FF0000", align: "center" },
        { type: "text", position: [0, 25, 100, 20], value: game.custom.timeout ? `${sorted_ships_KDratio[0].name} is the winner` : "No winner", color: game.custom.timeout ? "#cde" : "#FF0000", align: "center" },
        { type: "text", position: [0, 45, 100, 25], value: `Thanks for Playing GGs!`, color: "#cde", align: "center" }
      ]
    });
    ship.setUIComponent({
      id: "timer",
      position: [40, 2, 20, 4],
      visible: true,
      components: [
        { type: "text", position: [0, 0, 100, 100], value: "-- --", color: "#FF0000", align: "center" },
        { type: "text", position: [0, 0, 100, 100], value: "  :  ", color: "#cde", align: "center" }
      ]
    });
    ship.setUIComponent({
      id: "Speedsters",
      visible: false
    });
    ship.set({ collider: false });
    ship.custom.endFunctionTick = game.step;
  }
  if (!game.custom.timeout) {
    game.custom.endFunctionInfo = {
      "No Winner": " ",
      "Game has been end by Hoster": " ",
      " ": " ",
      "Your kills": 0,
      "Your deaths": 0
    }
  } else {
    game.custom.endFunctionInfo = {
      "Winner": " ",
      "- Winner Kills": 0,
      "- Winner Deaths": 0,
      " ": " ",
      "Your kills": 0,
      "Your deaths": 0
    }
  };
  this.tick = gameoverFunction;
}
const gameoverFunction = function (game) {
  mainTicks(game);
  for (let ship of game.ships) {
    if (!ship.custom.kicked && (ship.custom.endFunctionTick == null || game.step - ship.custom.endFunctionTick > 4 * 60)) {
      ship.setUIComponent(ACWsUIs.hide_notification);
    }
    if (!ship.custom.kicked && (ship.custom.endFunctionTick == null || game.step - ship.custom.endFunctionTick > 5 * 60)) {
      let endInfo = ACWsFunctions.clone(game.custom.endFunctionInfo);
      let sorted_ships_KDratio = [...game.ships].sort((a, b) => (b.custom.Kills - b.custom.Deaths) - (a.custom.Kills - a.custom.Deaths)).slice(0, 10);
      endInfo[game.custom.timeout ? "Winner" : "No Winner"] = game.custom.timeout ? sorted_ships_KDratio[0].name : " ";
      endInfo[game.custom.timeout ? "- Winner Kills" : "Game has been end by Hoster"] = game.custom.timeout ? (+sorted_ships_KDratio[0].custom.Kills || 0).toString() : " ";
      endInfo[game.custom.timeout ? "- Winner Deaths" : " "] = game.custom.timeout ? (+sorted_ships_KDratio[0].custom.Deaths || 0).toString() : " ";
      endInfo["Your Kills"] = (+ship.custom.Kills || 0).toString();
      endInfo["Your Deaths"] = (+ship.custom.Deaths || 0).toString();
      ship.gameover(endInfo);
      ship.custom.kicked = true;
    }
  }
}
if (!game.custom.start) {
  this.tick = waiting;
  game.custom.start = true;
}
this.event = function (event, game) {
  var ship = event.ship;
  switch (event.name) {
    case "ui_component_clicked":
      var component = event.id;
      if (component === "using_subspace") ACWsFunctions.Subspace_Detector(ship);
      if (ship.custom.join === true) {
        if (component == "Spectate") ACWsFunctions.spectate(ship);
        else if (component == "Speedsters") ACWsFunctions.speedsters(ship);
      }
      break;
    case "ship_spawned":
      let xx = (Math.random() - .5) * ship.game.options.map_size * 10;
      let yy = (Math.random() - .5) * ship.game.options.map_size * 10;
      ship.set({ x: xx, y: yy, invulnerable: 300, shield: 999, crystals: 720, collider: true, stats: 66666666 });
      break;
    case "ship_destroyed":
      if (ship) ship.custom.Deaths++;
      if (event.killer) event.killer.custom.Kills++;
      break;
  }
};
playerList = function () {
  game.modding.terminal.echo("[[b;#FFEE00;]Playerlist =]");
  game.modding.terminal.echo("                  [[b;#00B9FF;]Total Players :][[ib;#FFEE00;]  " + game.ships.length + " ]");
  game.modding.terminal.echo(" ");
  game.modding.terminal.echo("[[b;#FF0000;]|][[b;#00B9FF;]  PLAYER IDs  [[b;#FF0000;]|]         PLAYER NAMEs]");
  game.modding.terminal.echo("[[b;#FF0000;]|              |]");
  for (let i = 0; i < game.ships.length; i++) {
    let ship = game.ships[i];
    game.modding.terminal.echo(`[[b;#FF0000;]|]       [[bg;#F9D800;]${i}]      [[b;#FF0000;]|]       [[g;#F9D800;]${ship.name}]`);
  }
};
function onStart() {
  game.modding.terminal.echo("\n\n    [[ubg;#00B9FF;]ACW's ][[ubg;#F9D800;]" + Mod_Name + "]\n\n     [[b;#FFEE00;]Mod Creater :]  [[g;Red;]Basit#8259]\n\n   [[g;#FFFFFF;]Github link]");
  game.modding.terminal.echo("https://github.com/Modraxis/Overpowered-Speedster");
  game.modding.terminal.echo(`\n${GAME_OPTIONS.Commands_allow ? "[[ug;#00B9FF;]Type [[ug;#FF0000;]commands] to see all the available commands and there usage\n\n]" : "[[g;#FF0000;]Commands are disabled]"}`);
}
game.modding.terminal.echo = (function (echo) {
  return function (text) {
    if (!isNaN(text)) echo.call(this, `[[b;#00B9FF;]${text}]`);
    else if (/^https?:\/\//i.test(text)) echo.call(this, text);
    else echo.call(this, `[[b;#00B9FF;]${text}]`);
  };
})(game.modding.terminal.echo);
game.modding.tick = function (t) {
  this.game.tick(t);
  if (this.context.tick !== null) this.context.tick(this.game);
};
if (GAME_OPTIONS.Commands_allow) {
  function makeCommand(commandName, commandFunction, defaultReason = "No reason provided") {
    const echo = game.modding.terminal.echo;
    const gameCommands = game.modding.commands;
    gameCommands[commandName] = function (req) {
      const args = req.trim().split(/\s+/);
      if (commandName !== "end" && commandName !== "sunall" && commandName !== "commands" && commandName !== "playerlist") {
        const id = Number(args[1]);
        if (isNaN(id) || id < 0 || id >= game.ships.length) {
          echo(`[[g;#FF0000;]Error: Invalid ship ID] [[g;#FFDD00;]${id}]`);
          return;
        }
        const player = game.ships[id];
        const playerName = `[[g;#FFDD00;]${player.name}]`;
        const reason = args.slice(2).join(" ") || defaultReason;
        const { successMessage, reasonMessage } = commandFunction(player, reason);
        echo(`[[b;#00FF00;]Success:] [[g;#00FF00;]${successMessage.replace("%n", playerName)}]`);
        if (reasonMessage) {
          echo(`[[b;#00BFFF;]Reason:] [[g;#00BFFF;]${reasonMessage}]`);
        }
      } else {
        const { successMessage, reasonMessage } = commandFunction();
        echo(`[[b;#00FF00;]Success:] [[g;#00FF00;]${successMessage}]`);
        if (reasonMessage) {
          echo(`[[b;#00BFFF;]Reason:] [[g;#00BFFF;]${reasonMessage}]`);
        }
      }
    };
  }
  makeCommand("commands", () => {
    const successMessage = "\n [[g;#00FF00;]Here are the available commands]:\n" +
      "  [[g;#FFDD00;]commands]:\n   [[g;#00FFFF;]Show descriptions and usage of all available commands.]\n" +
      "  [[g;#FFDD00;]kick ]<[[g;#FF0000;]id]> <[[g;#FF0000;]reason]> :\n   [[g;#00FFFF;]Kick a player with the specified ID and reason.]\n" +
      "  [[g;#FFDD00;]kill ]<[[g;#FF0000;]id]> :\n   [[g;#00FFFF;]Kill a player with the specified ID.]\n" +
      "  [[g;#FFDD00;]sunall]:\n   [[g;#00FFFF;]Teleport all players to the sun.]\n" +
      "  [[g;#FFDD00;]heal ]<[[g;#FF0000;]id]> :\n   [[g;#00FFFF;]Heal a player with the specified ID.]\n" +
      "  [[g;#FFDD00;]setspectate ]<[[g;#FF0000;]id]> :\n   [[g;#00FFFF;]Set spectate to a player with the specified ID.]\n" +
      "  [[g;#FFDD00;]removespectate ]<[[g;#FF0000;]id]> :\n   [[g;#00FFFF;]Remove spectate to a player with the specified ID.]\n" +
      "  [[g;#FFDD00;]playerlist]:\n   [[g;#00FFFF;]To see the list of players.]\n" +
      "  [[g;#FFDD00;]end]:\n   [[g;#00FFFF;]To End the game.]\n";
    return { successMessage };
  });
  makeCommand("kick", (player, reason) => {
    player.gameover({
      "You have been kicked": reason,
    });
    const successMessage = `%n has been kicked!`;
    const reasonMessage = reason;
    return { successMessage, reasonMessage };
  });
  makeCommand("kill", (player) => {
    player.set({ kill: true });
    const successMessage = `%n has been killed!`;
    return { successMessage };
  });
  makeCommand("sunall", () => {
    for (const player of game.ships) {
      player.set({ x: 0, y: 0 });
    }
    const successMessage = "All players are teleported to the sun!";
    return { successMessage };
  });
  makeCommand("heal", (player) => {
    player.set({ shield: 1000, crystals: 720 });
    const successMessage = `%n has been heal!`;
    return { successMessage };
  });
  makeCommand("setspectate", (player) => {
    player.setUIComponent(ACWsUIs.Spectate);
    const successMessage = `Spectate has been Enabled for %n!`;
    return { successMessage };
  });
  makeCommand("removespectate", (player) => {
    player.setUIComponent({ id: "Spectate", visible: false });
    const successMessage = `Spectate has been disabled for %n!`;
    return { successMessage };
  });
  makeCommand("playerlist", () => {
    const successMessage = `Here is the list of players!`;
    playerList();
    return { successMessage };
  });
  makeCommand("end", () => {
    this.tick = endFunction;
    const successMessage = `Game has been end!\n[[g;#FF0000;]If mod is not stop then you need to reload the this Tab]`;
    return { successMessage };
  });
}
