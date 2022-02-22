  const vw = window.innerWidth
  const vh = window.innerHeight
  var allBalls = []
  var allPoints = []




  // YOUR CODE
  // ----------------
  function movex(allBalls) {
    
    adjustVelocitiesForColisions(allBalls)

    adjustVelocitiesForWalls(allBalls)

    for (let i = 0; i< allBalls.length;i++){
      let ball = allBalls[i]
      let x = ball.x
      let y = ball.y
      
      x = x + ball.vx
      y = y + ball.vy

      ball.x = x
      ball.y = y
      ball.style.left = x + "px";
      ball.style.top = y + "px";

    

    }
    
  }


function newMovement(allBalls,timeInterval){
setInterval(function(){
  movex(allBalls)
},timeInterval)

}
  
  function newBalls(number) {

     for (let i =0;i< number;i++){
      allBalls[i] = create();
    }
    newMovement(allBalls,20);
  }


function getAllPoints (allBalls){
  let allPoints = []


  for (let i = 0;i<allBalls.length; i++){
    let thisBall = allBalls[i]
    let x = thisBall.x
    let y = thisBall.y
    allPoints[i] = [
      [x,y],
      [x+50,y],
      [x+25,y+25],
      [x+25,y-25],
      [x+12.5,y+12.5],
      [x+12.5,y-12.5],
      [x+37.5,y+12.5],
      [x+37.5,y-12.5],
      [x+6.25,y+6.25],
      [x+6.25,y-6.25],
      [x+18.75,y+18.75],
      [x+18.75,y-18.75],
      [x+31.25,y+18.75],
      [x+31.25,y-18.75],
      [x+43.75,y+6.25],
      [x+43.75,y-6.25],
  
  ]

  }

return allPoints

}

function adjustVelocitiesForColisions(allBalls){
  //let allPoints = getAllPoints(allBalls)
  for (let i = 0;i<allBalls.length; i++){
    
    let thisBall = allBalls[i]
    let vx = thisBall.vx
    let vy = thisBall.vy
    if(thisBall.done== false){
      for (let j = 0;j<allBalls.length; j++){

        let ball2 = allBalls[j]
        let bvx = ball2.vx
        let bvy = ball2.vy
        if(i != j && isColliding(thisBall,ball2)){
          let vxini = vx
          vx = (1-1)*vx/ (1+1) + (2*1)*bvx/(2*1)
          bvx = vxini + vx - bvx

          let vyini = vy
          vy = (1-1)*vy/ (1+1) + (2*1)*bvy/(2*1)
          bvy = vyini + vy - bvy

          ball2.done = true
          thisBall.vx = vx
          thisBall.vy = vy
          ball2.vx = bvx
          ball2.vy = bvy

  /*        let nx = thisBall.x+vx
          let ny = thisBall.y +vy
          let vector = vy/vx
          let bnx = ball2.x + bvx
          let bny = ball2.y + bvy
          let bvector = bvy/bvx
          let difference = Math.sqrt(Math.abs(bnx-nx)**2+Math.abs(bny-ny)**2 )
          while (difference <= 50){
            thisBall.x = thisBall.x + 1*(vx/Math.abs(vx))
            thisBall.y = thisBall.y + 1*(vy/Math.abs(vy))*Math.abs(vector)
            ball2.x = ball2.x + 1*(bvx/Math.abs(bvx))
            ball2.y = ball2.y + 1*(bvy/Math.abs(bvy))*Math.abs(vector) 
            
            
            let nx = thisBall.x+vx
            let ny = thisBall.y +vy
            let vector = vy/vx
            let bnx = ball2.x + bvx
            let bny = ball2.y + bvy
            let bvector = bvy/bvx
            difference = Math.sqrt(Math.abs(bnx-nx)**2+Math.abs(bny-ny)**2 )
          }

*/
        }



      }
    }

  
  }
  for (let i = 0;i<allBalls.length; i++){
    allBalls[i].done = false
  }
}

function isColliding(thisBall,ball2){
  //for (let i = 0; i<16; i++){
  let difference = Math.sqrt(Math.abs(ball2.x-thisBall.x)**2+Math.abs(ball2.y-thisBall.y)**2 )

  if (difference <=50){
      return true
    }
    
  //}
  return false
}


function adjustVelocitiesForWalls(allBalls){
  for (let i = 0; i<allBalls.length; i++){
    let ball = allBalls[i]
    let x = ball.x
    let y = ball.y
    let vx = ball.vx
    let vy = ball.vy

    if ((x >= vw && vx > 0) || (x <= 0 && vx < 0)) {
      vx = -vx;
    }



    if ((y >= vh && vy > 0) || (y <= 0 && vy < 0)) {
      vy = -vy;
    }


    ball.vx = vx;
    ball.vy = vy;

    

  }

 
} 

function adjustPositionAfterCollision (ball1, ball2){

}
