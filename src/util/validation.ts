namespace App{
    export interface Validatable {
        value:string |number;
        required?:boolean;
        minLength?:number;
        maxLength?:number;
        min?: number;
        max?:number;
    }
    
    export function validate(validatableInput: Validatable){
        let isvalid =true;
        if(validatableInput.required){
            isvalid=isvalid && validatableInput.value.toString().trim().length !==0;
        }
        if(
        validatableInput.minLength != null &&
        typeof validatableInput.value ==='string'
        ){
         isvalid=isvalid && validatableInput.value.length >= validatableInput.minLength  
        }
        if(
            validatableInput.maxLength != null &&
            typeof validatableInput.value ==='string'
        ){
             isvalid=isvalid && validatableInput.value.length <= validatableInput.maxLength;  
        }
        if(validatableInput.min !=null && typeof validatableInput.value ==='number'){
            isvalid =isvalid && validatableInput.value >= validatableInput.min;
        }
        if(validatableInput.max !=null && typeof validatableInput.value ==='number'){
            isvalid =isvalid && validatableInput.value <= validatableInput.max;
        }
        return isvalid;
    }
    
}