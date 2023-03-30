// let m = 7,n=6;
// function abc(m,n){
//     let ans =0;
//     if(n<Math.ceil(m*0.75))(
//         )
// }

// abc(m,n)

// 	function minimumLectures(m, n)
// 	{
// 		let ans = 0;

// 		// Formula to compute
// 		if (n < Math.ceil(0.75 * m))
// 			ans = Math.ceil(((0.75 * m) - n) / 0.25);
// 		else
// 			ans = 0;

// 		return ans;
// 	}
	
// 	let M = 10, N = 6;
// 	console.log(minimumLectures(M, N));

// let str=""
// function pattern(n){
//   let nst=n;
//   let nsp=1;
//     let cst = 1;
// let id = 0 ;
// while(id<n){
//         cst=id+1
//         let csp=1;
//         if(id<1){
//             while(csp<=nsp){
//         str+="_"
//         csp++
//     }
//     while(cst<=nst){
//         str+=cst
//          str+=" "
//         cst++;
//     }
//       }
//         else{
//               while(csp<=nsp){
//         str+=" "
//         csp++
//     }
//     while(cst<=nst){
//         str+=cst
//         str+=" "
//          cst++;
//     }
//         }
//     nsp++
//     str+="\n";
//     id++
//     }
//     console.log(str)
// }
// pattern(6)

// function max(a,b,c){
//     let max=0;
//     if(a>b && a>c){
//         max=a
         
//     }else if(b>c && b>a){
//         max=b
       
//     }else{
//         max=c
//     }
//     console.log(max)
// }
// max(15, 10, 20)




// function consecutive(N)
// {
//     let str = ""
// 	let start = 1, end = Math.floor((N+1)/2);

//     while(start<=end){
//         let sum =0;
     
//         for(let i=start;i<=end;i++){
            
//             sum+=i;
//             if(sum==N){
//                     let ch = 0
//                 for(let j=start;j<=i;j++){
//                     if(ch>0){
//                         str+=","
//                     }
//                     str+=j
//                     ch++
//                 }
                
//                 str+="\n"
                
//             }
           
//         }
//         start++
//          sum=0
        
//     }
//     console.log(str)
// }
// 	let M=15
// 	consecutive(M)

// let A=[ [1,0,0,0],

//  	[0,2,0,0],

//  	[0,0,3,0],

//  	[0,0,0,4] ]
//     let ans = true;
//     const  diagonal = (A) =>{
//         for(let i=0;i<A.length;i++){
//             for(let j = 0; j<A[0].length;j++){
//                 if((i!=j)&&A[i][j]!=0){
//                     ans = false

//                 }
//             }
//         }
//         console.log(ans)
//     }

// diagonal(A)

let arr= [ 1,2,2,3,3,3,4,4,6]
function maxTwoElementAppearSame(arr){
    

}
maxTwoElementAppearSame(arr)
