const recipValidate={
    checkType:(kind)=>{
        if(kind!= "parve" && kind!="milky" && kind!="meatly")
            throw new Error("The kind need to be: milky/meatly/parve");
            
    },
    checkLevel:(level)=>{
        if(level!= "easy" && level!="middling" && level!="difficult")
            throw new Error("The level need to be: easy/middling/difficult ");
            
    }
}
export default recipValidate