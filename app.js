       /*-------------------------------------------------------*/
       // class dibn {
       //   constructor(){
       //     this.score = 0;
       //   }
   
       //   guru() {
       //     return 'mikasa';
       //   }
   
       //   hulk = (e) => {
       //     return 'es6';
       //   }
       // }
   
       // class child extends dibn {
       //   super(hulk, score); //call func +  var
   
       //   childfunc = (x) => {
       //     return 'func';
       //   }
       // }
   
       // temp = new dibn;
       // childaccess = new child;
       // score = dibn.score;
       // val = dibn.guru();
       // childFunc = val.childfunc();
   
       /*----------------------------------------------------------------------------------*/
         // var score = 0; 
         let canvas = document.getElementById("myCanvas");
         let ctx = canvas.getContext("2d");
         let a=80,b=40,c=30,d=18,e=80,f=210,g=140,h=250;
         let x = canvas.width/2;
         let y = canvas.height-30;
         let paddleHeight = 41;
         let paddleWidth = 50;
         let paddleX = (canvas.width-paddleWidth)/2;
         let paddleY = canvas.height-paddleHeight;
         let rightPressed = false;
         let leftPressed = false;
         let upPressed = false;
         let isCrash = false;
         let dx = 2;
         let dy = -2;
         let da = 31;
         let db = 31;
         let dc = 25;
         let dd = 25;
         let de = 23;
         let df = 23;
         let dg = 17;
         let dh = 8;
         
         document.addEventListener("keydown", keyDownHandler, false);
         document.addEventListener("keyup", keyUpHandler, false);
         
         function keyDownHandler(e) {
            if(e.key == "Right" || e.key == "ArrowRight") {
                rightPressed = true;
            } else if(e.key == "Left" || e.key == "ArrowLeft") {
                leftPressed = true;
            } else if(e.key == "Up" || e.key == "ArrowUp") {
                 upPressed = true;
            }
         }
         
         function keyUpHandler(e) {
            if(e.key == "Right" || e.key == "ArrowRight") {
                rightPressed = false;
            } else if(e.key == "Left" || e.key == "ArrowLeft") {
                leftPressed = false;
            } else if(e.key == "Up" || e.key == "ArrowUp") {
                 upPressed = false;
            }
         }
         
         function drawPaddle() {
            ctx.beginPath();
            // ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
            ctx.rect(paddleX, paddleY, paddleWidth, paddleHeight);
            ctx.fillStyle = "red";
            ctx.fill();
            ctx.closePath();
         }
         
         function drawBars() {
          ctx.beginPath();
          ctx.rect(a,40,100,20);
          ctx.rect(b,100,100,20);
          ctx.rect(c,140,100,20);
          ctx.rect(d,190,100,20);
          ctx.rect(e,240,100,20);
          ctx.rect(f,290,100,20);
          ctx.rect(g,340,100,20);
          ctx.rect(h,390,100,20);
          ctx.fillStyle = "#0095DD";
          ctx.fill();
          ctx.closePath();
         }
         
         function draw() {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          drawBars();
          drawPaddle();
          x += dx;
          y += dy;
          a += da;
          b += db;
          c += dc;
          d += dd;
          e += de;
          f += df;
          g += dg;
          h += dh;
          
          // collision detect for last bar - h
          if((390 < (paddleY+paddleHeight) && (390+20) >= paddleY)) {
             if(h < (paddleX+paddleWidth) && (h+100) >= paddleX) {
              Swal.fire({
                title: `SORRY,
                        YOU JUST LOST THE GAME` ,
                text: "Please play again !",
                type: 'warning',
                // showCancelButton: true,
                confirmButtonColor: '#44000d',
                // cancelButtonColor: '#d33',
                confirmButtonText: 'Play Again'
              }).then((result) => {
                if (result.value) {
                  location.reload();
                }
              })
              //  confirm("Reload pls!");
              //  location.reload();
             }
          }
          // collision detect for bar - g
          if((340 < (paddleY+paddleHeight) && (340+20) >= paddleY)) {
             if(g < (paddleX+paddleWidth) && (g+100) >= paddleX) {
              Swal.fire({
                title: `SORRY,
                        YOU JUST LOST THE GAME` ,
                text: "Please play again !",
                type: 'warning',
                // showCancelButton: true,
                confirmButtonColor: '#44000d',
                // cancelButtonColor: '#d33',
                confirmButtonText: 'Play Again'
              }).then((result) => {
                if (result.value) {
                  location.reload();
                }
              })
             }
          }
   
         //  collision detect for bar - f
          if((290 < (paddleY+paddleHeight) && (290+20) >= paddleY)) {
             if(f < (paddleX+paddleWidth) && (f+100) >= paddleX) {
              Swal.fire({
                title: `SORRY,
                        YOU JUST LOST THE GAME` ,
                text: "Please play again !",
                type: 'warning',
                // showCancelButton: true,
                confirmButtonColor: '#44000d',
                // cancelButtonColor: '#d33',
                confirmButtonText: 'Play Again'
              }).then((result) => {
                if (result.value) {
                  location.reload();
                }
              })
             }
          }
   
          //  collision detect for bar - e
          if((240 < (paddleY+paddleHeight) && (240+20) >= paddleY)) {
             if(e < (paddleX+paddleWidth) && (e+100) >= paddleX) {
              Swal.fire({
                title: `SORRY,
                        YOU JUST LOST THE GAME` ,
                text: "Please play again !",
                type: 'warning',
                // showCancelButton: true,
                confirmButtonColor: '#44000d',
                // cancelButtonColor: '#d33',
                confirmButtonText: 'Play Again'
              }).then((result) => {
                if (result.value) {
                  location.reload();
                }
              })
             }
          }
   
          //  collision detect for bar - d
          if((190 < (paddleY+paddleHeight) && (190+20) >= paddleY)) {
             if(d < (paddleX+paddleWidth) && (d+100) >= paddleX) {
              Swal.fire({
                title: `SORRY,
                        YOU JUST LOST THE GAME` ,
                text: "Please play again !",
                type: 'warning',
                // showCancelButton: true,
                confirmButtonColor: '#44000d',
                // cancelButtonColor: '#d33',
                confirmButtonText: 'Play Again'
              }).then((result) => {
                if (result.value) {
                  location.reload();
                }
              })
             }
          }
   
           //  collision detect for bar - c
           if((140 < (paddleY+paddleHeight) && (140+20) >= paddleY)) {
             if(c < (paddleX+paddleWidth) && (c+100) >= paddleX) {
              Swal.fire({
                title: `SORRY,
                        YOU JUST LOST THE GAME` ,
                text: "Please play again !",
                type: 'warning',
                // showCancelButton: true,
                confirmButtonColor: '#44000d',
                // cancelButtonColor: '#d33',
                confirmButtonText: 'Play Again'
              }).then((result) => {
                if (result.value) {
                  location.reload();
                }
              })
             }
          }
   
          //  collision detect for bar - b
          if((100 < (paddleY+paddleHeight) && (100+20) >= paddleY)) {
             if(b < (paddleX+paddleWidth) && (b+100) >= paddleX) {
              Swal.fire({
                title: `SORRY,
                        YOU JUST LOST THE GAME` ,
                text: "Please play again !",
                type: 'warning',
                // showCancelButton: true,
                confirmButtonColor: '#44000d',
                // cancelButtonColor: '#d33',
                confirmButtonText: 'Play Again'
              }).then((result) => {
                if (result.value) {
                  location.reload();
                }
              })
             }
          }
   
          // collision detect for bar - a
          if((40 < (paddleY+paddleHeight) && (40+20) >= paddleY)) {
             if(a < (paddleX+paddleWidth) && (a+100) >= paddleX) {
              Swal.fire({
                title: `SORRY,
                        YOU JUST LOST THE GAME` ,
                text: "Please play again !",
                type: 'warning',
                // showCancelButton: true,
                confirmButtonColor: '#44000d',
                // cancelButtonColor: '#d33',
                confirmButtonText: 'Play Again'
              }).then((result) => {
                if (result.value) {
                  location.reload();
                }
              })
             }
          }
          
          if(a + da+40 > canvas.width || a + da < 0) {
              da = -da;
          }
          if(b + db+60 > canvas.width || b + db < 0) {
              db = -db;
          }
          if(c + dc+40 > canvas.width || c + dc < 0) {
              dc = -dc;
          }
          if(d + dd+60 > canvas.width || d + dd < 0) {
              dd = -dd;
          }
          if(e + de+40 > canvas.width || e + de < 0) {
              de = -de;
          }
          if(f + df+60 > canvas.width || f + df < 0) {
              df = -df;
          }
          if(g + dg+40 > canvas.width || g + dg < 0) {
              dg = -dg;
          }
          if(h + dh+60 > canvas.width || h + dh < 0) {
              dh = -dh;
          }
            
          if(rightPressed) {
              paddleX += 7;
              if (paddleX + paddleWidth > canvas.width){
                  paddleX = canvas.width - paddleWidth;
              }
          }
          else if(leftPressed) {
              paddleX -= 7;
              if (paddleX < 0){
                  paddleX = 0;
              }
          } else if(upPressed) {
             paddleY -= 7;
             if(paddleY < 0) {
  //              Swal.fire({
  //    title: 'HOO! YOU WON THE GAME ! \n \n Submit your Github username\n to Reveal the Score!',
  //    input: 'text',
  //    inputAttributes: {
  //      autocapitalize: 'off'
  //    },
  //    showCancelButton: true,
  //    confirmButtonText: 'Look up',
  //    showLoaderOnConfirm: true,
  //    preConfirm: (login) => {
  //      return fetch(`//api.github.com/users/${login}`)
  //        .then(response => {
  //          if (!response.ok) {
  //            throw new Error(response.statusText)
  //          }
  //          return response.json()
  //        })
  //        .catch(error => {
  //          Swal.showValidationMessage(
  //            `Request failed: ${error}`
  //          )
  //        })
  //    },
  //    allowOutsideClick: () => !Swal.isLoading()
  //  }).then((result) => {
  //    if (result.value) {
  //      Swal.fire({
  //        title: `${result.value.login} 
  //                 \n Your Score is
  //                  100`,
  //        imageUrl: result.value.avatar_url
  //      })
  //    }
  //  })


              //  alert('yay you have won');
               Swal.fire({
                 title: `HOOO HOOOO HOOOOO ,
                         YOU WON THE GAME` ,
                 text: "Play Again to win 1 Lack !",
                 type: 'success',
                 // showCancelButton: true,
                 confirmButtonColor: '#004a2f',
                 // cancelButtonColor: '#d33',
                 confirmButtonText: 'Play Again'
               }).then((result) => {
                 if (result.value) {
                   location.reload();
                 }
               })


             }
          }


          
          x += dx;
          y += dy;
        }  
       setInterval(draw, 32);
