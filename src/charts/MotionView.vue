<template>
  <div id="app">
    <canvas id="renderCanvas" touch-action="none"></canvas>
  </div>
</template>

<script>
import * as BABYLON from 'babylonjs';
import handData from './HandData';
// import TankData from '@/assetData/TankData';
// import { Vector3 } from 'babylonjs';

// Required side effects to populate the Create methods on the mesh class. Without this, the bundle would be smaller but the createXXX methods from mesh would not be accessible.
// import '@babylonjs/core/Meshes/meshBuilder';

// Required side effects to populate the Create methods on the mesh class. Without this, the bundle would be smaller but the createXXX methods from mesh would not be accessible.

export default {
  data() {
    return {
      mymodel: '',
    };
  },
  async mounted() {
    var canvas = document.getElementById('renderCanvas');
    // Load the 3D engine
    var engine = new BABYLON.Engine(canvas, true, {
      preserveDrawingBuffer: true,
      stencil: true,
    });

    var createScene = async function() {
      let scene = await BABYLON.SceneLoader.LoadAsync(
        'http://localhost:3000/scene/',
        'CT02.babylon',
        engine,
      );

      var camera = new BABYLON.ArcRotateCamera(
        'Camera',
        0,
        0,
        0,
        new BABYLON.Vector3(0, 0, 0),
        scene,
      );

      // This positions the camera
      camera.setPosition(new BABYLON.Vector3(0, 0, 0));

      // This attaches the camera to the canvas
      camera.attachControl(canvas, false);

      camera.inertia = 0.7;
      camera.wheelPrecision = 50;

      console.log('camera', camera);

      // var box = BABYLON.MeshBuilder.CreateBox('box', {}, scene);
      // box.position.x = 2;

      // let mesh = scene.getMeshByName('hand_2').getChildMeshes()[1];
      // console.log('hand', mesh);

      // let Tank = scene.getNodeByName('Tank');

      // skeleton.bones[0].scale(100, 100, 100, true);

      // console.log(
      //   'bones[0].getPosition',
      //   skeleton.bones[0].getPosition(BABYLON.Space.LOCAL),
      // );

      let bones = scene.skeletons[0].bones;
      console.log('bones', bones);

      let handDataArr = handData.handDataArr;
      console.log('handDataArr', handDataArr);

      let cnt = handDataArr.length;
      console.log('cnt', cnt);

      let i = 0;
      // let flg = false;
      scene.beforeRender = function() {
        if (i >= cnt) {
          i = 0;
        } else {
          // let jointRotaSrcForm = 'vangles_f_index';
          // for (let k = -1; k <= 1; k++) {
          //   let jointRotaSrc =
          //     k == 1 ? jointRotaSrcForm + 1 : jointRotaSrcForm + (k + 1);
          //   bones[20 + k].setRotationQuaternion(
          //     new BABYLON.Quaternion.FromEulerAngles(
          //       BABYLON.Tools.ToRadians(handDataArr[i][jointRotaSrc]),
          //       bones[20 + k].rotation.y,
          //       bones[20 + k].rotation.z,
          //     ),
          //     BABYLON.Space.LOCAL,
          //   );
          //   if (flg === false) {
          //     console.log('jointRotaSrc', jointRotaSrc);
          //   }
          // }
          // flg = true;
          let vangleNameArr = ['pinky', 'ring', 'middle', 'index', 'thumb'];
          for (let j = 0; j < 4; j++) {
            let vangleNameForm = 'vangles_f_' + vangleNameArr[j];
            for (let k = -1; k <= 1; k++) {
              let vangleName =
                k == 1 ? vangleNameForm + k : vangleNameForm + (k + 1);
              bones[4 * (j + 2) + k].setRotationQuaternion(
                new BABYLON.Quaternion.FromEulerAngles(
                  BABYLON.Tools.ToRadians(handDataArr[i][vangleName]),
                  bones[4 * (j + 2) + k].rotation.y,
                  bones[4 * (j + 2) + k].rotation.z,
                ),
                BABYLON.Space.LOCAL,
              );
            }
          }

          // for (let j = 22; j < 25; j++) {
          //   bones[j].setRotation(
          //     new BABYLON.Vector3(handData[i], 0, 0),
          //     BABYLON.Space.LOCAL,
          //   );
          // }
          // Tank.position = data_rec[i].pos;
          // Tank.rotation = data_rec[i].rot;
          // Tank.rotation.x = data_rec[i].rx;
          // Tank.rotation.y = data_rec[i].ry;
          // Tank.rotation.z = data_rec[i].rz;
          i++;
        }
      };

      return scene;
    };

    // var createScene = function () {
    //   // This creates a basic Babylon Scene object (non-mesh)
    //   var scene = new BABYLON.Scene(engine);

    //   /********** ARC ROTATE CAMERA EXAMPLE **************************/

    //   // Creates, angles, distances and targets the camera
    //   var camera = new BABYLON.ArcRotateCamera(
    //     'Camera',
    //     0,
    //     0,
    //     10,
    //     new BABYLON.Vector3(0, 0, 0),
    //     scene,
    //   );

    //   // This positions the camera
    //   camera.setPosition(new BABYLON.Vector3(0, 0, -10));

    //   // This attaches the camera to the canvas
    //   camera.attachControl(canvas, true);

    //   /**************************************************************/

    //   // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
    //   var light = new BABYLON.HemisphericLight(
    //     'light',
    //     new BABYLON.Vector3(0, 1, 0),
    //     scene,
    //   );

    //   //Materials
    //   var redMat = new BABYLON.StandardMaterial('red', scene);
    //   redMat.diffuseColor = new BABYLON.Color3(1, 0, 0);
    //   redMat.emissiveColor = new BABYLON.Color3(1, 0, 0);
    //   redMat.specularColor = new BABYLON.Color3(1, 0, 0);

    //   var greenMat = new BABYLON.StandardMaterial('green', scene);
    //   greenMat.diffuseColor = new BABYLON.Color3(0, 1, 0);
    //   greenMat.emissiveColor = new BABYLON.Color3(0, 1, 0);
    //   greenMat.specularColor = new BABYLON.Color3(0, 1, 0);

    //   var blueMat = new BABYLON.StandardMaterial('blue', scene);
    //   blueMat.diffuseColor = new BABYLON.Color3(0, 0, 1);
    //   blueMat.emissiveColor = new BABYLON.Color3(0, 0, 1);
    //   blueMat.specularColor = new BABYLON.Color3(0, 0, 1);

    //   // Shapes
    //   var plane1 = new BABYLON.Mesh.CreatePlane(
    //     'plane1',
    //     3,
    //     scene,
    //     true,
    //     BABYLON.Mesh.DOUBLESIDE,
    //   );
    //   plane1.position.x = -3;
    //   plane1.position.z = 0;
    //   plane1.material = redMat;

    //   var plane2 = new BABYLON.Mesh.CreatePlane(
    //     'plane2',
    //     3,
    //     scene,
    //     true,
    //     BABYLON.Mesh.DOUBLESIDE,
    //   );
    //   plane2.position.x = 3;
    //   plane2.position.z = -1.5;
    //   plane2.material = greenMat;

    //   var plane3 = new BABYLON.Mesh.CreatePlane(
    //     'plane3',
    //     3,
    //     scene,
    //     true,
    //     BABYLON.Mesh.DOUBLESIDE,
    //   );
    //   plane3.position.x = 3;
    //   plane3.position.z = 1.5;
    //   plane3.material = blueMat;

    //   var ground = BABYLON.Mesh.CreateGround('ground1', 10, 10, 2, scene);

    //   console.log('light', light);
    //   console.log('ground', ground);
    //   scene.debugLayer.show();

    //   return scene;
    // };

    // call the createScene function
    var scene = await createScene();
    console.log('engie.getFps()', engine.getFps());
    // run the render loop
    engine.runRenderLoop(function() {
      scene.render();
    });
    // the canvas/window resize event handler
    window.addEventListener('resize', function() {
      engine.resize();
    });
  },
};
</script>

<style scnoped>
#renderCanvas {
  width: 100%;
  height: 100%;
  display: block;
  font-size: 0;
}
/* div {
  width: 100%;
  height: 100%;
} */
</style>
