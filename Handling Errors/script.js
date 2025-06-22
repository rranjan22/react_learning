//javaScript Errors and Error Handling

const makeError = () => {
  try {
    const myName = "Dave";
    myName = "Ranjan";
    console.log(myName);
  } catch (error) {
    console.error(error);
    console.table(error);
    console.error(error.name);
    console.error(error.message);
    console.error(error.stack);
  }
};
makeError();


const customErr = () => {
    try{
        throw new Error("This is a custom Error!");
    }
    catch(error){
        console.error(error.name);
        console.error(error.message);
        console.error(error.stack);
    }
    finally{
        //this block always executes no matter what
        console.log("From the finally block");
    }
}

customErr();