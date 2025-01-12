// Map

const arr=[10,20,30,40];
const a=arr.map((element,index)=>{
    return {[element]:index+1}
})
console.log(a);

//Filter

const ar=[10,40,30,20];
const newArr=ar.filter((item)=>item%2==0)
console.log(newArr);

//Reduce

const x=[10,2,1,4,6]
const ans=arr.reduce((obj,ele,i)=>{
      obj[ele]=i+1
      return obj;
}
,{})
console.log(ans);

//Asynchronous js

const delay = (time) => 
    new Promise((resolve) => {
      setTimeout(() => resolve(true), time);
    });
  
  async function main() {
    const wait = await delay(4000);
    console.log("after 4 sec");
  }
  
  main();
  


    const delay=(time)=> new Promise((resolve)=>{
        setTimeout(()=>resolve(true),time)

    });
    const wait=await delay(4000);
    console.log("after 4 sec")


//Assignment Q1------>
    async function waitForSuccess() {
        return new Promise((resolve) => {
            setTimeout(() => resolve("Success"), 2000);
        });
    }

    (async () => {
        const result = await waitForSuccess();
        console.log(result); 
    })();
    

    // Q2----->

    const promise1 = new Promise((resolve, reject) => {
        setTimeout(resolve, 1000, 20);
      });

    const promise2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("foo");
          }, 2000);
        }
      );
      
      Promise.all([promise1, promise2]).then((values) => {
        console.log(values);
      });


    //Q3----->
    // Method 1
     function simulateApiCalls() {
        const apiCall1 = new Promise((resolve) => {
            resolve("API Call 1: Resolved immediately");
        });
    
        const apiCall2 = new Promise((_, reject) => {
            reject("API Call 2: Rejected immediately");
        });
    
        const apiCall3 = new Promise((resolve) => {
            setTimeout(() => resolve("API Call 3: Resolved after 3 seconds"), 3000);
        });
    
        Promise.allSettled([apiCall1, apiCall2, apiCall3])
            .then((results) => {
                console.log("Results of all API calls:", results);
            });
    }
    
   
    simulateApiCalls(); 
    
    // Method 2 
    async function simulateApiCalls() {
        const apiCall1 = new Promise((resolve) => {
            resolve("API Call 1: Resolved immediately");
        });
    
        const apiCall2 = new Promise((_, reject) => {
            reject("API Call 2: Rejected immediately");
        });
    
        const apiCall3 = new Promise((resolve) => {
            setTimeout(() => resolve("API Call 3: Resolved after 3 seconds"), 3000);
        });
    
        const results = await Promise.allSettled([apiCall1, apiCall2, apiCall3]);
    
        console.log("Results of all API calls:", results);
    }
    
    simulateApiCalls();
    
    //Q 4----->

    const promise1 = new Promise((resolve, reject) => {
        setTimeout(resolve, 500, 'one');
      });
      
      const promise2 = new Promise((resolve, reject) => {
        setTimeout(resolve, 100, 'two');
      });
      
      const result=await Promise.race([promise1, promise2])
        console.log(result);

   // Q 5----->

       const apiCall1 = new Promise((resolve) => {
            resolve("API Call 1: Resolved immediately");
        });
    
        const apiCall2 = new Promise((_, reject) => {
            reject("API Call 2: Rejected immediately");
        });
    
        const apiCall3 = new Promise((resolve) => {
            resolve("API Call 3: Resolved after 3 seconds");
        });
    
        Promise.all([apiCall1, apiCall2, apiCall3])
            .then((results) => {
                console.log("Results of all API calls:", results);
            });
    
//Q6

async function simulateApiCalls() {
        
    const result1=await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data1=await result1.json();

    const result2=await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data2=await result2.json();


    const result3=await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data3=await result3.json();
    console.log(data1);
    console.log(data2);
    console.log(data3);
}

simulateApiCalls();

//Q7 ------>

let sharedVar= 0;

async function async1() {
  await new Promise((res) => setTimeout(res, 200));
  sharedVar+= 1; 
}
async function async2() {
    await new Promise((res) => setTimeout(res, 100));
    sharedVar+= 2; 
  }

async function race1() {
  await Promise.all([async1(), async2()]);
  
  console.log("Final value of shared variable:", sharedVar);
}

race1();

// Q8 ------>

async function combineMethods() {
    const urls=[
        "https://jsonplaceholder.typicode.com/posts/1",
        "https://jsonplaceholder.typicode.com/posts/1",
        "https://jsonplaceholder.typicode.com/posts/1"
    ]
    const promises=urls.map((url)=>fetch(url).then((res)=>res.json()))

    const allResults=await Promise.all(promises)
    console.log(allResults)

    const fastestResults=await Promise.race(promises)
    console.log(fastestResults)
}
combineMethods()

//Q9------>


