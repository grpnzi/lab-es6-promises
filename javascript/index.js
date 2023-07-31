// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
// getInstruction("mashedPotatoes", 0, (step1) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 1, (step2) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 2, (step3) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 3, (step4) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 4, (step5) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
//   document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
// }, (error) => console.log(error));



// Iteration 1 - using callbacks
getInstruction('mashedPotatoes', 0, (step1) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`
  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`
    getInstruction("mashedPotatoes", 2, (step3) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`
      getInstruction("mashedPotatoes", 3, (step4) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`
        getInstruction("mashedPotatoes", 4, (step5) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`
          document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed potatoes are ready!</li>`
          document.querySelector("#mashedPotatoesImg").removeAttribute('hidden')
        }), (error) => console.log(error);
      }), (error) => console.log(error);
    }), (error) => console.log(error);
  }), (error) => console.log(error);
}), (error) => console.log(error);

// Iteration 2 - using promises
obtainInstruction('steak', 0)
  .then((step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
    return (obtainInstruction('steak', 1));
  })
  .catch((err) => console.log(err))
  .then((step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
    return (obtainInstruction('steak', 2));
  })
  .catch((err) => console.log(err))
  .then((step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
    return (obtainInstruction('steak', 3));
  })
  .catch((err) => console.log(err))
  .then((step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;
    return (obtainInstruction('steak', 4));
  })
  .catch((err) => console.log(err))
  .then((step5) => {
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;
    return (obtainInstruction('steak', 5));
  })
  .catch((err) => console.log(err))
  .then((step6) => {
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`;
    return (obtainInstruction('steak', 6));
  })
  .catch((err) => console.log(err))
  .then((step7) => {
    document.querySelector("#steak").innerHTML += `<li>${step7}</li>`;
    document.querySelector("#steak").innerHTML += `<li>Stake is ready!</li>`;
    document.querySelector("#steakImg").removeAttribute('hidden');
  })
  .catch((err) => console.log(err));

// Iteration 3 using async/await
async function makeBroccoli() {
  try {
    for (let step = 0; step < broccoli.length; step++) {
      const stepOrder = await obtainInstruction('broccoli', step);
      document.querySelector("#broccoli").innerHTML += `<li>${stepOrder}</li>`;
    }

    document.querySelector("#broccoli").innerHTML += `<li>Broccoli is ready!</li>`;

  } catch (err) {
    console.log(err);
  } finally {
    document.querySelector("#broccoliImg").removeAttribute('hidden');
  }
}

makeBroccoli();

// Bonus 2 - Promise all

async function makeBrussels() {
  try {
    const stepOrder0 = await obtainInstruction('brusselsSprouts', 0);
    const stepOrder1 = await obtainInstruction('brusselsSprouts', 1);
    const stepOrder2 = await obtainInstruction('brusselsSprouts', 2);
    const stepOrder3 = await obtainInstruction('brusselsSprouts', 3);
    const stepOrder4 = await obtainInstruction('brusselsSprouts', 4);
    const stepOrder5 = await obtainInstruction('brusselsSprouts', 5);
    const stepOrder6 = await obtainInstruction('brusselsSprouts', 6);
    const stepOrder7 = await obtainInstruction('brusselsSprouts', 7);

    Promise.all(stepOrder0,stepOrder1,stepOrder2,stepOrder3,stepOrder4,stepOrder5,stepOrder6,stepOrder7)
      .then(()=> {
        document.querySelector("#brusselsSprouts").innerHTML += `<li>${stepOrder0}</li>`;
        document.querySelector("#brusselsSprouts").innerHTML += `<li>${stepOrder1}</li>`;
        document.querySelector("#brusselsSprouts").innerHTML += `<li>${stepOrder2}</li>`;
        document.querySelector("#brusselsSprouts").innerHTML += `<li>${stepOrder3}</li>`;
        document.querySelector("#brusselsSprouts").innerHTML += `<li>${stepOrder4}</li>`;
        document.querySelector("#brusselsSprouts").innerHTML += `<li>${stepOrder5}</li>`;
        document.querySelector("#brusselsSprouts").innerHTML += `<li>${stepOrder6}</li>`;
        document.querySelector("#brusselsSprouts").innerHTML += `<li>${stepOrder7}</li>`;
      })
    

  } catch (err) {
    console.log(err);
  } finally {
    document.querySelector("#brusselsSprouts").innerHTML += `<li>Brussels sprouts are ready!</li>`;
    document.querySelector("#brusselsSproutsImg").removeAttribute('hidden');
  }
}

makeBrussels()